import { hero, heroFeatures, heroSlides } from "@/lib/siteData";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";
import Icon from "@/components/ui/Icon";
import HeroSlideshow from "@/components/sections/HeroSlideshow";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-20 lg:pt-[100px]"
    >
      <HeroSlideshow slides={heroSlides} />

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-navy via-navy/85 to-navy-dark/70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[length:36px_36px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        <FadeUp className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/15 px-3.5 py-1.5 text-[0.65rem] font-medium uppercase tracking-wider text-teal-glow sm:mb-7 sm:px-4 sm:text-xs">
          <span className="h-1.5 w-1.5 animate-blink rounded-full bg-teal-glow" />
          {hero.badge}
        </FadeUp>
        <FadeUp delay={90}>
          <h1 className="mb-5 text-[clamp(2rem,8vw,4.2rem)] font-bold leading-[1.1] tracking-tight text-white sm:mb-6">
            {hero.title}
            <br />
            <span className="text-teal-glow">{hero.titleHighlight}</span>
          </h1>
        </FadeUp>
        <FadeUp delay={180}>
          <p className="mx-auto mb-6 max-w-xl text-base font-light leading-relaxed text-white/70 sm:mb-7 sm:text-[1.05rem]">
            {hero.description}
          </p>
        </FadeUp>

        <FadeUp delay={300}>
          <ul className="mb-7 flex list-none flex-col items-center gap-2.5 sm:mb-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-3">
            {heroFeatures.map((feature) => (
              <li key={feature.label} className="flex items-center gap-2 text-sm text-white/80">
                <Icon name={feature.icon} size={18} className="text-teal-glow" />
                <span>{feature.label}</span>
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp delay={420}>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href="#services" className="w-full sm:w-auto">
              Explore Services
              <Icon name="arrowRight" size={16} />
            </Button>
            <Button href="#contact" variant="outline" className="w-full px-6 py-3 sm:w-auto">
              Contact Us
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
