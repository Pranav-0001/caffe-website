import Image from "next/image";
import Link from "next/link";

export function CoffeeStory() {
  return (
    <section id="story" className="py-20 sm:py-28 lg:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Coffee Beans Photograph */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-[22px] sm:rounded-[28px] overflow-hidden shadow-[0_16px_40px_-20px_rgba(59,43,36,0.12)] border border-espresso/10">
              <Image
                src="/images/coffee-beans.jpg"
                alt="Freshly roasted specialty coffee beans being inspected for quality"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            <span className="inline-block text-xs uppercase tracking-brand text-taupe-dark font-medium mb-3">
              SOURCING & CRAFT
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso font-normal leading-tight tracking-tight mb-6">
              Good coffee starts long before the first sip.
            </h2>
            
            <div className="space-y-4 text-charcoal-muted text-sm sm:text-base leading-relaxed mb-8">
              <p>
                We choose expressive specialty coffees and roast with clarity, balance, and sweetness in mind. Every micro-lot is sourced through direct relationships with farmers who share our obsessive commitment to soil health, altitude cultivation, and clean processing.
              </p>
              <p>
                From gentle light roasts that showcase bright florals and stone fruits, to rich, rounded profiles crafted for milk drinks, every roast batch is cupped and refined for consistency.
              </p>
            </div>

            <div>
              <Link
                href="#menu"
                className="inline-flex items-center justify-center px-6 py-3 bg-espresso text-cream-50 font-sans text-xs tracking-widest uppercase font-medium rounded-md hover:bg-espresso-light transition-colors duration-200"
              >
                DISCOVER OUR COFFEE
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
