"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, Facebook, Instagram, Youtube, Linkedin, Twitter, ArrowUp, Sparkles, Heart } from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";
import { useToast } from "./ui/Toast";

export const Footer: React.FC = () => {
  const { toast } = useToast();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      toast("Invalid Email", "Please enter a valid email address.", "error");
      return;
    }

    setSubscribing(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      const data = await res.json();
      if (data.success) {
        toast("Subscribed!", data.message, "success");
        setNewsletterEmail("");
      } else {
        toast("Error", data.error, "error");
      }
    } catch (err) {
      toast("Error", "Could not subscribe.", "error");
    } finally {
      setSubscribing(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-20 pb-12 border-t border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Newsletter & Slogan Banner */}
        <div className="pb-16 mb-16 border-b border-neutral-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <span className="text-amber-400 text-xs font-bold font-mono tracking-widest uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Stay Informed
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Subscribe to the TIS Monthly Bulletin
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Receive updates on academic achievements, Olympic sports clinics, and admissions deadlines.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleNewsletter} className="flex gap-2 max-w-md lg:ml-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter parent email address..."
                className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#b90124]"
              />
              <button
                type="submit"
                disabled={subscribing}
                data-cursor="Subscribe"
                className="px-6 py-3 rounded-xl bg-[#b90124] hover:bg-[#96001d] text-white text-sm font-bold shrink-0 transition-colors flex items-center gap-1.5 disabled:opacity-50"
              >
                {subscribing ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Join</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* 4-Column Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-neutral-800 text-xs">
          
          {/* Col 1 & 2: School Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#b90124] to-[#7c031b] flex items-center justify-center text-white border border-amber-300/40">
                <span className="font-serif font-black text-lg tracking-tighter text-amber-200">
                  TIS
                </span>
              </div>
              <div>
                <span className="font-serif font-bold text-base text-white tracking-tight block">
                  TULAS INTERNATIONAL SCHOOL
                </span>
                <span className="text-[10px] text-amber-400 font-mono tracking-widest uppercase">
                  The Modern Gurukul • Dehradun
                </span>
              </div>
            </div>

            <p className="text-neutral-400 leading-relaxed max-w-sm">
              Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities. Affiliated with CBSE (Classes IV to XII).
            </p>

            <div className="space-y-1.5 pt-2 text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#b90124] shrink-0" />
                <span>Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#b90124] shrink-0" />
                <span>Admissions Helpline: {SCHOOL_INFO.admissionsHelpline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#b90124] shrink-0" />
                <span>{SCHOOL_INFO.email}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={SCHOOL_INFO.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="TIS Facebook"
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#b90124] transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SCHOOL_INFO.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="TIS Instagram"
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#b90124] transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SCHOOL_INFO.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="TIS YouTube"
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#b90124] transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={SCHOOL_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="TIS LinkedIn"
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#b90124] transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SCHOOL_INFO.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="TIS Twitter"
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#b90124] transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About TIS</a></li>
              <li><a href="#academics" className="hover:text-amber-400 transition-colors">Academic Programs</a></li>
              <li><a href="#facilities" className="hover:text-amber-400 transition-colors">Campus Facilities</a></li>
              <li><a href="#sports" className="hover:text-amber-400 transition-colors">16+ Olympic Sports</a></li>
              <li><a href="#testimonials" className="hover:text-amber-400 transition-colors">Parent Reviews</a></li>
              <li><a href="#admissions" className="hover:text-amber-400 transition-colors">Admissions 2026–27</a></li>
            </ul>
          </div>

          {/* Col 4: Academics & Boarding */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider font-mono">
              Wings & Boarding
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#academics" className="hover:text-amber-400 transition-colors">Primary Wing (IV–V)</a></li>
              <li><a href="#academics" className="hover:text-amber-400 transition-colors">Middle School (VI–VIII)</a></li>
              <li><a href="#academics" className="hover:text-amber-400 transition-colors">Secondary Wing (IX–X)</a></li>
              <li><a href="#academics" className="hover:text-amber-400 transition-colors">Senior Secondary (XI–XII)</a></li>
              <li><a href="#facilities" className="hover:text-amber-400 transition-colors">Boys & Girls Hostels</a></li>
              <li><a href="#facilities" className="hover:text-amber-400 transition-colors">Hygienic Organic Dining</a></li>
            </ul>
          </div>

          {/* Col 5: Governance & Policies */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider font-mono">
              Mandatory Policies
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Mandatory CBSE Disclosure</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Child Welfare & Safety Policy</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Disciplinary Guidelines</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Mobile Phone Policy</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Annual Academic Calendar</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Fedena Parent Portal</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Tulas International School, Dehradun. All Rights Reserved. Managed under Rishabh Educational Trust.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              data-cursor="Top"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
