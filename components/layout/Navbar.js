"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/siteData";
import { NavLogoLink } from "@/components/layout/BrandLogo";
import Button from "@/components/ui/Button";
import cn from "@/lib/cn";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-container items-center justify-between gap-3 px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <NavLogoLink />

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={cn(
              "block h-0.5 w-5 bg-white transition-all duration-200",
              menuOpen && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-5 bg-white transition-all duration-200",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-5 bg-white transition-all duration-200",
              menuOpen && "-translate-y-2 -rotate-45"
            )}
          />
        </button>

        <ul className="hidden list-none items-center gap-5 xl:gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-white/75 no-underline transition-colors hover:text-teal-glow"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button href="#contact" variant="nav" className="hidden shrink-0 lg:inline-flex">
          Get in Touch
        </Button>
      </div>

      <div
        className={cn(
          "border-b border-white/10 bg-navy-dark/98 px-4 py-6 sm:px-6 lg:hidden",
          menuOpen ? "block" : "hidden"
        )}
      >
        <ul className="flex list-none flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className="block rounded-lg px-3 py-3 text-base text-white/90 no-underline transition-colors hover:bg-white/5 hover:text-teal-glow"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button href="#contact" variant="nav" fullWidth className="mt-4" onClick={closeMenu}>
          Get in Touch
        </Button>
      </div>
    </nav>
  );
}
