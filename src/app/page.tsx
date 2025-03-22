import CreateEvents from "@/components/home/CreateEvents";
import FamilyScheduling from "@/components/home/FamilyScheduling";
import FAQSection from "@/components/home/FAQSection";
import Hero from "@/components/home/Hero";
import KINV2 from "@/components/home/KINV2";
import ModernFamilies from "@/components/home/ModernFamilies";
import StoryBehindKIN from "@/components/home/StoryBehindKIN";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FamilyScheduling />
      <CreateEvents />
      <ModernFamilies />
      <KINV2 />
      <TestimonialsSection />
      <StoryBehindKIN />
      <FAQSection />
    </>
  );
}
