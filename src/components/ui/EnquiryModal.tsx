"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, GraduationCap, Phone, User, Mail, MapPin, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { useToast } from "./Toast";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultGrade?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, defaultGrade = "" }) => {
  const { toast } = useToast();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("91");
  const [classGrade, setClassGrade] = useState(defaultGrade || "Class IX");
  const [state, setState] = useState("Uttarakhand");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(true);
  const [loading, setLoading] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !classGrade || !state) {
      toast("Missing Information", "Please fill in all mandatory fields.", "error");
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
        })
      });

      const data = await res.json();
      if (data.success) {
        setSubmittedRef(data.data.referenceId);
        try {
          window.dispatchEvent(new CustomEvent('tis_record_added', { detail: data.data }));
        } catch (_) {}
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (_) {}
        toast("Application Registered!", `Your reference ID is ${data.data.referenceId}`, "success");
      } else {
        toast("Submission Failed", data.error || "Unable to submit enquiry.", "error");
      }
    } catch (err) {
      toast("Error", "Network connection failed. Please retry.", "error");
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
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden z-10 my-8"
          >
            {/* Header Banner */}
            <div className="relative bg-gradient-to-r from-[#96001d] via-[#b90124] to-[#60bab1] px-6 py-6 text-white">
              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-neutral-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Admissions 2026-27
                </span>
                <span className="text-xs text-white/80 font-medium">Dehradun Campus</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif tracking-tight">
                Begin Your Child’s Journey at TIS
              </h3>
              <p className="text-xs sm:text-sm text-white/90 mt-1 max-w-md">
                Experience world-class residential education in the serene foothills of Dehradun.
              </p>
            </div>

            {/* Content Body */}
            <div className="p-6">
              {submittedRef ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-9 h-9" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Enquiry Registered Successfully!
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 max-w-sm mx-auto mb-4">
                    Thank you, <span className="font-semibold">{fullName}</span>. Your application tracking ID is:
                  </p>
                  <div className="inline-block px-4 py-2 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/60 rounded-xl font-mono font-bold text-lg text-amber-700 dark:text-amber-300 mb-6">
                    {submittedRef}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                    Our Senior Admissions Counselor will contact you via phone and email within 24 hours with the campus prospectus and entrance guidelines.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        handleReset();
                        if (typeof window !== "undefined") {
                          (window as any).openTisSubmissionsDrawer?.();
                        }
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-bold hover:scale-105 transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 dark:text-[#b90124]" />
                      <span>View in Live Database Inspector</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#b90124] text-white text-xs font-bold hover:bg-[#96001d] transition-colors shadow-md"
                    >
                      Done / Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Student / Parent Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Rajesh Singhania"
                          className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#b90124]/40"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Email Address (Optional)
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. rajesh@example.com"
                          className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#b90124]/40"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone & Class */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Mobile Number *
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="w-20 px-2 py-2 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none"
                        >
                          <option value="91">+91 (IN)</option>
                          <option value="1">+1 (US)</option>
                          <option value="44">+44 (UK)</option>
                          <option value="971">+971 (UAE)</option>
                          <option value="65">+65 (SG)</option>
                        </select>
                        <div className="relative flex-1">
                          <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                          <input
                            type="tel"
                            required
                            maxLength={10}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="10-digit number"
                            className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#b90124]/40"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Seeking Admission In *
                      </label>
                      <div className="relative">
                        <GraduationCap className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                        <select
                          required
                          value={classGrade}
                          onChange={(e) => setClassGrade(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#b90124]/40"
                        >
                          <option value="Class IV">Class IV (Primary)</option>
                          <option value="Class V">Class V (Primary)</option>
                          <option value="Class VI">Class VI (Middle)</option>
                          <option value="Class VII">Class VII (Middle)</option>
                          <option value="Class VIII">Class VIII (Middle)</option>
                          <option value="Class IX">Class IX (Secondary)</option>
                          <option value="Class X">Class X (Secondary)</option>
                          <option value="Class XI - Science">Class XI - Science (PCM/PCB)</option>
                          <option value="Class XI - Commerce">Class XI - Commerce</option>
                          <option value="Class XI - Humanities">Class XI - Humanities</option>
                          <option value="Class XII - Science">Class XII - Science</option>
                          <option value="Class XII - Commerce">Class XII - Commerce</option>
                          <option value="Class XII - Humanities">Class XII - Humanities</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* State / Region */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Current State / Location *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                      <select
                        required
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#b90124]/40"
                      >
                        <option value="Uttarakhand">Uttarakhand (Dehradun & surrounding)</option>
                        <option value="Delhi NCR">Delhi NCR</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="West Bengal">West Bengal</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Assam & North East">Assam & North East</option>
                        <option value="International / NRI">International / NRI</option>
                        <option value="Other">Other States</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Questions / Specific Interests (Sports, Hostel, Board)
                    </label>
                    <textarea
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Enquiring about horse riding facilities and CBSE board curriculum..."
                      className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#b90124]/40 resize-none"
                    />
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="modalConsent"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      required
                      className="mt-1 w-4 h-4 rounded text-[#b90124] focus:ring-[#b90124]"
                    />
                    <label htmlFor="modalConsent" className="text-xs text-gray-600 dark:text-gray-400 select-none cursor-pointer">
                      I agree to receive communications regarding admission, prospectus, and fee structure from Tulas International School, Dehradun.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#b90124] to-[#96001d] text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:opacity-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Admission Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
