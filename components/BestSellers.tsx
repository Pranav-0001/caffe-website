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
      className="scroll-mt-16 py-6 sm:py-8 lg:py-10 bg-cream-50 border-t border-espresso/5 overflow-hidden focus:outline-none select-none"
      aria-label="Our Best Sellers"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center">
        {/* Section Heading Area (Compact, Elegant, Single-View Fit) */}
        <div className="text-center max-w-lg mx-auto mb-1.5 sm:mb-2">
          <span className="inline-block text-[10px] uppercase tracking-brand text-taupe-dark font-medium mb-0.5">
            OUR BEST SELLERS
          </span>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-espresso font-normal tracking-tight mb-0.5 leading-tight">
            The ones we keep coming back to.
          </h2>
          <p className="font-sans text-charcoal-muted text-xs font-light max-w-sm mx-auto">
            A few MORA favorites, made with care and worth ordering again.
          </p>
        </div>

        {/* Dedicated 3-Slot Carousel Stage Container */}
        <div
          className="relative w-full max-w-4xl mx-auto flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Arrow Left Button (Aligned with product stage center) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous best seller"
            className="group absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-espresso/20 bg-cream-100/95 backdrop-blur-xs text-espresso flex items-center justify-center hover:border-espresso hover:bg-espresso hover:text-cream-50 active:scale-95 transition-all duration-300 shadow-[0_3px_10px_rgba(59,43,36,0.06)] cursor-pointer"
          >
            <span className="font-sans text-xs sm:text-sm transition-transform duration-200 group-hover:-translate-x-0.5">
              ←
            </span>
          </button>

          {/* Dedicated Fixed-Height Compact Product Stage */}
          <div className="relative w-full h-[200px] sm:h-[220px] md:h-[250px] overflow-visible">
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
                  className={`absolute top-1/2 left-1/2 w-[160px] sm:w-[190px] md:w-[220px] lg:w-[240px] aspect-square transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
                    isCenter ? "cursor-default z-30" : "cursor-pointer z-10"
                  }`}
                  style={{
                    transform:
                      slot === "center"
                        ? "translate3d(-50%, -50%, 0) scale(1.0)"
                        : slot === "left"
                        ? "translate3d(calc(-50% - var(--side-distance, 200px)), -50%, 0) scale(0.68)"
                        : "translate3d(calc(-50% + var(--side-distance, 200px)), -50%, 0) scale(0.68)",
                    opacity: isCenter ? 1 : 0.60,
                  }}
                >
                  <div
                    className={`relative w-full h-full transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isCenter
                        ? "filter drop-shadow-[0_14px_22px_rgba(59,43,36,0.16)]"
                        : "filter drop-shadow-[0_6px_12px_rgba(59,43,36,0.06)] hover:opacity-85"
                    }`}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 160px, (max-width: 1024px) 220px, 240px"
                      className="object-contain pointer-events-none"
                      priority={idx === 1}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Arrow Right Button (Aligned with product stage center) */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next best seller"
            className="group absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-espresso/20 bg-cream-100/95 backdrop-blur-xs text-espresso flex items-center justify-center hover:border-espresso hover:bg-espresso hover:text-cream-50 active:scale-95 transition-all duration-300 shadow-[0_3px_10px_rgba(59,43,36,0.06)] cursor-pointer"
          >
            <span className="font-sans text-xs sm:text-sm transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </button>
        </div>

        {/* Product Information Area (Directly below stage with zero dead whitespace) */}
        <div className="mt-1 sm:mt-1.5 text-center max-w-md mx-auto min-h-[85px] flex flex-col items-center justify-start">
          <div
            className={`transition-all duration-300 transform ${
              isTextFading
                ? "opacity-0 translate-y-1"
                : "opacity-100 translate-y-0"
            }`}
          >
            {activeProduct.tagline && (
              <span className="inline-block text-[10px] font-sans uppercase tracking-widest text-taupe-dark font-medium mb-0.5">
                {activeProduct.tagline}
              </span>
            )}
            <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-espresso font-normal tracking-tight mb-0.5 leading-tight">
              {activeProduct.name}
            </h3>
            <p className="font-sans text-charcoal-muted text-xs leading-normal mb-1 max-w-xs sm:max-w-sm mx-auto font-light">
              {activeProduct.description}
            </p>
            <span className="inline-block font-serif text-base sm:text-lg text-espresso font-medium">
              {activeProduct.price}
            </span>
          </div>

          {/* Subtle Dot Indicators */}
          <div className="flex items-center justify-center space-x-1.5 mt-1.5">
            {bestSellers.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => navigateTo(idx)}
                aria-label={`Go to ${item.name}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === centerIndex
                    ? "w-4 bg-espresso"
                    : "w-1 bg-espresso/25 hover:bg-espresso/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
