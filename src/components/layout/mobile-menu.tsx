"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 lg:hidden backdrop-blur-sm"
          />
          
          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <span className="font-heading font-bold text-xl text-slate-900">Menu</span>
              <button
                onClick={onClose}
                className="p-2 text-slate-500 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-6">
              <ul className="space-y-6">
                {siteConfig.navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block text-2xl font-heading font-medium text-slate-900 hover:text-accent transition-colors"
                      onClick={onClose}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="p-6 bg-slate-50 border-t border-slate-100 space-y-4">
              <Link href="/contact" onClick={onClose} className="block w-full text-center">
                <Button variant="primary" className="w-full" size="lg">
                  Book Appointment
                </Button>
              </Link>
              <a href="tel:5123339104" className="block text-center text-slate-600 font-medium">
                (512) 333-9104
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}