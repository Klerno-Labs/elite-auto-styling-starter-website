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
  // Homepage hero banner — the first image visitors see
  "hero": {
    src: "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2070&auto=format&fit=crop",
    alt: "Close up of a luxury car hood with ceramic coating shine",
    width: 2070,
    height: 1380,
  },

  // Alternative hero image (used on inner pages)
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop",
    alt: "Porsche 911 being detailed in a professional studio",
    width: 2070,
    height: 1380,
  },

  // About page or About section
  "about": {
    src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2070&auto=format&fit=crop",
    alt: "Professional auto detailing technician polishing a vehicle",
    width: 2070,
    height: 1380,
  },

  // Service: Ceramic Coating
  "service-1": {
    src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop",
    alt: "High gloss ceramic coating finish on a sports car",
    width: 800,
    height: 600,
  },

  // Service: Paint Protection Film (PPF)
  "service-2": {
    src: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop",
    alt: "Paint Protection Film being applied to a front bumper",
    width: 800,
    height: 600,
  },

  // Service: Window Tinting
  "service-3": {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop",
    alt: "Window tinting application on luxury vehicle",
    width: 800,
    height: 600,
  },
  
  // Service: Interior Detailing
  "service-4": {
    src: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop",
    alt: "Clean luxury car interior leather seats",
    width: 800,
    height: 600,
  },

  // Gallery: Before/After 1
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=1200&auto=format&fit=crop",
    alt: "Tesla Model 3 ceramic coating result",
    width: 1200,
    height: 800,
  },

  // Gallery: Before/After 2
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1200&auto=format&fit=crop",
    alt: "Headlight restoration result on luxury sedan",
    width: 1200,
    height: 800,
  },

  // Gallery: Before/After 3
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
    alt: "Paint correction swirl mark removal",
    width: 1200,
    height: 800,
  },
  
  // Gallery: Before/After 4
  "gallery-4": {
    src: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=1200&auto=format&fit=crop",
    alt: "Interior detailing and leather restoration",
    width: 1200,
    height: 800,
  },

  // Call-to-action section background
  "cta": {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2070&auto=format&fit=crop",
    alt: "Supercar in studio at golden hour",
    width: 2070,
    height: 1380,
  },

  // Testimonials section background
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2070&auto=format&fit=crop",
    alt: "Detailed car engine bay background",
    width: 2070,
    height: 1380,
  },
} as const;

export type ImageSlot = keyof typeof images;