'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, MessageCircle, Eye, Github, ExternalLink, Bookmark, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Sample projects data
const projectsData = [
  {
    id: 'p1',
    title: 'FinTrack Dashboard',
    description: 'Personal finance tracking dashboard with expense categorization and visualization.',
    student: 'Vikram Singh',
    studentImage: '/students/vikram.jpg',
    domain: 'Web Development',
    phase: '60%',
    image: '/projects/fintrack.jpg',
    likes: 156,
    comments: 23,
    views: 890,
    technologies: ['React', 'Node.js', 'Chart.js', 'MongoDB'],
    featured: false,
    live: 'https://fintrack.demo.skillbridge.in',
    github: 'https://github.com/vikram-singh/fintrack',
  },
  {
    id: 'p2',
    title: 'MindfulMe',
    description: 'Meditation and mental wellness application with guided sessions and progress tracking.',
    student: 'Ananya Desai',
    studentImage: '/students/ananya.jpg',
    domain: 'Mobile Development',
    phase: '70%',
    image: '/projects/mindfulme.jpg',
    likes: 203,
    comments: 45,
    views: 1250,
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    featured: true,
    live: 'https://mindfulme.demo.skillbridge.in',
    github: 'https://github.com/ananya-desai/mindfulme',
  },
  {
    id: 'p3',
    title: 'WeatherSense',
    description: 'Weather prediction system using machine learning and historical climate data.',
    student: 'Rahul Mehta',
    studentImage: '/students/rahul.jpg',
    domain: 'Data Science',
    phase: '80%',
    image: '/projects/weathersense.jpg',
    likes: 178,
    comments: 32,
    views: 945,
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Flask'],
    featured: false,
    live: 'https://weathersense.demo.skillbridge.in',
    github: 'https://github.com/rahul-mehta/weathersense',
  },
  {
    id: 'p4',
    title: 'NutriScan',
    description: 'Mobile app that scans food items and provides nutritional information and dietary recommendations.',
    student: 'Prisha Kapoor',
    studentImage: '/students/prisha.jpg',
    domain: 'Mobile Development',
    phase: '60%',
    image: '/projects/nutriscan.jpg',
    likes: 145,
    comments: 29,
    views: 870,
    technologies: ['Flutter', 'Firebase', 'TensorFlow Lite', 'Python'],
    featured: false,
    live: 'https://nutriscan.demo.skillbridge.in',
    github: 'https://github.com/prisha-kapoor/nutriscan',
  },
  {
    id: 'p5',
    title: 'CodeCollab',
    description: 'Real-time collaborative coding platform with video chat and shared editor.',
    student: 'Arjun Nair',
    studentImage: '/students/arjun.jpg',
    domain: 'Web Development',
    phase: '70%',
    image: '/projects/codecollab.jpg',
    likes: 210,
    comments: 38,
    views: 1120,
    technologies: ['React', 'Socket.io', 'WebRTC', 'MongoDB'],
    featured: true,
    live: 'https://codecollab.demo.skillbridge.in',
    github: 'https://github.com/arjun-nair/codecollab',
  },
  {
    id: 'p6',
    title: 'SmartInventory',
    description: 'IoT-based inventory management system for small businesses with analytics.',
    student: 'Kavita Reddy',
    studentImage: '/students/kavita.jpg',
    domain: 'IoT',
    phase: '50%',
    image: '/projects/smartinventory.jpg',
    likes: 132,
    comments: 25,
    views: 760,
    technologies: ['Arduino', 'React', 'Node.js', 'MQTT'],
    featured: false,
    live: 'https://smartinventory.demo.skillbridge.in',
    github: 'https://github.com/kavita-reddy/smartinventory',
  },
  // Add more projects as needed
];

const ShowcaseGallery = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 6);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">Student Projects Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-obsidian-800 rounded-xl overflow-hidden shadow-lg hover:shadow-amber-900/10 border border-gray-800 hover:border-amber-700/30 transition-all group"
            >
              {/* Project image container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-obsidian-900/80 z-10" />
                <div className="absolute inset-0 bg-obsidian-900 animate-pulse" /> {/* Placeholder */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback for demo purposes
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x300.png?text=Project+Image';
                  }}
                />
                
                {/* Featured badge if applicable */}
                {project.featured && (
                  <div className="absolute top-3 left-3 z-20 bg-amber-600 text-white text-xs px-2 py-1 rounded-lg">
                    Featured
                  </div>
                )}
                
                {/* Skill level badge */}
                <div className="absolute top-3 right-3 z-20 bg-obsidian-800/90 text-amber-400 text-xs px-2 py-1 rounded-lg border border-amber-700/30">
                  {project.phase} Mastery
                </div>
                
                {/* Student info at the bottom of image */}
                <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 flex items-center justify-center text-white font-semibold text-sm">
                    {project.student.charAt(0)}
                  </div>
                  <div className="ml-2">
                    <p className="text-white text-sm font-medium">{project.student}</p>
                    <p className="text-gray-300 text-xs">{project.domain}</p>
                  </div>
                </div>
                
                {/* Quick action buttons */}
                <div className="absolute top-3 right-16 z-20 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1.5 bg-obsidian-800/90 rounded-full text-gray-300 hover:text-rose-400 transition-colors" aria-label="Like project">
                    <Heart size={16} />
                  </button>
                  <button className="p-1.5 bg-obsidian-800/90 rounded-full text-gray-300 hover:text-amber-400 transition-colors" aria-label="Save project">
                    <Bookmark size={16} />
                  </button>
                  <button className="p-1.5 bg-obsidian-800/90 rounded-full text-gray-300 hover:text-blue-400 transition-colors" aria-label="Share project">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>
                
                {/* Technology tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="text-xs bg-obsidian-900 text-gray-300 px-2 py-1 rounded-md border border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Footer with stats and links */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center text-rose-400">
                      <Heart size={14} className="mr-1" />
                      <span className="text-xs text-gray-400">{project.likes}</span>
                    </div>
                    <div className="flex items-center text-blue-400">
                      <MessageCircle size={14} className="mr-1" />
                      <span className="text-xs text-gray-400">{project.comments}</span>
                    </div>
                    <div className="flex items-center text-green-400">
                      <Eye size={14} className="mr-1" />
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
                      <ExternalLink size={14} />
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-1.5 text-gray-400 hover:text-amber-400 transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Load more button */}
        {visibleProjects < projectsData.length && (
          <div className="flex justify-center mt-12">
            <button 
              onClick={loadMoreProjects}
              className="px-8 py-3 bg-obsidian-800 text-white font-semibold rounded-lg border border-gray-700 hover:bg-obsidian-700 hover:border-amber-700/30 transition-all shadow-sm"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShowcaseGallery;
