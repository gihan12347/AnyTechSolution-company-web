import { servicesSection } from "@/lib/siteData";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeUp from "@/components/ui/FadeUp";
import Icon from "@/components/ui/Icon";

function ServiceCard({ icon, title, description, items }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-card-hover sm:p-8 lg:p-9">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] border border-teal/25 bg-gradient-to-br from-teal/10 to-blue-900/5 text-teal sm:mb-6 sm:h-[52px] sm:w-[52px]">
        <Icon name={icon} size={26} />
      </div>
      <h3 className="mb-2 text-base font-bold text-navy sm:mb-3 sm:text-lg">{title}</h3>
      <p className="text-sm font-light leading-relaxed text-muted">{description}</p>
      <ul className="mt-4 flex flex-col gap-2 sm:mt-5">
        {items.map((item) => (
          <li
            key={item}
            className="relative pl-4 text-[0.8rem] text-muted before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-teal sm:text-[0.82rem]"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-12 sm:py-16 md:py-20 lg:py-[clamp(4rem,8vw,5.625rem)]">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionHeader
            tag={servicesSection.tag}
            title={servicesSection.title}
            subtitle={servicesSection.subtitle}
          />
        </FadeUp>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
          {servicesSection.services.map((service) => (
            <FadeUp key={service.title}>
              <ServiceCard {...service} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
