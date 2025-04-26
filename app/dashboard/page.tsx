'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, FileText, Users, Award, ChevronRight, Code, PuzzlePiece, Briefcase } from 'lucide-react';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Welcome, Priya!</h1>
        <p className="text-slate-500">
          Track your progress, manage your learning, and build your career.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-medium text-slate-500">Current Phase</span>
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen className="h-5 w-5 text-blue-600" />
            </div>
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-slate-800">2/5</span>
            <span className="ml-2 text-sm text-slate-500">Phases</span>
          </div>
          <div className="mt-2">
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: '40%' }}></div>
            </div>
            <span className="text-xs text-slate-500 mt-1 inline-block">40% Complete</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-medium text-slate-500">Projects</span>
            <div className="p-2 bg-purple-100 rounded-lg">
              <FileText className="h-5 w-5 text-purple-600" />
            </div>
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-slate-800">7</span>
            <span className="ml-2 text-sm text-slate-500">Completed</span>
          </div>
          <div className="mt-2 text-sm text-purple-600 font-medium">
            2 In Progress
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-medium text-slate-500">Mentorship</span>
            <div className="p-2 bg-green-100 rounded-lg">
              <Users className="h-5 w-5 text-green-600" />
            </div>
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-slate-800">5</span>
            <span className="ml-2 text-sm text-slate-500">Sessions</span>
          </div>
          <div className="mt-2 text-sm text-green-600 font-medium">
            Next: April 28, 3:00 PM
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-medium text-slate-500">Certificates</span>
            <div className="p-2 bg-amber-100 rounded-lg">
              <Award className="h-5 w-5 text-amber-600" />
            </div>
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-slate-800">3</span>
            <span className="ml-2 text-sm text-slate-500">Earned</span>
          </div>
          <div className="mt-2 text-sm text-amber-600 font-medium">
            2 In Progress
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <h2 className="text-xl font-semibold text-slate-800 mb-4">Tools & Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Link href="/dashboard/resume-builder" className="group">
          <div className="bg-white rounded-lg shadow p-6 h-full border-2 border-transparent hover:border-amber-500 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-amber-100 rounded-lg">
                <FileText className="h-6 w-6 text-amber-600" />
              </div>
              <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-amber-500 transition-colors" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Resume Builder</h3>
            <p className="text-slate-600 text-sm">Create a professional resume with AI-assisted optimization based on job descriptions.</p>
          </div>
        </Link>

        <Link href="/dashboard/puzzle-solver" className="group">
          <div className="bg-white rounded-lg shadow p-6 h-full border-2 border-transparent hover:border-indigo-500 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <PuzzlePiece className="h-6 w-6 text-indigo-600" />
              </div>
              <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-indigo-500 transition-colors" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Daily Puzzles</h3>
            <p className="text-slate-600 text-sm">Sharpen your skills with daily coding challenges and algorithm problems.</p>
          </div>
        </Link>

        <Link href="/dashboard/projects" className="group">
          <div className="bg-white rounded-lg shadow p-6 h-full border-2 border-transparent hover:border-blue-500 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Project Showcase</h3>
            <p className="text-slate-600 text-sm">Showcase your projects and get feedback from mentors and peers.</p>
          </div>
        </Link>
      </div>

      {/* Upcoming Sessions */}
      <h2 className="text-xl font-semibold text-slate-800 mb-4">Upcoming Sessions</h2>
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <table className="min-w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Session</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Date & Time</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Mentor</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
              <th className="text-right px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-slate-800">React Advanced Concepts</div>
                <div className="text-xs text-slate-500">Web Development</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-slate-800">April 28, 2025</div>
                <div className="text-xs text-slate-500">3:00 PM - 4:30 PM</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-medium text-xs">
                    RK
                  </div>
                  <div className="ml-2">
                    <div className="text-sm font-medium text-slate-800">Rahul Kumar</div>
                    <div className="text-xs text-slate-500">Senior Developer</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                  Confirmed
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                <button className="text-indigo-600 hover:text-indigo-900 font-medium">Join</button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-slate-800">Portfolio Review</div>
                <div className="text-xs text-slate-500">Career Development</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-slate-800">May 2, 2025</div>
                <div className="text-xs text-slate-500">11:00 AM - 12:00 PM</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-medium text-xs">
                    AP
                  </div>
                  <div className="ml-2">
                    <div className="text-sm font-medium text-slate-800">Anjali Patel</div>
                    <div className="text-xs text-slate-500">Career Mentor</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-800">
                  Pending
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                <button className="text-indigo-600 hover:text-indigo-900 font-medium">Confirm</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Current Projects */}
      <h2 className="text-xl font-semibold text-slate-800 mb-4">Current Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-slate-800">E-commerce Platform</h3>
              <p className="text-sm text-slate-500">Web Development</p>
            </div>
            <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
              In Progress
            </span>
          </div>
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-600">Progress</span>
              <span className="text-slate-800 font-medium">75%</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="text-right">
            <Link href="/dashboard/projects/e-commerce" className="text-sm font-medium text-indigo-600 hover:text-indigo-900 inline-flex items-center">
              View Details
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-slate-800">Task Management App</h3>
              <p className="text-sm text-slate-500">React & TypeScript</p>
            </div>
            <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
              In Progress
            </span>
          </div>
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-600">Progress</span>
              <span className="text-slate-800 font-medium">40%</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: '40%' }}></div>
            </div>
          </div>
          <div className="text-right">
            <Link href="/dashboard/projects/task-management" className="text-sm font-medium text-indigo-600 hover:text-indigo-900 inline-flex items-center">
              View Details
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
