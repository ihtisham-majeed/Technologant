/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    content:
      "Technologant transformed our digital presence completely. Their attention to detail and technical expertise is unmatched.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "GrowthLabs",
    content:
      "Working with Technologant was a game-changer. They delivered beyond our expectations and on time.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "BrandCo",
    content:
      "The team at Technologant is incredibly professional. They understood our vision and brought it to life beautifully.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-[#18181b] p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-lg dark:hover:shadow-blue-900/20 transition-all duration-300 relative"
            >
              <Quote className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4 opacity-50" />

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-600/50 dark:ring-blue-400/50"
                />
                <div>
                  <h4 className="font-bold text-black dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
