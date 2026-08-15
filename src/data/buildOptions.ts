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
