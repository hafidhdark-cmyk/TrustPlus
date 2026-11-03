"use client";

import React, { useState } from "react";
import { siteData } from "@/data/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      {/* Optional gentle contextual pill visible on hover or desktop focus */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-brandBorder shadow-lg text-xs font-semibold text-navy transition-all duration-200 pointer-events-none ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
        aria-hidden="true"
      >
        <span className="w-2 h-2 rounded-full bg-waGreen animate-pulse" />
        <span>Chat on WhatsApp</span>
      </div>

      <a
        href={siteData.contact.whatsapp.link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-waGreen hover:bg-waGreen-hover text-white shadow-xl shadow-waGreen/30 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-waGreen/30"
        aria-label={`Chat with ${siteData.brand.name} on WhatsApp at ${siteData.contact.whatsapp.number}`}
      >
        {/* Subtle pulsing indicator */}
        <span className="absolute inset-0 rounded-full bg-waGreen opacity-30 animate-ping group-hover:hidden" />
        <WhatsAppIcon size={26} className="relative z-10" />
      </a>
    </aside>
  );
}

export default FloatingWhatsApp;
