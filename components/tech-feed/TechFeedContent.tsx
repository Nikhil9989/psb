'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Bookmark, Share2, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';

// Sample tech news data
const techNews = [
  {
    id: 'news1',
    title: 'The Future of Web Development: What to Expect in 2026',
    excerpt: 'As we approach 2026, web development continues to evolve with new frameworks, tools, and methodologies reshaping how we build for the web.',
    category: 'Web Development',
    image: '/tech-feed/web-dev-future.jpg',
    author: 'Pankaj Sharma',
    authorRole: 'Senior Web Architect',
    authorImage: '/mentors/pankaj.jpg',
    date: 'April 24, 2025',
    readTime: '8 min read',
    relevanceScore: 98,
    isSaved: false,
    hasLiked: false,
    tags: ['JavaScript', 'WebAssembly', 'React', 'Next.js']
  },
  {
    id: 'news2',
    title: 'AI-Powered Development Tools Transforming Coding Practices',
    excerpt: 'New AI assistants are changing how developers write code, with advanced autocomplete features and bug detection mechanisms increasing productivity.',
    category: 'Artificial Intelligence',
    image: '/tech-feed/ai-coding.jpg',
    author: 'Meera Patel',
    authorRole: 'AI Research Lead',
    authorImage: '/mentors/meera.jpg',
    date: 'April 23, 2025',
    readTime: '6 min read',
    relevanceScore: 95,
    isSaved: true,
    hasLiked: true,
    tags: ['AI', 'Machine Learning', 'Developer Tools', 'Productivity']
  },
  {
    id: 'news3',
    title: 'Cloud-Native Development Practices for Modern Applications',
    excerpt: 'Cloud-native development has become the standard for building scalable, resilient applications. Learn about the best practices and tools.',
    category: 'Cloud Computing',
    image: '/tech-feed/cloud-native.jpg',
    author: 'Arjun Reddy',
    authorRole: 'Cloud Architect',
    authorImage: '/mentors/arjun.jpg',
    date: 'April 22, 2025',
    readTime: '10 min read',
    relevanceScore: 90,
    isSaved: false,
    hasLiked: false,
    tags: ['Kubernetes', 'Docker', 'Microservices', 'AWS']
  },
  {
    id: 'news4',
    title: 'Database Technologies Comparison: SQL vs NoSQL in 2025',
    excerpt: 'The database landscape continues to evolve with new features blurring the lines between SQL and NoSQL solutions. Which should you choose for your next project?',
    category: 'Data Management',
    image: '/tech-feed/database-comparison.jpg',
    author: 'Priya Desai',
    authorRole: 'Database Specialist',
    authorImage: '/mentors/priya.jpg',
    date: 'April 21, 2025',
    readTime: '12 min read',
    relevanceScore: 88,
    isSaved: false,
    hasLiked: true,
    tags: ['SQL', 'NoSQL', 'PostgreSQL', 'MongoDB', 'Performance']
  },
  {
    id: 'news5',
    title: 'Security Best Practices for Modern Web Applications',
    excerpt: 'Cybersecurity threats continue to evolve, making it essential for developers to implement robust security measures in their applications.',
    category: 'Cybersecurity',
    image: '/tech-feed/web-security.jpg',
    author: 'Rahul Kumar',
    authorRole: 'Security Expert',
    authorImage: '/mentors/rahul.jpg',
    date: 'April 20, 2025',
    readTime: '9 min read',
    relevanceScore: 85,
    isSaved: false,
    hasLiked: false,
    tags: ['Security', 'OWASP', 'Authentication', 'Encryption']
  },
  {
    id: 'news6',
    title: 'Mobile App Development Trends for 2025 and Beyond',
    excerpt: 'Mobile app development is evolving with new frameworks, design patterns, and capabilities. Learn what will shape the mobile landscape in the coming years.',
    category: 'Mobile Development',
    image: '/tech-feed/mobile-trends.jpg',
    author: 'Neha Gupta',
    authorRole: 'Mobile Development Lead',
    authorImage: '/mentors/neha.jpg',
    date: 'April 19, 2025',
    readTime: '7 min read',
    relevanceScore: 82,
    isSaved: true,
    hasLiked: false,
    tags: ['React Native', 'Flutter', 'iOS', 'Android']
  },
];

