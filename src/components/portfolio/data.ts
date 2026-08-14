import {
  Bot,
  Braces,
  Cloud,
  Code2,
  Layers3,
  Network,
  Server,
  type LucideIcon,
} from "lucide-react";

export const navItems = [
  "About",
  "Experience",
  "Capabilities",
  "Work",
  "Contact",
] as const;

export const buildOptions = [
  {
    id: "ai-chatbot",
    label: "AI chatbot",
    response:
      "Embed a useful AI assistant with OpenAI APIs, a secure backend, and a polished chat experience.",
    stack: "React · OpenAI APIs · Node.js",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    response:
      "Turn product or business data into a clear, fast dashboard people can use to make decisions.",
    stack: "React · shadcn/ui · Data visualization",
  },
  {
    id: "saas-app",
    label: "SaaS app",
    response:
      "Take a product from core UI and backend APIs through integrations, testing, and launch.",
    stack: "React · Node.js · Express",
  },
  {
    id: "api-integration",
    label: "API integration",
    response:
      "Connect services reliably with thoughtful API design, event workflows, and observability.",
    stack: "Node.js · REST APIs · Cloud",
  },
] as const;

export const experience = [
  {
    role: "Software Development Engineer 2",
    company: "Devo",
    range: "Mar 2024 — Present",
    highlights: [
      "Migrated a 50K+ line production codebase from React 16 to React 18 with zero downtime.",
      "Built visual automation workflows with JointJS for complex logic design.",
      "Reduced initial bundle size by 50% through Webpack optimization and lazy loading.",
    ],
  },
  {
    role: "Founding Software Engineer",
    company: "Lumino Labs",
    range: "Sep 2023 — Feb 2024",
    highlights: [
      "Launched a Shopify app combining revenue optimization mini-apps and analytics dashboards.",
      "Partnered with founders to define requirements and deliver an MVP in under six weeks.",
      "Built analytics pipelines, data visualizations, caching, and API improvements.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Byju's Exam Prep",
    range: "Jan 2023 — Sep 2023",
    highlights: [
      "Built a mock-test creation and assignment experience for teachers.",
      "Redesigned live class components, improving engagement and interaction by 30%.",
      "Delivered full-stack modules with React, Express, and GraphQL.",
    ],
  },
];

export type CapabilityArea = {
  id: "frontend" | "backend" | "ai" | "cloud";
  label: string;
  icon: LucideIcon;
  description: string;
  tools: string[];
  outcome: string;
};

export const capabilityAreas: CapabilityArea[] = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Code2,
    description:
      "Interfaces that feel deliberate, responsive, and easy to extend.",
    tools: ["React", "TypeScript", "shadcn/ui", "Redux"],
    outcome:
      "Polished product surfaces that turn complex workflows into clear interactions.",
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    description:
      "APIs and services designed around dependable product behavior.",
    tools: ["Node.js", "Express", "GraphQL", "REST APIs"],
    outcome:
      "A clean, maintainable foundation for product features and integrations.",
  },
  {
    id: "ai",
    label: "AI",
    icon: Bot,
    description:
      "Useful AI features that fit naturally into a real product workflow.",
    tools: ["OpenAI APIs", "Chatbots", "Workflow automation", "Prompt design"],
    outcome:
      "Assistants and automations that save people time without getting in their way.",
  },
  {
    id: "cloud",
    label: "Cloud",
    icon: Cloud,
    description:
      "Reliable delivery paths from local development to production.",
    tools: ["AWS Lambda", "Cloudflare", "CI/CD", "Observability"],
    outcome:
      "Fast, resilient releases with the visibility to keep improving them.",
  },
];

export const projects: Array<{
  number: string;
  title: string;
  type: string;
  description: string;
  stack: string[];
  icon: LucideIcon;
  url?: string;
  image?: string;
}> = [
  {
    number: "01",
    title: "Koflip",
    type: "Real-estate investment platform",
    description:
      "A Miami real-estate platform connecting homeowners and investors, with interactive deal tools, portfolio views, and a ChatGPT-powered AI assistant.",
    stack: ["React", "shadcn/ui", "Node.js", "OpenAI APIs"],
    icon: Bot,
    url: "https://koflip.com/",
    image: "/koflip-preview.png",
  },
  {
    number: "02",
    title: "Analytics Command Center",
    type: "Dashboard platform",
    description:
      "A decision-ready dashboard for turning scattered business signals into one clear operating view.",
    stack: ["React", "shadcn/ui", "Express"],
    icon: Layers3,
  },
  {
    number: "03",
    title: "Connected SaaS Workflow",
    type: "End-to-end integration",
    description:
      "A reliable web product that connects services, processes events, and moves work forward automatically.",
    stack: ["Node.js", "APIs", "Cloud"],
    icon: Braces,
  },
];

export const processSteps = [
  {
    title: "Discover",
    copy: "Clarify the problem, goals, and the people using it.",
  },
  {
    title: "Design",
    copy: "Shape a simple, usable solution and the technical path.",
  },
  {
    title: "Build",
    copy: "Build responsive interfaces, services, and integrations.",
  },
  {
    title: "Launch",
    copy: "Test, refine, and ship a product ready for real use.",
  },
];

export const storySections = [
  "top",
  "about",
  "experience",
  "capabilities",
  "work",
  "contact",
];

export const supportingCapabilities = [
  {
    icon: Layers3,
    label: "Dashboards",
    detail: "Analytics · data visualization · Shopify",
  },
  {
    icon: Network,
    label: "Data & integrations",
    detail: "PostgreSQL · Redis · GA4 · webhooks",
  },
];

export const metrics = [
  { value: "3+", label: "Years building products" },
  { value: "50%", label: "Bundle size reduction" },
  { value: "6 wks", label: "MVP to production" },
] as const;

