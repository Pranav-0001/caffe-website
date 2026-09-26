import { siteConfig } from "@/lib/siteConfig";

export function IntroSection() {
  const pillars = [
    {
      num: "01",
      title: "SPECIALTY COFFEE",
      desc: "Ethically sourced seasonal beans, dialed in and roasted to highlight natural acidity and terroir.",
    },
    {
      num: "02",
      title: "BAKED FRESH",
      desc: "Small-batch viennoiserie, laminated croissants, and artisanal cakes baked fresh on-site every dawn.",
    },
    {
      num: "03",
      title: "MADE TO LINGER",
      desc: "Thoughtful Scandinavian acoustics, warm natural light, and unhurried hospitality designed for stillness.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-cream-50 border-y border-espresso/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Editorial Text Block */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="inline-block text-xs uppercase tracking-widest text-taupe-dark font-medium mb-3">
            THE {siteConfig.name} EXPERIENCE
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-normal leading-tight mb-6">
            A little slower. <br />
            A little better.
          </h2>
          
          <p className="font-sans text-charcoal-muted text-base sm:text-lg leading-relaxed font-light">
            We believe the morning ritual should never be rushed. From the precise water temperature on the brew bar to the crackle of a warm butter croissant fresh from the oven, every detail is considered so you can pause, breathe, and savor the art of coffee.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-8 border-t border-espresso/10">
          {pillars.map((pillar) => (
            <div key={pillar.num} className="flex flex-col">
              <span className="font-serif text-2xl text-taupe font-light mb-3">{pillar.num}</span>
              <h3 className="font-sans text-xs tracking-brand uppercase text-espresso font-semibold mb-2">
                {pillar.title}
              </h3>
              <p className="font-sans text-charcoal-muted text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
