import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/siteData";

export default function BrandLogo({ size = "nav" }) {
  const isNav = size === "nav";

  return (
    <>
      <Image
        src="/logo.svg"
        alt={`${company.legalName} logo`}
        width={isNav ? 40 : 38}
        height={isNav ? 40 : 38}
        className="shrink-0 rounded-lg sm:h-11 sm:w-11"
        priority={isNav}
      />
      {isNav && (
        <div className="min-w-0">
          <div className="truncate text-sm font-bold leading-tight text-white sm:text-[1.05rem]">
            <em className="not-italic text-teal-glow">{company.nameHighlight}</em>
            tech Solution
          </div>
          <div className="hidden truncate text-[0.62rem] tracking-wide text-white/45 sm:block">
            {company.tagline}
          </div>
        </div>
      )}
    </>
  );
}

export function FooterBrand() {
  return (
    <div className="flex items-center justify-center gap-3 md:justify-start">
      <Image
        src="/logo.svg"
        alt={`${company.legalName} logo`}
        width={38}
        height={38}
        className="rounded-lg"
      />
      <div className="text-[0.95rem] font-bold text-white">
        <em className="not-italic text-teal-glow">{company.nameHighlight}</em>
        tech Solution
      </div>
    </div>
  );
}

export function NavLogoLink() {
  return (
    <Link className="flex min-w-0 items-center gap-2.5 no-underline sm:gap-3" href="/">
      <BrandLogo size="nav" />
    </Link>
  );
}
