import { Reveal } from "../ui/Reveal";

const pillars = [
  { n: "01", t: "E-commerce", d: "Marketplace and storefront solutions across Amazon, Walmart, eBay, Etsy and Shopify." },
  { n: "02", t: "Business Consultancy", d: "Setup and registration guidance for entrepreneurs forming a US LLC or a UK LTD." },
  { n: "03", t: "Emerging Ventures", d: "New technology and workspace ventures that extend the Omnify X group." },
];

export function Intro() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow">Who we are</p>
          <h2 className="h-section mt-3 text-charcoal">One Vision. <span className="grad-text">Multiple Business Opportunities.</span></h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Omnify X Technologies is a multi-venture company operating across e-commerce, business consultancy, and emerging technology and workspace ventures. Each division is built around the same idea: give entrepreneurs the structure, guidance and tools they need to start with confidence and grow with intent.
          </p>
        </Reveal>
        <div className="lg:col-span-6">
          <ul className="divide-y divide-line border-y border-line">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <li className="group flex gap-6 py-6">
                  <span className="w-7 shrink-0 text-sm font-semibold text-emerald-deep">{p.n}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal transition-colors group-hover:text-violet-deep">{p.t}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
