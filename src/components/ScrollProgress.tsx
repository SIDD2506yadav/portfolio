import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { storySections } from "./data";

/** #19 — Section-aware scroll dot navigator */
export function ScrollProgress() {
  const reducedMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (reducedMotion) return;

    const sectionIds = storySections.filter((s) => s !== "top");

    // Observe each section; pick the one with the highest intersection ratio
    const ratios: Record<string, number> = {};

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios[entry.target.id] = entry.intersectionRatio;
        });
        const best = Object.entries(ratios).sort((a, b) => b[1] - a[1])[0];
        if (best && best[1] > 0) setActiveSection(best[0]);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [reducedMotion]);

  if (reducedMotion) return null;

  const dots = storySections.filter((s) => s !== "top");

  return (
    <nav
      aria-label="Section navigation"
      className="pointer-events-auto fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center lg:flex"
    >
      {dots.map((section) => {
        const isActive = activeSection === section;
        return (
          <a
            key={section}
            href={`#${section}`}
            aria-label={`Go to ${section} section`}
            /* #30 — p-2 grows the tap target to 24x24px (was an 8x8px dot, failed Lighthouse target-size) */
            className="group flex items-center justify-center p-2"
          >
            <motion.span
              animate={
                isActive
                  ? { scale: 1, backgroundColor: "#22D3EE" }
                  : { scale: 1, backgroundColor: "#26303D" }
              }
              whileHover={{ scale: 1.5, backgroundColor: "#22D3EE" }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="block h-2 w-2 rounded-full"
            />
          </a>
        );
      })}
    </nav>
  );
}
