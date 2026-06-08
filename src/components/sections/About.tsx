import { Clock, Factory, FileCheck2, ShieldCheck } from "lucide-react";

const highlights = [
  { icon: ShieldCheck, title: "Professional CAD Services", desc: "Industry-standard technical drafting with the latest AutoCAD workflows." },
  { icon: Factory, title: "Industrial Expertise", desc: "Deep experience across pharma, warehousing and process plant design." },
  { icon: FileCheck2, title: "Accurate Documentation", desc: "Detailed drawings that meet rigorous regulatory and compliance standards." },
  { icon: Clock, title: "Fast Turnaround Time", desc: "Reliable schedules with milestone-based reviews and on-time delivery." },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal mb-4">01 // About</p>
          <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-navy mb-6">
            About Sai Durga CADD Projects
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            With 25+ years of experience, Sai Durga CADD Projects delivers accurate CAD drafting, engineering layouts, and technical documentation for pharmaceutical, industrial, and warehouse facilities.

          </p>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="p-6 bg-card rounded-2xl border border-border hover:border-teal/40 hover:-translate-y-0.5 transition-all shadow-sm"
            >
              <div className="size-10 rounded-lg bg-teal/10 text-teal flex items-center justify-center mb-4">
                <h.icon className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="font-semibold text-navy mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
