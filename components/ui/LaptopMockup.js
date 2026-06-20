"use client";

import { useState } from "react";
import Image from "next/image";
import cn from "@/lib/cn";

export default function LaptopMockup({
  screens,
  projectName,
  websiteUrl,
  websiteLabel,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreen = screens[activeIndex];
  const hasTabs = screens.length > 1;
  const urlLabel =
    websiteLabel ||
    (websiteUrl
      ? new URL(websiteUrl).hostname
      : `${projectName.toLowerCase().replace(/\s+/g, "")}.app`);

  return (
    <figure className="laptop-scene" aria-label={`${projectName} preview`}>
      <div className="laptop-scene__stage">
        <div className="laptop-device">
          <div className="laptop-device__lid">
            <div className="laptop-device__camera" aria-hidden="true" />
            <div className="laptop-device__screen">
              <div className="laptop-device__viewport">
                <Image
                  key={activeScreen.src}
                  src={activeScreen.src}
                  alt={activeScreen.alt}
                  width={1440}
                  height={900}
                  className="laptop-device__image"
                  priority={activeIndex === 0}
                />
              </div>
            </div>
          </div>

          <div className="laptop-device__hinge" aria-hidden="true" />

          <div className="laptop-device__base" aria-hidden="true" />
        </div>

        <div className="laptop-scene__shadow" aria-hidden="true" />
      </div>

      <figcaption className="mt-2 flex flex-col items-center gap-3.5">
        {websiteUrl ? (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium tracking-wide text-teal no-underline transition-colors hover:text-teal-light hover:underline"
          >
            {urlLabel}
          </a>
        ) : (
          <span className="text-sm font-medium tracking-wide text-teal">{urlLabel}</span>
        )}

        {hasTabs && (
          <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Project screens">
            {screens.map((screen, index) => (
              <button
                key={screen.label}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                className={cn(
                  "cursor-pointer rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-200",
                  index === activeIndex
                    ? "border-teal/45 bg-teal-pale text-teal"
                    : "border-navy/10 bg-white text-muted hover:border-teal/30 hover:text-navy"
                )}
                onClick={() => setActiveIndex(index)}
              >
                {screen.label}
              </button>
            ))}
          </div>
        )}
      </figcaption>
    </figure>
  );
}
