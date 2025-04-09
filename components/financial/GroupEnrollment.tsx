'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaPercentage, FaUserFriends, FaUserGraduate } from 'react-icons/fa';

const groupDiscounts = [
  {
    size: '3-5 students',
    discount: '10% for all',
    description: 'Perfect for small study groups who want to learn together',
  },
  {
    size: '6-10 students',
    discount: '15% for all',
    description: 'Ideal for medium-sized groups from the same college or workplace',
  },
  {
    size: '10+ students',
    discount: '20% for all',
    description: 'Best value for large groups and institutional partnerships',
  },
];

const benefits = [
  {
    icon: <FaUserFriends className="h-6 w-6" />,
    title: 'Built-in Accountability',
    description: 'Learning with friends creates natural accountability and motivation to stay on track with your studies.',
  },
  {
    icon: <FaUsers className="h-6 w-6" />,
    title: 'Enhanced Collaboration',
    description: 'Work on projects together with pre-established teams that understand each other's strengths and working styles.',
  },
  {
    icon: <FaUserGraduate className="h-6 w-6" />,
    title: 'Shared Resources',
    description: 'Pool your knowledge, experiences, and resources to overcome challenges and deepen understanding.',
  },
  {
    icon: <FaPercentage className="h-6 w-6" />,
    title: 'Significant Savings',
    description: 'Enjoy substantial discounts on all program tiers while receiving the same high-quality education and support.',
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

const GroupEnrollment = () => {
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
          <span className="text-gold-500 text-sm uppercase tracking-wider font-medium">Learn Together, Save Together</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-6">
            <span className="gold-gradient-text">Group Enrollment</span> Discounts
          </h2>
          <p className="text-obsidian-200 text-base md:text-lg">
            Enroll with friends, classmates, or colleagues and enjoy special discounts 
            while creating a built-in support system for your learning journey.
          </p>
        </motion.div>

        {/* Group Discount Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {groupDiscounts.map((tier, index) => (
            <motion.div
              key={tier.size}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative group ${index === 1 ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {index === 1 && (
                <div className="absolute -top-5 left-0 right-0 text-center">
                  <span className="bg-gold-500 text-obsidian-900 px-4 py-1 rounded-full text-xs font-bold uppercase shadow-gold inline-block">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`h-full rounded-lg border transition-all duration-300 hover:shadow-card-hover overflow-hidden relative
                ${index === 1 
                  ? 'border-gold-500 bg-gradient-to-b from-obsidian-800 to-obsidian-800/70' 
                  : 'border-obsidian-700 bg-obsidian-800 group-hover:border-gold-500/40'}`
              }>
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/5 to-gold-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="p-6 md:p-8">
                  <div className="flex flex-col items-center mb-6">
                    <div className="bg-obsidian-700/50 rounded-full p-4 mb-4">
                      <FaUsers className={`h-10 w-10 ${index === 1 ? 'text-gold-500' : 'text-obsidian-300'}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{tier.size}</h3>
                  </div>
                  
                  <div className="text-center mb-6">
                    <p className="text-3xl font-bold text-white mb-1">{tier.discount}</p>
                    <p className="text-obsidian-300 text-sm">{tier.description}</p>
                  </div>
                  
                  <a 
                    href={`/apply?group=true&size=${tier.size.split(' ')[0]}`}
                    className={`w-full block text-center py-3 rounded-md font-medium transition-all duration-300 
                      ${index === 1 
                        ? 'bg-gold-500 text-obsidian-900 hover:bg-gold-600 shadow-gold' 
                        : 'bg-obsidian-700 text-white hover:bg-obsidian-600'}`
                    }
                  >
                    Enroll as Group
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits of Group Enrollment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center max-w-3xl mx-auto mt-16 mb-10"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6">
            Why Choose Group Enrollment?
          </h3>
          <p className="text-obsidian-300 text-base">
            Beyond the financial benefits, enrolling with a group provides numerous advantages that enhance your learning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
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
                    {benefit.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-obsidian-300 text-sm">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* How to Apply as a Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-obsidian-800/50 border border-obsidian-700/70 rounded-lg p-8 max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">How to Apply as a Group</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-obsidian-700 rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">
                <span className="text-gold-500 font-bold">1</span>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-2">Nominate a Group Coordinator</h4>
                <p className="text-obsidian-300 text-sm">
                  Choose one person from your group to serve as the coordinator who will submit the initial application.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-obsidian-700 rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">
                <span className="text-gold-500 font-bold">2</span>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-2">Complete Group Registration</h4>
                <p className="text-obsidian-300 text-sm">
                  The coordinator fills out the group enrollment form with basic information about all participants.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-obsidian-700 rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">
                <span className="text-gold-500 font-bold">3</span>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-2">Individual Applications</h4>
                <p className="text-obsidian-300 text-sm">
                  Each group member receives a unique link to complete their individual application with personal details.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-obsidian-700 rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">
                <span className="text-gold-500 font-bold">4</span>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-2">Group Review & Payment</h4>
                <p className="text-obsidian-300 text-sm">
                  Once all applications are reviewed, your group will receive a collective admission decision and discounted payment options.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Group Enrollment CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="/apply?group=true"
            className="btn btn-gold px-10 py-4 text-base inline-flex items-center shadow-gold relative overflow-hidden group"
          >
            <span className="relative z-10">Start Group Enrollment</span>
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
          
          <p className="mt-6 text-obsidian-300 text-sm">
            Questions about group enrollment? <a href="/contact" className="text-gold-500 hover:text-gold-400 underline underline-offset-2">Contact our admissions team</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GroupEnrollment;