import { ShoppingCart, Globe2, Rocket } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const pillars = [
  { icon: ShoppingCart, t: "E-commerce", d: "Sell on the big marketplaces." },
  { icon: Globe2, t: "Consultancy", d: "Set up a company in the US or UK." },
  { icon: Rocket, t: "Ventures", d: "New ideas, coming soon." },
];

export function Intro() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-x text-center">
        <Reveal>
          <p className="eyebrow">Who we are</p>
          <h2 className="h-section mx-auto mt-3 max-w-3xl text-charcoal">One Vision. <span className="grad-anim">Multiple Business Opportunities.</span></h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">A multi-venture company for entrepreneurs who want to build, operate and grow.</p>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
          {pillars.map(({ icon: I, t, d }, i) => (
            <Reveal key={t} delay={i * 0.1}>
              <div className="group rounded-2xl border border-line bg-paper p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-emerald/50 hover:bg-white hover:shadow-xl hover:shadow-charcoal/5">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-emerald-deep shadow-sm ring-1 ring-line transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald group-hover:text-white"><I size={22} /></span>
                <h3 className="mt-5 text-lg font-semibold text-charcoal">{t}</h3>
                <p className="mt-1 text-sm text-muted">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
