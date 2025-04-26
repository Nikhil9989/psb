import React from 'react';
import { Calendar, BarChart2, Users, Award, BookOpen, MessageSquare, Code, Zap } from 'lucide-react';

export const metadata = {
  title: 'Student Dashboard | SKILL BRIDGE',
  description: 'Access your personalized SKILL BRIDGE dashboard to track progress, manage learning paths, and connect with mentors.',
}

export default function DashboardPage() {
  return (
    <div className="container px-4 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
          Student Dashboard
        </h1>
        <p className="text-gray-400 mt-2">
          Welcome back, Rahul! Track your progress and continue your learning journey.
        </p>
      </div>
      
      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-obsidian-800 rounded-xl p-5 border border-gray-800">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-400">Current Phase</h3>
            <div className="bg-purple-900/30 p-2 rounded-lg">
              <Zap className="h-5 w-5 text-purple-400" />
            </div>
          </div>
          <p className="text-2xl font-bold text-white">Phase 3</p>
          <p className="text-gray-400 text-sm mt-1">Integration & Complexity</p>
          <div className="w-full bg-obsidian-700 rounded-full h-1.5 mt-3">
            <div className="bg-gradient-to-r from-amber-500 to-yellow-300 h-1.5 rounded-full" style={{ width: '65%' }}></div>
          </div>
          <p className="text-xs text-gray-500 mt-2">65% Complete</p>
        </div>
        
        <div className="bg-obsidian-800 rounded-xl p-5 border border-gray-800">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-400">Learning Streak</h3>
            <div className="bg-amber-900/30 p-2 rounded-lg">
              <Calendar className="h-5 w-5 text-amber-400" />
            </div>
          </div>
          <p className="text-2xl font-bold text-white">14 Days</p>
          <p className="text-gray-400 text-sm mt-1">Current streak</p>
          <div className="flex items-center space-x-1 mt-3">
            {[...Array(7)].map((_, i) => (
              <div 
                key={i} 
                className={`h-2 w-full rounded-sm ${i < 5 ? 'bg-amber-500' : 'bg-obsidian-700'}`}
              ></div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">Last 7 days activity</p>
        </div>
        
        <div className="bg-obsidian-800 rounded-xl p-5 border border-gray-800">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-400">Upcoming Sessions</h3>
            <div className="bg-purple-900/30 p-2 rounded-lg">
              <Users className="h-5 w-5 text-purple-400" />
            </div>
          </div>
          <p className="text-2xl font-bold text-white">3 Sessions</p>
          <p className="text-gray-400 text-sm mt-1">This week</p>
          <div className="bg-obsidian-700 rounded-lg p-2 mt-3 text-xs text-white">
            <p className="font-medium">Mentor 1:1 with Priya</p>
            <p className="text-gray-400 mt-1">Tomorrow, 3:00 PM</p>
          </div>
        </div>
        
        <div className="bg-obsidian-800 rounded-xl p-5 border border-gray-800">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-400">Projects</h3>
            <div className="bg-amber-900/30 p-2 rounded-lg">
              <Code className="h-5 w-5 text-amber-400" />
            </div>
          </div>
          <p className="text-2xl font-bold text-white">5 Projects</p>
          <p className="text-gray-400 text-sm mt-1">2 in progress</p>
          <div className="flex items-center justify-between text-xs mt-3">
            <span className="text-green-400">3 Complete</span>
            <span className="text-blue-400">2 In Progress</span>
            <span className="text-amber-400">0 Overdue</span>
          </div>
        </div>
      </div>
      
      {/* Current learning and upcoming events */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-obsidian-800 rounded-xl border border-gray-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Current Learning Path</h2>
              <a href="/dashboard/learning-path" className="text-sm text-purple-400 hover:text-purple-300">View all</a>
            </div>
            
            <div className="space-y-4">
              <div className="bg-obsidian-700 rounded-lg p-4 border border-obsidian-600">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-white">Advanced React Patterns</h3>
                    <p className="text-sm text-gray-400 mt-1">Web Development Path - Phase 3</p>
                  </div>
                  <div className="bg-purple-900/30 p-2 rounded-lg">
                    <BookOpen className="h-5 w-5 text-purple-400" />
                  </div>
                </div>
                <div className="w-full bg-obsidian-600 rounded-full h-1.5 mt-4">
                  <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <div className="flex justify-between text-xs mt-2">
                  <span className="text-gray-500">45% complete</span>
                  <span className="text-gray-500">3/8 modules</span>
                </div>
                <div className="mt-4">
                  <a 
                    href="/dashboard/learning-path/current"
                    className="text-sm text-purple-400 hover:text-purple-300 font-medium"
                  >
                    Continue Learning →
                  </a>
                </div>
              </div>
              
              <div className="bg-obsidian-700 rounded-lg p-4 border border-obsidian-600">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-white">System Design Principles</h3>
                    <p className="text-sm text-gray-400 mt-1">Web Development Path - Phase 3</p>
                  </div>
                  <div className="bg-amber-900/30 p-2 rounded-lg">
                    <BarChart2 className="h-5 w-5 text-amber-400" />
                  </div>
                </div>
                <div className="w-full bg-obsidian-600 rounded-full h-1.5 mt-4">
                  <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '20%' }}></div>
                </div>
                <div className="flex justify-between text-xs mt-2">
                  <span className="text-gray-500">20% complete</span>
                  <span className="text-gray-500">1/5 modules</span>
                </div>
                <div className="mt-4">
                  <a 
                    href="/dashboard/learning-path/current"
                    className="text-sm text-amber-400 hover:text-amber-300 font-medium"
                  >
                    Continue Learning →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-obsidian-800 rounded-xl border border-gray-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Upcoming Events</h2>
              <a href="/dashboard/calendar" className="text-sm text-purple-400 hover:text-purple-300">View calendar</a>
            </div>
            
            <div className="space-y-4">
              <div className="bg-obsidian-700 rounded-lg p-3 border border-obsidian-600">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 text-center">
                    <p className="text-xs text-gray-400">APR</p>
                    <p className="text-xl font-bold text-white">27</p>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-white">Mentor Session</p>
                    <p className="text-xs text-gray-400">3:00 PM - 4:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-obsidian-700 rounded-lg p-3 border border-obsidian-600">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 text-center">
                    <p className="text-xs text-gray-400">APR</p>
                    <p className="text-xl font-bold text-white">29</p>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-white">Workshop: Node.js Advanced</p>
                    <p className="text-xs text-gray-400">1:00 PM - 3:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-obsidian-700 rounded-lg p-3 border border-obsidian-600">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 text-center">
                    <p className="text-xs text-gray-400">MAY</p>
                    <p className="text-xl font-bold text-white">02</p>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-white">Project Submission Deadline</p>
                    <p className="text-xs text-gray-400">11:59 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent activity and achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-obsidian-800 rounded-xl border border-gray-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Recent Activity</h2>
              <a href="/dashboard/activity" className="text-sm text-purple-400 hover:text-purple-300">View all</a>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-2 border-purple-500 pl-4 py-1">
                <p className="text-white">Completed Module: API Integration</p>
                <p className="text-xs text-gray-400 mt-1">Today, 10:23 AM</p>
              </div>
              
              <div className="border-l-2 border-amber-500 pl-4 py-1">
                <p className="text-white">Submitted Project: Task Management App</p>
                <p className="text-xs text-gray-400 mt-1">Yesterday, 4:45 PM</p>
              </div>
              
              <div className="border-l-2 border-blue-500 pl-4 py-1">
                <p className="text-white">Participated in Discussion: Authentication Strategies</p>
                <p className="text-xs text-gray-400 mt-1">Yesterday, 2:30 PM</p>
              </div>
              
              <div className="border-l-2 border-green-500 pl-4 py-1">
                <p className="text-white">Received Feedback on Project: Weather App</p>
                <p className="text-xs text-gray-400 mt-1">Apr 24, 11:15 AM</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-obsidian-800 rounded-xl border border-gray-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Achievements</h2>
              <a href="/dashboard/achievements" className="text-sm text-purple-400 hover:text-purple-300">View all</a>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-amber-500 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="font-medium text-white">Phase 3 Advancement</p>
                  <p className="text-xs text-gray-400">Reached Integration & Complexity</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-300 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="font-medium text-white">Community Helper</p>
                  <p className="text-xs text-gray-400">Answered 15+ questions</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <Code className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-300">Code Ninja</p>
                  <p className="text-xs text-gray-400">Complete 5 more puzzles to unlock</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
