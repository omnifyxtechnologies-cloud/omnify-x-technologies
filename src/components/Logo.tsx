import Link from "next/link";
import Image from "next/image";

export function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Omnify X Technologies — home" className="inline-flex shrink-0">
      <Image src="/brand/logo-full.png" alt="Omnify X Technologies" width={1230} height={902} priority className={className} />
    </Link>
  );
}
