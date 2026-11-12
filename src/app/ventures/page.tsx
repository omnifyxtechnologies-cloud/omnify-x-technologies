import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { VentureCards } from "@/components/VentureCards";
import { CTABand } from "@/components/sections/CTABand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Laptop, Users, Coffee, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Ventures",
  description: "What's next for Omnify X: the upcoming Temp Number Marketplace and the Cafe & Workspace for freelancers and entrepreneurs.",
};

const cafe = [
  { icon: Laptop, t: "Freelance-friendly environment", d: "A space designed around the way freelancers and remote workers get things done." },
  { icon: Users, t: "Collaborative workspace concept", d: "Shared space that makes working alongside other professionals natural." },
  { icon: Handshake, t: "Networking opportunities", d: "A place for entrepreneurs and creatives to meet and connect." },
  { icon: Coffee, t: "Cafe and workspace experience", d: "A welcoming cafe setting combined with a productive place to work." },
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Our Ventures" title={<>What&rsquo;s Next for <span className="grad-text">Omnify X?</span></>} text="Two upcoming ventures that extend Omnify X into new technology and workspace opportunities. Both are coming soon." />
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x"><VentureCards id /></div>
      </section>
      <section className="bg-paper py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Omnify X Cafe & Workspace" title="A place to work, meet and build." text="Designed for freelancers, entrepreneurs, remote workers, and creative professionals." center />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cafe.map(({ icon: I, t, d }, i) => (
              <Reveal key={t} delay={i * 0.07}>
                <div className="card card-hover h-full p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-soft text-emerald-deep"><I size={22} aria-hidden /></span>
                  <h3 className="mt-5 text-base font-semibold text-charcoal">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABand title="Want to hear when we launch?" text="Get in touch and we will keep you posted as these ventures develop." cta="Stay Updated" />
    </>
  );
}
