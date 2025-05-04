"use client";

import { useEffect } from "react";
import Hero from "@/components/home/Hero";
import FamilyScheduling from "@/components/home/FamilyScheduling";
import CreateEvents from "@/components/home/CreateEvents";
import ModernFamilies from "@/components/home/ModernFamilies";
import KINV2 from "@/components/home/KINV2";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import StoryBehindKIN from "@/components/home/StoryBehindKIN";
import FAQSection from "@/components/home/FAQSection";
import FreeAdopters from "@/components/home/FreeAdopters";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function InvitePage() {
  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isIOS && isSafari) {
      // Show the smart app banner
      const meta = document.createElement("meta");
      meta.setAttribute("name", "apple-itunes-app");
      meta.setAttribute("content", "app-id=6714457940");
      document.head.appendChild(meta);
    } else {
      // Redirect to App Store
      window.location.href =
        "https://apps.apple.com/us/app/kin-family-calendar/id6714457940";
    }
  }, []);

  const isIOS =
    typeof window !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isSafari =
    typeof window !== "undefined" &&
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  if (!isIOS || !isSafari) {
    return null;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FamilyScheduling />
        <CreateEvents />
        <ModernFamilies />
        <KINV2 />
        <TestimonialsSection />
        <StoryBehindKIN />
        <FAQSection />
        <FreeAdopters />
      </main>
      <Footer />
    </>
  );
}
