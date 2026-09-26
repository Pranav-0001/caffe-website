import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export function DrinksSection() {
  return (
    <section id="menu" className="py-20 sm:py-28 lg:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-espresso/10">
          <div>
            <span className="inline-block text-xs uppercase tracking-widest text-taupe-dark font-medium mb-2">
              CURATED MENU
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso font-normal tracking-tight">
              What we&apos;re pouring.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-charcoal-muted mt-3 md:mt-0 max-w-sm">
            A few favorites crafted on our custom Synesso espresso machine and pour-over bar.
          </p>
        </div>

        {/* 3 Drink Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {siteConfig.popularDrinks.map((drink) => (
            <article
              key={drink.id}
              className="group flex flex-col bg-transparent"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/5] w-full rounded-[18px] overflow-hidden mb-5 bg-beige-200 border border-espresso/10 shadow-[0_8px_24px_-12px_rgba(59,43,36,0.08)]">
                <Image
                  src={drink.image}
                  alt={`${drink.name} served in ceramic cup`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 bg-cream-100/90 backdrop-blur-xs text-[10px] uppercase font-sans tracking-widest text-espresso font-medium rounded">
                  {drink.tag}
                </span>
              </div>

              {/* Content */}
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-serif text-xl sm:text-2xl text-espresso font-medium group-hover:text-espresso-light transition-colors">
                  {drink.name}
                </h3>
                <span className="font-serif text-lg text-espresso/90 font-light ml-4">
                  {drink.price}
                </span>
              </div>
              <p className="font-sans text-charcoal-muted text-sm leading-relaxed">
                {drink.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
