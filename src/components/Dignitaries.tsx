"use client";

import React from "react";
import { motion } from "framer-motion";
import { DIGNITARIES_DATA } from "@/data/schoolData";
import { Medal, Star, Quote } from "lucide-react";

export const Dignitaries: React.FC = () => {
  return (
    <section id="dignitaries" className="py-20 bg-gray-50/60 dark:bg-gray-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/50 text-[#c09d59] dark:text-amber-300 text-xs font-bold uppercase tracking-widest mb-3 inline-block">
            Inspiration On Campus
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-white tracking-tight">
            Distinguished Personalities & Olympic Mentors
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
            National champions, Olympic medalists, and visionary leaders regularly interact with and mentor TIS students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIGNITARIES_DATA.map((person, idx) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-6 rounded-3xl bg-white dark:bg-gray-800/90 border border-gray-100 dark:border-gray-700/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
                    <Medal className="w-4 h-4" />
                  </span>
                  <span className="text-[10px] font-bold text-[#b90124] dark:text-rose-400 uppercase tracking-wider">
                    {person.category}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-gray-900 dark:text-white">
                  {person.name}
                </h3>
                <p className="text-xs font-semibold text-[#c09d59] dark:text-amber-300 mt-0.5 mb-2">
                  {person.title}
                </p>

                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {person.achievements}
                </p>
              </div>

              {person.quote && (
                <div className="pt-3 border-t border-gray-100 dark:border-gray-700/60 flex items-start gap-2 text-xs italic text-gray-500 dark:text-gray-400 bg-gray-50/50 dark:bg-gray-800/40 p-3 rounded-xl">
                  <Quote className="w-4 h-4 text-[#b90124] shrink-0 mt-0.5" />
                  <span>&ldquo;{person.quote}&rdquo;</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
