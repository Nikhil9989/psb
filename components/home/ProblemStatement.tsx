'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaUserGraduate, FaIndustry, FaLaptopCode } from 'react-icons/fa';

const problemStatements = [
  {
    icon: <FaChalkboardTeacher className="h-6 w-6" />,
    title: 'Fragmented Learning Ecosystem',
    description:
      'The Indian education system teaches subjects in isolation rather than fostering interdisciplinary expertise needed for real-world careers.',
  },
  {
    icon: <FaUserGraduate className="h-6 w-6" />,
    title: 'Theory-Practice Divide',
    description:
      'Only 25% of engineering graduates are considered employment-ready without additional training, creating a massive retraining burden on industries.',
  },
  {
    icon: <FaIndustry className="h-6 w-6" />,
    title: 'Industry Participation Deficit',
    description:
      'Despite being the ultimate beneficiaries of skilled talent, industries remain reluctant to invest significantly in curriculum development or training partnerships.',
  },
  {
    icon: <FaLaptopCode className="h-6 w-6" />,
    title: 'Unstructured Learning Resources',
    description:
      'Without clear learning paths connecting theoretical concepts to practical implementation, even motivated learners struggle to develop job-ready skills.',
  },
];

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
    },
  }),
};

// Icon animation variants
const iconVariants = {
  hidden: { scale: 0.8, opacity: 0.5 },
  visible: {
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 0.3 
    }
  },
  hover: {
    scale: 1.2,
    rotate: [0, 10, 0, -10, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

const ProblemStatement = () => {
  return (
    <section className="py-20 md:py-24 bg-obsidian-800/50 relative">
      {/* Gold accents */}
      <div className="absolute left-0 top-0 w-1/4 h-px bg-gradient-to-r from-gold-500 to-transparent"></div>
      <div className="absolute right-0 bottom-0 w-1/4 h-px bg-gradient-to-l from-gold-500 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold-500 text-sm uppercase tracking-wider font-medium">The Challenge</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-6">
            The <span className="gold-gradient-text">Skill Gap Crisis</span> in Indian Education
          </h2>
          <p className="text-obsidian-200 text-base md:text-lg">
            Despite improvements, only 51.25% of Indian youth possess the necessary skills for employment, with stark disparities across regions and genders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {problemStatements.map((problem, index) => (
            <motion.div
              key={problem.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              className="bg-obsidian-800 rounded-lg p-6 border border-gold-500/10 hover:border-gold-500/30 transition-colors duration-300 shadow-card group"
            >
              <div className="flex items-start">
                <motion.div 
                  className="mr-4 p-3 rounded-full bg-gold-500/10 text-gold-500"
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                >
                  {problem.icon}
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{problem.title}</h3>
                  <p className="text-obsidian-300 text-sm">{problem.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-obsidian-900 via-obsidian-800 to-obsidian-900 p-6 md:p-8 rounded-lg max-w-4xl mx-auto relative overflow-hidden">
            {/* Subtle gleaming effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/5 to-transparent animate-pulse"></div>
            
            <div className="relative">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gold-500">
                The Impact of Inaction
              </h3>
              <p className="text-obsidian-200 text-sm md:text-base mb-6">
                McKinsey Global Institute estimates that India could lose up to <span className="text-gold-400 font-semibold">$1.97 trillion</span> in GDP growth by 2030 due to skill mismatches. 
                This multifaceted crisis requires a comprehensive solution that addresses both structural and pedagogical challenges.
              </p>
              <div className="inline-block">
                <div className="w-20 h-0.5 mx-auto bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;