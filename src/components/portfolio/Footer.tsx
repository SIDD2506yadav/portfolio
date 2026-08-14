import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { navItems } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-5">
        {/* #22 — Quick-links row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-[10px] uppercase tracking-[0.13em] text-mist transition-colors hover:text-cyan"
            >
              {item}
            </a>
          ))}
          <span className="hidden text-line sm:block">|</span>
          <a
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.13em] text-mist transition-colors hover:text-cyan"
            href="https://github.com/SIDD2506yadav"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
          <a
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.13em] text-mist transition-colors hover:text-cyan"
            href="https://www.linkedin.com/in/sidyadav2506/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-3.5 w-3.5" />
            LinkedIn
          </a>
          <a
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.13em] text-mist transition-colors hover:text-cyan"
            href="mailto:siddhartha.yadav.1042@gmail.com"
            aria-label="Email"
          >
            <Mail className="h-3.5 w-3.5" />
            Email
          </a>
        </div>

        {/* Copyright row */}
        <div className="flex flex-col justify-between gap-2 border-t border-line/50 pt-4 font-mono text-[10px] uppercase tracking-[0.13em] text-mist sm:flex-row">
          <span>© {new Date().getFullYear()} Siddhartha</span>
          <span>Designed &amp; built for the web</span>
        </div>
      </div>
    </footer>
  );
}
