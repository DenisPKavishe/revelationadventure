"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { Trash2, Plus, Minus, FileText, Download, Send } from "lucide-react";
import toast from "react-hot-toast";

const countryCodes = [
  { code: "+255", country: "Tanzania" },
  { code: "+254", country: "Kenya" },
  { code: "+256", country: "Uganda" },
  { code: "+1", country: "USA / Canada" },
  { code: "+44", country: "United Kingdom" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
];

export default function CartPage() {
  const { items, removeFromCart, updateTravelers, updateStartDate, total } = useCart();
  const [form, setForm] = useState({ name: "", email: "", countryCode: "+255", phone: "" });
  const [generatedItinerary, setGeneratedItinerary] = useState<string | null>(null);

  const update = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

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

  const getQuote = async () => {
    if (!form.name || !form.email) {
      toast.error("Please fill in your name and email.");
      return;
    }
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
            <Link href="/tours" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-6 py-3 rounded-lg transition">
              Browse Safaris
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.slug} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
                  <div className="relative w-full md:w-64 h-48 md:h-auto">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <button onClick={() => removeFromCart(item.slug)} className="text-red-500 hover:text-red-700">
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{item.durationDays} Days / {item.durationNights} Nights</p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Start Date</label>
                        <input
                          type="date"
                          value={item.startDate}
                          onChange={(e) => updateStartDate(item.slug, e.target.value)}
                          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Travelers</label>
                        <div className="flex items-center gap-2">
                          <button onClick={() => updateTravelers(item.slug, Math.max(1, item.travelers - 1))} className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center">
                            <Minus size={14} />
                          </button>
                          <span className="font-bold">{item.travelers}</span>
                          <button onClick={() => updateTravelers(item.slug, item.travelers + 1)} className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center">
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                      <p className="text-sm text-gray-500">${item.priceUSD} × {item.travelers}</p>
                      <p className="text-xl font-extrabold text-brand-orange">${(item.priceUSD * item.travelers).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Booking Form + Summary */}
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
                    <div className="flex gap-2">
                      <select
                        value={form.countryCode}
                        onChange={(e) => update("countryCode", e.target.value)}
                        className="w-28 rounded-lg border border-gray-300 px-2 py-2 text-sm"
                      >
                        {countryCodes.map((c) => (
                          <option key={c.code} value={c.code}>{c.code}</option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="700 000 000"
                        className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm"
                      />
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

        {/* Itinerary Preview */}
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