'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CallToAction = () => {
  // State for seat counter animation
  const [seatsCount, setSeatsCount] = useState(12);
  const totalSeats = 50;
  
  // Random decrease in available seats to create urgency
  useEffect(() => {
    const interval = setInterval(() => {
      // Random chance to decrease seats (10% chance every 30 seconds)
      if (Math.random() < 0.1 && seatsCount > 5) {
        setSeatsCount(prevCount => prevCount - 1);
      }
    }, 30000);
    
    return () => clearInterval(interval);
  }, [seatsCount]);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian-900 via-obsidian-800 to-obsidian-900 opacity-90"></div>
      
      {/* Gold texture overlay */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-5"></div>
      
      {/* Animated gold particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%', 
              scale: Math.random() * 0.5 + 0.5 
            }}
            animate={{ 
              y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ 
              repeat: Infinity,
              duration: Math.random() * 20 + 15,
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
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gold-500 text-sm uppercase tracking-wider font-medium inline-block mb-3">
              Join Cohort #7
            </span>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white font-display">
              Ready to <span className="gold-gradient-text">Transform</span> Your Career Trajectory?
            </h2>
            
            <p className="text-base md:text-lg text-obsidian-200 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are transforming their careers through our domain-based 
              cohort learning approach. Take the first step toward true industry readiness.
            </p>
            
            <div className="relative inline-block">
              {/* Gold frame effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg opacity-70 blur-sm"></div>
              <div className="relative bg-obsidian-800 rounded-lg p-8 border border-gold-500/20">
                <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 justify-center mb-6">
                  <div className="text-center md:text-left">
                    <div className="text-obsidian-300 text-xs uppercase tracking-wider">Next Cohort Starts</div>
                    <div className="text-gold-500 text-xl md:text-2xl font-semibold">May 15, 2025</div>
                  </div>
                  
                  <div className="h-px w-16 bg-obsidian-700 hidden md:block"></div>
                  
                  <div className="text-center md:text-left">
                    <div className="text-obsidian-300 text-xs uppercase tracking-wider">Available Seats</div>
                    <motion.div 
                      className="text-gold-500 text-xl md:text-2xl font-semibold flex items-center justify-center md:justify-start"
                    >
                      <motion.span
                        key={seatsCount}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                      >
                        <span className="relative">
                          {seatsCount}
                          {/* Pulsing circle behind the seats count */}
                          <span className="absolute inset-0 bg-gold-500/20 rounded-full -z-10"></span>
                        </span>
                        <span className="text-obsidian-400 text-lg">/</span>
                        <span className="text-obsidian-400 text-lg">{totalSeats}</span>
                      </motion.span>
                      
                      {/* Urgency indicator if seats are getting low */}
                      {seatsCount < 15 && (
                        <motion.span 
                          className="ml-2 text-xs text-red-400 font-normal"
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          (Filling fast!)
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                  
                  <div className="h-px w-16 bg-obsidian-700 hidden md:block"></div>
                  
                  <div className="text-center md:text-left">
                    <div className="text-obsidian-300 text-xs uppercase tracking-wider">Application Deadline</div>
                    <div className="text-gold-500 text-xl md:text-2xl font-semibold">April 30, 2025</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                  <Link
                    href="/enroll"
                    className="btn btn-gold px-8 py-3 text-sm shadow-gold relative overflow-hidden group"
                  >
                    <span className="relative z-10">Secure Your Spot</span>
                    {/* Gold shimmer effect */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-500/0 via-gold-500/30 to-gold-500/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="btn btn-outline-gold px-8 py-3 text-sm"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
            
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 text-obsidian-400 text-xs"
          >
            <p>No credit card required. Start with a free consultation to determine your fit for the cohort.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;