import React from 'react';
import { Calendar, Check, Clock, Code, Trophy, User } from 'lucide-react';

const PuzzleSolverDashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Puzzle Solver Dashboard</h1>
        <div className="flex space-x-2">
          <select className="bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-md">
            <option>All Difficulties</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
          <select className="bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-md">
            <option>All Categories</option>
            <option>Algorithms</option>
            <option>Data Structures</option>
            <option>Database</option>
            <option>Front-end</option>
            <option>Back-end</option>
          </select>
        </div>
      </div>

      {/* Today's Challenge */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">Today's Challenge</h2>
          <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">Medium</span>
        </div>
        <h3 className="text-lg text-white mb-2">Balanced Binary Search Tree</h3>
        <p className="text-gray-300 mb-4">
          Implement a function that creates a balanced binary search tree from a sorted array.
        </p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-gray-400">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">30 minutes</span>
          </div>
          <div className="flex items-center text-gray-400">
            <User className="w-4 h-4 mr-1" />
            <span className="text-sm">324 solved today</span>
          </div>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md w-full transition">
          Start Challenge
        </button>
      </div>

      {/* Current Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Challenges Completed</p>
              <h3 className="text-2xl font-bold">47</h3>
            </div>
            <div className="bg-indigo-500/20 p-3 rounded-full">
              <Check className="h-6 w-6 text-indigo-500" />
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Current Streak</p>
              <h3 className="text-2xl font-bold">7 days</h3>
            </div>
            <div className="bg-yellow-500/20 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-yellow-500" />
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Ranking</p>
              <h3 className="text-2xl font-bold">#142</h3>
            </div>
            <div className="bg-emerald-500/20 p-3 rounded-full">
              <Trophy className="h-6 w-6 text-emerald-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center p-3 bg-gray-700/50 rounded-lg">
              <div className={`p-2 rounded-full ${activity.iconBg}`}>
                <activity.icon className={`h-5 w-5 ${activity.iconColor}`} />
              </div>
              <div className="ml-4">
                <p className="text-white">{activity.title}</p>
                <p className="text-sm text-gray-400">{activity.time}</p>
              </div>
              <div className="ml-auto">
                <span className={`px-2 py-1 rounded-full text-xs ${activity.statusBg} ${activity.statusColor}`}>
                  {activity.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Challenges */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Recommended For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendedChallenges.map((challenge, index) => (
            <div key={index} className="border border-gray-700 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-white">{challenge.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${challenge.difficultyColor}`}>
                  {challenge.difficulty}
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-3">{challenge.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-400 text-xs">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{challenge.time}</span>
                </div>
                <button className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-white transition">
                  View Challenge
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const recentActivity = [
  {
    icon: Check,
    iconBg: 'bg-green-500/20',
    iconColor: 'text-green-500',
    title: 'Completed "String Manipulation Challenge"',
    time: 'Yesterday at 4:30 PM',
    status: 'Completed',
    statusBg: 'bg-green-500/20',
    statusColor: 'text-green-500'
  },
  {
    icon: Code,
    iconBg: 'bg-yellow-500/20',
    iconColor: 'text-yellow-500',
    title: 'Attempted "Dynamic Programming Basics"',
    time: '2 days ago at 10:15 AM',
    status: 'In Progress',
    statusBg: 'bg-yellow-500/20',
    statusColor: 'text-yellow-500'
  },
  {
    icon: Trophy,
    iconBg: 'bg-indigo-500/20',
    iconColor: 'text-indigo-500',
    title: 'Earned badge "Algorithm Master"',
    time: '3 days ago at 6:45 PM',
    status: 'Achievement',
    statusBg: 'bg-indigo-500/20',
    statusColor: 'text-indigo-500'
  }
];

const recommendedChallenges = [
  {
    title: 'Array Partitioning',
    difficulty: 'Easy',
    difficultyColor: 'bg-green-500/20 text-green-500',
    description: 'Divide an array into two partitions with equal sum',
    time: '20 min'
  },
  {
    title: 'Graph Traversal',
    difficulty: 'Medium',
    difficultyColor: 'bg-yellow-500/20 text-yellow-500',
    description: 'Implement depth-first search on a graph structure',
    time: '30 min'
  },
  {
    title: 'API Authentication',
    difficulty: 'Medium',
    difficultyColor: 'bg-yellow-500/20 text-yellow-500',
    description: 'Implement JWT authentication for a REST API',
    time: '45 min'
  },
  {
    title: 'Database Indexing',
    difficulty: 'Hard',
    difficultyColor: 'bg-red-500/20 text-red-500',
    description: 'Optimize database queries using proper indexing',
    time: '60 min'
  }
];

export default PuzzleSolverDashboard;
