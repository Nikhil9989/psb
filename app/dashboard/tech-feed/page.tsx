'use client';

import React, { useState, useEffect } from 'react';
import TechArticleCard from '@/components/tech-feed/TechArticleCard';
import TechFeedFilters from '@/components/tech-feed/TechFeedFilters';
import { Rss, BookmarkPlus, Sparkles, ArrowUpRight, BellPlus } from 'lucide-react';

// Sample data for tech feed
const sampleArticles = [
  {
    id: 'article-1',
    title: 'React 20: A New Era for Web Development',
    summary: 'React 20 introduces groundbreaking features including server-side components, automatic code splitting, and dramatic performance improvements.',
    imageUrl: 'https://placehold.co/600x400/313438/CCCCCC?text=React+20',
    sourceUrl: 'https://reactjs.org',
    sourceName: 'React Blog',
    sourceLogo: 'https://placehold.co/100/61DAFB/FFFFFF?text=R',
    publishDate: 'Apr 22, 2025',
    readTime: 8,
    categories: ['Frontend', 'React', 'JavaScript'],
    relevanceScore: 98,
  },
  {
    id: 'article-2',
    title: 'The Future of AI Pair Programming: Beyond Copilot',
    summary: 'As AI pair programming tools mature, we explore how they evolve beyond simple code suggestions to become true development partners.',
    imageUrl: 'https://placehold.co/600x400/313438/CCCCCC?text=AI+Coding',
    sourceUrl: 'https://dev.to',
    sourceName: 'DEV Community',
    sourceLogo: 'https://placehold.co/100/0A0A0A/FFFFFF?text=DEV',
    publishDate: 'Apr 20, 2025',
    readTime: 12,
    categories: ['AI', 'Developer Tools', 'Productivity'],
    relevanceScore: 85,
  },
  {
    id: 'article-3',
    title: 'TypeScript 6.0 Release: What\'s New and Improved',
    summary: 'TypeScript 6.0 has arrived with improved type inference, performance enhancements, and exciting new language features for developers.',
    imageUrl: 'https://placehold.co/600x400/313438/CCCCCC?text=TypeScript+6.0',
    sourceUrl: 'https://devblogs.microsoft.com/typescript',
    sourceName: 'TypeScript Blog',
    sourceLogo: 'https://placehold.co/100/3178C6/FFFFFF?text=TS',
    publishDate: 'Apr 18, 2025',
    readTime: 10,
    categories: ['TypeScript', 'JavaScript', 'Languages'],
    bookmarked: true,
    relevanceScore: 92,
  },
  {
    id: 'article-4',
    title: 'The State of Web Performance in 2025',
    summary: 'An in-depth analysis of current web performance metrics, optimization techniques, and how new standards are reshaping user experience.',
    imageUrl: 'https://placehold.co/600x400/313438/CCCCCC?text=Web+Performance',
    sourceUrl: 'https://web.dev',
    sourceName: 'web.dev',
    sourceLogo: 'https://placehold.co/100/1967D2/FFFFFF?text=W',
    publishDate: 'Apr 16, 2025',
    readTime: 15,
    categories: ['Performance', 'Web Development', 'UX'],
    relevanceScore: 78,
  },
  {
    id: 'article-5',
    title: 'Designing Scalable Microservices: Lessons from the Field',
    summary: 'Real-world insights from engineering teams who have successfully implemented and scaled microservice architectures for mission-critical applications.',
    imageUrl: 'https://placehold.co/600x400/313438/CCCCCC?text=Microservices',
    sourceUrl: 'https://martinfowler.com',
    sourceName: 'Martin Fowler',
    sourceLogo: 'https://placehold.co/100/8C4321/FFFFFF?text=MF',
    publishDate: 'Apr 15, 2025',
    readTime: 18,
    categories: ['Architecture', 'Microservices', 'Backend'],
    relevanceScore: 82,
  },
  {
    id: 'article-6',
    title: 'Node.js 22: The Complete Overview for Developers',
    summary: 'Node.js 22 brings native HTTP2 push support, improved debugging tools, and substantial performance gains for server-side JavaScript applications.',
    imageUrl: 'https://placehold.co/600x400/313438/CCCCCC?text=Node.js+22',
    sourceUrl: 'https://nodejs.org/blog',
    sourceName: 'Node.js Blog',
    sourceLogo: 'https://placehold.co/100/539E43/FFFFFF?text=N',
    publishDate: 'Apr 14, 2025',
    readTime: 9,
    categories: ['Node.js', 'JavaScript', 'Backend'],
    relevanceScore: 88,
  },
  {
    id: 'article-7',
    title: 'CSS Container Queries: The Complete Guide',
    summary: 'Learn how to use CSS Container Queries for truly component-based responsive design that goes beyond global viewport dimensions.',
    imageUrl: 'https://placehold.co/600x400/313438/CCCCCC?text=CSS+Container+Queries',
    sourceUrl: 'https://css-tricks.com',
    sourceName: 'CSS-Tricks',
    sourceLogo: 'https://placehold.co/100/FF2E00/FFFFFF?text=CSS',
    publishDate: 'Apr 12, 2025',
    readTime: 11,
    categories: ['CSS', 'Frontend', 'Responsive Design'],
    bookmarked: true,
    relevanceScore: 75,
  },
  {
    id: 'article-8',
    title: 'The Rise of WebAssembly for Machine Learning Applications',
    summary: 'How WebAssembly is enabling powerful machine learning capabilities directly in the browser with near-native performance.',
    imageUrl: 'https://placehold.co/600x400/313438/CCCCCC?text=WebAssembly+ML',
    sourceUrl: 'https://webassembly.org',
    sourceName: 'WebAssembly Blog',
    sourceLogo: 'https://placehold.co/100/654FF0/FFFFFF?text=WA',
    publishDate: 'Apr 10, 2025',
    readTime: 14,
    categories: ['WebAssembly', 'Machine Learning', 'Performance'],
    relevanceScore: 70,
  }
];

