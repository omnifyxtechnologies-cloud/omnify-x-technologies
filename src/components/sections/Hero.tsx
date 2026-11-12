"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Bell, Building2, Check, TrendingUp } from "lucide-react";
import { Button } from "../ui/Button";

const W = 520;
const H = 545;
const LINE = "M24 196 C 60 184, 84 190, 118 160 S 178 150, 214 118 S 280 116, 316 82 S 380 70, 412 40 S 456 30, 480 18";

const CHANNELS = ["Amazon", "Walmart", "eBay", "Etsy", "Shopify"];

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
  const enter = (d: number) => reduce ? {} : { initial: { opacity: 0, y: 24, scale: 0.96 }, animate: { opacity: 1, y: 0, scale: 1 }, transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] as const } };
  const glass = "absolute rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl";
  return (
    <div ref={wrap} className="relative mx-auto w-full max-w-[32.5rem]" style={{ height: H * scale }} aria-hidden>
      <div className="drift absolute inset-[4%] rounded-full bg-gradient-to-br from-emerald/30 via-transparent to-violet/40 blur-3xl" />
      <div className="absolute left-0 top-0 origin-top-left" style={{ width: W, height: H, transform: `scale(${scale})` }}>

        {/* Main console */}
        <motion.div {...enter(0.15)} className="absolute z-10 overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#262d38] via-charcoal to-[#171b22] shadow-2xl shadow-charcoal/40" style={{ left: 8, top: 40, width: 504, height: 400 }}>
          <div className="absolute inset-0 grid-bg-dark opacity-40" />
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violet/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-emerald/25 blur-3xl" />

          <div className="relative flex items-center justify-between px-6 pt-5">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-emerald to-violet text-white"><TrendingUp size={16} /></span>
              <div className="leading-tight"><p className="text-[11px] font-semibold text-white">Business overview</p><p className="text-[9px] text-white/45">All channels · Live</p></div>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[9px] font-semibold text-emerald"><span className="ping-soft h-1.5 w-1.5 rounded-full bg-emerald" /> Growing</div>
          </div>

          {/* Area chart */}
          <svg viewBox="0 0 504 230" className="relative mt-3 w-full overflow-visible" style={{ height: 230 }}>
            <defs>
              <linearGradient id="hz-line" x1="0" x2="1"><stop offset="0" stopColor="#00c48f" /><stop offset="1" stopColor="#b57bff" /></linearGradient>
              <linearGradient id="hz-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#9146e8" stopOpacity=".38" /><stop offset="1" stopColor="#00c48f" stopOpacity="0" /></linearGradient>
              <filter id="hz-glow"><feGaussianBlur stdDeviation="4" /></filter>
            </defs>
            {[40, 90, 140, 190].map((y) => <line key={y} x1="24" x2="480" y1={y} y2={y} stroke="#fff" strokeOpacity=".06" strokeDasharray="3 6" />)}
            <path d={`${LINE} L 480 214 L 24 214 Z`} fill="url(#hz-fill)" className="hz-fill" />
            <path d={LINE} fill="none" stroke="url(#hz-line)" strokeWidth="6" strokeLinecap="round" opacity=".5" filter="url(#hz-glow)" />
            <motion.path d={LINE} fill="none" stroke="url(#hz-line)" strokeWidth="2.6" strokeLinecap="round"
              {...(reduce ? {} : { initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 2.2, delay: 0.7, ease: "easeInOut" } })} />
            {!reduce && (
              <circle r="5" fill="#fff" stroke="#00c48f" strokeWidth="3">
                <animateMotion dur="6s" repeatCount="indefinite" path={LINE} keyPoints="0;1;1" keyTimes="0;0.75;1" calcMode="linear" begin="2.8s" />
              </circle>
            )}
          </svg>

          {/* KPI tiles */}
          <div className="relative mx-5 grid grid-cols-3 gap-3">
            {[["Marketplaces", "from-emerald/50"], ["Stores", "from-violet/50"], ["Portals", "from-emerald/40"]].map(([t, c], i) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.05] p-3">
                <p className="text-[9px] font-medium uppercase tracking-wider text-white/45">{t}</p>
                <div className="mt-3 flex h-7 items-end gap-1">
                  {[0.4, 0.65, 0.5, 0.85, 0.7, 1].map((h, k) => (
                    <span key={k} className={`bar-rise block w-full rounded-sm bg-gradient-to-t ${c} to-white/80`} style={{ height: `${h * 100}%`, animationDelay: `${(i * 6 + k) * 0.15}s` }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Channels chip rail */}
        <motion.div {...enter(0.6)} className={`${glass} z-20 !border-white/15 !bg-charcoal/80 px-3 py-2.5 shadow-xl`} style={{ left: 40, top: 6 }}>
          <div className="floaty flex items-center gap-2">
            {CHANNELS.map((c) => <span key={c} className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[9px] font-semibold text-white/85">{c}</span>)}
          </div>
        </motion.div>

        {/* Company setup */}
        <motion.div {...enter(0.9)} className="absolute z-20" style={{ left: 330, top: 420, width: 178 }}>
          <div className="floaty rounded-2xl border border-line bg-white p-3.5 shadow-2xl shadow-charcoal/25" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-center gap-2 text-[11px] font-semibold text-charcoal"><span className="grid h-6 w-6 place-items-center rounded-lg bg-violet-soft text-violet-deep"><Building2 size={12} /></span> Company setup</div>
            <ul className="mt-2.5 space-y-2">
              {["US / UK structure", "Registered", "Live"].map((t, i) => (
                <li key={t} className="flex items-center gap-2 text-[10px] font-medium text-charcoal">
                  <span className="tick grid h-4 w-4 place-items-center rounded-full bg-emerald text-white" style={{ animationDelay: `${i * 0.9}s` }}><Check size={9} strokeWidth={3} /></span>{t}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Order toast */}
        <div className="absolute z-30" style={{ left: 4, top: 440, width: 210 }}>
          <div className="pop-toast flex items-center gap-3 rounded-2xl border border-line bg-white p-3 shadow-2xl shadow-charcoal/25">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-emerald to-violet text-white"><Bell size={16} /></span>
            <div className="leading-tight"><p className="text-[11px] font-semibold text-charcoal">New order received</p><p className="mt-0.5 text-[9px] text-muted">From your online store</p></div>
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
