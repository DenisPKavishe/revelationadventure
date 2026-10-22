import Image from "next/image";
import { notFound } from "next/navigation";
import { safaris } from "@/data/safaris";

import { MapPin } from "lucide-react";
import SafariCard from "@/app/components/SafariCard";

const destinationData: Record<string, { title: string, image: string, description: string }> = {
  "ngorongoro": { title: "Ngorongoro Crater", image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1920&q=80", description: "A UNESCO World Heritage Site and the world's largest intact volcanic caldera, teeming with wildlife including the Big Five." },
  "serengeti": { title: "Serengeti National Park", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1920&q=80", description: "Famous for its vast plains and the Great Migration, the Serengeti is one of the most iconic wildlife destinations on Earth." },
  "tarangire": { title: "Tarangire National Park", image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1920&q=80", description: "Known as the Land of Giants, Tarangire is famous for its massive elephant herds and iconic baobab trees." },
  "manyara": { title: "Lake Manyara National Park", image: "https://images.unsplash.com/photo-1534177616072-ef7dc1204494?auto=format&fit=crop&w=1920&q=80", description: "Famous for its tree-climbing lions, flamingos, and the dramatic Great Rift Valley escarpment." },
};

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dest = destinationData[slug];
  if (!dest) notFound();

  const relatedSafaris = safaris.filter(s => 
    s.destinations.some(d => d.toLowerCase().includes(dest.title.split(" ")[0].toLowerCase()))
  );

  return (
    <div className="bg-white min-h-screen">
      <div className="relative h-[40vh] w-full bg-gray-900">
        <Image src={dest.image} alt={dest.title} fill sizes="100vw" className="object-cover opacity-70" priority />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{dest.title}</h1>
            <p className="text-lg text-white/90">{dest.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <MapPin className="text-brand-orange" size={28} />
          <h2 className="text-3xl font-bold">Safaris Visiting {dest.title}</h2>
        </div>
        {relatedSafaris.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedSafaris.map(safari => <SafariCard key={safari.slug} safari={safari} />)}
          </div>
        ) : (
          <p className="text-gray-500">No safaris currently listed for this destination.</p>
        )}
      </div>
    </div>
  );
}