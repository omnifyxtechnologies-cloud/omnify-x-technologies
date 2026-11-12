import { Check } from "lucide-react";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import type { Offer } from "@/lib/software";

export function OfferGrid({ offers, cols = "lg:grid-cols-2" }: { offers: Offer[]; cols?: string }) {
  return (
    <div className={`grid gap-6 sm:grid-cols-2 ${cols}`}>
      {offers.map((o, i) => {
        const Icon = o.icon;
        return (
          <Reveal key={o.id} delay={(i % 2) * 0.08}>
            <div id={o.id} className="card card-hover flex h-full scroll-mt-28 flex-col p-7 sm:p-8">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-soft text-emerald-deep"><Icon size={26} aria-hidden /></span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-charcoal">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{o.intro}</p>
              <ul className="mt-5 space-y-2.5">
                {o.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm font-medium text-charcoal">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald text-white"><Check size={12} strokeWidth={3} aria-hidden /></span>{p}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-7"><Button href={`/contact/?subject=${encodeURIComponent(o.title + " enquiry")}`} variant="secondary">Enquire</Button></div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
