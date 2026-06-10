import { Toaster } from "sonner";

import { Navbar } from "./components/Navbar";
import { About } from "./components/sections/About";
import { EnquiryForm } from "./components/sections/EnquiryForm";
import { Footer } from "./components/sections/Footer";
import { Hero } from "./components/sections/Hero";
import { Industries } from "./components/sections/Industries";
import { Services } from "./components/sections/Services";
import { WhyChooseUs } from "./components/sections/WhyChooseUs";
import { Workflow } from "./components/sections/Workflow";

export default function App() {
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
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}