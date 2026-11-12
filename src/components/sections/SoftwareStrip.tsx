import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { PORTALS, WEBDEV } from "@/lib/software";

export function SoftwareStrip() {
  const items = [...PORTALS, WEBDEV[0]];
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 text-white sm:py-28">
      <div className="grid-bg-dark absolute inset-0 opacity-50" aria-hidden />
      <div className="drift absolute -right-24 -top-24 h-80 w-80 rounded-full bg-violet/30 blur-3xl" aria-hidden />
      <div className="container-x relative">
        <SectionHeading dark eyebrow="Software" title="SaaS portals and web development." text="Management portals for property, gyms, hostels and hotels, plus websites and web apps built to order." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((o, i) => {
            const Icon = o.icon;
            return (
              <Reveal key={o.id} delay={i * 0.06}>
                <a href={`/software/#${o.id}`} className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/60 hover:bg-white/[0.07]">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-emerald"><Icon size={22} aria-hidden /></span>
                  <h3 className="mt-5 text-base font-semibold">{o.title}</h3>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-emerald">Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden /></span>
                </a>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-10"><Button href="/software/" variant="light">View All Software Services</Button></div>
      </div>
    </section>
  );
}
