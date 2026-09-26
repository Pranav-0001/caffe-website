import Image from "next/image";

export function SignatureSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[22px] sm:rounded-[32px] overflow-hidden shadow-[0_20px_50px_-25px_rgba(59,43,36,0.15)] border border-espresso/10">
          <Image
            src="/images/signature-coffee.jpg"
            alt="Hand-poured specialty coffee in an artisan ceramic cup on a natural stone surface"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1280px"
            className="object-cover object-center"
          />

          {/* Minimalist Visual Pause Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent flex items-end p-6 sm:p-10 md:p-14">
            <div className="max-w-lg text-cream-50">
              <span className="block text-[11px] font-sans tracking-brand uppercase text-cream-200/90 font-medium mb-2">
                YOUR DAILY RITUAL
              </span>
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-cream-50 font-normal leading-tight">
                Make room for something good.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
