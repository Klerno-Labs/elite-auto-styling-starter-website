import Link from "next/link";
import { Facebook, Instagram, MapPin, Mail, Phone, Clock, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
                E
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                ELITE AUTO STYLING
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Austin's premier automotive detailing and paint protection studio. We specialize in ceramic coatings, PPF, and window tinting for luxury and exotic vehicles.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/#gallery" className="hover:text-blue-400 transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  8901 Research Blvd, Suite 240<br />
                  Austin, TX 78758
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="tel:5123339104" className="hover:text-blue-400 transition-colors">
                  (512) 333-9104
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:contact@eliteautostyling.com" className="hover:text-blue-400 transition-colors">
                  contact@eliteautostyling.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>
                  Mon-Sat: 8am-6pm<br />
                  Sun: By Appointment
                </span>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-400">Austin</li>
              <li className="text-slate-400">Round Rock</li>
              <li className="text-slate-400">Cedar Park</li>
              <li className="text-slate-400">Georgetown</li>
              <li className="text-slate-400">Westlake</li>
              <li className="text-slate-400">Rob Roy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Elite Auto Styling. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
          <button 
            onClick={scrollToTop}
            aria-label="Back to top"
            className="mt-4 md:mt-0 p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-white"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}