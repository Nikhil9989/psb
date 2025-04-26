import React, { ReactNode } from 'react';
import Link from 'next/link';
import { 
  Home, 
  BookOpen, 
  Users, 
  Briefcase, 
  MessageSquare, 
  Award, 
  Settings,
  Puzzle, // Changed from PuzzlePiece
  Image,
  Rss
} from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 h-screen fixed left-0 top-0 overflow-y-auto">
        <div className="p-6">
          <Link href="/" className="text-xl font-bold text-white flex items-center">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">SKILL</span>
            <span>BRIDGE</span>
          </Link>
        </div>
        
        <nav className="mt-6">
          <div className="px-4 mb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Main
          </div>
          <Link href="/dashboard" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition">
            <Home className="h-5 w-5 mr-3" />
            <span>Dashboard</span>
          </Link>
          <Link href="/dashboard/learning-path" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition">
            <BookOpen className="h-5 w-5 mr-3" />
            <span>Learning Path</span>
          </Link>
          <Link href="/dashboard/mentorship" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition">
            <Users className="h-5 w-5 mr-3" />
            <span>Mentorship</span>
          </Link>
          <Link href="/dashboard/projects" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition">
            <Briefcase className="h-5 w-5 mr-3" />
            <span>Projects</span>
          </Link>
          <Link href="/dashboard/community" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition">
            <MessageSquare className="h-5 w-5 mr-3" />
            <span>Community</span>
          </Link>
          <Link href="/dashboard/certificates" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition">
            <Award className="h-5 w-5 mr-3" />
            <span>Certificates</span>
          </Link>
          
          <div className="px-4 mt-8 mb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Features
          </div>
          <Link href="/dashboard/puzzle-solver" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition">
            <Puzzle className="h-5 w-5 mr-3" /> {/* Changed from PuzzlePiece to Puzzle */}
            <span>Puzzle Solver</span>
          </Link>
          <Link href="/dashboard/showcase" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition">
            <Image className="h-5 w-5 mr-3" />
            <span>Showcase</span>
          </Link>
          <Link href="/dashboard/tech-feed" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition">
            <Rss className="h-5 w-5 mr-3" />
            <span>Tech Feed</span>
          </Link>
          
          <div className="px-4 mt-8 mb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Account
          </div>
          <Link href="/dashboard/settings" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition">
            <Settings className="h-5 w-5 mr-3" />
            <span>Settings</span>
          </Link>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="pl-64 w-full">
        {/* Top header */}
        <header className="bg-gray-800 h-16 flex items-center justify-between px-6 shadow-md">
          <div>
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center">
            <div className="relative mr-4">
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
              <button className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
            </div>
            <div className="flex items-center">
              <img src="/api/placeholder/40/40" alt="User" className="h-8 w-8 rounded-full mr-2" />
              <span className="text-sm font-medium">John Doe</span>
            </div>
          </div>
        </header>
        
        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;