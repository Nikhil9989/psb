'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Bell, Search, User, MessageSquare, HelpCircle, LogOut } from 'lucide-react';

export default function DashboardHeader() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  
  return (
    <header className="bg-obsidian-800 border-b border-gray-800 py-3 px-4 md:px-6 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button className="md:hidden text-gray-400 hover:text-white mr-4">
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="relative max-w-md w-full hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-obsidian-700 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button 
            className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-obsidian-700 relative"
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 bg-purple-600 rounded-full w-2 h-2"></span>
          </button>
          
          <button className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-obsidian-700">
            <MessageSquare className="h-5 w-5" />
          </button>
          
          <div className="relative">
            <button 
              className="flex items-center rounded-full text-sm focus:outline-none"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-amber-500 flex items-center justify-center text-white">
                <span>RS</span>
              </div>
            </button>
            
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-obsidian-800 rounded-lg shadow-lg border border-gray-700 py-1 z-20">
                <div className="px-4 py-2 border-b border-gray-700">
                  <p className="text-sm font-medium text-white">Rahul Sharma</p>
                  <p className="text-xs text-gray-400">Web Dev Cohort 2024</p>
                </div>
                
                <Link href="/dashboard/profile" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-obsidian-700">
                  <User className="h-4 w-4 mr-3 text-gray-400" />
                  My Profile
                </Link>
                
                <Link href="/dashboard/help" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-obsidian-700">
                  <HelpCircle className="h-4 w-4 mr-3 text-gray-400" />
                  Help Center
                </Link>
                
                <Link href="/auth/logout" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-obsidian-700">
                  <LogOut className="h-4 w-4 mr-3 text-gray-400" />
                  Sign Out
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {isNotificationsOpen && (
        <div className="absolute right-4 mt-2 w-80 bg-obsidian-800 rounded-lg shadow-lg border border-gray-700 py-1 z-20">
          <div className="px-4 py-2 border-b border-gray-700 flex items-center justify-between">
            <h3 className="text-sm font-medium text-white">Notifications</h3>
            <button className="text-xs text-purple-400 hover:text-purple-300">Mark all as read</button>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            <div className="px-4 py-3 hover:bg-obsidian-700 border-l-4 border-purple-500">
              <p className="text-sm text-white">Your project was featured on the showcase wall!</p>
              <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
            </div>
            <div className="px-4 py-3 hover:bg-obsidian-700">
              <p className="text-sm text-gray-300">New mentor session scheduled for tomorrow</p>
              <p className="text-xs text-gray-400 mt-1">5 hours ago</p>
            </div>
            <div className="px-4 py-3 hover:bg-obsidian-700">
              <p className="text-sm text-gray-300">Rahul commented on your project</p>
              <p className="text-xs text-gray-400 mt-1">Yesterday</p>
            </div>
          </div>
          
          <div className="px-4 py-2 border-t border-gray-700">
            <Link href="/dashboard/notifications" className="text-xs text-purple-400 hover:text-purple-300">
              View all notifications
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
