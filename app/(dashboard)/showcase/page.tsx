'use client';

import React, { useState, useEffect } from 'react';
import ProjectCard from '@/components/showcase/ProjectCard';
import ShowcaseFilters from '@/components/showcase/ShowcaseFilters';
import { Trophy, Lightbulb, Sparkles } from 'lucide-react';

// Sample data for the showcase
const sampleProjects = [
  {
    id: 'proj-1',
    title: 'E-Commerce Platform with React and Node.js',
    description: 'A full-stack e-commerce application with payment integration, admin dashboard, and responsive design.',
    imageUrl: 'https://placehold.co/600x400/313438/CCCCCC?text=E-Commerce+Platform',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Full Stack'],
    student: {
      name: 'Rahul Sharma',
      avatarUrl: 'https://placehold.co/100/6B46C1/FFFFFF?text=RS',
      cohort: 'Web Dev Cohort 2024'
    },
    stats: {
      likes: 28,
      comments: 12,
      views: 346
    },
    demoUrl: '#',
    repoUrl: '#',
    featured: true
  },
  {
    id: 'proj-2',
    title: 'Weather Forecast Dashboard',
    description: 'A weather application that shows current conditions and 5-day forecast using public APIs with geolocation.',
    imageUrl: 'https://placehold.co/600x400/313438/CCCCCC?text=Weather+Dashboard',
    tags: ['JavaScript', 'APIs', 'CSS', 'Frontend'],
    student: {
      name: 'Priya Patel',
      avatarUrl: 'https://placehold.co/100/6B46C1/FFFFFF?text=PP',
      cohort: 'Web Dev Cohort 2024'
    },
    stats: {
      likes: 15,
      comments: 5,
      views: 173
    },
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 'proj-3',
    title: 'Task Management Application',
    description: 'A Kanban-style task manager with drag-and-drop functionality, user authentication, and real-time updates.',
    imageUrl: 'https://placehold.co/600x400/313438/CCCCCC?text=Task+Manager',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Full Stack'],
    student: {
      name: 'Aditya Verma',
      avatarUrl: 'https://placehold.co/100/6B46C1/FFFFFF?text=AV',
      cohort: 'Web Dev Cohort 2023'
    },
    stats: {
      likes: 32,
      comments: 8,
      views: 257
    },
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 'proj-4',
    title: 'Personal Finance Tracker',
    description: 'An application to track personal expenses, income, and investments with visualization and budget planning.',
    imageUrl: 'https://placehold.co/600x400/313438/CCCCCC?text=Finance+Tracker',
    tags: ['Vue.js', 'Node.js', 'Chart.js', 'PostgreSQL'],
    student: {
      name: 'Neha Singh',
      avatarUrl: 'https://placehold.co/100/6B46C1/FFFFFF?text=NS',
      cohort: 'Full Stack Cohort 2024'
    },
    stats: {
      likes: 19,
      comments: 7,
      views: 198
    },
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 'proj-5',
    title: 'Machine Learning Image Classifier',
    description: 'A web application that uses TensorFlow.js to classify images in real-time through the browser.',
    imageUrl: 'https://placehold.co/600x400/313438/CCCCCC?text=ML+Image+Classifier',
    tags: ['TensorFlow.js', 'Machine Learning', 'JavaScript', 'AI'],
    student: {
      name: 'Vikram Reddy',
      avatarUrl: 'https://placehold.co/100/6B46C1/FFFFFF?text=VR',
      cohort: 'AI/ML Cohort 2024'
    },
    stats: {
      likes: 45,
      comments: 14,
      views: 378
    },
    demoUrl: '#',
    repoUrl: '#',
    featured: true
  },
  {
    id: 'proj-6',
    title: 'Social Media Dashboard',
    description: 'A dashboard to track and analyze social media metrics across multiple platforms with content scheduling.',
    imageUrl: 'https://placehold.co/600x400/313438/CCCCCC?text=Social+Media+Dashboard',
    tags: ['React', 'Redux', 'API Integration', 'Analytics'],
    student: {
      name: 'Arjun Kumar',
      avatarUrl: 'https://placehold.co/100/6B46C1/FFFFFF?text=AK',
      cohort: 'Web Dev Cohort 2023'
    },
    stats: {
      likes: 22,
      comments: 6,
      views: 215
    },
    demoUrl: '#',
    repoUrl: '#'
  }
];

