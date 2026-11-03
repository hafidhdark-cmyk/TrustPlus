"use client";

import React, { useState } from "react";
import { ArrowRight, Info, BookOpen, X, Clock } from "lucide-react";
import { siteData, HealthGuide } from "@/data/site";

export function HealthTips() {
  const [activeGuide, setActiveGuide] = useState<HealthGuide | null>(null);

  const featuredGuide = siteData.healthGuides.find((g) => g.featured) || siteData.healthGuides[0];
  const regularGuides = siteData.healthGuides.filter((g) => !g.featured);

  return (
    <section
      id="health-tips"
      className="py-16 md:py-24 bg-brandBg scroll-mt-20 border-b border-brandBorder"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-paleBlue border border-sky/30 text-navy text-xs font-semibold tracking-wide">
              <BookOpen size={20} strokeWidth={1.75} className="text-sky" />
              <span>Pharmacist Advice &amp; Wellness Education</span>
            </div>
            <h2 className="font-serif font-black text-navy text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15]">
              Health Information &amp; Guidance
            </h2>
            <p className="text-ink-muted text-base sm:text-lg leading-relaxed">
              Clear, practical advice from our healthcare team to help you make informed decisions for yourself and your family.
            </p>
          </div>
        </div>

        {/* Guides Layout: 1 Featured Card + 2 Smaller Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured Guide Card */}
          <div className="lg:col-span-7 flex flex-col">
            <article className="flex-1 flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-white border border-brandBorder shadow-sm card-hover-lift">
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-navy text-white">
                    {featuredGuide.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-ink-subtle">
                    <Clock size={20} strokeWidth={1.75} className="text-sky" />
                    {featuredGuide.readTime}
                  </span>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky">
                    Featured Health Guide
                  </span>
                  <h3 className="font-serif font-black text-navy text-2xl sm:text-3xl tracking-tight leading-snug">
                    {featuredGuide.title}
                  </h3>
                  <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                    {featuredGuide.summary}
                  </p>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-brandBorder/80 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveGuide(featuredGuide)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-sky transition-colors group"
                >
                  <span>Read guide</span>
                  <ArrowRight
                    size={20}
                    strokeWidth={1.75}
                    className="transform transition-transform group-hover:translate-x-1"
                  />
                </button>
                <span className="text-xs text-ink-subtle">General Guidance</span>
              </div>
            </article>
          </div>

          {/* Two Smaller Guide Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8 justify-between">
            {regularGuides.map((guide) => (
              <article
                key={guide.id}
                className="flex-1 flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-brandBorder shadow-sm card-hover-lift"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-paleBlue text-navy border border-sky/20">
                      {guide.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-ink-subtle">
                      <Clock size={20} strokeWidth={1.75} className="text-sky" />
                      {guide.readTime}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-navy text-lg sm:text-xl tracking-tight leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed line-clamp-3">
                      {guide.summary}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-brandBorder/80">
                  <button
                    type="button"
                    onClick={() => setActiveGuide(guide)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-navy hover:text-sky transition-colors group"
                  >
                    <span>Read guide</span>
                    <ArrowRight
                      size={20}
                      strokeWidth={1.75}
                      className="transform transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Clinical Disclaimer Requirement */}
        <div className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-white border border-brandBorder text-xs sm:text-sm text-ink-muted leading-relaxed">
          <Info size={20} strokeWidth={1.75} className="text-sky flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-ink font-semibold">Important Medical Notice: </strong>
            {siteData.brand.disclaimer}
          </p>
        </div>
      </div>

      {/* Guide Detail Modal Dialog */}
      {activeGuide && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
          aria-labelledby="guide-modal-title"
        >
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-brandBorder space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-paleBlue text-navy border border-sky/30">
                {activeGuide.category}
              </span>
              <button
                type="button"
                onClick={() => setActiveGuide(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-ink flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X size={20} strokeWidth={1.75} />
              </button>
            </div>

            <div className="space-y-4">
              <h3
                id="guide-modal-title"
                className="font-serif font-black text-navy text-2xl tracking-tight leading-snug"
              >
                {activeGuide.title}
              </h3>
              <p className="text-ink-muted text-sm leading-relaxed">
                {activeGuide.summary}
              </p>
              <div className="p-4 rounded-2xl bg-brandBg border border-brandBorder text-xs text-ink-subtle space-y-1">
                <p className="font-semibold text-navy">Consult a professional:</p>
                <p>
                  Visit any of our 3 Abeokuta branches to discuss your results with a registered pharmacist, or message our team directly.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setActiveGuide(null)}
                className="px-5 py-2.5 rounded-xl bg-navy text-white text-xs font-semibold hover:bg-navy-dark transition-colors"
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default HealthTips;
