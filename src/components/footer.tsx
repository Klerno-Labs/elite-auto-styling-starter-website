"use client";

import Link from "next/link";
import { Facebook, Instagram, MapPin, Mail, Phone, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 text-white p-1 rounded">
                <span className="font-heading font-bold text-sm">EAS</span>
              </div>
              <span className="font-heading font-bold text-lg text-white">
                Elite Auto Styling
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Austin&apos;s premier automotive detailing and paint protection studio. Specializing in ceramic coatings, PPF, and window tinting for luxury vehicles.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Visit our Facebook page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Visit our Instagram page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-blue-400 transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Ceramic Coating</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Paint Protection Film</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Window Tinting</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Paint Correction</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Interior Detailing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  8901 Research Blvd, Suite 240<br />
                  Austin, TX 78758
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                <a href="tel:5123339104" className="hover:text-white transition-colors">
                  (512) 333-9104
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                <a href="mailto:contact@eliteautostyling.com" className="hover:text-white transition-colors">
                  contact@eliteautostyling.com
                </a>
              </li>
              <li className="pt-2 border-t border-slate-800 mt-2">
                <p className="text-xs text-slate-500">
                  Mon-Sat: 8am-6pm<br />
                  Sun: By Appointment Only
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Elite Auto Styling. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-slate-500">
            <Link href="/privacy-policy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300">Terms of Service</Link>
          </div>
          <button
            onClick={scrollToTop}
            className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors text-white"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}