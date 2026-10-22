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
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    summary: "Discover the best of northern Tanzania on a private 8-day safari designed for travelers seeking excellent wildlife viewing, authentic cultural encounters, and comfortable mid-range accommodation.",
    destinations: ["Arusha", "Tarangire", "Serengeti", "Ngorongoro", "Lake Eyasi"],
    travelStyles: ["Private", "Honeymoon", "Family", "Photography"],
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
        description: "Begin your Tanzanian adventure with your journey from Nairobi to Arusha.",
        accommodation: "Mvuli Hotel",
        accommodationSlug: "mvuli-hotel",
        meals: "Dinner"
      },
      {
        day: 2,
        title: "Arusha → Tarangire National Park",
        description: "After breakfast, depart Arusha for Tarangire National Park.",
        accommodation: "Ngare Lodge",
        accommodationSlug: "ngare-lodge",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        day: 3,
        title: "Tarangire → Serengeti National Park",
        description: "Travel toward the world-famous Serengeti National Park.",
        accommodation: "Friends Serengeti Camp",
        accommodationSlug: "friends-serengeti-camp",
        meals: "Breakfast, Lunch, Dinner"
      }
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
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    summary: "Discover the wild heart of Tanzania on a full-day visit to Tarangire, the Land of Giants.",
    destinations: ["Arusha", "Tarangire"],
    travelStyles: ["Day Trips", "Family"],
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
        description: "Hotel pick-up in Arusha at 06:30. Depart for Tarangire, arriving at 08:30.",
        accommodation: "No accommodation (Day Trip)",
        accommodationSlug: "",
        meals: "Breakfast, Picnic Lunch, Dinner"
      }
    ],
    inclusions: ["All meals", "Park entry fees", "4x4 safari jeep", "Professional guide", "Bottled water"],
    exclusions: ["Flights", "Tips", "Travel insurance", "Visa fees", "Alcoholic drinks"]
  },
  {
    slug: "3-day-serengeti-migration-safari",
    title: "3-Day Serengeti Great Migration Safari",
    durationDays: 3,
    durationNights: 2,
    category: "Private",
    style: "Mid-Range",
    priceUSD: 1200,
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80",
    summary: "Follow the Great Migration through the Serengeti on this 3-day safari.",
    destinations: ["Serengeti", "Ngorongoro"],
    travelStyles: ["Migration", "Photography", "Family"],
    highlights: ["Great Migration sightings", "Serengeti plains", "Ngorongoro Crater"],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Serengeti",
        description: "Travel to the Serengeti and start game drives.",
        accommodation: "Serengeti Tented Camp",
        accommodationSlug: "serengeti-tented-camp",
        meals: "Lunch, Dinner"
      },
      {
        day: 2,
        title: "Full Day Serengeti",
        description: "Full-day game drive following the migration.",
        accommodation: "Serengeti Tented Camp",
        accommodationSlug: "serengeti-tented-camp",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        day: 3,
        title: "Ngorongoro Crater and Return",
        description: "Descend into the Ngorongoro Crater, then return to Arusha.",
        accommodation: "No accommodation",
        accommodationSlug: "",
        meals: "Breakfast, Lunch"
      }
    ],
    inclusions: ["Park fees", "Camping gear", "All meals", "Professional guide"],
    exclusions: ["Tips", "Travel insurance", "Visa fees"]
  },
  {
    slug: "6-day-honeymoon-safari-zanzibar",
    title: "6-Day Honeymoon Safari & Zanzibar",
    durationDays: 6,
    durationNights: 5,
    category: "Private",
    style: "Luxury",
    priceUSD: 4500,
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80",
    summary: "Combine a romantic safari in the Serengeti with a luxurious beach escape in Zanzibar.",
    destinations: ["Serengeti", "Zanzibar"],
    travelStyles: ["Honeymoon", "Private", "Photography"],
    highlights: ["Romantic candlelit dinners", "Private game drives", "Luxury beach resort in Zanzibar"],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Arusha",
        description: "Welcome to Tanzania. Transfer to your luxury lodge.",
        accommodation: "Arusha Coffee Lodge",
        accommodationSlug: "arusha-coffee-lodge",
        meals: "Dinner"
      },
      {
        day: 2,
        title: "Fly to Serengeti",
        description: "Fly to the Serengeti for an afternoon game drive.",
        accommodation: "Four Seasons Serengeti",
        accommodationSlug: "four-seasons-serengeti",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        day: 3,
        title: "Full Day Serengeti",
        description: "Private game drive with a romantic sundowner.",
        accommodation: "Four Seasons Serengeti",
        accommodationSlug: "four-seasons-serengeti",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        day: 4,
        title: "Fly to Zanzibar",
        description: "Fly to Zanzibar and transfer to your beach resort.",
        accommodation: "The Residence Zanzibar",
        accommodationSlug: "residence-zanzibar",
        meals: "Breakfast, Dinner"
      },
      {
        day: 5,
        title: "Zanzibar Beach Day",
        description: "Relax on the beach or enjoy optional water sports.",
        accommodation: "The Residence Zanzibar",
        accommodationSlug: "residence-zanzibar",
        meals: "Breakfast, Dinner"
      },
      {
        day: 6,
        title: "Departure",
        description: "Transfer to Zanzibar Airport for your flight home.",
        accommodation: "No accommodation",
        accommodationSlug: "",
        meals: "Breakfast"
      }
    ],
    inclusions: ["Internal flights", "Luxury accommodations", "All meals as indicated", "Private guide"],
    exclusions: ["International flights", "Tips", "Travel insurance", "Visa fees"]
  },
  {
    slug: "2-day-family-safari-tarangire",
    title: "2-Day Family Safari in Tarangire",
    durationDays: 2,
    durationNights: 1,
    category: "Private",
    style: "Mid-Range",
    priceUSD: 800,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    summary: "A short, kid-friendly safari in Tarangire National Park, perfect for families with young children.",
    destinations: ["Tarangire"],
    travelStyles: ["Family", "Private"],
    highlights: ["Elephant herds", "Kid-friendly game drives", "Family lodge with pool"],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Tarangire",
        description: "Drive to Tarangire for a family-friendly game drive.",
        accommodation: "Tarangire Safari Lodge",
        accommodationSlug: "tarangire-safari-lodge",
        meals: "Lunch, Dinner"
      },
      {
        day: 2,
        title: "Tarangire to Arusha",
        description: "Morning game drive, then return to Arusha.",
        accommodation: "No accommodation",
        accommodationSlug: "",
        meals: "Breakfast, Lunch"
      }
    ],
    inclusions: ["Park fees", "Accommodation", "All meals", "Professional guide"],
    exclusions: ["Tips", "Travel insurance", "Visa fees"]
  }
];