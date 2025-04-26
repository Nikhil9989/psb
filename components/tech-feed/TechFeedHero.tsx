import React from 'react';
import { Rss, Zap, Bell, Bookmark } from 'lucide-react';

const TechFeedHero = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-900 py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-blue-600/30 p-4 rounded-full">
            <Rss className="h-12 w-12 text-blue-400" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Technology Feed
        </h1>
        <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto">
          Stay updated with the latest industry trends, news, and learning resources personalized to your interests
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-gray-800/50 p-4 rounded-lg border border-blue-500/30 flex items-center">
            <div className="bg-blue-500/20 p-2 rounded-full mr-3">
              <Zap className="h-6 w-6 text-blue-400" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-white">Latest Updates</h3>
              <p className="text-sm text-gray-300">Fresh industry content daily</p>
            </div>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg border border-blue-500/30 flex items-center">
            <div className="bg-blue-500/20 p-2 rounded-full mr-3">
              <Bell className="h-6 w-6 text-blue-400" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-white">Custom Alerts</h3>
              <p className="text-sm text-gray-300">For topics you care about</p>
            </div>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg border border-blue-500/30 flex items-center">
            <div className="bg-blue-500/20 p-2 rounded-full mr-3">
              <Bookmark className="h-6 w-6 text-blue-400" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-white">Save For Later</h3>
              <p className="text-sm text-gray-300">Build your knowledge library</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-medium transition shadow-lg hover:shadow-xl">
            Personalize Your Feed
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition shadow-lg hover:shadow-xl">
            Browse Categories
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechFeedHero;
