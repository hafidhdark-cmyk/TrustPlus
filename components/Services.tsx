"use client";

import React from "react";
import {
  Pill,
  Stethoscope,
  Sparkles,
  ShoppingBasket,
  Truck,
  Store,
  CheckCircle2,
} from "lucide-react";
import { siteData } from "@/data/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Pill":
        return <Pill size={24} strokeWidth={1.75} />;
      case "Stethoscope":
        return <Stethoscope size={24} strokeWidth={1.75} />;
      case "Sparkles":
        return <Sparkles size={24} strokeWidth={1.75} />;
      case "ShoppingBasket":
        return <ShoppingBasket size={24} strokeWidth={1.75} />;
      case "Truck":
        return <Truck size={24} strokeWidth={1.75} />;
      case "Store":
        return <Store size={24} strokeWidth={1.75} />;
      default:
        return <Pill size={24} strokeWidth={1.75} />;
    }
  };

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-white scroll-mt-20 border-b border-brandBorder"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-paleBlue border border-sky/30 text-navy text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-sky" />
            <span>Comprehensive Healthcare &amp; Retail</span>
          </div>

          <h2 className="font-serif font-black text-navy text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15]">
            Everything you need for wellness and daily living
          </h2>

          <p className="text-ink-muted text-base sm:text-lg leading-relaxed">
            Combining licensed pharmaceutical dispensing with a modern superstore inventory. Quality, convenience, and attentive service across all branches.
          </p>
        </div>

        {/* Six Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteData.services.map((service) => {
            const isHealthCheck = service.id === "health-tests";
            const isDelivery = service.id === "delivery";

            return (
              <div
                key={service.id}
                className={`group flex flex-col justify-between p-7 rounded-3xl border transition-all duration-200 card-hover-lift ${
                  isHealthCheck
                    ? "bg-[#FCFDFE] border-sky/40 lg:col-span-1 shadow-sm"
                    : "bg-white border-brandBorder shadow-sm"
                }`}
              >
                <div className="space-y-4">
                  {/* Icon Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-paleBlue flex items-center justify-center text-sky group-hover:bg-navy group-hover:text-white transition-colors duration-200">
                      {getIcon(service.iconName)}
                    </div>
                    {isDelivery && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E6F8EE] text-waGreen border border-[#A6E8C2]">
                        <WhatsAppIcon size={18} />
                        WhatsApp Fast Track
                      </span>
                    )}
                    {isHealthCheck && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-paleBlue text-navy border border-sky/30">
                        Rapid On-Site Results
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-navy text-xl tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-ink-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Point-of-Care Tests Chips (Specific requirement for Health Checks card) */}
                  {service.tests && service.tests.length > 0 && (
                    <div className="pt-2 space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-navy">
                        Available Point-of-Care Screenings:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.tests.map((test) => (
                          <span
                            key={test}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-brandBg text-ink border border-brandBorder"
                          >
                            <CheckCircle2 size={20} strokeWidth={1.75} className="text-sky flex-shrink-0" />
                            <span>{test}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Delivery Direct Action */}
                {isDelivery && (
                  <div className="pt-6 mt-4 border-t border-brandBorder">
                    <a
                      href={siteData.contact.whatsapp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-waGreen hover:text-waGreen-hover"
                    >
                      <WhatsAppIcon size={18} />
                      <span>Order on WhatsApp: {siteData.contact.whatsapp.number}</span>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
