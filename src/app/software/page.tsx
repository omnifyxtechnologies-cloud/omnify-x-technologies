import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { OfferGrid } from "@/components/OfferGrid";
import { CTABand } from "@/components/sections/CTABand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTALS, WEBDEV } from "@/lib/software";

export const metadata: Metadata = {
  title: "SaaS Portals & Web Development",
  description: "Management portals for property, gyms, hostels and hotels, plus web development services from Omnify X Technologies.",
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Software Division" title={<>Management portals and websites, <span className="grad-text">built for your business.</span></>} text="SaaS management portals for property, gyms, hostels and hotels, along with professional web development.">
        <div className="flex flex-wrap gap-2">
          {[["#portals", "SaaS Portals"], ["#web-development", "Web Development"]].map(([h, l]) => (
            <a key={h} href={h} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:border-emerald hover:text-emerald-deep">{l}</a>
          ))}
        </div>
      </PageHero>

      <section id="portals" className="scroll-mt-28 bg-white py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="SaaS Tools" title="Management portals for every kind of space." text="Replace paperwork and spreadsheets with one organized portal. Need something different? We build portals for other businesses too." />
          <div className="mt-12"><OfferGrid offers={PORTALS} /></div>
        </div>
      </section>

      <section id="web-development" className="scroll-mt-28 bg-paper py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Web Development" title="Websites and web apps that work." center />
          <div className="mt-12"><OfferGrid offers={WEBDEV} cols="lg:grid-cols-3" /></div>
        </div>
      </section>

      <CTABand title="Need a portal or a website?" text="Tell us about your business and what you want to manage or launch online." />
    </>
  );
}
