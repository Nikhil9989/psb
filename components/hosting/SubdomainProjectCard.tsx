'use client';

import React, { useState } from 'react';
import { Globe, Code, Activity, Clock, MoreVertical, Play, Edit, Trash2, Key, Eye, BarChart2, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface SubdomainProjectCardProps {
  project: {
    id: string;
    name: string;
    subdomain: string;
    status: 'published' | 'draft' | 'updating';
    lastDeployed?: string;
    technologies: string[];
    description?: string;
    visits?: number;
    custom_domain?: string;
  };
}

const SubdomainProjectCard: React.FC<SubdomainProjectCardProps> = ({ project }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  
  const statusColors = {
    published: 'text-green-400 bg-green-900/30',
    draft: 'text-amber-400 bg-amber-900/30',
    updating: 'text-blue-400 bg-blue-900/30'
  };
  
  const statusLabels = {
    published: 'Published',
    draft: 'Draft',
    updating: 'Updating'
  };
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  
  const getFullUrl = () => {
    if (project.custom_domain) {
      return `https://${project.custom_domain}`;
    }
    return `https://${project.subdomain}.skillbridge.in`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-obsidian-800 rounded-xl overflow-hidden shadow-lg border border-gray-800"
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium mb-2 ${statusColors[project.status]}`}>
              <span className="relative flex h-2 w-2 mr-1.5">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${project.status === 'published' ? 'bg-green-400' : project.status === 'draft' ? 'bg-amber-400' : 'bg-blue-400'} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${project.status === 'published' ? 'bg-green-500' : project.status === 'draft' ? 'bg-amber-500' : 'bg-blue-500'}`}></span>
              </span>
              {statusLabels[project.status]}
            </div>
            
            <h3 className="text-xl font-bold text-white">{project.name}</h3>
            
            <div className="flex items-center mt-1 text-sm text-gray-400">
              <Globe size={14} className="mr-1 text-purple-400" />
              <span>{getFullUrl()}</span>
            </div>
          </div>
          
          <div className="relative">
            <button 
              onClick={toggleDropdown}
              className="p-1.5 rounded-full hover:bg-obsidian-700 text-gray-400 hover:text-white transition-colors"
            >
              <MoreVertical size={18} />
            </button>
            
            {showDropdown && (
              <div className="absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-obsidian-900 border border-gray-800 z-10">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  {project.status === 'published' && (
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-obsidian-800 flex items-center">
                      <Eye size={14} className="mr-2" />
                      View Live Site
                    </button>
                  )}
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-obsidian-800 flex items-center">
                    <Edit size={14} className="mr-2" />
                    Edit Project
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-obsidian-800 flex items-center">
                    <BarChart2 size={14} className="mr-2" />
                    View Analytics
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-obsidian-800 flex items-center">
                    <Key size={14} className="mr-2" />
                    Manage Domain
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-obsidian-800 flex items-center">
                    <Code size={14} className="mr-2" />
                    View Source Code
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-obsidian-800 flex items-center">
                    <Trash2 size={14} className="mr-2" />
                    Delete Project
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {project.description && (
          <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs font-medium rounded-md bg-purple-900/30 text-purple-400"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <div className="flex items-center text-gray-500 text-sm">
            {project.lastDeployed && (
              <div className="flex items-center mr-4">
                <Clock size={14} className="mr-1.5" />
                <span>Deployed {project.lastDeployed}</span>
              </div>
            )}
            {project.visits !== undefined && (
              <div className="flex items-center">
                <Activity size={14} className="mr-1.5" />
                <span>{project.visits} visits</span>
              </div>
            )}
          </div>
          
          <div className="flex gap-2">
            {project.status === 'published' ? (
              <a 
                href={getFullUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm transition-colors"
              >
                <ExternalLink size={14} className="mr-1.5" />
                Visit Site
              </a>
            ) : (
              <button className="flex items-center px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-sm transition-colors">
                <Play size={14} className="mr-1.5" />
                {project.status === 'draft' ? 'Publish Site' : 'Deploying...'}
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SubdomainProjectCard;
