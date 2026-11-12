import { Layers, Users, Cpu, TrendingUp } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { GlowCard } from "../ui/GlowCard";

const items = [
  { icon: Layers, t: "Everything Under One Roof", d: "E-commerce, consultancy and ventures together." },
  { icon: Users, t: "Entrepreneur-Focused", d: "Built around how founders actually work." },
  { icon: Cpu, t: "Technology-Driven", d: "Modern tools behind every operation." },
  { icon: TrendingUp, t: "Growth Mindset", d: "We think beyond the first launch." },
];

export function WhyOmnify() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading eyebrow="Why Omnify X?" title="Built for builders." center />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: I, t, d }, i) => (
            <Reveal key={t} delay={i * 0.08}>
              <GlowCard className="group h-full rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-charcoal/10">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-emerald to-violet text-white shadow-lg shadow-violet/20 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"><I size={26} aria-hidden /></span>
                <h3 className="mt-6 text-lg font-semibold text-charcoal">{t}</h3>
                <p className="mt-2 text-sm text-muted">{d}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
