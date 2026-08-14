import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { Reveal } from "./Reveal";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28"
    >
      <Reveal className="relative overflow-hidden border border-line bg-panel px-6 py-12 sm:px-10 sm:py-16">
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan/10 blur-[90px]" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow">
              <span>07</span>Contact
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-5xl leading-[0.92] tracking-[-0.065em] text-slate-50 sm:text-6xl">
              Have a role or a product in mind?
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-mist">
              I’m open to thoughtful engineering opportunities and product
              collaborations. Let’s make something useful.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <Button asChild>
              <a href="mailto:siddhartha.yadav.1042@gmail.com">
                Start a conversation <Mail className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="/Resume.pdf" download="Resume.pdf">
                Download Resume <Download className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="relative mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-5">
          <a
            className="contact-link"
            href="https://github.com/SIDD2506yadav"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-4 w-4" /> GitHub{" "}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/sidyadav2506/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn{" "}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            className="contact-link"
            href="mailto:siddhartha.yadav.1042@gmail.com"
          >
            <Mail className="h-4 w-4" /> Email{" "}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
