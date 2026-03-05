import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary text-white p-1.5 rounded">
                <span className="font-heading font-bold">E</span>
              </div>
              <span className="font-heading font-bold text-lg">
                Elite Auto Styling
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Austin's premier automotive detailing and paint protection studio. We treat every vehicle with the care and precision it deserves.
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Ceramic Coating</li>
              <li>Paint Protection Film</li>
              <li>Window Tinting</li>
              <li>Paint Correction</li>
              <li>Interior Detailing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-primary flex-shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-1 text-primary flex-shrink-0" />
                <span>{siteConfig.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}