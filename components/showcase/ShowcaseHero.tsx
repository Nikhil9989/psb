import React from 'react';
import { Image, Eye, Heart, MessageSquare } from 'lucide-react';

const ShowcaseHero = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-indigo-900 py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-indigo-600/30 p-4 rounded-full">
            <Image className="h-12 w-12 text-indigo-400" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Student Showcase
        </h1>
        <p className="text-xl md:text-2xl text-indigo-200 mb-8 max-w-3xl mx-auto">
          Explore outstanding projects created by SKILL BRIDGE students demonstrating their skills and creativity
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-gray-800/50 p-4 rounded-lg border border-indigo-500/30 flex items-center">
            <div className="bg-indigo-500/20 p-2 rounded-full mr-3">
              <Eye className="h-6 w-6 text-indigo-400" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-white">10,000+ Projects</h3>
              <p className="text-sm text-gray-300">From students across India</p>
            </div>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg border border-indigo-500/30 flex items-center">
            <div className="bg-indigo-500/20 p-2 rounded-full mr-3">
              <Heart className="h-6 w-6 text-indigo-400" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-white">Community Engagement</h3>
              <p className="text-sm text-gray-300">Like and share projects</p>
            </div>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg border border-indigo-500/30 flex items-center">
            <div className="bg-indigo-500/20 p-2 rounded-full mr-3">
              <MessageSquare className="h-6 w-6 text-indigo-400" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-white">Mentor Feedback</h3>
              <p className="text-sm text-gray-300">Get industry expert input</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-lg text-lg font-medium transition shadow-lg hover:shadow-xl">
            Browse Projects
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition shadow-lg hover:shadow-xl">
            Submit Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseHero;
