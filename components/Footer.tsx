import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream-100 pt-20 sm:pt-24 pb-12 border-t border-charcoal-light">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-cream-100/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <Logo isDark className="!text-3xl sm:!text-4xl text-cream-50" />
              </div>
              <p className="font-sans text-taupe text-sm max-w-sm leading-relaxed font-light">
                {siteConfig.description}
              </p>
            </div>
            <div className="mt-8 text-xs text-taupe/70 font-sans">
              <p>{siteConfig.location.fullAddress}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-sans uppercase tracking-brand text-cream-200/60 font-semibold mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-3 font-sans text-sm">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-taupe hover:text-cream-50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-[11px] font-sans uppercase tracking-brand text-cream-200/60 font-semibold mb-4">
                Connect
              </h4>
              <div className="space-y-2 font-sans text-sm text-taupe">
                <div>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cream-50 transition-colors"
                  >
                    Instagram ↗
                  </a>
                </div>
                <div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-cream-50 transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div>
                  <span className="text-taupe/70">{siteConfig.contact.phone}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <span className="inline-block px-3 py-1 border border-cream-100/15 rounded text-[11px] font-sans text-taupe/80 tracking-wider">
                Specialty Micro-Roaster & Bakery
              </span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-taupe/60 font-sans gap-4">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="font-light">
            Designed with clarity & craft.
          </p>
        </div>
      </div>
    </footer>
  );
}
