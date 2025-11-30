'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b',
        isScrolled 
          ? 'py-4 bg-[#050505]/80 backdrop-blur-xl border-white/5' 
          : 'py-6 bg-transparent border-transparent'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <Link href="/" className="relative group z-50">
          <span className="text-2xl font-bold font-outfit tracking-tight text-white">
            Technologant<span className="text-cyan-400">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-cyan-400 transition-colors duration-300"
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
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-0 left-0 right-0 bg-[#050505] pt-24 px-6 border-b border-white/10"
          >
            <div className="flex flex-col space-y-8 items-center justify-center h-full pb-24">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-medium text-white/80 hover:text-white font-outfit"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="w-full max-w-xs py-4 rounded-xl bg-white text-black font-bold text-center mt-8"
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
