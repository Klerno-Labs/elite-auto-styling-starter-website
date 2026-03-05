import Hero from "@/components/sections/hero";
import TrustBar from "@/components/sections/trust-bar";
import ServicesGrid from "@/components/sections/services-grid";
import BeforeAfterSlider from "@/components/sections/before-after-slider";
import ProcessTimeline from "@/components/sections/process-timeline";
import Testimonials from "@/components/sections/testimonials";
import CtaBand from "@/components/sections/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <div className="bg-white">
        <ServicesGrid limit={3} />
      </div>
      <BeforeAfterSlider />
      <div className="bg-slate-50">
        <ProcessTimeline />
      </div>
      <div className="bg-white">
        <Testimonials />
      </div>
      <CtaBand />
    </>
  );
}