"use client";
import Link from "next/link";
import type { ReactNode, MouseEvent } from "react";

export function GlowCard({ children, className = "", href }: { children: ReactNode; className?: string; href?: string }) {
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const cls = `glow-card ${className}`;
  return href ? (
    <Link href={href} onMouseMove={onMove} className={cls}>{children}</Link>
  ) : (
    <div onMouseMove={onMove} className={cls}>{children}</div>
  );
}
