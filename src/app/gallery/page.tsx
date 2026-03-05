"use client";

import { Metadata } from "next";
import Image from "next/image";
import { images } from "@/config/images";
import SectionWrapper from "@/components/layout/section-wrapper";
import CtaBand from "@/components/sections/cta-band";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Gallery | Elite Auto Styling",
  description: "View our portfolio of transformed vehicles including ceramic coatings, PPF installations, and detailing work.",
};

// Note: Since this is a static page, we will use a simple client component for the filter/lightbox logic wrapper, 
// but to keep it simple and robust in one file, we will render a grid directly.
// For a true "use client" page, we'd separate the state logic, but Next.js 14 allows client components in page.tsx.

"use client";

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");

  // Extending images config with custom types for gallery items
  const galleryItems = [
    { id: 1, src: images.gallery1.src, alt: images.gallery1.alt, category: "exterior", title: "BMW M4 Paint Correction" },
    { id: 2, src: images.gallery2.src, alt: images.gallery2.alt, category: "ppf", title: "Tesla Model S Full PPF" },
    { id: 3, src: images.gallery3.src, alt: images.gallery3.alt, category: "interior", title: "Luxury Interior Restoration" },
    { id: 4, src: images.gallery4.src, alt: images.gallery4.alt, category: "wheels", title: "Wheel & Brake Detailing" },
    { id: 5, src: "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=1200&h=800&fit=crop", alt: "Porsche GT3", category: "exterior", title: "Porsche GT3 Ceramic" },
    { id: 6, src: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1200&h=800&fit=crop", alt: "Ferrari", category: "exterior", title: "Ferrari 488 Detail" },
  ];

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <>
      <section className="bg-slate-900 pt-32 pb-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
          Our Work
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg px-4">
          A showcase of our recent transformations. From daily drivers to exotic supercars, see the Elite difference.
        </p>
      </section>

      <SectionWrapper className="bg-white">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["all", "exterior", "interior", "ppf", "wheels"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold capitalize transition-all ${
                filter === cat
                  ? "bg-accent text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-zoom-in">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-accent text-xs font-bold uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="text-white font-heading font-bold text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
      <CtaBand />
    </>
  );
}