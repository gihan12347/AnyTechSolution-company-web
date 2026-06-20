import { supportSection } from "@/lib/siteData";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";
import Icon from "@/components/ui/Icon";

function SupportFeature({ icon, title, description, items }) {
  return (
    <div className="flex gap-4 border-b border-navy/10 py-5 last:border-b-0 sm:gap-5 sm:py-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-pale text-teal sm:h-11 sm:w-11">
        <Icon name={icon} size={22} />
      </div>
      <div className="min-w-0">
        <h4 className="mb-1 text-base font-bold text-navy sm:mb-1.5 sm:text-lg">{title}</h4>
        <p className="text-sm font-light leading-relaxed text-muted">{description}</p>
        <ul className="mt-2.5 flex flex-col gap-1.5 sm:mt-3">
          {items.map((item) => (
            <li
              key={item}
              className="relative pl-4 text-[0.8rem] text-muted before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-teal sm:text-[0.82rem]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Support() {
  const { card } = supportSection;

  return (
    <section id="support" className="bg-slate-50 py-12 sm:py-16 md:py-20 lg:py-[clamp(4rem,8vw,5.625rem)]">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionHeader
            tag={supportSection.tag}
            title={supportSection.title}
            subtitle={supportSection.subtitle}
          />
        </FadeUp>

        <div className="grid items-start gap-8 md:gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            {supportSection.features.map((feature) => (
              <FadeUp key={feature.title}>
                <SupportFeature {...feature} />
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-navy-dark to-[#1b3a2a] p-6 text-white shadow-2xl sm:rounded-3xl sm:p-8 lg:sticky lg:top-24 lg:p-12">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-teal/20 blur-3xl" />
              <h3 className="relative mb-3 text-xl font-bold leading-snug sm:mb-4 sm:text-2xl">
                {card.title.split("\n").map((line, index) => (
                  <span key={line}>
                    {index > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h3>
              <p className="relative mb-6 text-sm font-light leading-relaxed text-white/60 sm:mb-8">
                {card.description}
              </p>
              <div className="relative mb-6 flex flex-col gap-3 sm:mb-8 sm:gap-4">
                {card.availability.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-2 w-2 shrink-0 rounded-full bg-teal-light shadow-[0_0_8px_#3aab87]" />
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
              <Button href="#contact" fullWidth>
                {card.cta}
                <Icon name="arrowRight" size={18} />
              </Button>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
