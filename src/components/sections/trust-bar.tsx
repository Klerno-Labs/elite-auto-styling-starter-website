import { CheckCircle, Shield, Star } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-slate-100 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
          <div className="flex items-center gap-3">
            <Star className="text-accent fill-accent h-6 w-6" />
            <span className="font-semibold text-slate-900">
              5-Star Rated Service
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <Shield className="text-primary h-6 w-6" />
            <span className="font-semibold text-slate-900">
              Certified Installers
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-600 h-6 w-6" />
            <span className="font-semibold text-slate-900">
              Satisfaction Guaranteed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}