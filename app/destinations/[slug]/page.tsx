import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { safaris } from "@/data/safaris";

import { MapPin, Compass, Mountain, Binoculars, Bird, TreePine, ArrowRight } from "lucide-react";
import SafariCard from "@/app/components/SafariCard";

// 1. DATA KAMILI YA KILA DESTINATION
const destinationData: Record<string, { 
  title: string; 
  heroImage: string;
  description: string;
  longDescription: string;
  mapEmbedUrl: string; 
  wonders: { title: string; description: string; icon: any }[];
  bestTime: string;
}> = {
  "serengeti": { 
    title: "Serengeti National Park", 
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1920&q=80",
    description: "Famous for its vast plains and the Great Migration, the Serengeti is one of the most iconic wildlife destinations on Earth.",
    longDescription: "The Serengeti National Park is a UNESCO World Heritage Site and one of the most famous national parks in the world. Spanning over 14,750 square kilometers, it is home to the largest terrestrial mammal migration in the world. Every year, over 1.5 million wildebeest and 250,000 zebras migrate through the Serengeti ecosystem in search of fresh grazing and water.",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15948018.530846735!2d34.830186!3d-2.333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184a7c25b7c2e0b1%3A0xc3f1a1c2b3a1b1a1!2sSerengeti%20National%20Park!5e0!3m2!1sen!2stz!4v1620000000000!5m2!1sen!2stz",
    wonders: [
      { title: "The Great Migration", description: "Over 1.5 million wildebeest and zebras move across the plains.", icon: Binoculars },
      { title: "Big Five Sightings", description: "Lions, leopards, elephants, rhinos, and buffalo roam freely.", icon: Compass },
      { title: "Endless Plains", description: "Iconic savannah landscapes with acacia trees and sunsets.", icon: Mountain },
      { title: "Birdlife", description: "Over 500 recorded bird species including ostriches and vultures.", icon: Bird },
    ],
    bestTime: "June to October (Dry Season) for wildlife viewing. January to February for calving season."
  },
  "ngorongoro": { 
    title: "Ngorongoro Crater", 
    heroImage: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1920&q=80",
    description: "A UNESCO World Heritage Site and the world's largest intact volcanic caldera, teeming with wildlife including the Big Five.",
    longDescription: "The Ngorongoro Crater is a breathtaking natural wonder and a UNESCO World Heritage Site. It is the world's largest inactive, intact, and unfilled volcanic caldera. The crater, which formed when a large volcano exploded and collapsed on itself two to three million years ago, is 610 meters deep and its floor covers 260 square kilometers. It is home to approximately 30,000 animals, making it one of the most densely populated wildlife areas in Africa.",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.865803527195!2d35.5833!3d-3.1667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184f3b1e1b1e1b1b%3A0x1b1e1b1e1b1e1b1e!2sNgorongoro%20Crater!5e0!3m2!1sen!2stz!4v1620000000000!5m2!1sen!2stz",
    wonders: [
      { title: "The Big Five", description: "The easiest place in Tanzania to see all Big Five in one day.", icon: Binoculars },
      { title: "Black Rhinos", description: "One of the last strongholds for critically endangered black rhinos.", icon: Compass },
      { title: "Flamingo Lakes", description: "Lake Magadi attracts thousands of flamingos and waterbirds.", icon: Bird },
      { title: "Maasai Culture", description: "The Maasai people live alongside wildlife in the conservation area.", icon: MapPin },
    ],
    bestTime: "Year-round. June to October is best for dry season game viewing."
  },
  "tarangire": { 
    title: "Tarangire National Park", 
    heroImage: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1920&q=80",
    description: "Known as the Land of Giants, Tarangire is famous for its massive elephant herds and iconic baobab trees.",
    longDescription: "Tarangire National Park is often overlooked in favor of its more famous neighbors, but it is a hidden gem. It is famous for its large elephant population, with herds of up to 300 individuals. The park is also home to the iconic baobab trees, which can live for over a thousand years. During the dry season, the Tarangire River becomes a lifeline for wildlife, attracting animals from a wide area.",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15945.865803527195!2d35.9833!3d-3.8333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184f3b1e1b1e1b1b%3A0x1b1e1b1e1b1e1b1e!2sTarangire%20National%20Park!5e0!3m2!1sen!2stz!4v1620000000000!5m2!1sen!2stz",
    wonders: [
      { title: "Elephant Herds", description: "Home to some of the largest elephant herds in Tanzania.", icon: Binoculars },
      { title: "Ancient Baobabs", description: "Iconic trees that can live for over 1,000 years.", icon: TreePine },
      { title: "Tarangire River", description: "A lifeline for wildlife during the dry season.", icon: Compass },
      { title: "Bird Paradise", description: "Over 500 species including the Kori Bustard.", icon: Bird },
    ],
    bestTime: "June to October (Dry Season) for best wildlife viewing."
  },
  "manyara": { 
    title: "Lake Manyara National Park", 
    heroImage: "https://images.unsplash.com/photo-1534177616072-ef7dc1204494?auto=format&fit=crop&w=1920&q=80",
    description: "Famous for its tree-climbing lions, flamingos, and the dramatic Great Rift Valley escarpment.",
    longDescription: "Lake Manyara National Park is a small but diverse park, famous for its tree-climbing lions and the thousands of flamingos that inhabit the lake. The park is dominated by the dramatic western escarpment of the Great Rift Valley, which rises 600 meters above the park. The park has a variety of habitats, including groundwater forest, open grassland, and the alkaline lake itself, making it a birdwatcher's paradise.",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15945.865803527195!2d35.75!3d-3.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184f3b1e1b1e1b1b%3A0x1b1e1b1e1b1e1b1e!2sLake%20Manyara%20National%20Park!5e0!3m2!1sen!2stz!4v1620000000000!5m2!1sen!2stz",
    wonders: [
      { title: "Tree-Climbing Lions", description: "A rare behavior unique to this park and a few others.", icon: Binoculars },
      { title: "Flamingo Flocks", description: "Thousands of flamingos gather at the lake.", icon: Bird },
      { title: "Rift Valley Views", description: "Dramatic escarpment views from the park.", icon: Mountain },
      { title: "Groundwater Forest", description: "Lush forests fed by underground springs.", icon: TreePine },
    ],
    bestTime: "June to October for wildlife. November to May for birds and lush scenery."
  },
};

