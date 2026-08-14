import { experience } from "./data";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28"
    >
      <Reveal>
        <SectionIntro
          index="03"
          eyebrow="Experience"
          title="Built in the real world."
          copy="Product work shaped by scale, speed, and the people who use it."
        />
      </Reveal>
      <div className="divide-y divide-line border-y border-line">
        {experience.map((job, index) => (
          <Reveal key={job.company} delay={index * 0.08}>
            <article className="grid gap-6 py-8 md:grid-cols-[0.8fr_1.4fr] md:py-10">
              <div>
                <p className="font-display text-xl tracking-[-0.03em] text-slate-100">
                  {job.role}
                </p>
                <p className="mt-1 text-sm text-cyan">{job.company}</p>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-mist">
                  {job.range}
                </p>
              </div>
              <ul className="space-y-3">
                {job.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-6 text-mist"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
