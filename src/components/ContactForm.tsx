"use client";
import { useEffect, useState } from "react";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";
import { SITE } from "@/lib/site";

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = "idle" | "sending" | "sent" | "mailto" | "error";

const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v: Fields): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!emailRx.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.subject.trim().length < 3) e.subject = "Please add a short subject.";
  if (v.message.trim().length < 10) e.message = "Please write at least a few words (10+ characters).";
  return e;
}

const input = "mt-2 w-full rounded-lg border bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-muted/60 focus:border-violet focus:ring-2 focus:ring-violet/15";

export function ContactForm() {
  const [v, setV] = useState<Fields>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [trap, setTrap] = useState("");

  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get("subject");
    if (s) setV((p) => ({ ...p, subject: s.slice(0, 120) }));
  }, []);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setV((p) => ({ ...p, [k]: e.target.value }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (trap) return; // honeypot: bots only
    const errs = validate(v);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    if (!SITE.formEndpoint) {
      // No backend configured: be honest, hand the message to the visitor's email app.
      const body = `${v.message}\n\n— ${v.name} (${v.email})`;
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(SITE.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(v),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      setV({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const field = (k: keyof Fields, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <div>
      <label htmlFor={`f-${k}`} className="text-sm font-semibold text-charcoal">{label}</label>
      <input
        id={`f-${k}`} name={k} value={v[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `e-${k}` : undefined}
        className={`${input} ${errors[k] ? "border-red-400" : "border-line"}`} {...props}
      />
      {errors[k] && <p id={`e-${k}`} className="mt-1.5 text-xs font-medium text-red-600">{errors[k]}</p>}
    </div>
  );

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-emerald/30 bg-emerald-soft p-8 text-center">
        <CheckCircle2 size={36} className="mx-auto text-emerald-deep" aria-hidden />
        <h3 className="mt-4 text-xl font-semibold text-charcoal">Message sent</h3>
        <p className="mt-2 text-sm text-muted">Thank you for getting in touch. We will reply to the email address you provided.</p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-sm font-semibold text-violet-deep hover:underline">Send another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        {field("name", "Name", { type: "text", autoComplete: "name", placeholder: "Your full name" })}
        {field("email", "Email", { type: "email", autoComplete: "email", placeholder: "you@example.com" })}
      </div>
      {field("subject", "Subject", { type: "text", placeholder: "How can we help?" })}
      <div>
        <label htmlFor="f-message" className="text-sm font-semibold text-charcoal">Message</label>
        <textarea id="f-message" name="message" rows={6} value={v.message} onChange={set("message")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "e-message" : undefined}
          placeholder="Tell us a little about your business or idea." className={`${input} resize-y ${errors.message ? "border-red-400" : "border-line"}`} />
        {errors.message && <p id="e-message" className="mt-1.5 text-xs font-medium text-red-600">{errors.message}</p>}
      </div>
      <div className="absolute -left-[9999px]" aria-hidden>
        <label>Leave empty<input tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} /></label>
      </div>

      {status === "error" && (
        <p role="alert" className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden />
          Your message could not be sent. Please try again, or email us directly at <a className="font-semibold underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      )}
      {status === "mailto" && (
        <p role="status" className="flex items-start gap-2 rounded-lg border border-violet/25 bg-violet-soft px-4 py-3 text-sm text-charcoal">
          <AlertCircle size={16} className="mt-0.5 shrink-0 text-violet-deep" aria-hidden />
          Your email app should have opened with your message ready. It has not been sent yet — please press Send there. If nothing opened, email us at <a className="font-semibold underline" href={`mailto:${SITE.email}`}>{SITE.email}</a> or use WhatsApp.
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-charcoal px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-deep hover:shadow-lg hover:shadow-emerald/25 disabled:opacity-60 sm:w-auto">
        {status === "sending" ? "Sending…" : "Send Message"} <Send size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
      </button>
    </form>
  );
}
