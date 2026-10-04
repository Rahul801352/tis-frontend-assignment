"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";
import { useToast } from "./ui/Toast";
import confetti from "canvas-confetti";

export const Contact: React.FC = () => {
  const { toast } = useToast();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("91");
  const [classGrade, setClassGrade] = useState("Class IX");
  const [state, setState] = useState("Uttarakhand");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(true);
  const [loading, setLoading] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !classGrade || !state) {
      toast("Incomplete Fields", "Please complete all required fields.", "error");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          countryCode,
          classGrade,
          state,
          message,
          consent
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmittedRef(data.data.referenceId);
        try {
          confetti({
            particleCount: 90,
            spread: 60,
            origin: { y: 0.8 }
          });
        } catch (_) {}
        toast("Enquiry Received", `Your application reference is ${data.data.referenceId}`, "success");
      } else {
        toast("Error", data.error || "Failed to submit enquiry", "error");
      }
    } catch (err) {
      toast("Network Error", "Unable to connect to server.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setFullName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-24 bg-gray-50/70 dark:bg-gray-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-teal-100 dark:bg-teal-950/50 text-[#357e79] dark:text-teal-300 text-xs font-bold uppercase tracking-widest mb-3">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white tracking-tight">
            Connect with Tulas Admissions Office
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Our admissions team is available 6 days a week to answer your queries, schedule campus tours, and assist your family.
          </p>
        </div>

        {/* Contact Layout Grid: Info Card + Connected Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Campus Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700 shadow-sm space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
                  Campus Headquarters
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Tulas International School, Dehradun
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5 text-sm text-gray-700 dark:text-gray-300">
                <div className="p-2.5 rounded-xl bg-red-50 dark:bg-rose-950/40 text-[#b90124] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Campus Location</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">
                    {SCHOOL_INFO.location}
                  </p>
                </div>
              </div>

              {/* Phone Helpline */}
              <div className="flex items-start gap-3.5 text-sm text-gray-700 dark:text-gray-300">
                <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-[#c09d59] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Admissions Helpline</p>
                  <a
                    href={`tel:${SCHOOL_INFO.admissionsHelpline}`}
                    className="text-xs text-[#b90124] dark:text-rose-400 font-bold hover:underline block mt-0.5"
                  >
                    {SCHOOL_INFO.admissionsHelpline}
                  </a>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Landline: {SCHOOL_INFO.landlines.join(" / ")}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 text-sm text-gray-700 dark:text-gray-300">
                <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-[#60bab1] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Official Correspondence</p>
                  <a
                    href={`mailto:${SCHOOL_INFO.email}`}
                    className="text-xs text-gray-600 dark:text-gray-300 hover:text-[#b90124] block mt-0.5"
                  >
                    {SCHOOL_INFO.email}
                  </a>
                  <a
                    href={`mailto:${SCHOOL_INFO.admissionsEmail}`}
                    className="text-[11px] text-gray-500 hover:underline block"
                  >
                    {SCHOOL_INFO.admissionsEmail}
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5 text-sm text-gray-700 dark:text-gray-300 pt-2 border-t border-gray-100 dark:border-gray-700">
                <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-500 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Visiting Hours</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    Monday to Saturday: 9:00 AM – 5:00 PM IST
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Visual Embed Preview */}
            <div className="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm aspect-[16/9] relative">
              <iframe
                title="TIS Dehradun Campus Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.208753761765!2d77.8865903!3d30.3430336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092bb82f9d518f%3A0xc31e428e3b39d1b6!2sTula&#39;s%20International%20School!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Connected Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
                    Submit Admission Enquiry
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    Directly connected to TIS Admissions Database via REST API
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold font-mono">
                  LIVE API
                </span>
              </div>

              {submittedRef ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Thank You, {fullName}!
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                    Your enquiry has been successfully logged into our admissions database.
                  </p>
                  <div className="inline-block px-5 py-2.5 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700 rounded-2xl font-mono font-bold text-lg text-amber-800 dark:text-amber-300">
                    Application Ref: {submittedRef}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    You can view this submission in real-time in the &ldquo;Live Backend DB&rdquo; inspector in the bottom-left corner!
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-[#b90124] text-white text-xs font-bold hover:bg-[#96001d] transition-colors shadow-md"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                        Full Name of Student / Parent *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Ramesh Chandra"
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#b90124]/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. ramesh@example.com"
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#b90124]/40"
                      />
                    </div>
                  </div>

                  {/* Phone & Class */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                        Mobile Number *
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="w-20 px-2 py-2.5 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none"
                        >
                          <option value="91">+91</option>
                          <option value="1">+1</option>
                          <option value="44">+44</option>
                          <option value="971">+971</option>
                          <option value="65">+65</option>
                        </select>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="10-digit mobile"
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#b90124]/40"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                        Select Class for Admission *
                      </label>
                      <select
                        required
                        value={classGrade}
                        onChange={(e) => setClassGrade(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#b90124]/40"
                      >
                        <option value="Class IV">Class IV</option>
                        <option value="Class V">Class V</option>
                        <option value="Class VI">Class VI</option>
                        <option value="Class VII">Class VII</option>
                        <option value="Class VIII">Class VIII</option>
                        <option value="Class IX">Class IX</option>
                        <option value="Class X">Class X</option>
                        <option value="Class XI - Science">Class XI - Science</option>
                        <option value="Class XI - Commerce">Class XI - Commerce</option>
                        <option value="Class XI - Humanities">Class XI - Humanities</option>
                        <option value="Class XII - Science">Class XII - Science</option>
                        <option value="Class XII - Commerce">Class XII - Commerce</option>
                        <option value="Class XII - Humanities">Class XII - Humanities</option>
                      </select>
                    </div>
                  </div>

                  {/* State */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                      Current State / Region *
                    </label>
                    <select
                      required
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#b90124]/40"
                    >
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Assam">Assam</option>
                      <option value="International / NRI">International / NRI</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                      Specific Questions or Queries
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Inquiring about residential boarding facilities and scholarship tests..."
                      className="w-full px-4 py-2 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#b90124]/40 resize-none"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="contactConsent"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      required
                      className="mt-1 w-4 h-4 rounded text-[#b90124] focus:ring-[#b90124]"
                    />
                    <label htmlFor="contactConsent" className="text-xs text-gray-600 dark:text-gray-400 select-none cursor-pointer">
                      I agree to receive communications regarding admission, prospectus, and fee structure from Tulas International School, Dehradun.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    data-cursor="Submit"
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#b90124] to-[#96001d] text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Admission Enquiry Now</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
