import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Elite Auto Styling",
  description: "Contact Elite Auto Styling in Austin, TX. Call (512) 333-9104 or visit us at 8901 Research Blvd for premium detailing services.",
};

export default function ContactPage() {
  return (
    <div className="pt-8 pb-16">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">Get In Touch</h1>
          <p className="text-slate-300 text-lg">Ready to transform your vehicle? We&apos;re here to help.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Form Column */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a message</h2>
                <p className="text-slate-600">Fill out the form below and we will get back to you within 24 hours.</p>
              </div>
              <ContactForm />
            </div>

            {/* Info Column */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Info</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-lg mr-4 text-blue-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Address</h3>
                      <p className="text-slate-600 mt-1">
                        8901 Research Blvd, Suite 240<br />
                        Austin, TX 78758
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-lg mr-4 text-blue-600">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Phone</h3>
                      <a href="tel:5123339104" className="text-slate-600 mt-1 hover:text-blue-600 block">
                        (512) 333-9104
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-lg mr-4 text-blue-600">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Email</h3>
                      <a href="mailto:contact@eliteautostyling.com" className="text-slate-600 mt-1 hover:text-blue-600 block">
                        contact@eliteautostyling.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-lg mr-4 text-blue-600">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Hours</h3>
                      <p className="text-slate-600 mt-1">
                        Mon-Sat: 8am - 6pm<br />
                        Sun: By Appointment Only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-900 text-lg mb-4">Service Areas</h3>
                <p className="text-sm text-slate-600 mb-4">We are conveniently located in North Austin and proudly serve:</p>
                <div className="flex flex-wrap gap-2">
                  {["Austin", "Round Rock", "Cedar Park", "Georgetown", "Pflugerville", "Leander"].map((area) => (
                    <span key={area} className="px-3 py-1 bg-white border border-slate-300 rounded-full text-sm text-slate-700">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Embedded Map Placeholder (Using Image for static export compliance, would be iframe in production) */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-64 bg-slate-200 flex items-center justify-center text-slate-500">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>Interactive Map Loading...</p>
                  <a href="https://maps.google.com/?q=8901+Research+Blvd+Suite+240+Austin+TX+78758" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm underline mt-2 inline-block">
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}