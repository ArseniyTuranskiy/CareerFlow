import { FeaturesSection } from "@/components/features-section/features-section";
import { HeroSection } from "@/components/hero-section/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section/how-it-works-section";
import { SiteHeader } from "@/components/site-header/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
      </main>
    </>
  );
}
