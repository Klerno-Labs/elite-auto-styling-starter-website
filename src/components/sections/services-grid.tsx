import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ArrowRight, Shield, Droplet, Wrench, CarFront, Brush, Sparkles } from "lucide-react";

const serviceIcons = {
  "Ceramic Coating": Droplet,
  "Paint Protection Film": Shield,
  "Window Tinting": CarFront,
  "Interior Detail": Brush,
  "Paint Correction": Sparkles,
  "Headlight Restoration": Wrench,
};

export default function ServicesGrid({ limit }: { limit?: number }) {
  const services = limit ? siteConfig.services.slice(0, limit) : siteConfig.services;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => {
        const Icon = serviceIcons[service.title as keyof typeof serviceIcons] || Shield;
        
        return (
          <Link href="/services" key={index} className="group">
            <Card className="h-full border-slate-100 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <Badge variant="secondary" className="ml-2 shrink-0">
                    {service.price}
                  </Badge>
                </div>
                <CardDescription className="mt-2">
                  Premium protection and restoration services designed to keep your vehicle looking brand new.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-primary font-semibold group-hover:underline">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}