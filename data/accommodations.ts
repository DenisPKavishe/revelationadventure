import { Accommodation } from "./types";

export const accommodations: Accommodation[] = [
  {
    slug: "mvuli-hotel",
    name: "Mvuli Hotel",
    location: "Arusha",
    description: "A comfortable and convenient hotel located in the heart of Arusha, perfect for starting or ending your safari. Features lush gardens and a welcoming atmosphere.",
    amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Bar", "Airport Shuttle"],
    images: ["/images/hotels/mvuli-1.jpg", "/images/hotels/mvuli-2.jpg", "/images/hotels/mvuli-3.jpg"],
  },
  {
    slug: "ngare-lodge",
    name: "Ngare Lodge",
    location: "Karatu / Ngorongoro",
    description: "A beautiful mid-range lodge nestled in the green hills of Karatu, offering stunning views and a peaceful environment after a long day of game drives.",
    amenities: ["Free Wi-Fi", "Garden", "Restaurant", "Bar", "Room Service"],
    images: ["/images/hotels/ngare-1.jpg", "/images/hotels/ngare-2.jpg"],
  },
  {
    slug: "friends-serengeti-camp",
    name: "Friends Serengeti Camp",
    location: "Serengeti",
    description: "An authentic tented camp located in the heart of the Serengeti. Experience the sounds of the wild right outside your tent while enjoying modern comforts.",
    amenities: ["En-suite Bathroom", "Dining Tent", "Campfire", "Solar Power"],
    images: ["/images/hotels/friends-1.jpg", "/images/hotels/friends-2.jpg"],
  }
];