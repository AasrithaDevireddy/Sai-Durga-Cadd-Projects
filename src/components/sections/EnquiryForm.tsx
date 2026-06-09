import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),

  company: z.string().trim().min(1, "Company name is required").max(150),

  email: z.string().trim().email("Invalid email").max(255),

  phone: z
    .string()
    .trim()
    .min(7, "Phone is too short")
    .max(20)
    .regex(/^[+\d\s()-]+$/, "Invalid phone"),

  service: z.string().min(1, "Please select a service"),

  meetingDate: z.string().min(
    1,
    "Meeting date is required"
  ),

  meetingTime: z.string().min(
    1,
    "Meeting time is required"
  ),

  meetingMode: z.string().min(
    1,
    "Meeting mode is required"
  ),

  message: z
    .string()
    .trim()
    .min(10, "Tell us a bit more (min 10 chars)")
    .max(1000),
});

const services = [
  "Site Layouts", "As-Built Drawings", "DOF Drawings", "P&ID Layouts",
  "PFD Layouts", "Warehouse Layouts", "Schematic Layouts",
  "R&D Laboratory Layout Design", "QC & Microbiology Laboratory Layouts",
  "Equipment Layout Drawings", "AutoCAD Drafting Services",
];

export function EnquiryForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
const onSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const fd = new FormData(e.currentTarget);

  const data = Object.fromEntries(fd.entries());

  const result = schema.safeParse(data);

  if (!result.success) {
    const errs: Record<string, string> = {};

    result.error.issues.forEach((issue) => {
      errs[issue.path[0] as string] =
        issue.message;
    });

    setErrors(errs);
    return;
  }

  setErrors({});

  try {
    setSubmitting(true);

    const response = await fetch(
      "https://sai-durga-backend.onrender.com/enquiry",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const resData =
      await response.json();

    if (!response.ok) {
      throw new Error(
        resData.message ||
          "Submission failed"
      );
    }

    toast.success(
      `Enquiry Submitted Successfully! ID: ${resData.enquiryId}`
    );

    (e.target as HTMLFormElement).reset();

  } catch (error: any) {
    console.error(error);

    toast.error(
      error.message ||
        "Unable to connect to server."
    );
  } finally {
    setSubmitting(false);
  }
};

  const inputCls = "w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all text-sm";
  const labelCls = "text-xs font-semibold text-navy uppercase tracking-wider";

  return (
    <section id="enquiry" aria-labelledby="enquiry-title" className="py-24 bg-secondary/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="max-w-xl mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal mb-4">06 // Enquiry</p>
          <h2 id="enquiry-title" className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Start a Project
          </h2>
          <p className="text-muted-foreground">Share your requirements and we'll respond with a tailored proposal.</p>
        </div>
        <form
          onSubmit={onSubmit}
          noValidate
          className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm grid md:grid-cols-2 gap-5"
        >
          <div className="space-y-2">
            <label htmlFor="name" className={labelCls}>Name</label>
            <input id="name" name="name" type="text" className={inputCls} placeholder="Your full name" maxLength={100} />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="company" className={labelCls}>Company Name</label>
            <input id="company" name="company" type="text" className={inputCls} placeholder="Company / Organization" maxLength={150} />
            {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className={labelCls}>Email</label>
            <input id="email" name="email" type="email" className={inputCls} placeholder="name@company.com" maxLength={255} />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className={labelCls}>Phone Number</label>
            <input id="phone" name="phone" type="tel" className={inputCls} placeholder="+91 " maxLength={20} />
            {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
          </div>
          <div className="space-y-2 md:col-span-2">
            <label htmlFor="service" className={labelCls}>Service Required</label>
            <select id="service" name="service" className={inputCls} defaultValue="">
              <option value="" disabled>Select a service</option>
              {services.map((s) => <option key={s}>{s}</option>)}
            </select>
            {errors.service && <p className="text-xs text-destructive">{errors.service}</p>}
          </div>
          <div className="space-y-2">
  <label className={labelCls}>
    Preferred Meeting Date
  </label>

  <input
    type="date"
    name="meetingDate"
    min={
      new Date()
        .toISOString()
        .split("T")[0]
    }
    className={inputCls}
  />

  {errors.meetingDate && (
    <p className="text-xs text-destructive">
      {errors.meetingDate}
    </p>
  )}
</div>

<div className="space-y-2">
  <label className={labelCls}>
    Preferred Meeting Time
  </label>

  <input
    type="time"
    name="meetingTime"
    min="09:00"
    max="20:00"
    className={inputCls}
  />

  {errors.meetingTime && (
    <p className="text-xs text-destructive">
      {errors.meetingTime}
    </p>
  )}
</div>

<div className="space-y-2 md:col-span-2">
  <label className={labelCls}>
    Meeting Mode
  </label>

  <select
    name="meetingMode"
    className={inputCls}
    defaultValue=""
  >
    <option value="" disabled>
      Select Meeting Mode
    </option>

    <option value="Online">
      Online Meeting
    </option>

    <option value="Offline">
      Offline Meeting
    </option>
  </select>

  {errors.meetingMode && (
    <p className="text-xs text-destructive">
      {errors.meetingMode}
    </p>
  )}
</div>
          <div className="space-y-2 md:col-span-2">
            <label htmlFor="message" className={labelCls}>Message</label>
            <textarea id="message" name="message" rows={5} className={inputCls} placeholder="Describe your project requirements…" maxLength={1000} />
            {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 bg-navy text-white rounded-lg font-semibold hover:bg-teal transition-colors disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Submit Enquiry"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
