import { ArrowDownRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { buildOptions } from "@/data/buildOptions";
import { Reveal } from "./Reveal";

const headlineVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const headline = ["I", "build", "end-to-end", "web", "products."];

export function HeroSection() {
  const [selectedBuild, setSelectedBuild] =
    useState<(typeof buildOptions)[number]["id"]>("ai-chatbot");
  const reducedMotion = useReducedMotion();
  const activeBuild =
    buildOptions.find((option) => option.id === selectedBuild) ??
    buildOptions[0];
  const radioRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleOptionKeyDown(
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    const count = buildOptions.length;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = (index + 1) % count;
      setSelectedBuild(buildOptions[next].id);
      radioRefs.current[next]?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prev = (index - 1 + count) % count;
      setSelectedBuild(buildOptions[prev].id);
      radioRefs.current[prev]?.focus();
    }
  }

  return (
    <section className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center px-5 py-20 sm:px-8 md:py-28">
      <div className="grid items-end gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <Reveal>
          <p className="eyebrow">
            <span>01</span>Full-stack developer / Noida, India
          </p>
          <motion.h1
            className="mt-7 max-w-4xl font-display text-[clamp(3.5rem,9vw,6.25rem)] font-medium leading-[0.91] tracking-[-0.075em] text-slate-50"
            variants={reducedMotion ? undefined : headlineVariants}
            initial={reducedMotion ? false : "hidden"}
            animate={reducedMotion ? undefined : "visible"}
          >
            {headline.map((word, i) => (
              <motion.span
                key={i}
                variants={reducedMotion ? undefined : wordVariants}
                className={`mr-[0.22em] inline-block ${word === "end-to-end" ? "text-cyan" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-mist sm:text-lg">
            From polished React interfaces to scalable Node.js services and
            AI-powered experiences, I turn product requirements into dependable
            software.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#work">
                View my work <ArrowDownRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="#contact">
                Let's work together <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="w-full lg:ml-auto lg:max-w-[360px]">
          <div className="relative overflow-hidden border border-line bg-panel/95 p-5 shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between border-b border-line pb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
              <span>project.config</span>
              <span className="text-cyan">interactive</span>
            </div>
            <div className="mt-5">
              <p className="flex items-center font-mono text-xs text-slate-300">
                <span className="mr-2 text-cyan">&gt;</span>what do you need
                built?
                <span
                  className="ml-1 inline-block h-3.5 w-[2px] translate-y-px bg-cyan cursor-blink"
                  aria-hidden="true"
                />
              </p>
              <div
                role="radiogroup"
                aria-label="Project type"
                className="mt-4 grid grid-cols-2 gap-2"
              >
                {buildOptions.map((option, index) => (
                  <button
                    key={option.id}
                    ref={(el) => {
                      radioRefs.current[index] = el;
                    }}
                    type="button"
                    role="radio"
                    aria-checked={selectedBuild === option.id}
                    onClick={() => setSelectedBuild(option.id)}
                    onKeyDown={(e) => handleOptionKeyDown(e, index)}
                    tabIndex={
                      selectedBuild === option.id
                        ? 0
                        : index === 0 &&
                            !buildOptions.some((o) => o.id === selectedBuild)
                          ? 0
                          : -1
                    }
                    className={`border px-3 py-2 text-left font-mono text-[10px] uppercase tracking-[0.08em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${selectedBuild === option.id ? "border-cyan bg-cyan/10 text-cyan" : "border-line bg-ink/60 text-mist hover:border-cyan/70 hover:text-slate-100"}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            <motion.div
              key={activeBuild.id}
              initial={reducedMotion ? false : { opacity: 0, y: 8 }}
              animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.22 }}
              className="mt-5 border border-line bg-ink/65 p-4"
            >
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-cyan">
                <CheckCircle2 className="h-3.5 w-3.5" />
                build path selected
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                {activeBuild.response}
              </p>
              <p className="mt-4 border-t border-line pt-3 font-mono text-[10px] text-mist">
                {activeBuild.stack}
              </p>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
