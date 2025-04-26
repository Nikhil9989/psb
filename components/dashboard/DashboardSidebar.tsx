'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText, BarChart3, Briefcase, GraduationCap, Users, Settings, FileCheck } from 'lucide-react';

// Dashboard navigation links
const dashboardNavLinks = [
  { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
  { name: 'Learning Paths', href: '/dashboard/learning-paths', icon: GraduationCap },
  { name: 'Resume Builder', href: '/dashboard/resume-builder', icon: FileText },
  { name: 'Projects', href: '/dashboard/projects', icon: Briefcase },
  { name: 'Mentorship', href: '/dashboard/mentorship', icon: Users },
  { name: 'Certifications', href: '/dashboard/certifications', icon: FileCheck },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-slate-900 h-screen fixed left-0 top-0 overflow-y-auto">
      {/* Logo */}
      <div className="p-6 border-b border-slate-800">
        <Link href="/" className="flex items-center group">
          <span className="font-display font-bold text-2xl relative">
            <span className="text-white">SKILL</span>
            <span className="text-amber-500">BRIDGE</span>
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="mt-6 px-4">
        <ul className="space-y-2">
          {dashboardNavLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-amber-500 text-black font-medium'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <link.icon className="mr-3 h-5 w-5" />
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white">
            PS
          </div>
          <div>
            <div className="text-white font-medium">Priya Sharma</div>
            <div className="text-slate-400 text-sm">Web Development</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
