"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionWrapper from "@/components/layout/section-wrapper";
import Card from "@/components/ui/card";
import CardContent from "@/components/ui/card";

const testimonials = [
  {
    name: "Tyler R.",
    vehicle: "Tesla Model 3",
    content: "Had my Model 3 ceramic coated here and it looks better than the day I bought it. Marcus and his team are perfectionists.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    vehicle: "Porsche 911",
    content: "The PPF on my Porsche 911 is flawless. You can't even tell it's there. Worth every penny for peace of mind.",
    rating: 5,
  },
  {
    name: "Alex W.",
    vehicle: "Window Tinting",
    content: "Best window tinting in Austin. Clean install, no bubbles, and they took the time to explain the different options.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Testimonials() {
  return (
    <SectionWrapper className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          What Our Clients Say
        </h2>
        <div className="flex items-center justify-center gap-1 text-highlight mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
          <span className="ml-2 font-bold text-slate-900">5.0 Rating</span>
        </div>
        <p className="text-slate-600">
          Don&apos;t just take our word for it. Here is what Austin car enthusiasts are saying about Elite Auto Styling.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div variants={itemVariants} key={index}>
            <Card className="h-full hover:shadow-lg transition-shadow bg-slate-50/50 border-slate-100">
              <CardContent className="p-8 flex flex-col h-full">
                <Quote className="w-10 h-10 text-accent/20 mb-4" />
                <div className="flex gap-0.5 mb-4 text-highlight">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6 flex-grow leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-accent font-medium">{testimonial.vehicle}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}