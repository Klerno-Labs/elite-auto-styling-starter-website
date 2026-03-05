"use client";

import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Section from "@/components/ui/section";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: "",
    message: "",
    _gotcha: "" // Honeypot
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData._gotcha) return; // Bot detected

    setIsSubmitting(true);
    setError("");
    setIsSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", vehicle: "", service: "", message: "", _gotcha: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Minimal Header */}
      <section className="bg-slate-50 pt-32 pb-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-slate-600 text-lg">Ready to transform your vehicle? Contact us today.</p>
        </div>
      </section>

      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h3>
                <p className="text-green-700">Thank you for contacting Elite Auto Styling. We'll be in touch within 24 hours to discuss your vehicle.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700">Name <span className="text-red-500">*</span></label>
                    <Input 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="John Doe" 
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone <span className="text-red-500">*</span></label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel"
                      required 
                      placeholder="(512) 555-0123" 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email</label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="vehicle" className="text-sm font-semibold text-slate-700">Vehicle Make/Model</label>
                    <Input 
                      id="vehicle" 
                      name="vehicle" 
                      placeholder="e.g. 2022 Tesla Model 3" 
                      value={formData.vehicle}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-semibold text-slate-700">Service Needed</label>
                    <div className="relative">
                      <select 
                        id="service"
                        name="service"
                        className="flex h-12 w-full rounded-md border border-slate-300 bg-slate-50 px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service...</option>
                        <option value="Full Detail">Full Detail Package</option>
                        <option value="Ceramic Coating">Ceramic Coating</option>
                        <option value="PPF">Paint Protection Film</option>
                        <option value="Window Tint">Window Tinting</option>
                        <option value="Interior">Interior Detailing</option>
                        <option value="Correction">Paint Correction</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    className="flex min-h-[120px] w-full rounded-md border border-slate-300 bg-slate-50 px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    placeholder="Tell us about your vehicle's condition or any specific requests..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {error && (
                  <div className="bg-red-50 text-red-700 p-4 rounded-lg flex items-start text-sm">
                    <AlertCircle className="w-5 h-5 mr-2 shrink-0 mt-0.5" />
                    {error}
                  </div>
                )}

                {/* Honeypot */}
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" value={formData._gotcha} onChange={handleChange} />

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending...</> : "Send Request"}
                </Button>
              </form>
            )}
          </div>

          {/* Info Panel */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mr-4 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Visit Us</h4>
                    <p className="text-slate-600 mt-1">
                      8901 Research Blvd, Suite 240<br />
                      Austin, TX 78758
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mr-4 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Call Us</h4>
                    <a href="tel:5123339104" className="text-slate-600 mt-1 block hover:text-blue-600 transition-colors">
                      (512) 333-9104
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mr-4 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Email Us</h4>
                    <a href="mailto:contact@eliteautostyling.com" className="text-slate-600 mt-1 block hover:text-blue-600 transition-colors">
                      contact@eliteautostyling.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mr-4 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Hours</h4>
                    <p className="text-slate-600 mt-1">
                      Mon-Sat: 8am-6pm<br />
                      Sun: By Appointment Only
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl">
              <h4 className="font-bold text-slate-900 mb-3">Service Area</h4>
              <p className="text-sm text-slate-600 mb-4">
                We are conveniently located in North Austin and proudly serve customers in:
              </p>
              <div className="flex flex-wrap gap-2">
                {["Austin", "Round Rock", "Cedar Park", "Georgetown", "Westlake", "Pflugerville", "Leander"].map(city => (
                  <span key={city} className="bg-white border border-slate-200 px-3 py-1 rounded-md text-xs font-medium text-slate-600">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}