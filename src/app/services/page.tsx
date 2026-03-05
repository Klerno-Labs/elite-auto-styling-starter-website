import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "Services | Elite Auto Styling",
  description: "Explore our premium auto detailing services in Austin. Ceramic coating, PPF, window tinting, and paint correction for luxury vehicles.",
};

const services = [
  {
    id: "ceramic",
    title: "Ceramic Coating",
    price: "$800 - $2,500",
    desc: "The ultimate paint protection. Our ceramic coatings bond chemically to your paint, creating a layer of protection that is hydrophobic, scratch-resistant, and UV stable.",
    image: images["service-ceramic"],
    features: ["Up to 5 years protection", "Hydrophobic properties", "UV resistance", "High gloss shine"],
    slug: "ceramic-coating"
  },
  {
    id: "ppf",
    title: "Paint Protection Film (PPF)",
    price: "$1,500 - $5,000",
    desc: "Self-healing urethane film that protects vulnerable areas of your vehicle from rock chips, road debris, and minor scratches. Virtually invisible once installed.",
    image: images["service-ppf"],
    features: ["Self-healing technology", "Impact protection", "Yellowing resistant", "5-10 year warranty"],
    slug: "paint-protection-film"
  },
  {
    id: "tint",
    title: "Window Tinting",
    price: "$200 - $500",
    desc: "Premium ceramic window films that reject heat, block UV rays, and add privacy without interfering with your vehicle's electronics or signals.",
    image: images["service-tint"],
    features: ["Heat rejection", "99% UV block", "Signal friendly", "Lifetime warranty"],
    slug: "window-tinting"
  },
  {
    id: "detail",
    title: "Interior Detailing",
    price: "$150 - $300",
    desc: "Deep cleaning and restoration of your vehicle's interior. We treat leather, clean carpets, and condition plastics to make the interior look new.",
    image: images["service-interior"],
    features: ["Leather conditioning", "Steam cleaning", "Odor removal", "UV protection"],
    slug: "interior-detailing"
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-8">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Premium protection and detailing packages tailored to luxury vehicles.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={service.image.src}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-heading font-bold text-slate-900">{service.title}</h2>
                  <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                  <p className="text-lg text-slate-600 leading-relaxed">{service.desc}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <div className="bg-green-100 rounded-full p-1 mr-3">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <Button className="mt-4 group">
                      Book This Service
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-heading font-bold text-slate-900 mb-6">Not sure what you need?</h3>
          <p className="text-lg text-slate-600 mb-8">
            Our team can inspect your vehicle and recommend the best protection plan based on your driving habits and budget.
          </p>
          <Link href="/contact">
            <Button size="lg">Get a Free Consultation</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}