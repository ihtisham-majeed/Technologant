"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, Check, Linkedin, Instagram } from "lucide-react";
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
      className="py-24 bg-gray-50 dark:bg-[#0f0f0f] relative overflow-hidden transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight text-black dark:text-white">
              Let&apos;s build <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                something great.
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-md leading-relaxed">
              Ready to start your next project? We are here to help you turn
              your vision into reality.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-all">
                  <Mail size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 mb-1 uppercase tracking-wider">
                    Email Us
                  </p>
                  <p className="text-lg sm:text-xl font-medium text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-outfit">
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
                  className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 py-4 text-xl text-black dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors placeholder-transparent peer"
                  placeholder="Your Name"
                  id="name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-4 text-gray-500 dark:text-gray-400 text-xl transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400 peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-700 dark:peer-not-placeholder-shown:text-gray-300 pointer-events-none"
                >
                  Your Name
                </label>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 py-4 text-xl text-black dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors placeholder-transparent peer"
                  placeholder="Email Address"
                  id="email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-4 text-gray-500 dark:text-gray-400 text-xl transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400 peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-700 dark:peer-not-placeholder-shown:text-gray-300 pointer-events-none"
                >
                  Email Address
                </label>
              </div>

              {/* Service Selection */}
              <div className="space-y-4">
                <label className="text-sm text-gray-700 dark:text-gray-300 uppercase tracking-wider block font-medium">
                  I&apos;m interested in...
                </label>
                <div className="flex flex-wrap gap-3">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all duration-300 ${
                        selectedService === service
                          ? "bg-blue-600 border-blue-600 text-white"
                          : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
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
                  className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 py-4 text-xl text-black dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors placeholder-transparent peer resize-none"
                  placeholder="Project Details"
                  id="message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-4 text-gray-500 dark:text-gray-400 text-xl transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400 peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-700 dark:peer-not-placeholder-shown:text-gray-300 pointer-events-none"
                >
                  Project Details
                </label>
              </div>
            </div>

            <button
              disabled={formState !== "idle"}
              className="group flex items-center gap-4 text-xl font-bold text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formState === "submitting" ? "Sending..." : "Send Message"}
              <span className="p-4 rounded-full bg-blue-600 text-white group-hover:bg-blue-700 group-hover:scale-110 transition-all">
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
            className="fixed bottom-10 left-1/2 z-50 flex items-center gap-4 px-6 py-4 rounded-2xl bg-white dark:bg-[#18181b] border border-gray-200 dark:border-gray-700 shadow-2xl"
          >
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
              <Check size={20} strokeWidth={3} />
            </div>
            <div>
              <h4 className="text-black dark:text-white font-bold">
                Message Sent!
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We&apos;ll get back to you shortly.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="mt-20 text-center text-gray-600 dark:text-gray-400 relative z-10">
        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <a
            href="https://www.linkedin.com/company/technologant"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/technologant"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.tiktok.com/@technologant03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="TikTok"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </a>
        </div>

        {/* Decorative gradient line */}
        <div className="w-60 h-1 mx-auto mb-4 bg-linear-to-r from-transparent via-gray-300 to-transparent rounded-full" />

        <p className="text-sm -mb-10">
          &copy; {new Date().getFullYear()} Technologant. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
