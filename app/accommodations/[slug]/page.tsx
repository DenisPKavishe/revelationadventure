"use client";
import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { accommodations } from "@/data/accommodations";
import { safaris } from "@/data/safaris";
import { ChevronLeft, ChevronRight, Check, MapPin, ArrowLeft } from "lucide-react";
import SafariCard from "@/app/components/SafariCard";


export default function AccommodationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const hotel = accommodations.find((a) => a.slug === slug);
  if (!hotel) notFound();

  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = () => setCurrentImg((prev) => (prev + 1) % hotel.images.length);
  const prevImg = () => setCurrentImg((prev) => (prev - 1 + hotel.images.length) % hotel.images.length);

  const relatedSafaris = safaris.filter(s => 
    s.itinerary.some(day => day.accommodationSlug === hotel.slug)
  );

  // Fallback Unsplash images for hotels if arrays are empty
  const displayImages = hotel.images.length > 0 ? hotel.images : [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1542314831-c6a4d1424b94?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/safaris" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-6">
          <ArrowLeft size={16} /> Back to Safaris
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="relative h-[400px] rounded-2xl overflow-hidden group bg-gray-100">
            <Image 
              src={displayImages[currentImg] || displayImages[0]} 
              alt={hotel.name} 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover" 
            />
            <button onClick={prevImg} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow z-10"><ChevronLeft size={24} /></button>
            <button onClick={nextImg} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow z-10"><ChevronRight size={24} /></button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {displayImages.map((_, i) => (
                <div key={i} className={`w-2.5 h-2.5 rounded-full ${i === currentImg ? 'bg-brand-orange' : 'bg-white/50'}`} />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-extrabold mb-2">{hotel.name}</h1>
            <p className="flex items-center gap-2 text-gray-600 mb-6"><MapPin size={18} className="text-brand-orange" /> {hotel.location}</p>
            <p className="text-gray-600 leading-relaxed mb-8">{hotel.description}</p>
            
            <h3 className="font-bold text-lg mb-3">Amenities</h3>
            <ul className="grid grid-cols-2 gap-2">
              {hotel.amenities.map((amenity, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-700"><Check size={16} className="text-brand-green" /> {amenity}</li>
              ))}
            </ul>
          </div>
        </div>

        {relatedSafaris.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-6">Safaris featuring {hotel.name}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedSafaris.map(safari => <SafariCard key={safari.slug} safari={safari} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}