import { Layers, Users, Cpu, TrendingUp } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const items = [
  { icon: Layers, t: "Multiple Business Solutions Under One Roof", d: "E-commerce, consultancy and new ventures working together, so entrepreneurs don't have to piece together separate providers." },
  { icon: Users, t: "Entrepreneur-Focused Approach", d: "Every service is shaped around the practical needs of people starting and running their own businesses." },
  { icon: Cpu, t: "Technology-Driven Operations", d: "Modern tools and workflows sit behind how we research, set up and manage business operations." },
  { icon: TrendingUp, t: "Growth-Oriented Business Mindset", d: "We think beyond the first launch, with an eye on how a business can develop and expand over time." },
];

export function WhyOmnify() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 text-white sm:py-28">
      <div className="grid-bg-dark absolute inset-0 opacity-50" aria-hidden />
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-emerald/15 blur-3xl" aria-hidden />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-violet/20 blur-3xl" aria-hidden />
      <div className="container-x relative">
        <SectionHeading dark eyebrow="Why Omnify X?" title="A partner built around how entrepreneurs actually work." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {items.map(({ icon: I, t, d }, i) => (
            <Reveal key={t} delay={i * 0.07} className="bg-charcoal">
              <div className="group h-full p-8 transition-colors duration-300 hover:bg-charcoal-2 sm:p-10">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-emerald ring-1 ring-white/10 transition-colors group-hover:bg-emerald group-hover:text-charcoal"><I size={22} aria-hidden /></span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
