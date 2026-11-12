import Link from "next/link";
import type { ReactNode, AnchorHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "light";
const base =
  "group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-offset-2";
const styles: Record<Variant, string> = {
  primary: "bg-charcoal text-white hover:bg-emerald-deep hover:shadow-lg hover:shadow-emerald/25",
  secondary: "border border-charcoal/20 bg-white text-charcoal hover:border-violet hover:text-violet-deep",
  ghost: "text-charcoal hover:text-violet-deep",
  light: "bg-white text-charcoal hover:bg-emerald hover:text-white",
};

export function Button({
  href, children, variant = "primary", arrow = true, className = "", ...rest
}: { href: string; children: ReactNode; variant?: Variant; arrow?: boolean; className?: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const cls = `${base} ${styles[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />}
    </>
  );
  const external = /^(https?:|mailto:|tel:)/.test(href);
  if (external) {
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {content}
      </a>
    );
  }
  return <Link href={href} className={cls} {...rest}>{content}</Link>;
}
