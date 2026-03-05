import { Calendar, Wrench, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Calendar,
    title: "1. Book Your Appointment",
    description: "Schedule online or call us. We offer flexible drop-off and mobile service options for your convenience.",
  },
  {
    icon: Wrench,
    title: "2. Expert Service",
    description: "Our certified technicians perform your service with meticulous attention to detail using premium products.",
  },
  {
    icon: CheckCircle,
    title: "3. Satisfaction Guaranteed",
    description: "We do a final walkthrough together to ensure every detail meets our high standards before you leave.",
  },
];

export default function ProcessTimeline() {
  return (
    <div className="grid md:grid-cols-3 gap-8 relative">
      {/* Connecting Line (Desktop) */}
      <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10" />
      
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-full shadow-card border-4 border-white flex items-center justify-center mb-6 relative z-10">
               <div className="absolute inset-0 rounded-full bg-blue-50 opacity-50" />
               <Icon className="h-8 w-8 text-primary relative z-10" />
            </div>
            <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
              {step.title}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}