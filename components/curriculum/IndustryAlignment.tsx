'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useElementOnScreen } from '../../src/hooks/useElementOnScreen';
import { CheckCircle, Building, Award, Briefcase, AreaChart, Users } from 'lucide-react';
import Image from 'next/image';

const IndustryAlignment = () => {
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.1 });

  const industryFeatures = [
    {
      title: "Industry Advisory Board",
      description: "Our curriculum is regularly reviewed and updated by a board of industry leaders to ensure alignment with market demands.",
      icon: <Building className="w-12 h-12 text-blue-600" />
    },
    {
      title: "Role-Based Skill Mapping",
      description: "Skills taught are directly mapped to specific job roles and their requirements in the current market.",
      icon: <Briefcase className="w-12 h-12 text-blue-600" />
    },
    {
      title: "Real-Time Skill Gap Analysis",
      description: "Using data from job postings and industry reports, we continuously adapt to address emerging skill needs.",
      icon: <AreaChart className="w-12 h-12 text-blue-600" />
    },
    {
      title: "Industry Expert Mentors",
      description: "All mentors are active industry professionals with recent, relevant experience in their domains.",
      icon: <Users className="w-12 h-12 text-blue-600" />
    }
  ];

  const testimonials = [
    {
      quote: "SKILL BRIDGE produces graduates with a remarkable combination of theoretical knowledge and practical skills. Their project-based curriculum prepares students for real workplace challenges.",
      author: "Rajesh Kumar",
      position: "Engineering Director, TechCorp India",
      company: "TechCorp",
      logo: "/images/companies/techcorp.png"
    },
    {
      quote: "We've hired multiple SKILL BRIDGE graduates who were able to contribute to our projects immediately. Their domain-based approach results in well-rounded professionals.",
      author: "Sunita Patel",
      position: "Talent Acquisition Manager",
      company: "CloudSphere Solutions",
      logo: "/images/companies/cloudsphere.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const stats = [
    { value: "93%", label: "Placement Rate" },
    { value: "87%", label: "Skills Match with Job Requirements" },
    { value: "42", label: "Industry Partners" },
    { value: "3.8 LPA", label: "Average Starting Salary in Tier-2 Cities" }
  ];

  return (
    <div className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Alignment Details</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our curriculum isn't just about teaching technologies – it's about preparing you for specific job roles
            and ensuring your skills align perfectly with industry expectations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {industryFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-800 to-indigo-900 rounded-xl p-8 mb-16 text-white shadow-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col justify-center">
                <span className="text-4xl font-bold mb-2">{stat.value}</span>
                <span className="text-blue-100">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.2) }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-blue-800 font-bold">LOGO</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-600">{testimonial.position}</p>
                  <p className="text-blue-600">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-blue-50 border border-blue-100 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">In-Demand Roles Our Curriculum Prepares You For</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {['Frontend Developer', 'Full Stack Engineer', 'Backend Developer', 'DevOps Specialist', 'Mobile App Developer', 'UI/UX Developer'].map((role, index) => (
              <div key={index} className="flex items-center p-3 bg-white rounded-lg border border-gray-100">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-800">{role}</span>
              </div>
            ))}
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Download Role-Based Skill Maps
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default IndustryAlignment;
