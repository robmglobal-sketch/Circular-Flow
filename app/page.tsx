import Hero from "@/app/components/sections/hero";
import OriginSection from "@/app/components/sections/origin";
import PhilosophySection from "@/app/components/sections/philosophy";
import EcosystemSection from "@/app/components/sections/ecosystem";
import InnovationSection from "@/app/components/sections/innovation";
import FeaturedExperiences from "@/app/components/sections/featuredex";
import TestimonialsSection from "@/app/components/sections/testimonials";
import FaqSection from "@/app/components/sections/faqSection";
import PartnerSection from "@/app/components/sections/contactsection";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 bg-[var(--background)] font-sans min-h-screen">
      <Hero />
      <OriginSection />
      <PhilosophySection />
      <EcosystemSection />
      <FeaturedExperiences />
      <InnovationSection />
      <TestimonialsSection />
      <FaqSection />
      <PartnerSection />
    </main>
  );
}

