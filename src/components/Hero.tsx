"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Play, Trophy, ShieldCheck, Users, Compass, CheckCircle2, X } from "lucide-react";
import { SCHOOL_INFO, RANKINGS_DATA } from "@/data/schoolData";

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-[92vh] pt-32 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-gray-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Background Decorative Mesh & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-rose-500/10 via-amber-500/10 to-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#b90124]/5 dark:bg-[#b90124]/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#60bab1]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Top Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 shadow-xs mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-[#b90124] animate-ping" />
              <span className="text-xs font-bold text-[#b90124] dark:text-rose-300 uppercase tracking-wider">
                Admissions Open 2026–2027 • Class IV to XII
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-gray-900 dark:text-white leading-[1.12]"
            >
              Where Ancient Wisdom Meets{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#b90124] via-[#96001d] to-[#c09d59]">
                Global Future.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#c09d59]/40 fill-none"
                  viewBox="0 0 250 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 9C60 3 190 2 247 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Slogan Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl font-sans"
            >
              Welcome to <strong className="text-gray-900 dark:text-white font-semibold">Tulas International School</strong>, 
              Dehradun’s top-ranked CBSE co-educational residential boarding school. Set across an idyllic 
              <span className="font-semibold text-[#b90124] dark:text-rose-400"> 22-acre pollution-free Himalayan campus</span>, 
              we impart holistic education through seamless opportunities in academics, 16+ Olympic sports, and cultural mastery.
            </motion.p>

            {/* Micro Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-gray-700 dark:text-gray-300"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>6:1 Student-Teacher Ratio</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>16+ Olympic Sports Disciplines</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>24/7 Multi-Tier Safe Residential Life</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                type="button"
                onClick={onOpenEnquiry}
                data-cursor="Apply Now"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#b90124] via-[#96001d] to-[#7c031b] text-white font-bold text-sm shadow-xl shadow-red-950/20 hover:shadow-2xl hover:scale-102 transition-all flex items-center justify-center gap-2 group active:scale-98"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Apply for 2026–27</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                data-cursor="Watch Tour"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-full bg-[#b90124]/10 dark:bg-[#b90124]/20 text-[#b90124] flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Campus Virtual Tour</span>
              </button>
            </motion.div>

            {/* Official Rankings Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-10 pt-6 border-t border-gray-200/70 dark:border-gray-800 w-full"
            >
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                Recognized Among India’s Finest
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {RANKINGS_DATA.slice(0, 3).map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/60 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800/80 backdrop-blur-xs flex items-center gap-2.5"
                  >
                    <span className="font-serif font-black text-xl text-[#c09d59]">
                      {item.rank}
                    </span>
                    <div className="flex flex-col text-[10px] leading-tight text-gray-600 dark:text-gray-300">
                      <span className="font-bold text-gray-900 dark:text-white line-clamp-1">{item.title}</span>
                      <span className="text-gray-400">{item.source}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Composition with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Main Visual Frame */}
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 group">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=85"
                alt="Tulas International School Campus Students"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Bottom Caption on Image */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#b90124] text-[10px] font-bold uppercase tracking-wider mb-2">
                  Modern Gurukul
                </span>
                <h3 className="font-serif text-lg font-bold">
                  22 Acres of Himalayan Foothill Learning
                </h3>
                <p className="text-xs text-white/80 line-clamp-2 mt-1">
                  &ldquo;We feel supported in what we do and nudged further to achieve greatness.&rdquo;
                </p>
              </div>
            </div>

            {/* Floating Badge 1: #1 Ranking */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 sm:-left-8 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3 backdrop-blur-md"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-300 flex items-center justify-center">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-400">Ranked #1</p>
                <p className="text-xs font-extrabold text-gray-900 dark:text-white">
                  Co-Ed Boarding Dehradun
                </p>
              </div>
            </motion.div>

            {/* Floating Badge 2: 16+ Sports */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-5 -right-4 sm:-right-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3 backdrop-blur-md"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-[#b90124] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-400">Foundation</p>
                <p className="text-xs font-extrabold text-gray-900 dark:text-white">
                  16+ Olympic Sports
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Video Virtual Tour Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/UC-eRtybnv3GvfvcWxQq93zw?autoplay=1"
              title="Tulas International School Virtual Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};
