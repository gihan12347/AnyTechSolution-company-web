import { socialLinks } from "@/lib/siteData";
import Icon from "@/components/ui/Icon";

export default function SocialSidebar() {
  if (!socialLinks?.length) return null;

  return (
    <aside
      className="pointer-events-none fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 pr-3 sm:block lg:pr-4"
      aria-label="Social media links"
    >
      <div className="pointer-events-auto flex flex-col gap-2 rounded-2xl border border-white/15 bg-navy/90 p-2 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={link.label}
            title={link.label}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-white/75 transition-all duration-200 hover:-translate-y-0.5 hover:bg-teal hover:text-white hover:shadow-glow"
          >
            <Icon name={link.icon} size={18} />
          </a>
        ))}
      </div>
    </aside>
  );
}