// Extract all available tags and cohorts from projects
const allTags = Array.from(new Set(sampleProjects.flatMap(project => project.tags)));
const allCohorts = Array.from(new Set(sampleProjects.map(project => project.student.cohort)));

export default function ShowcasePage() {
  const [projects, setProjects] = useState(sampleProjects);
  const [filters, setFilters] = useState({
    search: '',
    tags: [] as string[],
    sortBy: 'recent',
    cohort: undefined as string | undefined,
    featured: false
  });
  
  // Apply filters to projects
  useEffect(() => {
    let filteredProjects = [...sampleProjects];
    
    // Filter by search
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filteredProjects = filteredProjects.filter(project => 
        project.title.toLowerCase().includes(searchLower) || 
        project.description.toLowerCase().includes(searchLower) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }
    
    // Filter by tags
    if (filters.tags.length > 0) {
      filteredProjects = filteredProjects.filter(project => 
        filters.tags.some(tag => project.tags.includes(tag))
      );
    }
    
    // Filter by cohort
    if (filters.cohort) {
      filteredProjects = filteredProjects.filter(project => 
        project.student.cohort === filters.cohort
      );
    }
    
    // Filter featured
    if (filters.featured) {
      filteredProjects = filteredProjects.filter(project => project.featured);
    }
    
    // Sort projects
    switch (filters.sortBy) {
      case 'popular':
        filteredProjects.sort((a, b) => b.stats.likes - a.stats.likes);
        break;
      case 'trending':
        filteredProjects.sort((a, b) => b.stats.views - a.stats.views);
        break;
      case 'comments':
        filteredProjects.sort((a, b) => b.stats.comments - a.stats.comments);
        break;
      case 'recent':
      default:
        // Assuming they're already sorted by recency in the original array
        break;
    }
    
    setProjects(filteredProjects);
  }, [filters]);
  
  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
            Student Showcase Wall
          </h1>
          <p className="text-gray-400 mt-2">
            Discover and celebrate outstanding projects created by SKILL BRIDGE students
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <a 
            href="#submit-project"
            className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Submit Your Project
          </a>
        </div>
      </div>
      
      {/* Featured project section */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <Trophy className="text-amber-500 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProjects
            .filter(project => project.featured)
            .map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
      
      {/* Filters */}
      <ShowcaseFilters 
        onFilterChange={handleFilterChange}
        availableTags={allTags}
        availableCohorts={allCohorts}
      />
      
      {/* All projects */}
      <div className="mb-8">
        <div className="flex items-center mb-6">
          <Lightbulb className="text-purple-500 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-bold text-white">
            {filters.search || filters.tags.length > 0 || filters.cohort || filters.featured
              ? 'Filtered Projects'
              : 'All Projects'}
          </h2>
          <span className="ml-3 text-gray-400 text-sm">({projects.length} projects)</span>
        </div>
        
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-obsidian-800 rounded-xl border border-gray-800">
            <p className="text-gray-400 text-lg mb-3">No projects match your filters</p>
            <button
              onClick={() => setFilters({
                search: '',
                tags: [],
                sortBy: 'recent',
                cohort: undefined,
                featured: false
              })}
              className="text-purple-400 hover:text-purple-300 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
      
      {/* Submit project section */}
      <div id="submit-project" className="bg-gradient-to-br from-purple-900/30 to-amber-900/30 rounded-xl p-8 border border-purple-500/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Share Your Project with the Community</h2>
          <p className="text-gray-300 mb-6">
            Showcase your work, get feedback from peers and mentors, and build your professional portfolio.
          </p>
          <a
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition text-lg font-medium"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Submit a Project
          </a>
        </div>
      </div>
    </div>
  );
}
