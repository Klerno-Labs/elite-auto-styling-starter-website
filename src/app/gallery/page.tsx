import { Metadata } from "next";
import Image from "next/image";
import { images } from "@/config/images";
import { useState } from "react"; // Note: Using client logic would be needed for lightbox, using simple grid for server component

export const metadata: Metadata = {
  title: "Gallery | Elite Auto Styling",
  description: "View our portfolio of automotive detailing, ceramic coating, and PPF projects in Austin.",
};

// Mock gallery data
const galleryItems = [
  { id: 1, type: "Ceramic Coating", vehicle: "Tesla Model 3", src: (images as Record<string, { src: string; alt?: string; width?: number; height?: number } | string>)["gallery-tesla"], before: null },
  { id: 2, type: "Paint Correction", vehicle: "Porsche 911", src: (images as Record<string, { src: string; alt?: string; width?: number; height?: number } | string>)["gallery-after-1"], before: (images as Record<string, { src: string; alt?: string; width?: number; height?: number } | string>)["gallery-before-1"] },
  { id: 3, type: "Interior Detail", vehicle: "Range Rover", src: images["service-interior"], before: null },
  { id: 4, type: "PPF Install", vehicle: "BMW M3", src: images["service-ppf"], before: null },
  { id: 5, type: "Window Tint", vehicle: "Lexus RX350", src: images["service-tint"], before: null },
  { id: 6, type: "Full Detail", vehicle: "Mercedes G-Wagon", src: images.hero, before: null },
];

export default function GalleryPage() {
  return (
    <div className="pt-8 pb-16">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">Our Work</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Browse our portfolio of transformed vehicles. Every project is treated with the highest level of care.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.filter(Boolean).map((item) => (
              <div key={item.id} className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                <Image
                  src={(item.src)?.src ?? "/placeholder.jpg"}
                  alt={`${item.type} on ${item.vehicle}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">{item.type}</span>
                  <h3 className="text-white font-heading font-bold text-xl">{item.vehicle}</h3>
                  {item.before && (
                    <span className="mt-2 text-xs text-white/80 border border-white/30 px-2 py-1 rounded inline-block">Before/After Available</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}