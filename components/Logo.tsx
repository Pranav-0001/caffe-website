"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export function Logo({ className = "", isDark = false }: LogoProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Smoothly scroll to the top of the page when clicking the brand logo
    if (typeof window !== "undefined") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      window.history.pushState(null, "", "/");
    }
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      className={`inline-flex items-center tracking-brand font-serif text-xl sm:text-2xl font-normal uppercase select-none transition-opacity hover:opacity-80 cursor-pointer ${
        isDark ? "text-cream-100" : "text-espresso"
      } ${className}`}
      aria-label={`${siteConfig.name} - Home`}
    >
      {siteConfig.name}
    </Link>
  );
}
