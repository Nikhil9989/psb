'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaMapMarkerAlt, FaDesktop, FaUsers, FaLaptopCode, FaWifi, FaChalkboardTeacher, FaHandshake } from 'react-icons/fa';

// Partner data
const partners = [
  {
    name: 'Rajiv Gandhi Institute of Technology',
    location: 'Kottayam, Kerala',
    facilities: ['Modern Computer Labs', 'High-Speed Internet', 'Smart Classrooms'],
    image: '/api/placeholder/200/100',
  },
  {
    name: 'Sri Krishna College of Engineering',
    location: 'Coimbatore, Tamil Nadu',
    facilities: ['24/7 Lab Access', 'Conference Rooms', 'Innovation Hub'],
    image: '/api/placeholder/200/100',
  },
  {
    name: 'Vellore Institute of Technology',
    location: 'Vellore, Tamil Nadu',
    facilities: ['Research Centers', 'Dedicated Mentorship Spaces', 'Training Labs'],
    image: '/api/placeholder/200/100',
  },
  {
    name: 'NIT Warangal',
    location: 'Warangal, Telangana',
    facilities: ['Advanced Computing Resources', 'Collaboration Spaces', 'Innovation Centers'],
    image: '/api/placeholder/200/100',
  },
];

// Student benefits data
const studentBenefits = [
  {
    icon: <FaBuilding className="h-5 w-5" />,
    title: 'Access to Campus Infrastructure',
    description: 'Use modern computer labs, high-speed internet, and dedicated learning spaces at partner institutions.',
  },
  {
    icon: <FaUsers className="h-5 w-5" />,
    title: 'Local Learning Community',
    description: 'Connect with peers in your city for collaborative learning and networking opportunities.',
  },
  {
    icon: <FaChalkboardTeacher className="h-5 w-5" />,
    title: 'Faculty Engagement',
    description: 'Benefit from additional support from institution faculty members as secondary mentors.',
  },
  {
    icon: <FaHandshake className="h-5 w-5" />,
    title: 'Industry Connections',
    description: 'Tap into each institution\'s local industry partners and alumni networks for career opportunities.',
  },
];

// Hybrid model features
const hybridFeatures = [
  {
    icon: <FaLaptopCode />,
    title: 'Online Learning',
    details: [
      'Self-paced modules',
      'Live virtual sessions',
      'Global mentor access',
      'Cloud-based projects'
    ]
  },
  {
    icon: <FaDesktop />,
    title: 'Campus Sessions',
    details: [
      'Hands-on workshops',
      'Peer collaboration',
      'In-person doubt clearing',
      'Project presentations'
    ]
  },
  {
    icon: <FaWifi />,
    title: 'Connected Experience',
    details: [
      'Seamless transition',
      'Consistent learning paths',
      'Offline content access',
      'Synchronized progress'
    ]
  }
];

const InstitutionalPartnerships = () => {
  return (
    <section className="py-20 bg-obsidian-900 texture-overlay relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-3 z-0"></div>
      
      {/* Gold accent elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/4 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold-500 text-sm uppercase tracking-wider font-medium">Trust Building</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-6">
            <span className="gold-gradient-text">Institutional Partnerships</span> for Local Learning
          </h2>
          <p className="text-obsidian-200 text-base md:text-lg">
            SKILL BRIDGE partners with leading educational institutions across tier-2 and tier-3 cities to provide 
            the perfect blend of online expertise and local infrastructure.
          </p>
        </motion.div>

        {/* Partner logos and facilities section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-obsidian-800 border border-obsidian-700 group-hover:border-gold-500/40 rounded-lg overflow-hidden h-full transition-all duration-300 hover:shadow-card-hover">
                <div className="relative h-32 overflow-hidden bg-obsidian-700">
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 to-transparent opacity-50 z-10"></div>
                  <img 
                    src={partner.image} 
                    alt={partner.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-3 z-20 flex items-center">
                    <div className="p-1.5 bg-gold-500 rounded-full mr-2">
                      <FaMapMarkerAlt className="w-3 h-3 text-obsidian-900" />
                    </div>
                    <span className="text-xs text-white font-medium">{partner.location}</span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-base font-semibold mb-3 text-white">{partner.name}</h3>
                  <div className="space-y-2">
                    {partner.facilities.map((facility, idx) => (
                      <div key={idx} className="flex items-center text-xs text-obsidian-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mr-2"></div>
                        <span>{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Hybrid Model explained visually */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              The <span className="gold-gradient-text">Hybrid Learning</span> Model
            </h3>
            <p className="text-obsidian-300 max-w-2xl mx-auto">
              Experience the best of both worlds - online flexibility and in-person collaboration
            </p>
          </div>

          <div className="relative bg-obsidian-800 border border-obsidian-700 rounded-lg p-6 md:p-8 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gold-500/5 blur-3xl rounded-full"></div>
            
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-500/10 via-gold-500/50 to-gold-500/10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {hybridFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-obsidian-700 border border-gold-500/30 text-gold-500 mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-gold-500 font-semibold text-lg mb-3">{feature.title}</h4>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-obsidian-300 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50 mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Partnership benefits for students */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              <span className="gold-gradient-text">Partnership Benefits</span> for Students
            </h3>
            <p className="text-obsidian-300 max-w-2xl mx-auto">
              How our institutional partnerships enhance your learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studentBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="flex items-start p-5 bg-obsidian-800/50 border border-obsidian-700 rounded-lg hover:border-gold-500/30 transition-colors duration-300"
              >
                <div className="p-2 rounded-md bg-gold-500/10 text-gold-500 mr-4 mt-1">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-1 text-white">{benefit.title}</h4>
                  <p className="text-sm text-obsidian-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="/partners"
            className="btn btn-outline-gold px-8 py-3 text-sm inline-flex items-center relative overflow-hidden group"
          >
            <span className="relative z-10">Explore Our Partner Network</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform"
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
        </motion.div>
      </div>
    </section>
  );
};

export default InstitutionalPartnerships;