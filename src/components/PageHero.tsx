import { Reveal } from "./ui/Reveal";

export function PageHero({ eyebrow, title, text, children }: { eyebrow: string; title: React.ReactNode; text?: string; children?: React.ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-white">
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden />
      <div className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-violet/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-40 left-0 -z-10 h-80 w-80 rounded-full bg-emerald/10 blur-3xl" aria-hidden />
      <div className="container-x py-16 sm:py-24">
        <Reveal y={16}>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h-display mt-4 max-w-3xl text-4xl text-charcoal sm:text-5xl lg:text-[3.4rem]">{title}</h1>
          {text && <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{text}</p>}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
