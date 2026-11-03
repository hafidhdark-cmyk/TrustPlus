"use client";

import React, { useState, useEffect } from "react";
import { Sliders, X, Check } from "lucide-react";

interface FontOption {
  id: string;
  name: string;
  fontFamily: string;
  description: string;
}

const FONTS: FontOption[] = [
  {
    id: "dm-serif",
    name: "DM Serif Display",
    fontFamily: "'DM Serif Display', serif",
    description: "Modern, sturdy & confident editorial serif (Recommended)",
  },
  {
    id: "lora",
    name: "Lora",
    fontFamily: "'Lora', serif",
    description: "Warm, refined clinical & apothecary serif",
  },
  {
    id: "playfair",
    name: "Playfair Display",
    fontFamily: "var(--font-playfair), serif",
    description: "Classic high-contrast luxury serif (Original)",
  },
];

export function FontPreviewBar() {
  const [selectedFont, setSelectedFont] = useState("dm-serif");
  const [isOpen, setIsOpen] = useState(false);

  const applyFont = (fontId: string) => {
    const font = FONTS.find((f) => f.id === fontId);
    if (!font) return;
    setSelectedFont(fontId);
    document.documentElement.style.setProperty("--font-active-serif", font.fontFamily);
  };

  useEffect(() => {
    applyFont("dm-serif");
  }, []);

  return (
    <aside
      aria-label="Font preview selector"
      className="fixed bottom-6 left-6 z-40 print:hidden"
    >
      {isOpen ? (
        <div className="bg-white rounded-2xl border border-brandBorder shadow-2xl p-4 sm:p-5 w-[310px] sm:w-[360px] animate-in fade-in slide-in-from-bottom-2 duration-150 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-brandBorder">
            <div className="flex items-center gap-2">
              <Sliders size={18} strokeWidth={1.75} className="text-sky" />
              <span className="text-xs font-bold text-navy uppercase tracking-wider">
                Font Preview Switcher
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-ink-subtle hover:text-ink hover:bg-slate-100 transition-colors"
              aria-label="Close font switcher"
            >
              <X size={16} strokeWidth={1.75} />
            </button>
          </div>

          <p className="text-xs text-ink-muted leading-relaxed">
            Switch headline &amp; brand font live to compare styles:
          </p>

          <div className="space-y-2">
            {FONTS.map((font) => {
              const isSelected = selectedFont === font.id;
              return (
                <button
                  key={font.id}
                  type="button"
                  onClick={() => applyFont(font.id)}
                  className={`w-full text-left p-3 rounded-xl border transition-all text-xs flex items-start justify-between gap-2 ${
                    isSelected
                      ? "bg-paleBlue border-sky text-navy ring-1 ring-sky"
                      : "bg-white border-brandBorder hover:bg-brandBg text-ink"
                  }`}
                >
                  <div className="space-y-0.5">
                    <span
                      className="font-bold text-sm block"
                      style={{ fontFamily: font.fontFamily }}
                    >
                      {font.name}
                    </span>
                    <span className="text-[11px] text-ink-subtle block leading-tight">
                      {font.description}
                    </span>
                  </div>
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-navy text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={2.5} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-1 text-[11px] text-ink-subtle text-center">
            Active: <strong className="text-navy font-semibold">{FONTS.find(f => f.id === selectedFont)?.name}</strong>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white text-navy font-bold text-xs border border-brandBorder shadow-lg hover:shadow-xl hover:bg-paleBlue transition-all"
        >
          <Sliders size={16} strokeWidth={1.75} className="text-sky" />
          <span>Switch Font ({FONTS.find(f => f.id === selectedFont)?.name.split(" ")[0]})</span>
        </button>
      )}
    </aside>
  );
}

export default FontPreviewBar;