// 2. DYNAMIC PAGE COMPONENT
export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await params kwa ajili ya Next.js 15+
  const { slug } = await params;
  const dest = destinationData[slug];
  
  // Kama destination haipo, onyesha 404
  if (!dest) notFound();

  // Filter safaris zinazohusiana na destination hii
  const relatedSafaris = safaris.filter(s => 
    s.destinations.some(d => d.toLowerCase().includes(dest.title.split(" ")[0].toLowerCase()))
  );

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <div className="relative h-[60vh] w-full bg-gray-900">
        <Image src={dest.heroImage} alt={dest.title} fill sizes="100vw" className="object-cover opacity-70" priority />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <span className="inline-block bg-brand-orange text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              Top Destination
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">{dest.title}</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow">{dest.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* ABOUT & MAP SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          
          {/* Maelezo */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Compass className="text-brand-orange" size={28} />
              <h2 className="text-3xl font-bold">About {dest.title}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              {dest.longDescription}
            </p>
            <div className="bg-brand-green-light/40 border border-brand-green-light p-4 rounded-xl inline-block">
              <span className="text-xs font-bold text-gray-500 uppercase block mb-1">Best Time to Visit</span>
              <p className="font-semibold text-brand-green">{dest.bestTime}</p>
            </div>
          </div>

          {/* Ramani */}
          <div className="bg-gray-50 p-2 rounded-2xl border border-gray-100 shadow-sm">
            <iframe
              src={dest.mapEmbedUrl}
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${dest.title}`}
            ></iframe>
          </div>
        </div>

        {/* WONDERS SECTION */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Wonders & Wildlife</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover what makes {dest.title} a must-visit destination.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dest.wonders.map((wonder, index) => {
              const Icon = wonder.icon;
              return (
                <div key={index} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-brand-orange transition group">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{wonder.title}</h3>
                  <p className="text-sm text-gray-600">{wonder.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* RELATED SAFARIS SECTION */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-end mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="text-brand-orange" size={28} />
                <h2 className="text-3xl font-bold">Safaris Visiting {dest.title}</h2>
              </div>
              <p className="text-gray-600">Explore our curated packages that include this destination.</p>
            </div>
            <Link href="/tours" className="flex items-center gap-2 text-brand-orange font-bold hover:underline mt-4 md:mt-0">
              View All Safaris <ArrowRight size={18} />
            </Link>
          </div>
          
          {relatedSafaris.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedSafaris.map(safari => (
                <SafariCard key={safari.slug} safari={safari} />
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 p-12 rounded-2xl text-center border border-gray-200">
              <h3 className="text-xl font-bold mb-2">No safaris currently listed</h3>
              <p className="text-gray-500 mb-6">Check back soon or contact us for a custom itinerary.</p>
              <Link href="/contact" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-6 py-3 rounded-lg transition">
                Request Custom Safari
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}