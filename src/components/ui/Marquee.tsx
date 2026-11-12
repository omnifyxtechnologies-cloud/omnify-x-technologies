import type { ReactNode } from "react";

export function Marquee({ children, className = "", speed = "", reverse = false }: { children: ReactNode; className?: string; speed?: "fast" | ""; reverse?: boolean }) {
  return (
    <div className={`marquee ${className}`} aria-hidden>
      <div className={`marquee-track ${speed} ${reverse ? "rev" : ""}`}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center">{children}</div>
      </div>
    </div>
  );
}
