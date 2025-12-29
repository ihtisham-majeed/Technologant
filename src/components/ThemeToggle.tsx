"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-8 left-8 z-50 p-4 rounded-full bg-linear-to-br from-blue-600 to-purple-600 text-white shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {theme === "light" ? (
          <Moon className="w-6 h-6" />
        ) : (
          <Sun className="w-6 h-6" />
        )}
      </motion.div>

      {/* Ripple effect on hover */}
      <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
    </motion.button>
  );
}
