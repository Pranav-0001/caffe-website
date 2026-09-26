import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export function VisitSection() {
  return (
    <section id="visit" className="py-20 sm:py-28 lg:py-32 bg-cream-50 border-t border-espresso/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Information Block */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="inline-block text-xs uppercase tracking-brand text-taupe-dark font-medium mb-3">
              LOCATION & HOURS
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso font-normal leading-tight tracking-tight mb-8">
              Come by. <br />
              Stay awhile.
            </h2>

            <div className="space-y-8 font-sans">
              {/* Address */}
              <div>
                <h3 className="text-xs uppercase tracking-brand text-espresso font-semibold mb-2">
                  Address
                </h3>
                <p className="text-charcoal-muted text-base leading-relaxed">
                  {siteConfig.location.street} <br />
                  {siteConfig.location.locality}, {siteConfig.location.city} <br />
                  {siteConfig.location.country}
                </p>
                <a
                  href={siteConfig.location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs uppercase tracking-widest text-espresso font-medium hover:text-espresso-light transition-colors mt-3 group"
                >
                  <span>GET DIRECTIONS</span>
                  <span className="ml-1.5 transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>

              {/* Hours */}
              <div className="pt-6 border-t border-espresso/10">
                <h3 className="text-xs uppercase tracking-brand text-espresso font-semibold mb-3">
                  Opening Hours
                </h3>
                <div className="space-y-2 text-charcoal-muted text-sm sm:text-base">
                  {siteConfig.hours.map((item, index) => (
                    <div key={index} className="flex justify-between max-w-sm py-1 border-b border-espresso/5">
                      <span className="font-medium text-charcoal">{item.days}</span>
                      <span>{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Note */}
              <div className="pt-4 text-xs text-charcoal-muted">
                <span>Direct inquiries: </span>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-espresso underline hover:text-espresso-light">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Exterior Photograph */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-[22px] sm:rounded-[28px] overflow-hidden shadow-[0_16px_40px_-20px_rgba(59,43,36,0.12)] border border-espresso/10 bg-beige-200">
              <Image
                src="/images/cafe-exterior.jpg"
                alt="Exterior façade of MORA café in Bengaluru with welcoming outdoor seats and greenery"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
