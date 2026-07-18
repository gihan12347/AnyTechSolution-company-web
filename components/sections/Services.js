"use client";

import { useEffect, useRef, useState } from "react";
import { servicesSection } from "@/lib/siteData";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeUp from "@/components/ui/FadeUp";
import cn from "@/lib/cn";

function AccordionItem({ category, open, onToggle }) {
  const bodyRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);
  const areaCount = category.areas.length;

  useEffect(() => {
    const updateHeight = () => {
      if (!bodyRef.current) return;
      setMaxHeight(open ? bodyRef.current.scrollHeight : 0);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [open, category]);

  return (
    <div className={cn("border-b border-navy/10", open && "bg-teal/[0.02]")}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="grid w-full grid-cols-[1fr_auto] items-center gap-3 px-1 py-5 text-left transition-colors hover:bg-teal/[0.03] sm:grid-cols-[48px_1fr_auto_28px] sm:gap-5 sm:py-6"
      >
        <span
          className={cn(
            "hidden font-mono text-xs tracking-wider sm:block",
            open ? "font-semibold text-teal" : "text-muted/60"
          )}
        >
          {category.id}
        </span>

        <span className="min-w-0">
          <span className="block text-base font-semibold tracking-tight text-navy sm:text-[1.25rem]">
            {category.title}
          </span>
          <span className="mt-1 block text-sm font-light text-muted">
            {category.subtitle}
          </span>
        </span>

        <span className="hidden whitespace-nowrap font-mono text-xs text-muted/60 sm:block">
          {areaCount} {areaCount === 1 ? "area" : "areas"}
        </span>

        <span
          className={cn(
            "flex h-7 w-7 shrink-0 items-center justify-center text-teal transition-transform duration-300",
            open && "rotate-45"
          )}
          aria-hidden="true"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 1V15M1 8H15"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <div
        className="overflow-hidden transition-[max-height] duration-300 ease-out"
        style={{ maxHeight }}
      >
        <div
          ref={bodyRef}
          className="grid grid-cols-1 gap-6 px-1 pb-7 pt-1 sm:grid-cols-2 sm:gap-8 sm:pl-16 lg:gap-10"
        >
          {category.areas.map((area) => (
            <div key={area.title}>
              <h4 className="mb-3 border-b border-navy/10 pb-2 text-xs font-semibold uppercase tracking-wider text-navy">
                {area.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {area.items.map((item) => (
                  <li
                    key={item}
                    className="relative pl-4 text-sm font-light leading-relaxed text-muted before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-sm before:bg-teal"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="services" className="bg-slate-50 py-10 sm:py-12 md:py-14">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionHeader
            tag={servicesSection.tag}
            title={servicesSection.title}
            subtitle={servicesSection.subtitle}
          />
        </FadeUp>

        <FadeUp>
          <div className="border-t border-navy/10">
            {servicesSection.categories.map((category) => (
              <AccordionItem
                key={category.id}
                category={category}
                open={openId === category.id}
                onToggle={() =>
                  setOpenId((current) => (current === category.id ? null : category.id))
                }
              />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
