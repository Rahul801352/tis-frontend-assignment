"use client";

import React from "react";
import { motion } from "framer-motion";
import { WHY_CHOOSE_TIS } from "@/data/schoolData";
import { GraduationCap, Trophy, HeartHandshake, Mountain, Compass, ShieldCheck } from "lucide-react";

export const WhyTIS: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-6 h-6 text-[#b90124] dark:text-rose-400" />,
    Trophy: <Trophy className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#357e79] dark:text-teal-400" />,
    Mountain: <Mountain className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    Compass: <Compass className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
  };

  return (
    <section className="py-24 bg-gray-50/50 dark:bg-gray-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/50 text-[#c09d59] dark:text-amber-300 text-xs font-bold uppercase tracking-widest mb-3">
            The TIS Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white tracking-tight">
            Why Parents Choose Tulas International School
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            A purposeful convergence of character, athletic grit, academic rigor, and compassionate mentorship.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_TIS.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-8 rounded-3xl bg-white dark:bg-gray-800/90 border border-gray-100 dark:border-gray-700/80 shadow-sm hover:shadow-xl transition-all relative group overflow-hidden"
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-700/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {iconMap[pillar.icon] || <GraduationCap className="w-6 h-6 text-[#b90124]" />}
              </div>

              <h3 className="font-serif font-bold text-xl text-gray-900 dark:text-white group-hover:text-[#b90124] dark:group-hover:text-rose-400 transition-colors mb-3">
                {pillar.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {pillar.desc}
              </p>

              {/* Decorative subtle numbering */}
              <span className="absolute top-6 right-6 font-mono font-black text-2xl text-gray-100 dark:text-gray-800 select-none group-hover:text-red-50 dark:group-hover:text-gray-700 transition-colors">
                0{idx + 1}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
