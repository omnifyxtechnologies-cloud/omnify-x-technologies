import { Mail } from "lucide-react";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { WhatsAppIcon } from "../ui/Icons";
import { SITE } from "@/lib/site";

export function CTABand({ title = "Have a Business Idea? Let’s Build It Together.", text = "Online store, company abroad, or a new venture. Tell us what you have in mind.", cta = "Start a Conversation" }: { title?: string; text?: string; cta?: string }) {
  return (
    <section className="bg-white pb-20 sm:pb-24">
      <div className="container-x">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-charcoal px-6 py-14 text-center text-white sm:px-14 sm:py-20">
            <div className="grid-bg-dark absolute inset-0 -z-10 opacity-60" aria-hidden />
            <div className="drift absolute -left-20 -top-20 -z-10 h-72 w-72 rounded-full bg-emerald/30 blur-3xl" aria-hidden />
            <div className="drift-b absolute -bottom-24 -right-20 -z-10 h-80 w-80 rounded-full bg-violet/35 blur-3xl" aria-hidden />
            <h2 className="h-section mx-auto max-w-3xl">{title}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{text}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact/" variant="light">{cta}</Button>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold transition-colors hover:border-emerald hover:text-emerald">
                <WhatsAppIcon size={16} /> WhatsApp Us
              </a>
            </div>
            <p className="mt-7 flex items-center justify-center gap-2 text-sm text-white/60">
              <Mail size={14} aria-hidden /> <a href={`mailto:${SITE.email}`} className="hover:text-emerald">{SITE.email}</a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
