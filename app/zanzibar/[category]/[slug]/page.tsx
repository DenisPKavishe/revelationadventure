import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { zanzibarHolidays, zanzibarExcursions } from "@/data/zanzibar";
import { MapPin, Clock, CheckCircle2, XCircle, ChevronDown } from "lucide-react";

export default async function ZanzibarDetailPage({ 
  params 
}: { 
  params: Promise<{ category: string, slug: string }> 
}) {
  const { category, slug } = await params;
  
  // Determine if we are looking for a holiday or an excursion
  const isHoliday = category === "holidays";
  const dataSource = isHoliday ? zanzibarHolidays : zanzibarExcursions;
  const pkg = dataSource.find((p) => p.slug === slug);

  if (!pkg) notFound();

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero */}
      <div className="relative h-[50vh] w-full bg-gray-900">
        <Image src={pkg.image} alt={pkg.title} fill sizes="100vw" className="object-cover opacity-70" priority />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full text-white">
            <div className="mb-4">
              <span className="bg-brand-orange px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                {isHoliday ? "Holiday Package" : "Excursion"}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{pkg.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-lg">
              <span className="flex items-center gap-2"><Clock /> {pkg.durationDays} {pkg.durationDays === 1 ? 'Day' : 'Days'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-10">
        
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-10">
          <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{pkg.summary}</p>
            <h3 className="font-bold mb-2">Highlights</h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {pkg.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle2 size={16} className="text-brand-green mt-0.5" /> {h}</li>
              ))}
            </ul>
          </section>

          {/* Itinerary (Only shows if there are days) */}
          {pkg.itinerary.length > 0 && (
            <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Day-by-Day Itinerary</h2>
              <div className="space-y-4">
                {pkg.itinerary.map((day) => (
                  <details key={day.day} className="group border border-gray-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                      <div className="flex items-center gap-4">
                        <span className="bg-brand-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">{day.day}</span>
                        <h3 className="font-bold text-black">{day.title}</h3>
                      </div>
                      <ChevronDown className="group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="p-4 border-t border-gray-200 text-sm text-gray-600 space-y-4">
                      <p>{day.description}</p>
                      {day.accommodation !== "None" && (
                        <div className="bg-brand-green-light/30 p-3 rounded-lg inline-block">
                          <span className="text-xs font-bold text-gray-500 uppercase block">Accommodation</span>
                          <p className="font-semibold text-brand-green">{day.accommodation}</p>
                        </div>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Inclusions */}
          <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 grid md:grid-cols-2 gap-8">
             <div>
               <h3 className="font-bold text-lg mb-4 text-brand-green">What's Included</h3>
               <ul className="space-y-2">
                 {pkg.inclusions.map((inc, i) => (
                   <li key={i} className="flex items-start gap-2 text-sm text-gray-600"><CheckCircle2 size={16} className="text-brand-green shrink-0 mt-0.5" /> {inc}</li>
                 ))}
               </ul>
             </div>
             <div>
               <h3 className="font-bold text-lg mb-4 text-red-500">What's Excluded</h3>
               <ul className="space-y-2">
                 {pkg.exclusions.map((exc, i) => (
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
            <p className="text-4xl font-extrabold text-brand-orange mb-6">${pkg.priceUSD.toLocaleString()}</p>
            
            <Link href="/contact" className="block text-center w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 rounded-lg mb-3 transition shadow">
              Book This {isHoliday ? "Holiday" : "Excursion"}
            </Link>
            <a href={`https://wa.me/255700000000?text=Hi, I am interested in the ${pkg.title}`} target="_blank" rel="noopener noreferrer" className="w-full bg-brand-green hover:bg-green-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition">
              Chat on WhatsApp
            </a>
            
            <div className="mt-6 pt-6 border-t border-gray-100 text-sm text-gray-600">
              <p className="flex items-center gap-2 mb-2"><CheckCircle2 size={16} className="text-brand-green"/> Instant confirmation</p>
              <p className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-green"/> Free cancellation up to 48h</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}