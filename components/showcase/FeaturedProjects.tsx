'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, MessageCircle, Eye, Award, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

// Sample featured projects data
const featuredProjects = [
  {
    id: 'fp1',
    title: 'HealthTrack AI',
    description: 'AI-powered health monitoring application that tracks vitals and provides personalized recommendations.',
    student: 'Priya Sharma',
    domain: 'Full Stack + AI/ML',
    phase: '80%',
    image: '/projects/health-track.jpg',
    likes: 245,
    comments: 32,
    views: 1450,
    technologies: ['React', 'TensorFlow', 'Node.js', 'MongoDB'],
    live: 'https://healthtrack.demo.skillbridge.in',
    github: 'https://github.com/skillbridge/health-track-demo',
  },
  {
    id: 'fp2',
    title: 'EcoSmart Home',
    description: 'IoT-based smart home solution focused on energy efficiency and sustainable living.',
    student: 'Raj Patel',
    domain: 'IoT + Cloud Computing',
    phase: '70%',
    image: '/projects/ecosmart.jpg',
    likes: 178,
    comments: 24,
    views: 890,
    technologies: ['React', 'AWS IoT', 'NodeJS', 'MongoDB'],
    live: 'https://ecosmart.demo.skillbridge.in',
    github: 'https://github.com/skillbridge/ecosmart-demo',
  },
  {
    id: 'fp3',
    title: 'LocalVendor',
    description: 'Marketplace platform connecting local artisans and small businesses with customers in their community.',
    student: 'Aisha Khan',
    domain: 'Web Development',
    phase: '60%',
    image: '/projects/localvendor.jpg',
    likes: 203,
    comments: 41,
    views: 1280,
    technologies: ['Vue.js', 'Firebase', 'Express', 'PostgreSQL'],
    live: 'https://localvendor.demo.skillbridge.in',
    github: 'https://github.com/skillbridge/localvendor-demo',
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-12 bg-obsidian-950/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2">
              <Award className="text-amber-500" size={24} />
              <h2 className="text-2xl md:text-3xl font-bold font-display text-white">Featured Projects</h2>
            </div>
            <p className="text-gray-400 mt-2">Exceptional work from our students showcasing their mastery</p>
          </div>
          <Link 
            href="/showcase" 
            className="hidden md:block px-4 py-2 text-sm text-amber-400 hover:text-amber-300 border border-amber-700/30 rounded-lg hover:bg-amber-900/20 transition-colors"
          >
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-b from-obsidian-800 to-obsidian-900 rounded-xl overflow-hidden border border-gray-800 hover:border-amber-700/30 transition-all shadow-xl hover:shadow-amber-900/10 group"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-obsidian-900 animate-pulse" /> {/* Placeholder */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback for demo purposes
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x200.png?text=Project+Image';
                  }}
                />
                <div className="absolute top-2 right-2 z-20 bg-amber-900/80 text-white text-xs px-2 py-1 rounded-lg">
                  {project.phase} Mastery
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium bg-amber-900/20 text-amber-400 px-2 py-1 rounded">
                    {project.domain}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>
                
                {/* Student info */}
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 flex items-center justify-center text-white font-semibold text-sm mr-2">
                    {project.student.charAt(0)}
                  </div>
                  <span className="text-gray-300 text-sm">{project.student}</span>
                </div>
                
                {/* Technology tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="text-xs bg-obsidian-800 text-gray-300 px-2 py-1 rounded-md border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Engagement stats */}
                <div className="flex items-center justify-between border-t border-gray-800 pt-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center text-rose-400">
                      <Heart size={16} className="mr-1" />
                      <span className="text-xs text-gray-400">{project.likes}</span>
                    </div>
                    <div className="flex items-center text-blue-400">
                      <MessageCircle size={16} className="mr-1" />
                      <span className="text-xs text-gray-400">{project.comments}</span>
                    </div>
                    <div className="flex items-center text-green-400">
                      <Eye size={16} className="mr-1" />
                      <span className="text-xs text-gray-400">{project.views}</span>
                    </div>
                  </div>
                  
                  {/* External links */}
                  <div className="flex gap-2">
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-1.5 text-gray-400 hover:text-amber-400 transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-1.5 text-gray-400 hover:text-amber-400 transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile view all button */}
        <div className="mt-8 text-center md:hidden">
          <Link 
            href="/showcase" 
            className="px-6 py-3 text-amber-400 hover:text-amber-300 border border-amber-700/30 rounded-lg hover:bg-amber-900/20 inline-block transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
