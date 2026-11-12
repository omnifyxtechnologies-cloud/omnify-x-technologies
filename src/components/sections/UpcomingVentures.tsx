import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { VentureCards } from "../VentureCards";

export function UpcomingVentures() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 sm:py-28">
      <div className="grid-bg-dark absolute inset-0 opacity-40" aria-hidden />
      <div className="drift absolute -left-24 top-10 h-80 w-80 rounded-full bg-emerald/20 blur-3xl" aria-hidden />
      <div className="drift-b absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-violet/30 blur-3xl" aria-hidden />
      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading dark eyebrow="Upcoming Ventures" title="Beyond Today. Building Tomorrow." />
          <Reveal><Button href="/ventures/" variant="light">View All Ventures</Button></Reveal>
        </div>
        <div className="mt-14"><VentureCards /></div>
      </div>
    </section>
  );
}
