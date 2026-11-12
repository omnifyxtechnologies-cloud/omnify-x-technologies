import { Counter } from "../ui/Counter";
import { Reveal } from "../ui/Reveal";

// Only factual, verifiable numbers about what the company offers today.
const STATS = [
  { n: 7, s: "", l: "Services" },
  { n: 5, s: "", l: "Marketplaces & platforms" },
  { n: 2, s: "", l: "Countries for company formation" },
  { n: 2, s: "", l: "New ventures coming" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-16 text-white sm:py-20">
      <div className="grid-bg-dark absolute inset-0 opacity-50" aria-hidden />
      <div className="drift absolute -left-20 top-0 h-72 w-72 rounded-full bg-emerald/25 blur-3xl" aria-hidden />
      <div className="drift-b absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-violet/30 blur-3xl" aria-hidden />
      <div className="container-x relative">
        <p className="eyebrow text-center !text-emerald">Omnify X at a glance</p>
        <div className="mt-10 grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08} className="text-center">
              <p className="text-6xl font-semibold tracking-tight sm:text-7xl"><Counter to={s.n} suffix={s.s} /></p>
              <span className="mx-auto mt-3 block h-1 w-10 rounded-full bg-gradient-to-r from-emerald to-violet" />
              <p className="mx-auto mt-2 max-w-[10rem] text-sm text-white/65">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
