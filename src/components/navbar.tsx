"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener(&quot;scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled || isOpen
            ? "bg-white/90 backdrop-blur-md shadow-sm border-gray-100"
            : "bg-transparent border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 z-50 relative">
              <div className="bg-blue-600 text-white p-1.5 rounded-lg">
                <span className="font-heading font-bold text-xl">EAS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight text-slate-900">
                  Elite Auto Styling
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  Austin Premier Detailing
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.slice(0, 5).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-blue-600",
                    pathname === link.href ? "text-blue-600 font-semibold" : "text-slate-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:5123339104" className="flex items-center text-slate-900 font-bold hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4 mr-2 text-blue-600" />
                (512) 333-9104
              </a>
              <Link href="/contact">
                <Button size="default">Book Now</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 p-2 text-slate-600 hover:text-blue-600 transition-colors&quot;
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-slate-900 text-white z-40 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-center items-center space-y-8",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-2xl font-heading font-medium hover:text-blue-400 transition-colors",
                pathname === link.href ? "text-blue-400" : ""
              )}
            >
              {link.name}
            </Link>
          ))}
          <a href="tel:5123339104" className="text-3xl font-bold text-blue-400 mt-4">
            (512) 333-9104
          </a>
          <Link href="/contact" className="w-full max-w-xs px-6">
            <Button variant="default" className="w-full h-14 text-lg" size="lg">
              Schedule Service
            </Button>
          </Link>
        </div>
      </header>
    </>
  );
}