export function Navbar() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#industries", label: "Industries" },
    { href: "#workflow", label: "Process" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="font-display font-bold text-base tracking-tight text-navy">
            SAI DURGA <span className="text-teal">CADD</span>
          </span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
            Projects
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-teal transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#enquiry"
          className="inline-flex items-center rounded-full bg-navy text-white text-sm font-semibold px-5 py-2.5 hover:bg-teal transition-colors"
        >
          Get a Quote
        </a>
      </div>
    </header>
  );
}
