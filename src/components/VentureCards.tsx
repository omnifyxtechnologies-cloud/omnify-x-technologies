import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { TempNumberVisual, CafeVisual } from "./VentureVisuals";

function Badge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-violet-soft px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-violet-deep">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet" /> Coming Soon
    </span>
  );
}

export function VentureCards({ id = false }: { id?: boolean }) {
  const items = [
    {
      anchor: "temp-number", n: "Venture 01", title: "Omnify X Temp Number Marketplace",
      text: "An upcoming marketplace focused on temporary phone number services.",
      visual: <TempNumberVisual />, subject: "Omnify X Temp Number Marketplace - Stay updated",
    },
    {
      anchor: "cafe-workspace", n: "Venture 02", title: "Omnify X Cafe & Workspace",
      text: "An upcoming cafe and coworking space designed for freelancers, entrepreneurs, remote workers, and creative professionals.",
      visual: <CafeVisual />, subject: "Omnify X Cafe & Workspace - Stay updated",
    },
  ];
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {items.map((v, i) => (
        <Reveal key={v.anchor} delay={i * 0.1}>
          <article id={id ? v.anchor : undefined} className="card card-hover flex h-full scroll-mt-28 flex-col overflow-hidden">
            <div className="h-72">{v.visual}</div>
            <div className="flex flex-1 flex-col p-7 sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{v.n}</span>
                <Badge />
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-charcoal sm:text-2xl">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{v.text}</p>
              <div className="mt-auto pt-7">
                <Button href={`/contact/?subject=${encodeURIComponent(v.subject)}`} variant="secondary">Notify Me</Button>
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
