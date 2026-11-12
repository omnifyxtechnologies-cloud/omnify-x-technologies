"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Boxes, Building2, Rocket } from "lucide-react";
import { Button } from "../ui/Button";

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]" aria-hidden>
      <div className="absolute inset-[6%] rounded-full bg-gradient-to-br from-emerald/15 via-white to-violet/15 blur-2xl" />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <circle cx="200" cy="200" r="168" fill="none" stroke="#20262f" strokeOpacity=".08" />
        <circle cx="200" cy="200" r="124" fill="none" stroke="#20262f" strokeOpacity=".08" strokeDasharray="2 8" />
        <path d="M70 150 A140 140 0 0 1 150 72" fill="none" stroke="#00c48f" strokeWidth="14" strokeLinecap="butt" />
        <path d="M330 250 A140 140 0 0 1 250 328" fill="none" stroke="#00c48f" strokeWidth="14" />
        <path d="M150 328 A140 140 0 0 1 250 328" fill="none" stroke="#9146e8" strokeWidth="14" opacity=".9" />
        <path d="M150 72 A140 140 0 0 1 250 72" fill="none" stroke="#9146e8" strokeWidth="14" opacity=".9" />
        <path d="M110 290 L290 110" stroke="#00c48f" strokeWidth="14" />
        <circle cx="290" cy="110" r="7" fill="#fff" stroke="#9146e8" strokeWidth="4" />
        <circle cx="110" cy="290" r="7" fill="#fff" stroke="#00c48f" strokeWidth="4" />
      </svg>

      {[
        { icon: Boxes, label: "E-commerce", sub: "5 services", cls: "left-[-2%] top-[18%]", d: 0 },
        { icon: Building2, label: "Consultancy", sub: "US & UK formation", cls: "right-[-3%] top-[44%]", d: 1.2 },
        { icon: Rocket, label: "Ventures", sub: "Coming soon", cls: "left-[8%] bottom-[8%]", d: 2.2 },
      ].map(({ icon: I, label, sub, cls, d }) => (
        <div key={label} className={`floaty absolute ${cls} flex items-center gap-3 rounded-xl border border-line bg-white/95 px-4 py-3 shadow-xl shadow-charcoal/10 backdrop-blur`} style={{ animationDelay: `${d}s` }}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-soft text-emerald-deep"><I size={18} /></span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-charcoal">{label}</span>
            <span className="block text-xs text-muted">{sub}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (i: number) => reduce ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] as const } };
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden />
      <div className="absolute -right-40 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-violet/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 -left-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-emerald/10 blur-3xl" aria-hidden />

      <div className="container-x grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7 xl:pr-6">
          <motion.p {...fade(0)} className="eyebrow inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald-soft px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Omnify X Technologies
          </motion.p>
          <motion.h1 {...fade(1)} className="h-display mt-6 text-[2.4rem] text-charcoal sm:text-5xl lg:text-[3.35rem]">
            Building Businesses. Empowering Entrepreneurs. <span className="grad-text block">Creating What&rsquo;s Next.</span>
          </motion.h1>
          <motion.p {...fade(2)} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Omnify X Technologies brings together e-commerce solutions, international business consultancy, and emerging ventures to help entrepreneurs build, operate, and grow.
          </motion.p>
          <motion.div {...fade(3)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#services">Explore Our Services</Button>
            <Button href="/contact/" variant="secondary">Get in Touch</Button>
          </motion.div>
        </div>
        <motion.div {...(reduce ? {} : { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.9, delay: 0.2 } })} className="lg:col-span-5">
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
