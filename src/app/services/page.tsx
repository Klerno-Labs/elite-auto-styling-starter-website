import { Metadata } from "next";
import { Shield, Droplets, Wrench, Sun, Car, Hammer } from "lucide-react";
import Section from "@/components/ui/section";
import Button from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Elite Auto Styling",
  description: "View our complete range of auto detailing services in Austin, including Ceramic Coating, PPF, Window Tinting, and Paint Correction.",
};

const services = [
  {
    title: "Full Detail Package",
    price: "$250 - $450",
    description: "Our comprehensive detailing package covers every inch of your vehicle. Exterior includes hand wash, iron remover, clay bar treatment, compound polish, sealant, and tire dressing. Interior includes vacuuming, steam cleaning, leather conditioning, and glass cleaning.",
    icon: Car,
    features: ["Hand Wash & Clay Bar", "Compound & Polish", "Interior Deep Clean", "Leather Conditioning"]
  },
  {
    title: "Ceramic Coating",
    price: "$800 - $2500",
    description: "Protect your vehicle's paint with our professional-grade ceramic coatings. We offer 1-year, 3-year, and 5-year options. Ceramic coatings provide superior hydrophobic properties, UV protection, and a deep, glossy shine that makes maintenance effortless.",
    icon: Droplets,
    features: ["1, 3, or 5 Year Warranty", "Extreme Hydrophobicity", "UV & Chemical Resistance", "High Gloss Finish"]
  },
  {
    title: "Paint Protection Film (PPF)",
    price: "$1500 - $5000",
    description: "The ultimate defense against rock chips, road debris, and scratches. We use top-tier XPEL and 3M films. Available for full body wrapping or high-impact areas such as front bumper, hood, fenders, mirrors, and headlights.",
    icon: Shield,
    features: ["Self-Healing Technology", "XPEL & 3M Films", "Invisible Protection", "Yellowing Resistant"]
  },
  {
    title: "Window Tinting",
    price: "$200 - $500",
    description: "Enhance your vehicle's appearance and comfort with our premium window tint films. We carry high-performance carbon and ceramic films that reject heat, block 99% of UV rays, and provide privacy without interfering with radio signals.",
    icon: Sun,
    features: ["Carbon & Ceramic Films", "Heat Rejection", "99% UV Protection", "Lifetime Warranty"]
  },
  {
    title: "Interior Detailing",
    price: "$150 - $300",
    description: "Revitalize your cabin. Our interior detailing service tackles tough stains, odors, and dirt. We use specialized tools and cleaners for leather, fabric, carpets, and plastics to leave your interior looking and smelling new.",
    icon: Hammer,
    features: ["Steam Cleaning", "Leather Restoration", "Odor Removal", "Plastic & Trim Reconditioning"]
  },
  {
    title: "Paint Correction",
    price: "$500 - $1200",
    description: "Restore your paint's clarity and remove imperfections. Our multi-stage paint correction process removes swirl marks, holograms, oxidation, and light scratches, revealing a mirror-like finish.",
    icon: Wrench,
    features: ["Multi-Stage Buffing", "Swirl Removal", "Oxidation Removal", "Showroom Shine"]
  }
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Header */}
      <section className="bg-slate-900 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Premium protection and styling services tailored to luxury vehicles.
          </p>
        </div>
      </section>

      {/* Services List */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-lg transition-shadow flex flex-col md:flex-row gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 md:mb-0">
                    <service.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                    <span className="text-lg font-bold text-blue-600 mt-2 md:mt-0">{service.price}</span>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-slate-700 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <Section>
        <div className="bg-slate-900 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not sure what you need?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Contact us for a free consultation. We&apos;ll assess your vehicle's condition and recommend the best package for your budget and goals.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Get a Free Quote
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}