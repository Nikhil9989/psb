'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useElementOnScreen } from '../../src/hooks/useElementOnScreen';
import { Briefcase, Users, Calendar, Code2, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const ProjectPortfolio = () => {
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.1 });
  const [selectedTab, setSelectedTab] = useState("beginner");

  const projects = {
    beginner: [
      {
        title: "Personal Portfolio Website",
        description: "A responsive portfolio website featuring CSS animations, semantic HTML, and mobile-first design principles.",
        skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        duration: "2 weeks",
        teamSize: "Individual",
        image: "/images/projects/portfolio-project.jpg"
      },
      {
        title: "Task Management Dashboard",
        description: "A task tracking application with CRUD operations, state management, and local storage persistence.",
        skills: ["React.js", "CSS Modules", "LocalStorage API", "State Management"],
        duration: "3 weeks",
        teamSize: "Individual",
        image: "/images/projects/task-dashboard.jpg"
      },
    ],
    intermediate: [
      {
        title: "E-Commerce Product Catalog",
        description: "A product browsing platform with filtering, sorting, and cart functionality using modern React practices.",
        skills: ["React.js", "Context API", "REST API Integration", "Styled Components"],
        duration: "4 weeks",
        teamSize: "2-3 Students",
        image: "/images/projects/ecommerce-catalog.jpg"
      },
      {
        title: "Real-Time Chat Application",
        description: "A messaging platform with real-time updates, user authentication, and message persistence.",
        skills: ["Socket.io", "Express.js", "MongoDB", "JWT Authentication"],
        duration: "5 weeks",
        teamSize: "2-3 Students",
        image: "/images/projects/chat-app.jpg"
      },
    ],
    advanced: [
      {
        title: "Full-Stack Social Media Platform",
        description: "A social networking application with posts, comments, real-time notifications, and profile management.",
        skills: ["React.js", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
        duration: "8 weeks",
        teamSize: "3-4 Students",
        image: "/images/projects/social-media-platform.jpg"
      },
      {
        title: "Enterprise Resource Planning Dashboard",
        description: "A comprehensive business management system with multiple interconnected modules and data visualization.",
        skills: ["Next.js", "GraphQL", "PostgreSQL", "Chart.js", "Redux"],
        duration: "10 weeks",
        teamSize: "4-5 Students", 
        image: "/images/projects/erp-dashboard.jpg"
      },
    ],
    capstone: [
      {
        title: "Healthcare Management System",
        description: "An industry-sponsored project providing appointment scheduling, patient records, and analytics for healthcare providers.",
        skills: ["Full Stack Development", "HIPAA Compliance", "Authentication", "Data Visualization"],
        duration: "12 weeks",
        teamSize: "5-6 Students",
        image: "/images/projects/healthcare-system.jpg"
      },
      {
        title: "Smart Retail Inventory System",
        description: "An AI-enhanced inventory management system with predictive ordering and real-time tracking for retail businesses.",
        skills: ["Machine Learning Integration", "IoT Connection", "Real-time Data", "Microservices"],
        duration: "12 weeks",
        teamSize: "5-6 Students",
        image: "/images/projects/inventory-system.jpg"
      },
    ]
  };

  const tabVariants = {
    inactive: { opacity: 0.6, y: 0 },
    active: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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

  return (
    <div className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Portfolio Examples</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our curriculum emphasizes learning by doing through projects that progressively increase in complexity
            and industry relevance, culminating in real-world capstone challenges.
          </p>
        </motion.div>

        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {["beginner", "intermediate", "advanced", "capstone"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                variants={tabVariants}
                animate={selectedTab === tab ? "active" : "inactive"}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedTab === tab 
                    ? "bg-blue-600 text-white shadow-md" 
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Projects
              </motion.button>
            ))}
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects[selectedTab as keyof typeof projects].map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 w-full bg-blue-100">
                  <div className="absolute inset-0 bg-blue-800 bg-opacity-30 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">Project Preview</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="w-5 h-5 text-blue-600 mr-2" />
                      <span>{project.teamSize}</span>
                    </div>
                  </div>
                  
                  <div className="mb-5">
                    <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                      <Code2 className="w-5 h-5 text-blue-600 mr-2" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    View Project Details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPortfolio;
