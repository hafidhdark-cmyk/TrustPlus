"use client";

import React from "react";
import { MapPin, Clock, Phone, Navigation, Store } from "lucide-react";
import { Branch } from "@/data/site";
import { OpenStatusBadge } from "@/components/OpenStatusBadge";

interface BranchCardProps {
  branch: Branch;
  isSelected?: boolean;
  onSelect?: () => void;
}

export function BranchCard({
  branch,
  isSelected = false,
  onSelect,
}: BranchCardProps) {
  return (
    <article
      onClick={onSelect}
      className={`group relative flex flex-col justify-between bg-white rounded-3xl border transition-all duration-200 overflow-hidden ${
        isSelected
          ? "border-sky ring-2 ring-sky/20 shadow-lg -translate-y-1"
          : "border-brandBorder hover:border-sky/50 hover:shadow-md hover:-translate-y-0.5"
      }`}
    >
      <div>
        {/* Clearly Labelled Storefront Photo Slot */}
        <div className="relative w-full h-44 bg-[#EEF4F9] border-b border-brandBorder flex flex-col items-center justify-center text-center p-4 overflow-hidden select-none">
          {/* Subtle architectural background pattern */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true">
            <svg width="100%" height="100%">
              <pattern id={`card-pattern-${branch.id}`} width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#1E1B5B" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill={`url(#card-pattern-${branch.id})`} />
            </svg>
          </div>

          {/* Storefront slot label and icon */}
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-2xl bg-white border border-brandBorder shadow-sm flex items-center justify-center text-navy group-hover:text-sky transition-colors">
              <Store size={24} strokeWidth={1.75} />
            </div>
            <div className="space-y-0.5">
              <p className="text-xs font-bold text-navy uppercase tracking-wider">
                Storefront Photo Slot
              </p>
              <p className="text-[11px] text-ink-muted">
                {branch.shortName} Abeokuta Facility
              </p>
            </div>
          </div>

          {/* Tag Badges over Image Slot */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
            {branch.tag === "Main branch" && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-navy text-white shadow-sm">
                Main branch
              </span>
            )}
            {branch.tag === "Newly opened" && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-red text-white shadow-sm">
                Newly opened
              </span>
            )}
          </div>

          {/* Open Status Badge */}
          <div className="absolute top-3 right-3 z-10">
            <OpenStatusBadge size="sm" showClosingTime={false} />
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="font-serif font-bold text-navy text-xl tracking-tight leading-snug">
              {branch.name}
            </h3>
            <p className="text-xs font-semibold text-sky mt-0.5">
              {branch.area}
            </p>
          </div>

          {/* Details list */}
          <div className="space-y-3 pt-1 text-sm text-ink-muted">
            {/* Address */}
            <div className="flex items-start gap-2.5">
              <MapPin
                size={20}
                strokeWidth={1.75}
                className="text-sky flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="leading-relaxed text-ink">{branch.address}</span>
            </div>

            {/* Operating Hours */}
            <div className="flex items-start gap-2.5">
              <Clock
                size={20}
                strokeWidth={1.75}
                className="text-sky flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div className="text-xs space-y-0.5 leading-snug">
                <p className="font-medium text-ink">{branch.hours.monSat}</p>
                <p className="text-ink-subtle">{branch.hours.sun}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2.5">
              <Phone
                size={20}
                strokeWidth={1.75}
                className="text-sky flex-shrink-0"
                aria-hidden="true"
              />
              <a
                href={`tel:${branch.phoneRaw}`}
                className="font-medium text-navy hover:text-sky transition-colors text-xs sm:text-sm"
              >
                {branch.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 pt-0 grid grid-cols-2 gap-2.5">
        <a
          href={branch.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-paleBlue hover:bg-[#D4EAF8] text-navy font-semibold text-xs sm:text-sm border border-sky/30 transition-all min-h-[44px]"
        >
          <Navigation size={20} strokeWidth={1.75} className="text-sky" />
          <span>Get directions</span>
        </a>

        <a
          href={`tel:${branch.phoneRaw}`}
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-brandBorder bg-white hover:bg-brandBg text-ink font-semibold text-xs sm:text-sm transition-all min-h-[44px]"
        >
          <Phone size={20} strokeWidth={1.75} className="text-navy" />
          <span>Call</span>
        </a>
      </div>
    </article>
  );
}

export default BranchCard;
