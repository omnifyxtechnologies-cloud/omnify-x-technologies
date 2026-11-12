"use client";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Map, Rocket, TrendingUp } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const steps = [
  { icon: MessageCircle, t: "Talk", d: "Share your idea." },
  { icon: Map, t: "Plan", d: "Pick the right model." },
  { icon: Rocket, t: "Launch", d: "Set up and go live." },
  { icon: TrendingUp, t: "Grow", d: "Operate and expand." },
];

export function Journey() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading eyebrow="Your journey" title="Idea to income in four steps." center />
        <div className="relative mt-16">
          <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-0.5 bg-line lg:block" aria-hidden>
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-emerald to-violet"
              {...(reduce ? {} : { initial: { scaleX: 0 }, whileInView: { scaleX: 1 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 1.6, ease: "easeInOut" } })}
            />
          </div>
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: I, t, d }, i) => (
              <Reveal key={t} delay={i * 0.15}>
                <li className="flex flex-col items-center text-center">
                  <span className="relative z-10 grid h-16 w-16 place-items-center rounded-full border-4 border-white bg-charcoal text-white shadow-xl shadow-charcoal/20 transition-transform duration-300 hover:scale-110"><I size={24} aria-hidden /></span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-deep">Step {i + 1}</p>
                  <h3 className="mt-1 text-xl font-semibold text-charcoal">{t}</h3>
                  <p className="mt-1 text-sm text-muted">{d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
