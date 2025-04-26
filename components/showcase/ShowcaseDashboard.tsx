import React from 'react';
import { Eye, Heart, MessageSquare, Upload, ThumbsUp, Star, PlusCircle, Filter } from 'lucide-react';

const ShowcaseDashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Student Showcase</h1>
        <div className="flex space-x-2">
          <button className="flex items-center bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md transition">
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Project
          </button>
          <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Projects</p>
              <h3 className="text-2xl font-bold">12</h3>
            </div>
            <div className="bg-indigo-500/20 p-2 rounded-full">
              <Upload className="h-5 w-5 text-indigo-500" />
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Views</p>
              <h3 className="text-2xl font-bold">2,845</h3>
            </div>
            <div className="bg-blue-500/20 p-2 rounded-full">
              <Eye className="h-5 w-5 text-blue-500" />
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Likes</p>
              <h3 className="text-2xl font-bold">186</h3>
            </div>
            <div className="bg-red-500/20 p-2 rounded-full">
              <Heart className="h-5 w-5 text-red-500" />
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Comments</p>
              <h3 className="text-2xl font-bold">42</h3>
            </div>
            <div className="bg-emerald-500/20 p-2 rounded-full">
              <MessageSquare className="h-5 w-5 text-emerald-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Project */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center">
                <div className="bg-yellow-500/20 px-2 py-1 rounded text-xs text-yellow-500 mr-2">
                  Featured
                </div>
                <h2 className="text-xl font-semibold">E-Commerce Dashboard</h2>
              </div>
              <p className="text-gray-400 mt-2">
                A complete admin dashboard for e-commerce platforms with inventory management, order tracking, and customer analytics.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg px-3 py-1 text-xs text-gray-400 flex items-center">
              <Star className="h-3 w-3 text-yellow-500 mr-1" fill="currentColor" />
              Featured by Mentors
            </div>
          </div>
          
          <div className="mt-6 bg-gray-900 rounded-lg overflow-hidden">
            <img 
              src="/api/placeholder/800/400" 
              alt="E-Commerce Dashboard" 
              className="w-full h-[300px] object-cover object-top"
            />
          </div>
          
          <div className="mt-4 flex justify-between items-center">
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-400">
                <Eye className="h-4 w-4 mr-1" />
                <span className="text-sm">845 views</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Heart className="h-4 w-4 mr-1" />
                <span className="text-sm">76 likes</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MessageSquare className="h-4 w-4 mr-1" />
                <span className="text-sm">12 comments</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm transition">
                Edit
              </button>
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1 rounded text-sm transition">
                View Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Your Projects */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Your Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
              <div className="h-48 bg-gray-900 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {project.featured && (
                  <div className="absolute top-2 left-2 bg-yellow-500/20 px-2 py-1 rounded text-xs text-yellow-500">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-gray-400 text-sm mt-1 line-clamp-2">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs bg-gray-700 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <div className="flex items-center text-gray-400">
                      <Eye className="h-3 w-3 mr-1" />
                      <span className="text-xs">{project.views}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Heart className="h-3 w-3 mr-1" />
                      <span className="text-xs">{project.likes}</span>
                    </div>
                  </div>
                  <div>
                    <button className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-white transition">
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Feedback */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Recent Feedback</h2>
        <div className="space-y-4">
          {feedback.map((item) => (
            <div key={item.id} className="border-b border-gray-700 pb-4 last:border-0 last:pb-0">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full" />
                  <div className="ml-3">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-gray-400 text-sm">{item.project}</div>
                  </div>
                </div>
                <div className="text-gray-400 text-sm">{item.time}</div>
              </div>
              <div className="mt-2 text-gray-300">
                {item.comment}
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <button className="flex items-center text-gray-400 hover:text-white">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  <span className="text-xs">Thank</span>
                </button>
                <button className="flex items-center text-gray-400 hover:text-white">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  <span className="text-xs">Reply</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "A responsive portfolio website built with React, Next.js, and Tailwind CSS",
    image: "/api/placeholder/400/200",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    views: 324,
    likes: 18,
    featured: false
  },
  {
    id: 2,
    title: "Weather App",
    description: "Real-time weather application with location detection and 5-day forecast",
    image: "/api/placeholder/400/200",
    technologies: ["JavaScript", "Weather API", "CSS"],
    views: 156,
    likes: 12,
    featured: false
  },
  {
    id: 3,
    title: "Task Manager",
    description: "A full-stack task management application with user authentication",
    image: "/api/placeholder/400/200",
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    views: 201,
    likes: 27,
    featured: true
  },
  {
    id: 4,
    title: "Recipe Finder",
    description: "Search and save your favorite recipes with filtering options",
    image: "/api/placeholder/400/200",
    technologies: ["React", "Firebase", "CSS"],
    views: 178,
    likes: 14,
    featured: false
  },
  {
    id: 5,
    title: "Chat Application",
    description: "Real-time chat app with user presence and multimedia sharing",
    image: "/api/placeholder/400/200",
    technologies: ["Socket.io", "Node.js", "Express", "React"],
    views: 289,
    likes: 32,
    featured: false
  }
];

const feedback = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "/api/placeholder/40/40",
    project: "E-Commerce Dashboard",
    comment: "Great work on implementing the dashboard UI. The data visualization components are particularly impressive. Consider adding filtering by date range for the analytics section.",
    time: "2 days ago"
  },
  {
    id: 2,
    name: "Sarah Chen",
    avatar: "/api/placeholder/40/40",
    project: "Task Manager",
    comment: "I love the clean design of your task manager. The drag-and-drop functionality is intuitive. One suggestion would be to add keyboard shortcuts for power users.",
    time: "5 days ago"
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    avatar: "/api/placeholder/40/40",
    project: "Weather App",
    comment: "Nice implementation of the weather API. The location detection works flawlessly. Consider adding a dark mode option for better visibility at night.",
    time: "1 week ago"
  }
];

export default ShowcaseDashboard;
