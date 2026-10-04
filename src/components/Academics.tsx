"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Compass, BookOpenCheck, Award, ArrowRight, CheckCircle2, X, ChevronRight } from "lucide-react";
import { ACADEMIC_PROGRAMS } from "@/data/schoolData";
import { AcademicProgram } from "@/types";

interface AcademicsProps {
  onOpenEnquiry: (grade?: string) => void;
}

export const Academics: React.FC<AcademicsProps> = ({ onOpenEnquiry }) => {
  const [selectedProgram, setSelectedProgram] = useState<AcademicProgram | null>(null);

  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-5 h-5 text-amber-500" />,
    Compass: <Compass className="w-5 h-5 text-teal-500" />,
    BookOpenCheck: <BookOpenCheck className="w-5 h-5 text-rose-500" />,
    Award: <Award className="w-5 h-5 text-indigo-500" />,
  };

  return (
    <section id="academics" className="py-24 bg-gray-50/70 dark:bg-gray-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-rose-100 dark:bg-rose-950/50 text-[#b90124] dark:text-rose-300 text-xs font-bold uppercase tracking-widest mb-3">
            Academic Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white tracking-tight">
            Curriculum Tailored for Every Stage
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            From foundational curiosity in primary classes to competitive mastery in senior secondary, 
            our CBSE framework prepares students for global university success.
          </p>
        </div>

        {/* Academic Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACADEMIC_PROGRAMS.map((prog, idx) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-gray-800/90 rounded-3xl p-6 border border-gray-200/80 dark:border-gray-700/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-bold font-mono text-gray-800 dark:text-gray-200">
                    {prog.gradeRange}
                  </span>
                  <div className="p-2 rounded-xl bg-gray-50 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 group-hover:bg-[#b90124]/10 group-hover:text-[#b90124] transition-colors">
                    {iconMap[prog.iconName] || <Sparkles className="w-5 h-5" />}
                  </div>
                </div>

                <h3 className="font-serif font-bold text-xl text-gray-900 dark:text-white group-hover:text-[#b90124] dark:group-hover:text-rose-400 transition-colors">
                  {prog.title}
                </h3>

                <p className="text-xs text-gray-500 dark:text-gray-400 italic mt-1 mb-4">
                  {prog.subtitle}
                </p>

                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 mb-5">
                  {prog.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-2 border-t border-gray-100 dark:border-gray-700/60 pt-4 mb-6">
                  {prog.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Button */}
              <button
                type="button"
                onClick={() => setSelectedProgram(prog)}
                data-cursor="Learn More"
                className="w-full py-2.5 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 hover:bg-[#b90124] hover:text-white hover:border-[#b90124] dark:bg-gray-700/50 dark:hover:bg-[#b90124] text-xs font-bold text-gray-800 dark:text-gray-200 transition-all flex items-center justify-center gap-1.5 group-hover:shadow-md"
              >
                <span>Explore Curriculum</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Program Details Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#96001d] to-[#b90124] p-6 text-white relative">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white"
                >
                  <X className="w-5 h-5" />
                </button>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-neutral-900 text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">
                  {selectedProgram.gradeRange}
                </span>
                <h3 className="text-2xl font-serif font-bold">{selectedProgram.title}</h3>
                <p className="text-xs text-white/90 mt-1">{selectedProgram.subtitle}</p>
              </div>

              {/* Body */}
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Academic Overview
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedProgram.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Pedagogical Highlights & Offerings
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProgram.keyFeatures.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/60 text-xs text-gray-800 dark:text-gray-200 flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Key Development Pillars
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProgram.focusAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/40 text-xs font-medium"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Action CTA */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <span className="text-xs text-gray-500">Admissions open for {selectedProgram.gradeRange}</span>
                  <button
                    type="button"
                    onClick={() => {
                      const grade = selectedProgram.gradeRange;
                      setSelectedProgram(null);
                      onOpenEnquiry(grade);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-[#b90124] hover:bg-[#96001d] text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
                  >
                    <span>Enquire for {selectedProgram.gradeRange}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
