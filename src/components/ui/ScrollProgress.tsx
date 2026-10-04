"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1.5 bg-neutral-200/40 dark:bg-neutral-800/40 pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-[#b90124] via-[#c09d59] to-[#60bab1] origin-left shadow-sm"
        style={{ scaleX }}
      />
      {percentage > 5 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="hidden md:flex absolute top-2 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-2 py-0.5 rounded-full border border-gray-200 dark:border-gray-800 shadow-sm text-[11px] font-mono font-medium text-gray-700 dark:text-gray-300 items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#b90124] animate-pulse" />
          {percentage}% Read
        </motion.div>
      )}
    </div>
  );
};
