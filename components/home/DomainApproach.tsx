'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaLightbulb, 
  FaTools, 
  FaPuzzlePiece, 
  FaGraduationCap, 
  FaChessKnight,
  FaCode,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaCloudUploadAlt
} from 'react-icons/fa';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Refined phase names and descriptions
const progressSteps = [
  {
    level: '10%',
    name: 'Inception',
    description: 'Establish foundational knowledge and conceptual understanding of the domain',
    icon: <FaLightbulb />,
    color: 'from-gold-300 to-gold-400 text-obsidian-900',
  },
  {
    level: '30%',
    name: 'Acceleration',
    description: 'Develop practical skills and begin applying concepts to increasingly complex scenarios',
    icon: <FaTools />,
    color: 'from-gold-400 to-gold-500 text-obsidian-900',
  },
  {
    level: '50%',
    name: 'Integration',
    description: 'Connect multiple skills and technologies to create comprehensive solutions',
    icon: <FaPuzzlePiece />,
    color: 'from-gold-500 to-gold-600 text-obsidian-900',
  },
  {
    level: '70%',
    name: 'Mastery',
    description: 'Apply advanced techniques and develop industry-grade projects with minimal guidance',
    icon: <FaGraduationCap />,
    color: 'from-gold-600 to-gold-700 text-obsidian-900',
  },
  {
    level: '90%',
    name: 'Transcendence',
    description: 'Lead complex projects, mentor others, and innovate within the domain ecosystem',
    icon: <FaChessKnight />,
    color: 'from-gold-700 to-gold-800 text-obsidian-900',
  },
];

// Web Development Domain Details
const webDevSkills = [
  {
    area: "Front-End Development",
    icon: <FaCode />,
    technologies: "HTML5, CSS3, JavaScript, React, TypeScript, Next.js, Responsive Design",
    color: "from-blue-400 to-indigo-500"
  },
  {
    area: "Back-End Development",
    icon: <FaServer />,
    technologies: "Node.js, Express, RESTful APIs, GraphQL, Authentication",
    color: "from-green-400 to-emerald-500"
  },
  {
    area: "Database Management",
    icon: <FaDatabase />,
    technologies: "MongoDB, PostgreSQL, Data Modeling, SQL, NoSQL",
    color: "from-amber-400 to-orange-500"
  },
  {
    area: "Security & Performance",
    icon: <FaShieldAlt />,
    technologies: "HTTPS, OWASP, Authentication, Authorization, Optimization",
    color: "from-red-400 to-rose-500"
  },
  {
    area: "DevOps & Deployment",
    icon: <FaCloudUploadAlt />,
    technologies: "Git, GitHub, CI/CD, Docker, Cloud Deployment, AWS/GCP",
    color: "from-purple-400 to-violet-500"
  }
];

// Sample Projects
const sampleProjects = [
  {
    title: "Full-Stack E-Commerce Platform",
    phase: "70% Mastery",
    description: "Build a complete e-commerce solution with product catalog, shopping cart, secure checkout, and admin dashboard",
    skills: "React, Node.js, MongoDB, Payment Integration, Authentication"
  },
  {
    title: "Real-Time Collaboration Tool",
    phase: "50% Integration",
    description: "Develop a multi-user document editor with real-time updates and collaborative features",
    skills: "WebSockets, React, Express, State Management, User Permissions"
  },
  {
    title: "Progressive Web Application",
    phase: "70% Mastery",
    description: "Create an offline-capable application with responsive design and native-like features",
    skills: "Service Workers, IndexedDB, Push Notifications, Responsive UI"
  }
];

