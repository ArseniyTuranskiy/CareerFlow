import { FeaturesSection } from "@/components/features-section/features-section";
import { FinalCta } from "@/components/final-cta/final-cta";
import { HeroSection } from "@/components/hero-section/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section/how-it-works-section";
import { SiteFooter } from "@/components/site-footer/site-footer";
import { SiteHeader } from "@/components/site-header/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
