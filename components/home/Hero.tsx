'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-16 pb-20 bg-obsidian-900">
      {/* Gold pattern background */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-5 z-0"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 animated-gold-gradient opacity-10 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-gold-500/5 blur-xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-gold-500/10 blur-xl"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-gold-500/5 blur-xl"></div>
      
      {/* Gold particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%', 
              scale: Math.random() * 0.5 + 0.5 
            }}
            animate={{ 
              y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ 
              repeat: Infinity,
              duration: Math.random() * 10 + 10,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 rounded-full bg-gold-500"
            style={{ 
              filter: 'blur(1px)',
              boxShadow: '0 0 8px 2px rgba(255, 192, 0, 0.3)' 
            }}
          ></motion.div>
        ))}
      </div>

      <div className="container relative z-10 w-full py-16 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-1.5 bg-obsidian-800 border border-gold-500/30 text-gold-500 rounded-full text-sm font-medium tracking-wide">
                Cohort 7 Enrolling Now
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display mb-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            >
              Transform Your <span className="gold-gradient-text">Potential</span> Through <br className="hidden md:block" />
              <span className="gold-gradient-text">Domain Mastery</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base md:text-lg text-obsidian-200 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              SKILL BRIDGE offers cohort-based learning journeys that transform theoretical knowledge into practical, industry-ready expertise through our revolutionary 5-phase progression system.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link 
                href="/enroll"
                className="btn btn-gold px-8 py-3 text-sm"
              >
                Join Next Cohort
              </Link>
              <Link 
                href="/approach"
                className="btn btn-outline-gold px-8 py-3 text-sm"
              >
                Explore Our Approach
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-10 flex items-center justify-center lg:justify-start text-xs md:text-sm text-obsidian-300"
            >
              <div className="flex -space-x-2 mr-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-obsidian-800 bg-obsidian-700 flex items-center justify-center shadow-sm"
                  >
                    <span className="text-xs font-medium text-gold-500">
                      {String.fromCharCode(65 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <span>Joined by <strong className="text-gold-500">5000+</strong> learners across India</span>
            </motion.div>
          </motion.div>
          
          {/* Hero Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10">
              <div className="p-1 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg shadow-gold overflow-hidden">
                <div className="bg-obsidian-800 rounded-lg p-6 backdrop-blur-sm">
                  <div className="aspect-w-16 aspect-h-9 relative w-full h-[350px]">
                    {/* Visualization of the Domain Learning Path */}
                    <div className="absolute inset-0 p-6">
                      <div className="relative h-full">
                        {/* Progress Path */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gold-500/30 transform -translate-x-1/2"></div>
                        
                        {/* Phases */}
                        {['Inception', 'Acceleration', 'Integration', 'Mastery', 'Transcendence'].map((phase, index) => (
                          <motion.div 
                            key={phase}
                            className="absolute left-1/2 transform -translate-x-1/2"
                            style={{ top: `${index * 22}%` }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              delay: 0.5 + (index * 0.1),
                              duration: 0.6,
                              ease: "easeOut"
                            }}
                          >
                            <div className="flex items-center justify-center">
                              <motion.div 
                                className="w-4 h-4 rounded-full bg-gold-500 shadow-gold absolute z-10"
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                  ease: "easeInOut",
                                  delay: index * 0.2
                                }}
                              ></motion.div>
                              <div className="w-8 h-8 rounded-full bg-gold-500/20 absolute animate-pulse"></div>
                              <div className="absolute left-6 ml-2 whitespace-nowrap">
                                <div className="text-gold-500 text-sm font-medium">{phase}</div>
                                <div className="text-xs text-obsidian-300">{(index + 1) * 20}%</div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                        
                        {/* Domain Skills */}
                        <motion.div 
                          className="absolute right-0 top-1/4 mr-2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.2, duration: 0.5 }}
                        >
                          <div className="bg-obsidian-700 border border-gold-500/20 rounded-lg p-3 inline-block">
                            <div className="text-sm text-gold-400 font-medium">Full Stack</div>
                            <div className="text-xs text-obsidian-300">Web Development</div>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="absolute right-0 bottom-1/4 mr-2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.4, duration: 0.5 }}
                        >
                          <div className="bg-obsidian-700 border border-gold-500/20 rounded-lg p-3 inline-block">
                            <div className="text-sm text-gold-400 font-medium">Data Science</div>
                            <div className="text-xs text-obsidian-300">Machine Learning</div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 border-t border-obsidian-700 pt-4 flex justify-between items-center">
                    <div>
                      <div className="text-xs text-obsidian-400">Current Cohort</div>
                      <div className="text-gold-500 font-medium">Cohort #7</div>
                    </div>
                    <div>
                      <div className="text-xs text-obsidian-400">Starting</div>
                      <div className="text-gold-500 font-medium">May 15, 2025</div>
                    </div>
                    <div>
                      <div className="text-xs text-obsidian-400">Seats Left</div>
                      <motion.div 
                        className="text-gold-500 font-medium"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                      >
                        12/50
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gold-500/10 rounded-lg -rotate-12 z-0"></div>
            <div className="absolute bottom-12 -left-4 w-8 h-8 bg-gold-500/20 rounded-lg rotate-12 z-0"></div>
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gold-500/10 rounded-full z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;