const DomainApproach = () => {
  const [activeTab, setActiveTab] = useState('progression');

  return (
    <section className="py-20 md:py-28 bg-obsidian-800 texture-overlay relative">
      {/* Subtle gold accent elements */}
      <div className="absolute top-0 left-0 w-24 h-1 bg-gold-500"></div>
      <div className="absolute top-0 right-0 w-24 h-1 bg-gold-500"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold-500 text-sm uppercase tracking-wider font-medium">Our Methodology</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-6">
            <span className="gold-gradient-text">Domain-Based</span> Progressive Learning
          </h2>
          <p className="text-obsidian-100 text-base md:text-lg">
            Unlike traditional course-based programs that teach skills in isolation, our domain-based 
            workshops deliver comprehensive understanding through five transformative phases:
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-obsidian-700 rounded-lg p-1">
            <button 
              onClick={() => setActiveTab('progression')} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all 
                ${activeTab === 'progression' ? 'bg-gold-500 text-obsidian-900' : 'text-obsidian-200 hover:text-white'}`}
            >
              Skill Progression
            </button>
            <button 
              onClick={() => setActiveTab('webdev')} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all 
                ${activeTab === 'webdev' ? 'bg-gold-500 text-obsidian-900' : 'text-obsidian-200 hover:text-white'}`}
            >
              Web Development
            </button>
            <button 
              onClick={() => setActiveTab('projects')} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all 
                ${activeTab === 'projects' ? 'bg-gold-500 text-obsidian-900' : 'text-obsidian-200 hover:text-white'}`}
            >
              Sample Projects
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {/* Skill Progression Tab */}
          {activeTab === 'progression' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Progress Steps */}
              <div className="relative">
                {/* Connecting Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-300 to-gold-800 rounded-full hidden md:block"></div>
                
                {/* Steps */}
                {progressSteps.map((step, index) => (
                  <motion.div
                    key={step.level}
                    variants={itemVariants}
                    className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 relative"
                  >
                    {/* Step Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl shadow-gold z-10`}>
                      {step.icon}
                    </div>
                    
                    {/* Step Content */}
                    <div className="bg-obsidian-700 md:ml-4 p-6 rounded-lg border border-gold-500/20 flex-grow backdrop-blur-sm">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-xl font-bold text-white">{step.name}</h3>
                        <span className="text-lg font-semibold text-gold-500">{step.level}</span>
                      </div>
                      <p className="text-obsidian-100">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Web Development Tab */}
          {activeTab === 'webdev' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="mb-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Web Development Domain</h3>
                <p className="text-obsidian-100">Our first domain offering focuses on comprehensive full-stack web development skills, covering all aspects needed to build modern web applications:</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {webDevSkills.map((skill, index) => (
                  <motion.div
                    key={skill.area}
                    variants={itemVariants}
                    className="bg-obsidian-700 p-6 rounded-lg border border-gold-500/20 backdrop-blur-sm"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center text-xl text-white shadow-lg mr-4`}>
                        {skill.icon}
                      </div>
                      <h4 className="text-lg font-bold text-white">{skill.area}</h4>
                    </div>
                    <p className="text-obsidian-100">
                      <span className="text-gold-400 font-medium">Technologies:</span> {skill.technologies}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-obsidian-700 rounded-lg border border-gold-500/30">
                <h4 className="text-lg font-bold text-white mb-3">Program Timeline</h4>
                <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                  <div className="text-center mb-4 md:mb-0">
                    <span className="block text-obsidian-100">Duration</span>
                    <span className="text-xl font-bold text-gold-500">3-6 Months</span>
                  </div>
                  <div className="text-center mb-4 md:mb-0">
                    <span className="block text-obsidian-100">Weekly Commitment</span>
                    <span className="text-xl font-bold text-gold-500">12-15 Hours</span>
                  </div>
                  <div className="text-center mb-4 md:mb-0">
                    <span className="block text-obsidian-100">Live Sessions</span>
                    <span className="text-xl font-bold text-gold-500">2x Weekly</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-obsidian-100">Projects</span>
                    <span className="text-xl font-bold text-gold-500">5+ Completed</span>
                  </div>
                </div>
                <p className="text-obsidian-200 text-sm">* Pace can be adjusted based on prior experience and learning goals</p>
              </div>
            </motion.div>
          )}

          {/* Sample Projects Tab */}
          {activeTab === 'projects' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="mb-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Industry-Aligned Projects</h3>
                <p className="text-obsidian-100">Sample projects you'll build during your learning journey, aligned with real-world industry requirements:</p>
              </div>

              <div className="space-y-6">
                {sampleProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    variants={itemVariants}
                    className="bg-obsidian-700 p-6 rounded-lg border border-gold-500/20 backdrop-blur-sm"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-bold text-white">{project.title}</h4>
                      <span className="text-sm font-medium px-3 py-1 bg-gold-500/20 text-gold-400 rounded-full">{project.phase}</span>
                    </div>
                    <p className="text-obsidian-100 mb-3">{project.description}</p>
                    <p className="text-sm text-obsidian-200">
                      <span className="text-gold-400 font-medium">Skills applied:</span> {project.skills}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center bg-obsidian-700 p-6 rounded-lg border border-gold-500/30">
                <h4 className="text-lg font-bold text-white mb-3">Capstone Project</h4>
                <p className="text-obsidian-100 mb-4">
                  At the 70% mastery level, you'll begin work on your personal capstone project that demonstrates your comprehensive domain expertise. 
                  This project will be reviewed by hiring managers and showcased in your portfolio.
                </p>
                <div className="inline-flex items-center justify-center">
                  <span className="text-sm font-medium px-4 py-2 bg-gold-500/10 text-gold-400 rounded-full">
                    One-on-one mentorship provided for capstone projects
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="bg-obsidian-700 p-6 md:p-8 rounded-lg border border-gold-500/30">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gold-500">
              The Cohort Advantage
            </h3>
            <p className="text-obsidian-100 mb-4">
              Progress through each phase alongside a dedicated cohort of peers, creating a powerful 
              support network and collaborative learning environment that mirrors real industry teams.
            </p>
            <p className="text-obsidian-200 italic">
              "The domain-based cohort approach completely transformed how I understand technology stacks. 
              Instead of learning isolated pieces, I now see how everything connects in real-world applications."
            </p>
            <p className="mt-2 text-gold-400 font-semibold">— Riya S., Full-Stack Developer</p>
            
            <div className="mt-6 inline-flex">
              <span className="cohort-badge mr-2">Web Development Cohort enrolling now</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DomainApproach;