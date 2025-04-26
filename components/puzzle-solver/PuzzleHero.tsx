import React from 'react';
import { BrainCircuit, Sparkles, ArrowRight, Trophy, Code, Calendar } from 'lucide-react';
import Link from 'next/link';

const PuzzleHero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-obsidian-900 to-obsidian-900 z-0"></div>
      
      {/* Puzzle-themed background elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Code symbols effect */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-purple-400 text-sm font-mono"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          >
            {['{', '}', '(', ')', '[', ']', '<', '>', '/', '*', '+', '-', '=', ';'][Math.floor(Math.random() * 14)]}
          </div>
        ))}
        
        {/* Grid patterns */}
        <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-purple-500/20 rounded-lg grid grid-cols-3 grid-rows-3"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-24 border border-purple-500/20 rounded-lg grid grid-cols-4 grid-rows-2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/20 border border-purple-700/30 text-purple-400 text-sm font-medium mb-6">
            <BrainCircuit size={16} className="mr-2" />
            <span>Daily brain training</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-500">
            Puzzle Solver Dashboard
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Enhance your problem-solving skills with daily coding challenges, algorithm problems, and interactive exercises tailored to your learning journey.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="#daily-challenge" 
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold hover:from-purple-600 hover:to-purple-800 transition-all shadow-lg shadow-purple-900/20"
            >
              <span className="flex items-center">
                <Sparkles size={18} className="mr-2" /> 
                Solve Today's Challenge
              </span>
            </Link>
            <Link 
              href="#puzzle-library" 
              className="px-8 py-3 rounded-lg bg-obsidian-800 border border-purple-700/30 text-white font-semibold hover:bg-obsidian-700 transition-all flex items-center"
            >
              <Code size={18} className="mr-2" />
              Browse All Puzzles
            </Link>
          </div>
        </div>
      </div>
      
      {/* Stats section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-obsidian-800/70 border border-purple-700/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-purple-400" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">365+</h3>
            <p className="text-gray-400 text-sm">Unique puzzles and challenges</p>
          </div>
          
          <div className="bg-obsidian-800/70 border border-purple-700/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="text-purple-400" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">12</h3>
            <p className="text-gray-400 text-sm">Programming languages supported</p>
          </div>
          
          <div className="bg-obsidian-800/70 border border-purple-700/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="text-purple-400" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">5.2K+</h3>
            <p className="text-gray-400 text-sm">Solutions submitted this month</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PuzzleHero;
