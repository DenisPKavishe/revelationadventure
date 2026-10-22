import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { kilimanjaroRoutes } from "@/data/kilimanjaro";
import { MapPin, Clock, TrendingUp, CheckCircle2, XCircle, Mountain } from "lucide-react";

export default async function KilimanjaroDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = kilimanjaroRoutes.find((r) => r.slug === slug);
  if (!route) notFound();

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero */}
      <div className="relative h-[50vh] w-full bg-gray-900">
        <Image src={route.image} alt={route.title} fill sizes="100vw" className="object-cover opacity-70" priority />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{route.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-lg">
              <span className="flex items-center gap-2"><Clock /> {route.durationDays} Days</span>
              <span className="flex items-center gap-2"><TrendingUp /> {route.successRate} Success Rate</span>
              <span className="flex items-center gap-2"><Mountain /> {route.difficulty}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-10">
        
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-10">
          <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">Route Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{route.summary}</p>
            <h3 className="font-bold mb-2">Highlights</h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {route.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle2 size={16} className="text-brand-green mt-0.5" /> {h}</li>
              ))}
            </ul>
          </section>

          {/* Elevation Timeline */}
          <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6">Daily Itinerary & Elevation</h2>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
              {route.itinerary.map((day) => (
                <div key={day.day} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-brand-orange text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-sm">{day.day}</span>
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-black text-lg mb-1">{day.title}</h4>
                    <span className="text-xs font-semibold text-brand-green bg-brand-green-light px-2 py-1 rounded mb-2 inline-block">
                      Elevation: {day.elevation}
                    </span>
                    <p className="text-sm text-gray-600 mb-3">{day.description}</p>
                    <p className="text-xs text-gray-500"><strong className="text-black">Accommodation:</strong> {day.accommodation}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Inclusions */}
          <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 grid md:grid-cols-2 gap-8">
             <div>
               <h3 className="font-bold text-lg mb-4 text-brand-green">What's Included</h3>
               <ul className="space-y-2">
                 {route.inclusions.map((inc, i) => (
                   <li key={i} className="flex items-start gap-2 text-sm text-gray-600"><CheckCircle2 size={16} className="text-brand-green shrink-0 mt-0.5" /> {inc}</li>
                 ))}
               </ul>
             </div>
             <div>
               <h3 className="font-bold text-lg mb-4 text-red-500">What's Excluded</h3>
               <ul className="space-y-2">
                 {route.exclusions.map((exc, i) => (
                   <li key={i} className="flex items-start gap-2 text-sm text-gray-600"><XCircle size={16} className="text-red-500 shrink-0 mt-0.5" /> {exc}</li>
                 ))}
               </ul>
             </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
            <p className="text-gray-500 text-sm">Price per person</p>
            <p className="text-4xl font-extrabold text-brand-orange mb-6">${route.priceUSD.toLocaleString()}</p>
            
            <Link href="/contact" className="block text-center w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 rounded-lg mb-3 transition shadow">
              Book This Climb
            </Link>
            <a href={`https://wa.me/255700000000?text=Hi, I want to climb the ${route.title}`} target="_blank" rel="noopener noreferrer" className="w-full bg-brand-green hover:bg-green-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition">
              Chat on WhatsApp
            </a>
            
            <div className="mt-6 pt-6 border-t border-gray-100 text-sm text-gray-600">
              <p className="flex items-center gap-2 mb-2"><CheckCircle2 size={16} className="text-brand-green"/> Airport transfers included</p>
              <p className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-green"/> Certified English-speaking guides</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}