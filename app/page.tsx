import Hero from "@/app/components/sections/hero";
import OriginSection from "@/app/components/sections/origin";
import PhilosophySection from "@/app/components/sections/philosophy";
import EcosystemSection from "@/app/components/sections/ecosystem";
import FeaturedExperiences from "@/app/components/sections/featuredex";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 bg-[var(--background)] font-sans min-h-screen">
      <Hero />
      <OriginSection />
      <PhilosophySection />
      <EcosystemSection />
      <FeaturedExperiences />
    </main>
  );
}

