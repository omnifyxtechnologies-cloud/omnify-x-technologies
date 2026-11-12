"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Bell, Building2, Check, ShoppingCart, TrendingUp } from "lucide-react";
import { Button } from "../ui/Button";

function Skel({ w, h = 8, light = false, className = "" }: { w: number | string; h?: number; light?: boolean; className?: string }) {
  return <div className={`${light ? "skel-w" : "skel"} rounded-full ${className}`} style={{ width: w, height: h }} />;
}

const W = 520;
const H = 500;

function HeroDashboard({ reduce }: { reduce: boolean }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setScale(Math.min(1, el.clientWidth / W)));
    ro.observe(el);
    setScale(Math.min(1, el.clientWidth / W));
    return () => ro.disconnect();
  }, []);
  const enter = (d: number) => reduce ? {} : { initial: { opacity: 0, y: 30, scale: 0.94 }, animate: { opacity: 1, y: 0, scale: 1 }, transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] as const } };
  const card = "absolute rounded-2xl border border-line bg-white shadow-2xl shadow-charcoal/10";
  const tiles = ["from-emerald/40 to-emerald/10", "from-violet/40 to-violet/10", "from-emerald/30 to-violet/20"];
  return (
    <div ref={wrap} className="relative mx-auto w-full max-w-[32.5rem]" style={{ height: H * scale }} aria-hidden>
      <div className="drift absolute inset-[8%] rounded-full bg-gradient-to-br from-emerald/25 via-transparent to-violet/30 blur-3xl" />
      <div className="absolute left-0 top-0 origin-top-left" style={{ width: W, height: H, transform: `scale(${scale})` }}>

        {/* Ventures chip */}
        <motion.div {...enter(1.2)} className="absolute left-5 top-3 z-20">
          <div className="floaty flex items-center gap-2 rounded-full bg-charcoal px-4 py-2 text-xs font-semibold text-white shadow-xl">
            <span className="ping-soft h-2 w-2 rounded-full bg-emerald" /> New ventures · Coming soon
          </div>
        </motion.div>

        {/* Store window */}
        <motion.div {...enter(0.2)} className={`${card} z-10 overflow-hidden`} style={{ left: 18, top: 62, width: 372, height: 310 }}>
          <div className="flex items-center gap-2 border-b border-line bg-paper px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300" /><span className="h-2.5 w-2.5 rounded-full bg-emerald/70" />
            <div className="mx-auto flex h-6 w-44 items-center justify-center rounded-full bg-white text-[10px] font-medium text-muted ring-1 ring-line">yourstore.com</div>
            <span className="cart-bump grid h-6 w-6 place-items-center rounded-full bg-charcoal text-white"><ShoppingCart size={12} /></span>
          </div>
          <div className="p-4">
            <div className="relative h-[92px] overflow-hidden rounded-xl bg-gradient-to-r from-emerald via-emerald-deep to-violet p-4">
              <div className="absolute -right-6 -top-8 h-28 w-28 rounded-full bg-white/15" />
              <Skel w={130} h={10} light /><Skel w={90} h={8} light className="mt-2" />
              <div className="mt-3 inline-block rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-charcoal">Shop now</div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {tiles.map((t, i) => (
                <div key={i}>
                  <div className={`h-[76px] rounded-xl bg-gradient-to-br ${t}`} />
                  <Skel w="80%" h={7} className="mt-2" /><Skel w="45%" h={7} className="mt-1.5" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Company setup checklist */}
        <motion.div {...enter(0.5)} className="absolute z-20" style={{ left: 318, top: 20, width: 196 }}>
          <div className={`floaty ${card} !relative p-4`} style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-2 text-xs font-semibold text-charcoal"><span className="grid h-7 w-7 place-items-center rounded-lg bg-violet-soft text-violet-deep"><Building2 size={14} /></span> Company setup</div>
            <ul className="mt-3 space-y-2.5">
              {["Choose structure", "Register company", "Go live"].map((t, i) => (
                <li key={t} className="flex items-center gap-2.5 text-[11px] font-medium text-charcoal">
                  <span className="tick grid h-5 w-5 place-items-center rounded-full bg-emerald text-white" style={{ animationDelay: `${i * 0.9}s` }}><Check size={11} strokeWidth={3} /></span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Growth chart */}
        <motion.div {...enter(0.8)} className="absolute z-20" style={{ left: 0, top: 344, width: 238 }}>
          <div className={`floaty ${card} !relative p-4`} style={{ animationDelay: "1.4s" }}>
            <div className="flex items-center justify-between text-xs font-semibold text-charcoal">
              <span className="flex items-center gap-2"><span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-soft text-emerald-deep"><TrendingUp size={14} /></span> Growth</span>
              <span className="rounded-full bg-emerald-soft px-2 py-0.5 text-[10px] text-emerald-deep">Scaling</span>
            </div>
            <svg viewBox="0 0 200 70" className="mt-3 h-[70px] w-full overflow-visible">
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <rect key={i} x={i * 29 + 4} y={70 - (14 + i * 7)} width="16" height={14 + i * 7} rx="3" fill="#00c48f" opacity=".18" className="bar-rise" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
              <motion.path d="M4 58 C 30 52, 48 54, 70 42 S 120 34, 140 22 S 180 8, 196 4" fill="none" stroke="#9146e8" strokeWidth="3" strokeLinecap="round"
                {...(reduce ? {} : { initial: { pathLength: 0 }, animate: { pathLength: [0, 1, 1, 0] }, transition: { duration: 5, repeat: Infinity, times: [0, 0.5, 0.85, 1], ease: "easeInOut" } })} />
            </svg>
          </div>
        </motion.div>

        {/* New order toast */}
        <div className="absolute z-30" style={{ left: 290, top: 384, width: 214 }}>
          <div className="pop-toast flex items-center gap-3 rounded-2xl border border-line bg-white p-3.5 shadow-2xl shadow-charcoal/15">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-emerald to-violet text-white"><Bell size={18} /></span>
            <div className="leading-tight"><p className="text-xs font-semibold text-charcoal">New order received</p><p className="mt-0.5 text-[10px] text-muted">From your online store</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const LINES = ["Building Businesses.", "Empowering Entrepreneurs.", "Creating What’s Next."];

export function Hero() {
  const reduce = !!useReducedMotion();
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden />
      <div className="drift absolute -right-32 -top-32 -z-10 h-[34rem] w-[34rem] rounded-full bg-violet/15 blur-3xl" aria-hidden />
      <div className="drift-b absolute -bottom-24 -left-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-emerald/15 blur-3xl" aria-hidden />

      <div className="container-x grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-7">
          <motion.p
            {...(reduce ? {} : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 } })}
            className="eyebrow inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald-soft px-3.5 py-1.5"
          >
            <span className="ping-soft h-2 w-2 rounded-full bg-emerald" /> Omnify X Technologies
          </motion.p>

          <h1 className="h-display mt-6 text-[2.35rem] text-charcoal sm:text-5xl lg:text-[2.4rem] xl:text-[2.8rem]">
            {LINES.map((l, i) => (
              <span key={l} className="block overflow-hidden pb-1">
                <motion.span
                  className={`block ${i === 2 ? "grad-anim" : ""}`}
                  {...(reduce ? {} : { initial: { y: "110%" }, animate: { y: 0 }, transition: { duration: 0.8, delay: 0.15 + i * 0.18, ease: [0.22, 1, 0.36, 1] } })}
                >
                  {l}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            {...(reduce ? {} : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.8 } })}
            className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg"
          >
            E-commerce. International business setup. New ventures. All under one roof.
          </motion.p>

          <motion.div
            {...(reduce ? {} : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.95 } })}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#services">Explore Our Services</Button>
            <Button href="/contact/" variant="secondary">Get in Touch</Button>
          </motion.div>
        </div>

        <div className="lg:col-span-5"><HeroDashboard reduce={reduce} /></div>
      </div>
    </section>
  );
}
