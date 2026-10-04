"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS_DATA } from "@/data/schoolData";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from "lucide-react";

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-rose-100 dark:bg-rose-950/50 text-[#b90124] dark:text-rose-300 text-xs font-bold uppercase tracking-widest mb-3">
            Voices of Trust
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white tracking-tight">
            Loved by Parents. Cherished by Students.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
            Real experiences from families across India whose children have thrived at Tulas International School.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative min-h-[320px] sm:min-h-[280px] rounded-3xl bg-gradient-to-br from-amber-50/50 via-white to-rose-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800/80 p-8 sm:p-12 border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden flex flex-col justify-between">
            <Quote className="absolute top-6 right-8 w-20 h-20 text-amber-200/40 dark:text-gray-800 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="relative z-10 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-2 text-xs font-bold text-gray-500 font-mono">
                      5.0 • Verified {current.source}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-base sm:text-xl font-serif text-gray-800 dark:text-gray-100 leading-relaxed italic">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-8 pt-6 border-t border-gray-200/60 dark:border-gray-800 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#b90124] to-[#c09d59] text-white flex items-center justify-center font-bold text-lg shadow-md font-serif">
                      {current.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-gray-900 dark:text-white">
                        {current.author}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {current.relation}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Previous testimonial"
                      className="p-2.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-xs"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      aria-label="Next testimonial"
                      className="p-2.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-xs"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === idx
                    ? "w-8 bg-[#b90124]"
                    : "w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
