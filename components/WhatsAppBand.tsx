import React from "react";
import { Clock, Check } from "lucide-react";
import { siteData } from "@/data/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function WhatsAppBand() {
  return (
    <section className="relative py-16 md:py-20 bg-navy overflow-hidden text-white">
      {/* Subtle clean vector architectural accents, strictly no neon or heavy gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-5" aria-hidden="true">
        <svg width="100%" height="100%">
          <pattern id="wa-band-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#FFFFFF" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#wa-band-pattern)" />
        </svg>
      </div>

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          {/* Headline & Supporting Line */}
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-sky" />
              <span>Doorstep Delivery Across Abeokuta</span>
            </div>

            <h2 className="font-serif font-black text-white text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15]">
              Need a drug delivered?
            </h2>

            <p className="text-slate-200 text-base sm:text-lg font-normal leading-relaxed">
              Send your doctor’s prescription or grocery request to our pharmacist team on WhatsApp for prompt fulfillment and direct dispatch.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <Check size={20} strokeWidth={1.75} className="text-sky" />
                Prescriptions &amp; Groceries
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={20} strokeWidth={1.75} className="text-sky" />
                Available 7 Days a Week
              </span>
            </div>
          </div>

          {/* Large Green WhatsApp Button */}
          <div className="flex-shrink-0">
            <a
              href={siteData.contact.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-waGreen hover:bg-waGreen-hover text-white text-base sm:text-lg font-bold tracking-wide transition-all duration-150 shadow-xl shadow-waGreen/20 hover:scale-[1.02] active:scale-[0.98] min-h-[52px]"
            >
              <WhatsAppIcon size={24} className="flex-shrink-0" />
              <span>Chat {siteData.contact.whatsapp.displayText}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatsAppBand;
