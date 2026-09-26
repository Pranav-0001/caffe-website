"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig } from "@/lib/siteConfig";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "MENU", href: "#menu" },
    { label: "ABOUT", href: "#about" },
    { label: "GALLERY", href: "#gallery" },
    { label: "VISIT", href: "#visit" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream-100/95 backdrop-blur-sm border-b border-espresso/10 shadow-[0_4px_20px_-10px_rgba(59,43,36,0.05)] py-4"
          : "bg-transparent border-b border-espresso/5 py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-9">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link font-sans text-xs tracking-widest text-charcoal/80 hover:text-espresso transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="font-sans text-xs tracking-widest text-espresso font-semibold uppercase px-3 py-1.5 border border-espresso/20 rounded-md hover:bg-espresso/5 transition-colors focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream-100 border-b border-espresso/10 px-6 py-6 transition-all duration-200">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-sm tracking-widest text-charcoal hover:text-espresso py-2 border-b border-espresso/5"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
