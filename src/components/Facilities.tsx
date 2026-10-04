"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FACILITIES_DATA } from "@/data/schoolData";
import { Check, ArrowUpRight, Sparkles, Building, Microscope, Trophy, Home, HeartHandshake } from "lucide-react";
import { Facility } from "@/types";

export const Facilities: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [previewFacility, setPreviewFacility] = useState<Facility | null>(null);

  const categories = ["All", "Academic", "Sports", "Residential", "Health"];

  const filteredFacilities = activeCategory === "All"
    ? FACILITIES_DATA
    : FACILITIES_DATA.filter((f) => f.category === activeCategory);

  return (
    <section id="facilities" className="py-24 bg-white dark:bg-gray-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="px-3.5 py-1 rounded-full bg-teal-100 dark:bg-teal-950/50 text-[#357e79] dark:text-teal-300 text-xs font-bold uppercase tracking-widest mb-3 inline-block">
              World-Class Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white tracking-tight">
              A 22-Acre Sustainable Smart Campus
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Meticulously planned to promote curiosity, high-performance athletic discipline, and serene residential comfort.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                data-cursor="Filter"
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-[#b90124] text-white shadow-md"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredFacilities.map((facility, index) => {
              const isLarge = facility.featured && index === 0;

              return (
                <motion.div
                  layout
                  key={facility.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`group relative rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 flex flex-col justify-end shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                    isLarge ? "md:col-span-2 lg:col-span-2 min-h-[360px]" : "min-h-[320px]"
                  }`}
                  onClick={() => setPreviewFacility(facility)}
                  data-cursor="View"
                >
                  {/* Background Image with Zoom */}
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider">
                      {facility.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>

                  {/* Bottom Text Content */}
                  <div className="relative z-10 p-6 text-white">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold group-hover:text-amber-300 transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-200 line-clamp-2 mt-1.5 mb-3">
                      {facility.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {facility.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-md bg-black/40 backdrop-blur-xs text-[10px] text-gray-300 border border-white/10"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Facility Detail Lightbox Modal */}
      {previewFacility && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
            <div className="relative h-64 w-full">
              <img
                src={previewFacility.image}
                alt={previewFacility.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <button
                type="button"
                onClick={() => setPreviewFacility(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-6 text-white">
                <span className="px-2.5 py-0.5 rounded-full bg-[#b90124] text-[10px] font-bold uppercase tracking-wider">
                  {previewFacility.category}
                </span>
                <h3 className="text-2xl font-serif font-bold mt-1">{previewFacility.title}</h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {previewFacility.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Key Specifications & Amenities
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {previewFacility.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-xs font-medium text-gray-800 dark:text-gray-200 flex items-center gap-2"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex justify-end">
                <button
                  type="button"
                  onClick={() => setPreviewFacility(null)}
                  className="px-5 py-2 rounded-xl bg-[#b90124] text-white text-xs font-bold hover:bg-[#96001d] transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
