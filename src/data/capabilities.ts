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
