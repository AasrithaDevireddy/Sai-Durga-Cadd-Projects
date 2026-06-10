import heroImg from "@/assets/hero-cad.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-28 lg:pt-28 lg:pb-36 grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 text-teal text-xs font-bold uppercase tracking-widest mb-6">
            <span className="size-1.5 rounded-full bg-teal" />
            Precision Engineering Excellence
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold leading-[1.05] text-navy mb-6">
            Precision Engineering{" "}
            <span className="text-teal">Drawings &amp; CAD</span> Solutions
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
            Delivering accurate AutoCAD drafting, industrial layouts and engineering design solutions
            for manufacturing, pharmaceutical, warehouse and process industries.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#enquiry"
              className="px-8 py-4 bg-navy text-white rounded-lg font-semibold hover:bg-teal transition-colors shadow-lg shadow-navy/10"
            >
              Get a Quote
            </a>
            
          </div>
        </div>
        <div className="relative animate-fade-in">
          <div className="absolute -inset-4 bg-teal/5 rounded-3xl -rotate-2" aria-hidden />
          <img
            src={heroImg}
            alt="Isometric CAD blueprint of an industrial plant layout with piping and equipment annotations"
            className="relative w-full aspect-[5/4] object-cover rounded-2xl border border-border shadow-xl shadow-navy/5"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
