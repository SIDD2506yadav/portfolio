import { Bot, Braces, Layers3, type LucideIcon } from "lucide-react";

export type Project = {
  number: string;
  title: string;
  type: string;
  description: string;
  stack: string[];
  icon: LucideIcon;
  url?: string;
  image?: string;
};

export const projects: Project[] = [
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
