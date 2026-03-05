import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Sparkles, Droplet, Star, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 z-10 animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold">
              <MapPin className="w-4 h-4 mr-2" />
              Serving Austin, Round Rock, Cedar Park
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
              Preserving the Beauty of Your <span className="text-blue-600">Investment</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Austin&apos;s premier automotive detailing studio. We specialize in ceramic coatings, PPF, and showroom-quality detailing for luxury vehicles and EVs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto shadow-lg shadow-blue-500/30">
                  Get a Quote
                </Button>
              </Link>
              <Link href="/gallery">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto group">
                  View Gallery
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-8 border-t border-slate-200">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <div className="text-sm text-slate-600">
                <span className="font-bold">5-Star Rated</span> by Austin owners
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={images.hero.src}
              alt={images.hero.alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-slate-50/0 via-slate-50/0 to-slate-50" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 mb-4">Elite Services</h2>
            <p className="text-lg text-slate-600">
              From daily drivers to exotic supercars, we treat every vehicle with the precision it deserves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Droplet className="w-8 h-8" />,
                title: "Ceramic Coating",
                desc: "Long-lasting protection against UV rays, dirt, and chemicals. Creates a hydrophobic, glass-like finish.",
                price: "$800-$2,500",
                link: "/services"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Paint Protection Film",
                desc: "Invisible urethane film that protects your paint from rock chips, scratches, and road debris.",
                price: "$1,500-$5,000",
                link: "/services"
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Full Detail Package",
                desc: "Comprehensive interior and exterior restoration. Paint correction, leather conditioning, and more.",
                price: "$250-$450",
                link: "/services"
              }
            ].map((service, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{service.price}</span>
                  <Link href={service.link} className="text-slate-900 font-bold flex items-center group-hover:text-blue-600">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" size="lg" className="h-12 px-8">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Before/After Preview */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold">See the Difference</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                We specialize in paint correction that removes swirl marks, scratches, and oxidation, revealing a mirror-like finish.
              </p>
              <ul className="space-y-4">
                {["Multi-stage polishing", "100% Scratch removal", "High-gloss ceramic finish", "Paint depth measurement"].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/gallery">
                <Button size="lg" className="mt-4 bg-blue-600 hover:bg-blue-500 text-white border-0">
                  Visit Full Gallery
                </Button>
              </Link>
            </div>
            
            {/* Comparison Visual */}
            <div className="relative aspect-video rounded-xl overflow-hidden border-4 border-slate-700 shadow-2xl">
              <Image
                src={images["gallery-after-1"].src}
                alt={images["gallery-after-1"].alt}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                After
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                 <p className="text-sm font-semibold text-white">Paint Correction & Ceramic Coating</p>
                 <p className="text-xs text-slate-300">Tesla Model 3 - Austin, TX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center text-slate-900 mb-16">Client Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Had my Model 3 ceramic coated here and it looks better than the day I bought it. Marcus and his team are perfectionists.",
                author: "Tyler R.",
                vehicle: "Tesla Model 3"
              },
              {
                quote: "The PPF on my Porsche 911 is flawless. You can't even tell it's there. Worth every penny for peace of mind.",
                author: "Jennifer L.",
                vehicle: "Porsche 911"
              },
              {
                quote: "Best window tinting in Austin. Clean install, no bubbles, and they took the time to explain the different options.",
                author: "Alex W.",
                vehicle: "BMW M4"
              }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <div className="flex text-amber-500 mb-4">
                   {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-600 mb-6 italic leading-relaxed">"{review.quote}"</p>
                <div>
                  <p className="font-bold text-slate-900">{review.author}</p>
                  <p className="text-sm text-slate-500">{review.vehicle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.cta.src}
            alt={images.cta.alt}
            fill
            className="object-cover opacity-20 mix-blend-multiply"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-heading font-bold mb-6">Ready to Restore Your Vehicle?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Book your appointment today and experience the Elite difference. Flexible scheduling available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 h-14 px-8 text-lg font-bold shadow-xl">
                Schedule Now
              </Button>
            </Link>
            <a href="tel:5123339104" className="inline-flex items-center justify-center h-14 px-8 text-lg font-bold border-2 border-white rounded-lg hover:bg-white/10 transition-colors">
              Call (512) 333-9104
            </a>
          </div>
        </div>
      </section>
    </>
  );
}