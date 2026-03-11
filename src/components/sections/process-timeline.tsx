"use client";

import { motion } from "framer-motion";
import { Calendar, Wrench, Sparkles, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/layout/section-wrapper";
import Button from "@/components/ui/button";

const steps = [
  {
    icon: Calendar,
    title: "1. Book Appointment",
    description: "Schedule your service online or call us. We offer flexible drop-off times and mobile service options.",
  },
  {
    icon: Wrench,
    title: "2. Expert Service",
    description: "Our certified technicians perform the work with meticulous attention to detail, using only premium products.",
  },
  {
    icon: Sparkles,
    title: "3. Showroom Ready",
    description: "Pick up your vehicle looking brand new. We'll walk you through the care and maintenance of your new finish.",
  },
];

export default function ProcessTimeline() {
  return (
    <SectionWrapper className="bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Our Simple Process
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          We&apos;ve made it easy to get your vehicle looking its best. From booking to pickup, we handle everything.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Connector Line for Desktop */}
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 z-0" />
        
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-white rounded-full border-4 border-slate-100 shadow-card flex items-center justify-center mb-6 text-accent group-hover:border-accent/50 transition-colors">
                <Icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <Button size="lg" href="/contact">
          Get Started Today <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </SectionWrapper>
  );
}