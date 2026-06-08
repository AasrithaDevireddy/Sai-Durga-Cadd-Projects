import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Workflow } from "@/components/sections/Workflow";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const TITLE = "Sai Durga CADD Projects — Precision Engineering Drawings & CAD Solutions";
const DESC = "Accurate AutoCAD drafting, industrial layouts and engineering design solutions for manufacturing, pharmaceutical, warehouse and process industries.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      {
        name: "keywords",
        content: "AutoCAD drafting, CAD services, P&ID, PFD, site layout, warehouse layout, pharmaceutical layout, engineering drawings, as-built drawings",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Sai Durga CADD Projects",
          description: DESC,
          telephone: "+91 9849188009",
          founder: { "@type": "Person", name: "D. Raja Sekhara Reddy" },
          areaServed: "IN",
          serviceType: [
            "AutoCAD Drafting", "Site Layouts", "As-Built Drawings", "P&ID Layouts",
            "PFD Layouts", "Warehouse Layouts", "Equipment Layout Drawings",
            "Laboratory Layout Design",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <WhyChooseUs />
        <Workflow />
        <EnquiryForm />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
