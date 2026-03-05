import Link from "next/link";
import Image from "next/image";
import { Shield, Sparkles, Droplets, Wrench, Star, CheckCircle, ArrowRight } from "lucide-react";
import { images } from "@/config/images";
import Section from "@/components/ui/section";
import Button from "@/components/ui/button";
import BeforeAfterSlider from "@/components/features/before-after-slider";
import ServiceCard from "@/components/features/service-card";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-50 overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Serving Austin, Round Rock & Cedar Park</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-slate-900 tracking-tight leading-[1.1]">
              Preserving the <span className="text-blue-600">Beauty</span> of Your Investment
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Elite Auto Styling is Austin's premier destination for Paint Protection Film, Ceramic Coatings, and Showroom Detailing. We treat every vehicle with the precision it deserves.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Get a Quote
                </Button>
              </Link>
              <Link href="/#gallery">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Gallery
                </Button>
              </Link>
            </div>

            <div className="flex items-center space-x-6 pt-4 text-sm font-medium text-slate-500">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-600" />
                Licensed & Insured
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500 fill-yellow-500" />
                5-Star Rated
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-1000 delay-200">
            <Image
              src={images["hero"].src}
              alt={images["hero"].alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-slate-50/20 to-transparent lg:to-slate-50 lg:via-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Problem / Solution Section */}
      <Section background="slate">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-slate-200 rounded-full blur-3xl opacity-50" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100">
               <Image
                src={images["about"].src}
                alt="Detailing process"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Why Elite?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Standard Detailing Just Isn't Enough for Luxury Vehicles
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Automatic car washes cause swirl marks. Cheap waxes degrade in weeks. At Elite Auto Styling, we use professional-grade compounds, premium ceramic coatings, and meticulous paint correction techniques to restore your vehicle to a flawless finish—and keep it that way.
            </p>
            <ul className="space-y-4">
              {[
                "Multi-stage paint correction for a glass-like finish",
                "Industry-leading XPEL and 3M PPF installation",
                "Hydrophobic ceramic coatings lasting 3-5+ years",
                "Interior restoration and leather protection"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Before/After Section */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs block mb-2">The Results Speak</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Real Transformations</h2>
          <p className="text-slate-600">
            Drag the slider to see the difference our professional detailing and ceramic coating makes.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <BeforeAfterSlider label="Full Paint Correction & Ceramic Coating" />
        </div>
      </Section>

      {/* Services Section */}
      <Section background="slate">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs block mb-2">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Premium Services</h2>
          <p className="text-slate-600">
            From daily drivers to exotic supercars, we offer a comprehensive suite of protection and styling services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Full Detail Package"
            description="Complete interior and exterior rejuvenation. Includes hand wash, clay bar, wax, and deep interior clean."
            price="$250 - $450"
            imageKey="gallery-3"
            href="/services"
          />
          <ServiceCard
            title="Ceramic Coating"
            description="The ultimate paint protection. Creates a hydrophobic layer that repels water, dirt, and UV rays."
            price="$800 - $2500"
            imageKey="service-1"
            href="/services"
          />
          <ServiceCard
            title="Paint Protection Film"
            description="Invisible urethane film that protects your paint from rock chips, scratches, and road debris."
            price="$1500 - $5000"
            imageKey="service-2"
            href="/services"
          />
          <ServiceCard
            title="Window Tinting"
            description="Premium ceramic window tint for heat rejection, UV protection, and enhanced privacy."
            price="$200 - $500"
            imageKey="service-3"
            href="/services"
          />
          <ServiceCard
            title="Interior Detailing"
            description="Deep cleaning of leather, carpets, and plastics. We remove stains and odors for a fresh feel."
            price="$150 - $300"
            imageKey="gallery-2"
            href="/services"
          />
          <ServiceCard
            title="Paint Correction"
            description="Removes swirl marks, scratches, and oxidation to restore a showroom shine."
            price="$500 - $1200"
            imageKey="gallery-1"
            href="/services"
          />
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
         <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs block mb-2">Social Proof</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "Had my Model 3 ceramic coated here and it looks better than the day I bought it. Marcus and his team are perfectionists.",
              author: "Tyler R.",
              location: "Tesla Model 3"
            },
            {
              quote: "The PPF on my Porsche 911 is flawless. You can't even tell it's there. Worth every penny for peace of mind.",
              author: "Jennifer L.",
              location: "Porsche 911"
            },
            {
              quote: "Best window tinting in Austin. Clean install, no bubbles, and they took the time to explain the different options.",
              author: "Alex W.",
              location: "BMW M3"
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-2xl relative">
              <div className="text-blue-200 text-6xl absolute top-4 left-4">"</div>
              <div className="flex text-yellow-400 mb-4 relative z-10">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-slate-700 mb-6 italic relative z-10">
                {testimonial.quote}
              </p>
              <div>
                <div className="font-bold text-slate-900">{testimonial.author}</div>
                <div className="text-sm text-slate-500">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Banner */}
      <section className="relative bg-slate-900 py-24 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={images["cta"].src}
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Restore Your Vehicle?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the Elite difference. We offer flexible scheduling and mobile service options.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Schedule Service <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}