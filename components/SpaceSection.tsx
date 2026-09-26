import Image from "next/image";

export function SpaceSection() {
  return (
    <section id="space" className="py-20 sm:py-28 lg:py-32 bg-cream-50 border-t border-espresso/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition with Overlapping Detail */}
          <div className="lg:col-span-7 relative">
            {/* Main Wide Interior Image */}
            <div className="relative aspect-[16/10] w-full rounded-[22px] sm:rounded-[28px] overflow-hidden shadow-[0_16px_40px_-20px_rgba(59,43,36,0.12)] border border-espresso/10 bg-beige-200">
              <Image
                src="/images/cafe-interior-wide.jpg"
                alt="Sunlit, minimalist café interior with warm oak wood tables and minimalist seating"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 58vw, 720px"
                className="object-cover object-center"
              />
            </div>

            {/* Overlapping Detail Accent Image (Desktop & Tablet) */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 lg:-right-8 w-44 md:w-52 aspect-square rounded-[18px] overflow-hidden border-4 border-cream-50 shadow-[0_12px_30px_-10px_rgba(59,43,36,0.2)] bg-beige-200">
              <Image
                src="/images/cafe-interior-detail.jpg"
                alt="Close-up detail of architectural textured plaster and minimalist ceramics"
                fill
                sizes="220px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="inline-block text-xs uppercase tracking-brand text-taupe-dark font-medium mb-3">
              THE ENVIRONMENT
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso font-normal leading-tight tracking-tight mb-6">
              A place to stay <br className="hidden sm:inline" />
              a little longer.
            </h2>
            
            <p className="font-sans text-charcoal-muted text-base sm:text-lg leading-relaxed mb-6 font-light">
              Designed as an urban sanctuary. Warm natural oak, textured lime-wash walls, soft ambient light, and acoustic serenity come together to create a calm refuge from the bustle outside.
            </p>

            <ul className="space-y-3 font-sans text-sm text-charcoal/80 border-t border-espresso/10 pt-6">
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
                <span>Warm morning sun and gentle afternoon light</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
                <span>Spacious communal bench and intimate two-tops</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
                <span>Quiet background playlist calibrated for focus and conversation</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
