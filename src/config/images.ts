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
  // Homepage hero banner — luxury car (Porsche/Tesla) front view
  "hero": {
    src: "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=1200&h=800&fit=crop",
    alt: "Porsche 911 GT3 with ceramic coating in Austin",
    width: 1200,
    height: 800,
  },

  // Alternative hero image
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1200&h=800&fit=crop",
    alt: "Red Ferrari luxury sports car",
    width: 1200,
    height: 800,
  },

  // About page or About section — workshop/team
  "about": {
    src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&h=800&fit=crop",
    alt: "Elite Auto Styling team applying paint protection film",
    width: 1200,
    height: 800,
  },

  // Service 1: Ceramic Coating
  "service-1": {
    src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1200&h=800&fit=crop",
    alt: "Close up of ceramic coated paint beading water",
    width: 1200,
    height: 800,
  },

  // Service 2: Paint Protection Film
  "service-2": {
    src: "https://images.unsplash.com/photo-1625231334168-3317413d1412?q=80&w=1200&h=800&fit=crop",
    alt: "Installing clear bra paint protection film",
    width: 1200,
    height: 800,
  },

  // Service 3: Interior Detailing
  "service-3": {
    src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200&h=800&fit=crop",
    alt: "Luxury car interior leather detailing",
    width: 1200,
    height: 800,
  },

  // Gallery 1: Before/After Exterior
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&h=800&fit=crop",
    alt: "Black BMW M4 after paint correction",
    width: 1200,
    height: 800,
  },

  // Gallery 2: Tesla
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1200&h=800&fit=crop",
    alt: "Tesla Model S PPF installation",
    width: 1200,
    height: 800,
  },

  // Gallery 3: Interior
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&h=800&fit=crop",
    alt: "Detailed car interior cleaning",
    width: 1200,
    height: 800,
  },
  
  // Gallery 4: Wheels/Brakes
  "gallery-4": {
    src: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=1200&h=800&fit=crop",
    alt: "Detailed alloy wheel and brake caliper",
    width: 1200,
    height: 800,
  },

  // CTA background
  "cta": {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&h=800&fit=crop",
    alt: "Supercar in studio lighting",
    width: 1200,
    height: 800,
  },

  // Testimonial background
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=1200&h=800&fit=crop",
    alt: "Automotive workshop background",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;