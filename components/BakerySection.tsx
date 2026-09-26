import Image from "next/image";

export function BakerySection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-beige-100/60 border-t border-espresso/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="inline-block text-xs uppercase tracking-widest text-taupe-dark font-medium mb-2">
            DAILY VIENNOISERIE & PASTRY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso font-normal tracking-tight mb-4">
            Fresh from the oven.
          </h2>
          <p className="font-sans text-charcoal-muted text-base">
            Every pastry is laminated by hand, proofed slowly overnight, and baked continuously throughout the morning.
          </p>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Featured Large Croissant Card (7 columns) */}
          <article className="lg:col-span-7 group flex flex-col bg-cream-50 rounded-[22px] p-6 sm:p-8 border border-espresso/10 shadow-[0_8px_30px_-15px_rgba(59,43,36,0.06)]">
            <div className="relative aspect-[16/10] w-full rounded-[16px] overflow-hidden mb-6 bg-beige-200">
              <Image
                src="/images/food-croissant.jpg"
                alt="Golden flaky butter croissant fresh from the oven on wooden tray"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 58vw, 700px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-[11px] font-sans uppercase tracking-widest text-taupe-dark font-medium">
                Viennoiserie Signature
              </span>
              <span className="font-serif text-xl text-espresso font-light">₹180</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-espresso font-medium mb-2">
              Butter Croissant
            </h3>
            <p className="font-sans text-charcoal-muted text-sm sm:text-base leading-relaxed">
              Flaky, golden, and baked fresh each morning using cultured French butter and organic stoneground flour.
            </p>
          </article>

          {/* Two Stacked Items (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            {/* Berry Cheesecake */}
            <article className="group flex flex-col sm:flex-row lg:flex-row gap-5 bg-cream-50 rounded-[22px] p-5 sm:p-6 border border-espresso/10 shadow-[0_8px_30px_-15px_rgba(59,43,36,0.06)] flex-1">
              <div className="relative w-full sm:w-44 lg:w-40 aspect-square sm:aspect-[4/3] lg:aspect-square flex-shrink-0 rounded-[14px] overflow-hidden bg-beige-200">
                <Image
                  src="/images/food-cheesecake.jpg"
                  alt="Delicate slice of Basque cheesecake topped with fresh berries"
                  fill
                  sizes="(max-width: 768px) 100vw, 200px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-serif text-xl text-espresso font-medium">
                    Berry Cheesecake
                  </h3>
                  <span className="font-serif text-base text-espresso font-light ml-2">₹260</span>
                </div>
                <p className="font-sans text-charcoal-muted text-xs sm:text-sm leading-relaxed">
                  Creamy, delicate, and finished with fresh raspberries on a crisp vanilla sablé crust.
                </p>
              </div>
            </article>

            {/* Chocolate Cookie */}
            <article className="group flex flex-col sm:flex-row lg:flex-row gap-5 bg-cream-50 rounded-[22px] p-5 sm:p-6 border border-espresso/10 shadow-[0_8px_30px_-15px_rgba(59,43,36,0.06)] flex-1">
              <div className="relative w-full sm:w-44 lg:w-40 aspect-square sm:aspect-[4/3] lg:aspect-square flex-shrink-0 rounded-[14px] overflow-hidden bg-beige-200">
                <Image
                  src="/images/food-cookie.jpg"
                  alt="Thick chocolate chunk cookie with sea salt flakes"
                  fill
                  sizes="(max-width: 768px) 100vw, 200px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-serif text-xl text-espresso font-medium">
                    Chocolate Cookie
                  </h3>
                  <span className="font-serif text-base text-espresso font-light ml-2">₹150</span>
                </div>
                <p className="font-sans text-charcoal-muted text-xs sm:text-sm leading-relaxed">
                  Crisp edges, soft gooey center, and generous dark chocolate puddles with sea salt crystals.
                </p>
              </div>
            </article>

          </div>

        </div>
      </div>
    </section>
  );
}
