"use client";

import React from "react";
import { MapPin, Navigation } from "lucide-react";
import { Branch } from "@/data/site";

interface MapPanelProps {
  branches: Branch[];
  selectedBranchId: string | null;
  onSelectBranch: (id: string) => void;
}

export function MapPanel({
  branches,
  selectedBranchId,
  onSelectBranch,
}: MapPanelProps) {
  return (
    <div className="relative w-full h-[340px] sm:h-[380px] lg:h-[420px] rounded-3xl bg-white border border-brandBorder overflow-hidden shadow-sm flex flex-col">
      {/* Map Header / Context Strip */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-brandBorder bg-white/95 z-20">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-sky" />
          <span className="text-xs font-bold uppercase tracking-wider text-navy">
            Abeokuta Network Map
          </span>
          <span className="text-[11px] text-ink-subtle hidden sm:inline">
            · Schematic Geographic View
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-paleBlue text-navy border border-sky/20">
            Ogun State, NG
          </span>
        </div>
      </div>

      {/* Stylized Vector Canvas */}
      <div className="relative flex-1 bg-[#F3F6FA] overflow-hidden select-none">
        {/* Soft Grid Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="map-grid-pattern"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 32 0 L 0 0 0 32"
                fill="none"
                stroke="#DCE3EE"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#map-grid-pattern)" />

          {/* Stylized Abeokuta Waterway / Ogun River Curve */}
          <path
            d="M -20 180 C 120 160, 240 240, 360 210 S 520 280, 700 240"
            fill="none"
            stroke="#D0E6F7"
            strokeWidth="16"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M -20 180 C 120 160, 240 240, 360 210 S 520 280, 700 240"
            fill="none"
            stroke="#B6DCF5"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Main Transit Arteries (Quarry Rd, Ita-Oshin Rd, Lagos-Abeokuta corridor) */}
          {/* Quarry Road Corridor */}
          <path
            d="M 60 320 Q 220 280 280 240 T 560 120"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M 60 320 Q 220 280 280 240 T 560 120"
            fill="none"
            stroke="#CBD5E1"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Ita-Oshin to Oke-Ata Corridor */}
          <path
            d="M 120 60 Q 200 130 380 110 T 620 90"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M 120 60 Q 200 130 380 110 T 620 90"
            fill="none"
            stroke="#CBD5E1"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Connecting Connector Route */}
          <path
            d="M 280 240 Q 240 180 220 120"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M 280 240 Q 240 180 220 120"
            fill="none"
            stroke="#94A3B8"
            strokeWidth="2.5"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
        </svg>

        {/* Territory Area Watermark Labels */}
        <div
          className="absolute left-6 bottom-6 text-[11px] font-bold uppercase tracking-widest text-slate-400/80 pointer-events-none"
          aria-hidden="true"
        >
          Ibara Central District
        </div>
        <div
          className="absolute left-8 top-6 text-[11px] font-bold uppercase tracking-widest text-slate-400/80 pointer-events-none"
          aria-hidden="true"
        >
          Oke-Ata / Ita-Oshin Axis
        </div>
        <div
          className="absolute right-8 top-12 text-[11px] font-bold uppercase tracking-widest text-slate-400/80 pointer-events-none"
          aria-hidden="true"
        >
          Ogun River Basin
        </div>

        {/* Interactive Branch Pins */}
        {branches.map((branch) => {
          const isSelected = selectedBranchId === branch.id;

          return (
            <button
              key={branch.id}
              type="button"
              onClick={() => onSelectBranch(branch.id)}
              style={{
                left: `${branch.mapCoordinates.x}%`,
                top: `${branch.mapCoordinates.y}%`,
              }}
              className="absolute -translate-x-1/2 -translate-y-full group focus:outline-none z-10 transition-transform duration-200"
              aria-label={`Select branch: ${branch.name}`}
            >
              {/* Tooltip / Label */}
              <div
                className={`mb-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap shadow-md transition-all duration-150 flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-navy text-white ring-2 ring-sky scale-105"
                    : "bg-white text-navy border border-brandBorder group-hover:bg-paleBlue"
                }`}
              >
                <span>{branch.shortName}</span>
                {branch.tag && (
                  <span
                    className={`text-[9px] px-1 rounded uppercase font-bold ${
                      branch.tag === "Main branch"
                        ? "bg-sky text-white"
                        : "bg-red text-white"
                    }`}
                  >
                    {branch.tag === "Main branch" ? "Main" : "New"}
                  </span>
                )}
              </div>

              {/* Pin Icon with Pulse */}
              <div className="relative flex items-center justify-center mx-auto">
                {isSelected && (
                  <span className="absolute -inset-1.5 rounded-full bg-sky/40 animate-ping" />
                )}
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-transform duration-150 ${
                    isSelected
                      ? "bg-navy text-sky ring-4 ring-white scale-110"
                      : "bg-white text-navy border-2 border-sky group-hover:scale-105 group-hover:bg-paleBlue"
                  }`}
                >
                  <MapPin size={20} strokeWidth={1.75} />
                </div>
              </div>

              {/* Anchor dot */}
              <div className="w-1.5 h-1.5 rounded-full bg-navy/60 mx-auto mt-0.5" />
            </button>
          );
        })}
      </div>

      {/* Map Footer Bar */}
      <div className="px-5 py-2.5 bg-white border-t border-brandBorder flex items-center justify-between text-xs text-ink-muted">
        <span className="flex items-center gap-2">
          <Navigation size={20} strokeWidth={1.75} className="text-sky" />
          <span>Click any pin to highlight branch details below</span>
        </span>
        <span className="font-semibold text-navy">3 Stores in Abeokuta</span>
      </div>
    </div>
  );
}

export default MapPanel;
