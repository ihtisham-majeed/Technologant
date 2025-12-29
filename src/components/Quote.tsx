"use client";

import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0f0f0f] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-white dark:bg-[#18181b] border border-gray-200 dark:border-gray-700 p-12 rounded-3xl"
        >
          <div className="mb-8">
            <svg
              className="w-16 h-16 mx-auto text-blue-600 dark:text-blue-400 opacity-50"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
            Innovation distinguishes between a leader and a follower.
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
            — Steve Jobs
          </p>
        </motion.div>
      </div>
    </section>
  );
}
