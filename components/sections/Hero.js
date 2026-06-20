import { hero, heroFeatures } from "@/lib/siteData";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";
import Icon from "@/components/ui/Icon";
import HeroIllustration from "@/components/sections/HeroIllustration";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-dark to-[#1a3a28] px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:min-h-screen lg:px-8 lg:pb-20 lg:pt-[100px]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[length:36px_36px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -top-20 h-[min(500px,80vw)] w-[min(500px,80vw)] rounded-full bg-teal/20 blur-[80px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 left-[15%] h-[min(350px,60vw)] w-[min(350px,60vw)] rounded-full bg-blue-900/25 blur-[80px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-container grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <FadeUp className="order-2 text-center lg:order-1 lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/15 px-3.5 py-1.5 text-[0.65rem] font-medium uppercase tracking-wider text-teal-glow sm:mb-7 sm:px-4 sm:text-xs">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-teal-glow" />
            {hero.badge}
          </div>
          <h1 className="mb-5 text-[clamp(2rem,8vw,4.2rem)] font-bold leading-[1.1] tracking-tight text-white sm:mb-6">
            {hero.title}
            <br />
            <span className="bg-gradient-to-br from-teal-light to-teal-glow bg-clip-text text-transparent">
              {hero.titleHighlight}
            </span>
          </h1>
          <p className="mx-auto mb-6 max-w-md text-base font-light leading-relaxed text-white/60 sm:mb-7 sm:text-[1.05rem] lg:mx-0">
            {hero.description}
          </p>

          <ul className="mb-7 flex list-none flex-col items-center gap-2.5 sm:mb-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-3 lg:items-start lg:justify-start">
            {heroFeatures.map((feature) => (
              <li key={feature.label} className="flex items-center gap-2 text-sm text-white/75">
                <Icon name={feature.icon} size={18} className="text-teal-glow" />
                <span>{feature.label}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button href="#services" className="w-full sm:w-auto">
              Explore Services
              <Icon name="arrowRight" size={18} />
            </Button>
            <Button href="#contact" variant="outline" className="w-full sm:w-auto">
              Contact Us
            </Button>
          </div>
        </FadeUp>

        <FadeUp className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <HeroIllustration />
        </FadeUp>
      </div>
    </section>
  );
}
