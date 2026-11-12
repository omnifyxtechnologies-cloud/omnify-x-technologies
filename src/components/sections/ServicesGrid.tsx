import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { SERVICES } from "@/lib/services";

export function ServicesGrid() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading eyebrow="Our Services" title="Seven services for building and operating a business." text="From marketplace operations to company formation, each service is designed to help entrepreneurs move from idea to launch." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const href = `/${s.division === "ecommerce" ? "ecommerce" : "consultancy"}/#${s.id}`;
            return (
              <Reveal key={s.id} delay={(i % 3) * 0.08} className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}>
                <Link href={href} className="card card-hover group flex h-full flex-col p-7">
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-soft text-emerald-deep transition-colors duration-300 group-hover:bg-violet-soft group-hover:text-violet-deep"><Icon size={22} aria-hidden /></span>
                    <ArrowUpRight size={18} className="text-muted/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-deep" aria-hidden />
                  </div>
                  <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted">{s.division === "ecommerce" ? "E-commerce" : "Consultancy"}</p>
                  <h3 className="mt-1.5 text-lg font-semibold text-charcoal">{s.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{s.short}</p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
