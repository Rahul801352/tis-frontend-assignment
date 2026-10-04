"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 animate-pulse border border-gray-200 dark:border-gray-700" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      data-cursor={isDark ? "Light" : "Dark"}
      className="relative p-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-100 shadow-sm hover:shadow transition-colors duration-200 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#b90124]/40"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-amber-300 drop-shadow-sm" />
        ) : (
          <Sun className="w-4 h-4 text-amber-600 drop-shadow-sm" />
        )}
      </motion.div>
    </motion.button>
  );
};
