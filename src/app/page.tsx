import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { EducationSection } from "@/components/sections/EducationSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <HeroSection />
        <ExperienceSection />
        <TechnologiesSection />
        <ProjectsSection />
        <EducationSection />
      </main>
      <Footer />
    </>
  );
}
