import { AboutSection } from "../../components/portfolio/AboutSection";
import { CapabilityMap } from "../../components/portfolio/CapabilityMap";
import { ContactSection } from "../../components/portfolio/ContactSection";
import { ExperienceSection } from "../../components/portfolio/ExperienceSection";
import { HeroSection } from "../../components/portfolio/HeroSection";
import { ProcessSection } from "../../components/portfolio/ProcessSection";
import { WorkSection } from "../../components/portfolio/WorkSection";

export function PortfolioHome() {
  return (
    <>
      <HeroSection />
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
    </>
  );
}
