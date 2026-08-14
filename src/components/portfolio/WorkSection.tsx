import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "./data";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

export function WorkSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="work"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28"
    >
      <Reveal>
        <SectionIntro
          index="05"
          eyebrow="Selected work"
          title="What I’m building."
          copy="A selection of product work, with deeper case studies on the way."
        />
      </Reveal>
      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <Reveal key={project.number} delay={index * 0.08}>
              <motion.article
                whileHover={reducedMotion ? undefined : { y: -7 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group relative flex min-h-[360px] flex-col overflow-hidden border border-line bg-panel/70 p-6 transition-colors hover:border-cyan/70 sm:p-7"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan/0 blur-3xl transition-all duration-500 group-hover:bg-cyan/15" />
                <div className="relative flex items-start justify-between">
                  <span className="font-mono text-xs text-cyan">
                    {project.number}
                  </span>
                  <Icon
                    className="h-5 w-5 text-mist transition-colors group-hover:text-cyan"
                    strokeWidth={1.5}
                  />
                </div>
                {project.image && project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="relative mt-5 block overflow-hidden border border-line focus-visible:outline-none"
                  >
                    <img
                      src={project.image}
                      alt="Koflip website home page"
                      className="aspect-[16/8.5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </a>
                )}
                <div className="relative mt-auto">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyan">
                    {project.type}
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-none tracking-[-0.055em] text-slate-50">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-mist">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-line px-2 py-1 font-mono text-[10px] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative mt-6 flex items-center justify-between border-t border-line pt-4">
                  {project.url ? (
                    <a
                      className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-cyan transition-colors hover:text-white"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit live site <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <>
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-mist">
                        Case study coming soon
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-cyan" />
                    </>
                  )}
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
