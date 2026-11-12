import { Quote } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { SafeImg } from "../ui/SafeImg";
import { FOUNDER } from "@/lib/founder";

export function Founder({ compact = false }: { compact?: boolean }) {
  if (!FOUNDER.name) return null;
  const initials = FOUNDER.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  const paras = compact ? FOUNDER.story.slice(0, 2) : FOUNDER.story;
  return (
    <section id="founder" className="relative overflow-hidden bg-paper py-20 sm:py-28">
      <div className="drift absolute -left-32 top-10 h-96 w-96 rounded-full bg-emerald/10 blur-3xl" aria-hidden />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 rotate-3 rounded-3xl bg-gradient-to-br from-emerald/40 to-violet/40" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-charcoal shadow-2xl shadow-charcoal/20">
              <SafeImg
                src={FOUNDER.photo}
                alt={`${FOUNDER.name}, ${FOUNDER.role}`}
                className="h-full w-full object-cover"
                fallback={<div className="grid h-full w-full place-items-center bg-gradient-to-br from-emerald to-violet text-7xl font-semibold text-white">{initials}</div>}
              />
            </div>
            <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-line bg-white px-5 py-3 text-center shadow-xl">
              <p className="text-base font-semibold text-charcoal">{FOUNDER.name}</p>
              <p className="text-xs font-medium text-emerald-deep">{FOUNDER.role}</p>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <SectionHeading eyebrow="Founder’s Story" title="The person behind Omnify X." />
          {FOUNDER.quote && (
            <Reveal delay={0.05}>
              <p className="mt-6 flex gap-3 text-lg font-medium italic text-charcoal"><Quote size={22} className="mt-1 shrink-0 text-emerald" aria-hidden />{FOUNDER.quote}</p>
            </Reveal>
          )}
          <Reveal delay={0.1} className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            {paras.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
          {FOUNDER.highlights.length > 0 && (
            <Reveal delay={0.15}>
              <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {FOUNDER.highlights.map((h) => (
                  <div key={h.label} className="rounded-xl border border-line bg-white p-4">
                    <dd className="grad-text text-2xl font-semibold">{h.value}</dd>
                    <dt className="mt-1 text-xs text-muted">{h.label}</dt>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
