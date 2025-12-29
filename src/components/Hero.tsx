"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white dark:bg-[#0a0a0a] transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-8 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-default">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 tracking-wide">
                Available for new projects
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black dark:text-white mb-8 leading-[1.1] tracking-tight">
              Building Digital <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 float-animation">
                Excellence
              </span>
            </h1>

            <p className="text-md sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              We are Technologant. A full-service digital agency building
              brands, websites, and experiences that define the future.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link
                href="#contact"
                className="group w-full sm:w-60 px-8 py-4 rounded-full bg-blue-600 dark:bg-blue-500 text-white font-bold text-lg hover:bg-blue-700 dark:hover:bg-blue-600 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Start a Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#portfolio"
                className="group w-full sm:w-60 px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 font-medium text-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all flex items-center justify-center"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-0 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-medium">
          Scroll
        </span>
        <div className="w-px h-14 sm:h-16 bg-linear-to-r from-gray-400 dark:from-gray-600 to-transparent" />
      </motion.div>
    </section>
  );
}
