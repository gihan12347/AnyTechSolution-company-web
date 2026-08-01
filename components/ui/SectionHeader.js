import cn from "@/lib/cn";

export default function SectionHeader({
  title,
  subtitle,
  dark = false,
  centered = false,
}) {
  return (
    <div className={cn(centered && "text-center")}>
      <h2
        className={cn(
          "mb-3 text-[clamp(1.6rem,4vw,2.8rem)] font-bold leading-tight tracking-tight sm:mb-4",
          dark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mb-8 max-w-xl text-sm font-light leading-relaxed sm:mb-12 sm:text-base md:mb-14",
            centered && "mx-auto",
            dark ? "text-white/55" : "text-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
