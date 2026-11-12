import { Check } from "lucide-react";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import type { Service } from "@/lib/services";
import { PLATFORMS } from "@/lib/platforms";
import { PlatformLogo } from "./ui/PlatformLogo";

export function ServiceDetails({ services }: { services: Service[] }) {
  return (
    <div className="divide-y divide-line">
      {services.map((s, i) => {
        const Icon = s.icon;
        const plat = PLATFORMS.find((p) => p.id === s.id);
        return (
          <section key={s.id} id={s.id} className="scroll-mt-28 py-14 first:pt-0 last:pb-0 sm:py-20">
            <div className="grid items-start gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-5">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-soft text-emerald-deep"><Icon size={26} aria-hidden /></span>
                <p className="mt-6 text-sm font-semibold text-emerald-deep">{String(i + 1).padStart(2, "0")}</p>
                {plat && <div className="group mt-4"><PlatformLogo name={plat.name} logo={plat.logo} icon={plat.icon} size="lg" /></div>}
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">{s.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted">{s.intro}</p>
                <div className="mt-7">
                  <Button href={`/contact/?subject=${encodeURIComponent(s.title + " enquiry")}`} variant="secondary">Enquire About This Service</Button>
                </div>
              </Reveal>
              <Reveal delay={0.1} className="lg:col-span-7">
                <div className="card p-7 sm:p-9">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">What&rsquo;s included</h3>
                  <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 rounded-xl border border-line bg-paper px-4 py-4 text-sm font-medium text-charcoal">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald text-white"><Check size={12} strokeWidth={3} aria-hidden /></span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}
    </div>
  );
}
