import { Boxes, Store, ShoppingBag, Sparkles, LayoutTemplate } from "lucide-react";
import { Marquee } from "../ui/Marquee";

// Optional: drop official logo files (from each brand's own brand-asset page) into /public/logos
// and set `logo: "/logos/amazon.svg"` below to show the real logo instead of the name.
const PLATFORMS: { name: string; icon: typeof Boxes; logo?: string }[] = [
  { name: "Amazon FBA", icon: Boxes },
  { name: "Walmart", icon: Store },
  { name: "eBay", icon: ShoppingBag },
  { name: "Etsy", icon: Sparkles },
  { name: "Shopify", icon: LayoutTemplate },
];

export function PlatformStrip() {
  const row = (
    <>
      {PLATFORMS.concat(PLATFORMS).map((p, i) => (
        <div key={i} className="group mx-8 flex items-center gap-3 sm:mx-12">
          {p.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.logo} alt="" className="h-8 w-auto opacity-60 grayscale transition group-hover:opacity-100 group-hover:grayscale-0" />
          ) : (
            <>
              <p.icon size={26} className="text-charcoal/30 transition-colors group-hover:text-emerald" />
              <span className="text-2xl font-semibold tracking-tight text-charcoal/35 transition-colors group-hover:text-charcoal sm:text-3xl">{p.name}</span>
            </>
          )}
        </div>
      ))}
    </>
  );
  return (
    <section aria-label="Marketplaces and platforms we work with" className="border-y border-line bg-white py-8">
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">Marketplaces &amp; platforms we work with</p>
      <Marquee>{row}</Marquee>
    </section>
  );
}
