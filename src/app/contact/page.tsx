import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Omnify X Technologies by phone, WhatsApp, email or the contact form.",
};

export default function Page() {
  const items = [
    { icon: Phone, label: "Call us", value: SITE.phoneDisplay, href: SITE.phoneHref, ext: false },
    { icon: WhatsAppIcon, label: "WhatsApp", value: "Chat on WhatsApp", href: SITE.whatsapp, ext: true },
    { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, ext: false },
  ];
  return (
    <>
      <PageHero eyebrow="Contact Us" title={<>Let&rsquo;s talk about <span className="grad-text">what you&rsquo;re building.</span></>} text="Reach out by phone, WhatsApp or email, or send us a message using the form." />
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <Reveal className="space-y-4 lg:col-span-5">
            {items.map(({ icon: I, label, value, href, ext }) => (
              <a key={label} href={href} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="card card-hover group flex items-center gap-5 p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-emerald-soft text-emerald-deep transition-colors group-hover:bg-violet-soft group-hover:text-violet-deep"><I size={22} /></span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted">{label}</span>
                  <span className="block break-words text-base font-semibold text-charcoal">{value}</span>
                </span>
              </a>
            ))}
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="card p-7 sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-charcoal">Send us a message</h2>
              <p className="mb-8 mt-2 text-sm text-muted">All fields are required.</p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
