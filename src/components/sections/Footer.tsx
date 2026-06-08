export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-display font-bold text-lg tracking-tight text-navy">
            SAI DURGA <span className="text-teal">CADD PROJECTS</span>
          </span>
          <p className="text-xs text-muted-foreground mt-1 italic">
            "Engineering Precision Through Design"
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sai Durga CADD Projects. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
