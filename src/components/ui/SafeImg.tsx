"use client";
import { useCallback, useState, type ReactNode } from "react";

/** Image that shows `fallback` when no src is given or the file is missing (so a not-yet-uploaded image never shows a broken icon). */
export function SafeImg({ src, alt, className, fallback }: { src?: string; alt: string; className?: string; fallback: ReactNode }) {
  const [failed, setFailed] = useState(false);
  // The server-rendered <img> can fail before React hydrates, so also check on mount.
  const ref = useCallback((el: HTMLImageElement | null) => {
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);
  if (!src || failed) return <>{fallback}</>;
  // eslint-disable-next-line @next/next/no-img-element
  return <img ref={ref} src={src} alt={alt} className={className} loading="lazy" onError={() => setFailed(true)} />;
}
