import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { DrinksSection } from "@/components/DrinksSection";
import { BestSellers } from "@/components/BestSellers";
import { BakerySection } from "@/components/BakerySection";
import { CoffeeStory } from "@/components/CoffeeStory";
import { SignatureSection } from "@/components/SignatureSection";
import { SpaceSection } from "@/components/SpaceSection";
import { Gallery } from "@/components/Gallery";
import { VisitSection } from "@/components/VisitSection";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <IntroSection />
        <DrinksSection />
        <BestSellers />
        <BakerySection />
        <CoffeeStory />
        <SignatureSection />
        <SpaceSection />
        <Gallery />
        <VisitSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
