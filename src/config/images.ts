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
  // Homepage hero banner — Luxury vehicle front view
  "hero": {
    src: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1600&auto=format&fit=crop",
    alt: "Porsche 911 front view in luxury setting",
    width: 1600,
    height: 900,
  },

  // About page hero — Shop floor detail
  "about-hero": {
    src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1600&auto=format&fit=crop",
    alt: "Clean automotive workshop floor",
    width: 1600,
    height: 900,
  },

  // Founder portrait
  "founder": {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    alt: "Portrait of Elite Auto Styling founder",
    width: 800,
    height: 800,
  },

  // Service: Ceramic Coating
  "service-ceramic": {
    src: "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=800&auto=format&fit=crop",
    alt: "Car paint being polished for ceramic coating",
    width: 800,
    height: 600,
  },

  // Service: PPF
  "service-ppf": {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    alt: "Paint protection film application on hood",
    width: 800,
    height: 600,
  },

  // Service: Window Tinting
  "service-tint": {
    src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop",
    alt: "Car window tinting in progress",
    width: 800,
    height: 600,
  },

  // Service: Interior Detailing
  "service-interior": {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop",
    alt: "Luxury car leather interior cleaning",
    width: 800,
    height: 600,
  },

  // Gallery: Before (Swirl marks)
  "gallery-before-1": {
    src: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=800&auto=format&fit=crop",
    alt: "Car paint with swirl marks before correction",
    width: 800,
    height: 600,
  },

  // Gallery: After (Glossy)
  "gallery-after-1": {
    src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop",
    alt: "Car paint after correction and coating",
    width: 800,
    height: 600,
  },
  
  // Gallery: Tesla Model 3
  "gallery-tesla": {
    src: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop",
    alt: "Tesla Model 3 with ceramic coating",
    width: 800,
    height: 600,
  },

  // CTA Background
  "cta": {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop",
    alt: "Sports car on road at sunset",
    width: 1600,
    height: 600,
  }
} as const;

export type ImageSlot = keyof typeof images;