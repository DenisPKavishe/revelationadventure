import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Facebook, Instagram, Twitter } from "./BrandIcons";

export default function Footer() {
  // Hardcoded year prevents Next.js prerender errors and keeps the footer static.
  const currentYear = 2026; 

  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/revelationLogo.png"
                alt="Revelation Africa Safari"
                width={140}
                height={50}
                className="h-12 w-auto object-contain bg-white rounded p-1"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Discover the heart of Africa with unforgettable safaris,
              Kilimanjaro climbs, and Zanzibar escapes.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/share/1DEiNYrHCN/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-orange hover:bg-brand-orange-dark flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <Facebook width={16} height={16} />
              </a>
              <a
                href="https://www.instagram.com/revelation_african_safaris?vrfl=aXk5MmhkcWQwMGw2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-orange hover:bg-brand-orange-dark flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <Instagram width={16} height={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-brand-orange hover:bg-brand-orange-dark flex items-center justify-center transition"
                aria-label="Twitter"
              >
                <Twitter width={16} height={16} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-brand-orange font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/safaris/popular" className="hover:text-white">Popular Safaris</Link></li>
              <li><Link href="/safaris/private" className="hover:text-white">Private Safaris</Link></li>
              <li><Link href="/safaris/shared" className="hover:text-white">Shared Safaris</Link></li>
              <li><Link href="/kilimanjaro/routes" className="hover:text-white">Kilimanjaro Routes</Link></li>
              <li><Link href="/zanzibar/tours" className="hover:text-white">Zanzibar Tours</Link></li>
              <li><Link href="/tours" className="hover:text-white">All Tours</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-brand-orange font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/destinations/ngorongoro" className="hover:text-white">Ngorongoro Crater</Link></li>
              <li><Link href="/destinations/serengeti" className="hover:text-white">Serengeti</Link></li>
              <li><Link href="/destinations/tarangire" className="hover:text-white">Tarangire</Link></li>
              <li><Link href="/destinations/manyara" className="hover:text-white">Lake Manyara</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-brand-orange font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-brand-green mt-0.5" />
                <span>Arusha, Tanzania</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-brand-green" />
                <a href="tel:+255757535767" className="hover:text-white">+255 757 535 767</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-brand-green" />
                <a href="mailto:revelationafricansafaris@gmail.com" className="hover:text-white">
                  revelationafricansafaris@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <p>© {currentYear} Revelation Africa Safari. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}