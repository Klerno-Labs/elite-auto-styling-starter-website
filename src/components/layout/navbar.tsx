"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100"
            : "bg-transparent py-4"
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-white p-2 rounded-lg group-hover:bg-primary-dark transition-colors">
              <span className="font-heading font-bold text-xl">E</span>
            </div>
            <span
              className={cn(
                "font-heading font-bold text-xl tracking-tight transition-colors",
                isScrolled ? "text-slate-900" : "text-slate-900"
              )}
            >
              Elite Auto Styling
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="hidden md:flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              <Phone size={18} />
              {siteConfig.contact.phone}
            </a>
            
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow transition-all hover:bg-primary-dark hover:shadow-md"
            >
              Book Now
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}