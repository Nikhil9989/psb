'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBrain, 
  FaProjectDiagram, 
  FaUserFriends, 
  FaLaptopCode, 
  FaChartLine, 
  FaUsers 
} from 'react-icons/fa';

const features = [
  {
    icon: <FaBrain className="h-6 w-6" />,
    title: 'AI-Powered Personalized Learning',
    description:
      'Customized learning paths adapt to your individual strengths, weaknesses, and career goals to optimize your learning journey.',
  },
  {
    icon: <FaProjectDiagram className="h-6 w-6" />,
    title: 'Industry-Aligned Projects',
    description:
      'Work on real-world capstone projects that solve actual business problems, reviewed by hiring managers and industry leaders.',
  },
  {
    icon: <FaUserFriends className="h-6 w-6" />,
    title: '1-on-1 Expert Mentorship',
    description:
      'Receive personalized guidance from industry professionals who provide feedback, career strategy, and technical support.',
  },
  {
    icon: <FaLaptopCode className="h-6 w-6" />,
    title: 'Hybrid Learning Environment',
    description:
      'Combine the flexibility of online learning with the support of in-person sessions at our partner institutions.',
  },
  {
    icon: <FaChartLine className="h-6 w-6" />,
    title: 'Placement Assistance',
    description:
      'Get matched with relevant employers through our AI-driven job recommendations and network of hiring partners.',
  },
  {
    icon: <FaUsers className="h-6 w-6" />,
    title: 'Cohort-Based Progression',
    description:
      'Move through your learning journey alongside peers who provide support, collaboration, and networking opportunities.',
  },
];

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
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

const KeyFeatures = () => {
  return (
    <section className="py-20 md:py-24 bg-obsidian-900/95 texture-overlay relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-3 z-0"></div>
      
      {/* Gold accent elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/6 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/6 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold-500 text-sm uppercase tracking-wider font-medium">Why Choose Us</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-6">
            <span className="gold-gradient-text">Key Features</span> of SKILL BRIDGE
          </h2>
          <p className="text-obsidian-200 text-base md:text-lg">
            Our comprehensive approach combines the best of expert guidance, peer collaboration, 
            and AI-powered personalization to ensure your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-obsidian-800 border border-obsidian-700 group-hover:border-gold-500/40 rounded-lg p-6 h-full transition-all duration-300 hover:shadow-card-hover relative overflow-hidden">
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/5 to-gold-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <motion.div 
                    className="p-2.5 rounded-lg bg-gold-500/10 text-gold-500 inline-block mb-4"
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-obsidian-300 text-sm">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block relative z-10">
            {/* Cohort badge */}
            <div className="absolute -top-3 -right-3 cohort-badge">
              Cohort-Based
            </div>
            
            <a
              href="/features"
              className="btn btn-gold px-8 py-3 text-sm inline-flex items-center shadow-gold relative overflow-hidden group"
            >
              <span className="relative z-10">Explore All Features</span>
              {/* Gold shimmer effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-500/0 via-gold-500/30 to-gold-500/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 relative z-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFeatures;