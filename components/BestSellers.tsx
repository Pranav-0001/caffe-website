"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { bestSellers } from "@/lib/bestSellers";

export function BestSellers() {
  const [centerIndex, setCenterIndex] = useState(1); // Default center: Signature Latte (index 1)
  const [displayedIndex, setDisplayedIndex] = useState(1);
  const [isTextFading, setIsTextFading] = useState(false);
  const isAnimatingRef = useRef(false);
  const touchStartXRef = useRef<number | null>(null);

  const total = bestSellers.length;

  const navigateTo = useCallback(
    (newIndex: number) => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      const targetIndex = (newIndex + total) % total;
      setCenterIndex(targetIndex);

      // Coordinated text transition: fade out current info slightly, swap at midpoint, fade in
      setIsTextFading(true);
      setTimeout(() => {
        setDisplayedIndex(targetIndex);
        setIsTextFading(false);
      }, 220);

      // Release animation lock after full physical gliding transition
      setTimeout(() => {
        isAnimatingRef.current = false;
      }, 650);
    },
    [total]
  );

  const handleNext = useCallback(() => {
    navigateTo(centerIndex + 1);
  }, [centerIndex, navigateTo]);

  const handlePrev = useCallback(() => {
    navigateTo(centerIndex - 1);
  }, [centerIndex, navigateTo]);

  // Keyboard navigation support
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  // Touch Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  // Determine spatial slot ("left" | "center" | "right") for each product
  const getSlot = (itemIndex: number): "left" | "center" | "right" => {
    if (itemIndex === centerIndex) return "center";
    if (itemIndex === (centerIndex - 1 + total) % total) return "left";
    return "right";
  };

  const activeProduct = bestSellers[displayedIndex];

  return (
    <section
      id="best-sellers"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="py-20 sm:py-28 lg:py-32 bg-cream-50 border-t border-espresso/5 overflow-hidden focus:outline-none select-none"
      aria-label="Our Best Sellers"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Heading Area */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <span className="inline-block text-xs uppercase tracking-brand text-taupe-dark font-medium mb-3">
            OUR BEST SELLERS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso font-normal tracking-tight mb-4">
            The ones we keep coming back to.
          </h2>
          <p className="font-sans text-charcoal-muted text-base sm:text-lg font-light">
            A few MORA favorites, made with care and worth ordering again.
          </p>
        </div>

        {/* Dedicated 3-Slot Carousel Stage Container */}
        <div
          className="relative max-w-6xl mx-auto flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Arrow Left Button (Outside product cluster) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous best seller"
            className="group absolute left-0 sm:left-2 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full border border-espresso/20 bg-cream-100/95 backdrop-blur-xs text-espresso flex items-center justify-center hover:border-espresso hover:bg-espresso hover:text-cream-50 active:scale-95 transition-all duration-300 shadow-[0_4px_16px_rgba(59,43,36,0.08)] cursor-pointer"
          >
            <span className="font-sans text-base transition-transform duration-200 group-hover:-translate-x-0.5">
              ←
            </span>
          </button>

          {/* Dedicated Fixed Height Product Stage */}
          <div className="relative w-full h-[340px] sm:h-[420px] md:h-[480px] lg:h-[520px] overflow-visible">
            {bestSellers.map((product, idx) => {
              const slot = getSlot(idx);
              const isCenter = slot === "center";

              return (
                <div
                  key={product.id}
                  onClick={() => {
                    if (!isCenter) {
                      navigateTo(idx);
                    }
                  }}
                  data-slot={slot}
                  className={`absolute top-1/2 left-1/2 w-[280px] sm:w-[360px] md:w-[420px] lg:w-[460px] aspect-square transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
                    isCenter ? "cursor-default z-30" : "cursor-pointer z-10"
                  }`}
                  style={{
                    transform:
                      slot === "center"
                        ? "translate3d(-50%, -50%, 0) scale(1.0)"
                        : slot === "left"
                        ? "translate3d(calc(-50% - var(--side-distance, 340px)), -50%, 0) scale(0.68)"
                        : "translate3d(calc(-50% + var(--side-distance, 340px)), -50%, 0) scale(0.68)",
                    opacity: isCenter ? 1 : 0.60,
                  }}
                >
                  <div
                    className={`relative w-full h-full transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isCenter
                        ? "filter drop-shadow-[0_25px_35px_rgba(59,43,36,0.18)]"
                        : "filter drop-shadow-[0_12px_20px_rgba(59,43,36,0.08)] hover:opacity-85"
                    }`}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 280px, (max-width: 1024px) 420px, 460px"
                      className="object-contain pointer-events-none"
                      priority={idx === 1}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Arrow Right Button (Outside product cluster) */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next best seller"
            className="group absolute right-0 sm:right-2 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full border border-espresso/20 bg-cream-100/95 backdrop-blur-xs text-espresso flex items-center justify-center hover:border-espresso hover:bg-espresso hover:text-cream-50 active:scale-95 transition-all duration-300 shadow-[0_4px_16px_rgba(59,43,36,0.08)] cursor-pointer"
          >
            <span className="font-sans text-base transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </button>
        </div>

        {/* Product Information Area for Centered Product with Fixed Height */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center max-w-md mx-auto min-h-[160px] flex flex-col items-center justify-start">
          <div
            className={`transition-all duration-300 transform ${
              isTextFading
                ? "opacity-0 translate-y-2"
                : "opacity-100 translate-y-0"
            }`}
          >
            {activeProduct.tagline && (
              <span className="inline-block text-[11px] font-sans uppercase tracking-widest text-taupe-dark font-medium mb-1.5">
                {activeProduct.tagline}
              </span>
            )}
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-espresso font-normal tracking-tight mb-2.5">
              {activeProduct.name}
            </h3>
            <p className="font-sans text-charcoal-muted text-sm sm:text-base leading-relaxed mb-3.5">
              {activeProduct.description}
            </p>
            <span className="inline-block font-serif text-xl sm:text-2xl text-espresso font-medium">
              {activeProduct.price}
            </span>
          </div>

          {/* Subtle Dot Indicators */}
          <div className="flex items-center justify-center space-x-2.5 mt-6">
            {bestSellers.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => navigateTo(idx)}
                aria-label={`Go to ${item.name}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === centerIndex
                    ? "w-6 bg-espresso"
                    : "w-1.5 bg-espresso/20 hover:bg-espresso/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
