"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    service: "",
    message: "",
    _gotcha: "" // Honeypot
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._gotcha) return; // Bot detected

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", vehicle: "", service: "", message: "", _gotcha: "" });
      } else {
        const data = await res.json();
        setError(data.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center h-full flex flex-col items-center justify-center">
        <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
        <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">Message Sent!</h3>
        <p className="text-slate-600">Thank you for contacting Elite Auto Styling. We&apos;ll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="(512) 555-0123"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vehicle">Vehicle Make & Model</Label>
          <Input
            id="vehicle"
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
            placeholder="e.g. 2022 Tesla Model 3"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service Needed</Label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="flex h-12 w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent"
        >
          <option value="">Select a service...</option>
          <option value="Full Detail">Full Detail Package</option>
          <option value="Ceramic Coating">Ceramic Coating</option>
          <option value="PPF">Paint Protection Film (PPF)</option>
          <option value="Window Tinting">Window Tinting</option>
          <option value="Interior Detailing">Interior Detailing</option>
          <option value="Paint Correction">Paint Correction</option>
          <option value="Headlight Restoration">Headlight Restoration</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="flex min-h-[100px] w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-sm ring-offset-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Tell us about your vehicle's condition..."
        />
      </div>

      {error && (
        <div className="p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-200">
          {error}
        </div>
      )}

      {/* Honeypot */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" onChange={handleChange} value={formData._gotcha} />

      <Button
        type="submit"
        className="w-full h-14 text-lg font-bold"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Get Free Quote"
        )}
      </Button>
    </form>
  );
}