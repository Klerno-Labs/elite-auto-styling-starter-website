"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-50 bg-slate-900 lg:hidden"
        >
          <div className="flex flex-col h-full p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-12">
              <span className="text-white font-heading font-bold text-xl">
                Elite Auto Styling
              </span>
              <button
                onClick={onClose}
                className="p-2 text-white hover:bg-slate-800 rounded-md"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-6">
              {siteConfig.nav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="text-2xl font-heading font-semibold text-white hover:text-primary transition-colors block"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer Info */}
            <div className="mt-auto pt-8 border-t border-slate-800">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-3 text-white text-lg font-semibold mb-4"
              >
                {siteConfig.contact.phone}
              </a>
              <p className="text-slate-400 text-sm">
                {siteConfig.contact.address}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}