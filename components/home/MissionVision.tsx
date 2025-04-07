'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaLightbulb, FaStar } from 'react-icons/fa';

const MissionVision = () => {
  return (
    <section className="py-20 md:py-24 bg-obsidian-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/images/dark-texture.svg')] bg-repeat opacity-10 z-0"></div>
      
      {/* Gold particle background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold-500 text-sm uppercase tracking-wider font-medium">Our Foundation</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-6">
            <span className="gold-gradient-text">Mission</span> & <span className="gold-gradient-text">Vision</span>
          </h2>
          <p className="text-obsidian-200 text-base md:text-lg">
            Our purpose and long-term goals that drive everything we do at SKILL BRIDGE
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <div className="bg-obsidian-800 rounded-lg p-8 border border-gold-500/20 h-full relative overflow-hidden flex flex-col">
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden">
                <div className="absolute top-0 left-0 w-40 h-1 bg-gold-500 rotate-45 origin-top-left"></div>
              </div>
              
              <div className="flex-grow">
                <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center mb-6">
                  <FaBullseye className="h-6 w-6 text-gold-500" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                
                <p className="text-obsidian-200 mb-4">
                  To bridge the critical disconnect between traditional education and industry demands by providing accessible, 
                  domain-focused learning experiences that transform theoretical knowledge into practical, market-ready expertise.
                </p>
                
                <p className="text-obsidian-200">
                  We are committed to democratizing high-quality education, making it accessible across geographical 
                  and socioeconomic boundaries, and empowering learners to thrive in an evolving digital economy.
                </p>
              </div>
              
              {/* Key principles */}
              <div className="mt-8 pt-6 border-t border-obsidian-700">
                <h4 className="text-gold-500 font-medium mb-4">Our Guiding Principles</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="text-gold-500 mr-3 mt-1">•</div>
                    <p className="text-sm text-obsidian-300">
                      <span className="text-white font-medium">Accessibility:</span> Making quality education available to all, regardless of location or background
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-gold-500 mr-3 mt-1">•</div>
                    <p className="text-sm text-obsidian-300">
                      <span className="text-white font-medium">Industry Alignment:</span> Continuously adapting to market demands and technological evolution
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-gold-500 mr-3 mt-1">•</div>
                    <p className="text-sm text-obsidian-300">
                      <span className="text-white font-medium">Practical Excellence:</span> Prioritizing hands-on application over theoretical memorization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-full"
          >
            <div className="bg-obsidian-800 rounded-lg p-8 border border-gold-500/20 h-full relative overflow-hidden flex flex-col">
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-1 bg-gold-500 -rotate-45 origin-top-right"></div>
              </div>
              
              <div className="flex-grow">
                <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center mb-6">
                  <FaLightbulb className="h-6 w-6 text-gold-500" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                
                <p className="text-obsidian-200 mb-4">
                  To create a world where the gap between education and employment is eliminated, where learners 
                  across India have equal access to exceptional skill development opportunities regardless of their location or background.
                </p>
                
                <p className="text-obsidian-200">
                  We envision a future where SKILL BRIDGE becomes the gold standard for domain-based learning, 
                  recognized globally for pioneering an educational model that consistently produces industry-ready 
                  professionals who drive innovation and economic growth.
                </p>
              </div>
              
              {/* Strategic goals */}
              <div className="mt-8 pt-6 border-t border-obsidian-700">
                <h4 className="text-gold-500 font-medium mb-4">Our 2030 Goals</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="text-gold-500 mr-3">
                      <FaStar className="h-3 w-3 mt-1" />
                    </div>
                    <p className="text-sm text-obsidian-300">
                      <span className="text-white font-medium">Reach 100+ tier-2 and tier-3 cities</span> across India with our hybrid learning model
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-gold-500 mr-3">
                      <FaStar className="h-3 w-3 mt-1" />
                    </div>
                    <p className="text-sm text-obsidian-300">
                      <span className="text-white font-medium">Transform 1 million careers</span> through our domain-focused learning approach
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-gold-500 mr-3">
                      <FaStar className="h-3 w-3 mt-1" />
                    </div>
                    <p className="text-sm text-obsidian-300">
                      <span className="text-white font-medium">Pioneer educational innovation</span> that becomes the new standard for skill development globally
                    </p>
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

export default MissionVision;