import Image from "next/image";
import Link from "next/link";
import { Compass, MessageCircle, Mountain, Palmtree, Phone, Search } from "lucide-react";

export default function NotFound() {
  return (
    // Changed to flex-1 and removed the hardcoded min-h
    <div className="relative flex-1 w-full flex items-center justify-center py-16 overflow-hidden">
      
      {/* Background Image - Absolute Fill */}
      <Image
        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1920&q=80"
        alt="Lost on Safari"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
        
        {/* Icon & Heading */}
        <div className="w-20 h-20 mx-auto bg-brand-orange/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-brand-orange/50">
          <Compass className="text-brand-orange" size={40} />
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Looks like you've wandered off the trail.
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          The page you are looking for has moved or doesn't exist. Let's get you back to planning your adventure.
        </p>

        {/* Primary Quick Links (Categories) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <Link href="/tours" className="flex flex-col items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 p-6 rounded-2xl transition group">
            <Compass className="text-brand-orange group-hover:scale-110 transition" size={28} />
            <span className="text-white font-bold text-lg">Safari Tours</span>
          </Link>
          
          <Link href="/kilimanjaro" className="flex flex-col items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 p-6 rounded-2xl transition group">
            <Mountain className="text-brand-green group-hover:scale-110 transition" size={28} />
            <span className="text-white font-bold text-lg">Kilimanjaro</span>
          </Link>

          <Link href="/zanzibar" className="flex flex-col items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 p-6 rounded-2xl transition group">
            <Palmtree className="text-brand-orange group-hover:scale-110 transition" size={28} />
            <span className="text-white font-bold text-lg">Zanzibar</span>
          </Link>
        </div>

        {/* Secondary Actions (Packages & Contact) */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 max-w-2xl mx-auto">
          <div className="text-left md:text-left flex-1">
            <h3 className="text-xl font-bold text-black mb-1">Can't find what you need?</h3>
            <p className="text-gray-600 text-sm">Browse all our packages or get in touch with our team directly.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link 
              href="/tours" 
              className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-5 py-3 rounded-xl transition shadow whitespace-nowrap"
            >
              <Search size={18} /> All Packages
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-black font-bold px-5 py-3 rounded-xl transition whitespace-nowrap"
            >
              <Phone size={18} /> Contact Us
            </Link>
          </div>
        </div>

        {/* Help Link */}
        <p className="mt-8 text-sm text-white/60">
          Still lost? <a href="https://wa.me/255700000000" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline font-semibold inline-flex items-center gap-1"><MessageCircle size={14} /> Chat with our team</a>
        </p>

      </div>
    </div>
  );
}