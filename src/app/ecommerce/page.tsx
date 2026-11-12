import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceDetails } from "@/components/ServiceDetails";
import { CTABand } from "@/components/sections/CTABand";
import { ShopifyWork } from "@/components/sections/ShopifyWork";
import { ECOM } from "@/lib/services";

export const metadata: Metadata = {
  title: "E-commerce Services",
  description: "Amazon FBA Wholesale, Walmart 2-Step Dropshipping, eBay Dropshipping, Etsy Digital Products and Shopify Store Designing from Omnify X Technologies.",
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="E-commerce Division" title={<>E-commerce solutions for <span className="grad-text">modern sellers.</span></>} text="Five services covering the marketplaces and storefronts entrepreneurs use to build online businesses.">
        <div className="flex flex-wrap gap-2">
          {ECOM.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:border-emerald hover:text-emerald-deep">{s.title}</a>
          ))}
        </div>
      </PageHero>
      <div className="container-x py-16 sm:py-24"><ServiceDetails services={ECOM} /></div>
      <ShopifyWork />
      <CTABand title="Ready to start selling online?" text="Tell us which marketplace or store model you are interested in and we will get back to you." />
    </>
  );
}
