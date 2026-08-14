import { AboutSection } from "./components/portfolio/AboutSection";
import { CapabilityMap } from "./components/portfolio/CapabilityMap";
import { ContactSection } from "./components/portfolio/ContactSection";
import { ExperienceSection } from "./components/portfolio/ExperienceSection";
import { Footer } from "./components/portfolio/Footer";
import { Header } from "./components/portfolio/Header";
import { HeroSection } from "./components/portfolio/HeroSection";
import { ProcessSection } from "./components/portfolio/ProcessSection";
import { ScrollProgress } from "./components/portfolio/ScrollProgress";
import { WorkSection } from "./components/portfolio/WorkSection";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-ink text-slate-100 selection:bg-cyan selection:text-ink">
      <div
        className="pointer-events-none fixed inset-0 technical-grid opacity-50"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-cyan/10 blur-[150px]"
        aria-hidden="true"
      />
      <ScrollProgress />
      <Header />
      <main id="top" className="relative">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <CapabilityMap />
        <WorkSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
