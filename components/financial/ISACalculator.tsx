'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMoneyBillWave, FaCalculator, FaGraduationCap, FaChartLine } from 'react-icons/fa';

const ISACalculator = () => {
  // Default values
  const defaultValues = {
    programCost: 50000,
    isaPercentage: 10,
    monthlyIncome: 30000,
    durationMonths: 24,
  };

  // State for form values
  const [formValues, setFormValues] = useState(defaultValues);

  // State for calculation results
  const [results, setResults] = useState({
    monthlyPayment: 0,
    totalPayment: 0,
    cappedAmount: 0,
    isCapReached: false,
    paymentSavings: 0,
  });

  // Calculate results whenever form values change
  useEffect(() => {
    const monthlyPayment = (formValues.monthlyIncome * formValues.isaPercentage) / 100;
    const totalPayment = monthlyPayment * formValues.durationMonths;
    const cappedAmount = formValues.programCost * 1.4; // 1.4x cap on total repayment
    const isCapReached = totalPayment > cappedAmount;
    const paymentSavings = isCapReached ? totalPayment - cappedAmount : 0;

    setResults({
      monthlyPayment,
      totalPayment: isCapReached ? cappedAmount : totalPayment,
      cappedAmount,
      isCapReached,
      paymentSavings,
    });
  }, [formValues]);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: parseFloat(value) || 0,
    });
  };

  // ISA benefits
  const isaAdvantages = [
    {
      icon: <FaMoneyBillWave className="h-6 w-6" />,
      title: 'Pay Only When You Earn',
      description: 'Payments only begin after you secure a job with a minimum salary threshold of ₹3 LPA.',
    },
    {
      icon: <FaGraduationCap className="h-6 w-6" />,
      title: 'Focus on Learning',
      description: 'Eliminate financial stress during your training and concentrate fully on skill development.',
    },
    {
      icon: <FaCalculator className="h-6 w-6" />,
      title: 'Payment Cap',
      description: 'Your total payment will never exceed 1.4x the program cost, regardless of your salary.',
    },
    {
      icon: <FaChartLine className="h-6 w-6" />,
      title: 'Aligned Incentives',
      description: 'We succeed only when you succeed. Our mutual goal is to maximize your earning potential.',
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
          <span className="text-gold-500 text-sm uppercase tracking-wider font-medium">Financial Planning</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-6">
            <span className="gold-gradient-text">ISA Calculator</span> - Estimate Your Future Payments
          </h2>
          <p className="text-obsidian-200 text-base md:text-lg">
            Income Sharing Agreements allow you to start your learning journey with no upfront costs.
            Calculate your potential future payments based on expected salary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-obsidian-800 border border-obsidian-700 rounded-lg p-6 md:p-8 shadow-card-hover">
              <h3 className="text-xl font-bold mb-6 text-white">Adjust Parameters</h3>
              
              <div className="space-y-6">
                {/* Program Cost */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="programCost" className="text-obsidian-200 text-sm font-medium">
                      Program Cost (₹)
                    </label>
                    <span className="text-gold-500 text-sm font-medium">
                      ₹{formValues.programCost.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    id="programCost"
                    name="programCost"
                    min="20000"
                    max="100000"
                    step="5000"
                    value={formValues.programCost}
                    onChange={handleInputChange}
                    className="w-full h-2 bg-obsidian-700 rounded-lg appearance-none cursor-pointer accent-gold-500"
                  />
                  <div className="flex justify-between text-xs text-obsidian-400 mt-1">
                    <span>₹20,000</span>
                    <span>₹100,000</span>
                  </div>
                </div>
                
                {/* ISA Percentage */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="isaPercentage" className="text-obsidian-200 text-sm font-medium">
                      ISA Percentage
                    </label>
                    <span className="text-gold-500 text-sm font-medium">
                      {formValues.isaPercentage}%
                    </span>
                  </div>
                  <input
                    type="range"
                    id="isaPercentage"
                    name="isaPercentage"
                    min="8"
                    max="12"
                    step="0.5"
                    value={formValues.isaPercentage}
                    onChange={handleInputChange}
                    className="w-full h-2 bg-obsidian-700 rounded-lg appearance-none cursor-pointer accent-gold-500"
                  />
                  <div className="flex justify-between text-xs text-obsidian-400 mt-1">
                    <span>8%</span>
                    <span>12%</span>
                  </div>
                </div>
                
                {/* Monthly Income */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="monthlyIncome" className="text-obsidian-200 text-sm font-medium">
                      Expected Monthly Salary (₹)
                    </label>
                    <span className="text-gold-500 text-sm font-medium">
                      ₹{formValues.monthlyIncome.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    id="monthlyIncome"
                    name="monthlyIncome"
                    min="25000"
                    max="100000"
                    step="1000"
                    value={formValues.monthlyIncome}
                    onChange={handleInputChange}
                    className="w-full h-2 bg-obsidian-700 rounded-lg appearance-none cursor-pointer accent-gold-500"
                  />
                  <div className="flex justify-between text-xs text-obsidian-400 mt-1">
                    <span>₹25,000</span>
                    <span>₹100,000</span>
                  </div>
                </div>
                
                {/* Duration */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="durationMonths" className="text-obsidian-200 text-sm font-medium">
                      ISA Duration (months)
                    </label>
                    <span className="text-gold-500 text-sm font-medium">
                      {formValues.durationMonths} months
                    </span>
                  </div>
                  <input
                    type="range"
                    id="durationMonths"
                    name="durationMonths"
                    min="12"
                    max="24"
                    step="1"
                    value={formValues.durationMonths}
                    onChange={handleInputChange}
                    className="w-full h-2 bg-obsidian-700 rounded-lg appearance-none cursor-pointer accent-gold-500"
                  />
                  <div className="flex justify-between text-xs text-obsidian-400 mt-1">
                    <span>12 months</span>
                    <span>24 months</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-sm text-obsidian-400">
                <p><span className="text-gold-500">Note:</span> Actual ISA terms may vary. This calculator provides estimates based on current parameters.</p>
              </div>
            </div>
          </motion.div>
          
          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-obsidian-800 border border-obsidian-700 rounded-lg shadow-card-hover h-full">
              {/* Results Header */}
              <div className="border-b border-obsidian-700 p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2 text-white">Payment Summary</h3>
                <p className="text-obsidian-300 text-sm">Based on your parameters, here's your estimated payment plan</p>
              </div>
              
              {/* Results Body */}
              <div className="p-6 md:p-8">
                <div className="space-y-6">
                  {/* Monthly Payment */}
                  <div>
                    <p className="text-obsidian-300 text-sm mb-1">Monthly Payment</p>
                    <p className="text-white text-2xl font-bold">₹{Math.round(results.monthlyPayment).toLocaleString()}</p>
                  </div>
                  
                  {/* Total Payment */}
                  <div>
                    <p className="text-obsidian-300 text-sm mb-1">Total Payment {results.isCapReached ? '(Capped)' : ''}</p>
                    <p className="text-white text-2xl font-bold">₹{Math.round(results.totalPayment).toLocaleString()}</p>
                    
                    {results.isCapReached && (
                      <div className="mt-2 text-gold-500 text-sm">
                        Payment capped at 1.4x program cost, saving you ₹{Math.round(results.paymentSavings).toLocaleString()}
                      </div>
                    )}
                  </div>
                  
                  {/* Payment Comparison */}
                  <div className="pt-4 border-t border-obsidian-700">
                    <div className="flex justify-between mb-2">
                      <span className="text-obsidian-300 text-sm">Program Cost</span>
                      <span className="text-white font-medium">₹{formValues.programCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-obsidian-300 text-sm">Maximum Possible Payment (1.4x)</span>
                      <span className="text-white font-medium">₹{Math.round(results.cappedAmount).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-obsidian-300 text-sm">Your Payment</span>
                      <span className="text-gold-500 font-medium">₹{Math.round(results.totalPayment).toLocaleString()}</span>
                    </div>
                  </div>
                  
                  {/* Apply Button */}
                  <div className="mt-6">
                    <a
                      href="/apply?isa=true"
                      className="btn btn-gold w-full py-3 text-sm shadow-gold relative overflow-hidden group"
                    >
                      <span className="relative z-10">Apply With ISA Option</span>
                      {/* Gold shimmer effect */}
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-500/0 via-gold-500/30 to-gold-500/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* ISA Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold mb-8 text-center text-white">Why Choose an Income Sharing Agreement?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {isaAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
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
                      {advantage.icon}
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-3 text-white">{advantage.title}</h3>
                    <p className="text-obsidian-300 text-sm">{advantage.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* ISA FAQ Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-obsidian-800/50 border border-obsidian-700/70 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Have Questions About ISAs?</h3>
            <p className="text-obsidian-300 mb-6">
              Our detailed FAQ covers everything you need to know about Income Sharing Agreements, eligibility, and more.
            </p>
            <a
              href="/financial-faq"
              className="btn bg-obsidian-700 hover:bg-obsidian-600 text-white px-8 py-3 text-sm inline-flex items-center relative overflow-hidden transition-all duration-300"
            >
              <span>Read ISA FAQ</span>
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

export default ISACalculator;