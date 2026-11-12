import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { SafeImg } from "../ui/SafeImg";
import { SHOPIFY_PROJECTS } from "@/lib/projects";

export function ShopifyWork({ dark = false }: { dark?: boolean }) {
  if (!SHOPIFY_PROJECTS.length) return null;
  return (
    <section id="shopify-work" className={`py-20 sm:py-28 ${dark ? "bg-charcoal text-white" : "bg-paper"}`}>
      <div className="container-x">
        <SectionHeading dark={dark} eyebrow="Shopify Portfolio" title="Stores we have designed." text="A selection of live Shopify stores built by our team. Open any of them to see the work in the real world." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SHOPIFY_PROJECTS.map((p, i) => (
            <Reveal key={p.url} delay={(i % 3) * 0.08}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="group card card-hover block overflow-hidden text-charcoal">
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-emerald/25 to-violet/25">
                  <SafeImg
                    src={p.image}
                    alt={`${p.name} Shopify store`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    fallback={
                      <div className="absolute inset-x-6 top-6 bottom-0 overflow-hidden rounded-t-xl bg-white shadow-xl ring-1 ring-charcoal/10">
                        <div className="flex items-center gap-1.5 border-b border-line bg-paper px-3 py-2">
                          <span className="h-2 w-2 rounded-full bg-red-300" /><span className="h-2 w-2 rounded-full bg-amber-300" /><span className="h-2 w-2 rounded-full bg-emerald/70" />
                          <span className="mx-auto rounded-full bg-white px-3 py-0.5 text-[10px] font-medium text-muted ring-1 ring-line">{new URL(p.url).hostname}</span>
                        </div>
                        <div className="grid h-full place-items-center px-4 pb-10 text-center text-xl font-semibold text-charcoal">{p.name}</div>
                      </div>
                    }
                  />
                  <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white text-charcoal opacity-0 shadow-lg transition-opacity group-hover:opacity-100"><ArrowUpRight size={16} aria-hidden /></span>
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <div>
                    <h3 className="font-semibold">{p.name}</h3>
                    <p className="mt-0.5 text-sm text-muted">{p.niche}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-deep">Visit <ExternalLink size={14} aria-hidden /></span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
