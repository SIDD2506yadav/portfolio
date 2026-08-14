# Siddhartha — Portfolio

> A modern, interactive full-stack developer portfolio built with React, TypeScript, Tailwind CSS, Framer Motion, and an OpenAI-powered portfolio assistant.

This portfolio showcases Siddhartha's experience, technical capabilities, selected work, development process, and contact information while providing an interactive AI assistant for questions about his professional background.

## 📸 Screenshots

> **Screenshot placeholders:** Replace the paths below with your actual screenshots once they are added to the repository. A suggested `docs/screenshots/` structure is included for easy organization.

### Hero / Landing Page
<img width="1512" height="826" alt="image" src="https://github.com/user-attachments/assets/7e84f7ca-52e8-48a2-9cc2-c31219838508" />


### About & Experience
<img width="1512" height="826" alt="image" src="https://github.com/user-attachments/assets/af9985a3-3605-471c-9452-b86e274b91ba" />
<img width="1512" height="826" alt="image" src="https://github.com/user-attachments/assets/7a0c1afc-c079-44d8-a2cf-f803317297ce" />


### Capabilities
<img width="1512" height="826" alt="image" src="https://github.com/user-attachments/assets/fdbb09b1-4569-4a24-83ef-ec1ac79d2688" />


### Selected Work
<img width="1512" height="826" alt="image" src="https://github.com/user-attachments/assets/47c35b05-4d2b-40ef-8518-6e82cdccaf8b" />


### AI Portfolio Assistant
<img width="1512" height="826" alt="image" src="https://github.com/user-attachments/assets/bd3d7221-1e7b-40ea-b06f-097aa77a1e84" />


### Mobile / Responsive View
<img width="373" height="669" alt="image" src="https://github.com/user-attachments/assets/2c84cbe5-dfe7-422e-8922-c706132e9595" /> <img width="373" height="669" alt="image" src="https://github.com/user-attachments/assets/5fb46b1b-d9d3-41fe-bb54-b3b0a020df71" /> <img width="373" height="669" alt="image" src="https://github.com/user-attachments/assets/f6925c19-1193-49de-b081-1f451e9a5602" />




> **Tip:** If you do not want to commit screenshots yet, you can keep these placeholders as-is. Once images are available, add them under `docs/screenshots/` using the filenames above and they will automatically render on GitHub.

## ✨ Features

### Portfolio experience

- **Interactive hero section** with animated headline and project-type selector.
- **Build-path selector** for AI chatbot, dashboard, SaaS application, and API integration projects.
- **About section** introducing the developer and engineering approach.
- **Experience timeline** with roles, dates, and key achievements.
- **Capabilities map** covering Frontend, Backend, AI, and Cloud.
- **Supporting capabilities** covering dashboards, data visualization, integrations, databases, Shopify, GA4, and webhooks.
- **Selected work section** with project descriptions, technology stacks, previews, and live links where available.
- **Development process** presented as Discover → Design → Build → Launch.
- **Contact section** with email, GitHub, LinkedIn, and downloadable resume.

### Motion & interactions

- Word-by-word hero headline animation.
- Scroll-based reveal animations.
- Scroll progress indicator.
- Cursor-following ambient glow.
- Technical background grid that fades as the user scrolls.
- Animated section transitions and micro-interactions.
- Hover elevation and image parallax on project cards.
- Reduced-motion support via Framer Motion's `useReducedMotion`.
- Keyboard-accessible project selector with arrow-key navigation.
- Animated terminal-style prompt with blinking cursor.

### AI portfolio assistant

The portfolio includes a floating AI chat widget that lets visitors ask questions without leaving the website.

- Powered by **OpenAI `gpt-4o-mini`**.
- Answers questions about experience, skills, projects, availability, and contact details.
- Uses curated portfolio context to keep answers grounded in known information.
- Includes predefined conversation starters.
- Maintains recent conversation history.
- Automatically scrolls to new messages and focuses the input when opened.
- Closes when clicking outside the chat window.
- Includes loading and error states.
- Supports Markdown responses with headings, emphasis, links, lists, inline code, code blocks, blockquotes, and horizontal rules.

### Chat API & security

The AI assistant is backed by a Vercel serverless function at `/api/chat`.

- Accepts **only `POST` requests**; other methods return `405`.
- Validates request bodies and message structure.
- Accepts only `user` and `assistant` message roles.
- Rejects empty or malformed messages.
- Limits conversation history to the most recent **6 messages**.
- Limits individual messages to **300 characters** before sending them to the model.
- Requires the final message to be from the user.
- Applies IP-based rate limiting of **5 requests per minute**.
- Keeps the OpenAI API key server-side through `OPENAI_API_KEY`.
- Handles upstream AI failures with controlled client-facing errors.
- Uses a constrained system prompt so the assistant does not invent portfolio facts or reveal internal instructions.

