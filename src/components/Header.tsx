"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState<string | null>(null);
  const path = usePathname();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => { setOpen(false); setSub(null); }, [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const active = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-line bg-white/90 shadow-sm backdrop-blur-lg" : "bg-white/70 backdrop-blur-sm"}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-charcoal focus:px-4 focus:py-2 focus:text-white">Skip to content</a>
      <div className={`container-x flex items-center justify-between transition-all duration-300 ${scrolled ? "h-[76px]" : "h-[92px]"}`}>
        <Logo className={`w-auto transition-all duration-300 ${scrolled ? "h-[4.25rem]" : "h-20"}`} />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const children = "children" in item ? item.children : undefined;
            return (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  aria-current={active(item.href) ? "page" : undefined}
                  className={`flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium transition-colors hover:text-violet-deep ${active(item.href) ? "text-emerald-deep" : "text-charcoal"}`}
                >
                  {item.label}
                  {children && <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden />}
                </Link>
                {children && (
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="min-w-[17rem] rounded-xl border border-line bg-white p-2 shadow-xl shadow-charcoal/10">
                      {children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="block rounded-lg px-3.5 py-2.5 text-sm text-charcoal transition-colors hover:bg-emerald-soft hover:text-emerald-deep">{c.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact/" className="hidden rounded-lg bg-charcoal px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-deep hover:shadow-lg hover:shadow-emerald/25 sm:inline-flex">
            Let&rsquo;s Talk
          </Link>
          <button
            type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-lg border border-line text-charcoal lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="fixed inset-x-0 bottom-0 top-[76px] overflow-y-auto bg-white lg:hidden">
          <nav aria-label="Mobile" className="container-x py-6">
            <ul className="divide-y divide-line">
              {NAV.map((item) => {
                const children = "children" in item ? item.children : undefined;
                return (
                  <li key={item.label} className="py-1">
                    <div className="flex items-center justify-between">
                      <Link href={item.href} className={`flex-1 py-3.5 text-lg font-medium ${active(item.href) ? "text-emerald-deep" : "text-charcoal"}`}>{item.label}</Link>
                      {children && (
                        <button type="button" aria-label={`Toggle ${item.label} menu`} aria-expanded={sub === item.label} onClick={() => setSub(sub === item.label ? null : item.label)} className="grid h-11 w-11 place-items-center text-muted">
                          <ChevronDown size={18} className={`transition-transform ${sub === item.label ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>
                    {children && sub === item.label && (
                      <ul className="mb-3 ml-3 border-l-2 border-emerald/40 pl-4">
                        {children.map((c) => (
                          <li key={c.href}><Link href={c.href} className="block py-2.5 text-sm text-muted hover:text-violet-deep">{c.label}</Link></li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <Link href="/contact/" className="mt-6 flex w-full justify-center rounded-lg bg-charcoal px-5 py-4 text-sm font-semibold text-white">Let&rsquo;s Talk</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
