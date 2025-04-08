'use client';

import React from 'react';
import ApplicationTable from '@/components/admin/ApplicationTable';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

export default function ApplicationsPage() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gold-500/10 pb-5 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Applications</h1>
          <p className="text-obsidian-300 mt-1">Manage and process student applications</p>
        </div>
        
        <Link 
          href="/admin/applications/new" 
          className="bg-gold-500 hover:bg-gold-600 text-obsidian-900 font-medium px-4 py-2 rounded-md flex items-center self-start group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            <PlusCircle className="h-4 w-4 mr-2" />
            New Application
          </span>
          
          {/* Gold shimmer effect */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-500/0 via-gold-500/30 to-gold-500/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
      </div>
      
      <ApplicationTable />
    </div>
  );
}
