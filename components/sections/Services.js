"use client";

import { useState } from "react";
import { servicesSection } from "@/lib/siteData";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeUp from "@/components/ui/FadeUp";
import Icon from "@/components/ui/Icon";
import cn from "@/lib/cn";

function ServiceCard({ icon, title, description, items }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-6 shadow-card transition-all duration-300 sm:p-8 lg:p-9",
        open
          ? "border-teal/50 shadow-card-hover"
          : "border-navy/10 hover:-translate-y-1 hover:border-teal/40 hover:shadow-card-hover"
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? `Hide details for ${title}` : `Show details for ${title}`}
        className={cn(
          "mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] border transition-all duration-300 sm:mb-6 sm:h-[52px] sm:w-[52px]",
          open
            ? "scale-105 border-teal bg-teal text-white shadow-glow"
            : "border-teal/25 bg-gradient-to-br from-teal/10 to-blue-900/5 text-teal hover:border-teal/50 hover:bg-teal/15"
        )}
      >
        <Icon name={icon} size={26} />
      </button>

      <h3 className="mb-2 text-base font-bold text-navy sm:mb-3 sm:text-lg">{title}</h3>

      <p
        className={cn(
          "text-sm font-light leading-relaxed text-muted transition-all duration-300",
          !open && "line-clamp-3"
        )}
      >
        {description}
      </p>

      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "mt-4 grid-rows-[1fr] opacity-100 sm:mt-5" : "mt-0 grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-2 border-t border-navy/10 pt-4">
            {items.map((item) => (
              <li
                key={item}
                className="relative pl-4 text-[0.8rem] text-muted before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-teal sm:text-[0.82rem]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="mt-4 inline-flex items-center gap-1.5 self-start text-xs font-semibold uppercase tracking-wider text-teal transition-colors hover:text-teal-light"
      >
        {open ? "Show less" : "View details"}
        <Icon
          name="arrowRight"
          size={14}
          className={cn("transition-transform duration-300", open && "rotate-90")}
        />
      </button>
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
