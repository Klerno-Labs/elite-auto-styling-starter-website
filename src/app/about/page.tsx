import { Metadata } from "next";
import Image from "next/image";
import { Award, Users, Zap } from "lucide-react";
import Section from "@/components/ui/section";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "About Us | Elite Auto Styling",
  description: "Meet the team behind Austin's premier auto detailing studio. Learn about our passion for perfection and commitment to quality.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-slate-900">
        <Image
          src={images["about"].src}
          alt="Workshop background"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Obsessed with Perfection</h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto">
            We don&apos;t just clean cars; we restore them to factory perfection and protect them for the future.
          </p>
        </div>
      </section>

      {/* Story */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Image
              src={images["founder"].src}
              alt="Founder"
              width={500}
              height={500}
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs block mb-2">Our Story</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Founded on Passion</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Elite Auto Styling was born from a simple observation: Austin&apos;s car enthusiasts deserved better than the average detail shop. Too many shops used aggressive buffers that burned paint, cheap wax that washed off in a week, and had no respect for the vehicle's finish.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We set out to change that. By investing in the best training from 3M and XPEL, sourcing the finest ceramic compounds, and adhering to strict "no shortcuts" protocols, we&apos;ve built a reputation as the go-to shop for owners of Teslas, Porsches, Ferraris, and daily drivers who simply want the best.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section background="slate">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Certified Experts</h3>
            <p className="text-slate-600">
              Our technicians are certified by top manufacturers in PPF installation and ceramic coating application.
            </p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Customer First</h3>
            <p className="text-slate-600">
              We believe in transparency. You&apos;ll always know what we're doing, why we're doing it, and exactly how much it costs.
            </p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Cutting Edge</h3>
            <p className="text-slate-600">
              We stay ahead of the curve with the latest technologies in paint protection and surface chemistry.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}