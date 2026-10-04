"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Menu, X, ArrowRight, Sparkles, MapPin, ChevronDown } from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";
import { ThemeToggle } from "./ui/ThemeToggle";

interface NavbarProps {
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About TIS", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Facilities", href: "#facilities" },
    { label: "16+ Sports", href: "#sports" },
    { label: "Dignitaries", href: "#dignitaries" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Admissions", href: "#admissions" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#b90124] text-white text-xs py-1.5 px-4 sm:px-8 flex items-center justify-between border-b border-red-700/50">
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
          <a
            href={`tel:${SCHOOL_INFO.admissionsHelpline}`}
            className="flex items-center gap-1.5 hover:text-amber-200 transition-colors font-medium tracking-wide"
            data-cursor="Call"
          >
            <Phone className="w-3.5 h-3.5 text-amber-300" />
            <span>Admissions Helpline: {SCHOOL_INFO.admissionsHelpline}</span>
          </a>
          <a
            href={`mailto:${SCHOOL_INFO.email}`}
            className="hidden md:flex items-center gap-1.5 hover:text-amber-200 transition-colors font-medium"
            data-cursor="Email"
          >
            <Mail className="w-3.5 h-3.5 text-amber-300" />
            <span>{SCHOOL_INFO.email}</span>
          </a>
          <span className="hidden lg:flex items-center gap-1.5 text-white/80">
            <MapPin className="w-3.5 h-3.5 text-amber-300" />
            <span>Dehradun, Uttarakhand</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-amber-400 text-neutral-900 text-[10px] font-bold uppercase tracking-wider">
            CBSE Affiliated • Co-Ed Boarding
          </span>
          <button
            onClick={onOpenEnquiry}
            className="text-white hover:text-amber-200 font-semibold text-xs underline underline-offset-2 tracking-wide cursor-pointer"
          >
            Quick Enquiry
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 px-4 sm:px-8 py-3.5 ${
          isScrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md border-b border-gray-100 dark:border-gray-800"
            : "bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-800/50"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Emblem */}
          <a href="#" className="flex items-center gap-3 group" data-cursor="TIS Home">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#b90124] to-[#7c031b] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform border border-amber-300/40">
              <span className="font-serif font-black text-xl tracking-tighter text-amber-200">
                TIS
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg text-gray-900 dark:text-white leading-tight tracking-tight group-hover:text-[#b90124] dark:group-hover:text-rose-400 transition-colors">
                TULAS
              </span>
              <span className="text-[10px] font-bold tracking-widest text-[#b90124] dark:text-rose-400 uppercase">
                International School
              </span>
              <span className="text-[9px] text-gray-500 dark:text-gray-400 font-mono">
                Dehradun • Est. 2012
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-200 hover:text-[#b90124] dark:hover:text-rose-400 hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-all"
                data-cursor="View"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTAs & Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <ThemeToggle />

            <button
              type="button"
              onClick={onOpenEnquiry}
              data-cursor="Apply"
              className="relative group overflow-hidden px-4 sm:px-5 py-2 rounded-xl bg-gradient-to-r from-[#b90124] to-[#96001d] text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Apply Now
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/98 dark:bg-gray-950/98 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-2xl px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-[#b90124] flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-3">
                <a
                  href={`tel:${SCHOOL_INFO.admissionsHelpline}`}
                  className="flex items-center gap-2 text-xs font-semibold text-gray-600 dark:text-gray-300 px-4 py-2 bg-gray-50 dark:bg-gray-900 rounded-xl"
                >
                  <Phone className="w-4 h-4 text-[#b90124]" />
                  Call: {SCHOOL_INFO.admissionsHelpline}
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry();
                  }}
                  className="w-full py-3 rounded-xl bg-[#b90124] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  Begin Admission 2026-27
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
