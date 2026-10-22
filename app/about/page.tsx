"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Heart,
  ShieldCheck,
  Users,
  Leaf,
  Star,
  MapPin,
  Award,
  Globe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

// ---------- Data ----------
const stats = [
  { value: "2021", label: "Founded in Arusha" },
  { value: "500+", label: "Happy Travelers" },
  { value: "100%", label: "Tanzanian-Owned" },
  { value: "5.0", label: "Average Rating", icon: Star },
];

const values = [
  {
    icon: Compass,
    title: "Authenticity",
    text: "We create genuine, immersive experiences that reflect the true spirit of Tanzania — from the Serengeti plains to Zanzibar's shores.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Tourism",
    text: "We foster environmentally conscious travel that preserves wildlife, ecosystems, and cultural heritage for future generations.",
  },
  {
    icon: Users,
    title: "Community Empowerment",
    text: "We uplift local communities through fair employment, education, and economic opportunities that keep tourism benefits local.",
  },
  {
    icon: Leaf,
    title: "Environmental Preservation",
    text: "We commit to sustainable practices that protect Tanzania's natural resources — because these landscapes are our home.",
  },
  {
    icon: Heart,
    title: "Passion for Africa",
    text: "We are driven by a deep love for this continent's wildlife, landscapes, and people. That passion shapes every itinerary we design.",
  },
  {
    icon: Award,
    title: "Excellence",
    text: "We maintain the highest standards of service, safety, and hospitality — from your first enquiry to your final sundowner.",
  },
];

const whyChooseUs = [
  {
    icon: MapPin,
    title: "Local Experts, Not Middlemen",
    text: "We are wholly Tanzanian-owned. Our guides and planners live and breathe the parks we send you to — the expertise you receive is first-hand.",
  },
  {
    icon: Compass,
    title: "Every Safari Custom-Built",
    text: "No off-the-shelf packages. Whether you're chasing the migration, climbing Kilimanjaro, or relaxing on Zanzibar's beaches — we design around you.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Taken Seriously",
    text: "Well-maintained vehicles, certified guides, and 24/7 support. Your safety and comfort are never compromised.",
  },
  {
    icon: Globe,
    title: "Tourism That Gives Back",
    text: "We employ locally, pay fairly, and support community and conservation initiatives near the parks we love.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-black">
      {/* ---------- Hero ---------- */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-green-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange font-semibold text-sm px-4 py-1.5 rounded-full">
                <Heart size={16} /> Our Story
              </span>
              <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Born in Tanzania.
                <br />
                Built for <span className="text-brand-orange">Curious Travelers</span>.
              </h1>
              <p className="mt-5 text-base md:text-lg text-gray-600 leading-relaxed">
                Revelation Africa Safari began with a simple belief: that travelers
                visiting Tanzania deserved more than a box-ticking circuit of gates
                and lodges. They deserved a safari shaped by the rhythms of the land,
                the knowledge of guides who grew up tracking these animals, and the
                quiet hospitality that has always defined East Africa.
              </p>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                Founded in Arusha in 2021, we are a small, locally-owned team of
                guides, planners, and safari enthusiasts. What hasn't changed is our
                philosophy: every itinerary is still designed by hand. Every guest is
                still treated as our only one.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/tours"
                  className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition shadow"
                >
                  Explore Our Tours <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-gray-300 hover:border-brand-orange text-black font-semibold px-6 py-3 rounded-lg transition"
                >
                  Talk to Us
                </Link>
              </div>
            </div>

            <div className="relative h-72 md:h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about-hero.jpg"
                alt="Revelation Africa Safari team on safari in Tanzania"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Stats ---------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-gray-100 rounded-xl shadow-sm p-5 text-center"
            >
              <p className="text-2xl md:text-3xl font-extrabold text-brand-orange">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Mission & Vision ---------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center">
              <Compass size={24} />
            </div>
            <h2 className="mt-4 text-2xl font-bold">Our Mission</h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              To design and deliver safe, custom-crafted safari experiences that
              reflect the dreams of each traveler, while contributing to the
              preservation of Tanzania's wildlife and the empowerment of local
              communities. We exist to turn your dream trip into a reality — with
              authenticity, care, and deep local knowledge at every step.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center">
              <Globe size={24} />
            </div>
            <h2 className="mt-4 text-2xl font-bold">Our Vision</h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              To become Tanzania's most trusted and innovative safari operator —
              delivering exceptional travel experiences that celebrate nature,
              culture, and conservation. We envision a future where tourism lifts
              local communities, protects wild places, and creates lasting memories
              for every guest who travels with us.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Values ---------- */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-green-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-brand-green-light text-brand-green font-semibold text-sm px-4 py-1.5 rounded-full">
              <Star size={16} /> What We Stand For
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight">
              Our Core <span className="text-brand-orange">Values</span>
            </h2>
            <p className="mt-3 text-gray-600">
              These aren't taglines. They're the principles our team returns to
              before every quote we write and every summit we celebrate.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 hover:shadow-md hover:border-brand-orange transition"
                >
                  <div className="w-11 h-11 rounded-lg bg-brand-green-light text-brand-green flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 font-semibold text-lg">{value.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Why Choose Us ---------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
            <Image
              src="/images/about-safari.jpg"
              alt="Safari vehicle in the Serengeti at sunset"
              fill
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange font-semibold text-sm px-4 py-1.5 rounded-full">
              <CheckCircle2 size={16} /> Why Choose Us
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight">
              A Safari Company Shaped by the People Who Live Here
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              With countless tour operators in Tanzania, why travel with us? The
              answer lies in our dedication to excellence, personalized service, and
              deep passion for creating meaningful travel experiences.
            </p>

            <ul className="mt-6 space-y-4">
              {whyChooseUs.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="flex gap-4">
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
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-brand-orange to-orange-600 text-white p-8 md:p-14 text-center shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Ready to Start Your African Adventure?
            </h2>
            <p className="mt-3 text-white/90 text-base md:text-lg">
              Tell us your dates and dream destinations. We'll craft the perfect
              itinerary — tailored to your pace, your style, and your budget.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-black font-semibold px-7 py-3 rounded-lg hover:bg-gray-100 transition shadow"
              >
                Plan Your Safari <ArrowRight size={16} />
              </Link>
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-7 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Browse Tours
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}