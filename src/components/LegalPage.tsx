import { PageHero } from "./PageHero";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} text={`Last updated: ${updated}`} />
      <section className="bg-white py-14 sm:py-20">
        <div className="container-x">
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted [&_a]:font-medium [&_a]:text-violet-deep [&_a]:underline [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-charcoal [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
