import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

// Initialize OpenAI Client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ---------------------------------------------------------------------------
// MASTER PORTFOLIO CONTEXT
// ---------------------------------------------------------------------------
const SIDDHARTHA_CONTEXT = `
NAME: Siddhartha
ROLE: Full-Stack Developer & Product Partner
LOCATION: Noida, India
EMAIL: siddhartha.yadav.1042@gmail.com
PHONE: +91 9193547056
LINKEDIN: https://linkedin.com/in/sidyadav2506
GITHUB: https://github.com/SIDD2506yadav

AVAILABILITY & WORK PREFERENCES:
- Status: Available for both Full-time roles and Contract/Freelance projects.
- Work Setup: Open to Remote positions, Hybrid, and Relocation.
- Notice Period: 30 days notice period at current employer.
- Rates & Scheduling: Freelance rates are project-dependent. Contact directly via email or LinkedIn for custom quotes or meeting requests.

SUMMARY & CODING PHILOSOPHY:
- Software Engineer with 3+ years of experience building fast, scalable web applications using React.js, Node.js, and Cloud infrastructure.
- Extremely meticulous about code structure, architecture, clean code practices, and formatting.
- Heavily leverages modern AI development tools (Cursor, ChatGPT) daily to accelerate development, write robust unit/integration tests, and optimize workflows.

WORK EXPERIENCE:
1. Software Development Engineer 2 @ Devo (Mar 2024 - Present | Noida, India)
   - Migrated a 50K+ line production codebase from React 16 to React 18 with zero downtime, maintaining full backward compatibility.
   - Built visual automation workflows using JointJS for complex logic design and management.
   - Optimized frontend build pipeline with Webpack and lazy loading, reducing initial bundle size by 50%.
   - Developed and maintained 100+ unit and integration tests using AI-assisted tools (Cursor) to improve software reliability.

2. Founding Software Engineer @ Lumino Labs (Sep 2023 - Feb 2024 | Noida, India)
   - Architected and launched the Lumino Shopify App (revenue optimization mini-apps & analytics dashboards for D2C brands).
   - Partnered directly with CTO and founders to define requirements and ship the MVP in under 6 weeks.
   - Built serverless integration middleware with AWS Lambda, Google Pub/Sub, and Node.js to sync Shopify event data with GA4, Clevertap, and HubSpot with 100% reliability.
   - Optimized API performance and implemented caching mechanisms to lower latency.

3. Software Developer Intern @ Byju's Exam Prep (Jan 2023 - Sep 2023 | Noida, India)
   - Built a feature allowing teachers to create and assign mock tests.
   - Redesigned live class UI components, driving a 30% increase in user interaction and engagement.
   - Delivered full-stack modules with React.js, Express.js, and GraphQL.

EDUCATION:
- B.Tech in Computer Science & Engineering (Aug 2019 - Jun 2023)
  JSS Academy of Technical Education, Noida (CGPA: 8.7 / 10).

TECHNICAL SKILLS:
- Languages: JavaScript (ES6+), TypeScript, Java, Kotlin, HTML, CSS, Liquid
- Frontend: React.js, Next.js, Webpack, Redux, ANT Design, Tailwind CSS, JointJS
- Backend: Node.js, Express.js, GraphQL, REST APIs, Microservices
- Databases & Caching: PostgreSQL, MySQL, BigQuery, Redis
- Cloud, DevOps & Tools: AWS Lambda, Google Pub/Sub, Cloudflare, Git, GitHub Actions, CI/CD, Agile/Scrum

PROJECT HIGHLIGHTS:
1. Koflip (Client Freelance Project)
   - Description: Miami real-estate investment platform with interactive deal tools, portfolio views, and a ChatGPT-powered AI assistant.
   - Live URL: https://koflip.com/
   - Tech: React, shadcn/ui, Node.js, OpenAI APIs.
`;

// ---------------------------------------------------------------------------
// RATE LIMITER (5 requests / min per IP)
// ---------------------------------------------------------------------------
const rateLimitMap = new Map<string, { count: number; startTime: number }>();
const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 5;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // IP Rate Limiting
  const ip =
    (req.headers["x-forwarded-for"] as string) ||
    req.socket.remoteAddress ||
    "anonymous";
  const currentTime = Date.now();

  if (rateLimitMap.has(ip)) {
    const rateData = rateLimitMap.get(ip)!;
    if (currentTime - rateData.startTime < WINDOW_MS) {
      if (rateData.count >= MAX_REQUESTS) {
        return res
          .status(429)
          .json({
            error:
              "Rate limit reached. Please wait a minute before sending another message.",
          });
      }
      rateData.count++;
    } else {
      rateLimitMap.set(ip, { count: 1, startTime: currentTime });
    }
  } else {
    rateLimitMap.set(ip, { count: 1, startTime: currentTime });
  }

  try {
    const rawMessage = req.body?.message || "";
    const userMessage = rawMessage.slice(0, 300).trim(); // Cap input length

    if (!userMessage) {
      return res.status(400).json({ error: "Message cannot be empty" });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      max_tokens: 150, // Cap output length
      temperature: 0.4,
      messages: [
        {
          role: "system",
          content: `You are an AI assistant on Siddhartha's personal portfolio website. 
                    Your goal is to assist recruiters, potential clients, and developers asking about Siddhartha.

                    RESPONSE RULES:
                    - Base answers ONLY on the provided CONTEXT.
                    - Keep answers concise, professional, and directly to the point (2 to 3 sentences maximum).
                    - If asked about live links, explicitly provide his GitHub, LinkedIn, or the Koflip link (https://koflip.com/).
                    - If asked about hiring, mention his 30-day notice period, availability for Remote/Relocation, and direct contact details.
                    - If asked something outside this context, politely tell the user you don't have that information and suggest contacting Siddhartha directly via email (${"siddhartha.yadav.1042@gmail.com"}).

                    CONTEXT:
                    ${SIDDHARTHA_CONTEXT}`,
        },
        { role: "user", content: userMessage },
      ],
    });

    const reply =
      completion.choices[0]?.message?.content ||
      "Sorry, I could not generate a response.";
    return res.status(200).json({ reply });
  } catch (error: any) {
    console.error("OpenAI API Error:", error);
    if (error.status === 429) {
      return res
        .status(503)
        .json({ error: "AI service busy. Please try again shortly." });
    }
    return res
      .status(500)
      .json({ error: "An internal server error occurred." });
  }
}
