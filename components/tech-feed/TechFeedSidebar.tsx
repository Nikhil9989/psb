'use client';

import React from 'react';
import Image from 'next/image';
import { TrendingUp, Clock, Search, Bell, ArrowRight, Flame } from 'lucide-react';

// Sample trending topics data
const trendingTopics = [
  {
    id: 'trend1',
    title: 'Edge Computing',
    count: 52,
    change: '+28%',
    isUp: true,
  },
  {
    id: 'trend2',
    title: 'WebAssembly',
    count: 47,
    change: '+35%',
    isUp: true,
  },
  {
    id: 'trend3',
    title: 'Serverless',
    count: 43,
    change: '+18%',
    isUp: true,
  },
  {
    id: 'trend4',
    title: 'Quantum Computing',
    count: 38,
    change: '+42%',
    isUp: true,
  },
  {
    id: 'trend5',
    title: 'Rust Language',
    count: 35,
    change: '+15%',
    isUp: true,
  },
];

// Sample recent articles data
const recentArticles = [
  {
    id: 'recent1',
    title: 'Understanding Modern Authentication Patterns',
    time: '2 hours ago',
    image: '/tech-feed/auth-patterns.jpg',
  },
  {
    id: 'recent2',
    title: 'Optimization Techniques for React Applications',
    time: '4 hours ago',
    image: '/tech-feed/react-opt.jpg',
  },
  {
    id: 'recent3',
    title: 'Introduction to Rust for JavaScript Developers',
    time: '6 hours ago',
    image: '/tech-feed/rust-js.jpg',
  },
];

// Sample upcoming webinars data
const upcomingWebinars = [
  {
    id: 'webinar1',
    title: 'Mastering Data Structures & Algorithms',
    date: 'April 28, 2025',
    time: '6:30 PM IST',
    instructor: 'Dr. Ravi Kumar',
    image: '/webinars/dsa.jpg',
  },
  {
    id: 'webinar2',
    title: 'Full Stack Development with MERN',
    date: 'April 30, 2025',
    time: '7:00 PM IST',
    instructor: 'Anjali Sharma',
    image: '/webinars/mern.jpg',
  },
];

const TechFeedSidebar = () => {
  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className="bg-obsidian-800 rounded-xl p-4 border border-gray-800">
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full bg-obsidian-900 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
        </div>
      </div>
      
      {/* Trending Topics */}
      <div className="bg-obsidian-800 rounded-xl p-6 border border-gray-800">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="text-blue-400" size={18} />
          <h3 className="text-lg font-bold text-white">Trending Topics</h3>
        </div>
        
        <div className="space-y-3">
          {trendingTopics.map((topic) => (
            <div key={topic.id} className="flex items-center justify-between group">
              <div className="flex items-center">
                <span className="text-gray-400 text-sm group-hover:text-blue-400 transition-colors">
                  {topic.title}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-xs text-gray-500 mr-2">{topic.count} articles</span>
                <span className={`text-xs ${topic.isUp ? 'text-green-500' : 'text-red-500'}`}>
                  {topic.change}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <button className="mt-4 w-full py-2 text-sm text-blue-400 hover:text-blue-300 rounded-lg border border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-900/10 transition-all flex items-center justify-center">
          View All Trends <ArrowRight size={14} className="ml-1" />
        </button>
      </div>
      
      {/* Recent Articles */}
      <div className="bg-obsidian-800 rounded-xl p-6 border border-gray-800">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="text-blue-400" size={18} />
          <h3 className="text-lg font-bold text-white">Recently Added</h3>
        </div>
        
        <div className="space-y-4">
          {recentArticles.map((article) => (
            <div key={article.id} className="flex gap-3 group">
              <div className="w-16 h-16 relative rounded-md overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-obsidian-900 animate-pulse"></div> {/* Placeholder */}
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback for demo purposes
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/80.png?text=Article';
                  }}
                />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{article.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Hot This Week */}
      <div className="bg-obsidian-800 rounded-xl p-6 border border-gray-800">
        <div className="flex items-center gap-2 mb-4">
          <Flame className="text-amber-500" size={18} />
          <h3 className="text-lg font-bold text-white">Hot This Week</h3>
        </div>
        
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg p-4 border border-blue-700/20">
          <h4 className="text-white font-semibold mb-2">
            The Rise of AI-Generated Code: How It's Changing Development
          </h4>
          <p className="text-gray-400 text-sm mb-3">
            Explore how AI code generation tools are transforming developer productivity and what it means for the future of programming.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">2.3K reads</span>
            <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
              Read More →
            </button>
          </div>
        </div>
      </div>
      
      {/* Upcoming Webinars */}
      <div className="bg-obsidian-800 rounded-xl p-6 border border-gray-800">
        <div className="flex items-center gap-2 mb-4">
          <Bell className="text-blue-400" size={18} />
          <h3 className="text-lg font-bold text-white">Upcoming Webinars</h3>
        </div>
        
        <div className="space-y-4">
          {upcomingWebinars.map((webinar) => (
            <div key={webinar.id} className="border border-gray-700 rounded-lg overflow-hidden hover:border-blue-500/30 transition-all group">
              <div className="relative h-32">
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-obsidian-900 animate-pulse"></div> {/* Placeholder */}
                <Image
                  src={webinar.image}
                  alt={webinar.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback for demo purposes
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/300x150.png?text=Webinar';
                  }}
                />
                
                <div className="absolute bottom-3 left-3 right-3 z-20">
                  <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors line-clamp-1">
                    {webinar.title}
                  </h4>
                </div>
              </div>
              
              <div className="p-3">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs text-gray-300">{webinar.date}</p>
                  <p className="text-xs text-blue-400">{webinar.time}</p>
                </div>
                <p className="text-xs text-gray-500">Instructor: {webinar.instructor}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button className="mt-4 w-full py-2 text-sm text-blue-400 hover:text-blue-300 rounded-lg border border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-900/10 transition-all flex items-center justify-center">
          View All Webinars <ArrowRight size={14} className="ml-1" />
        </button>
      </div>
    </aside>
  );
};

export default TechFeedSidebar;
