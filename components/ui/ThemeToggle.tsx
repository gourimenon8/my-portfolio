"use client";
// components/ui/ThemeToggle.tsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // On mount, read saved preference
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved === "dark" || (!saved && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle dark mode"
      className="relative h-7 w-13 rounded-full border border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-neutral-800 transition-colors flex items-center px-1"
      style={{ width: "52px" }}
    >
      <motion.div
        animate={{ x: dark ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        className="h-5 w-5 rounded-full bg-white dark:bg-amber-500 shadow-sm flex items-center justify-center text-[11px]"
      >
        {dark ? "🌙" : "☀️"}
      </motion.div>
    </motion.button>
  );
}
