import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow, title, text, center = false, dark = false,
}: { eyebrow?: string; title: string; text?: string; center?: boolean; dark?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-4xl"}>
      {eyebrow && <p className={`eyebrow ${dark ? "!text-emerald" : ""}`}>{eyebrow}</p>}
      <h2 className={`h-section mt-3 ${dark ? "text-white" : "text-charcoal"}`}>{title}</h2>
      {text && <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? "text-white/70" : "text-muted"}`}>{text}</p>}
    </Reveal>
  );
}
