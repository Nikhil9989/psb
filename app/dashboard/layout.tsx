'use client';

import React from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <DashboardSidebar />
      
      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Top Bar */}
        <div className="bg-white h-16 border-b border-slate-200 flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold text-slate-800">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </button>
            <div className="h-8 w-px bg-slate-200"></div>
            <button className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-medium">
                PS
              </div>
              <span className="text-sm text-slate-700">Priya Sharma</span>
            </button>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
