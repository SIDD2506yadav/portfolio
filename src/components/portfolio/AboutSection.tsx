import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

export function AboutSection() {
  return (
    <section id="about" className="border-y border-line/70 bg-panel/30">
      <Reveal className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionIntro
          index="02"
          eyebrow="About"
          title="A practical product partner, from first brief to release."
        />
        <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
          <p className="font-display text-2xl leading-[1.25] tracking-[-0.04em] text-slate-100 sm:text-3xl">
            I’m Siddhartha, a software engineer with 3+ years of experience
            building web applications that are fast, useful, and ready to scale.
          </p>
          <div className="space-y-5 text-base leading-7 text-mist">
            <p>
              I work across the product surface—shaping a thoughtful frontend,
              designing APIs and integrations, and getting the final experience
              into users’ hands.
            </p>
            <p>
              That range lets me move from a rough requirement to a complete,
              maintainable product without losing sight of the details that make
              it feel great to use.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
