import type { LucideIcon } from "lucide-react";
import { SafeImg } from "./SafeImg";

export function PlatformLogo({ name, logo, icon: Icon, size = "md" }: { name: string; logo?: string; icon: LucideIcon; size?: "md" | "lg" }) {
  const text = size === "lg" ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl";
  return (
    <SafeImg
      src={logo}
      alt={name}
      className={`${size === "lg" ? "h-12" : "h-9"} w-auto max-w-[11rem] object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0`}
      fallback={size === "lg" ? null : (
        <span className="flex items-center gap-3">
          <Icon size={26} className="text-charcoal/30 transition-colors group-hover:text-emerald" aria-hidden />
          <span className={`${text} font-semibold tracking-tight text-charcoal/35 transition-colors group-hover:text-charcoal`}>{name}</span>
        </span>
      )}
    />
  );
}
