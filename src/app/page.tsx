import Hero from "@/components/sections/hero";
import TrustBar from "@/components/sections/trust-bar";
import SectionWrapper from "@/components/layout/section-wrapper";
import ServicesGrid from "@/components/sections/services-grid";
import BeforeAfterSlider from "@/components/sections/before-after-slider";
import Testimonials from "@/components/sections/testimonials";
import ProcessTimeline from "@/components/sections/process-timeline";
import CTABand from "@/components/sections/cta-band";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Elite Auto Styling offers premium ceramic coating, PPF, and detailing services in Austin, TX.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      
      <SectionWrapper className="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Premium Protection Services
          </h2>
          <p className="text-lg text-slate-600">
            We offer a full suite of auto protection and restoration services designed to keep your vehicle looking showroom new.
          </p>
        </div>
        <ServicesGrid limit={6} />
      </SectionWrapper>

      <SectionWrapper className="bg-slate-50">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              See the Difference
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Our multi-stage paint correction and ceramic coating process removes swirls, scratches, and oxidation, leaving a mirror-like finish that lasts for years.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                Restores original paint depth and clarity
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                Provides hydrophobic protection
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                Reduces maintenance time significantly
              </li>
            </ul>
          </div>
          <div>
            <BeforeAfterSlider />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600">
            Don't just take our word for it. Here is what some of our customers in the Austin area have to say.
          </p>
        </div>
        <Testimonials />
      </SectionWrapper>

      <SectionWrapper className="bg-slate-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600">
            We've simplified the process to get your vehicle looking its best with minimal disruption to your schedule.
          </p>
        </div>
        <ProcessTimeline />
      </SectionWrapper>

      <CTABand />
    </>
  );
}