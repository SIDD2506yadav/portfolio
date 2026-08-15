import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { capabilityAreas, supportingCapabilities } from "../../../components/portfolio/data";
import { Reveal } from "../../../components/portfolio/Reveal";
import { SectionIntro } from "../../../components/portfolio/SectionIntro";

export function CapabilityMap() {
  const [activeId, setActiveId] = useState("frontend");
  const reducedMotion = useReducedMotion();
  const activeArea = capabilityAreas.find((area) => area.id === activeId) ?? capabilityAreas[0];
  const ActiveIcon = activeArea.icon;

  return (
    <section id="capabilities" className="border-y border-line/70 bg-panel/30">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal><SectionIntro index="04" eyebrow="Capabilities" title="The tools behind the outcomes." copy="Select an area to see the stack and product result it supports." /></Reveal>
        <Reveal delay={0.06}>
          <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
            <div role="tablist" aria-label="Capability areas" className="grid grid-cols-2 border-l border-t border-line">
              {capabilityAreas.map((area) => {
                const Icon = area.icon;
                const isActive = area.id === activeId;
                return (
                  <button key={area.id} id={`${area.id}-tab`} type="button" role="tab" aria-selected={isActive} aria-controls={`${area.id}-panel`} onClick={() => setActiveId(area.id)} className={`group relative border-b border-r border-line p-5 text-left transition-colors sm:p-6 ${isActive ? "bg-cyan/10" : "hover:bg-cyan/[0.035]"}`}>
                    <Icon className={`h-5 w-5 transition-transform duration-300 ${isActive ? "scale-110 text-cyan" : "text-mist group-hover:text-cyan"}`} strokeWidth={1.5} />
                    <p className={`mt-10 font-display text-xl tracking-[-0.035em] ${isActive ? "text-cyan" : "text-slate-100"}`}>{area.label}</p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-mist">Explore area</p>
                    {isActive && <motion.div layoutId="capability-active-pill" className="absolute inset-0 border-2 border-cyan/40 bg-cyan/10" transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }} />}
                  </button>
                );
              })}
            </div>
            <motion.div key={activeArea.id} id={`${activeArea.id}-panel`} role="tabpanel" aria-labelledby={`${activeArea.id}-tab`} initial={reducedMotion ? false : { opacity: 0, x: 12 }} animate={reducedMotion ? undefined : { opacity: 1, x: 0 }} transition={{ duration: 0.28 }} className="relative overflow-hidden border border-line bg-ink/50 p-6 sm:p-8">
              <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-cyan/10 blur-3xl" />
              <div className="relative">
                <ActiveIcon className="h-6 w-6 text-cyan" strokeWidth={1.5} />
                <p className="mt-9 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan">{activeArea.label} systems</p>
                <h3 className="mt-3 max-w-md font-display text-3xl tracking-[-0.05em] text-slate-50">{activeArea.description}</h3>
                <div className="mt-7 flex flex-wrap gap-2">{activeArea.tools.map((tool) => <span key={tool} className="border border-line bg-panel/70 px-3 py-2 font-mono text-[10px] text-slate-200">{tool}</span>)}</div>
                <div className="mt-8 border-t border-line pt-5"><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-mist">Outcome</p><p className="mt-2 max-w-lg text-sm leading-6 text-slate-200">{activeArea.outcome}</p></div>
              </div>
            </motion.div>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">{supportingCapabilities.map(({ icon: Icon, label, detail }) => <div key={label} className="border border-line bg-ink/30 p-5"><Icon className="h-4 w-4 text-cyan" strokeWidth={1.5} /><p className="mt-5 font-display text-lg tracking-[-0.03em] text-slate-100">{label}</p><p className="mt-1 font-mono text-xs leading-5 text-mist">{detail}</p></div>)}</div>
        </Reveal>
      </div>
    </section>
  );
}
