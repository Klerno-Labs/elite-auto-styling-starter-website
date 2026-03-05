"use client";

import { useState, useRef, useEffect } from "react";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };

    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("mousemove", handleGlobalMouseMove);

    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, [isDragging]);

  return (
    <div className="rounded-2xl overflow-hidden shadow-xl relative aspect-video cursor-ew-resize select-none group"
         ref={containerRef}
         onMouseDown={handleMouseDown}
         onMouseMove={handleMouseMove}
         onMouseUp={handleMouseUp}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 w-full h-full">
         <img 
           src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop" // Clean car
           alt="After detailing" 
           className="w-full h-full object-cover"
         />
         <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider z-10">
           After
         </div>
      </div>

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
           src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1200&auto=format&fit=crop" // Dirty car
           alt="Before detailing" 
           className="w-full h-full object-cover object-left"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider z-10">
           Before
        </div>
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-slate-900">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <polyline points="15 18 9 12 15 6"></polyline>
           </svg>
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-ml-4">
             <polyline points="9 18 15 12 9 6"></polyline>
           </svg>
        </div>
      </div>

      {/* Hover Overlay Instruction */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
        <p className="text-white font-bold tracking-widest uppercase text-sm bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
          Drag to compare
        </p>
      </div>
    </div>
  );
}