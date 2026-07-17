import Image from "next/image";

export default function HeroIllustration() {
  return (
    <div className="group relative w-full animate-hero-in">
      <div
        className="pointer-events-none absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-teal/30 via-cyan-500/10 to-blue-600/25 opacity-80 blur-2xl transition-opacity duration-500 group-hover:opacity-100 sm:-inset-5"
        aria-hidden="true"
      />

      <figure className="relative animate-hero-float overflow-hidden rounded-xl border border-white/15 bg-[#0b1624] shadow-[0_28px_70px_rgba(0,0,0,0.5)] transition-shadow duration-500 group-hover:shadow-[0_32px_80px_rgba(43,138,110,0.25)] sm:rounded-2xl">
        <Image
          src="/hero-banner.png"
          alt="AnyTech Solution — Software Development, IT Hardware & Infrastructure, Networking & Cloud Solutions"
          width={1920}
          height={900}
          priority
          sizes="(max-width: 1024px) 100vw, 640px"
          className="h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </figure>
    </div>
  );
}
