import { Marquee } from "../ui/Marquee";
import { PlatformLogo } from "../ui/PlatformLogo";
import { PLATFORMS } from "@/lib/platforms";

export function PlatformStrip() {
  const row = (
    <>
      {PLATFORMS.concat(PLATFORMS).map((p, i) => (
        <div key={i} className="group mx-8 flex items-center sm:mx-12">
          <PlatformLogo name={p.name} logo={p.logo} icon={p.icon} />
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
