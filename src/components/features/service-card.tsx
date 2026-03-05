import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { images } from "@/config/images";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  imageKey: keyof typeof images;
  href: string;
}

export default function ServiceCard({ title, description, price, imageKey, href }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={images[imageKey].src}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="text-blue-400 font-bold text-sm bg-slate-900/80 px-2 py-1 rounded backdrop-blur-sm">
            {price}
          </span>
        </div>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{description}</p>
        
        <Link 
          href={href} 
          className="inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform"
        >
          Learn More <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
}