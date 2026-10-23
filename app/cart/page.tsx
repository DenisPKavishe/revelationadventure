"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import {
  Trash2,
  Plus,
  Minus,
  FileText,
  Download,
  Send,
  MessageCircle,
  Mail,
  Search,
} from "lucide-react";
import toast from "react-hot-toast";
import { countryCodes } from "@/data/countryCodes";

export default function CartPage() {
  const { items, removeFromCart, updateTravelers, updateStartDate, total } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "+255",
    phone: "",
  });
  const [generatedItinerary, setGeneratedItinerary] = useState<string | null>(null);
  const [countrySearch, setCountrySearch] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  // Filter country codes kwa search
  const filteredCountries = useMemo(() => {
    if (!countrySearch.trim()) return countryCodes;
    const q = countrySearch.toLowerCase();
    return countryCodes.filter(
      (c) =>
        c.country.toLowerCase().includes(q) ||
        c.code.includes(q)
    );
  }, [countrySearch]);

  const selectedCountry = countryCodes.find((c) => c.code === form.countryCode);

  const update = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  // ============ VALIDATION ============
  const validateForm = (): boolean => {
    if (!form.name.trim()) {
      toast.error("Please enter your full name.");
      return false;
    }
    if (!form.email.trim()) {
      toast.error("Please enter your email.");
      return false;
    }
    if (!form.phone.trim()) {
      toast.error("Please enter your phone number.");
      return false;
    }
    return true;
  };

  // ============ WHATSAPP ============
  const sendViaWhatsApp = () => {
    if (!validateForm()) return;

    let message = `*New Safari Cart Inquiry*\n\n`;
    message += `*Name:* ${form.name}\n`;
    message += `*Email:* ${form.email}\n`;
    message += `*Phone:* ${form.countryCode} ${form.phone}\n\n`;
    message += `*Selected Safaris:*\n`;

    items.forEach((item) => {
      message += `\n• ${item.title}\n`;
      message += `  ${item.durationDays} Days / ${item.durationNights} Nights\n`;
      message += `  Travelers: ${item.travelers}\n`;
      message += `  Start Date: ${item.startDate || "TBD"}\n`;
      message += `  Price: $${item.priceUSD} pp → $${(item.priceUSD * item.travelers).toLocaleString()}\n`;
    });

    message += `\n*Grand Total:* $${total.toLocaleString()}\n`;
    message += `\nPlease send me a quote. Thank you!`;

    const url = `https://wa.me/255700000000?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    toast.success("Opening WhatsApp...");
  };

  // ============ EMAIL ============
  const sendViaEmail = () => {
    if (!validateForm()) return;

    const subject = encodeURIComponent(`Safari Cart Inquiry from ${form.name}`);

    let body = `Hello Revelation Africa Safari,\n\n`;
    body += `Name: ${form.name}\n`;
    body += `Email: ${form.email}\n`;
    body += `Phone: ${form.countryCode} ${form.phone}\n\n`;
    body += `Selected Safaris:\n`;

    items.forEach((item) => {
      body += `\n- ${item.title}\n`;
      body += `  ${item.durationDays} Days / ${item.durationNights} Nights\n`;
      body += `  Travelers: ${item.travelers}\n`;
      body += `  Start Date: ${item.startDate || "TBD"}\n`;
      body += `  Price: $${item.priceUSD} pp → $${(item.priceUSD * item.travelers).toLocaleString()}\n`;
    });

    body += `\nGrand Total: $${total.toLocaleString()}\n`;
    body += `\nPlease send me a quote. Thank you.`;

    window.location.href = `mailto:info@revelationafrica.com?subject=${subject}&body=${encodeURIComponent(body)}`;
    toast.success("Opening email...");
  };

  // ============ ITINERARY GENERATOR ============
  const generateItinerary = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }
    if (!form.name || !form.email) {
      toast.error("Please fill in your name and email.");
      return;
    }

    const item = items[0];
    let itinerary = `SAFARI ITINERARY\n\n`;
    itinerary += `Prepared for: ${form.name}\n`;
    itinerary += `Email: ${form.email}\n`;
    itinerary += `Phone: ${form.countryCode} ${form.phone}\n\n`;
    itinerary += `Tour: ${item.title}\n`;
    itinerary += `Duration: ${item.durationDays} Days / ${item.durationNights} Nights\n`;
    itinerary += `Price: $${item.priceUSD} per person\n`;
    itinerary += `Total (${item.travelers} travelers): $${(item.priceUSD * item.travelers).toLocaleString()}\n\n`;
    itinerary += `ROUTE\n${item.destinations.join(" → ")}\n\n`;
    itinerary += `DAY-BY-DAY ITINERARY\n\n`;

    item.itinerary.forEach((day) => {
      itinerary += `Day ${day.day}: ${day.title}\n`;
      itinerary += `${day.description}\n`;
      itinerary += `Accommodation: ${day.accommodation}\n`;
      itinerary += `Meals: ${day.meals}\n\n`;
    });

    itinerary += `INCLUSIONS\n`;
    item.inclusions.forEach((inc) => (itinerary += `- ${inc}\n`));
    itinerary += `\nEXCLUSIONS\n`;
    item.exclusions.forEach((exc) => (itinerary += `- ${exc}\n`));

    setGeneratedItinerary(itinerary);
    toast.success("Itinerary generated!");
  };

  const downloadItinerary = () => {
    if (!generatedItinerary) return;
    const blob = new Blob([generatedItinerary], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${form.name || "safari"}-itinerary.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Itinerary downloaded!");
  };

  // ============ QUOTE API ============
  const getQuote = async () => {
    if (!validateForm()) return;

    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ form, items, total }),
    });
    if (res.ok) {
      toast.success("Quote request sent! We'll reply within 24 hours.");
    } else {
      toast.error("Failed to send quote request.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8">Your Safari Cart</h1>

        {items.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl text-center border border-gray-200">
            <FileText size={48} className="text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Start exploring our safaris and add to your cart.</p>
            <Link
              href="/tours"
              className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-6 py-3 rounded-lg transition"
            >
              Browse Safaris
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* ================= CART ITEMS ================= */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.slug}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row"
                >
                  <div className="relative w-full md:w-64 h-48 md:h-auto bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <button
                        onClick={() => removeFromCart(item.slug)}
                        className="text-red-500 hover:text-red-700"
                        aria-label="Remove"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">
                      {item.durationDays} Days / {item.durationNights} Nights
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">
                          Start Date
                        </label>
                        <input
                          type="date"
                          value={item.startDate}
                          onChange={(e) => updateStartDate(item.slug, e.target.value)}
                          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">
                          Travelers
                        </label>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateTravelers(item.slug, Math.max(1, item.travelers - 1))
                            }
                            className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-bold">{item.travelers}</span>
                          <button
                            onClick={() => updateTravelers(item.slug, item.travelers + 1)}
                            className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                      <p className="text-sm text-gray-500">
                        ${item.priceUSD} × {item.travelers}
                      </p>
                      <p className="text-xl font-extrabold text-brand-orange">
                        ${(item.priceUSD * item.travelers).toLocaleString()}
                      </p>
                    </div>

                    {/* ================= PER-ITEM SEND BUTTONS ================= */}
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <button
                        onClick={sendViaWhatsApp}
                        className="flex items-center justify-center gap-1.5 bg-brand-green hover:bg-green-700 text-white text-sm font-semibold py-2 rounded-lg transition"
                      >
                        <MessageCircle size={16} /> WhatsApp
                      </button>
                      <button
                        onClick={sendViaEmail}
                        className="flex items-center justify-center gap-1.5 bg-brand-orange hover:bg-brand-orange-dark text-white text-sm font-semibold py-2 rounded-lg transition"
                      >
                        <Mail size={16} /> Email
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ================= BOOKING FORM + SUMMARY ================= */}
            <aside className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-4">Booking Details</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <input
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="John Doe"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="john@example.com"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>

                    {/* Phone with searchable country code */}
                    <div className="relative">
                      <div className="flex gap-2">
                        <div className="relative w-32">
                          <button
                            type="button"
                            onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                            className="w-full rounded-lg border border-gray-300 px-2 py-2 text-sm text-left flex items-center justify-between"
                          >
                            <span className="truncate">
                              {selectedCountry?.code || "+255"}{" "}
                              <span className="text-gray-500 text-xs">
                                {selectedCountry?.country || "Tanzania"}
                              </span>
                            </span>
                            <Search size={14} className="text-gray-400 shrink-0" />
                          </button>
                        </div>

                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          placeholder="700 000 000"
                          className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm"
                        />
                      </div>

                      {/* Dropdown ya nchi zenye search */}
                      {showCountryDropdown && (
                        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-hidden flex flex-col">
                          <div className="p-2 border-b border-gray-100">
                            <input
                              type="text"
                              value={countrySearch}
                              onChange={(e) => setCountrySearch(e.target.value)}
                              placeholder="Search country or code..."
                              className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm outline-none"
                              autoFocus
                            />
                          </div>
                          <ul className="overflow-y-auto">
                            {filteredCountries.length === 0 && (
                              <li className="px-4 py-3 text-sm text-gray-500">
                                No results
                              </li>
                            )}
                            {filteredCountries.map((c) => (
                              <li key={`${c.code}-${c.country}`}>
                                <button
                                  type="button"
                                  onClick={() => {
                                    update("countryCode", c.code);
                                    setShowCountryDropdown(false);
                                    setCountrySearch("");
                                  }}
                                  className={`w-full text-left px-4 py-2 text-sm hover:bg-brand-green-light transition ${
                                    form.countryCode === c.code
                                      ? "bg-brand-green-light font-semibold"
                                      : ""
                                  }`}
                                >
                                  <span className="font-medium">{c.code}</span>{" "}
                                  <span className="text-gray-600">{c.country}</span>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-4">Summary</h3>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Subtotal</span>
                  <span>${total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-4 text-sm">
                  <span>Deposit (15%)</span>
                  <span>${(total * 0.15).toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-t border-gray-100 pt-3 font-bold text-lg">
                  <span>Total</span>
                  <span className="text-brand-orange">${total.toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                <button
                  onClick={generateItinerary}
                  className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 rounded-lg transition shadow flex items-center justify-center gap-2"
                >
                  <FileText size={18} /> Generate Itinerary
                </button>
                <button
                  onClick={getQuote}
                  className="w-full bg-brand-green hover:bg-green-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
                >
                  <Send size={18} /> Get Quote
                </button>
              </div>
            </aside>
          </div>
        )}

        {/* ================= ITINERARY PREVIEW ================= */}
        {generatedItinerary && (
          <div className="mt-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Itinerary Preview</h2>
              <button
                onClick={downloadItinerary}
                className="bg-brand-green hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg transition flex items-center gap-2"
              >
                <Download size={18} /> Download
              </button>
            </div>
            <pre className="whitespace-pre-wrap font-mono text-sm text-gray-700 bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto">
              {generatedItinerary}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}