// Extract all available categories from articles
const allCategories = Array.from(new Set(sampleArticles.flatMap(article => article.categories)));

export default function TechFeedPage() {
  const [articles, setArticles] = useState(sampleArticles);
  const [filters, setFilters] = useState({
    search: '',
    categories: [] as string[],
    sortBy: 'relevance',
    timeframe: 'all',
    bookmarked: false
  });
  
  // Apply filters to articles
  useEffect(() => {
    let filteredArticles = [...sampleArticles];
    
    // Filter by search
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filteredArticles = filteredArticles.filter(article => 
        article.title.toLowerCase().includes(searchLower) || 
        article.summary.toLowerCase().includes(searchLower) ||
        article.categories.some(category => category.toLowerCase().includes(searchLower))
      );
    }
    
    // Filter by categories
    if (filters.categories.length > 0) {
      filteredArticles = filteredArticles.filter(article => 
        filters.categories.some(category => article.categories.includes(category))
      );
    }
    
    // Filter bookmarked
    if (filters.bookmarked) {
      filteredArticles = filteredArticles.filter(article => article.bookmarked);
    }
    
    // Sort articles
    switch (filters.sortBy) {
      case 'recent':
        // In a real app, we would sort by actual date
        // Here we're just keeping the original order which is assumed to be by recency
        break;
      case 'popular':
        // In a real app, we might sort by views or engagement
        // Here we'll use the relevance score as a proxy for popularity
        filteredArticles.sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0));
        break;
      case 'relevance':
      default:
        // Already sorted by relevance in our sample data
        break;
    }
    
    setArticles(filteredArticles);
  }, [filters]);
  
  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
            Technology Feed
          </h1>
          <p className="text-gray-400 mt-2">
            Stay updated with the latest trends, tools, and innovations in your field
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 bg-obsidian-700 hover:bg-obsidian-600 text-gray-300 rounded-lg border border-gray-700 transition">
            <BellPlus className="mr-2 h-5 w-5" />
            Manage Topics
          </button>
          <button className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition">
            <BookmarkPlus className="mr-2 h-5 w-5" />
            View Bookmarks
          </button>
        </div>
      </div>
      
      {/* Topic chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button className="px-3 py-1.5 bg-purple-600 text-white rounded-full text-sm font-medium flex items-center">
          <span>For You</span>
        </button>
        
        {['Web Development', 'DevOps', 'AI/ML', 'Mobile', 'Cloud', 'Cybersecurity'].map((topic, index) => (
          <button 
            key={index}
            className="px-3 py-1.5 bg-obsidian-800 text-gray-300 hover:bg-obsidian-700 rounded-full text-sm font-medium flex items-center transition-colors"
          >
            <span>{topic}</span>
          </button>
        ))}
        
        <button className="px-3 py-1.5 bg-obsidian-800 text-purple-400 hover:bg-obsidian-700 rounded-full text-sm font-medium flex items-center transition-colors">
          <ArrowUpRight className="mr-1 h-4 w-4" />
          <span>Explore Topics</span>
        </button>
      </div>
      
      {/* Personalized recommendations */}
      <div className="mb-10">
        <div className="flex items-center mb-6">
          <Sparkles className="text-amber-500 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-bold text-white">Recommended For You</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleArticles
            .filter(article => (article.relevanceScore || 0) > 90)
            .slice(0, 3)
            .map(article => (
              <TechArticleCard key={article.id} article={article} />
            ))}
        </div>
      </div>
      
      {/* Filters */}
      <TechFeedFilters 
        onFilterChange={handleFilterChange}
        availableCategories={allCategories}
      />
      
      {/* All articles */}
      <div className="mb-8">
        <div className="flex items-center mb-6">
          <Rss className="text-purple-500 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-bold text-white">Latest Technology Updates</h2>
          <span className="ml-3 text-gray-400 text-sm">({articles.length} articles)</span>
        </div>
        
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => (
              <TechArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-obsidian-800 rounded-xl border border-gray-800">
            <p className="text-gray-400 text-lg mb-3">No articles match your filters</p>
            <button
              onClick={() => setFilters({
                search: '',
                categories: [],
                sortBy: 'relevance',
                timeframe: 'all',
                bookmarked: false
              })}
              className="text-purple-400 hover:text-purple-300 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
      
      {/* Subscribe section */}
      <div className="bg-gradient-to-br from-purple-900/30 to-amber-900/30 rounded-xl p-8 border border-purple-500/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Customize Your Technology Feed</h2>
          <p className="text-gray-300 mb-6">
            Get personalized updates on technologies that matter most to your learning path and career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-obsidian-900/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
