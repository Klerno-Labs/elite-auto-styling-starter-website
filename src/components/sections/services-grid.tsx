"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Droplets, Wrench, Brush, Sun, Gauge } from "lucide-react";
import Button from "@/components/ui/button";
import SectionWrapper from "@/components/layout/section-wrapper";
import CardHeader from "@/components/ui/card";

const services = [
  {
    icon: Droplets,
    title: "Ceramic Coating",
    price: "$800 - $2,500",
    description: "Long-lasting protection against UV rays, water spots, and chemicals. Provides a stunning, glossy finish that lasts years.",
  },
  {
    icon: Shield,
    title: "Paint Protection Film",
    price: "$1,500 - $5,000",
    description: "Invisible urethane film that protects your paint from rock chips, scratches, and road debris. Self-healing properties.",
  },
  {
    icon: Sun,
    title: "Window Tinting",
    price: "$200 - $500",
    description: "Premium ceramic window tint to reduce heat, block UV rays, and enhance privacy without sacrificing visibility.",
  },
  {
    icon: Wrench,
    title: "Paint Correction",
    price: "$500 - $1,200",
    description: "Remove swirl marks, scratches, and oxidation to restore your vehicle's paint to a mirror-like finish.",
  },
  {
    icon: Brush,
    title: "Interior Detailing",
    price: "$150 - $300",
    description: "Deep cleaning and conditioning of leather, carpets, and plastics. We remove stains and odors for a factory-new feel.",
  },
  {
    icon: Gauge,
    title: "Headlight Restoration",
    price: "$100 - $200",
    description: "Restore clarity to foggy headlights, improving both aesthetics and nighttime visibility.",
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

export default function ServicesGrid({ limit }: { limit?: number }) {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <SectionWrapper className="bg-slate-50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Our Premium Services
        </h2>
        <p className="text-lg text-slate-600">
          From daily drivers to exotic supercars, we offer comprehensive protection and detailing packages tailored to your vehicle.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {displayServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div variants={itemVariants} key={index}>
              <Card className="h-full group hover:border-accent/50 transition-colors duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-accent/5 text-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm font-bold text-accent mb-4">
                    {service.price}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {limit && (
        <div className="mt-12 text-center">
          <Button variant="secondary" href="/services">
            View All Services
          </Button>
        </div>
      )}
    </SectionWrapper>
  );
}