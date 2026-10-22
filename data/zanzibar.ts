import { ZanzibarPackage } from "./types";

export const zanzibarHolidays: ZanzibarPackage[] = [
  {
    slug: "zanzibar-beach-holiday-4-days",
    title: "Zanzibar Beach Holiday",
    durationDays: 4,
    priceUSD: 850,
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80",
    summary: "Escape to the pristine white sands and turquoise waters of Zanzibar. This 4-day getaway is perfect for relaxing, swimming, and soaking up the sun.",
    highlights: [
      "Relax on Nungwi or Kendwa beaches",
      "Swim in the warm Indian Ocean",
      "Enjoy fresh seafood at beachfront restaurants",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Transfer to Beach",
        description: "Arrive at Zanzibar Airport. Meet our representative and transfer to your beach resort in Nungwi.",
        accommodation: "Nungwi Beach Resort",
      },
      {
        day: 2,
        title: "Beach Relaxation",
        description: "Spend the day relaxing on the beach. Optional water sports like jet skiing or kayaking are available.",
        accommodation: "Nungwi Beach Resort",
      },
      {
        day: 3,
        title: "Sunset Dhow Cruise",
        description: "Enjoy a free morning. In the afternoon, embark on a traditional dhow cruise to watch the sunset.",
        accommodation: "Nungwi Beach Resort",
      },
      {
        day: 4,
        title: "Departure",
        description: "Enjoy breakfast before your transfer back to Zanzibar Airport for your departure.",
        accommodation: "None",
      },
    ],
    inclusions: ["Airport transfers", "Beach resort accommodation", "Daily breakfast", "Sunset Dhow Cruise"],
    exclusions: ["International flights", "Lunch and dinner", "Tips", "Travel insurance"],
  },
  {
    slug: "stone-town-escape-3-days",
    title: "Stone Town Escape",
    durationDays: 3,
    priceUSD: 650,
    image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&w=800&q=80",
    summary: "Discover the rich history and culture of Stone Town, a UNESCO World Heritage Site. This short escape focuses on history, architecture, and local life.",
    highlights: [
      "Guided walking tour of Stone Town",
      "Visit the Old Fort and House of Wonders",
      "Explore the Darajani Market",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Stone Town Orientation",
        description: "Arrive and transfer to your hotel in Stone Town. Afternoon walking tour to get your bearings.",
        accommodation: "Stone Town Heritage Hotel",
      },
      {
        day: 2,
        title: "Historic Tour & Spice Farm",
        description: "Morning tour of the historic sites. Afternoon excursion to a local spice farm.",
        accommodation: "Stone Town Heritage Hotel",
      },
      {
        day: 3,
        title: "Departure",
        description: "Last-minute shopping at the market before your transfer to the airport.",
        accommodation: "None",
      },
    ],
    inclusions: ["Airport transfers", "Hotel accommodation", "Daily breakfast", "Guided tours"],
    exclusions: ["Flights", "Meals not mentioned", "Personal expenses"],
  },
  // Add the rest: Culture & Beach (5D), Honeymoon (6D), Island Discovery (7D)
];

// Excursions follow a very similar structure, but are usually 1 day (durationDays: 1).
export const zanzibarExcursions: ZanzibarPackage[] = [
  {
    slug: "stone-town-tour",
    title: "Stone Town Tour",
    durationDays: 1,
    priceUSD: 45,
    image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&w=800&q=80",
    summary: "A guided walking tour through the narrow alleys and historic landmarks of Stone Town.",
    highlights: ["Old Fort", "House of Wonders", "Darajani Market"],
    itinerary: [],
    inclusions: ["Professional guide", "Entry fees"],
    exclusions: ["Tips", "Personal items"],
  }
];