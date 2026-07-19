import { HeroSection } from "@/components/hero-section/hero-section";
import { SiteHeader } from "@/components/site-header/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
      </main>
    </>
  );
}
