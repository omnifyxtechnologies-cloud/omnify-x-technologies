import { Smartphone, Wifi } from "lucide-react";

export function TempNumberVisual() {
  return (
    <div className="relative grid h-full min-h-[18rem] place-items-center overflow-hidden bg-charcoal" aria-hidden>
      <div className="grid-bg-dark absolute inset-0" />
      <div className="absolute -left-10 top-0 h-56 w-56 rounded-full bg-emerald/25 blur-3xl" />
      <div className="absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-violet/30 blur-3xl" />
      <div className="relative">
        <span className="pulse-ring absolute inset-0 rounded-[2rem] border border-emerald/60" />
        <span className="pulse-ring absolute inset-0 rounded-[2rem] border border-violet/60" style={{ animationDelay: "1.2s" }} />
        <div className="floaty relative w-44 rounded-[2rem] border border-white/15 bg-gradient-to-b from-white/10 to-white/[0.03] p-4 shadow-2xl backdrop-blur">
          <div className="mx-auto h-1.5 w-12 rounded-full bg-white/20" />
          <div className="mt-6 flex items-center justify-between text-white/60">
            <Smartphone size={16} /><Wifi size={16} />
          </div>
          <div className="mt-7 space-y-2.5">
            <div className="h-2.5 w-4/5 rounded-full bg-white/15" />
            <div className="h-2.5 w-3/5 rounded-full bg-white/10" />
          </div>
          <div className="mt-8 rounded-xl bg-gradient-to-r from-emerald to-violet p-3 text-center text-[0.7rem] font-semibold tracking-wider text-white">+ · · · · · · · · · ·</div>
          <div className="mt-4 h-8 rounded-lg border border-white/10" />
        </div>
      </div>
    </div>
  );
}

export function CafeVisual() {
  return (
    <div className="relative grid h-full min-h-[18rem] place-items-center overflow-hidden bg-[#f3ece2]" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f2e9] via-[#efe5d6] to-[#e6d8c3]" />
      <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full bg-emerald/15 blur-3xl" />
      <svg viewBox="0 0 320 240" className="relative w-full max-w-[22rem] px-6" fill="none" stroke="#20262f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* pendant lamps */}
        <path d="M70 0v38M160 0v52M250 0v38" strokeOpacity=".5" />
        <path d="M52 38h36l-6 20H58z" fill="#f4c98a" fillOpacity=".7" />
        <path d="M140 52h40l-7 22h-26z" fill="#f4c98a" fillOpacity=".7" />
        <path d="M232 38h36l-6 20h-24z" fill="#f4c98a" fillOpacity=".7" />
        {/* table */}
        <path d="M24 176h272" strokeWidth="3" />
        <path d="M60 176v52M260 176v52" />
        {/* laptop */}
        <path d="M96 176l6-52h76l6 52" />
        <path d="M110 138h58" stroke="#00c48f" strokeWidth="3" />
        <path d="M110 150h38" stroke="#9146e8" strokeWidth="3" />
        {/* cups */}
        <path d="M210 176v-26h30v26z" fill="#fff" />
        <path d="M240 156h8a7 7 0 0 1 0 14h-8" />
        <path d="M218 140c0-6 6-6 6-12M229 140c0-6 6-6 6-12" strokeOpacity=".5" />
        <path d="M262 176v-18h22v18z" fill="#fff" />
      </svg>
    </div>
  );
}
