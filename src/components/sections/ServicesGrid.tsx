import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { GlowCard } from "../ui/GlowCard";
import { SERVICES } from "@/lib/services";

const ART = [
  "from-emerald/25 via-emerald/5 to-violet/20",
  "from-violet/25 via-violet/5 to-emerald/20",
  "from-emerald/20 via-white to-violet/25",
  "from-violet/20 via-white to-emerald/25",
  "from-emerald/30 via-emerald/5 to-violet/10",
  "from-violet/30 via-violet/5 to-emerald/10",
  "from-emerald/20 via-violet/10 to-violet/30",
];

export function ServicesGrid() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading eyebrow="Our Services" title="Seven ways we help you build." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const href = `/${s.division === "ecommerce" ? "ecommerce" : "consultancy"}/#${s.id}`;
            return (
              <Reveal key={s.id} delay={(i % 3) * 0.08} className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}>
                <GlowCard href={href} className="group block h-full rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald/50 hover:shadow-2xl hover:shadow-charcoal/10">
                  <div className={`relative grid h-36 place-items-center overflow-hidden bg-gradient-to-br ${ART[i]}`}>
                    <div className="grid-bg absolute inset-0 opacity-70" aria-hidden />
                    <span className="absolute -left-6 -top-6 h-24 w-24 rounded-full border border-charcoal/10 transition-transform duration-700 group-hover:scale-125" aria-hidden />
                    <span className="absolute -bottom-8 right-4 h-20 w-20 rounded-full border border-charcoal/10 transition-transform duration-700 group-hover:scale-150" aria-hidden />
                    <span className="relative grid h-[4.5rem] w-[4.5rem] place-items-center rounded-2xl bg-white text-emerald-deep shadow-xl shadow-charcoal/10 ring-1 ring-line transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:text-violet-deep"><Icon size={32} aria-hidden /></span>
                  </div>
                  <div className="flex items-end justify-between gap-4 p-6">
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-emerald-deep">{s.division === "ecommerce" ? "E-commerce" : "Consultancy"}</p>
                      <h3 className="mt-1.5 text-lg font-semibold text-charcoal">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted">{s.tag}</p>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-charcoal transition-all duration-300 group-hover:border-transparent group-hover:bg-charcoal group-hover:text-white"><ArrowUpRight size={18} aria-hidden /></span>
                  </div>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
