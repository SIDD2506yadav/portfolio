import { AboutSection } from "./components/portfolio/AboutSection";
import { CapabilityMap } from "./components/portfolio/CapabilityMap";
import { ContactSection } from "./components/portfolio/ContactSection";
import { CursorGlow } from "./components/portfolio/CursorGlow";
import { ExperienceSection } from "./components/portfolio/ExperienceSection";
import { Footer } from "./components/portfolio/Footer";
import { Header } from "./components/portfolio/Header";
import { HeroSection } from "./components/portfolio/HeroSection";
import { ProcessSection } from "./components/portfolio/ProcessSection";
import { ScrollProgress } from "./components/portfolio/ScrollProgress";
import { WorkSection } from "./components/portfolio/WorkSection";
import { motion, useScroll, useTransform } from "framer-motion";

export default function App() {
  // #28 — Fade the technical-grid out as user scrolls into content
  const { scrollYProgress } = useScroll();
  const gridOpacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 0]);

  return (
    <div className="min-h-screen overflow-x-clip bg-ink text-slate-100 selection:bg-cyan selection:text-ink">
      {/* Technical grid — fades out as user scrolls (#28) */}
      <motion.div
        className="pointer-events-none fixed inset-0 technical-grid"
        aria-hidden="true"
        style={{ opacity: gridOpacity }}
      />
      {/* Fixed cyan radial glow at top */}
      <div
        className="pointer-events-none fixed left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-cyan/10 blur-[150px]"
        aria-hidden="true"
      />
      {/* #10 — Cursor-tracking ambient glow */}
      <CursorGlow />
      <ScrollProgress />
      <Header />
      <main id="top" className="relative">
        <HeroSection />
        {/* #11 — Section divider */}
        <div className="section-rule" aria-hidden="true" />
        <AboutSection />
        <div className="section-rule" aria-hidden="true" />
        <ExperienceSection />
        <div className="section-rule" aria-hidden="true" />
        <CapabilityMap />
        <div className="section-rule" aria-hidden="true" />
        <WorkSection />
        <div className="section-rule" aria-hidden="true" />
        <ProcessSection />
        <div className="section-rule" aria-hidden="true" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
