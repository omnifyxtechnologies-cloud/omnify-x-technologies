import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { VentureCards } from "../VentureCards";

export function UpcomingVentures() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Upcoming Ventures" title="Beyond Today. Building Tomorrow." text="Two new ventures are on the way, extending Omnify X into technology services and a physical space for independent professionals." />
          <Reveal><Button href="/ventures/" variant="secondary">View All Ventures</Button></Reveal>
        </div>
        <div className="mt-14"><VentureCards /></div>
      </div>
    </section>
  );
}
