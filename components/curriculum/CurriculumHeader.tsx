'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useElementOnScreen } from '../../src/hooks/useElementOnScreen';

const CurriculumHeader = () => {
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-gradient-to-br from-blue-900 to-indigo-800 text-white py-20 px-4"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
        >
          Detailed Domain Curriculum
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-center mb-8 max-w-3xl mx-auto text-blue-100"
        >
          Our comprehensive skill progression roadmap takes you from beginner to industry-ready professional through a structured, domain-based approach
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <button className="bg-white text-blue-800 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors">
            View Web Development Path
          </button>
          <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors">
            Explore All Domains
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CurriculumHeader;
