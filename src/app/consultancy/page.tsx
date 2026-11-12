import type { Metadata } from "next";
import { Info } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ServiceDetails } from "@/components/ServiceDetails";
import { CTABand } from "@/components/sections/CTABand";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONSULT } from "@/lib/services";

export const metadata: Metadata = {
  title: "Business Consultancy",
  description: "US LLC formation and UK LTD formation assistance from Omnify X Technologies: business setup consultancy and registration guidance for international entrepreneurs.",
};

const steps = [
  { t: "Discuss your plans", d: "Tell us about your business and where you want to register it." },
  { t: "Choose the structure", d: "We guide you through the formation process for a US LLC or a UK LTD." },
  { t: "Complete registration", d: "We assist with the registration and setup steps involved." },
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Business Consultancy" title={<>International business setup, <span className="grad-text">guided properly.</span></>} text="Consultancy for entrepreneurs who want to establish a company in the United States or the United Kingdom.">
        <div className="flex flex-wrap gap-2">
          {CONSULT.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:border-emerald hover:text-emerald-deep">{s.title}</a>
          ))}
        </div>
      </PageHero>
      <div className="container-x py-16 sm:py-24"><ServiceDetails services={CONSULT} /></div>

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="How it works" title="A clear path from idea to registered company." center />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.08}>
                <li className="card h-full p-7">
                  <span className="text-sm font-semibold text-emerald-deep">Step {i + 1}</span>
                  <h3 className="mt-2 text-lg font-semibold text-charcoal">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <p className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-xl border border-violet/20 bg-violet-soft px-5 py-4 text-sm leading-relaxed text-charcoal">
              <Info size={18} className="mt-0.5 shrink-0 text-violet-deep" aria-hidden />
              Omnify X provides business setup consultancy and registration assistance. This is not legal, tax or financial advice, and we do not guarantee any particular legal, tax or financial outcome. For specific advice, please consult a qualified professional.
            </p>
          </Reveal>
        </div>
      </section>
      <CTABand title="Planning to register a company abroad?" text="Get in touch to talk through your plans for a US LLC or UK LTD." />
    </>
  );
}
