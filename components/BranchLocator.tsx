"use client";

import React, { useState, useMemo } from "react";
import { Search, MapPin, X, RotateCcw } from "lucide-react";
import { siteData, Branch } from "@/data/site";
import { BranchCard } from "@/components/BranchCard";
import { MapPanel } from "@/components/MapPanel";

type FilterType = "all" | "main" | "new";

export function BranchLocator() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<FilterType>("all");
  const [selectedBranchId, setSelectedBranchId] = useState<string | null>("ibara");

  const filteredBranches = useMemo(() => {
    return siteData.branches.filter((branch) => {
      // Filter tag match
      if (filterType === "main" && branch.tag !== "Main branch") return false;
      if (filterType === "new" && branch.tag !== "Newly opened") return false;

      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = branch.name.toLowerCase().includes(query);
        const matchesAddress = branch.address.toLowerCase().includes(query);
        const matchesArea = branch.area.toLowerCase().includes(query);
        return matchesName || matchesAddress || matchesArea;
      }

      return true;
    });
  }, [searchQuery, filterType]);

  const handleReset = () => {
    setSearchQuery("");
    setFilterType("all");
    setSelectedBranchId("ibara");
  };

  return (
    <section
      id="branches"
      className="py-16 md:py-24 bg-brandBg scroll-mt-20 border-b border-brandBorder"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-paleBlue border border-sky/30 text-navy text-xs font-semibold tracking-wide">
              <MapPin size={20} strokeWidth={1.75} className="text-sky" />
              <span>Abeokuta Branch Network</span>
            </div>
            <h2 className="font-serif font-black text-navy text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15]">
              Find your nearest pharmacy &amp; store
            </h2>
            <p className="text-ink-muted text-base sm:text-lg leading-relaxed">
              Serving the Abeokuta community across three convenient branches in Ibara and Oke-Ata. Walk in today or request home delivery via WhatsApp.
            </p>
          </div>

          <div className="text-sm font-semibold text-ink-muted bg-white px-4 py-2 rounded-xl border border-brandBorder shadow-sm self-start md:self-auto">
            Opening Hours: Mon - Sat 8 AM - 9 PM · Sun 12 PM - 9 PM
          </div>
        </div>

        {/* Search, Filter Controls & Stylized Map Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Search & Filter Controls */}
          <div className="lg:col-span-5 flex flex-col space-y-6 bg-white p-6 sm:p-7 rounded-3xl border border-brandBorder shadow-sm">
            <div className="space-y-2">
              <label
                htmlFor="branch-search-input"
                className="text-xs font-bold uppercase tracking-wider text-navy"
              >
                Search by Street, Area or Branch
              </label>
              <div className="relative flex items-center">
                <Search
                  size={18}
                  strokeWidth={1.75}
                  className="absolute left-3.5 text-sky pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  id="branch-search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter (e.g. Ibara, Quarry, Oke-Ata...)"
                  className="w-full pl-10 pr-10 py-3 rounded-xl border border-brandBorder bg-brandBg text-ink placeholder-ink-subtle text-sm focus:outline-none focus:ring-2 focus:ring-sky focus:bg-white transition-all min-h-[44px]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 p-1 text-ink-subtle hover:text-ink focus:outline-none"
                    aria-label="Clear search"
                  >
                    <X size={20} strokeWidth={1.75} />
                  </button>
                )}
              </div>
            </div>

            {/* Filter Chips */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-navy">
                Filter by Category
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setFilterType("all")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all min-h-[40px] flex items-center gap-1.5 ${
                    filterType === "all"
                      ? "bg-navy text-white shadow-sm"
                      : "bg-brandBg text-ink hover:bg-paleBlue border border-brandBorder"
                  }`}
                >
                  <span>All Branches</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                      filterType === "all"
                        ? "bg-white/20 text-white"
                        : "bg-slate-200 text-ink"
                    }`}
                  >
                    3
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setFilterType("main")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all min-h-[40px] flex items-center gap-1.5 ${
                    filterType === "main"
                      ? "bg-navy text-white shadow-sm"
                      : "bg-brandBg text-ink hover:bg-paleBlue border border-brandBorder"
                  }`}
                >
                  <span>Main Branch</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                      filterType === "main"
                        ? "bg-white/20 text-white"
                        : "bg-slate-200 text-ink"
                    }`}
                  >
                    1
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setFilterType("new")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all min-h-[40px] flex items-center gap-1.5 ${
                    filterType === "new"
                      ? "bg-red text-white shadow-sm"
                      : "bg-brandBg text-ink hover:bg-paleBlue border border-brandBorder"
                  }`}
                >
                  <span>Newly Opened</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                      filterType === "new"
                        ? "bg-white/20 text-white"
                        : "bg-slate-200 text-ink"
                    }`}
                  >
                    1
                  </span>
                </button>
              </div>
            </div>

            {/* Quick Result Status */}
            <div className="pt-2 border-t border-brandBorder flex items-center justify-between text-xs text-ink-muted">
              <span>
                Showing {filteredBranches.length} of {siteData.branches.length} locations
              </span>
              {(searchQuery || filterType !== "all") && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-sky hover:text-sky-dark font-medium underline"
                >
                  <RotateCcw size={20} strokeWidth={1.75} />
                  <span>Reset filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Stylized Map Canvas */}
          <div className="lg:col-span-7">
            <MapPanel
              branches={siteData.branches}
              selectedBranchId={selectedBranchId}
              onSelectBranch={(id) => setSelectedBranchId(id)}
            />
          </div>
        </div>

        {/* Branch Cards Grid */}
        <div className="pt-4">
          {filteredBranches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredBranches.map((branch) => (
                <BranchCard
                  key={branch.id}
                  branch={branch}
                  isSelected={selectedBranchId === branch.id}
                  onSelect={() => setSelectedBranchId(branch.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 px-6 bg-white rounded-3xl border border-brandBorder max-w-md mx-auto space-y-4">
              <div className="w-12 h-12 rounded-full bg-paleBlue text-navy mx-auto flex items-center justify-center">
                <Search size={24} strokeWidth={1.75} />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-navy text-lg">
                  No matching branches found
                </h3>
                <p className="text-xs text-ink-muted">
                  No branch matches &quot;{searchQuery}&quot;. Please check the spelling or explore all three Abeokuta locations.
                </p>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2.5 rounded-xl bg-navy text-white text-xs font-semibold hover:bg-navy-dark transition-colors"
              >
                Show all 3 branches
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BranchLocator;
