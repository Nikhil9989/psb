'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useElementOnScreen } from '../../src/hooks/useElementOnScreen';

const TechnologiesComponent = () => {
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.1 });

  const technologies = [
    {
      category: "Frontend Development",
      description: "Modern UI frameworks and libraries to build responsive, interactive web applications",
      skills: [
        { name: "HTML5/CSS3", level: 90 },
        { name: "JavaScript ES6+", level: 85 },
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "TypeScript", level: 75 },
      ]
    },
    {
      category: "Backend Development",
      description: "Server-side technologies for robust, scalable application logic and APIs",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "RESTful APIs", level: 85 },
        { name: "GraphQL", level: 70 },
        { name: "Authentication/JWT", level: 80 },
        { name: "Microservices", level: 75 },
      ]
    },
    {
      category: "Databases & Storage",
      description: "Data management solutions for persistent storage and efficient retrieval",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Redis", level: 75 },
        { name: "Firebase", level: 80 },
        { name: "SQL Fundamentals", level: 85 },
        { name: "Data Modeling", level: 75 },
      ]
    },
    {
      category: "DevOps & Deployment",
      description: "Tools and practices for continuous integration, deployment, and monitoring",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 80 },
        { name: "CI/CD Pipelines", level: 75 },
        { name: "Serverless", level: 70 },
        { name: "Monitoring", level: 75 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies & Tools Covered</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive curriculum covers all essential technologies across the full development
            stack, preparing you for diverse roles in the industry.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {technologies.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-lg p-6 shadow-md border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-3">{category.category}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + (skillIndex * 0.1) }}
                        className="h-2.5 rounded-full"
                        style={{ 
                          background: "linear-gradient(90deg, #3B82F6 0%, #2563EB 100%)",
                          width: `${skill.level}%`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Download Full Technology Roadmap
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologiesComponent;
