"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/button";

export default function CtaBand() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to Restore Your Vehicle?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Experience the difference of professional detailing and protection. Book your appointment today and let us bring back the showroom shine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" href="/contact" className="bg-accent hover:bg-accent/90 text-white border-none">
              Schedule Service
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:text-white border-white/20 hover:bg-white/10" href="tel:5123339104">
              Call (512) 333-9104
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}