export type SafariCategory = "Private" | "Shared";
export type SafariStyle = "Luxury" | "Mid-Range" | "Budget";
export type KilimanjaroDifficulty = "Moderate" | "Challenging" | "Strenuous";

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  accommodation: string;
  accommodationSlug: string;
  meals: string;
}

export interface SafariPackage {
  slug: string;
  title: string;
  durationDays: number;
  durationNights: number;
  category: SafariCategory;
  style: SafariStyle;
  priceUSD: number;
  image: string;
  summary: string;
  destinations: string[];
  travelStyles: string[];
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
}

/* ---------- CARTABLE SHAPE ---------- */
export type CartablePackage = {
  slug: string;
  title: string;
  durationDays: number;
  durationNights: number;
  priceUSD: number;
  image: string;
  destinations: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    accommodation: string;
    meals: string;
  }[];
  inclusions: string[];
  exclusions: string[];
};

export interface Accommodation {
  slug: string;
  name: string;
  location: string;
  description: string;
  amenities: string[];
  images: string[];
}

/* ---------- KILIMANJARO ---------- */
export interface KilimanjaroRoute {
  slug: string;
  title: string;
  durationDays: number;
  durationNights: number;
  priceUSD: number;
  image: string;
  difficulty: KilimanjaroDifficulty;
  successRate: string;
  summary: string;
  destinations: string[];
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    accommodation: string;
    meals: string;
    elevation: string;
  }[];
  inclusions: string[];
  exclusions: string[];
}

/* ---------- ZANZIBAR ---------- */
export interface ZanzibarPackage {
  slug: string;
  title: string;
  durationDays: number;
  durationNights: number;
  priceUSD: number;
  image: string;
  summary: string;
  destinations: string[];
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    accommodation: string;
    meals: string;
  }[];
  inclusions: string[];
  exclusions: string[];
}