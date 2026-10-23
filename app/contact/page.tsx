"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  Users,
  Plane,
  ShieldCheck,
} from "lucide-react";
import toast from "react-hot-toast";
import { Facebook, Instagram, Twitter } from "@/app/components/BrandIcons";

// ---------- Country codes ----------
const countryCodes = [
  { code: "+255", country: "Tanzania" },
  { code: "+254", country: "Kenya" },
  { code: "+256", country: "Uganda" },
  { code: "+250", country: "Rwanda" },
  { code: "+257", country: "Burundi" },
  { code: "+243", country: "DR Congo" },
  { code: "+27", country: "South Africa" },
  { code: "+1", country: "USA / Canada" },
  { code: "+44", country: "United Kingdom" },
  { code: "+33", country: "France" },
  { code: "+34", country: "Spain" },
  { code: "+39", country: "Italy" },
  { code: "+49", country: "Germany" },
  { code: "+31", country: "Netherlands" },
  { code: "+351", country: "Portugal" },
  { code: "+7", country: "Russia" },
  { code: "+86", country: "China" },
  { code: "+81", country: "Japan" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+971", country: "UAE" },
];

const WHATSAPP_NUMBER = "255757535767"; // ← your WhatsApp number, digits only, no +
const OFFICE_EMAIL = "revelationafricansafaris@gmail.com";
const OFFICE_PHONE_DISPLAY = "+255 757 535 767";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    lines: ["Njiro Road, Arusha", "Tanzania, East Africa"],
    href: "https://maps.google.com/?q=Arusha,Tanzania",
    external: true,
    accent: "green" as const,
  },
  {
    icon: Phone,
    title: "WhatsApp / Call",
    lines: [OFFICE_PHONE_DISPLAY, "Click to chat on WhatsApp"],
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    external: true,
    accent: "orange" as const,
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [OFFICE_EMAIL, "revelationafricansafaris@gmail.com"],
    href: `mailto:${OFFICE_EMAIL}`,
    external: false,
    accent: "green" as const,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    lines: ["Available 7 days a week", "Fast replies on WhatsApp"],
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      "Hello Revelation Africa Safari, I'd like to plan a trip."
    )}`,
    external: true,
    accent: "orange" as const,
  },
];

const quickHelp = [
  {
    icon: Plane,
    title: "Safari Planning",
    text: "Tell us your dates and dream destinations — we'll craft the perfect itinerary.",
  },
  {
    icon: Users,
    title: "Group & Private Tours",
    text: "Traveling with family or friends? We tailor every trip to your group.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Trusted",
    text: "Licensed local guides, vetted partners, and 24/7 support on every trip.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "+255",
    phone: "",
    subject: "Safari Inquiry",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const update = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      toast.success("Message sent successfully! We'll reply soon.");
      setForm({
        name: "",
        email: "",
        countryCode: "+255",
        phone: "",
        subject: "Safari Inquiry",
        message: "",
      });
    } catch {
      toast.error("Something went wrong. Please try again or WhatsApp us.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-black">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-green-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <span className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange font-semibold text-sm px-4 py-1.5 rounded-full">
            <MessageCircle size={16} /> We'd love to hear from you
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight">
            Let's Plan Your <span className="text-brand-orange">African Adventure</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're dreaming of the Serengeti, standing on Kilimanjaro's summit,
            or relaxing on Zanzibar's beaches — our team is here to make it happen.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-14 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactCards.map((card) => {
            const Icon = card.icon;
            const isOrange = card.accent === "orange";
            return (
              <a
                key={card.title}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-orange transition p-6 flex flex-col gap-3"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isOrange
                      ? "bg-brand-orange/10 text-brand-orange"
                      : "bg-brand-green-light text-brand-green"
                  }`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-lg">{card.title}</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {card.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </a>
            );
          })}
        </div>
      </section>

      {/* Form + info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Form */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold">Send Us a Message</h2>
            <p className="mt-2 text-gray-600 text-sm">
              Fill in the form and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="John Doe"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={form.countryCode}
                      onChange={(e) => update("countryCode", e.target.value)}
                      className="w-32 rounded-lg border border-gray-300 px-2 py-2.5 text-sm outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition bg-white"
                    >
                      {countryCodes.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.code} ({c.country})
                        </option>
                      ))}
                    </select>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="700 000 000"
                      className="flex-1 rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={form.subject}
                    onChange={(e) => update("subject", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition bg-white"
                  >
                    <option>Safari Inquiry</option>
                    <option>Kilimanjaro Climb</option>
                    <option>Zanzibar Holiday</option>
                    <option>Group Booking</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Tell us about your dream trip..."
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg transition shadow"
              >
                <Send size={16} /> {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Info column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Why Reach Out to Us?</h2>
              <p className="mt-3 text-gray-600">
                We're a local Tanzanian team that lives and breathes these landscapes.
                When you contact us, you're talking to people who know every trail,
                every crater rim, and every sunset spot.
              </p>
            </div>

            <ul className="space-y-4">
              {quickHelp.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.title}
                    className="flex gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-green-light text-brand-green flex items-center justify-center shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-0.5">{item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div>
              <h3 className="font-semibold mb-3">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/share/1DEiNYrHCN/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-brand-orange hover:bg-brand-orange-dark text-white flex items-center justify-center transition"
                >
                  <Facebook width={18} height={18} />
                </a>
                <a
                  href="https://www.instagram.com/revelation_african_safaris?vrfl=aXk5MmhkcWQwMGw2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-brand-orange hover:bg-brand-orange-dark text-white flex items-center justify-center transition"
                >
                  <Instagram width={18} height={18} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-10 h-10 rounded-full bg-brand-orange hover:bg-brand-orange-dark text-white flex items-center justify-center transition"
                >
                  <Twitter width={18} height={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="relative h-72 md:h-96 w-full bg-gradient-to-br from-orange-50 via-white to-green-50 flex items-center justify-center">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-brand-orange text-white flex items-center justify-center shadow-lg">
                <MapPin size={26} />
              </div>
              <p className="mt-3 font-semibold">Revelation Africa Safari</p>
              <p className="text-sm text-gray-600">Njiro Road, Arusha, Tanzania</p>
              <a
                href="https://maps.google.com/?q=Arusha,Tanzania"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}