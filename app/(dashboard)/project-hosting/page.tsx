'use client';

import React, { useState } from 'react';
import SubdomainProjectCard from '@/components/hosting/SubdomainProjectCard';
import CreateProjectForm from '@/components/hosting/CreateProjectForm';
import { PlusCircle, Globe, Server, Database, HardDrive, Search, Filter, AlertTriangle } from 'lucide-react';

// Sample projects data
const sampleProjects = [
  {
    id: 'proj-1',
    name: 'Personal Portfolio Website',
    subdomain: 'rahul-portfolio',
    status: 'published' as const,
    lastDeployed: '2 days ago',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    description: 'My professional portfolio showcasing projects and skills.',
    visits: 145,
  },
  {
    id: 'proj-2',
    name: 'Task Management App',
    subdomain: 'task-tracker',
    status: 'published' as const,
    lastDeployed: '1 week ago',
    technologies: ['Vue.js', 'Firebase', 'Vuetify'],
    description: 'A Kanban-style task manager with real-time updates.',
    visits: 78,
    custom_domain: 'tasks.rahulsharma.com',
  },
  {
    id: 'proj-3',
    name: 'E-Commerce Dashboard',
    subdomain: 'sales-analytics',
    status: 'draft' as const,
    technologies: ['React', 'Chart.js', 'Material UI'],
    description: 'Sales analytics dashboard for my online store.',
  },
  {
    id: 'proj-4',
    name: 'Weather App',
    subdomain: 'weather-now',
    status: 'updating' as const,
    lastDeployed: '1 month ago',
    technologies: ['JavaScript', 'OpenWeather API', 'CSS'],
    visits: 210,
  },
];

export default function ProjectHostingPage() {
  const [projects, setProjects] = useState(sampleProjects);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showCreateForm, setShowCreateForm] = useState(false);

  const filteredProjects = projects.filter(project => {
    // Apply search filter
    const matchesSearch = search === '' || 
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.subdomain.toLowerCase().includes(search.toLowerCase()) ||
      (project.description && project.description.toLowerCase().includes(search.toLowerCase()));
    
    // Apply status filter
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
            Subdomain Project Hosting
          </h1>
          <p className="text-gray-400 mt-2">
            Host and deploy your web projects with custom subdomains
          </p>
        </div>
        
        <button
          onClick={() => setShowCreateForm(true)}
          className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition"
        >
          <PlusCircle className="mr-2 h-5 w-5" />
          Create New Project
        </button>
      </div>
      
      {/* Usage statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-obsidian-800 rounded-xl p-4 border border-gray-800">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium text-white">Projects</h3>
            <Globe className="h-5 w-5 text-purple-400" />
          </div>
          <p className="text-3xl font-bold text-white">{projects.length}</p>
          <p className="text-gray-400 text-sm mt-1">Total hosted projects</p>
        </div>
        
        <div className="bg-obsidian-800 rounded-xl p-4 border border-gray-800">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium text-white">Published</h3>
            <Server className="h-5 w-5 text-green-400" />
          </div>
          <p className="text-3xl font-bold text-white">{projects.filter(p => p.status === 'published').length}</p>
          <p className="text-gray-400 text-sm mt-1">Live and accessible</p>
        </div>
        
        <div className="bg-obsidian-800 rounded-xl p-4 border border-gray-800">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium text-white">Storage</h3>
            <Database className="h-5 w-5 text-amber-400" />
          </div>
          <p className="text-3xl font-bold text-white">213 MB</p>
          <p className="text-gray-400 text-sm mt-1">Of 1 GB used</p>
        </div>
        
        <div className="bg-obsidian-800 rounded-xl p-4 border border-gray-800">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium text-white">Bandwidth</h3>
            <HardDrive className="h-5 w-5 text-purple-400" />
          </div>
          <p className="text-3xl font-bold text-white">1.4 GB</p>
          <p className="text-gray-400 text-sm mt-1">Of 10 GB monthly limit</p>
        </div>
      </div>
      
      {/* Search and filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-obsidian-800 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        
        <div className="sm:w-48">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-4 py-2.5 bg-obsidian-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 appearance-none"
            style={{ 
              backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22292.4%22 height=%22292.4%22%3E%3Cpath fill=%22%236B7280%22 d=%22M287 69.4a17.6 17.6 0 0 0-13-5.4H18.4c-5 0-9.3 1.8-12.9 5.4A17.6 17.6 0 0 0 0 82.2c0 5 1.8 9.3 5.4 12.9l128 127.9c3.6 3.6 7.8 5.4 12.8 5.4s9.2-1.8 12.8-5.4L287 95c3.5-3.5 5.4-7.8 5.4-12.8 0-5-1.9-9.2-5.5-12.8z%22/%3E%3C/svg%3E")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              backgroundSize: '12px',
              paddingRight: '2.5rem'
            }}
          >
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="updating">Updating</option>
          </select>
        </div>
        
        <button className="flex items-center px-4 py-2.5 bg-obsidian-800 border border-gray-700 rounded-lg text-gray-300 hover:bg-obsidian-700">
          <Filter className="mr-2 h-5 w-5" />
          More Filters
        </button>
      </div>
      
      {/* Project cards grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredProjects.map((project) => (
            <SubdomainProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="bg-obsidian-800 border border-gray-700 rounded-xl p-8 text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-amber-900/30 rounded-full">
              <AlertTriangle className="h-8 w-8 text-amber-500" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
          <p className="text-gray-400 mb-6">
            {search || statusFilter !== 'all' 
              ? "No projects match your current filters. Try adjusting your search or filters."
              : "You haven't created any projects yet. Click the button below to get started."}
          </p>
          {search || statusFilter !== 'all' ? (
            <button
              onClick={() => {
                setSearch('');
                setStatusFilter('all');
              }}
              className="px-4 py-2 bg-obsidian-700 hover:bg-obsidian-600 text-gray-300 rounded-lg transition inline-flex items-center"
            >
              Clear Filters
            </button>
          ) : (
            <button
              onClick={() => setShowCreateForm(true)}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition inline-flex items-center"
            >
              <PlusCircle className="mr-2 h-5 w-5" />
              Create Your First Project
            </button>
          )}
        </div>
      )}
      
      {/* Hosting information section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">About Subdomain Project Hosting</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-obsidian-800 rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-3">Features</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span className="text-gray-300">Free subdomain for every project</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span className="text-gray-300">Automatic deployments from GitHub</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span className="text-gray-300">SSL certificates included</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span className="text-gray-300">Custom domain support</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span className="text-gray-300">Analytics and visitor tracking</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-obsidian-800 rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-3">Limitations</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-gray-300">1 GB storage per project</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-gray-300">10 GB monthly bandwidth</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-gray-300">Static sites and limited serverless functions</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-gray-300">Max 10 custom domains</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-gray-300">Daily build limit: 25 deployments</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-obsidian-800 rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-3">Supported Technologies</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span className="text-gray-300">React, Next.js, Vue, Angular</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span className="text-gray-300">HTML, CSS, JavaScript</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span className="text-gray-300">Static site generators</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span className="text-gray-300">Node.js (limited)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span className="text-gray-300">Serverless functions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Create project form (modal) */}
      {showCreateForm && <CreateProjectForm onClose={() => setShowCreateForm(false)} />}
    </div>
  );
}
