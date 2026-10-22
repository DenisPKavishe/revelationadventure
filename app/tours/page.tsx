"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { safaris } from "@/data/safaris";

import { SlidersHorizontal, X, ChevronDown, Check } from "lucide-react";
import SafariCard from "../components/SafariCard";

// --- Filter Data Definitions ---
const filterOptions = {
  tripType: ["Private Safari", "Shared Group Safari"],
  comfortLevel: ["Luxury", "Mid-range", "Budget"],
  duration: ["1 day", "2–4 days", "5–7 days", "8–12 days", "12+ days"],
  destination: ["Serengeti", "Ngorongoro", "Tarangire", "Lake Manyara", "Kilimanjaro", "Zanzibar"],
  price: ["Under $1,500", "$1,500–$3,000", "$3,000–$5,000", "$5,000+"],
  travelStyle: ["Family", "Honeymoon", "Photography", "First-time visitor", "Adventure", "Safari + Beach"],
};

export default function AllToursPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // --- Active Filters State ---
  const [activeFilters, setActiveFilters] = useState({
    tripType: [] as string[],
    comfortLevel: [] as string[],
    duration: [] as string[],
    destination: [] as string[],
    price: [] as string[],
    travelStyle: [] as string[],
  });

  const toggleFilter = (category: keyof typeof activeFilters, value: string) => {
    setActiveFilters((prev) => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
  };

  const clearAll = () => {
    setActiveFilters({
      tripType: [],
      comfortLevel: [],
      duration: [],
      destination: [],
      price: [],
      travelStyle: [],
    });
  };

  // --- Filtering Logic ---
  const filteredSafaris = useMemo(() => {
    return safaris.filter((safari) => {
      // Trip Type
      if (activeFilters.tripType.length > 0) {
        const isPrivate = activeFilters.tripType.includes("Private Safari") && safari.category === "Private";
        const isShared = activeFilters.tripType.includes("Shared Group Safari") && safari.category === "Shared";
        if (!isPrivate && !isShared) return false;
      }

      // Comfort Level
      if (activeFilters.comfortLevel.length > 0) {
        const safariStyle = safari.style.toLowerCase();
        const matches = activeFilters.comfortLevel.some(
          (level) => level.toLowerCase().replace("-", " ") === safariStyle.replace("-", " ")
        );
        if (!matches) return false;
      }

      // Duration
      if (activeFilters.duration.length > 0) {
        const days = safari.durationDays;
        const matches = activeFilters.duration.some((range) => {
          if (range === "1 day") return days === 1;
          if (range === "2–4 days") return days >= 2 && days <= 4;
          if (range === "5–7 days") return days >= 5 && days <= 7;
          if (range === "8–12 days") return days >= 8 && days <= 12;
          if (range === "12+ days") return days > 12;
          return false;
        });
        if (!matches) return false;
      }

      // Destination
      if (activeFilters.destination.length > 0) {
        const matches = activeFilters.destination.some((dest) =>
          safari.destinations.some((d) => d.toLowerCase().includes(dest.toLowerCase()))
        );
        if (!matches) return false;
      }

      // Price
      if (activeFilters.price.length > 0) {
        const price = safari.priceUSD;
        const matches = activeFilters.price.some((range) => {
          if (range === "Under $1,500") return price < 1500;
          if (range === "$1,500–$3,000") return price >= 1500 && price <= 3000;
          if (range === "$3,000–$5,000") return price > 3000 && price <= 5000;
          if (range === "$5,000+") return price > 5000;
          return false;
        });
        if (!matches) return false;
      }

      // Travel Style
      if (activeFilters.travelStyle.length > 0) {
        const matches = activeFilters.travelStyle.some((style) =>
          safari.travelStyles?.includes(style)
        );
        if (!matches) return false;
      }

      return true;
    });
  }, [activeFilters]);

  const activeFilterCount = Object.values(activeFilters).reduce((acc, curr) => acc + curr.length, 0);

  // --- Reusable Sidebar Component ---
  const FilterSidebar = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <SlidersHorizontal size={20} /> Filters
        </h2>
        {activeFilterCount > 0 && (
          <button onClick={clearAll} className="text-sm text-brand-orange hover:underline font-medium">
            Clear all ({activeFilterCount})
          </button>
        )}
      </div>

      {/* Trip Type */}
      <FilterSection
        title="Trip Type"
        options={filterOptions.tripType}
        activeOptions={activeFilters.tripType}
        onToggle={(val) => toggleFilter("tripType", val)}
      />

      {/* Comfort Level */}
      <FilterSection
        title="Comfort Level"
        options={filterOptions.comfortLevel}
        activeOptions={activeFilters.comfortLevel}
        onToggle={(val) => toggleFilter("comfortLevel", val)}
      />

      {/* Duration */}
      <FilterSection
        title="Duration"
        options={filterOptions.duration}
        activeOptions={activeFilters.duration}
        onToggle={(val) => toggleFilter("duration", val)}
      />

      {/* Destination */}
      <FilterSection
        title="Destination"
        options={filterOptions.destination}
        activeOptions={activeFilters.destination}
        onToggle={(val) => toggleFilter("destination", val)}
      />

      {/* Price */}
      <FilterSection
        title="Price per person"
        options={filterOptions.price}
        activeOptions={activeFilters.price}
        onToggle={(val) => toggleFilter("price", val)}
      />

      {/* Travel Style */}
      <FilterSection
        title="Travel Style"
        options={filterOptions.travelStyle}
        activeOptions={activeFilters.travelStyle}
        onToggle={(val) => toggleFilter("travelStyle", val)}
      />
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Small Hero */}
      <div className="relative h-48 md:h-64 w-full bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1920&q=80"
          alt="All Tours"
          fill
          sizes="100vw"
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2">Our Safari Packages</h1>
          <p className="text-white/90 text-sm md:text-lg max-w-2xl">
            Find the perfect itinerary for your African adventure.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex gap-8 items-start">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0 sticky top-24 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <FilterSidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Mobile Filter Toggle & Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600 font-medium">
              Showing <span className="text-black font-bold">{filteredSafaris.length}</span> results
            </p>
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm"
            >
              <SlidersHorizontal size={16} /> Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
            </button>
          </div>

          {/* Grid */}
          {filteredSafaris.length > 0 ? (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredSafaris.map((safari) => (
                <SafariCard key={safari.slug} safari={safari} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 rounded-2xl text-center border border-gray-200">
              <h3 className="text-xl font-bold mb-2">No safaris found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your filters to see more results.</p>
              <button onClick={clearAll} className="text-brand-orange font-semibold hover:underline">
                Clear all filters
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Filter Slide-over */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[100] flex lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />

          {/* Panel */}
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-xl flex flex-col animate-slide-in">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-bold">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-2 text-gray-500 hover:text-black">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4">
              <FilterSidebar />
            </div>

            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 rounded-lg transition"
              >
                Show {filteredSafaris.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- Helper Component for Filter Groups ---
function FilterSection({
  title,
  options,
  activeOptions,
  onToggle,
}: {
  title: string;
  options: string[];
  activeOptions: string[];
  onToggle: (val: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b border-gray-100 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3"
      >
        {title}
        <ChevronDown size={16} className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      
      {isOpen && (
        <div className="space-y-2">
          {options.map((option) => {
            const isChecked = activeOptions.includes(option);
            return (
              <label key={option} className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${isChecked ? "bg-brand-orange border-brand-orange" : "border-gray-300 group-hover:border-brand-orange"}`}>
                  {isChecked && <Check size={14} className="text-white" />}
                </div>
                <span className={`text-sm ${isChecked ? "text-black font-medium" : "text-gray-600"}`}>
                  {option}
                </span>
                <input
                  type="checkbox"
                  className="hidden"
                  checked={isChecked}
                  onChange={() => onToggle(option)}
                />
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}