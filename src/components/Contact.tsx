/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, ArrowRight, Check, ChevronDown } from "lucide-react";
import { useState } from "react";

const services = [
  "MERN Stack Development",
  "WordPress Development",
  "Shopify Store",
  "SEO Optimization",
  "Other",
];

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const [selectedService, setSelectedService] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setFormState("success");

    // Reset form after showing success message
    setTimeout(() => {
      setFormState("idle");
      setSelectedService("");
      (e.target as HTMLFormElement).reset();
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="py-22 bg-[#050505] relative overflow-hidden"
    >
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-linear-to-t from-cyan-900/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Let&apos;s build <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">
                something great.
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-md leading-relaxed">
              Ready to start your next project? We are here to help you turn
              your vision into reality.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-white/30 transition-all bg-white/5">
                  <Mail size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 mb-1 uppercase tracking-wider">
                    Email Us
                  </p>
                  <p className="text-lg sm:text-xl font-medium text-white group-hover:text-cyan-400 transition-colors font-outfit">
                    technologant@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-1 sm:-mt-15 relative"
            onSubmit={handleSubmit}
          >
            <div className="space-y-8">
              <div className="relative group">
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-transparent peer"
                  placeholder="Your Name"
                  id="name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-4 text-gray-500 text-xl transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-cyan-400 peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-400 pointer-events-none"
                >
                  Your Name
                </label>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-transparent peer"
                  placeholder="Email Address"
                  id="email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-4 text-gray-500 text-xl transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-cyan-400 peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-400 pointer-events-none"
                >
                  Email Address
                </label>
              </div>

              {/* Service Selection */}
              <div className="space-y-4">
                <label className="text-sm text-gray-500 uppercase tracking-wider block">
                  I&apos;m interested in...
                </label>
                <div className="flex flex-wrap gap-3">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`px-4 py-2 rounded-full border text-sm transition-all duration-300 ${
                        selectedService === service
                          ? "bg-cyan-500 border-cyan-500 text-white"
                          : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
                <input
                  type="hidden"
                  name="service"
                  value={selectedService}
                  required
                />
              </div>

              <div className="relative group">
                <textarea
                  rows={3}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-transparent peer resize-none"
                  placeholder="Project Details"
                  id="message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-4 text-gray-500 text-xl transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-cyan-400 peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-400 pointer-events-none"
                >
                  Project Details
                </label>
              </div>
            </div>

            <button
              disabled={formState !== "idle"}
              className="group flex items-center gap-4 text-xl font-bold text-white hover:text-cyan-400 transition-colors mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formState === "submitting" ? "Sending..." : "Send Message"}
              <span className="p-4 rounded-full bg-white/10 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                <ArrowRight size={24} />
              </span>
            </button>
          </motion.form>
        </div>
      </div>

      {/* Success Notification Popup */}
      <AnimatePresence>
        {formState === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            className="fixed bottom-10 left-1/2 z-50 flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl"
          >
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black">
              <Check size={20} strokeWidth={3} />
            </div>
            <div>
              <h4 className="text-white font-bold">Message Sent!</h4>
              <p className="text-gray-300 text-sm">
                We&apos;ll get back to you shortly.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="mt-14 -mb-10 text-center text-gray-500 text-sm relative z-10">
        {/* Decorative gradient line */}
        <div className="w-60 h-1 mx-auto mb-3 bg-gradient-to-b from-gray-500/50 to-transparent rounded-full" />
        &copy; {new Date().getFullYear()} Technologant. All rights reserved.
      </footer>
    </section>
  );
}
