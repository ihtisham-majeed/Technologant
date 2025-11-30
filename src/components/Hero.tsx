"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#050505]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(5,5,5,1))]" />
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[120px] opacity-50" />
        <div className="absolute left-1/2 top-0 w-[120%] h-full -translate-x-1/2 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-gray-300 tracking-wide">
                Available for new projects
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Crafting Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Masterpieces
              </span>
            </h1>

            <p className="text-sm sm:text-md md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              We are Technologant. A full-service digital agency building
              brands, websites, and experiences that define the future.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <Link
                href="#contact"
                className="group w-full sm:w-[220px] px-6 py-2 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
              >
                Start a Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#portfolio"
                className="group w-full sm:w-[220px] px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white font-medium text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center"
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
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">
          Scroll
        </span>
        <div className="w-px h-14 sm:h-16 bg-gradient-to-b from-gray-500/50 to-transparent" />
      </motion.div>
    </section>
  );
}
