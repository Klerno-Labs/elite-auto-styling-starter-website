import { Metadata } from "next";
import SectionWrapper from "@/components/layout/section-wrapper";
import ContactForm from "@/components/sections/contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Elite Auto Styling in Austin, TX for a quote or appointment.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-slate-50 pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600">
              Ready to transform your vehicle? Fill out the form or give us a call to schedule your service.
            </p>
          </div>
        </div>
      </div>

      <SectionWrapper className="py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 lg:col-span-1">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-primary shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Visit Us</h4>
                    <p className="text-slate-600 text-sm">{siteConfig.contact.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-primary shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Call Us</h4>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-primary hover:text-primary-dark text-sm">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-primary shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Email Us</h4>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:text-primary-dark text-sm">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-primary shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Hours</h4>
                    <p className="text-slate-600 text-sm">{siteConfig.contact.hours}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Service Areas */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Service Areas</h3>
              <p className="text-sm text-slate-600 mb-2">
                We proudly serve the greater Austin area including:
              </p>
              <div className="flex flex-wrap gap-2">
                {["Austin", "Round Rock", "Cedar Park", "Georgetown", "Pflugerville", "Westlake"].map((area) => (
                  <span key={area} className="text-xs font-medium bg-white border border-slate-200 px-2 py-1 rounded">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl shadow-card border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}