"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden  pt-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-8 hover:bg-gray-200 transition-colors cursor-default">
              <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-gray-700 tracking-wide">
                Available for new projects
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-8 leading-[1.1] tracking-tight">
              Crafting Digital <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 float-animation">
                Masterpieces
              </span>
            </h1>

            <p className="text-md sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              We are Technologant. A full-service digital agency building
              brands, websites, and experiences that define the future.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link
                href="#contact"
                className="group w-full sm:w-60 px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Start a Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#portfolio"
                className="group w-full sm:w-60 px-8 py-4 rounded-full border-2 border-gray-300 text-gray-900 font-medium text-lg hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center"
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
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
          Scroll
        </span>
        <div className="w-px h-14 sm:h-16 bg-linear-to-r from-gray-400 to-transparent" />
      </motion.div>
    </section>
  );
}
