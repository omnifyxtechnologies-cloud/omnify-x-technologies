import { Marquee } from "../ui/Marquee";

const WORDS = ["Build", "Operate", "Grow", "Launch", "Scale"];

export function BigMarquee() {
  return (
    <div className="overflow-hidden bg-white py-8 sm:py-12" aria-hidden>
      <Marquee speed="fast">
        {WORDS.concat(WORDS).map((w, i) => (
          <span key={i} className="mx-6 flex items-center gap-12 text-6xl font-semibold uppercase tracking-tight sm:text-8xl">
            <span className={i % 2 ? "grad-text" : "text-outline"}>{w}</span>
            <span className="h-3 w-3 rounded-full bg-emerald" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
