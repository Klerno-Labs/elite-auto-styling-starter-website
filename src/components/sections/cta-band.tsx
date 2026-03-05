import Button from "@/components/ui/button";
import Link from "next/link";
import { images } from "@/config/images";

export default function CTABand() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={images.cta.src}
          alt={images.cta.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/90" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
          Ready to Restore Your Vehicle?
        </h2>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
          Book your appointment today and experience the Elite difference. We are committed to delivering perfection.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="xl" className="bg-primary hover:bg-primary-dark text-white shadow-lg">
              Schedule Service
            </Button>
          </Link>
          <Link href="tel:(512) 333-9104">
            <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
              Call (512) 333-9104
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}