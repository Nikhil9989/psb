import React from 'react';
import { Zap, Bell, Globe } from 'lucide-react';
import Link from 'next/link';

const TechFeedHero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-obsidian-900 to-obsidian-900 z-0"></div>
      
      {/* Technology-themed background elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Binary code effect */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-400 text-xs font-mono"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
        
        {/* Circuit-like lines */}
        <div className="absolute h-px w-32 bg-blue-500/30 top-1/4 left-1/4 rotate-45"></div>
        <div className="absolute h-px w-48 bg-blue-500/30 top-1/3 right-1/4 -rotate-30"></div>
        <div className="absolute h-px w-24 bg-blue-500/30 bottom-1/3 left-1/3 rotate-15"></div>
        <div className="absolute h-px w-56 bg-blue-500/30 bottom-1/4 right-1/3 -rotate-60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900/20 border border-blue-700/30 text-blue-400 text-sm font-medium mb-6">
            <Zap size={16} className="mr-2" />
            <span>Stay ahead of technology</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-500">
            Technology Feed
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest technological developments, industry trends, and expert insights tailored to your learning journey.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="#subscribe" 
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold hover:from-blue-600 hover:to-blue-800 transition-all shadow-lg shadow-blue-900/20"
            >
              <span className="flex items-center">
                <Bell size={18} className="mr-2" /> 
                Get Daily Updates
              </span>
            </Link>
            <Link 
              href="#trends" 
              className="px-8 py-3 rounded-lg bg-obsidian-800 border border-blue-700/30 text-white font-semibold hover:bg-obsidian-700 transition-all flex items-center"
            >
              <Globe size={18} className="mr-2" />
              Explore Trends
            </Link>
          </div>
        </div>
      </div>
      
      {/* Technology categories */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16">
        <div className="flex overflow-x-auto pb-4 gap-4 no-scrollbar justify-center">
          {[
            "Web Development", 
            "Data Science", 
            "Cloud Computing", 
            "Artificial Intelligence", 
            "DevOps", 
            "Cybersecurity",
            "Mobile Development",
            "Blockchain"
          ].map((category) => (
            <button 
              key={category}
              className="px-4 py-2 rounded-full border border-blue-700/30 hover:border-blue-600 bg-obsidian-800 hover:bg-obsidian-700 text-sm font-medium text-gray-300 hover:text-blue-400 transition-all whitespace-nowrap"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechFeedHero;
