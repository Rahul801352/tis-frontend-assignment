"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Download, Calendar, CheckCircle2, Phone } from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";
import { useToast } from "./ui/Toast";

interface AdmissionsCTAProps {
  onOpenEnquiry: () => void;
}

export const AdmissionsCTA: React.FC<AdmissionsCTAProps> = ({ onOpenEnquiry }) => {
  const { toast } = useToast();
  const [downloading, setDownloading] = useState(false);

  const steps = [
    {
      step: "01",
      title: "Digital Enquiry",
      desc: "Submit online enquiry or call admissions helpline to register student interest."
    },
    {
      step: "02",
      title: "Campus Visit",
      desc: "Schedule a guided tour of our 22-acre Dehradun campus and sports arenas."
    },
    {
      step: "03",
      title: "Student Interaction",
      desc: "Warm informal conversation with educators and basic aptitude profiling."
    },
    {
      step: "04",
      title: "Admission Confirmation",
      desc: "Receive formal admission letter, welcome kit, and hostel boarding allocation."
    }
  ];

  const handleDownloadBrochure = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      toast("Brochure Downloaded", "TIS Comprehensive Information Prospectus (PDF) has been saved.", "success");
    }, 1200);
  };

  return (
    <section id="admissions" className="py-24 bg-gradient-to-br from-[#7c031b] via-[#b90124] to-[#45000d] text-white relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-8 border-white/10 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full border-[12px] border-amber-300/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Main Banner Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-amber-400 text-neutral-900 text-xs font-black uppercase tracking-widest inline-flex items-center gap-1.5 shadow-md mb-4">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            Admissions Open 2026–2027
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight leading-tight">
            Begin Your Child’s Journey at Tulas International School
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
            Give your child the foundation of academic excellence, self-discipline, and 16+ Olympic sports in the lap of nature.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenEnquiry}
              data-cursor="Apply"
              className="px-8 py-4 rounded-2xl bg-white text-[#b90124] font-bold text-sm sm:text-base shadow-2xl hover:bg-amber-100 transition-all flex items-center gap-2 group active:scale-95"
            >
              <Sparkles className="w-5 h-5 text-[#b90124]" />
              <span>Apply Online for Admission</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={handleDownloadBrochure}
              disabled={downloading}
              data-cursor="Download"
              className="px-7 py-4 rounded-2xl border-2 border-white/80 hover:bg-white/10 text-white font-bold text-sm sm:text-base transition-all flex items-center gap-2"
            >
              {downloading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  <span>Download Prospectus</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 4-Step Roadmap Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {steps.map((st, idx) => (
            <motion.div
              key={st.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono font-black text-2xl sm:text-3xl text-amber-300">
                  {st.step}
                </span>
                <h3 className="font-serif font-bold text-lg text-white mt-2 mb-2">
                  {st.title}
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-semibold text-amber-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Step {idx + 1} of 4</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Helpline footer strip */}
        <div className="mt-14 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/90">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-amber-300" />
            <span>Have questions? Speak directly to our Dean of Admissions:</span>
            <a href={`tel:${SCHOOL_INFO.admissionsHelpline}`} className="font-bold underline hover:text-amber-200">
              {SCHOOL_INFO.admissionsHelpline}
            </a>
          </div>
          <span className="text-white/70">Campus timings: Mon – Sat, 9:00 AM – 5:00 PM</span>
        </div>

      </div>
    </section>
  );
};
