import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./ui/Icons";
import { SITE } from "@/lib/site";
import { ECOM, CONSULT } from "@/lib/services";

const col = "text-sm text-muted transition-colors hover:text-violet-deep";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo className="h-24 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            Omnify X Technologies is a multi-venture company bringing together e-commerce solutions, international business consultancy and emerging ventures for entrepreneurs.
          </p>
        </div>

        <nav aria-label="Quick links" className="lg:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal">Company</h3>
          <ul className="mt-5 space-y-3">
            {[["Home", "/"], ["About Us", "/about/"], ["E-commerce", "/ecommerce/"], ["Software", "/software/"], ["Consultancy", "/consultancy/"], ["Our Ventures", "/ventures/"], ["Contact Us", "/contact/"]].map(([l, h]) => (
              <li key={h}><Link href={h} className={col}>{l}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services" className="lg:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal">Services</h3>
          <ul className="mt-5 space-y-3">
            {ECOM.map((s) => <li key={s.id}><Link href={`/ecommerce/#${s.id}`} className={col}>{s.title}</Link></li>)}
            <li><Link href="/software/#portals" className={col}>SaaS Management Portals</Link></li>
            <li><Link href="/software/#web-development" className={col}>Web Development</Link></li>
            {CONSULT.map((s) => <li key={s.id}><Link href={`/consultancy/#${s.id}`} className={col}>{s.title}</Link></li>)}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal">Upcoming Ventures</h3>
          <ul className="mt-5 space-y-3">
            <li><Link href="/ventures/#temp-number" className={col}>Temp Number Marketplace</Link></li>
            <li><Link href="/ventures/#cafe-workspace" className={col}>Cafe &amp; Workspace</Link></li>
          </ul>
          <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href={SITE.phoneHref} className={`${col} inline-flex items-center gap-2`}><Phone size={15} aria-hidden /> {SITE.phoneDisplay}</a></li>
            <li><a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className={`${col} inline-flex items-center gap-2`}><WhatsAppIcon size={15} /> WhatsApp chat</a></li>
            <li><a href={`mailto:${SITE.email}`} className={`${col} inline-flex items-center gap-2 break-all`}><Mail size={15} aria-hidden /> {SITE.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Omnify X Technologies. All rights reserved.</p>
          <p className="flex gap-5">
            <Link href="/privacy-policy/" className="hover:text-violet-deep">Privacy Policy</Link>
            <Link href="/terms-and-conditions/" className="hover:text-violet-deep">Terms &amp; Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
