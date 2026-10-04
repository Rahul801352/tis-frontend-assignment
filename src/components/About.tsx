"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trees, Trophy, Users, HeartPulse, Globe, GraduationCap, Award, CheckCircle, ArrowRight } from "lucide-react";
import { STATS_DATA, SCHOOL_INFO } from "@/data/schoolData";

interface AboutProps {
  onOpenEnquiry: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenEnquiry }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Trees: <Trees className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    Trophy: <Trophy className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
    Users: <Users className="w-6 h-6 text-[#b90124] dark:text-rose-400" />,
    HeartPulse: <HeartPulse className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
    Globe: <Globe className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
    GraduationCap: <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#b90124]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/50 text-[#c09d59] dark:text-amber-300 text-xs font-bold uppercase tracking-widest mb-3"
          >
            About Tulas International School
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white tracking-tight"
          >
            The Modern Gurukul of India
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Established in 2012 under the visionary aegis of <strong>Rishabh Educational Trust</strong>, 
            TIS synthesizes the ancient Gurukul mentorship traditions with global CBSE pedagogical excellence.
          </motion.p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="border-l-4 border-[#b90124] pl-5 py-1">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 dark:text-white">
                &ldquo;We feel supported in what we do and nudged further to achieve greatness.&rdquo;
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-sans">
                — Core Philosophy of Tulas International School
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              At TIS, education extends far beyond textbooks. Set amidst the serene greenery of Dhoolkot, 
              Dehradun, our students breathe crisp Himalayan air, learn from master educators, and engage daily 
              in Olympic-standard sports, robotics, and creative arts.
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              Our <strong>Modern Gurukul</strong> approach ensures every child is known, mentored, and inspired. 
              With an intimate 6:1 student-to-teacher ratio and resident houseparents, we provide a warm, 
              safe home-away-from-home that instills discipline, empathy, and intellectual confidence.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={onOpenEnquiry}
                data-cursor="Prospectus"
                className="px-6 py-3 rounded-xl bg-[#b90124] hover:bg-[#96001d] text-white text-sm font-semibold shadow-md transition-all flex items-center gap-2"
              >
                <span>Request Prospectus</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100 dark:border-gray-800 aspect-[16/10]">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
                alt="Students collaborating in modern classroom at TIS"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-bold text-amber-300 tracking-wider">
                  Campus Life
                </span>
                <p className="text-sm sm:text-base font-semibold mt-1">
                  Holistic student empowerment blending academic rigour with character building.
                </p>
              </div>
            </div>

            {/* Inset Accent Badge */}
            <div className="absolute -bottom-6 -left-6 sm:left-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3 max-w-xs">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-gray-900 dark:text-white">Rishabh Educational Trust</p>
                <p className="text-gray-500 dark:text-gray-400 text-[11px]">Legacy of institutional excellence since 2012</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Live Counters & Key Statistics (Assignment Section 5 Requirement) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          {STATS_DATA.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-800 shadow-xs flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {iconMap[stat.icon] || <Trophy className="w-6 h-6 text-[#b90124]" />}
              </div>

              <div className="font-serif font-black text-2xl sm:text-3xl text-gray-900 dark:text-white group-hover:text-[#b90124] dark:group-hover:text-rose-400 transition-colors">
                {stat.number}
              </div>

              <p className="text-xs font-bold text-gray-800 dark:text-gray-200 mt-1">
                {stat.label}
              </p>

              <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1.5 line-clamp-2 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
