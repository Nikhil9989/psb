import React from 'react';
import { Terminal, CheckCircle, AlertCircle, Clock, Award, Users } from 'lucide-react';

const PuzzleLayout = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {/* Featured Puzzles */}
        <h2 className="text-2xl font-bold mb-6 text-white">Featured Puzzles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {featuredPuzzles.map((puzzle, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition shadow-lg hover:shadow-purple-500/10">
              <div className={`px-4 py-2 ${getDifficultyColor(puzzle.difficulty)}`}>
                <span className="font-medium text-white">{puzzle.difficulty}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{puzzle.title}</h3>
                <p className="text-gray-300 mb-4">{puzzle.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-gray-400">
                    <Terminal className="h-4 w-4 mr-1" />
                    <span className="text-sm">{puzzle.category}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{puzzle.timeEstimate}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-2 w-full bg-gray-700 rounded-full">
                      <div 
                        className="h-2 bg-purple-600 rounded-full" 
                        style={{ width: `${puzzle.completionRate}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-400 text-xs ml-2">{puzzle.completionRate}%</span>
                  </div>
                  <button className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-md text-sm transition">
                    Try Puzzle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Terminal className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">1. Choose a Challenge</h3>
              <p className="text-gray-300">Select from daily challenges or browse by category and difficulty</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">2. Solve the Problem</h3>
              <p className="text-gray-300">Use our interactive coding environment to implement your solution</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">3. Test Your Code</h3>
              <p className="text-gray-300">Run your solution against test cases to verify correctness</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">4. Earn Recognition</h3>
              <p className="text-gray-300">Track progress, earn badges, and climb the leaderboard</p>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <h2 className="text-2xl font-bold mb-6 text-white">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {successStories.map((story, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start mb-4">
                <img 
                  src={story.avatar} 
                  alt={story.name} 
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{story.name}</h3>
                  <p className="text-gray-400 text-sm">{story.title}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">"{story.quote}"</p>
              <div className="flex items-center text-gray-400 text-sm">
                <span className="mr-2">Completed {story.challengesCompleted} challenges</span>
                <span>•</span>
                <span className="ml-2">Current streak: {story.currentStreak} days</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const featuredPuzzles = [
  {
    title: "Binary Search Tree Validator",
    description: "Write a function to determine if a tree satisfies the BST property.",
    category: "Data Structures",
    difficulty: "Medium",
    timeEstimate: "30 min",
    completionRate: 68
  },
  {
    title: "Dynamic Programming Stairs",
    description: "Find the number of ways to climb n stairs when you can take 1 or 2 steps at a time.",
    category: "Algorithms",
    difficulty: "Easy",
    timeEstimate: "20 min",
    completionRate: 82
  },
  {
    title: "Concurrent Web Scraper",
    description: "Build a web scraper that processes multiple pages concurrently with rate limiting.",
    category: "System Design",
    difficulty: "Hard",
    timeEstimate: "45 min",
    completionRate: 41
  }
];

const successStories = [
  {
    name: "Priya Sharma",
    title: "Software Engineer at Microsoft",
    avatar: "/api/placeholder/100/100",
    quote: "Daily challenges on SKILL BRIDGE helped me build the problem-solving skills I needed to ace my technical interviews. After 3 months of consistent practice, I landed my dream job.",
    challengesCompleted: 124,
    currentStreak: 47
  },
  {
    name: "Rahul Patel",
    title: "Full Stack Developer",
    avatar: "/api/placeholder/100/100",
    quote: "The variety of puzzles kept me engaged while building a strong foundation in algorithms and data structures. The daily habit transformed my coding abilities.",
    challengesCompleted: 87,
    currentStreak: 32
  }
];

const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty) {
    case 'Easy':
      return 'bg-green-600';
    case 'Medium':
      return 'bg-yellow-600';
    case 'Hard':
      return 'bg-red-600';
    default:
      return 'bg-indigo-600';
  }
};

export default PuzzleLayout;