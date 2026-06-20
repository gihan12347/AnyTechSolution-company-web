import Link from "next/link";
import cn from "@/lib/cn";

const variants = {
  primary:
    "bg-teal text-white shadow-glow hover:bg-teal-light hover:-translate-y-0.5",
  outline:
    "border border-white/20 bg-transparent text-white/90 hover:border-white/40 hover:bg-white/5",
  nav: "bg-teal px-5 py-2.5 text-sm text-white shadow-glow hover:bg-teal-light",
  ghost:
    "border border-navy/10 bg-white text-navy shadow-card hover:border-teal/30 hover:shadow-card-hover",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  fullWidth = false,
  ...props
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-[0.95rem] font-medium no-underline transition-all duration-200",
        variants[variant] || variants.primary,
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
