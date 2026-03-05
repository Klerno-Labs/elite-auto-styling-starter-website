import { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Award, Users } from "lucide-react";
import { images } from "@/config/images";
import SectionWrapper from "@/components/layout/section-wrapper";
import CtaBand from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "About Us | Elite Auto Styling",
  description: "Learn more about Elite Auto Styling's history, certifications, and commitment to perfection in Austin, TX.",
};

export default function AboutPage() {
  return (
    <>
      {/* About Hero */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.about.src}
            alt={images.about.alt}
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight mb-6">
            Obsessed with Perfection
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Founded in Austin, Elite Auto Styling was built on a simple premise: every vehicle deserves to look its absolute best, and protection is just as important as aesthetics.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">
              Why Choose Elite?
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We understand that your vehicle is more than just a mode of transportation—it's an investment and a passion. That's why we approach every job with the precision of an engineer and the care of an enthusiast.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Unlike standard car washes that use harsh brushes and generic chemicals, we utilize premium-grade products and techniques safe for all paint types, including the sensitive matte finishes and ceramic paints found on modern supercars.
            </p>
            <ul className="space-y-4">
              {[
                "Certified installers for XPEL and 3M films",
                "Climate-controlled indoor facility",
                "Specialized in Tesla and exotic vehicles",
                "100% satisfaction guarantee",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
             <Image
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&h=800&fit=crop"
              alt="Detailer working on car"
              width={600}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Stats/Values */}
      <SectionWrapper className="bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">5+ Years</h3>
            <p className="text-slate-600">Serving the Austin Community</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">2,500+</h3>
            <p className="text-slate-600">Vehicles Protected</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">100%</h3>
            <p className="text-slate-600">Certified Technicians</p>
          </div>
        </div>
      </SectionWrapper>

      <CtaBand />
    </>
  );
}