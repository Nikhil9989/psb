'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { useElementOnScreen } from '../../src/hooks/useElementOnScreen';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  type: 'founder' | 'mentor';
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Arjun Sharma',
    role: 'CEO & Education Lead',
    image: '/images/team/founder1.jpg',
    bio: 'Former education technology executive with 10+ years of experience in curriculum development and educational partnerships. Arjun founded SKILL BRIDGE to transform how technical skills are taught in tier-2/3 cities.',
    expertise: ['Curriculum Design', 'Education Technology', 'Institutional Partnerships'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/',
      twitter: 'https://twitter.com/',
      website: 'https://example.com',
    },
    type: 'founder',
  },
  {
    id: 2,
    name: 'Priya Mehta',
    role: 'CTO & Product Lead',
    image: '/images/team/founder2.jpg',
    bio: 'Full-stack developer and engineering leader who previously scaled technical teams at two successful startups. Priya oversees SKILL BRIDGE\'s technology infrastructure and product development, focusing on creating accessible learning experiences.',
    expertise: ['Software Architecture', 'Mobile-First Development', 'Technical Leadership'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/',
      twitter: 'https://twitter.com/',
    },
    type: 'founder',
  },
  {
    id: 3,
    name: 'Vikram Singh',
    role: 'Operations & Student Experience Lead',
    image: '/images/team/founder3.jpg',
    bio: 'Former operations director at a leading educational institution with expertise in creating exceptional student experiences. Vikram ensures smooth day-to-day operations and maintains high-quality student support systems.',
    expertise: ['Operations Management', 'Student Success', 'Process Optimization'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/',
    },
    type: 'founder',
  },
  {
    id: 4,
    name: 'Neha Gupta',
    role: 'Web Development Mentor',
    image: '/images/team/mentor1.jpg',
    bio: 'Senior full-stack developer with 8+ years of experience at leading tech companies. Neha specializes in React, Node.js, and cloud infrastructure, bringing real-world expertise to the Web Development domain.',
    expertise: ['React.js', 'Node.js', 'Cloud Infrastructure', 'Full-Stack Development'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/',
      website: 'https://example.com',
    },
    type: 'mentor',
  },
  {
    id: 5,
    name: 'Rahul Kumar',
    role: 'Data Science Mentor',
    image: '/images/team/mentor2.jpg',
    bio: 'Data scientist with experience at top analytics firms and a passion for making complex concepts accessible. Rahul brings hands-on industry experience to the Data Science domain, helping students master practical applications.',
    expertise: ['Machine Learning', 'Python', 'Data Visualization', 'Statistical Analysis'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/',
      twitter: 'https://twitter.com/',
    },
    type: 'mentor',
  },
  {
    id: 6,
    name: 'Ananya Desai',
    role: 'UI/UX Design Mentor',
    image: '/images/team/mentor3.jpg',
    bio: 'UI/UX designer with a background in psychology and design thinking. Ananya helps students understand both the technical and human aspects of digital product design through real-world projects.',
    expertise: ['UI Design', 'UX Research', 'Design Systems', 'Prototyping'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/',
      website: 'https://example.com',
    },
    type: 'mentor',
  },
];

const TeamMentorCard = ({ member }: { member: TeamMember }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div 
      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden flex flex-col h-full border border-gray-100"
      whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 md:h-56 w-full">
        <Image 
          src={member.image} 
          alt={member.name} 
          fill 
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
        
        <div className="space-y-3">
          <div className={`text-gray-700 ${expanded ? '' : 'line-clamp-3'}`}>
            {member.bio}
          </div>
          
          {expanded && (
            <div className="mt-4">
              <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill, index) => (
                  <span 
                    key={index} 
                    className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          <button 
            onClick={() => setExpanded(!expanded)} 
            className="flex items-center text-indigo-600 hover:text-indigo-800 mt-2 text-sm font-medium"
          >
            {expanded ? (
              <>Less <ChevronUp size={16} className="ml-1" /></>
            ) : (
              <>More <ChevronDown size={16} className="ml-1" /></>
            )}
          </button>
        </div>
      </div>
      
      <div className="p-6 pt-0 flex items-center space-x-3">
        {member.socialLinks.linkedin && (
          <a 
            href={member.socialLinks.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-600 transition-colors"
            aria-label={`LinkedIn profile of ${member.name}`}
          >
            <Linkedin size={20} />
          </a>
        )}
        {member.socialLinks.twitter && (
          <a 
            href={member.socialLinks.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-600 transition-colors"
            aria-label={`Twitter profile of ${member.name}`}
          >
            <Twitter size={20} />
          </a>
        )}
        {member.socialLinks.website && (
          <a 
            href={member.socialLinks.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-600 transition-colors"
            aria-label={`Website of ${member.name}`}
          >
            <Globe size={20} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const TeamMentors = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'founders' | 'mentors'>('all');
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.1 });

  const filteredMembers = teamMembers.filter(member => {
    if (activeTab === 'all') return true;
    if (activeTab === 'founders') return member.type === 'founder';
    if (activeTab === 'mentors') return member.type === 'mentor';
    return true;
  });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-50 filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-100 rounded-full opacity-50 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Our Team & Mentors</h2>
          <p className="text-xl text-gray-600">
            Meet the experts behind SKILL BRIDGE, committed to transforming education through domain-based learning and personalized mentorship.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-1.5 border border-gray-200">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'all' ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('founders')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'founders' ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Founding Team
            </button>
            <button
              onClick={() => setActiveTab('mentors')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'mentors' ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Industry Mentors
            </button>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {filteredMembers.map((member) => (
            <TeamMentorCard key={member.id} member={member} />
          ))}
        </motion.div>

        <div className="mt-20 pt-10 border-t border-gray-200">
          <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">How Mentorship Works</h3>
          <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">
            Our mentorship program pairs you with industry experts who provide personalized guidance throughout your learning journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="absolute -right-10 -top-10 w-20 h-20 bg-indigo-100 rounded-full opacity-50"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white">1</div>
                <h4 className="font-bold text-lg mb-2 text-center">Personalized Guidance</h4>
                <p className="text-gray-600 text-center">Regular 1-on-1 sessions with industry experts tailored to your learning goals.</p>
              </div>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="absolute -right-10 -top-10 w-20 h-20 bg-purple-100 rounded-full opacity-50"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white">2</div>
                <h4 className="font-bold text-lg mb-2 text-center">Real-World Projects</h4>
                <p className="text-gray-600 text-center">Work on industry-aligned projects with expert feedback and direction.</p>
              </div>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="absolute -right-10 -top-10 w-20 h-20 bg-indigo-100 rounded-full opacity-50"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white">3</div>
                <h4 className="font-bold text-lg mb-2 text-center">Career Strategy</h4>
                <p className="text-gray-600 text-center">Get insights on career paths, portfolio development, and interview preparation.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMentors;