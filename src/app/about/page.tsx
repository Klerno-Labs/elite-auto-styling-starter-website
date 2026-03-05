import { Metadata } from "next";
import SectionWrapper from "@/components/layout/section-wrapper";
import Image from "next/image";
import { images } from "@/config/images";
import { CheckCircle, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Elite Auto Styling's history, team, and certifications in Austin, TX.",
};

export default function AboutPage() {
  return (
    <>
      <div className="relative bg-secondary py-32 md:py-48">
        <div className="absolute inset-0">
          <Image
            src={images.about.src}
            alt={images.about.alt}
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Obsessed with Perfection
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Founded by enthusiasts, for enthusiasts. We treat every vehicle as if it were our own.
          </p>
        </div>
      </div>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">
              Our Story
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Elite Auto Styling was born from a simple observation: most detailers in Austin treated car care like a commodity—a quick wash, a wax, and out the door. We knew there was a better way, especially for owners of luxury, exotic, and electric vehicles who demand precision.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Today, our studio is equipped with state-of-the-art lighting, controlled environment bays, and certified installers for top-tier products like Xpel and Ceramic Pro. We don't just clean cars; we restore and protect automotive investments.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Award className="text-primary h-6 w-6 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Certified</h4>
                  <p className="text-sm text-slate-500">Factory trained installers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="text-primary h-6 w-6 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Experienced</h4>
                  <p className="text-sm text-slate-500">Years of luxury auto care</p>
                </div>
              </div>
            </div>

            <Link href="/contact">
              <Button>Work With Us</Button>
            </Link>
          </div>
          
          <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={images.service-1.src}
              alt="Team working on car"
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-slate-50">
        <h2 className="text-3xl font-heading font-bold text-slate-900 text-center mb-12">
          Why Choose Elite?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-primary mb-6">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Precision Detailing</h3>
            <p className="text-slate-600">
              We use measured lighting and paint depth gauges to ensure safe correction without compromising clear coat thickness.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-primary mb-6">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Premium Products</h3>
            <p className="text-slate-600">
              We only use industry-leading films, coatings, and compounds that deliver proven longevity and gloss.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-primary mb-6">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Customer Education</h3>
            <p className="text-slate-600">
              We walk you through the process and provide maintenance tips so you can enjoy that showroom shine for years.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}