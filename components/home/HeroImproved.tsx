'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { AnimatedCounter, AnimatedDateDisplay } from '../ui/AnimatedCounters';

const HeroImproved: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950 to-obsidian-900 -z-10"></div>
      
      {/* Particle effect background */}
      <div className="absolute inset-0 opacity-30 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] bg-repeat bg-[length:30px_30px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Bridge the <span className="text-gold-500">Skill Gap</span> in Indian Education
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Our domain-based learning approach transforms theoretical knowledge into practical expertise, helping students in tier-2 and tier-3 cities become industry-ready.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <Link
                href="/enroll"
                className="btn btn-gold px-8 py-3 font-medium group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Apply Now 
                  <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Gold shimmer effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-500/0 via-gold-500/30 to-gold-500/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link
                href="/learning-paths"
                className="btn btn-outline-gold px-8 py-3 font-medium"
              >
                Explore Domains
              </Link>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <AnimatedCounter label="Available Seats" count={24} />
              <AnimatedDateDisplay label="Next Cohort Starts" date="May 15, 2025" />
              <AnimatedDateDisplay label="Application Deadline" date="April 30, 2025" />
            </div>
          </motion.div>
          
          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg xl:max-w-xl">
              {/* Glass card effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl backdrop-blur-sm border border-white/10 transform rotate-3"></div>
              
              {/* Main image */}
              <img
                src="/images/hero-illustration.webp"
                alt="Students learning through SKILL BRIDGE"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 bg-obsidian-800/90 backdrop-blur-sm rounded-lg p-4 border border-gold-500/20 shadow-xl transform -rotate-3 z-20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                    <span className="text-xl">🧠</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">AI-Powered</div>
                    <div className="text-sm font-medium text-white">Personalized Learning</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-obsidian-800/90 backdrop-blur-sm rounded-lg p-4 border border-gold-500/20 shadow-xl z-20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                    <span className="text-xl">🏆</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Real-World</div>
                    <div className="text-sm font-medium text-white">Industry Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroImproved;