"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { kilimanjaroRoutes } from "@/data/kilimanjaro";
import { MapPin, Clock, TrendingUp, ChevronRight } from "lucide-react";

export default function KilimanjaroRoutesPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Compact Hero */}
      <div className="relative h-48 md:h-64 w-full bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1522198428577-adf2e9efc653?auto=format&fit=crop&w=1920&q=80"
          alt="Kilimanjaro"
          fill
          sizes="100vw"
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2">Kilimanjaro Routes</h1>
          <p className="text-white/90 text-sm md:text-lg max-w-2xl">
            Choose your path to the Roof of Africa.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {kilimanjaroRoutes.map((route) => (
            <Link 
              key={route.slug} 
              href={`/kilimanjaro/routes/${route.slug}`}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-orange transition duration-300 flex flex-col group"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image 
                  src={route.image} 
                  alt={route.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 right-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                  {route.difficulty}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-black mb-3">{route.title}</h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1.5"><Clock size={16} className="text-brand-orange"/> {route.durationDays} Days</span>
                  <span className="flex items-center gap-1.5"><TrendingUp size={16} className="text-brand-green"/> {route.successRate} Success</span>
                </div>

                <p className="text-sm text-gray-500 line-clamp-2 mb-6">
                  {route.summary}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                  <div>
                    <p className="text-xs text-gray-500">From</p>
                    <p className="text-lg font-extrabold text-brand-orange">${route.priceUSD.toLocaleString()}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-black group-hover:text-brand-orange transition">
                    View Route <ChevronRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}