const TechFeedContent = () => {
  const [savedArticles, setSavedArticles] = useState<string[]>(
    techNews.filter(article => article.isSaved).map(article => article.id)
  );
  
  const [likedArticles, setLikedArticles] = useState<string[]>(
    techNews.filter(article => article.hasLiked).map(article => article.id)
  );

  const toggleSaved = (id: string) => {
    if (savedArticles.includes(id)) {
      setSavedArticles(prev => prev.filter(articleId => articleId !== id));
    } else {
      setSavedArticles(prev => [...prev, id]);
    }
  };

  const toggleLiked = (id: string) => {
    if (likedArticles.includes(id)) {
      setLikedArticles(prev => prev.filter(articleId => articleId !== id));
    } else {
      setLikedArticles(prev => [...prev, id]);
    }
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white font-display">Latest Updates</h2>
        <div className="hidden md:flex space-x-2">
          <button className="px-3 py-1 text-sm font-medium bg-obsidian-800 text-blue-400 rounded-lg border border-gray-700 hover:border-blue-500/30 hover:bg-obsidian-700 transition-all">
            Most Recent
          </button>
          <button className="px-3 py-1 text-sm font-medium text-gray-400 hover:text-blue-400 rounded-lg border border-transparent hover:border-blue-500/30 hover:bg-obsidian-800 transition-all">
            For You
          </button>
          <button className="px-3 py-1 text-sm font-medium text-gray-400 hover:text-blue-400 rounded-lg border border-transparent hover:border-blue-500/30 hover:bg-obsidian-800 transition-all">
            Popular
          </button>
        </div>
      </div>

      {/* Featured Article */}
      <div className="mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-xl overflow-hidden bg-obsidian-800 border border-gray-800 hover:border-blue-500/30 transition-all shadow-lg group"
        >
          <div className="relative h-64 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/70 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-obsidian-900 animate-pulse"></div> {/* Placeholder */}
            <Image
              src={techNews[0].image}
              alt={techNews[0].title}
              fill
              className="object-cover"
              onError={(e) => {
                // Fallback for demo purposes
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/800x400.png?text=Technology+Trends';
              }}
            />
            
            <div className="absolute top-4 left-4 z-20">
              <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-md font-medium">
                Featured
              </span>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="mb-2">
                <span className="inline-block bg-blue-900/60 text-blue-300 text-xs px-2 py-1 rounded-md font-medium">
                  {techNews[0].category}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {techNews[0].title}
              </h3>
              <p className="text-gray-300 line-clamp-2 md:line-clamp-none mb-4">
                {techNews[0].excerpt}
              </p>
              
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white font-semibold text-sm mr-2">
                    {techNews[0].author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{techNews[0].author}</p>
                    <p className="text-gray-400 text-xs">{techNews[0].authorRole}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar size={14} className="mr-1" />
                  <span className="mr-3">{techNews[0].date}</span>
                  <Clock size={14} className="mr-1" />
                  <span>{techNews[0].readTime}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 flex items-center justify-between border-t border-gray-800">
            <div className="flex flex-wrap gap-2">
              {techNews[0].tags.map(tag => (
                <span key={tag} className="text-xs bg-obsidian-900 text-gray-300 px-2 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => toggleLiked(techNews[0].id)}
                className={`p-2 rounded-full ${
                  likedArticles.includes(techNews[0].id) 
                    ? 'text-blue-400 bg-blue-900/30' 
                    : 'text-gray-400 hover:text-blue-400 hover:bg-blue-900/10'
                } transition-colors`}
                aria-label="Like article"
              >
                <ThumbsUp size={16} />
              </button>
              <button
                onClick={() => toggleSaved(techNews[0].id)}
                className={`p-2 rounded-full ${
                  savedArticles.includes(techNews[0].id) 
                    ? 'text-blue-400 bg-blue-900/30' 
                    : 'text-gray-400 hover:text-blue-400 hover:bg-blue-900/10'
                } transition-colors`}
                aria-label="Save article"
              >
                <Bookmark size={16} />
              </button>
              <button
                className="p-2 rounded-full text-gray-400 hover:text-blue-400 hover:bg-blue-900/10 transition-colors"
                aria-label="Share article"
              >
                <Share2 size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Article List */}
      <div className="space-y-8">
        {techNews.slice(1).map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-obsidian-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-gray-800 hover:border-blue-500/30 transition-all group"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 relative h-48 md:h-auto">
                <div className="absolute inset-0 bg-obsidian-900 animate-pulse"></div> {/* Placeholder */}
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback for demo purposes
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x300.png?text=Technology+News';
                  }}
                />
                
                <div className="absolute top-3 left-3">
                  <span className="inline-block bg-blue-900/60 text-blue-300 text-xs px-2 py-1 rounded-md font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="md:w-3/4 p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center">
                      <span className="text-xs text-gray-400 mr-1">Relevance:</span>
                      <span className="text-xs font-semibold text-blue-400">{article.relevanceScore}%</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 line-clamp-2 text-sm mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs bg-obsidian-900 text-gray-300 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                    {article.tags.length > 3 && (
                      <span className="text-xs bg-obsidian-900 text-gray-300 px-2 py-1 rounded-md">
                        +{article.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center justify-between pt-2 border-t border-gray-800">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white font-semibold text-xs mr-2">
                      {article.author.charAt(0)}
                    </div>
                    <span className="text-gray-300 text-sm mr-4">{article.author}</span>
                    
                    <div className="flex items-center text-gray-400 text-xs">
                      <Calendar size={12} className="mr-1" />
                      <span className="mr-3">{article.date}</span>
                      <Clock size={12} className="mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-2 md:mt-0">
                    <button 
                      onClick={() => toggleLiked(article.id)}
                      className={`p-1.5 rounded-full ${
                        likedArticles.includes(article.id) 
                          ? 'text-blue-400 bg-blue-900/30' 
                          : 'text-gray-400 hover:text-blue-400 hover:bg-blue-900/10'
                      } transition-colors`}
                      aria-label="Like article"
                    >
                      <ThumbsUp size={14} />
                    </button>
                    <button
                      onClick={() => toggleSaved(article.id)}
                      className={`p-1.5 rounded-full ${
                        savedArticles.includes(article.id) 
                          ? 'text-blue-400 bg-blue-900/30' 
                          : 'text-gray-400 hover:text-blue-400 hover:bg-blue-900/10'
                      } transition-colors`}
                      aria-label="Save article"
                    >
                      <Bookmark size={14} />
                    </button>
                    <button
                      className="p-1.5 rounded-full text-gray-400 hover:text-blue-400 hover:bg-blue-900/10 transition-colors"
                      aria-label="Share article"
                    >
                      <Share2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Load more button */}
      <div className="mt-10 text-center">
        <button className="px-6 py-3 bg-obsidian-800 text-white hover:text-blue-400 font-medium rounded-lg border border-gray-800 hover:border-blue-500/30 hover:bg-obsidian-700 transition-all flex items-center mx-auto">
          <span>Load More Articles</span>
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </section>
  );
};

export default TechFeedContent;
