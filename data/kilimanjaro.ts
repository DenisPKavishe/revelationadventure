import { KilimanjaroRoute } from "./types";

export const kilimanjaroRoutes: KilimanjaroRoute[] = [
  {
    slug: "machame-route-7-days",
    title: "Machame Route – 7 Days",
    durationDays: 7,
    priceUSD: 2100,
    image: "https://images.unsplash.com/photo-1522198428577-adf2e9efc653?auto=format&fit=crop&w=800&q=80",
    difficulty: "Challenging",
    successRate: "85%",
    summary: "The 'Whiskey Route' is the most popular route on Kilimanjaro. It offers diverse landscapes, from rainforest to alpine desert, and excellent acclimatization.",
    highlights: [
      "Scenic views of the Shira Plateau",
      "Barranco Wall climb",
      "High success rate due to gradual ascent",
    ],
    itinerary: [
      {
        day: 1,
        title: "Machame Gate to Machame Camp",
        description: "Begin your trek through the lush rainforest. Keep an eye out for colobus monkeys.",
        accommodation: "Machame Camp",
        elevation: "1,640m to 2,850m"
      },
      {
        day: 2,
        title: "Machame Camp to Shira Camp",
        description: "Trek through the moorland zone to the Shira Plateau. The terrain becomes steeper.",
        accommodation: "Shira Camp",
        elevation: "2,850m to 3,840m"
      }
      // Add remaining days...
    ],
    inclusions: ["Park fees", "Camping gear", "Mountain guides & porters", "All meals on the mountain", "Rescue fees"],
    exclusions: ["Tips for crew", "Personal hiking gear", "Travel insurance", "Sleeping bag rental"]
  },
  {
    slug: "marangu-route-6-days",
    title: "Marangu Route – 6 Days",
    durationDays: 6,
    priceUSD: 1900,
    image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=800&q=80",
    difficulty: "Moderate",
    successRate: "65%",
    summary: "The 'Coca-Cola Route' is the only route offering hut accommodation. It is considered the easiest path, but has a lower success rate due to rapid ascent.",
    highlights: [
      "Sleep in comfortable A-frame huts",
      "Gentler slopes",
      "Shorter duration",
    ],
    itinerary: [], // Fill in details
    inclusions: ["Park fees", "Hut accommodation", "Mountain guides & porters", "All meals"],
    exclusions: ["Tips for crew", "Personal gear", "Travel insurance"]
  },
  // Add the rest: Lemosho, Rongai, Umbwe, Northern Circuit
];