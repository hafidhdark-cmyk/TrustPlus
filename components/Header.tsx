"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { siteData } from "@/data/site";
import { Logo } from "@/components/Logo";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md border-b ${
        scrolled ? "border-brandBorder shadow-sm" : "border-brandBorder/80"
      }`}
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center focus:outline-none rounded-lg p-1 -ml-1 transition-transform hover:opacity-95"
            aria-label={`${siteData.brand.name} home`}
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {siteData.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[15px] font-medium text-ink hover:text-navy transition-colors py-2 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky rounded"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={siteData.contact.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-waGreen hover:bg-waGreen-hover text-white text-[14px] font-semibold tracking-wide transition-all duration-150 shadow-sm hover:shadow active:scale-[0.98] min-h-[44px]"
            >
              <WhatsAppIcon size={20} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={siteData.contact.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-waGreen text-white transition-colors"
            >
              <WhatsAppIcon size={20} />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center w-11 h-11 rounded-lg text-ink hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-sky"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X size={24} strokeWidth={1.75} />
              ) : (
                <Menu size={24} strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-brandBorder bg-white shadow-xl animate-in slide-in-from-top duration-200">
          <div className="px-5 pt-4 pb-6 space-y-3">
            <nav className="flex flex-col space-y-1">
              {siteData.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-3 rounded-lg text-base font-semibold text-ink hover:bg-brandBg hover:text-navy transition-colors min-h-[44px] flex items-center"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-brandBorder/80 space-y-3">
              <a
                href={siteData.contact.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-waGreen text-white font-semibold text-sm transition-colors shadow-sm min-h-[44px]"
              >
                <WhatsAppIcon size={20} />
                <span>Chat on WhatsApp ({siteData.contact.whatsapp.displayText})</span>
              </a>

              <a
                href={siteData.contact.primaryCall.link}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl border border-brandBorder bg-brandBg text-navy font-semibold text-sm hover:bg-paleBlue transition-colors min-h-[44px]"
              >
                <Phone size={20} strokeWidth={1.75} className="text-navy" />
                <span>Call Us ({siteData.contact.primaryCall.number})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