## 🧰 Tech Stack

### Frontend

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**
- **React Markdown**
- **remark-gfm**

### Backend / AI

- **Vercel Node.js serverless functions**
- **OpenAI API**
- **Node.js**

### Developer tooling

- **ESLint**
- **TypeScript ESLint**
- **PostCSS / Autoprefixer**

## 📁 Project Structure

```text
.
├── api/
│   └── chat.ts                    # Serverless AI chat endpoint
├── docs/
│   └── screenshots/               # README screenshot assets
│       ├── hero.png
│       ├── about-experience.png
│       ├── capabilities.png
│       ├── work.png
│       ├── ai-chat.png
│       └── mobile.png
├── public/
│   ├── Resume.pdf                 # Downloadable resume
│   ├── favicon.svg                # Site favicon
│   └── koflip-preview.png         # Project preview
├── src/
│   ├── components/
│   │   ├── portfolio/
│   │   │   ├── AboutSection.tsx
│   │   │   ├── CapabilityMap.tsx
│   │   │   ├── ChatWidget.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── CursorGlow.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── Markdown.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── Reveal.tsx
│   │   │   ├── ScrollProgress.tsx
│   │   │   ├── SectionIntro.tsx
│   │   │   ├── WorkSection.tsx
│   │   │   ├── chatClient.ts
│   │   │   └── data.ts               # Portfolio content and data
│   │   └── ui/
│   │       └── button.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🤖 How the AI Assistant Works

```text
Visitor
   │
   ▼
ChatWidget
   │
   ▼
chatClient.ts
   │  POST /api/chat
   ▼
Vercel Serverless Function
   │
   ├── Validate request
   ├── Rate-limit by IP
   ├── Trim conversation history
   ├── Apply portfolio context + system instructions
   │
   ▼
OpenAI API (gpt-4o-mini)
   │
   ▼
Markdown response
   │
   ▼
Markdown renderer
   │
   ▼
ChatWidget
```

The assistant is intentionally constrained to portfolio information stored in the API context rather than acting as a general-purpose chatbot.

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- npm
- An OpenAI API key for the AI assistant

### Installation

```bash
npm install
```

### Environment variables

Create a `.env.local` file for local development:

```env
OPENAI_API_KEY=your_openai_api_key
```

Never commit the API key to source control.

### Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

> **Note:** `/api/chat` is implemented as a Vercel serverless function. For the complete AI chat experience, run the project in a Vercel-compatible environment or with the Vercel CLI locally.

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and build the application for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## ✏️ Updating Portfolio Content

Most visible portfolio content is centralized in `src/components/portfolio/data.ts`.

Update these structures to change the relevant sections:

- `navItems` — navigation
- `buildOptions` — interactive hero options
- `experience` — professional experience
- `capabilityAreas` — frontend, backend, AI, and cloud capabilities
- `projects` — selected work and stacks
- `processSteps` — development process
- `supportingCapabilities` — additional capabilities
- `metrics` — portfolio metrics

The AI assistant's professional context is maintained separately in `api/chat.ts` through `SIDDHARTHA_CONTEXT`. Keep it synchronized with the visible portfolio when professional details change.

## 🧪 Quality & Accessibility

- Semantic section structure and navigation anchors.
- Keyboard navigation for the hero project selector.
- Visible focus states for interactive controls.
- Reduced-motion support.
- Descriptive project image `alt` text.
- Safe handling of external links.
- Chat input focus management.
- Loading and error feedback for asynchronous chat requests.

## 🚀 Deployment

The frontend can be deployed to a static hosting platform, while `/api/chat` requires a serverless-compatible environment such as Vercel.

1. Build with `npm run build`.
2. Configure `OPENAI_API_KEY` in the hosting provider's environment variables.
3. Deploy to Vercel or another platform supporting the included serverless API function.
4. Verify `/api/chat` and the AI chat widget after deployment.

## 📌 Featured Project

### Koflip

A Miami real-estate investment platform featuring interactive deal tools, portfolio views, and a ChatGPT-powered AI assistant.

- **Frontend:** React, shadcn/ui
- **Backend:** Node.js
- **AI:** OpenAI APIs
- **Live:** [koflip.com](https://koflip.com/)

## 📬 Contact

- **Email:** [siddhartha.yadav.1042@gmail.com](mailto:siddhartha.yadav.1042@gmail.com)
- **GitHub:** [github.com/SIDD2506yadav](https://github.com/SIDD2506yadav)
- **LinkedIn:** [linkedin.com/in/sidyadav2506](https://linkedin.com/in/sidyadav2506/)

## 📄 License

This project is a personal portfolio. The source code is available for reference, but the portfolio content, resume, branding, and project assets should not be reused without permission.
