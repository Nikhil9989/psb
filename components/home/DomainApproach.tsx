'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLightbulb, 
  FaTools, 
  FaPuzzlePiece, 
  FaGraduationCap, 
  FaChessKnight 
} from 'react-icons/fa';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Refined phase names and descriptions
const progressSteps = [
  {
    level: '10%',
    name: 'Inception',
    description: 'Establish foundational knowledge and conceptual understanding of the domain',
    icon: <FaLightbulb />,
    color: 'from-gold-300 to-gold-400 text-obsidian-900',
  },
  {
    level: '30%',
    name: 'Acceleration',
    description: 'Develop practical skills and begin applying concepts to increasingly complex scenarios',
    icon: <FaTools />,
    color: 'from-gold-400 to-gold-500 text-obsidian-900',
  },
  {
    level: '50%',
    name: 'Integration',
    description: 'Connect multiple skills and technologies to create comprehensive solutions',
    icon: <FaPuzzlePiece />,
    color: 'from-gold-500 to-gold-600 text-obsidian-900',
  },
  {
    level: '70%',
    name: 'Mastery',
    description: 'Apply advanced techniques and develop industry-grade projects with minimal guidance',
    icon: <FaGraduationCap />,
    color: 'from-gold-600 to-gold-700 text-obsidian-900',
  },
  {
    level: '90%',
    name: 'Transcendence',
    description: 'Lead complex projects, mentor others, and innovate within the domain ecosystem',
    icon: <FaChessKnight />,
    color: 'from-gold-700 to-gold-800 text-obsidian-900',
  },
];

const DomainApproach = () => {
  return (
    <section className="py-20 md:py-28 bg-obsidian-800 texture-overlay relative">
      {/* Subtle gold accent elements */}
      <div className="absolute top-0 left-0 w-24 h-1 bg-gold-500"></div>
      <div className="absolute top-0 right-0 w-24 h-1 bg-gold-500"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold-500 text-sm uppercase tracking-wider font-medium">Our Methodology</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-6">
            <span className="gold-gradient-text">Cohort-Based</span> Domain Learning Path
          </h2>
          <p className="text-obsidian-100 text-base md:text-lg">
            Unlike traditional course-based programs that teach skills in isolation, our cohort-based domain 
            workshops deliver comprehensive understanding through five transformative phases:
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Progress Steps */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-300 to-gold-800 rounded-full hidden md:block"></div>
            
            {/* Steps */}
            {progressSteps.map((step, index) => (
              <motion.div
                key={step.level}
                variants={itemVariants}
                className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 relative"
              >
                {/* Step Icon */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl shadow-gold z-10`}>
                  {step.icon}
                </div>
                
                {/* Step Content */}
                <div className="bg-obsidian-700 md:ml-4 p-6 rounded-lg border border-gold-500/20 flex-grow backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-white">{step.name}</h3>
                    <span className="text-lg font-semibold text-gold-500">{step.level}</span>
                  </div>
                  <p className="text-obsidian-100">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="bg-obsidian-700 p-6 md:p-8 rounded-lg border border-gold-500/30">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gold-500">
              The Cohort Advantage
            </h3>
            <p className="text-obsidian-100 mb-4">
              Progress through each phase alongside a dedicated cohort of peers, creating a powerful 
              support network and collaborative learning environment that mirrors real industry teams.
            </p>
            <p className="text-obsidian-200 italic">
              "The domain-based cohort approach completely transformed how I understand technology stacks. 
              Instead of learning isolated pieces, I now see how everything connects in real-world applications."
            </p>
            <p className="mt-2 text-gold-400 font-semibold">— Riya S., Full-Stack Developer</p>
            
            <div className="mt-6 inline-flex">
              <span className="cohort-badge mr-2">Cohort 7 enrolling now</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DomainApproach;