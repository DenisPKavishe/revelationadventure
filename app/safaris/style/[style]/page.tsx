import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { safaris } from "@/data/safaris";
import SafariCard from "@/app/components/SafariCard";
import { Compass, ArrowRight, Filter } from "lucide-react";

const styleData: Record<string, { 
  title: string; 
  description: string;
  heroImage: string;
  matchKey: string;
}> = {
  "day-trips": {
    title: "Day Trips in Arusha",
    description: "One-day escapes from Arusha to the best national parks in Northern Tanzania.",
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1920&q=80",
    matchKey: "Day Trips",
  },
  "private": {
    title: "Private Safaris",
    description: "Your own vehicle and dedicated guide. Travel at your own pace with a tailor-made itinerary.",
    heroImage: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1920&q=80",
    matchKey: "Private",
  },
  "migration": {
    title: "Great Migration Safaris",
    description: "Follow the herds across the Serengeti and witness the greatest wildlife show on Earth.",
    heroImage: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1920&q=80",
    matchKey: "Migration",
  },
  "family": {
    title: "Family Safaris",
    description: "Kid-friendly adventures designed for families with children of all ages.",
    heroImage: "https://images.unsplash.com/photo-1534177616072-ef7dc1204494?auto=format&fit=crop&w=1920&q=80",
    matchKey: "Family",
  },
  "honeymoon": {
    title: "Honeymoon Safaris",
    description: "Romantic lodges, private game drives, and unforgettable sunsets for you and your loved one.",
    heroImage: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1920&q=80",
    matchKey: "Honeymoon",
  },
};

export default async function SafariStylePage({ params }: { params: Promise<{ style: string }> }) {
  const { style } = await params;
  const styleInfo = styleData[style];
  
  if (!styleInfo) notFound();

  const relatedSafaris = safaris.filter(s => 
    s.travelStyles && s.travelStyles.some(t => 
      t.toLowerCase() === styleInfo.matchKey.toLowerCase()
    )
  );

  return (
    <div className="bg-white min-h-screen">
      <div className="relative h-[40vh] w-full bg-gray-900">
        <Image src={styleInfo.heroImage} alt={styleInfo.title} fill sizes="100vw" className="object-cover opacity-60" priority />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <span className="inline-block bg-brand-orange text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              Safari Style
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">{styleInfo.title}</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow">{styleInfo.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Compass className="text-brand-orange" size={28} />
              <h2 className="text-3xl font-bold">Safaris in this Category</h2>
            </div>
            <p className="text-gray-600">Explore our curated packages for {styleInfo.title}.</p>
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
            <Filter size={40} className="text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">No safaris currently listed</h3>
            <p className="text-gray-500 mb-6">Check back soon or contact us for a custom itinerary.</p>
            <Link href="/contact" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-6 py-3 rounded-lg transition">
              Request Custom Safari
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}