'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaMoneyBillWave, 
  FaHandHoldingUsd, 
  FaChartLine,
  FaUserGraduate,
  FaCreditCard
} from 'react-icons/fa';

// Pricing tier data
const pricingTiers = [
  {
    name: "Basic",
    price: "₹2,999",
    period: "/month",
    altPrice: "₹7,999 quarterly (11% savings)",
    description: "Perfect for students looking to enhance skills with essential guidance",
    features: [
      "Core curriculum access",
      "Group mentorship sessions",
      "Basic project reviews",
      "Community access",
      "Digital certificate"
    ],
    highlight: false,
    ctaText: "Start Basic",
    ctaLink: "/apply?tier=basic"
  },
  {
    name: "Standard",
    price: "₹3,999",
    period: "/month",
    altPrice: "₹10,999 quarterly (8% savings)",
    description: "Our most popular plan with enhanced mentorship and industry exposure",
    features: [
      "Everything in Basic",
      "Semi-private mentorship (1:4 ratio)",
      "Priority project reviews",
      "Industry partner events",
      "Enhanced portfolio support"
    ],
    highlight: true,
    ctaText: "Choose Standard",
    ctaLink: "/apply?tier=standard"
  },
  {
    name: "Advanced",
    price: "₹5,499",
    period: "/month",
    altPrice: "₹14,999 quarterly (9% savings)",
    description: "Premium experience with personalized guidance for ambitious learners",
    features: [
      "Everything in Standard",
      "Bi-weekly 1:1 mentorship",
      "Direct industry connections",
      "Internship placement assistance",
      "Career coaching sessions"
    ],
    highlight: false,
    ctaText: "Go Advanced",
    ctaLink: "/apply?tier=advanced"
  }
];

// Financial Options
const financialOptions = [
  {
    icon: <FaMoneyBillWave className="h-6 w-6" />,
    title: 'Income Sharing Agreement (ISA)',
    description:
      'Pay 10-12% of your salary for 18-24 months after securing a job with ₹3 LPA minimum threshold. Cap at 1.4x program cost.',
  },
  {
    icon: <FaHandHoldingUsd className="h-6 w-6" />,
    title: 'Scholarships',
    description:
      'Merit-based and need-based scholarships available for deserving students with up to 50% coverage of program costs.',
  },
  {
    icon: <FaCreditCard className="h-6 w-6" />,
    title: 'Flexible Payment Options',
    description:
      'Weekly payments, deferred start (study now, pay later), or staggered payment plans to fit your financial situation.',
  },
  {
    icon: <FaUserGraduate className="h-6 w-6" />,
    title: 'Community Contribution',
    description:
      'Earn 30-50% discounts by contributing as a teaching assistant, content creator, or community manager.',
  }
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

const PricingAccess = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

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
          <span className="text-gold-500 text-sm uppercase tracking-wider font-medium">Accessible Education</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-6">
            <span className="gold-gradient-text">Pricing & Financial Access</span> Options
          </h2>
          <p className="text-obsidian-200 text-base md:text-lg">
            We believe quality education should be accessible to all. Choose the plan 
            that works for you or explore our financial assistance options.
          </p>
        </motion.div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-obsidian-800 rounded-full p-1 inline-flex">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                billingPeriod === 'monthly'
                  ? 'bg-gold-500 text-obsidian-900 shadow-gold-inner'
                  : 'text-obsidian-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('quarterly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                billingPeriod === 'quarterly'
                  ? 'bg-gold-500 text-obsidian-900 shadow-gold-inner'
                  : 'text-obsidian-300 hover:text-white'
              }`}
            >
              Quarterly
            </button>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative group ${tier.highlight ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {tier.highlight && (
                <div className="absolute -top-5 left-0 right-0 text-center">
                  <span className="bg-gold-500 text-obsidian-900 px-4 py-1 rounded-full text-xs font-bold uppercase shadow-gold inline-block">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`h-full rounded-lg border transition-all duration-300 hover:shadow-card-hover overflow-hidden relative flex flex-col
                ${tier.highlight 
                  ? 'border-gold-500 bg-gradient-to-b from-obsidian-800 to-obsidian-800/70' 
                  : 'border-obsidian-700 bg-obsidian-800 group-hover:border-gold-500/40'}`
              }>
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/5 to-gold-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">
                      {billingPeriod === 'monthly' ? tier.price : tier.altPrice.split(' ')[0]}
                    </span>
                    {billingPeriod === 'monthly' && (
                      <span className="text-obsidian-400 ml-1">{tier.period}</span>
                    )}
                  </div>
                  {billingPeriod === 'quarterly' && (
                    <div className="text-gold-500 text-sm font-medium mb-4">
                      {tier.altPrice.split(' ').slice(1).join(' ')}
                    </div>
                  )}
                  <p className="text-obsidian-300 text-sm mb-6">
                    {tier.description}
                  </p>
                  <div className="border-t border-obsidian-700 pt-6 mb-6">
                    <p className="text-white font-medium mb-4">Features include:</p>
                    <ul className="space-y-3">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <svg className="h-5 w-5 text-gold-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-obsidian-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-auto p-6 md:p-8 pt-0">
                  <a 
                    href={tier.ctaLink}
                    className={`w-full block text-center py-3 rounded-md font-medium transition-all duration-300 
                      ${tier.highlight 
                        ? 'bg-gold-500 text-obsidian-900 hover:bg-gold-600 shadow-gold' 
                        : 'bg-obsidian-700 text-white hover:bg-obsidian-600'}`
                    }
                  >
                    {tier.ctaText}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Financial Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center max-w-3xl mx-auto mt-16 mb-10"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6">
            Additional Financial Support Options
          </h3>
          <p className="text-obsidian-300 text-base">
            We believe financial constraints shouldn't limit your potential. Explore our flexible options to make education accessible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-10">
          {financialOptions.map((option, index) => (
            <motion.div
              key={option.title}
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
                    {option.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{option.title}</h3>
                  <p className="text-obsidian-300 text-sm">{option.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ISA Calculator Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-obsidian-800/50 border border-obsidian-700/70 rounded-lg p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <FaChartLine className="text-gold-500 h-8 w-8 mr-3" />
              <h3 className="text-xl font-bold text-white">Calculate Your ISA Payments</h3>
            </div>
            <p className="text-obsidian-300 mb-6">
              Our Income Sharing Agreement allows you to start learning without upfront costs.
              Use our calculator to estimate your future payments based on expected salary.
            </p>
            <a
              href="/isa-calculator"
              className="btn btn-gold px-8 py-3 text-sm inline-flex items-center shadow-gold relative overflow-hidden group"
            >
              <span className="relative z-10">Try ISA Calculator</span>
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

        {/* Group Enrollment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block">
            <div className="text-obsidian-300 text-sm font-medium">
              <span className="text-gold-500">Group discounts available!</span> Enroll with friends and save 10-20%.
              <a href="/group-enrollment" className="text-gold-400 hover:text-gold-300 ml-2 underline underline-offset-2">
                Learn more →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingAccess;