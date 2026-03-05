"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Tesla & EV Specialists",
  "Xpel & 3M Certified Installers",
  "Satisfaction Guaranteed",
  "Mobile Service Available",
];

export default function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 text-slate-700 font-medium text-sm md:text-base"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}