import {
  Building2,
  Factory,
  FlaskRound,
  Microscope,
  Pill,
  ShoppingBag,
  Utensils,
  Warehouse,
} from "lucide-react";

const industries = [
  { icon: Pill, name: "Pharmaceutical Industry" },
  { icon: Factory, name: "Manufacturing Plants" },
  { icon: FlaskRound, name: "Chemical Industry" },
  { icon: Warehouse, name: "Warehousing & Logistics" },
  { icon: Microscope, name: "Research Laboratories" },
  { icon: Utensils, name: "Food Processing Industry" },
  { icon: Building2, name: "Industrial Facilities" },
  { icon: ShoppingBag, name: "FMCG Industry" },
];

export function Industries() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-title"
      className="py-24 bg-secondary/50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal mb-4">
            03 // Industries
          </p>

          <h2
            id="industries-title"
            className="text-4xl md:text-5xl font-bold text-navy tracking-tight mb-5"
          >
            Industries We Serve
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Trusted engineering partner across regulated and high-precision
            industries.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="
                group
                relative
                overflow-hidden
                glass-card
                rounded-2xl
                p-7
                border
                border-border/60
                transition-all
                duration-500
                ease-out
                hover:-translate-y-2
                hover:shadow-xl
                hover:shadow-sky/10
                hover:border-teal/30
                cursor-pointer
              "
            >
              {/* Hover Accent Line */}
              <div
                className="
                  absolute
                  top-0
                  left-0
                  h-1
                  w-0
                  bg-teal
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />

              {/* Icon */}
              <div
                className="
                  size-12
                  rounded-xl
                  bg-sky/10
                  text-sky
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-500
                  group-hover:bg-teal
                  group-hover:text-white
                  group-hover:scale-110
                  group-hover:rotate-6
                "
              >
                <industry.icon
                  className="size-5"
                  strokeWidth={1.75}
                />
              </div>

              {/* Title */}
              <h3
                className="
                  mt-5
                  text-sm
                  md:text-base
                  font-semibold
                  text-navy
                  transition-colors
                  duration-300
                  group-hover:text-teal
                "
              >
                {industry.name}
              </h3>

              {/* Small Decorative Element */}
              <div
                className="
                  absolute
                  bottom-0
                  right-0
                  w-16
                  h-16
                  rounded-full
                  bg-teal/5
                  translate-x-8
                  translate-y-8
                  transition-all
                  duration-500
                  group-hover:scale-150
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}