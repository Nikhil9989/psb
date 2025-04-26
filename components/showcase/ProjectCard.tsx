'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, MessageSquare, Share2, Bookmark, ExternalLink, ThumbsUp, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    student: {
      name: string;
      avatarUrl: string;
      cohort: string;
    };
    stats: {
      likes: number;
      comments: number;
      views: number;
    };
    demoUrl?: string;
    repoUrl?: string;
    featured?: boolean;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(project.stats.likes);
  
  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };
  
  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`bg-obsidian-800 rounded-xl overflow-hidden shadow-lg border ${
        project.featured 
          ? 'border-amber-500/50' 
          : 'border-gray-800'
      }`}
    >
      {project.featured && (
        <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-xs font-medium text-obsidian-900 px-3 py-1 text-center">
          Featured Project
        </div>
      )}
      
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden group">
        <Image 
          src={project.imageUrl} 
          alt={project.title}
          fill
          className="object-cover transition-transform group-hover:scale-105 duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/90 to-transparent flex items-end p-4">
          <div className="flex w-full justify-between items-center">
            <div className="flex gap-2">
              <button 
                onClick={() => {}}
                className="p-1.5 rounded-full bg-obsidian-800/80 hover:bg-purple-600/80 text-white transition-colors"
              >
                <Share2 size={16} />
              </button>
              {project.demoUrl && (
                <a 
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-obsidian-800/80 hover:bg-purple-600/80 text-white transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex items-center text-white text-xs">
                <Eye size={14} className="mr-1" />
                <span>{project.stats.views}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs font-medium rounded-md bg-purple-900/30 text-purple-400"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
        
        {/* Student info */}
        <div className="flex items-center mb-4">
          <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
            <Image 
              src={project.student.avatarUrl} 
              alt={project.student.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-white font-medium text-sm">{project.student.name}</p>
            <p className="text-gray-500 text-xs">{project.student.cohort}</p>
          </div>
        </div>
        
        {/* Interaction footer */}
        <div className="flex justify-between items-center border-t border-gray-800 pt-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={handleLike}
              className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Heart 
                size={18} 
                className={`mr-1.5 ${isLiked ? 'fill-purple-500 text-purple-500' : ''}`} 
              />
              <span className="text-sm">{likeCount}</span>
            </button>
            <button 
              onClick={() => {}}
              className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
            >
              <MessageSquare size={18} className="mr-1.5" />
              <span className="text-sm">{project.stats.comments}</span>
            </button>
          </div>
          <button 
            onClick={handleSave}
            className={`text-gray-400 hover:text-amber-400 transition-colors ${
              isSaved ? 'text-amber-400' : ''
            }`}
          >
            <Bookmark size={18} className={isSaved ? 'fill-amber-400' : ''} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
