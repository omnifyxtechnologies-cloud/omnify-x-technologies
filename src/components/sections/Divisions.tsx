import { Check } from "lucide-react";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { ECOM, CONSULT } from "@/lib/services";

export function Divisions() {
  const cards = [
    { n: "01", title: "E-commerce Solutions", text: "Everything needed to build and run online stores across the world's leading marketplaces.", items: ECOM.map((s) => s.title), href: "/ecommerce/", cta: "Explore E-commerce", dark: false },
    { n: "02", title: "Business Consultancy", text: "Professional setup guidance for entrepreneurs establishing a company in the United States or United Kingdom.", items: CONSULT.map((s) => s.title), href: "/consultancy/", cta: "Explore Consultancy", dark: true },
  ];
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading eyebrow="Our Business Divisions" title="Two divisions. One entrepreneurial focus." center />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.1}>
              <article className={`relative h-full overflow-hidden rounded-2xl p-8 sm:p-10 ${c.dark ? "bg-charcoal text-white" : "border border-line bg-white"}`}>
                {c.dark && <div className="grid-bg-dark absolute inset-0 opacity-60" aria-hidden />}
                <div className={`absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl ${c.dark ? "bg-violet/30" : "bg-emerald/15"}`} aria-hidden />
                <div className="relative flex h-full flex-col">
                  <span className={`text-sm font-semibold ${c.dark ? "text-emerald" : "text-emerald-deep"}`}>{c.n}</span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{c.title}</h3>
                  <p className={`mt-3 max-w-md text-sm leading-relaxed sm:text-base ${c.dark ? "text-white/70" : "text-muted"}`}>{c.text}</p>
                  <ul className="mt-7 space-y-3">
                    {c.items.map((it) => (
                      <li key={it} className="flex items-center gap-3 text-sm font-medium">
                        <span className={`grid h-5 w-5 place-items-center rounded-full ${c.dark ? "bg-emerald/20 text-emerald" : "bg-emerald-soft text-emerald-deep"}`}><Check size={12} strokeWidth={3} aria-hidden /></span>
                        {it}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-9">
                    <Button href={c.href} variant={c.dark ? "light" : "primary"}>{c.cta}</Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
