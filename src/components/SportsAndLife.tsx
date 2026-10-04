"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SPORTS_DATA } from "@/data/schoolData";
import { Trophy, Compass, Shield, Users, Medal, Sparkles } from "lucide-react";

export const SportsAndLife: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Olympic", "Outdoor", "Indoor", "Adventure", "Martial Arts"];

  const filteredSports = selectedCategory === "All"
    ? SPORTS_DATA
    : SPORTS_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="sports" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#b90124]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Punchy Headline directly mirroring authentic TIS copy */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="font-serif font-black text-4xl sm:text-5xl md:text-6xl text-[#b90124] tracking-tight">
            Sports?
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white leading-tight">
            It’s not just a facility. At Tulas, it’s the{" "}
            <span className="text-[#60bab1] underline decoration-[#c09d59] decoration-wavy decoration-2">
              foundation!
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            <strong>16+ Olympic & competitive sports</strong> curated to instill resilience, tactical decision-making, and lifelong physical vigor.
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                data-cursor="Filter"
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#b90124] text-white shadow-md scale-105"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Sports Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredSports.map((sport) => (
              <motion.div
                layout
                key={sport.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group rounded-3xl overflow-hidden bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                {/* Image Cover */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                    {sport.category}
                  </span>

                  <h3 className="absolute bottom-3 left-4 text-xl font-serif font-bold text-white">
                    {sport.name}
                  </h3>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                    {sport.description}
                  </p>

                  <div className="pt-2 border-t border-gray-200/60 dark:border-gray-800/80 space-y-1.5 text-[11px] text-gray-500 dark:text-gray-400">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">Coaching:</span>
                      <span className="text-amber-700 dark:text-amber-400 font-medium">{sport.coach}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">Arena:</span>
                      <span className="text-gray-600 dark:text-gray-300 text-right">{sport.facilities}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
