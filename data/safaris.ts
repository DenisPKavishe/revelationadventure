import { SafariPackage } from "./types";

export const safaris: SafariPackage[] = [
  {
    slug: "8-day-private-fly-in-safari",
    title: "8-Day Private Fly-In & Fly-Out Safari",
    durationDays: 8,
    durationNights: 7,
    category: "Private",
    style: "Mid-Range",
    priceUSD: 3180,
    image: "/images/safaris/8-day-private.jpg",
    summary: "Discover the best of northern Tanzania on a private 8-day safari designed for travelers seeking excellent wildlife viewing, authentic cultural encounters, and comfortable mid-range accommodation.",
    destinations: ["Arusha", "Tarangire", "Serengeti", "Ngorongoro", "Lake Eyasi"],
    travelStyles: ["Photography", "Adventure", "First-time visitor"],
    highlights: [
      "Private safari vehicle and dedicated professional guide",
      "Multiple game-drive days in the Serengeti",
      "Authentic Lake Eyasi cultural encounter",
      "Nairobi-Arusha-Nairobi routing"
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi → Arusha | Arrival & Arusha City Tour",
        description: "Begin your Tanzanian adventure with your journey from Nairobi to Arusha. Upon arrival, meet your professional safari representative and transfer to your hotel. After settling in, enjoy an introductory Arusha city tour.",
        accommodation: "Mvuli Hotel",
        accommodationSlug: "mvuli-hotel",
        meals: "Dinner"
      },
      {
        day: 2,
        title: "Arusha → Tarangire National Park",
        description: "After breakfast, depart Arusha for Tarangire National Park, famous for its huge elephant herds, ancient baobab trees, and the Tarangire River. Enjoy a full-day game drive.",
        accommodation: "Ngare Lodge",
        accommodationSlug: "ngare-lodge",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        day: 3,
        title: "Tarangire → Serengeti National Park",
        description: "Travel toward the world-famous Serengeti National Park. Upon entering the park, your game drive begins immediately, giving you the opportunity to spot wildlife along the way to camp.",
        accommodation: "Friends Serengeti Camp",
        accommodationSlug: "friends-serengeti-camp",
        meals: "Breakfast, Lunch, Dinner"
      }
      // Note: In your real file, fill out days 4 through 8 here based on the PDF.
    ],
    inclusions: ["All accommodations", "All meals as indicated", "Park fees", "4x4 Safari Jeep", "Professional Guide"],
    exclusions: ["International flights", "Tips", "Travel insurance", "Visa fees", "Alcoholic drinks"]
  },
  {
    slug: "1-day-tarangire-shared",
    title: "1-Day Tarangire National Park Safari",
    durationDays: 1,
    durationNights: 0,
    category: "Shared",
    style: "Budget",
    priceUSD: 250,
    image: "/images/safaris/1-day-tarangire.jpg",
    summary: "Discover the wild heart of Tanzania on a full-day visit to Tarangire, the Land of Giants. Travel from Arusha across the scenic Maasai steppe to a park known for elephant herds and iconic baobabs.",
    destinations: ["Arusha", "Tarangire"],
    travelStyles: ["First-time visitor", "Family"],
    highlights: [
      "Large elephant herds (often 20+)",
      "Iconic Baobab trees",
      "500+ recorded bird species",
      "Shared group departure from Arusha"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha → Tarangire → Arusha",
        description: "Hotel pick-up in Arusha at 06:30. Depart for Tarangire, arriving at 08:30. Enjoy morning and afternoon game drives along the Tarangire River, with a picnic lunch inside the park. Exit the park at 17:00 and return to Arusha by 19:00.",
        accommodation: "No accommodation (Day Trip)",
        accommodationSlug: "",
        meals: "Breakfast, Picnic Lunch, Dinner"
      }
    ],
    inclusions: ["All meals", "Park entry fees", "4x4 safari jeep", "Professional guide", "Bottled water"],
    exclusions: ["Flights", "Tips", "Travel insurance", "Visa fees", "Alcoholic drinks"]
  }
];