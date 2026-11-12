import { Quote } from "lucide-react";
import { Counter } from "../ui/Counter";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { RESULTS, TESTIMONIALS, WORK } from "@/lib/proof";

export function Proof() {
  if (!RESULTS.length && !TESTIMONIALS.length && !WORK.length) return null;
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading eyebrow="Track record" title="Results that speak." center />
        {RESULTS.length > 0 && (
          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {RESULTS.map((r) => {
              const m = r.value.match(/^(\d+)(.*)$/);
              return (
                <Reveal key={r.label} className="rounded-2xl border border-line bg-paper p-6 text-center">
                  <p className="grad-text text-5xl font-semibold">{m ? <Counter to={Number(m[1])} suffix={m[2]} /> : r.value}</p>
                  <p className="mt-2 text-sm text-muted">{r.label}</p>
                </Reveal>
              );
            })}
          </div>
        )}
        {WORK.length > 0 && (
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {WORK.map((w) => (
              <Reveal key={w.title} className="card overflow-hidden">
                {w.image && /* eslint-disable-next-line @next/next/no-img-element */ <img src={w.image} alt={w.title} className="h-44 w-full object-cover" loading="lazy" />}
                <div className="p-6"><h3 className="font-semibold text-charcoal">{w.title}</h3><p className="mt-1 text-sm text-muted">{w.description}</p></div>
              </Reveal>
            ))}
          </div>
        )}
        {TESTIMONIALS.length > 0 && (
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Reveal key={t.name} className="card p-7">
                <Quote size={22} className="text-emerald" aria-hidden />
                <p className="mt-4 text-base text-charcoal">{t.quote}</p>
                <p className="mt-5 text-sm font-semibold text-charcoal">{t.name}{t.role && <span className="font-normal text-muted"> · {t.role}</span>}</p>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
