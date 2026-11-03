import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteData } from "@/data/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-brandBorder pt-16 pb-12 text-ink">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand & Blurb (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-sky rounded-lg p-1 -ml-1"
              aria-label={`${siteData.brand.name} home`}
            >
              <Logo />
            </Link>

            <p className="text-sm text-ink-muted leading-relaxed max-w-sm">
              {siteData.brand.positioning}
            </p>

            <div className="pt-2 text-xs text-ink-subtle space-y-1">
              <p className="font-semibold text-navy">Hours of Operation:</p>
              <p>{siteData.hoursSummary.monSat}</p>
              <p>{siteData.hoursSummary.sun}</p>
            </div>
          </div>

          {/* Col 2: Explore Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif font-bold text-navy text-base tracking-tight">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteData.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-ink-muted hover:text-navy transition-colors inline-block py-1 min-h-[36px] flex items-center"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Three Branches (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif font-bold text-navy text-base tracking-tight">
              Our Branches
            </h3>
            <ul className="space-y-4 text-xs">
              {siteData.branches.map((branch) => (
                <li key={branch.id} className="space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-navy">
                    <MapPin size={20} strokeWidth={1.75} className="text-sky flex-shrink-0" />
                    <span>{branch.name}</span>
                  </div>
                  <p className="text-ink-muted pl-6 leading-relaxed">
                    {branch.address}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Social (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif font-bold text-navy text-base tracking-tight">
              Get in Touch
            </h3>

            <div className="space-y-3 text-sm">
              {/* Primary Call */}
              <div className="flex items-start gap-2.5 text-ink-muted">
                <Phone size={20} strokeWidth={1.75} className="text-sky flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs text-ink-subtle">Call Line 1:</span>
                  <a
                    href={siteData.contact.primaryCall.link}
                    className="font-medium text-navy hover:text-sky transition-colors min-h-[32px] flex items-center"
                  >
                    {siteData.contact.primaryCall.number}
                  </a>
                </div>
              </div>

              {/* Secondary Call */}
              <div className="flex items-start gap-2.5 text-ink-muted">
                <Phone size={20} strokeWidth={1.75} className="text-sky flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs text-ink-subtle">Call Line 2:</span>
                  <a
                    href={siteData.contact.secondaryCall.link}
                    className="font-medium text-navy hover:text-sky transition-colors min-h-[32px] flex items-center"
                  >
                    {siteData.contact.secondaryCall.number}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2.5 text-ink-muted">
                <Mail size={20} strokeWidth={1.75} className="text-sky flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs text-ink-subtle">Email:</span>
                  <a
                    href={siteData.contact.email.link}
                    className="font-medium text-navy hover:text-sky transition-colors break-all min-h-[32px] flex items-center"
                  >
                    {siteData.contact.email.address}
                  </a>
                </div>
              </div>

              {/* Instagram: PLAIN TEXT LINK ONLY (No icon as strictly requested) */}
              <div className="pt-2 border-t border-brandBorder/60">
                <span className="text-xs text-ink-subtle block mb-1">Follow on Instagram:</span>
                <a
                  href={siteData.contact.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-semibold text-navy hover:text-sky hover:underline transition-colors text-sm min-h-[36px] flex items-center"
                >
                  {siteData.contact.instagram.handle}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright Bottom Strip */}
        <div className="pt-8 border-t border-brandBorder flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted text-center sm:text-left">
          <p className="font-medium">
            {siteData.brand.legalName} · {siteData.brand.rcNumber}
          </p>
          <p>© {siteData.brand.copyrightYear} {siteData.brand.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
