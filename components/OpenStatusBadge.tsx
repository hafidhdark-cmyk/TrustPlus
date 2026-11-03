"use client";

import React, { useState, useEffect } from "react";

interface OpenStatusBadgeProps {
  size?: "sm" | "md";
  showClosingTime?: boolean;
}

export function OpenStatusBadge({
  size = "md",
  showClosingTime = false,
}: OpenStatusBadgeProps) {
  const [status, setStatus] = useState<{
    isOpen: boolean;
    label: string;
    detail: string;
  } | null>(null);

  useEffect(() => {
    function computeStatus() {
      try {
        const now = new Date();
        // Africa/Lagos is UTC+1 with no DST
        const lagosFormatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Africa/Lagos",
          weekday: "short",
          hour: "numeric",
          minute: "numeric",
          hour12: false,
        });

        const parts = lagosFormatter.formatToParts(now);
        let weekday = "";
        let hour = 0;
        let minute = 0;

        for (const p of parts) {
          if (p.type === "weekday") weekday = p.value;
          if (p.type === "hour") hour = parseInt(p.value, 10);
          if (p.type === "minute") minute = parseInt(p.value, 10);
        }

        const currentTimeDecimal = hour + minute / 60;
        const isSunday = weekday === "Sun";

        // Hours: Mon-Sat 8:00 AM (8.0) to 9:00 PM (21.0)
        // Sunday: 12:00 PM (12.0) to 9:00 PM (21.0)
        const openTime = isSunday ? 12.0 : 8.0;
        const closeTime = 21.0;

        const isOpen = currentTimeDecimal >= openTime && currentTimeDecimal < closeTime;

        let detail = "";
        if (isOpen) {
          detail = "Closes 9 PM";
        } else {
          if (isSunday) {
            if (currentTimeDecimal < openTime) {
              detail = "Opens 12 PM";
            } else {
              detail = "Opens Mon 8 AM";
            }
          } else {
            if (currentTimeDecimal < openTime) {
              detail = "Opens 8 AM";
            } else if (weekday === "Sat") {
              detail = "Opens Sun 12 PM";
            } else {
              detail = "Opens 8 AM";
            }
          }
        }

        setStatus({
          isOpen,
          label: isOpen ? "Open now" : "Closed",
          detail,
        });
      } catch {
        // Fallback if timezone not supported
        setStatus({
          isOpen: true,
          label: "Open today",
          detail: "8 AM - 9 PM",
        });
      }
    }

    computeStatus();
    const interval = setInterval(computeStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  // During SSR or initial mount, render a clean server-safe badge
  if (!status) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 font-medium rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 whitespace-nowrap flex-shrink-0 ${
          size === "sm" ? "px-2.5 py-1 text-xs" : "px-3 py-1 text-xs"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Open today</span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-semibold rounded-full tracking-wide whitespace-nowrap flex-shrink-0 transition-colors ${
        status.isOpen
          ? "bg-[#E6F8EE] text-[#0F7B3F] border border-[#A6E8C2]"
          : "bg-slate-100 text-slate-700 border border-slate-300"
      } ${size === "sm" ? "px-3 py-1 text-xs" : "px-3.5 py-1.5 text-xs"}`}
    >
      <span
        className={`w-2 h-2 rounded-full flex-shrink-0 ${
          status.isOpen ? "bg-[#0F7B3F] animate-pulse" : "bg-slate-500"
        }`}
      />
      <span className="font-bold">{status.label}</span>
      {showClosingTime && (
        <span className="text-[11px] font-medium text-slate-500 whitespace-nowrap">
          · {status.detail}
        </span>
      )}
    </span>
  );
}
