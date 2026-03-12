"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/config/images";
import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";
import { ChevronDown, ShieldCheck, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 pt-12 lg:pt-0"
        >
          <Badge variant="secondary" className="mb-6 text-accent border-accent/20 bg-accent/5">
            Serving Austin, Round Rock, & Cedar Park
          </Badge>
          
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Preserving the <span className="text-accent">Beauty</span> of Your Investment
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
            Austin&apos;s premier automotive detailing studio. We specialize in ceramic coatings, paint protection film, and showroom-quality detailing for luxury and exotic vehicles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" href="/contact">
              Get a Free Quote
            </Button>
            <Button variant="secondary" size="lg" href="/gallery">
              View Gallery
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-600">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-highlight fill-highlight" />
              <span>5.0 Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-slate-400" />
              <span>Licensed & Insured</span>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative lg:h-[90vh] w-full hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-to-l from-slate-50 via-transparent to-slate-50 z-10" />
          <Image
            src={(images?.hero?.src ?? "/placeholder.jpg")}
            alt={(images?.hero?.alt ?? "")}
            fill
            priority
            className="object-cover object-right-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <ChevronDown className="w-6 h-6 text-slate-400 animate-bounce-slow" />
      </motion.div>
    </section>
  );
}