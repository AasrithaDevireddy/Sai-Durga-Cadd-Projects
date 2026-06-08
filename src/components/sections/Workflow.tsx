const steps = [
  { n: "01", title: "Requirement Discussion", desc: "Initial consultation and scope definition." },
  { n: "02", title: "Site Data Collection", desc: "On-site survey and parameter gathering." },
  { n: "03", title: "CAD Drafting", desc: "High-precision AutoCAD design execution." },
  { n: "04", title: "Review & Revisions", desc: "Client feedback and technical refinements." },
  { n: "05", title: "Final Delivery", desc: "Complete documentation hand-off." },
];

export function Workflow() {
  return (
    <section id="workflow" aria-labelledby="workflow-title" className="py-24 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-[0.04]" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal mb-4">05 // Process</p>
          <h2 id="workflow-title" className="text-3xl md:text-4xl font-bold mb-4">
            Project Workflow
          </h2>
          <p className="text-white/60">From first conversation to final delivery — every step engineered for precision.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-white/15" aria-hidden />
          <ol className="grid md:grid-cols-5 gap-8">
            {steps.map((s) => (
              <li key={s.n} className="relative z-10 text-center md:text-left">
                <div className="size-20 mx-auto md:mx-0 bg-teal text-white rounded-full flex items-center justify-center mb-5 border-4 border-navy font-display font-bold text-xl">
                  {s.n}
                </div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
