import React from 'react';
import { Puzzle, BrainCircuit, Code, Star } from 'lucide-react';

const PuzzleHero = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-purple-900 py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-purple-600/30 p-4 rounded-full">
            <Puzzle className="h-12 w-12 text-purple-400" /> {/* Changed from PuzzlePiece to Puzzle */}
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Daily Puzzle Solver
        </h1>
        <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto">
          Sharpen your programming skills with daily challenges, algorithm puzzles, and coding exercises
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-gray-800/50 p-4 rounded-lg border border-purple-500/30 flex items-center">
            <div className="bg-purple-500/20 p-2 rounded-full mr-3">
              <BrainCircuit className="h-6 w-6 text-purple-400" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-white">Diverse Challenges</h3>
              <p className="text-sm text-gray-300">From algorithms to system design</p>
            </div>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg border border-purple-500/30 flex items-center">
            <div className="bg-purple-500/20 p-2 rounded-full mr-3">
              <Code className="h-6 w-6 text-purple-400" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-white">Interactive Coding</h3>
              <p className="text-sm text-gray-300">Solve problems in real-time</p>
            </div>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg border border-purple-500/30 flex items-center">
            <div className="bg-purple-500/20 p-2 rounded-full mr-3">
              <Star className="h-6 w-6 text-purple-400" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-white">Skill Progression</h3>
              <p className="text-sm text-gray-300">Track your improvement</p>
            </div>
          </div>
        </div>
        <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-lg text-lg font-medium transition shadow-lg hover:shadow-xl">
          Try Today's Challenge
        </button>
      </div>
    </div>
  );
};

export default PuzzleHero;