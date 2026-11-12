import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Divisions } from "@/components/sections/Divisions";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyOmnify } from "@/components/sections/WhyOmnify";
import { UpcomingVentures } from "@/components/sections/UpcomingVentures";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: { absolute: "Omnify X Technologies | E-commerce, Consultancy & Emerging Ventures" },
  description: "Omnify X Technologies brings together e-commerce solutions, international business consultancy and emerging ventures to help entrepreneurs build, operate and grow.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Divisions />
      <ServicesGrid />
      <WhyOmnify />
      <UpcomingVentures />
      <CTABand />
    </>
  );
}
