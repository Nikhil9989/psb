'use client';

import React, { useState } from 'react';
import DailyChallenge from './DailyChallenge';
import PuzzleSidebar from './PuzzleSidebar';
import PuzzleLibrary from './PuzzleLibrary';
import PuzzleLeaderboard from './PuzzleLeaderboard';

const PuzzleLayout = () => {
  const [activeTab, setActiveTab] = useState('daily');
  
  const renderContent = () => {
    switch (activeTab) {
      case 'daily':
        return <DailyChallenge />;
      case 'library':
        return <PuzzleLibrary />;
      case 'leaderboard':
        return <PuzzleLeaderboard />;
      default:
        return <DailyChallenge />;
    }
  };
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="mb-8 border-b border-gray-800">
          <div className="flex gap-1 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('daily')}
              className={`px-5 py-3 font-medium text-sm whitespace-nowrap border-b-2 ${
                activeTab === 'daily'
                  ? 'border-purple-500 text-purple-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              } transition-colors`}
            >
              Daily Challenge
            </button>
            <button
              onClick={() => setActiveTab('library')}
              className={`px-5 py-3 font-medium text-sm whitespace-nowrap border-b-2 ${
                activeTab === 'library'
                  ? 'border-purple-500 text-purple-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              } transition-colors`}
            >
              Puzzle Library
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`px-5 py-3 font-medium text-sm whitespace-nowrap border-b-2 ${
                activeTab === 'leaderboard'
                  ? 'border-purple-500 text-purple-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              } transition-colors`}
            >
              Leaderboard
            </button>
          </div>
        </div>
        
        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-3/4">
            {renderContent()}
          </div>
          <div className="w-full lg:w-1/4">
            <PuzzleSidebar activeTab={activeTab} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PuzzleLayout;
