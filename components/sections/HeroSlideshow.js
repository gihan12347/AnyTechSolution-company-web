"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";

const AUTOPLAY_MS = 3000;

export default function HeroSlideshow({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return undefined;

    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(id);
  }, [slides.length]);

  const goToSlide = (index) => setActiveIndex(index);
  const goToOffset = (offset) =>
    setActiveIndex((current) => (current + offset + slides.length) % slides.length);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={slide.src}
            className={`absolute inset-0 overflow-hidden transition-opacity duration-[1500ms] ease-in-out motion-reduce:transition-none ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              key={`${slide.src}-${isActive}`}
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover ${isActive ? "animate-kenburns" : ""} motion-reduce:animate-none motion-reduce:scale-100`}
            />
          </div>
        );
      })}

      {slides.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => goToOffset(-1)}
            className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-navy/40 p-2 text-white/80 backdrop-blur-md transition-colors hover:bg-navy/60 hover:text-white sm:left-5 sm:inline-flex"
          >
            <Icon name="arrowRight" size={20} className="rotate-180" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => goToOffset(1)}
            className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-navy/40 p-2 text-white/80 backdrop-blur-md transition-colors hover:bg-navy/60 hover:text-white sm:right-5 sm:inline-flex"
          >
            <Icon name="arrowRight" size={20} />
          </button>

          <div
            className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2"
            role="tablist"
            aria-label="Hero slides"
          >
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-6 bg-teal-glow" : "w-2 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
