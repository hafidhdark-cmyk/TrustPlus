import React from "react";

interface LogoProps {
  compact?: boolean;
  className?: string;
  theme?: "default" | "light-text";
}

export function Logo({ compact = false, className = "", theme = "default" }: LogoProps) {
  const isLight = theme === "light-text";

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Plus-sign mark: Sky blue with navy offset shadow as in signboard */}
      <div
        className={`relative flex-shrink-0 flex items-center justify-center ${
          compact ? "w-8 h-8" : "w-10 h-10 md:w-11 md:h-11"
        }`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Navy offset shadow base on bottom-right */}
          <path
            d="M26 14 H38 V26 H50 V38 H38 V50 H26 V38 H14 V26 H26 V14 Z"
            fill="#1E1B5B"
            className={isLight ? "opacity-90" : ""}
          />

          {/* Sky blue primary plus sign on top-left */}
          <path
            d="M20 4 H32 V16 H44 V28 H32 V40 H20 V28 H8 V16 H20 V4 Z"
            fill="#3CA9E2"
          />

          {/* Clean dividing dynamic swoosh cutout / highlight */}
          <path
            d="M10 26 C20 26 26 20 26 10 C26 22 32 28 44 28 C32 28 28 32 28 44 C28 32 22 26 10 26 Z"
            fill="#FFFFFF"
            opacity="0.85"
          />

          {/* Core navy accent notch on lower right quadrant of the cross */}
          <path
            d="M32 28 H44 V34 C44 34 38 34 34 38 V44 H28 V32 C30 30 32 28 32 28 Z"
            fill="#1E1B5B"
          />
        </svg>
      </div>

      {/* Brand Wordmark: Bold serif TrustPlus with red serif Pharmacy & Stores */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-serif font-black tracking-tight ${
            isLight ? "text-white" : "text-navy"
          } ${
            compact
              ? "text-lg tracking-tight"
              : "text-xl md:text-2xl lg:text-[26px] tracking-tight"
          }`}
          style={{ letterSpacing: "-0.03em" }}
        >
          Trust<span className="font-extrabold">Plus</span>
        </span>
        <span
          className={`font-serif italic font-semibold tracking-normal text-red ${
            compact ? "text-[10px]" : "text-xs md:text-[13px]"
          }`}
          style={{ marginTop: compact ? "1px" : "2px" }}
        >
          Pharmacy &amp; Stores
        </span>
      </div>
    </div>
  );
}

export default Logo;
