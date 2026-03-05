"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  service: string;
  message: string;
  _gotcha: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: "",
    message: "",
    _gotcha: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "", email: "", phone: "", vehicle: "", service: "", message: "", _gotcha: ""
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="text-green-600 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h3>
        <p className="text-green-700">Thank you for contacting us. We'll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name *</label>
          <Input 
            id="name" 
            name="name" 
            required 
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe" 
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number *</label>
          <Input 
            id="phone" 
            name="phone" 
            type="tel"
            required 
            value={formData.phone}
            onChange={handleChange}
            placeholder="(512) 555-0123" 
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address *</label>
        <Input 
          id="email" 
          name="email" 
          type="email" 
          required 
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com" 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="vehicle" className="text-sm font-semibold text-slate-700">Vehicle Make/Model</label>
          <Input 
            id="vehicle" 
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
            placeholder="e.g. Tesla Model 3" 
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-semibold text-slate-700">Service Needed</label>
          <select 
            id="service" 
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="flex h-12 w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <option value="">Select a service...</option>
            {siteConfig.services.map((s) => (
              <option key={s.title} value={s.title}>{s.title}</option>
            ))}
            <option value="Other">Other / Not Sure</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="flex w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-sm ring-offset-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]"
          placeholder="Tell us about your vehicle and what you're looking for..."
        />
      </div>

      {/* Honeypot */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" value={formData._gotcha} onChange={handleChange} />

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
          <AlertCircle className="h-4 w-4" />
          <span>Something went wrong. Please try again.</span>
        </div>
      )}

      <Button 
        type="submit" 
        size="lg" 
        className="w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}