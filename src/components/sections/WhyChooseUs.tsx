import { Target, Compass, Timer, Handshake } from "lucide-react";

const stats = [
  { icon: Target, label: "Accurate CAD Documentation", value: "100%" },
  { icon: Compass, label: "Industry-Oriented Designs", value: "360°" },
  { icon: Timer, label: "On-Time Delivery", value: "On Time" },
  { icon: Handshake, label: "Client-Focused Solutions", value: "24/7" },
];

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal mb-4">04 // Why Us</p>
          <h2 id="why-title" className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Why Choose Sai Durga CADD
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="bg-card p-8">
              <div className="size-10 rounded-lg bg-teal/10 text-teal flex items-center justify-center mb-5">
                <s.icon className="size-5" strokeWidth={1.75} />
              </div>
              <div className="font-display text-3xl font-bold text-navy mb-2">{s.value}</div>
              <div className="text-sm font-medium text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
