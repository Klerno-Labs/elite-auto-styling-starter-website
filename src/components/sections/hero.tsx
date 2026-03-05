import Image from "next/image";
import Link from "next/link";
import { images } from "@/config/images";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  variant?: "split" | "minimal" | "overlay";
  title?: string;
  subtitle?: string;
}

export default function Hero({ variant = "split", title, subtitle }: HeroProps) {
  const defaultTitle = "Preserving the Beauty of Your Investment";
  const defaultSubtitle = "Austin's premier automotive detailing studio specializing in ceramic coatings, PPF, and restoration for luxury and exotic vehicles.";

  return (
    <section className={cn(
      "relative min-h-[90vh] flex items-center pt-20",
      variant === "split" ? "bg-background" : "bg-secondary text-white"
    )}>
      {variant === "split" && (
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Serving Austin, Round Rock & Cedar Park
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              {title || defaultTitle}
            </h1>
            
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              {subtitle || defaultSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto group">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/gallery">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  View Gallery
                </Button>
              </Link>
            </div>

            <div className="pt-4 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500 h-4 w-4" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500 h-4 w-4" />
                <span>5-Star Rated</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={images.hero.src}
              alt={images.hero.alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
          </div>
        </div>
      )}
    </section>
  );
}