import { ShoppingBag, Globe2 } from "lucide-react";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { GlowCard } from "../ui/GlowCard";
import { ECOM, CONSULT } from "@/lib/services";

export function Divisions() {
  const cards = [
    { n: "01", icon: ShoppingBag, title: "E-commerce Solutions", items: ECOM.map((s) => s.title), href: "/ecommerce/", cta: "Explore E-commerce", dark: false },
    { n: "02", icon: Globe2, title: "Business Consultancy", items: CONSULT.map((s) => s.title), href: "/consultancy/", cta: "Explore Consultancy", dark: true },
  ];
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading eyebrow="Our Business Divisions" title="Two divisions. One focus." center />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.1}>
              <GlowCard className={`h-full rounded-3xl p-8 sm:p-10 ${c.dark ? "bg-charcoal text-white" : "border border-line bg-white"}`}>
                {c.dark && <div className="grid-bg-dark absolute inset-0 -z-10 opacity-60" aria-hidden />}
                <div className={`drift absolute -right-16 -top-16 -z-10 h-64 w-64 rounded-full blur-3xl ${c.dark ? "bg-violet/35" : "bg-emerald/20"}`} aria-hidden />
                <div className="flex items-start justify-between">
                  <span className={`grid h-14 w-14 place-items-center rounded-2xl ${c.dark ? "bg-white/10 text-emerald" : "bg-emerald-soft text-emerald-deep"}`}><c.icon size={26} /></span>
                  <span className={`text-6xl font-semibold leading-none ${c.dark ? "text-outline-light" : "text-outline"}`}>{c.n}</span>
                </div>
                <h3 className="mt-7 text-2xl font-semibold tracking-tight sm:text-3xl">{c.title}</h3>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {c.items.map((it) => (
                    <li key={it} className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold sm:text-sm ${c.dark ? "border-white/15 bg-white/5 text-white/90" : "border-line bg-paper text-charcoal"}`}>{it}</li>
                  ))}
                </ul>
                <div className="mt-9"><Button href={c.href} variant={c.dark ? "light" : "primary"}>{c.cta}</Button></div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
