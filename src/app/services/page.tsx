import { Metadata } from "next";
import SectionWrapper from "@/components/layout/section-wrapper";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { images } from "@/config/images";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our range of auto detailing services including Ceramic Coating, PPF, and Window Tinting.",
};

export default function ServicesPage() {
  return (
    <>
      <SectionWrapper className="pt-32 pb-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-slate-600">
            Comprehensive protection and restoration packages tailored to your vehicle's needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Service 1: Ceramic Coating */}
          <div className="group">
            <div className="relative rounded-xl overflow-hidden mb-6 aspect-video">
               <Image src={images.service-1.src} alt="Ceramic Coating" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900">Ceramic Coating</h2>
              <Badge variant="secondary" className="text-base px-3 py-1">$800-$2500</Badge>
            </div>
            <p className="text-slate-600 mb-6">
              The ultimate in paint protection. Our ceramic coatings form a permanent bond with your factory paint, creating a layer of protection that is hydrophobic, resistant to UV rays, and incredibly glossy.
            </p>
            <ul className="space-y-2 mb-8">
              {["Hyper-gloss finish", "Chemical resistance", "Ease of washing"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <Button variant="outline" className="w-full">Get Quote</Button>
            </Link>
          </div>

          {/* Service 2: PPF */}
          <div className="group">
            <div className="relative rounded-xl overflow-hidden mb-6 aspect-video">
               <Image src={images.service-2.src} alt="Paint Protection Film" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900">Paint Protection Film (PPF)</h2>
              <Badge variant="secondary" className="text-base px-3 py-1">$1500-$5000</Badge>
            </div>
            <p className="text-slate-600 mb-6">
              Invisible armor for your vehicle. We use high-grade self-healing urethane film to protect high-impact areas from rock chips, road debris, and minor scratches.
            </p>
            <ul className="space-y-2 mb-8">
              {["Self-healing technology", "Impact resistance", "Invisible protection"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <Button variant="outline" className="w-full">Get Quote</Button>
            </Link>
          </div>

          {/* Service 3: Window Tint */}
          <div className="group">
            <div className="relative rounded-xl overflow-hidden mb-6 aspect-video">
               <Image src={images.service-3.src} alt="Window Tinting" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900">Window Tinting</h2>
              <Badge variant="secondary" className="text-base px-3 py-1">$200-$500</Badge>
            </div>
            <p className="text-slate-600 mb-6">
              Enhance privacy and reduce heat with our premium automotive window films. We carry a variety of shades to meet Texas legal requirements while improving aesthetics.
            </p>
            <ul className="space-y-2 mb-8">
              {["Heat rejection", "UV protection", "Clean install warranty"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <Button variant="outline" className="w-full">Get Quote</Button>
            </Link>
          </div>

          {/* Service 4: Interior Detail */}
          <div className="group">
            <div className="relative rounded-xl overflow-hidden mb-6 aspect-video">
               <Image src={images.service-4.src} alt="Interior Detailing" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900">Interior Detailing</h2>
              <Badge variant="secondary" className="text-base px-3 py-1">$150-$300</Badge>
            </div>
            <p className="text-slate-600 mb-6">
              Restore your cabin to a fresh, sanitary state. We deep clean carpets, leather, plastics, and vents, removing stains and odors for a like-new experience.
            </p>
            <ul className="space-y-2 mb-8">
              {["Leather conditioning", "Steam cleaning", "Odor removal"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <Button variant="outline" className="w-full">Get Quote</Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}