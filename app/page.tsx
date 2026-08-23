import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustMarquee } from "@/components/TrustMarquee";
import { IndustrySolutions } from "@/components/IndustrySolutions";
import { BentoGrid } from "@/components/BentoGrid";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { ScrubTextSection } from "@/components/ScrubTextSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <Navbar />
      <Hero />
      <TrustMarquee />
      <IndustrySolutions />
      <BentoGrid />
      <CapabilitiesSection />
      <ScrubTextSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </main>
  );
}
