import Image from "next/image";

export default function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-[280px] py-4 sm:max-w-[360px] sm:py-6 md:max-w-[420px] lg:max-w-[460px]">
      <div
        className="pointer-events-none absolute inset-[10%_5%] bg-[radial-gradient(ellipse_at_center,rgba(43,138,110,0.25)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="absolute inset-x-[5%] bottom-[12%] top-[8%] animate-float-main rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-xl sm:p-2">
        <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" aria-hidden="true">
          <rect x="20" y="30" width="280" height="180" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
          <rect x="36" y="50" width="80" height="56" rx="8" fill="rgba(43,138,110,0.15)" stroke="rgba(58,171,135,0.4)" />
          <rect x="128" y="50" width="80" height="56" rx="8" fill="rgba(29,78,137,0.15)" stroke="rgba(37,99,196,0.35)" />
          <rect x="220" y="50" width="64" height="56" rx="8" fill="rgba(43,138,110,0.1)" stroke="rgba(58,171,135,0.3)" />
          <path d="M56 78h40M144 78h48M236 78h32" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" />
          <rect x="36" y="122" width="248" height="72" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" />
          <path d="M52 150h216" stroke="rgba(58,171,135,0.5)" strokeWidth="2" strokeLinecap="round" />
          <path d="M52 166h160" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
          <path d="M52 182h120" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="268" cy="150" r="16" fill="rgba(43,138,110,0.2)" stroke="#3aab87" strokeWidth="2" />
          <path d="M262 150l4 4 8-8" stroke="#5ecba5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="absolute right-1 top-1 flex animate-float-badge items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-[0.65rem] font-medium text-white/90 shadow-lg backdrop-blur-xl sm:right-2 sm:top-2 sm:gap-2 sm:rounded-xl sm:px-3 sm:py-2 sm:text-xs">
        <svg viewBox="0 0 48 48" fill="none" className="h-5 w-5 shrink-0 sm:h-8 sm:w-8" aria-hidden="true">
          <circle cx="24" cy="24" r="20" fill="rgba(43,138,110,0.2)" stroke="#3aab87" strokeWidth="1.5" />
          <path d="M24 14v10l6 4" stroke="#5ecba5" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="hidden sm:inline">24/7 Support</span>
      </div>

      <div className="absolute bottom-1 left-1 flex animate-float-badge items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-[0.65rem] font-medium text-white/90 shadow-lg backdrop-blur-xl [animation-delay:1.5s] sm:bottom-2 sm:left-2 sm:gap-2 sm:rounded-xl sm:px-3 sm:py-2 sm:text-xs">
        <svg viewBox="0 0 48 48" fill="none" className="h-5 w-5 shrink-0 sm:h-8 sm:w-8" aria-hidden="true">
          <path d="M24 8l14 8v12c0 8-14 14-14 14S10 36 10 28V16l14-8z" fill="rgba(29,78,137,0.2)" stroke="#2563c4" strokeWidth="1.5" />
          <path d="M18 24l4 4 8-8" stroke="#5ecba5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="hidden sm:inline">Secure IT</span>
      </div>

      <div className="absolute bottom-[22%] right-[10%] flex h-12 w-12 animate-float-logo items-center justify-center rounded-xl border border-white/15 bg-white/10 p-1.5 shadow-2xl backdrop-blur-md sm:h-16 sm:w-16 sm:rounded-2xl sm:p-2">
        <Image src="/logo.svg" alt="AnyTech Solution" width={56} height={56} className="h-full w-full" />
      </div>
    </div>
  );
}
