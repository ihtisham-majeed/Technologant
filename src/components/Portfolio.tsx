/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Lumina E-Commerce",
    category: "Full Stack / Next.js",
    image:
      "https://images.unsplash.com/photo-1481487484168-9b930d5b7d9f?q=80&w=2070&auto=format&fit=crop",
    description:
      "A high-performance fashion store with real-time inventory and AI recommendations.",
  },
  {
    title: "Nexus Dashboard",
    category: "React / Analytics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description:
      "Enterprise-grade analytics platform processing millions of data points daily.",
  },
  {
    title: "Aura Brand Identity",
    category: "Design / Branding",
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
    description:
      "Complete visual identity overhaul for a luxury lifestyle brand.",
  },
  {
    title: "Vortex SaaS",
    category: "MERN Stack",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    description:
      "Project management tool for remote teams with real-time collaboration.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-22 bg-[#050505]">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Selected{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">
                Works
              </span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed -mb-6">
              A showcase of our most ambitious projects and creative endeavors.
            </p>
          </motion.div>

          {/* <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
             <button className="group flex items-center gap-2 text-white font-medium hover:text-purple-400 transition-colors tracking-wide">
                View GitHub <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </button>
          </motion.div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-16/10 overflow-hidden rounded-2xl mb-4 bg-white/5 border border-white/5">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
                  <div className="p-3 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all border border-white/10">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {/* Category on left */}
                <span className="text-xs font-semibold tracking-wider text-gray-500 border border-white/10 px-4 py-2 rounded-full uppercase w-fit">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-md leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
