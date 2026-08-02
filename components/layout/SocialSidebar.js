import { socialLinks } from "@/lib/siteData";
import Icon from "@/components/ui/Icon";

export default function SocialSidebar() {
  if (!socialLinks?.length) return null;

  return (
    <aside
      className="pointer-events-none fixed right-0 top-1/2 z-40 -translate-y-1/2 pr-1.5 sm:pr-3 lg:pr-4"
      aria-label="Social media links"
    >
      <div className="pointer-events-auto flex flex-col gap-1 rounded-xl border border-white/15 bg-navy/95 p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md sm:gap-2 sm:rounded-2xl sm:p-2">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={link.label}
            title={link.label}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white/80 transition-all duration-200 active:bg-teal active:text-white hover:-translate-y-0.5 hover:bg-teal hover:text-white hover:shadow-glow sm:h-10 sm:w-10 sm:rounded-xl"
          >
            <Icon name={link.icon} size={17} />
          </a>
        ))}
      </div>
    </aside>
  );
}
