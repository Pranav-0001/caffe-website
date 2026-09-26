import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 lg:pb-28 overflow-hidden bg-cream-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Heading & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="inline-block text-xs uppercase tracking-brand text-taupe-dark font-medium mb-4">
              Artisanal Specialty Coffee & Bakery
            </span>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso font-normal leading-[1.12] tracking-tight mb-6">
              Coffee, <br />
              <span className="italic font-light">worth slowing</span> <br />
              down for.
            </h1>
            
            <p className="font-sans text-charcoal-muted text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Specialty coffees roasted for sweetness and clarity, freshly baked French viennoiserie, and quiet moments crafted with intention.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#menu"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-espresso text-cream-50 font-sans text-xs tracking-widest uppercase font-medium rounded-md hover:bg-espresso-light transition-colors duration-200 shadow-sm"
              >
                EXPLORE MENU
              </Link>
              <Link
                href="#visit"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent border border-espresso/30 text-espresso font-sans text-xs tracking-widest uppercase font-medium rounded-md hover:bg-beige-200/60 transition-colors duration-200"
              >
                VISIT US
              </Link>
            </div>

            {/* Micro details */}
            <div className="mt-12 pt-8 border-t border-espresso/10 grid grid-cols-2 gap-4">
              <div>
                <span className="block font-serif text-lg text-espresso font-medium">Daily Roasts</span>
                <span className="text-xs text-charcoal-muted font-sans">Single Origin & House Blend</span>
              </div>
              <div>
                <span className="block font-serif text-lg text-espresso font-medium">Morning Bakes</span>
                <span className="text-xs text-charcoal-muted font-sans">Warm from 8:00 AM</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Photograph */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full rounded-[20px] sm:rounded-[28px] overflow-hidden shadow-[0_16px_40px_-20px_rgba(59,43,36,0.12)] border border-espresso/10">
              <Image
                src="/images/hero-coffee-pastry.jpg"
                alt="Specialty pour-over coffee paired with freshly baked flaky butter croissant on a wooden table"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 680px"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
