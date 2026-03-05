"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const x = clientX - containerRect.left;
    const percentage = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);

  // Using generic high-contrast images for demo
  const beforeImage = "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&h=800&fit=crop"; // Duller interior
  const afterImage = images.service3.src; // Shiny interior

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-bold uppercase tracking-wider text-sm">See The Difference</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Before & After Gallery
          </h2>
          <p className="text-slate-600">
            Drag the slider to see the transformation our detailing services provide.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-4xl mx-auto aspect-[16/9] md:aspect-[2/1] rounded-xl overflow-hidden shadow-xl border border-slate-200 group cursor-ew-resize select-none"
          ref={containerRef}
          onMouseMove={handleMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Before Image (Background) */}
          <div className="absolute inset-0">
            <Image
              src={beforeImage}
              alt="Before detailing"
              fill
              className="object-cover filter brightness-90 contrast-90"
            />
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-md text-sm font-semibold backdrop-blur-sm">
              Before
            </div>
          </div>

          {/* After Image (Overlay with Clip Path) */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: `inset(0 0 0 ${sliderPosition}%)`,
            }}
          >
            <Image
              src={afterImage}
              alt="After detailing"
              fill
              className="object-cover"
            />
             <div className="absolute top-4 right-4 bg-accent/90 text-white px-3 py-1 rounded-md text-sm font-semibold backdrop-blur-sm">
              After
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none flex items-center justify-center z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-800"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-800"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}