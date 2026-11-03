"use client";

import React, { useState } from "react";
import {
  Search,
  Clock,
  Phone,
  Navigation,
  MapPin,
  Store,
  Truck,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { siteData } from "@/data/site";
import { OpenStatusBadge } from "@/components/OpenStatusBadge";

export function Hero() {
  const [areaQuery, setAreaQuery] = useState("");
  const mainBranch = siteData.branches[0]; // Ibara main branch

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const locatorSection = document.getElementById("branches");
    if (locatorSection) {
      locatorSection.scrollIntoView({ behavior: "smooth" });
      const searchInput = document.getElementById(
        "branch-search-input"
      ) as HTMLInputElement | null;
      if (searchInput && areaQuery.trim()) {
        searchInput.value = areaQuery;
        // Dispatch synthetic event so state updates in BranchLocator
        const event = new Event("input", { bubbles: true });
        searchInput.dispatchEvent(event);
      }
    }
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-brandBg border-b border-brandBorder">
      {/* Background subtle architectural accent (CSS/SVG, strictly no gradients/neon) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E1B5B" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Description & Area Search */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Subtle Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-paleBlue border border-sky/30 text-navy text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-sky" />
              <span>Abeokuta’s Trusted Community Pharmacy &amp; Superstore</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif font-black text-navy text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.12] tracking-[-0.03em] text-balance">
              Quality drugs and everyday needs, close to you.
            </h1>

            {/* Supporting Sentence */}
            <p className="text-base sm:text-lg text-ink-muted max-w-2xl font-normal leading-relaxed">
              {siteData.brand.positioning}
            </p>

            {/* Area Search Box */}
            <form
              onSubmit={handleSearchSubmit}
              className="w-full max-w-xl pt-2"
              role="search"
            >
              <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-white p-2 rounded-2xl border border-brandBorder shadow-sm focus-within:ring-2 focus-within:ring-sky focus-within:border-sky transition-all gap-2">
                <div className="flex items-center flex-1 px-3">
                  <label htmlFor="area-search" className="sr-only">
                    Enter your area in Abeokuta
                  </label>
                  <Search
                    size={20}
                    strokeWidth={1.75}
                    className="text-sky flex-shrink-0 mr-3"
                    aria-hidden="true"
                  />
                  <input
                    id="area-search"
                    type="text"
                    value={areaQuery}
                    onChange={(e) => setAreaQuery(e.target.value)}
                    placeholder="Enter your area (e.g. Ibara, Oke-Ata...)"
                    className="w-full bg-transparent text-ink placeholder-ink-subtle text-sm md:text-base focus:outline-none min-h-[44px]"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-navy hover:bg-navy-dark text-white font-semibold text-sm transition-all duration-150 shadow-sm active:scale-[0.98] min-h-[44px]"
                >
                  <span>Find a branch</span>
                  <ArrowRight size={20} strokeWidth={1.75} />
                </button>
              </div>
            </form>

            <div className="flex items-center gap-2 text-xs text-ink-subtle font-medium">
              <ShieldCheck size={20} strokeWidth={1.75} className="text-sky" />
              <span>Certified pharmaceutical care · 100% genuine medications</span>
            </div>
          </div>

          {/* Right Column: Premium Nearest Branch Card (Ibara Main Branch) */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Soft decorative accent behind card */}
              <div
                className="absolute -inset-1 rounded-3xl bg-paleBlue/80 transform rotate-1 -z-10 transition-transform group-hover:rotate-0"
                aria-hidden="true"
              />

              <div className="bg-white rounded-3xl border border-brandBorder p-6 sm:p-7 shadow-lg shadow-navy/5 space-y-5">
                {/* Header & Status */}
                <div className="flex items-center justify-between gap-2.5 pb-4 border-b border-brandBorder/80">
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-navy text-white whitespace-nowrap shadow-xs">
                      {mainBranch.tag}
                    </span>
                    <span className="text-xs font-medium text-ink-muted whitespace-nowrap">
                      Featured Branch
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    <OpenStatusBadge size="sm" showClosingTime={true} />
                  </div>
                </div>

                {/* Branch Details */}
                <div className="space-y-3">
                  <h2 className="font-serif font-bold text-navy text-xl sm:text-2xl tracking-tight">
                    {mainBranch.name}
                  </h2>

                  <div className="flex items-start gap-2.5 text-sm text-ink-muted">
                    <MapPin
                      size={20}
                      strokeWidth={1.75}
                      className="text-sky flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="leading-snug">{mainBranch.address}</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-sm text-ink-muted">
                    <Clock
                      size={20}
                      strokeWidth={1.75}
                      className="text-sky flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div className="space-y-0.5 text-xs sm:text-sm">
                      <p className="font-medium text-ink">{mainBranch.hours.monSat}</p>
                      <p className="text-ink-subtle">{mainBranch.hours.sun}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 text-sm text-ink-muted">
                    <Phone
                      size={20}
                      strokeWidth={1.75}
                      className="text-sky flex-shrink-0"
                      aria-hidden="true"
                    />
                    <a
                      href={`tel:${mainBranch.phoneRaw}`}
                      className="font-medium text-navy hover:text-sky transition-colors text-sm"
                    >
                      {mainBranch.phone}
                    </a>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={mainBranch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-paleBlue hover:bg-[#D5EBF9] text-navy font-semibold text-sm border border-sky/30 transition-all min-h-[44px]"
                  >
                    <Navigation size={20} strokeWidth={1.75} className="text-sky" />
                    <span>Get directions</span>
                  </a>

                  <a
                    href={`tel:${mainBranch.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-brandBorder bg-white hover:bg-brandBg text-ink font-semibold text-sm transition-all min-h-[44px]"
                  >
                    <Phone size={20} strokeWidth={1.75} className="text-navy" />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slim Trust Strip below Hero */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-brandBorder/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {siteData.trustHighlights.map((item) => {
              const IconComponent =
                item.icon === "Store"
                  ? Store
                  : item.icon === "Clock"
                  ? Clock
                  : Truck;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-brandBorder shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-paleBlue flex items-center justify-center flex-shrink-0 text-sky">
                    <IconComponent size={24} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-navy tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-muted mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
