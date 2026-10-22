import Image from "next/image";
import Link from "next/link";
import { zanzibarHolidays, zanzibarExcursions } from "@/data/zanzibar";
import { MapPin, Clock, ArrowRight, Sun, Waves } from "lucide-react";

export default function ZanzibarPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] w-full bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1920&q=80"
          alt="Zanzibar Beach"
          fill
          sizes="100vw"
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="bg-brand-orange text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
            The Spice Island
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Zanzibar Holidays
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            From the historic streets of Stone Town to the pristine beaches of Nungwi. Discover the magic of Zanzibar.
          </p>
        </div>
      </section>

      {/* Holidays Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Waves className="text-brand-orange" size={28} />
          <h2 className="text-3xl font-bold">Holiday Packages</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {zanzibarHolidays.map((pkg) => (
            <Link 
              key={pkg.slug} 
              href={`/zanzibar/holidays/${pkg.slug}`}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-orange transition duration-300 flex flex-col group"
            >
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <Image src={pkg.image} alt={pkg.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                  {pkg.durationDays} Days
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-brand-orange transition">{pkg.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4">{pkg.summary}</p>
                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                  <div>
                    <p className="text-xs text-gray-500">From</p>
                    <p className="text-xl font-extrabold text-brand-orange">${pkg.priceUSD.toLocaleString()}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-black group-hover:text-brand-orange transition">
                    View Trip <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Excursions Grid */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Sun className="text-brand-orange" size={28} />
            <h2 className="text-3xl font-bold">Zanzibar Excursions</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {zanzibarExcursions.map((exc) => (
              <Link 
                key={exc.slug} 
                href={`/zanzibar/excursions/${exc.slug}`}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-orange transition duration-300 group flex flex-col"
              >
                <div className="relative h-40 w-full bg-gray-100">
                  <Image src={exc.image} alt={exc.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-black mb-1 group-hover:text-brand-orange">{exc.title}</h3>
                  <p className="text-xs text-gray-500 mb-3">{exc.durationDays} Day Excursion</p>
                  <p className="text-sm font-extrabold text-brand-orange mt-auto">${exc.priceUSD}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}