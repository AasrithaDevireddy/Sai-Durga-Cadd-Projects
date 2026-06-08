import { Phone, User, MessageCircle } from "lucide-react";

export function Contact() {
  const phone = "+91 9849188009";
  const waLink = "https://wa.me/919849188009?text=Hello%20Sai%20Durga%20CADD%20Projects%2C%20I%27d%20like%20to%20enquire%20about%20your%20services.";
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal mb-4">07 // Contact</p>
            <h2 id="contact-title" className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Talk to our team
            </h2>
            <p className="text-muted-foreground max-w-md mb-8">
              Reach out directly for project consultations, quotations, or technical discussions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl">
                <div className="size-11 rounded-lg bg-teal/10 text-teal flex items-center justify-center">
                  <User className="size-5" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Owner</p>
                  <p className="font-semibold text-navy">D. Raja Sekhara Reddy</p>
                </div>
              </div>
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-teal/40 transition-colors"
              >
                <div className="size-11 rounded-lg bg-teal/10 text-teal flex items-center justify-center">
                  <Phone className="size-5" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Phone</p>
                  <p className="font-semibold text-navy">{phone}</p>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-navy text-white rounded-2xl p-10 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-[0.06]" aria-hidden />
            <div className="relative">
              <h3 className="text-2xl font-bold mb-3">Chat on WhatsApp</h3>
              <p className="text-white/70 mb-8 text-sm leading-relaxed">
                Get a fast response with project details, drawings or quick questions.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-[#25D366] text-white font-semibold rounded-lg hover:brightness-110 transition-all w-fit"
              >
                <MessageCircle className="size-5" strokeWidth={2} />
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
