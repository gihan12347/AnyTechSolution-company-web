import Link from "next/link";
import { company, navLinks } from "@/lib/siteData";
import { FooterBrand } from "@/components/layout/BrandLogo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <FooterBrand />
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-start">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/55 no-underline transition-colors hover:text-teal-glow"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="text-xs text-white/40 sm:text-sm md:text-right">{company.copyright}</div>
      </div>
    </footer>
  );
}
