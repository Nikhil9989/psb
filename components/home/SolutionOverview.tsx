'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsers, 
  FaBrain, 
  FaChartLine, 
  FaProjectDiagram 
} from 'react-icons/fa';

const solutionPoints = [
  {
    icon: <FaUsers className="h-6 w-6" />,
    title: 'Hybrid Expert-Guided Learning',
    description:
      'Live industry-led sessions with hands-on assignments in local institutions, providing the perfect balance of quality education and accessibility for tier-2/3 cities.',
  },
  {
    icon: <FaBrain className="h-6 w-6" />,
    title: 'Domain-Based vs. Fragmented Learning',
    description:
      'Our progressive roadmap (10% → 30% → 50% → 70% → 90%) builds complete domain expertise rather than teaching isolated skills, making you immediately valuable to employers.',
  },
  {
    icon: <FaChartLine className="h-6 w-6" />,
    title: 'Personalized Learning with Human Touch',
    description:
      'AI adapts to your individual learning patterns while connecting you with industry expert mentors and peer accountability partners for motivation and guidance.',
  },
  {
    icon: <FaProjectDiagram className="h-6 w-6" />,
    title: 'Multiple Career Pathways',
    description:
      'Our approach offers flexible pathways to success through employment, remote work, entrepreneurship, and freelancing, ensuring you're not dependent on limited local job markets.',
  },
];

// Animation variants
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

// Stat counter animation
const counterVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5,
      staggerChildren: 0.2
    }
  }
};

const numberVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 } 
  }
};

const SolutionOverview = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-obsidian-800 to-obsidian-900 relative">
      {/* Gold accents */}
      <div className="absolute right-0 top-0 w-1/4 h-px bg-gradient-to-l from-gold-500 to-transparent"></div>
      <div className="absolute left-0 bottom-0 w-1/4 h-px bg-gradient-to-r from-gold-500 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold-500 text-sm uppercase tracking-wider font-medium">Our Solution</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-6">
            <span className="gold-gradient-text">SKILL BRIDGE:</span> Integrated Domain-Based Learning
          </h2>
          <p className="text-obsidian-200 text-base md:text-lg">
            A comprehensive approach that combines expert guidance, peer collaboration, and AI-powered personalization 
            specifically designed for students in tier-2/3 cities across India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {solutionPoints.map((solution, index) => (
            <motion.div
              key={solution.title}
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
                  {solution.icon}
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{solution.title}</h3>
                  <p className="text-obsidian-300 text-sm">{solution.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={counterVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 max-w-4xl mx-auto"
        >
          <StatCard number={51.25} suffix="%" label="Employment Ready Youth" />
          <StatCard number={3.5} suffix="LPA" label="Average Starting Salary" />
          <StatCard number={70} suffix="%" label="Placement Rate" />
          <StatCard number={15} suffix="+" label="Partner Institutions" />
        </motion.div>

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
                Building a Sustainable Bridge to Industry
              </h3>
              <p className="text-obsidian-200 text-sm md:text-base mb-6">
                Our mission is to transform education outcomes in tier-2 and tier-3 cities across India
                by creating an accessible pathway for learners across diverse geographical and socioeconomic backgrounds.
                With our holistic approach to domain-based learning, we're preparing the next generation of industry-ready professionals.
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

interface StatCardProps {
  number: number;
  suffix: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, suffix, label }) => {
  return (
    <motion.div 
      variants={numberVariants}
      className="bg-obsidian-800/50 backdrop-blur-sm p-4 rounded-lg border border-gold-500/20 text-center"
    >
      <div className="flex items-center justify-center space-x-1">
        <span className="text-2xl md:text-3xl font-bold text-gold-500">{number}</span>
        <span className="text-xl md:text-2xl font-bold text-gold-400">{suffix}</span>
      </div>
      <p className="text-obsidian-300 text-sm mt-2">{label}</p>
    </motion.div>
  );
};

export default SolutionOverview;
