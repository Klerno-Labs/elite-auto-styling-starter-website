import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Award, Users } from "lucide-react";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "About | Elite Auto Styling",
  description: "Learn about Elite Auto Styling's mission, team, and certifications. Austin's trusted detailers.",
};

export default function AboutPage() {
  return (
    <div className="pt-8">
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <Image
          src={images["about-hero"].src}
          alt={images["about-hero"].alt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-4xl sm:text-6xl font-heading font-bold mb-6">Obsessed with Perfection</h1>
          <p className="text-xl text-slate-200">We don&apos;t just clean cars; we restore them to showroom condition.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src={images.founder.src}
                alt={images.founder.alt}
                width={600}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-slate-900">Our Story</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Elite Auto Styling was founded on a simple premise: luxury vehicles require luxury care. We noticed a gap in the Austin market for a detailer that truly understood the nuances of high-end paint systems and exotic materials.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Every member of our team is certified in top-tier protection films and ceramic technologies. We invest heavily in the best equipment and products because your vehicle deserves nothing less.
              </p>
              <div className="pt-4 flex items-center space-x-4">
                <Award className="text-blue-600 w-8 h-8" />
                <span className="font-bold text-slate-900 text-lg">Certified 3M & Xpel Installers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Why Choose Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Certified Experts",
                desc: "Our technicians hold manufacturer certifications from Xpel, 3M, and Gtechniq.",
                icon: <Award className="w-8 h-8" />
              },
              {
                title: "Customer Focused",
                desc: "We offer transparent pricing, detailed photo updates, and satisfaction guarantees.",
                icon: <Users className="w-8 h-8" />
              },
              {
                title: "Quality Guaranteed",
                desc: "We use only the best products and stand behind our work with comprehensive warranties.",
                icon: <CheckCircle2 className="w-8 h-8" />
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}