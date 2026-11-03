import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BranchLocator } from "@/components/BranchLocator";
import { Services } from "@/components/Services";
import { HealthTips } from "@/components/HealthTips";
import { WhatsAppBand } from "@/components/WhatsAppBand";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header (sticky) */}
      <Header />

      {/* Main Content Sections in Strict Specified Order */}
      <main className="flex-1">
        {/* 2. Hero & Trust Strip */}
        <Hero />

        {/* 3. Branch Locator (The Core Feature) */}
        <BranchLocator />

        {/* 4. Services */}
        <Services />

        {/* 5. Health Information */}
        <HealthTips />

        {/* 6. WhatsApp Band */}
        <WhatsAppBand />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Small floating WhatsApp button fixed bottom-right */}
      <FloatingWhatsApp />
    </div>
  );
}
