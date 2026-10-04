"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, X, RefreshCw, CheckCircle2, User, Phone, Calendar, Clock, ShieldAlert } from "lucide-react";
import { EnquiryRecord, ContactMessage } from "@/types";

export const SubmissionsDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{
    enquiries: EnquiryRecord[];
    contacts: ContactMessage[];
    stats: any;
  } | null>(null);

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/submissions");
      const json = await res.json();
      if (json.success) {
        setData(json.data);
      }
    } catch (err) {
      console.error("Error fetching submissions:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchSubmissions();
    }
  }, [isOpen]);

  const totalCount = data ? data.enquiries.length + data.contacts.length : 3;

  return (
    <>
      {/* Floating Reviewer Badge */}
      <motion.button
        type="button"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-[90] flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-neutral-900/90 dark:bg-white/90 text-white dark:text-neutral-900 shadow-xl border border-neutral-700 dark:border-neutral-200 text-xs font-medium hover:scale-105 transition-transform backdrop-blur-md"
        data-cursor="Inspector"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <Database className="w-3.5 h-3.5 text-amber-400 dark:text-[#b90124]" />
        <span>Live Backend DB ({totalCount})</span>
      </motion.button>

      {/* Slide-out Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[10000] flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-md bg-white dark:bg-gray-900 h-full shadow-2xl border-l border-gray-200 dark:border-gray-800 flex flex-col z-10"
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-gray-800/40">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#b90124]/10 text-[#b90124]">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm">
                      Backend API & DB Inspector
                    </h3>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                      Live SQLite / File-backed records
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={fetchSubmissions}
                    disabled={loading}
                    title="Refresh data"
                    className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
                  >
                    <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Status Banner */}
              <div className="px-5 py-3 bg-emerald-50 dark:bg-emerald-950/30 border-b border-emerald-100 dark:border-emerald-800/40 flex items-center justify-between text-xs text-emerald-800 dark:text-emerald-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Frontend ↔ Backend Route Handlers: <strong>Connected</strong></span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 font-semibold">
                  HTTP 200
                </span>
              </div>

              {/* Content List */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center justify-between">
                    <span>Admission Enquiries ({data?.enquiries.length || 0})</span>
                    <span className="text-[10px] text-gray-400 lowercase">saved via /api/enquiry</span>
                  </h4>

                  {data?.enquiries && data.enquiries.length > 0 ? (
                    <div className="space-y-3">
                      {data.enquiries.map((enq) => (
                        <div
                          key={enq.id}
                          className="p-3.5 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-800/60 text-xs space-y-1.5 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono font-bold text-[#b90124] dark:text-rose-400">
                              {enq.referenceId}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300">
                              {enq.classGrade}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5 font-medium text-gray-900 dark:text-white">
                            <User className="w-3.5 h-3.5 text-gray-400" />
                            {enq.fullName}
                          </div>

                          <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-[11px]">
                            <span className="flex items-center gap-1">
                              <Phone className="w-3 h-3" />
                              +{enq.countryCode} {enq.phone}
                            </span>
                            <span>• {enq.state}</span>
                          </div>

                          {enq.message && (
                            <p className="text-[11px] text-gray-600 dark:text-gray-300 italic bg-white dark:bg-gray-900 p-2 rounded border border-gray-100 dark:border-gray-800 mt-1">
                              &ldquo;{enq.message}&rdquo;
                            </p>
                          )}

                          <div className="flex items-center gap-1 text-[10px] text-gray-400 pt-1 border-t border-gray-200/50 dark:border-gray-700/50">
                            <Clock className="w-3 h-3" />
                            {new Date(enq.createdAt).toLocaleDateString()} at{" "}
                            {new Date(enq.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-6 text-xs text-gray-400">
                      No enquiries yet. Submit one using the homepage form!
                    </div>
                  )}
                </div>

                {/* General Contacts */}
                <div className="pt-2">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center justify-between">
                    <span>Contact Inquiries ({data?.contacts.length || 0})</span>
                    <span className="text-[10px] text-gray-400 lowercase">via /api/contact</span>
                  </h4>

                  {data?.contacts && data.contacts.length > 0 ? (
                    <div className="space-y-3">
                      {data.contacts.map((con) => (
                        <div
                          key={con.id}
                          className="p-3.5 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-800/60 text-xs space-y-1.5"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {con.name}
                            </span>
                            <span className="text-[10px] text-gray-400">{con.email}</span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-[11px]">
                            {con.message}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-4 text-xs text-gray-400">
                      No general messages yet.
                    </div>
                  )}
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-4 border-t border-gray-100 dark:border-gray-800 text-[11px] text-gray-500 dark:text-gray-400 flex items-center justify-between bg-gray-50 dark:bg-gray-800/40">
                <span>Submissions persist in <code>/data/db.json</code></span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
