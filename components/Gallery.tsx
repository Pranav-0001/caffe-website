import Image from "next/image";

export function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28 lg:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-espresso/10">
          <div>
            <span className="inline-block text-xs uppercase tracking-widest text-taupe-dark font-medium mb-2">
              LIFESTYLE & MOMENTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso font-normal tracking-tight">
              Captured moments.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-charcoal-muted mt-3 md:mt-0 max-w-sm">
            Glimpses of daily rituals, quiet corners, and the craft behind every cup.
          </p>
        </div>

        {/* Asymmetrical Editorial Gallery Grid */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Row 1: 7 cols (Pour) + 5 cols (Window) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
            <div className="md:col-span-7 group img-zoom-container relative aspect-[16/10] sm:aspect-[16/10] rounded-[20px] overflow-hidden bg-beige-200 border border-espresso/10">
              <Image
                src="/images/coffee-pour.jpg"
                alt="Precision barista hand pour-over coffee ritual in slow motion"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 58vw, 700px"
                className="img-zoom object-cover object-center"
              />
            </div>
            <div className="md:col-span-5 group img-zoom-container relative aspect-square sm:aspect-auto rounded-[20px] overflow-hidden bg-beige-200 border border-espresso/10">
              <Image
                src="/images/cafe-window.jpg"
                alt="Morning sun streaming through large café window seating nook"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 42vw, 500px"
                className="img-zoom object-cover object-center"
              />
            </div>
          </div>

          {/* Row 2: 5 cols (Coffee Close-up) + 7 cols (Bakery Display) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
            <div className="md:col-span-5 group img-zoom-container relative aspect-square sm:aspect-auto rounded-[20px] overflow-hidden bg-beige-200 border border-espresso/10">
              <Image
                src="/images/coffee-closeup.jpg"
                alt="Artisan ceramic latte art microfoam in warm lighting"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 42vw, 500px"
                className="img-zoom object-cover object-center"
              />
            </div>
            <div className="md:col-span-7 group img-zoom-container relative aspect-[16/10] sm:aspect-[16/10] rounded-[20px] overflow-hidden bg-beige-200 border border-espresso/10">
              <Image
                src="/images/bakery-display.jpg"
                alt="Artisanal bakery display case filled with fresh golden morning pastries"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 58vw, 700px"
                className="img-zoom object-cover object-center"
              />
            </div>
          </div>

          {/* Row 3: 6 cols (Interior Detail) + 6 cols (Exterior) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
            <div className="md:col-span-6 group img-zoom-container relative aspect-[16/11] rounded-[20px] overflow-hidden bg-beige-200 border border-espresso/10">
              <Image
                src="/images/cafe-interior-detail.jpg"
                alt="Minimalist architectural pottery and warm wood café details"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="img-zoom object-cover object-center"
              />
            </div>
            <div className="md:col-span-6 group img-zoom-container relative aspect-[16/11] rounded-[20px] overflow-hidden bg-beige-200 border border-espresso/10">
              <Image
                src="/images/cafe-exterior.jpg"
                alt="Charming European style café storefront exterior with outdoor bistro seating"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="img-zoom object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
