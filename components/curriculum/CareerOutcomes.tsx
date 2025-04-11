'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useElementOnScreen } from '../../src/hooks/useElementOnScreen';
import { BriefcaseBusiness, TrendingUp, Users, BarChart4, GraduationCap, Building } from 'lucide-react';

const CareerOutcomes = () => {
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.1 });
  
  const salaryData = [
    { role: 'Frontend Developer', tier1: '7-9 LPA', tier2: '5-7 LPA', tier3: '4-6 LPA' },
    { role: 'Backend Developer', tier1: '8-12 LPA', tier2: '6-8 LPA', tier3: '4.5-6.5 LPA' },
    { role: 'Full Stack Developer', tier1: '10-15 LPA', tier2: '7-10 LPA', tier3: '5-8 LPA' },
    { role: 'DevOps Engineer', tier1: '12-18 LPA', tier2: '8-12 LPA', tier3: '6-9 LPA' },
    { role: 'Mobile Developer', tier1: '8-14 LPA', tier2: '6-9 LPA', tier3: '4-7 LPA' },
  ];

  const partnerCompanies = [
    { name: 'TechCorp', logo: '/images/companies/techcorp.png', tier: 'Enterprise' },
    { name: 'CloudSphere', logo: '/images/companies/cloudsphere.png', tier: 'Enterprise' },
    { name: 'InnovateX', logo: '/images/companies/innovatex.png', tier: 'Startup' },
    { name: 'DataDynamics', logo: '/images/companies/datadynamics.png', tier: 'Mid-size' },
    { name: 'CodeCraftsmen', logo: '/images/companies/codecraftsmen.png', tier: 'Startup' },
    { name: 'DigitalForge', logo: '/images/companies/digitalforge.png', tier: 'Mid-size' },
  ];

  const careerPathways = [
    {
      title: 'Technical Specialist',
      description: 'Deepen expertise in a specific technology stack and become a subject matter expert',
      icon: <GraduationCap className="w-10 h-10 text-blue-600" />,
      steps: ['Junior Developer', 'Developer', 'Senior Developer', 'Tech Lead', 'Architect']
    },
    {
      title: 'Management Path',
      description: 'Transition into team leadership and project management roles',
      icon: <Users className="w-10 h-10 text-blue-600" />,
      steps: ['Team Lead', 'Engineering Manager', 'Director of Engineering', 'CTO']
    },
    {
      title: 'Entrepreneurial',
      description: 'Apply technical and business skills to launch innovative products',
      icon: <Building className="w-10 h-10 text-blue-600" />,
      steps: ['Full Stack Developer', 'Product Engineer', 'Technical Co-founder', 'Startup Founder']
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Outcomes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our graduates find success across various roles and industries, with clear pathways for 
            growth and competitive compensation packages even in tier-2 and tier-3 cities.
          </p>
        </motion.div>

        {/* Employment Pathways Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-semibold text-gray-800 mb-8 text-center"
          >
            <span className="inline-block border-b-2 border-blue-500 pb-1">Employment Pathways</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careerPathways.map((pathway, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-gray-800">{pathway.title}</h4>
                  <div className="text-blue-600">{pathway.icon}</div>
                </div>
                
                <p className="text-gray-600 mb-5">{pathway.description}</p>
                
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-blue-100 ml-px"></div>
                  <div className="space-y-4">
                    {pathway.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center relative">
                        <div className="rounded-full h-2 w-2 bg-blue-500 border-4 border-blue-100 z-10"></div>
                        <span className="text-gray-700 ml-6">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Salary Expectations Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-semibold text-gray-800 mb-8 text-center"
          >
            <span className="inline-block border-b-2 border-blue-500 pb-1">Salary Expectations</span>
          </motion.h3>
          
          <motion.div
            variants={itemVariants}
            className="overflow-x-auto rounded-lg border border-gray-200 shadow-md"
          >
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Role</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Tier-1 Cities</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Tier-2 Cities</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Tier-3 Cities</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {salaryData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.role}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-center">{item.tier1}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-center bg-blue-50">{item.tier2}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-center">{item.tier3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-sm text-center text-gray-500 mt-4"
          >
            *Salary ranges are approximate and based on industry data for candidates with 0-2 years of experience
          </motion.p>
        </motion.div>

        {/* Partner Companies Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-semibold text-gray-800 mb-8 text-center"
          >
            <span className="inline-block border-b-2 border-blue-500 pb-1">Company Partnerships</span>
          </motion.h3>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8"
          >
            {partnerCompanies.map((company, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-blue-700 font-semibold">LOGO</span>
                </div>
                <h5 className="text-gray-800 font-medium text-center">{company.name}</h5>
                <span className="text-xs text-blue-600">{company.tier}</span>
              </div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex justify-center"
          >
            <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center">
              View All Partner Companies <TrendingUp className="w-4 h-4 ml-1" />
            </button>
          </motion.div>
        </motion.div>

        {/* Industry Demand Visualization */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-semibold text-gray-800 mb-8 text-center"
          >
            <span className="inline-block border-b-2 border-blue-500 pb-1">Industry Demand Visualization</span>
          </motion.h3>
          
          <motion.div 
            variants={itemVariants}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
          >
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-lg font-semibold text-gray-800">Role Demand Trends (2025-2026)</h4>
              <div className="flex items-center text-sm text-gray-600">
                <div className="flex items-center mr-4">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                  <span>Current</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                  <span>Projected</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {[
                { role: 'Full Stack Developers', current: 85, projected: 90 },
                { role: 'Frontend Specialists', current: 75, projected: 70 },
                { role: 'Backend Engineers', current: 80, projected: 85 },
                { role: 'DevOps Engineers', current: 70, projected: 85 },
                { role: 'Mobile Developers', current: 65, projected: 75 },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">{item.role}</span>
                    <span className="text-sm text-gray-500">{item.projected}% demand</span>
                  </div>
                  
                  <div className="h-6 bg-gray-100 rounded-full overflow-hidden relative">
                    {/* Current demand bar */}
                    <div 
                      className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                      style={{ width: `${item.current}%` }}
                    ></div>
                    
                    {/* Projected demand indicator */}
                    <div 
                      className="absolute top-0 left-0 h-full border-r-2 border-green-500"
                      style={{ width: `${item.projected}%` }}
                    >
                      <div className="absolute top-0 right-0 h-6 w-1 bg-green-500 rounded-full transform translate-x-1/2"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-blue-50 p-4 rounded-lg">
              <h5 className="text-md font-semibold text-blue-800 mb-2">Growth Insights</h5>
              <p className="text-sm text-gray-700">
                The data indicates strong continued demand for full stack developers with integrated skill sets across the technology stack. 
                DevOps engineers show the highest growth potential, while frontend specialists may experience some specialization in areas like UI/UX design.
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Download Industry Report
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CareerOutcomes;