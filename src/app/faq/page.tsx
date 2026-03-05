import { Metadata } from "next";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ | Elite Auto Styling",
  description: "Frequently asked questions about ceramic coating, PPF, and detailing services in Austin.",
};

const faqs = [
  {
    q: "How long does a ceramic coating last?",
    a: "Our ceramic coatings can last anywhere from 2 to 5 years depending on the package chosen and how the vehicle is maintained. We offer annual maintenance plans to keep the coating performing at its best."
  },
  {
    q: "Do you offer mobile detailing services?",
    a: "Yes, we offer mobile detailing for maintenance packages. However, for extensive services like Paint Correction, PPF, and Ceramic Coating, we require the vehicle to be brought to our climate-controlled studio to ensure a dust-free environment."
  },
  {
    q: "What is the difference between PPF and Ceramic Coating?",
    a: "PPF (Paint Protection Film) is a physical layer of urethane that protects against rock chips and impact damage. Ceramic Coating is a liquid polymer that chemically bonds to the paint for chemical resistance and gloss. We recommend both for ultimate protection."
  },
  {
    q: "How should I prepare my vehicle for service?",
    a: "Please remove all personal items from the interior and trunk. If the vehicle is excessively dirty (mud, snow), a quick rinse is helpful but not required as we perform a thorough pre-wash."
  },
  {
    q: "Do you offer financing?",
    a: "Yes, we partner with leading financing providers to offer monthly payment plans for larger packages like Full Vehicle PPF or Coating. Contact us for details."
  }
];

export default function FAQPage() {
  return (
    <div className="pt-8 pb-16">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">Frequently Asked Questions</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-white border border-slate-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-slate-900 list-none">
                  <span>{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}