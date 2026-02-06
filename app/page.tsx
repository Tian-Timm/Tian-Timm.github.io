import { HeroSection } from "@/components/hero-section";
import { WorkSection } from "@/components/work-section";
import { AboutSection } from "@/components/about-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <WorkSection />
      <AboutSection />
    </main>
  );
}
