import { Bot, type LucideIcon } from "lucide-react";

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
];
