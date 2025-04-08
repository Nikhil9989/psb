'use client';

import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Users, 
  FileText, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  BarChart3,
  MessageSquare
} from 'lucide-react';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  
  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: BarChart3 },
    { name: 'Applications', href: '/admin/applications', icon: FileText },
    { name: 'Students', href: '/admin/students', icon: Users },
    { name: 'Messages', href: '/admin/messages', icon: MessageSquare },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-obsidian-900">
      {/* Mobile sidebar toggle */}
      <div className="fixed top-0 left-0 right-0 z-30 bg-obsidian-800 md:hidden border-b border-gold-500/10 flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center group">
          <span className="font-display font-bold text-xl">
            <span className="text-white">SKILL</span>
            <span className="text-gold-500">BRIDGE</span>
          </span>
        </Link>
        
        <button 
          type="button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-obsidian-300 hover:text-white"
        >
          {sidebarOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Sidebar for desktop */}
      <div className="fixed left-0 top-0 bottom-0 w-64 hidden md:block bg-obsidian-800 border-r border-gold-500/10 z-20">
        <div className="h-full flex flex-col">
          <div className="flex items-center h-16 px-6 border-b border-gold-500/10">
            <Link href="/" className="flex items-center group">
              <span className="font-display font-bold text-xl">
                <span className="text-white">SKILL</span>
                <span className="text-gold-500">BRIDGE</span>
              </span>
            </Link>
          </div>
          
          <div className="flex-1 px-3 py-4 overflow-y-auto">
            <nav className="space-y-1">
              {navigation.map((item) => {
                const isActive = 
                  item.href === '/admin' 
                    ? pathname === '/admin' 
                    : pathname.startsWith(item.href);
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                      isActive 
                        ? 'bg-gold-500/20 text-gold-400 border-l-2 border-gold-500' 
                        : 'text-obsidian-300 hover:bg-obsidian-700 hover:text-white'
                    }`}
                  >
                    <item.icon className={`mr-3 h-5 w-5 ${isActive ? 'text-gold-500' : 'text-obsidian-400'}`} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          
          <div className="p-4 border-t border-gold-500/10">
            <Link 
              href="/"
              className="flex items-center px-3 py-2 text-sm font-medium text-obsidian-300 hover:text-white hover:bg-obsidian-700 rounded-md transition-colors"
            >
              <LogOut className="mr-3 h-5 w-5 text-obsidian-400" />
              Back to Site
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-20 md:hidden">
          <div className="fixed inset-0 bg-obsidian-900/80" onClick={() => setSidebarOpen(false)}></div>
          <div className="fixed top-0 left-0 bottom-0 w-64 bg-obsidian-800 border-r border-gold-500/10 pt-14">
            <div className="h-full flex flex-col">
              <div className="flex-1 px-3 py-4 overflow-y-auto">
                <nav className="space-y-1">
                  {navigation.map((item) => {
                    const isActive = 
                      item.href === '/admin' 
                        ? pathname === '/admin' 
                        : pathname.startsWith(item.href);
                    
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                          isActive 
                            ? 'bg-gold-500/20 text-gold-400 border-l-2 border-gold-500' 
                            : 'text-obsidian-300 hover:bg-obsidian-700 hover:text-white'
                        }`}
                        onClick={() => setSidebarOpen(false)}
                      >
                        <item.icon className={`mr-3 h-5 w-5 ${isActive ? 'text-gold-500' : 'text-obsidian-400'}`} />
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>
              
              <div className="p-4 border-t border-gold-500/10">
                <Link 
                  href="/"
                  className="flex items-center px-3 py-2 text-sm font-medium text-obsidian-300 hover:text-white hover:bg-obsidian-700 rounded-md transition-colors"
                  onClick={() => setSidebarOpen(false)}
                >
                  <LogOut className="mr-3 h-5 w-5 text-obsidian-400" />
                  Back to Site
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Main content */}
      <div className="md:pl-64 flex flex-col min-h-screen">
        <main className="flex-1 p-4 md:p-8 pt-16 md:pt-8">
          {children}
        </main>
        
        <footer className="p-4 md:pl-8 border-t border-gold-500/10 text-obsidian-400 text-xs">
          © 2025 SKILL BRIDGE Admin Portal | Version 1.0
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
