import { AboutSection } from "@/components/AboutSection";
import { CapabilityMap } from "@/components/CapabilityMap";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { WorkSection } from "@/components/WorkSection";

export default function Home() {
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
