import type { Metadata } from "next";
import { Eye, Target, Lightbulb } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Founder } from "@/components/sections/Founder";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description: "Omnify X Technologies is a multi-venture company across e-commerce, business consultancy and emerging technology and workspace ventures.",
};

const approach = [
  { t: "Start with the entrepreneur", d: "Services are built around what people starting and running businesses actually need." },
  { t: "Keep things practical", d: "Clear processes and straightforward guidance, without unnecessary complexity." },
  { t: "Use technology well", d: "Modern tools and workflows support how we research, set up and operate." },
  { t: "Think long term", d: "We look past the launch to how a business can grow and develop." },
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="About Us" title={<>A multi-venture company built for <span className="grad-text">entrepreneurs.</span></>} text="Omnify X Technologies operates across e-commerce, business consultancy, and emerging technology and workspace ventures." />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Who we are</p>
            <h2 className="h-section mt-3 text-charcoal">One company, several ways to help you build.</h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-base leading-relaxed text-muted sm:text-lg lg:col-span-7">
            <p>Omnify X Technologies brings together e-commerce solutions, international business consultancy and new ventures under one roof. Our aim is to help entrepreneurs build, operate and grow businesses with the right structure and support.</p>
            <p>Alongside our current services, we are developing two new ventures: a marketplace focused on temporary phone number services, and a cafe and coworking space for freelancers and entrepreneurs.</p>
          </Reveal>
        </div>
      </section>

      <Founder />

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {[
            { icon: Eye, t: "Our Vision", d: "To grow into a respected multi-venture business group that helps entrepreneurs around the world start, run and expand their businesses." },
            { icon: Target, t: "Our Mission", d: "To give entrepreneurs practical e-commerce solutions, dependable business setup consultancy and new ventures that create fresh opportunities." },
          ].map(({ icon: I, t, d }, i) => (
            <Reveal key={t} delay={i * 0.1}>
              <div className="card h-full p-8 sm:p-10">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-violet-soft text-violet-deep"><I size={22} aria-hidden /></span>
                <h2 className="mt-6 text-2xl font-semibold tracking-tight text-charcoal">{t}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="What we do" title="Three areas of focus." center />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { t: "E-commerce", d: "Amazon FBA Wholesale, Walmart 2-Step Dropshipping, eBay Dropshipping, Etsy Digital Products and Shopify Store Designing.", href: "/ecommerce/", l: "View e-commerce" },
              { t: "Business Consultancy", d: "US LLC formation and UK LTD formation assistance, with business setup and registration guidance.", href: "/consultancy/", l: "View consultancy" },
              { t: "Emerging Ventures", d: "The Omnify X Temp Number Marketplace and Omnify X Cafe & Workspace, both coming soon.", href: "/ventures/", l: "View ventures" },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <div className="card card-hover flex h-full flex-col p-7">
                  <h3 className="text-lg font-semibold text-charcoal">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.d}</p>
                  <div className="mt-auto pt-6"><Button href={c.href} variant="ghost" className="!px-0">{c.l}</Button></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-charcoal py-20 text-white sm:py-24">
        <div className="grid-bg-dark absolute inset-0 opacity-50" aria-hidden />
        <div className="container-x relative">
          <SectionHeading dark eyebrow="Our approach" title="How we approach business." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((a, i) => (
              <Reveal key={a.t} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                  <Lightbulb size={20} className="text-emerald" aria-hidden />
                  <h3 className="mt-5 text-base font-semibold">{a.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{a.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
