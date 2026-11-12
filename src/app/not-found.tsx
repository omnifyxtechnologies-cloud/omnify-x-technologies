import { Button } from "@/components/ui/Button";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden />
      <div className="container-x grid min-h-[60vh] place-items-center py-24 text-center">
        <div>
          <p className="grad-text text-8xl font-semibold tracking-tighter sm:text-9xl">404</p>
          <h1 className="mt-4 text-2xl font-semibold text-charcoal sm:text-3xl">This page doesn&rsquo;t exist.</h1>
          <p className="mx-auto mt-3 max-w-md text-muted">The page you are looking for may have moved or never existed. Let&rsquo;s get you back on track.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/">Back to Home</Button>
            <Button href="/contact/" variant="secondary">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
