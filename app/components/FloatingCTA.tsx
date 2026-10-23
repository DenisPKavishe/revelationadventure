"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Mail, X, Headphones } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { items } = useCart();

  // Ili kuepuka hydration error kwenye server vs client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  // Tengeneza ujumbe wa WhatsApp unaojumuisha itinerary
  const generateWhatsAppMessage = () => {
    let message = "Hello Revelation Africa Safari! I would like to consult about a safari itinerary.\n\n";
    
    if (items.length > 0) {
      message += "I am interested in the following:\n";
      items.forEach((item) => {
        message += `- ${item.title} (${item.durationDays} Days) for ${item.travelers} traveler(s). Start date: ${item.startDate || "TBD"}\n`;
      });
    } else {
      message += "I would like to plan a custom safari.";
    }
    
    message += "\nPlease advise on the next steps.";
    
    return encodeURIComponent(message);
  };

  // Tengeneza ujumbe wa Email unaojumuisha itinerary
  const generateEmailSubject = () => {
    if (items.length > 0) {
      return encodeURIComponent(`Consultation Request: ${items[0].title}`);
    }
    return encodeURIComponent("Safari Consultation Request");
  };

  const generateEmailBody = () => {
    let body = "Hello Revelation Africa Safari,\n\nI would like to consult about a safari itinerary.\n\n";
    
    if (items.length > 0) {
      body += "I am interested in the following:\n";
      items.forEach((item) => {
        body += `- ${item.title} (${item.durationDays} Days) for ${item.travelers} traveler(s). Start date: ${item.startDate || "TBD"}\n`;
      });
    } else {
      body += "I would like to plan a custom safari.\n";
    }
    
    body += "\nPlease advise on the next steps.\n\nThank you.";
    
    return encodeURIComponent(body);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* Expanded Panel */}
      {isOpen && (
        <div className="mb-4 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in-up">
          <div className="bg-brand-orange p-4 text-white relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white/80 hover:text-white"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <h3 className="font-bold text-lg">Need Help?</h3>
            <p className="text-sm text-white/90 mt-1">
              Talk to our safari experts about your {items.length > 0 ? "itinerary" : "trip"}.
            </p>
          </div>

          <div className="p-4 space-y-3">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/255757535767?text=${generateWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full bg-brand-green hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl transition"
            >
              <div className="bg-white/20 p-2 rounded-lg">
                <MessageCircle size={20} />
              </div>
              <div className="text-left">
                <span className="block text-sm leading-tight">Chat on WhatsApp</span>
                <span className="block text-xs text-white/80">Fastest reply</span>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:info@revelationafrica.com?subject=${generateEmailSubject()}&body=${generateEmailBody()}`}
              className="flex items-center gap-3 w-full bg-gray-100 hover:bg-gray-200 text-black font-semibold py-3 px-4 rounded-xl transition"
            >
              <div className="bg-brand-orange/10 text-brand-orange p-2 rounded-lg">
                <Mail size={20} />
              </div>
              <div className="text-left">
                <span className="block text-sm leading-tight">Send an Email</span>
                <span className="block text-xs text-gray-500">Reply within 24h</span>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Main CTA Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center gap-2 px-5 py-3 rounded-full font-bold text-white shadow-xl transition-all duration-300 ${
          isOpen ? "bg-gray-800 hover:bg-gray-900" : "bg-brand-orange hover:bg-brand-orange-dark"
        }`}
      >
        {isOpen ? (
          <>
            <X size={20} /> Close
          </>
        ) : (
          <>
            <Headphones size={20} className="animate-pulse" />
            <span>Talk to an Expert</span>
          </>
        )}
      </button>
    </div>
  );
}