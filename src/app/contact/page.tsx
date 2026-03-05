import { Metadata } from "next";
import { MapPin, Clock, Mail, Phone } from "lucide-react";
import SectionWrapper from "@/components/layout/section-wrapper";
import ContactForm from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Elite Auto Styling",
  description: "Get in touch with Elite Auto Styling for a quote or appointment. Located in Austin, TX.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-slate-900 pt-32 pb-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
          Get In Touch
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg px-4">
          Ready to transform your vehicle? Contact us today to schedule an appointment or get a free quote.
        </p>
      </section>

      <SectionWrapper className="bg-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Column */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Info Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-4">
                Contact Information
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-accent shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Address</p>
                    <p className="text-slate-600">8901 Research Blvd, Suite 240<br />Austin, TX 78758</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-accent shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Phone</p>
                    <a href="tel:5123339104" className="text-accent hover:underline">(512) 333-9104</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-accent shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <a href="mailto:contact@eliteautostyling.com" className="text-slate-600 hover:text-accent transition-colors">
                      contact@eliteautostyling.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-accent shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Hours</p>
                    <p className="text-slate-600">Mon-Sat: 8am - 6pm<br />Sun: By Appointment Only</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Embedded Map Placeholder */}
            <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200 h-64 bg-slate-200 relative">
               {/* Static map image for performance and aesthetics in this build */}
               <img 
                 src="https://maps.googleapis.com/maps/api/staticmap?center=8901+Research+Blvd,+Austin,+TX&zoom=14&size=600x300&maptype=roadmap&markers=color:blue%7C8901+Research+Blvd,+Austin,+TX&key=YOUR_API_KEY_HERE"
                 alt="Map Location"
                 className="w-full h-full object-cover"
                 onError={(e) => {
                   // Fallback if API key is missing
                   e.currentTarget.src = "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&h=300&fit=crop"; 
                 }}
               />
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <span className="bg-white/90 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm">Map: 8901 Research Blvd</span>
               </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}