import { hero, heroFeatures } from "@/lib/siteData";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";
import Icon from "@/components/ui/Icon";
import HeroIllustration from "@/components/sections/HeroIllustration";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-dark to-[#122a3d] px-4 pb-8 pt-20 sm:px-6 sm:pb-10 sm:pt-24 lg:px-8 lg:pb-12 lg:pt-[88px]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.035)_1px,transparent_0)] bg-[length:36px_36px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-0 h-[min(360px,55vw)] w-[min(360px,55vw)] rounded-full bg-teal/15 blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 left-0 h-[min(260px,45vw)] w-[min(260px,45vw)] rounded-full bg-blue-800/20 blur-[90px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-container flex-col gap-5 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-8 xl:gap-10">
        <FadeUp className="order-2 text-center lg:order-1 lg:text-left">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/15 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-teal-glow sm:mb-4 sm:px-3.5 sm:text-xs">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-teal-glow" />
            {hero.badge}
          </div>

          <h1 className="mb-3 text-[clamp(1.75rem,6vw,3.1rem)] font-bold leading-[1.1] tracking-tight text-white sm:mb-3.5">
            {hero.title}
            <br />
            <span className="bg-gradient-to-br from-teal-light to-teal-glow bg-clip-text text-transparent">
              {hero.titleHighlight}
            </span>
          </h1>

          <p className="mx-auto mb-4 max-w-lg text-sm font-light leading-relaxed text-white/65 sm:mb-5 sm:text-[0.95rem] lg:mx-0">
            {hero.description}
          </p>

          <ul className="mb-5 flex list-none flex-col items-center gap-2 sm:mb-5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-3 sm:gap-y-2 lg:justify-start">
            {heroFeatures.map((feature) => (
              <li
                key={feature.label}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80 sm:text-sm"
              >
                <Icon name={feature.icon} size={14} className="text-teal-glow" />
                <span>{feature.label}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
            <Button href="#services" className="w-full px-6 py-3 sm:w-auto">
              Explore Services
              <Icon name="arrowRight" size={16} />
            </Button>
            <Button href="#contact" variant="outline" className="w-full px-6 py-3 sm:w-auto">
              Contact Us
            </Button>
          </div>
        </FadeUp>

        <FadeUp className="order-1 w-full lg:order-2">
          <HeroIllustration />
        </FadeUp>
      </div>
    </section>
  );
}
