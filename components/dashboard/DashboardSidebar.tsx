'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Layout, Book, Award, FileText, Users, Zap, BarChart2, BookOpen, Puzzle } from 'lucide-react';

const navItems = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: Layout
  },
  {
    label: 'Learning Path',
    href: '/dashboard/learning-path',
    icon: Book
  },
  {
    label: 'Puzzle Solver',
    href: '/dashboard/puzzle-solver',
    icon: Puzzle // Changed from PuzzlePiece to Puzzle
  },
  {
    label: 'Showcase',
    href: '/dashboard/showcase',
    icon: Award
  },
  {
    label: 'Tech Feed',
    href: '/dashboard/tech-feed',
    icon: Zap
  },
  {
    label: 'Community',
    href: '/dashboard/community',
    icon: Users
  },
  {
    label: 'Resources',
    href: '/dashboard/resources',
    icon: FileText
  },
  {
    label: 'Progress',
    href: '/dashboard/progress',
    icon: BarChart2
  },
  {
    label: 'Courses',
    href: '/dashboard/courses',
    icon: BookOpen
  }
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  
  return (
    <aside className="w-64 bg-obsidian-800 border-r border-gray-800 hidden md:block overflow-y-auto">
      <div className="p-6">
        <Link href="/" className="flex items-center">
          <span className="font-extrabold text-xl bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
            SKILL BRIDGE
          </span>
        </Link>
      </div>
      
      <nav className="mt-6">
        <ul>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className={`flex items-center px-6 py-3 text-sm ${
                    isActive 
                      ? 'bg-purple-900/30 border-l-4 border-purple-500 font-medium text-white' 
                      : 'text-gray-400 hover:bg-obsidian-700 hover:text-gray-200'
                  }`}
                >
                  <item.icon className={`h-5 w-5 ${isActive ? 'text-purple-400' : 'text-gray-500'} mr-3`} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="px-6 py-4 mt-auto">
        <div className="bg-gradient-to-br from-purple-900/30 to-amber-900/30 rounded-lg p-4 border border-purple-500/20">
          <h3 className="font-medium text-purple-300 mb-2">Need Help?</h3>
          <p className="text-xs text-gray-400 mb-3">
            Contact your mentor or visit our help center for assistance.
          </p>
          <Link 
            href="/dashboard/help"
            className="text-xs text-purple-400 hover:text-purple-300 font-medium"
          >
            Visit Help Center →
          </Link>
        </div>
      </div>
    </aside>
  );
}