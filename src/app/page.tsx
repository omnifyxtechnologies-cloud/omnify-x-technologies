import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { PlatformStrip } from "@/components/sections/PlatformStrip";
import { Intro } from "@/components/sections/Intro";
import { Divisions } from "@/components/sections/Divisions";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Stats } from "@/components/sections/Stats";
import { WhyOmnify } from "@/components/sections/WhyOmnify";
import { Proof } from "@/components/sections/Proof";
import { Journey } from "@/components/sections/Journey";
import { UpcomingVentures } from "@/components/sections/UpcomingVentures";
import { BigMarquee } from "@/components/sections/BigMarquee";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: { absolute: "Omnify X Technologies | E-commerce, Consultancy & Emerging Ventures" },
  description: "Omnify X Technologies brings together e-commerce solutions, international business consultancy and emerging ventures to help entrepreneurs build, operate and grow.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <PlatformStrip />
      <Intro />
      <Divisions />
      <ServicesGrid />
      <Stats />
      <WhyOmnify />
      <Proof />
      <Journey />
      <UpcomingVentures />
      <BigMarquee />
      <CTABand />
    </>
  );
}
