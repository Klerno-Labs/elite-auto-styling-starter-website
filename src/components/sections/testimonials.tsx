import { Star } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {siteConfig.testimonials.map((testimonial, index) => (
        <Card key={index} className="bg-white border-slate-100 shadow-none hover:shadow-card transition-shadow">
          <CardContent className="p-8">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="text-slate-700 italic mb-6 leading-relaxed">
              "{testimonial.quote}"
            </blockquote>
            <div>
              <div className="font-bold text-slate-900">{testimonial.name}</div>
              <div className="text-sm text-slate-500">{testimonial.role}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}