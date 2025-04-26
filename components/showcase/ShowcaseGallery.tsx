import React from 'react';
import { Eye, Heart, MessageSquare, Award, Star, ExternalLink } from 'lucide-react';

interface ShowcaseGalleryProps {
  featured?: boolean;
  limit?: number;
}

const ShowcaseGallery: React.FC<ShowcaseGalleryProps> = ({ featured = false, limit = 6 }) => {
  // Filter projects based on featured flag and limit
  const displayProjects = featured 
    ? projects.filter(project => project.featured).slice(0, limit)
    : projects.slice(0, limit);

  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">{featured ? 'Featured Projects' : 'Latest Projects'}</h2>
          <div className="flex gap-2">
            <button className="bg-gray-800 hover:bg-gray-700 text-gray-200 px-4 py-2 rounded-md transition border border-gray-700">
              All Categories
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md transition">
              View All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-indigo-500/30 transition shadow-lg hover:shadow-indigo-500/10">
              <div className="relative h-48 bg-gray-900">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {project.featured && (
                  <div className="absolute top-2 left-2 bg-yellow-500/20 px-2 py-1 rounded text-xs text-yellow-500 flex items-center">
                    <Star className="h-3 w-3 mr-1" fill="currentColor" />
                    Featured
                  </div>
                )}
                <div className="absolute top-2 right-2 bg-gray-900/70 px-2 py-1 rounded text-xs text-white">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={project.authorAvatar} 
                    alt={project.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    <p className="text-gray-400 text-sm">by {project.author}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <div className="flex items-center text-gray-400">
                      <Eye className="h-4 w-4 mr-1" />
                      <span className="text-sm">{project.views}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Heart className="h-4 w-4 mr-1" />
                      <span className="text-sm">{project.likes}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      <span className="text-sm">{project.comments}</span>
                    </div>
                  </div>
                  <a href="#" className="flex items-center text-indigo-400 hover:text-indigo-300 text-sm">
                    View 
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        {featured && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">What Industry Leaders Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-500/20 p-2 rounded-full mr-4">
                      <Award className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.title}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.companyLogo} 
                      alt={testimonial.company}
                      className="h-8 w-auto mr-2"
                    />
                    <span className="text-gray-400 text-sm">{testimonial.company}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A complete admin dashboard for e-commerce platforms with inventory management, order tracking, and customer analytics built with React, Node.js, and MongoDB.",
    image: "/api/placeholder/500/300",
    category: "Full Stack",
    author: "Ananya Singh",
    authorAvatar: "/api/placeholder/50/50",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    views: 845,
    likes: 76,
    comments: 12,
    featured: true
  },
  {
    id: 2,
    title: "AI-Powered Content Generator",
    description: "A machine learning application that generates blog posts, product descriptions, and social media content using OpenAI's GPT models with a user-friendly interface.",
    image: "/api/placeholder/500/300",
    category: "AI/ML",
    author: "Rohan Kumar",
    authorAvatar: "/api/placeholder/50/50",
    technologies: ["Python", "React", "FastAPI", "TensorFlow", "OpenAI"],
    views: 1203,
    likes: 98,
    comments: 23,
    featured: true
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description: "A modern chat platform with real-time messaging, file sharing, and user presence indicators, built with Socket.io and React.",
    image: "/api/placeholder/500/300",
    category: "Web Development",
    author: "Divya Patel",
    authorAvatar: "/api/placeholder/50/50",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Firebase"],
    views: 756,
    likes: 64,
    comments: 18,
    featured: false
  },
  {
    id: 4,
    title: "Cryptocurrency Tracker",
    description: "A real-time dashboard for tracking cryptocurrency prices, market capitalization, and trading volume with interactive charts and alerts.",
    image: "/api/placeholder/500/300",
    category: "FinTech",
    author: "Vikram Sharma",
    authorAvatar: "/api/placeholder/50/50",
    technologies: ["React", "Redux", "CoinGecko API", "D3.js", "TailwindCSS"],
    views: 932,
    likes: 81,
    comments: 14,
    featured: true
  },
  {
    id: 5,
    title: "Task Management System",
    description: "A collaborative project management tool with task assignments, progress tracking, and team collaboration features.",
    image: "/api/placeholder/500/300",
    category: "Productivity",
    author: "Neha Gupta",
    authorAvatar: "/api/placeholder/50/50",
    technologies: ["Vue.js", "Express", "PostgreSQL", "GraphQL"],
    views: 689,
    likes: 53,
    comments: 9,
    featured: false
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description: "An integrated dashboard for managing multiple social media accounts with analytics, scheduled posting, and engagement tracking.",
    image: "/api/placeholder/500/300",
    category: "Marketing",
    author: "Arjun Mehta",
    authorAvatar: "/api/placeholder/50/50",
    technologies: ["React", "Node.js", "Social Media APIs", "Chart.js"],
    views: 542,
    likes: 47,
    comments: 11,
    featured: false
  },
  {
    id: 7,
    title: "Healthcare Appointment System",
    description: "A comprehensive platform for managing patient appointments, medical records, and doctor schedules with telemedicine capabilities.",
    image: "/api/placeholder/500/300",
    category: "Healthcare",
    author: "Priya Malhotra",
    authorAvatar: "/api/placeholder/50/50",
    technologies: ["Angular", ".NET Core", "SQL Server", "Azure"],
    views: 621,
    likes: 58,
    comments: 16,
    featured: true
  },
  {
    id: 8,
    title: "Weather Forecast Application",
    description: "A beautiful weather app with location detection, 7-day forecasts, and severe weather alerts using multiple weather APIs.",
    image: "/api/placeholder/500/300",
    category: "Mobile App",
    author: "Karan Singh",
    authorAvatar: "/api/placeholder/50/50",
    technologies: ["React Native", "Weather API", "Geolocation", "Redux"],
    views: 475,
    likes: 42,
    comments: 7,
    featured: false
  },
  {
    id: 9,
    title: "Personal Finance Tracker",
    description: "A budget management application that helps users track expenses, set savings goals, and visualize spending patterns.",
    image: "/api/placeholder/500/300",
    category: "FinTech",
    author: "Sanjay Verma",
    authorAvatar: "/api/placeholder/50/50",
    technologies: ["React", "Firebase", "D3.js", "Plaid API"],
    views: 563,
    likes: 49,
    comments: 13,
    featured: false
  }
];

const testimonials = [
  {
    name: "Vishal Gupta",
    title: "CTO",
    company: "TechInnovate Solutions",
    companyLogo: "/api/placeholder/100/50",
    quote: "The quality of projects coming from SKILL BRIDGE students is exceptional. We've hired three graduates directly from the showcase and they've become valuable team members."
  },
  {
    name: "Anita Desai",
    title: "VP of Engineering",
    company: "GlobalSoft India",
    companyLogo: "/api/placeholder/100/50",
    quote: "What sets SKILL BRIDGE projects apart is the focus on real-world applications. These students aren't just learning theory - they're building practical solutions to actual problems."
  }
];

export default ShowcaseGallery;
