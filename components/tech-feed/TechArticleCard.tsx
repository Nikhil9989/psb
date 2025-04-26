'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, Bookmark, Share2, ExternalLink, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

interface TechArticleCardProps {
  article: {
    id: string;
    title: string;
    summary: string;
    imageUrl: string;
    sourceUrl: string;
    sourceName: string;
    sourceLogo: string;
    publishDate: string;
    readTime: number;
    categories: string[];
    bookmarked?: boolean;
    relevanceScore?: number;
  };
}

const TechArticleCard: React.FC<TechArticleCardProps> = ({ article }) => {
  const [isBookmarked, setIsBookmarked] = useState(article.bookmarked || false);
  
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // In a real app, you would update this on the server
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-obsidian-800 rounded-xl overflow-hidden shadow-lg border border-gray-800 h-full flex flex-col"
    >
      {/* Article Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image 
          src={article.imageUrl} 
          alt={article.title}
          fill
          className="object-cover"
        />
        
        {article.relevanceScore && (
          <div className="absolute top-3 right-3 bg-purple-600/90 text-white text-xs font-medium px-2 py-1 rounded">
            {article.relevanceScore}% Relevant
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <div className="relative w-5 h-5 overflow-hidden rounded-full border border-gray-700">
            <Image 
              src={article.sourceLogo}
              alt={article.sourceName}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-gray-400 text-sm">{article.sourceName}</span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{article.title}</h3>
        <p className="text-gray-400 mb-4 text-sm line-clamp-3 flex-grow">{article.summary}</p>
        
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.categories.map((category, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs font-medium rounded-md bg-purple-900/30 text-purple-400"
            >
              {category}
            </span>
          ))}
        </div>
        
        {/* Metadata */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{article.publishDate}</span>
          </div>
          <div>
            <span>{article.readTime} min read</span>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex justify-between items-center pt-3 border-t border-gray-800">
          <div className="flex gap-3">
            <button 
              onClick={handleBookmark}
              className={`text-gray-400 hover:text-amber-400 transition-colors ${
                isBookmarked ? 'text-amber-400' : ''
              }`}
            >
              <Bookmark size={18} className={isBookmarked ? 'fill-amber-400' : ''} />
            </button>
            <button className="text-gray-400 hover:text-purple-400 transition-colors">
              <Share2 size={18} />
            </button>
            <button className="text-gray-400 hover:text-purple-400 transition-colors">
              <MessageSquare size={18} />
            </button>
          </div>
          
          <a 
            href={article.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
          >
            Read Article
            <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default TechArticleCard;
