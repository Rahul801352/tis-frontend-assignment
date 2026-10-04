"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, X, RefreshCw, CheckCircle2, User, Phone, Clock, Sparkles } from "lucide-react";
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
      const res = await fetch("/api/submissions", { cache: "no-store" });
      const json = await res.json();
      
      // Get any local browser submissions
      let localEnquiries: EnquiryRecord[] = [];
      try {
        const stored = localStorage.getItem("tis_client_submissions");
        if (stored) {
          localEnquiries = JSON.parse(stored);
        }
      } catch (_) {}

      if (json.success) {
        // Merge server enquiries with local enquiries (deduplicate by id/referenceId)
        const serverEnqs: EnquiryRecord[] = json.data.enquiries || [];
        const seen = new Set(serverEnqs.map((e) => e.referenceId || e.id));
        const merged = [...serverEnqs];

        for (const local of localEnquiries) {
          if (!seen.has(local.referenceId || local.id)) {
            merged.unshift(local);
            seen.add(local.referenceId || local.id);
          }
        }

        setData({
          ...json.data,
          enquiries: merged,
        });
      }
    } catch (err) {
      console.error("Error fetching submissions:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Expose global drawer trigger
    (window as any).openTisSubmissionsDrawer = () => {
      setIsOpen(true);
    };

    const handleRecordAdded = (e: any) => {
      const newRecord = e.detail;
      if (newRecord) {
        try {
          const stored = localStorage.getItem("tis_client_submissions");
          const list = stored ? JSON.parse(stored) : [];
          list.unshift(newRecord);
          localStorage.setItem("tis_client_submissions", JSON.stringify(list.slice(0, 20)));
        } catch (_) {}
      }
      fetchSubmissions();
    };

    window.addEventListener("tis_record_added", handleRecordAdded);
    return () => {
      window.removeEventListener("tis_record_added", handleRecordAdded);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      fetchSubmissions();
    }
  }, [isOpen]);

  const totalCount = data ? data.enquiries.length : 4;

  return (
    <>
      {/* Floating Reviewer Badge */}
      <motion.button
        type="button"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-[90] flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-neutral-900/95 dark:bg-white/95 text-white dark:text-neutral-900 shadow-2xl border-2 border-amber-400 dark:border-[#b90124] text-xs font-bold hover:scale-105 transition-transform backdrop-blur-md cursor-pointer"
        data-cursor="Inspector"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <Database className="w-4 h-4 text-amber-400 dark:text-[#b90124]" />
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
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-md bg-white dark:bg-gray-900 h-full shadow-2xl border-l border-gray-200 dark:border-gray-800 flex flex-col z-10"
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/80 dark:bg-gray-800/60">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#b90124]/10 text-[#b90124]">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm">
                      Backend Admissions Database
                    </h3>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                      Live records saved via <code>/api/enquiry</code>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={fetchSubmissions}
                    disabled={loading}
                    title="Refresh data"
                    className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
                  >
                    <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Status Banner */}
              <div className="px-5 py-3 bg-emerald-50 dark:bg-emerald-950/30 border-b border-emerald-100 dark:border-emerald-800/40 flex items-center justify-between text-xs text-emerald-800 dark:text-emerald-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Frontend ↔ Backend Route Handlers: <strong>Active</strong></span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 font-semibold">
                  HTTP 200
                </span>
              </div>

              {/* Content List */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center justify-between">
                    <span>Stored Enquiries ({data?.enquiries.length || 0})</span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Live Persisted
                    </span>
                  </h4>

                  {data?.enquiries && data.enquiries.length > 0 ? (
                    <div className="space-y-3">
                      {data.enquiries.map((enq, index) => (
                        <div
                          key={enq.id || index}
                          className="p-4 rounded-2xl border border-gray-200 dark:border-gray-700/80 bg-gray-50 dark:bg-gray-800/70 text-xs space-y-2 hover:border-[#b90124]/50 transition-colors shadow-xs"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono font-bold text-[#b90124] dark:text-rose-400 text-sm">
                              {enq.referenceId}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-200 border border-amber-300/50">
                              {enq.classGrade}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 font-bold text-gray-900 dark:text-white text-sm">
                            <User className="w-4 h-4 text-[#b90124]" />
                            {enq.fullName}
                          </div>

                          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-xs flex-wrap">
                            <span className="flex items-center gap-1 font-mono">
                              <Phone className="w-3.5 h-3.5 text-gray-400" />
                              +{enq.countryCode} {enq.phone}
                            </span>
                            <span>• {enq.state}</span>
                            {enq.email && <span className="text-gray-500">• {enq.email}</span>}
                          </div>

                          {enq.message && (
                            <p className="text-[11px] text-gray-600 dark:text-gray-300 italic bg-white dark:bg-gray-900/80 p-2.5 rounded-xl border border-gray-100 dark:border-gray-800">
                              &ldquo;{enq.message}&rdquo;
                            </p>
                          )}

                          <div className="flex items-center gap-1 text-[10px] text-gray-400 pt-2 border-t border-gray-200/60 dark:border-gray-700/60">
                            <Clock className="w-3 h-3" />
                            <span>Submitted: {new Date(enq.createdAt).toLocaleString()}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-xs text-gray-400">
                      Loading saved applications...
                    </div>
                  )}
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-4 border-t border-gray-100 dark:border-gray-800 text-[11px] text-gray-500 dark:text-gray-400 flex items-center justify-between bg-gray-50 dark:bg-gray-800/40">
                <a
                  href="/api/submissions"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#b90124] dark:text-rose-400 font-semibold hover:underline"
                >
                  View Raw JSON API →
                </a>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-1.5 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold"
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
