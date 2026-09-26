"use client";

import { useState, FormEvent } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section className="py-20 sm:py-24 bg-beige-200/40 border-t border-espresso/10">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <span className="inline-block text-xs uppercase tracking-brand text-taupe-dark font-medium mb-3">
          DISPATCHES & ROTATING ROASTS
        </span>
        
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso font-normal tracking-tight mb-4">
          Stay in the loop.
        </h2>
        
        <p className="font-sans text-charcoal-muted text-base sm:text-lg max-w-xl mx-auto mb-8 font-light">
          New coffees, seasonal bakes, and quiet things worth knowing about. Never spam.
        </p>

        {submitted ? (
          <div className="bg-sage/15 border border-sage/30 text-espresso py-4 px-6 rounded-lg max-w-md mx-auto">
            <p className="font-serif text-lg">Thank you for joining our circle.</p>
            <p className="text-xs text-charcoal-muted font-sans mt-1">We look forward to welcoming you to the morning table.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="newsletter-email" className="sr-only">
                Email Address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3 bg-cream-50 border border-espresso/20 rounded-md font-sans text-sm text-charcoal placeholder-taupe-dark/60 focus:outline-none focus:border-espresso focus:ring-1 focus:ring-espresso transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-espresso text-cream-50 font-sans text-xs tracking-widest uppercase font-medium rounded-md hover:bg-espresso-light transition-colors shrink-0"
              >
                JOIN US
              </button>
            </div>
            {error && <p className="text-xs text-red-700 mt-2 text-left font-sans">{error}</p>}
          </form>
        )}
      </div>
    </section>
  );
}
