import { SiteHeader } from "@/components/site-header/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="site-shell" id="product">
        <p className="eyebrow">CareerFlow foundation</p>
        <h1>Build a career you can measure.</h1>
        <p className="intro">
          The landing-page header is ready. The complete hero section will be added
          as the next reviewable block.
        </p>
      </main>
    </>
  );
}
