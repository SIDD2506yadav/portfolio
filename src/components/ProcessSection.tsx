import { processSteps } from "@/data/process";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

export function ProcessSection() {
  return (
    <section className="border-y border-line/70 bg-panel/30">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal><SectionIntro index="06" eyebrow="How I work" title="Clear process. Reliable delivery." /></Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => <Reveal key={step.title} delay={index * 0.08}><div className="border-l border-line pl-5"><p className="font-mono text-xs text-cyan">0{index + 1}</p><h3 className="mt-6 font-display text-2xl tracking-[-0.04em] text-slate-100">{step.title}</h3><p className="mt-2 text-sm leading-6 text-mist">{step.copy}</p></div></Reveal>)}
        </div>
      </div>
    </section>
  );
}
