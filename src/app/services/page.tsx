import { Metadata } from "next";
import ServicesGrid from "@/components/sections/services-grid";
import CtaBand from "@/components/sections/cta-band";
import SectionWrapper from "@/components/layout/section-wrapper";

export const metadata: Metadata = {
  title: "Services | Elite Auto Styling",
  description: "Explore our range of premium auto detailing services including Ceramic Coating, PPF, Window Tinting, and more in Austin, TX.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-slate-900 pt-32 pb-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
          Our Services
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg px-4">
          Comprehensive care for every inch of your vehicle. From paint protection to interior restoration, we have you covered.
        </p>
      </section>
      
      <ServicesGrid />
      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg prose-slate">
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">How long does a ceramic coating last?</h3>
              <p className="text-slate-600 mt-2">
                With proper maintenance, our professional-grade ceramic coatings can last anywhere from 2 to 5 years depending on the package selected and how the vehicle is cared for.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Do you offer mobile detailing?</h3>
              <p className="text-slate-600 mt-2">
                Yes, we offer mobile detailing for wash and wax, interior cleaning, and maintenance details. However, for paint correction, ceramic coating, and PPF installation, we require the vehicle to be brought to our climate-controlled facility to ensure a dust-free environment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">What is the difference between PPF and Ceramic Coating?</h3>
              <p className="text-slate-600 mt-2">
                Paint Protection Film (PPF) is a physical urethane layer that protects against rock chips and scratches. Ceramic Coating is a chemical liquid polymer that bonds to the paint to protect against UV damage, chemical etching, and dirt while adding extreme gloss. For maximum protection, we recommend doing both.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <CtaBand />
    </>
  );
}