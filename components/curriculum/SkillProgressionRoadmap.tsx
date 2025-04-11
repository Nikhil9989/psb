'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useElementOnScreen } from '../../src/hooks/useElementOnScreen';
import { LucideCode, CheckCircle, Globe, Database, Shield, Server } from 'lucide-react';

const SkillProgressionRoadmap = () => {
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.1 });
  
  const stages = [
    {
      level: "10%",
      title: "Foundations",
      description: "Core programming concepts, basic syntax, development environment setup",
      skills: ["HTML/CSS Fundamentals", "JavaScript Basics", "Programming Logic", "Git Essentials"],
      icon: <LucideCode className="w-12 h-12 text-blue-600" />
    },
    {
      level: "30%",
      title: "Building Blocks",
      description: "Individual technology proficiency, component-based thinking",
      skills: ["React Components", "Node.js Fundamentals", "API Consumption", "CSS Frameworks"],
      icon: <Globe className="w-12 h-12 text-blue-600" />
    },
    {
      level: "50%",
      title: "Integration",
      description: "Connecting multiple technologies, full stack implementation",
      skills: ["Full Stack Projects", "Database Design", "Authentication", "State Management"],
      icon: <Database className="w-12 h-12 text-blue-600" />
    },
    {
      level: "70%",
      title: "Optimization",
      description: "Performance, security, and scalable architecture",
      skills: ["Security Best Practices", "Performance Tuning", "Testing", "Advanced State Patterns"],
      icon: <Shield className="w-12 h-12 text-blue-600" />
    },
    {
      level: "90%",
      title: "Industry Ready",
      description: "DevOps, deployment, industry-specific applications",
      skills: ["Cloud Deployment", "CI/CD Pipelines", "Monitoring", "System Architecture"],
      icon: <Server className="w-12 h-12 text-blue-600" />
    }
  ];

  const levelContainerVariant = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  return (
    <div className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Skill Progression Roadmap</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our progressive roadmap ensures a smooth transition from beginner to industry-ready professional through 
            carefully designed stages that build upon each other.
          </p>
        </motion.div>

        <div className="relative">
          {/* Progress line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-1 bg-blue-500 transform -translate-y-1/2 w-[90%] mx-auto origin-left"
            style={{ left: '5%' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={levelContainerVariant}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="font-bold text-2xl text-blue-600">{stage.level}</div>
                  <div className="text-blue-600">{stage.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{stage.title}</h3>
                <p className="text-gray-600 mb-4">{stage.description}</p>
                <ul className="space-y-2">
                  {stage.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillProgressionRoadmap;
