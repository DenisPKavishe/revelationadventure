import Image from "next/image";
import Link from "next/link";
import { kilimanjaroRoutes } from "@/data/kilimanjaro";
import { 
  Mountain, 
  Calendar, 
  Backpack, 
  Activity, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  MapPin 
} from "lucide-react";

export default function KilimanjaroPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ---------- HERO ---------- */}
      <section className="relative h-[60vh] w-full bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1522198428577-adf2e9efc653?auto=format&fit=crop&w=1920&q=80"
          alt="Mount Kilimanjaro"
          fill
          sizes="100vw"
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="bg-brand-orange text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
            The Roof of Africa
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Conquer Mount Kilimanjaro
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mb-8">
            Stand on the highest peak in Africa. We provide expert guides, premium equipment, and meticulously planned itineraries to ensure your summit success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#routes" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-3 rounded-lg transition shadow-lg">
              Choose Your Route
            </a>
            <Link href="/contact" className="bg-white hover:bg-gray-100 text-black font-bold px-8 py-3 rounded-lg transition shadow-lg">
              Plan Your Climb
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- PLAN YOUR CLIMB (Info Grid) ---------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Plan Your Climb</h2>
          <p className="text-gray-600 text-lg">
            Climbing Kilimanjaro requires preparation. Here is everything you need to know before you start your journey to the summit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <Link href="/kilimanjaro/best-time" className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-brand-orange transition group">
            <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Calendar size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Best Time to Climb</h3>
            <p className="text-sm text-gray-600 mb-4">Learn about the dry seasons, weather patterns, and the best months for a successful summit.</p>
            <span className="text-sm font-semibold text-brand-orange flex items-center gap-1">Read More <ArrowRight size={14} /></span>
          </Link>

          {/* Card 2 */}
          <Link href="/kilimanjaro/route-comparison" className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-brand-orange transition group">
            <div className="w-12 h-12 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Mountain size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Which Route is Best?</h3>
            <p className="text-sm text-gray-600 mb-4">Compare difficulty, scenery, traffic, and success rates across all 7 Kilimanjaro routes.</p>
            <span className="text-sm font-semibold text-brand-orange flex items-center gap-1">Read More <ArrowRight size={14} /></span>
          </Link>

          {/* Card 3 */}
          <Link href="/kilimanjaro/packing-list" className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-brand-orange transition group">
            <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Backpack size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Packing List</h3>
            <p className="text-sm text-gray-600 mb-4">Don't forget the essentials. Download our complete gear checklist for the mountain.</p>
            <span className="text-sm font-semibold text-brand-orange flex items-center gap-1">Read More <ArrowRight size={14} /></span>
          </Link>

          {/* Card 4 */}
          <Link href="/kilimanjaro/fitness" className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-brand-orange transition group">
            <div className="w-12 h-12 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Activity size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Fitness & Altitude</h3>
            <p className="text-sm text-gray-600 mb-4">Prepare your body and mind. Learn how to prevent altitude sickness and train effectively.</p>
            <span className="text-sm font-semibold text-brand-orange flex items-center gap-1">Read More <ArrowRight size={14} /></span>
          </Link>
        </div>
      </section>

      {/* ---------- CHOOSE YOUR ROUTE ---------- */}
      <section id="routes" className="bg-gray-50 py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Choose Your Route</h2>
              <p className="text-gray-600 max-w-2xl text-lg">
                Every route offers a different experience. Whether you want the most scenic views or the highest summit success rate, we have a path for you.
              </p>
            </div>
            <Link href="/kilimanjaro/success-rates" className="hidden md:flex items-center gap-2 text-brand-orange font-bold hover:underline mt-4 md:mt-0">
              View Success Rates <TrendingUp size={18} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {kilimanjaroRoutes.map((route) => (
              <div key={route.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border border-gray-100 group flex flex-col">
                <div className="relative h-56 w-full bg-gray-200">
                  <Image 
                    src={route.image} 
                    alt={route.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 right-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full shadow">
                    {route.durationDays} Days
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">{route.title}</h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">{route.summary}</p>
                  
                  <div className="flex items-center gap-4 text-sm mb-6 bg-gray-50 p-3 rounded-lg">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 uppercase font-semibold">Difficulty</span>
                      <span className="font-bold text-brand-orange">{route.difficulty}</span>
                    </div>
                    <div className="w-px h-8 bg-gray-200"></div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 uppercase font-semibold">Success</span>
                      <span className="font-bold text-brand-green">{route.successRate}</span>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500">From</p>
                      <p className="text-lg font-extrabold text-black">${route.priceUSD.toLocaleString()}</p>
                    </div>
                    <Link href={`/kilimanjaro/routes/${route.slug}`} className="bg-brand-orange hover:bg-brand-orange-dark text-white text-sm font-bold px-4 py-2 rounded-lg transition">
                      View Itinerary
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA SECTION ---------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-brand-orange to-orange-600 rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10 p-8 md:p-16 text-center text-white max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to Book Your Kilimanjaro Climb?</h2>
            <p className="text-lg md:text-xl text-white/90 mb-10">
              Our expert mountain guides and porters are ready to help you reach the summit. Let's start planning your custom itinerary today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition shadow-lg text-lg">
                Start Booking Process
              </Link>
              <a href="https://wa.me/255757535767" target="_blank" rel="noopener noreferrer" className="bg-black/20 hover:bg-black/30 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition text-lg backdrop-blur-sm">
                Chat with an Expert
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/80">
              <span className="flex items-center gap-1"><CheckCircle2 size={16} /> Licensed Guides</span>
              <span className="flex items-center gap-1"><CheckCircle2 size={16} /> Top Success Rates</span>
              <span className="flex items-center gap-1"><CheckCircle2 size={16} /> Premium Gear</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}