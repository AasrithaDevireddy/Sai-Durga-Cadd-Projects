import {
  Boxes,
  FileCog,
  FileText,
  FlaskConical,
  GitBranch,
  Map,
  Microscope,
  Network,
  PencilRuler,
  Workflow,
  Wrench,
} from "lucide-react";

const services = [
  { icon: Map, title: "Site Layouts", desc: "Comprehensive mapping of industrial sites including infrastructure and utility pathways." },
  { icon: FileText, title: "As-Built Drawings", desc: "Precise documentation reflecting the actual constructed state of your facility assets." },
  { icon: FileCog, title: "DOF Drawings", desc: "Follows Directorate of Factories formatting layouts." },
  { icon: Workflow, title: "P&ID Layouts", desc: "Detailed Piping and Instrumentation Diagrams for process control and maintenance." },
  { icon: GitBranch, title: "PFD Layouts", desc: "Efficient Process Flow Diagrams that map material and energy flows clearly." },
  { icon: Boxes, title: "Warehouse Layouts", desc: "Strategic planning of racking, storage and logistical flow for large-scale warehouses." },
  { icon: Network, title: "Schematic Layouts", desc: "Conceptual and logical schematics for electrical, mechanical and utility systems." },
  { icon: FlaskConical, title: "R&D Laboratory Layouts", desc: "Specialized layout design for research and development laboratory environments." },
  { icon: Microscope, title: "QC & Microbiology Layouts", desc: "Compliance-driven layouts for quality control and microbiology laboratories." },
  { icon: Wrench, title: "Equipment Layout Drawings", desc: "Accurate placement and clearance drawings for manufacturing machinery and equipment." },
  { icon: PencilRuler, title: "AutoCAD Drafting Services", desc: "General high-precision technical drafting for all engineering and architectural needs." },
];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal mb-4">02 // Services</p>
          <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Our Core Services
          </h2>
          <p className="text-muted-foreground">
            Comprehensive engineering drawing solutions for modern industrial infrastructure.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="group p-7 bg-card border border-border rounded-2xl hover:shadow-xl hover:-translate-y-1 hover:border-teal/30 transition-all"
            >
              <div className="size-12 rounded-xl bg-secondary text-teal flex items-center justify-center mb-5 group-hover:bg-teal group-hover:text-white transition-colors">
                <s.icon className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
