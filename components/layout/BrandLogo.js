import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/siteData";

export default function BrandLogo({ size = "nav" }) {
  const isNav = size === "nav";

  return (
    <>
      <span className="flex shrink-0 items-center justify-center rounded-lg bg-white p-1 shadow-sm sm:rounded-xl sm:p-1.5">
        <Image
          src="/logo.png"
          alt={`${company.legalName} logo`}
          width={isNav ? 36 : 34}
          height={isNav ? 36 : 34}
          className="h-8 w-8 object-contain sm:h-9 sm:w-9"
          priority={isNav}
        />
      </span>
      {isNav && (
        <div className="min-w-0">
          <div className="truncate text-sm font-bold leading-tight text-white sm:text-[1.05rem]">
            <em className="not-italic text-white">{company.nameHighlight}</em>
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
      <span className="flex shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm">
        <Image
          src="/logo.png"
          alt={`${company.legalName} logo`}
          width={34}
          height={34}
          className="h-8 w-8 object-contain"
        />
      </span>
      <div className="text-[0.95rem] font-bold text-white">
        <em className="not-italic text-white">{company.nameHighlight}</em>
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
