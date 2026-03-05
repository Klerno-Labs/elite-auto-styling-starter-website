import { Metadata } from "next";
import SectionWrapper from "@/components/layout/section-wrapper";
import { images } from "@/config/images";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View our portfolio of before and after transformations in Austin, TX.",
};

const projects = [
  { id: 1, title: "Tesla Model 3 - Full Correction", category: "Ceramic Coating", img: images.gallery-1 },
  { id: 2, title: "Porsche 911 - PPF Front End", category: "PPF", img: images.gallery-2 },
  { id: 3, title: "BMW M4 - Paint Restoration", category: "Correction", img: images.gallery-3 },
  { id: 4, title: "Mercedes G-Wagon - Interior", category: "Interior", img: images.gallery-4 },
];

export default function GalleryPage() {
  return (
    <>
      <SectionWrapper className="pt-32 pb-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            Our Work
          </h1>
          <p className="text-xl text-slate-600">
            Browse our recent projects. From daily drivers to exotic supercars, we treat every vehicle with the same level of care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer">
              <div className="aspect-[4/3] w-full relative">
                <Image
                  src={project.img.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <Badge variant="secondary" className="mb-2 bg-primary text-white border-primary hover:bg-primary-dark">
                  {project.category}
                </Badge>
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Click to view details
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">Want to see results like this?</p>
          <a href="tel:(512) 333-9104" className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white shadow transition-all hover:bg-primary-dark hover:shadow-lg">
            Book Your Appointment
          </a>
        </div>
      </SectionWrapper>
    </>
  );
}