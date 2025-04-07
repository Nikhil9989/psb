'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Learning Paths', href: '/learning-paths' },
  { name: 'Domains', href: '/domains' },
  { name: 'Mentorship', href: '/mentorship' },
  { name: 'Alumni', href: '/alumni' },
];

const HeaderImproved = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerBackgroundClass = isHomePage
    ? scrolled
      ? 'bg-obsidian-900/95 backdrop-blur-sm border-b border-gold-500/10 py-3'
      : 'bg-transparent py-5'
    : 'bg-obsidian-900 py-3 border-b border-gold-500/10';

  return (
    <header
      className={`fixed w-full z-30 transition-all duration-300 ${headerBackgroundClass}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <span className="font-display font-bold text-2xl md:text-3xl relative">
              <span className="text-white">SKILL</span>
              <span className="text-gold-500">BRIDGE</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300"></span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <Link
                href={link.href}
                className={`font-medium text-sm tracking-wide transition-colors relative group ${
                  pathname === link.href ? 'text-gold-500' : 'text-white hover:text-gold-500'
                }`}
              >
                <span>
                  {link.name}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hidden md:block"
        >
          <Link
            href="/contact"
            className="btn btn-outline-gold px-4 py-2 text-xs font-medium mr-3 group relative overflow-hidden"
          >
            <span className="relative z-10">Contact Us</span>
          </Link>
          <Link
            href="/enroll"
            className="btn btn-gold px-5 py-2 text-xs font-medium group relative overflow-hidden"
          >
            <span className="relative z-10">Join Next Cohort</span>
            {/* Gold shimmer effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-500/0 via-gold-500/30 to-gold-500/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-obsidian-800 border-b border-gold-500/10"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors py-2 border-b border-obsidian-700 ${
                    pathname === link.href ? 'text-gold-500' : 'text-white hover:text-gold-500'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn btn-outline-gold w-full text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                href="/enroll"
                className="btn btn-gold w-full text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Join Next Cohort
              </Link>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default HeaderImproved;