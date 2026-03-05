export const siteConfig = {
  name: "Elite Auto Styling",
  description: "Austin's premier automotive detailing and paint protection studio. Specializing in ceramic coatings, PPF, and window tinting for luxury and exotic vehicles.",
  url: "https://eliteautostyling.com",
  links: {
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  contact: {
    phone: "(512) 333-9104",
    email: "contact@eliteautostyling.com",
    address: "8901 Research Blvd, Suite 240, Austin, TX 78758",
    hours: "Mon-Sat: 8am-6pm, Sun: By Appointment Only",
  },
  nav: [
    { title: "Services", href: "/services" },
    { title: "Gallery", href: "/gallery" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
  services: [
    { title: "Full Detail", price: "$250-$450" },
    { title: "Ceramic Coating", price: "$800-$2500" },
    { title: "Paint Protection Film", price: "$1500-$5000" },
    { title: "Window Tinting", price: "$200-$500" },
    { title: "Interior Detail", price: "$150-$300" },
    { title: "Paint Correction", price: "$500-$1200" },
    { title: "Headlight Restoration", price: "$100-$200" },
  ],
  testimonials: [
    {
      name: "Tyler R.",
      role: "Tesla Model 3 Owner",
      quote: "Had my Model 3 ceramic coated here and it looks better than the day I bought it. Marcus and his team are perfectionists.",
    },
    {
      name: "Jennifer L.",
      role: "Porsche 911 Owner",
      quote: "The PPF on my Porsche 911 is flawless. You can't even tell it's there. Worth every penny for peace of mind.",
    },
    {
      name: "Alex W.",
      role: "Local Customer",
      quote: "Best window tinting in Austin. Clean install, no bubbles, and they took the time to explain the different options.",
    },
  ],
};

export type SiteConfig = typeof siteConfig;