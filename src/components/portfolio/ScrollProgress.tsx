import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 32,
    restDelta: 0.001,
  });

  if (reducedMotion) return null;

  return (
    <div
      className="pointer-events-none fixed right-4 top-1/2 z-40 hidden h-28 w-px -translate-y-1/2 bg-line lg:block"
      aria-hidden="true"
    >
      <motion.div
        className="h-full w-full origin-top bg-cyan"
        style={{ scaleY }}
      />
    </div>
  );
}
