import { WhatsAppIcon } from "./ui/Icons";
import { SITE } from "@/lib/site";

export function FloatingContact() {
  return (
    <a
      href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Omnify X on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-emerald text-white shadow-lg shadow-emerald/30 transition-transform duration-300 hover:scale-105 hover:bg-emerald-deep"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}
