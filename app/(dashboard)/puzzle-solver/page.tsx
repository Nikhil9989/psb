import React from 'react';
import DailyChallenge from '@/components/puzzle-solver/DailyChallenge';
import { Calendar, BarChart2, Zap, TrendingUp, History } from 'lucide-react';

export default function PuzzleSolverPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
            Daily Puzzle Solver
          </h1>
          <p className="text-gray-400 mt-2">
            Sharpen your programming skills with daily challenges and track your progress
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition">
            <Calendar className="mr-2 h-5 w-5" />
            View Calendar
          </button>
          <button className="flex items-center px-4 py-2 bg-obsidian-700 hover:bg-obsidian-600 text-gray-300 rounded-lg border border-gray-700 transition">
            <BarChart2 className="mr-2 h-5 w-5" />
            My Stats
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-obsidian-800 rounded-xl p-4 border border-gray-800">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-medium text-white">Streak</h3>
            <Zap className="h-5 w-5 text-amber-400" />
          </div>
          <p className="text-3xl font-bold text-white">14 days</p>
          <p className="text-gray-400 text-sm mt-1">Keep it up!</p>
        </div>
        
        <div className="bg-obsidian-800 rounded-xl p-4 border border-gray-800">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-medium text-white">Total Solved</h3>
            <TrendingUp className="h-5 w-5 text-purple-400" />
          </div>
          <p className="text-3xl font-bold text-white">42</p>
          <p className="text-gray-400 text-sm mt-1">Since you joined</p>
        </div>
        
        <div className="bg-obsidian-800 rounded-xl p-4 border border-gray-800">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-medium text-white">Points Earned</h3>
            <BarChart2 className="h-5 w-5 text-amber-400" />
          </div>
          <p className="text-3xl font-bold text-white">3,450</p>
          <p className="text-gray-400 text-sm mt-1">Top 15% in your cohort</p>
        </div>
        
        <div className="bg-obsidian-800 rounded-xl p-4 border border-gray-800">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-medium text-white">Average Time</h3>
            <History className="h-5 w-5 text-purple-400" />
          </div>
          <p className="text-3xl font-bold text-white">8.2 mins</p>
          <p className="text-gray-400 text-sm mt-1">Per challenge</p>
        </div>
      </div>
      
      <DailyChallenge />
    </div>
  );
}
