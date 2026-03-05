// ── Image Configuration ──────────────────────────────────────────────
// ✏️  HOW TO CHANGE IMAGES:
// 1. Find the slot you want to change below (e.g. "hero", "about", "service-1")
// 2. Replace the "src" URL with your own image URL
// 3. Update the "alt" text to describe the new image
// 4. Save — every component on the site updates automatically
//
// All components import from this file. This is the ONLY file you need
// to edit to swap any image on the entire website.

export const images = {
  // Homepage hero banner — Luxury Tesla/Porsche on clean background
  "hero": {
    src: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop",
    alt: "Black luxury Tesla Model S with ceramic coating in a pristine studio",
    width: 1200,
    height: 800,
  },

  // Alternative hero image
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2070&auto=format&fit=crop",
    alt: "Detailing spray bottle and microfiber towel on a car hood",
    width: 1200,
    height: 800,
  },

  // About page or About section — Team working
  "about": {
    src: "https://images.unsplash.com/photo-1629813295961-72108ade53c9?q=80&w=2070&auto=format&fit=crop",
    alt: "Professional auto detailer polishing a vehicle headlight",
    width: 1200,
    height: 800,
  },

  // Service 1: Ceramic Coating
  "service-1": {
    src: "https://images.unsplash.com/photo-1632282218445-3e1a80c1d5b5?q=80&w=2070&auto=format&fit=crop",
    alt: "Water beading on a ceramic coated car hood",
    width: 1200,
    height: 800,
  },

  // Service 2: PPF / Paint Protection
  "service-2": {
    src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop",
    alt: "Close up of Paint Protection Film application",
    width: 1200,
    height: 800,
  },

  // Service 3: Window Tinting
  "service-3": {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop",
    alt: "Luxury car with window tinting",
    width: 1200,
    height: 800,
  },

  // Gallery 1: Before/After or Showcase
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2069&auto=format&fit=crop",
    alt: "Ferrari red luxury sports car detailing",
    width: 1200,
    height: 800,
  },

  // Gallery 2
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop",
    alt: "Porsche 911 Carrera detailed interior",
    width: 1200,
    height: 800,
  },

  // Gallery 3
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2070&auto=format&fit=crop",
    alt: "Blue metallic luxury car exterior after polish",
    width: 1200,
    height: 800,
  },

  // CTA Background
  "cta": {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2066&auto=format&fit=crop",
    alt: "Aston Martin DB11 on the road at sunset",
    width: 1200,
    height: 800,
  },

  // Testimonial Background
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=2070&auto=format&fit=crop",
    alt: "Garage with luxury cars and organized tools",
    width: 1200,
    height: 800,
  },
  
  // Founder/Team
  "founder": {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop",
    alt: "Portrait of the Elite Auto Styling founder",
    width: 600,
    height: 600,
  }
} as const;

export type ImageSlot = keyof typeof images;