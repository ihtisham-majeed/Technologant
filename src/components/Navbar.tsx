"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Linkedin, Instagram } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "py-4 bg-gray-800 shadow-lg" : "py-4 bg-gray-800"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <Link href="/" className="relative group z-50">
          <span className="text-2xl font-bold font-outfit tracking-tight text-white">
            Technologant<span className="text-blue-600">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white  tracking-wide relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* Social Icons Desktop */}
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-600">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-600 transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          <Link
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >
            Start Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-0 left-0 right-0 bg-gray-800 pt-16 px-6"
          >
            <div className="flex flex-col space-y-8 items-center justify-center h-full pb-24">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-medium text-white font-outfit"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Social Icons Mobile */}
              <div className="flex items-center gap-6 mt-8">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white "
                      aria-label={social.name}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>

              <Link
                href="#contact"
                className="w-full max-w-xs py-4 rounded-xl bg-blue-600 text-white font-bold text-center mt-8 hover:bg-blue-700 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Start Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
