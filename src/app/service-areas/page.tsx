import { Metadata } from "next";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Areas | Elite Auto Styling",
  description: "Elite Auto Styling serves Austin, Round Rock, Cedar Park, and surrounding areas in Texas.",
};

const areas = [
  {
    city: "Austin",
    zips: "78701, 78702, 78703, 78704, 78705, 78717, 78726, 78727, 78728, 78729, 78730, 78731, 78732, 78733, 78734, 78735, 78736, 78737, 78738, 78739, 78741, 78742, 78744, 78745, 78746, 78747, 78748, 78749, 78750, 78751, 78752, 78753, 78754, 78755, 78756, 78757, 78758, 78759",
    desc: "Our home base and primary service area. From Downtown to the Hill Country."
  },
  {
    city: "Round Rock",
    zips: "78664, 78665, 78680, 78681",
    desc: "Just north of Austin, we frequently service clients in the Round Rock area."
  },
  {
    city: "Cedar Park",
    zips: "78613, 78617, 78630, 78641, 78660",
    desc: "A growing community with many luxury vehicles that need protection."
  },
  {
    city: "Georgetown",
    zips: "78626, 78627, 78628",
    desc: "Historic Georgetown residents trust us for their classic and modern cars."
  },
  {
    city: "Pflugerville",
    zips: "78660, 78691",
    desc: "Conveniently located for our Pflugerville neighbors."
  },
  {
    city: "Leander",
    zips: "78641, 78642",
    desc: "Serving the northernmost parts of the Greater Austin area."
  }
];

export default function ServiceAreasPage() {
  return (
    <div className="pt-8 pb-16">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">Areas We Serve</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Based in North Austin, we are perfectly positioned to serve the entire Greater Austin metro area.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-blue-50 p-8 rounded-2xl mb-12 text-center border border-blue-100">
            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Shop Location</h3>
            <p className="text-slate-600">8901 Research Blvd, Suite 240, Austin, TX 78758</p>
            <a href="https://maps.google.com/?q=8901+Research+Blvd+Suite+240+Austin+TX+78758" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-blue-600 font-bold hover:underline">
              Get Directions
            </a>
          </div>

          <div className="space-y-6">
            {areas.map((area) => (
              <div key={area.city} className="border-b border-slate-200 pb-6 last:border-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">{area.city}</h3>
                    <p className="text-slate-600 mb-2">{area.desc}</p>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg inline-block">
                  <p className="text-sm text-slate-500 font-medium mb-1">Zip Codes Served:</p>
                  <p className="text-xs font-mono text-slate-700 break-all">{area.zips}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}