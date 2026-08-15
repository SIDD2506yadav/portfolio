import {
  AboutSection,
  CapabilityMap,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProcessSection,
  WorkSection,
} from "./components";

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
