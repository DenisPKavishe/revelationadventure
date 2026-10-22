import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { SafariPackage } from "@/data/types";

export default function SafariCard({ safari }: { safari: SafariPackage }) {
  // Unsplash fallback if no image is provided
  const imageUrl = safari.image || "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80";

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-orange transition duration-300 flex flex-col group">
      <div className="relative h-60 w-full overflow-hidden bg-gray-100">
        <Image 
          src={imageUrl} 
          alt={safari.title} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">{safari.category}</span>
          <span className="bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full">{safari.style}</span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-black leading-tight mb-2">
          <Link href={`/safaris/${safari.slug}`} className="hover:text-brand-orange">{safari.title}</Link>
        </h3>
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
          <span className="flex items-center gap-1"><Clock size={14} /> {safari.durationDays} Days</span>
          <span className="flex items-center gap-1"><Users size={14} /> {safari.category}</span>
        </div>
        <div className="flex items-start gap-2 text-sm text-gray-600 mb-6">
          <MapPin size={16} className="text-brand-orange shrink-0 mt-0.5" />
          <p className="line-clamp-2">{safari.destinations.join(" • ")}</p>
        </div>
        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-gray-500">From</p>
            <p className="text-xl font-extrabold text-brand-orange">${safari.priceUSD.toLocaleString()}</p>
          </div>
          <Link href={`/safaris/${safari.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-black hover:text-brand-orange transition">
            View Trip <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}