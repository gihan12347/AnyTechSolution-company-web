import { visionSection } from "@/lib/siteData";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeUp from "@/components/ui/FadeUp";
import Icon from "@/components/ui/Icon";

function VMCard({ icon, title, description }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-card-hover sm:p-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal to-blue-700" />
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-pale text-teal sm:mb-5">
        <Icon name={icon} size={24} />
      </div>
      <h3 className="mb-2 text-lg font-bold text-navy sm:mb-3 sm:text-xl">{title}</h3>
      <p className="text-sm font-light leading-relaxed text-muted">{description}</p>
    </article>
  );
}

export default function VisionMission() {
  return (
    <section id="vision" className="border-t border-navy/10 bg-white py-12 sm:py-16 md:py-20 lg:py-[clamp(4rem,8vw,5.625rem)]">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionHeader
            tag={visionSection.tag}
            title={visionSection.title}
            subtitle={visionSection.subtitle}
          />
        </FadeUp>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visionSection.cards.map((card, index) => (
            <FadeUp
              key={card.title}
              className={index === 2 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <VMCard {...card} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
