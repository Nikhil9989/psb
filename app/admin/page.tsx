'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Users, 
  FileText, 
  CheckCircle, 
  Clock, 
  Calendar, 
  ChevronRight, 
  ArrowUpRight, 
  ArrowDown, 
  ArrowUp,
  Eye 
} from 'lucide-react';

export default function AdminDashboard() {
  // Mock data for dashboard
  const stats = [
    { 
      name: 'Total Applications', 
      value: '156', 
      icon: FileText, 
      change: '+12.5%', 
      trend: 'up', 
      link: '/admin/applications' 
    },
    { 
      name: 'Under Review', 
      value: '42', 
      icon: Eye, 
      change: '+5.2%', 
      trend: 'up', 
      link: '/admin/applications?status=reviewing' 
    },
    { 
      name: 'Accepted', 
      value: '68', 
      icon: CheckCircle, 
      change: '+18.7%', 
      trend: 'up', 
      link: '/admin/applications?status=accepted' 
    },
    { 
      name: 'Upcoming Interviews', 
      value: '12', 
      icon: Calendar, 
      change: '-3.4%', 
      trend: 'down', 
      link: '/admin/applications?status=interview' 
    },
  ];
  
  const recentApplications = [
    { id: 'SB-482910', name: 'Raj Verma', date: '2025-04-05', status: 'pending' },
    { id: 'SB-564782', name: 'Shilpa Reddy', date: '2025-04-06', status: 'pending' },
    { id: 'SB-271503', name: 'Rajiv Sharma', date: '2025-04-02', status: 'reviewing' },
    { id: 'SB-384921', name: 'Priya Patel', date: '2025-04-03', status: 'pending' },
    { id: 'SB-192834', name: 'Vikram Singh', date: '2025-04-01', status: 'interview' },
  ];
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'text-blue-400 bg-blue-900/20 border-blue-400/30';
      case 'reviewing':
        return 'text-yellow-400 bg-yellow-900/20 border-yellow-400/30';
      case 'interview':
        return 'text-purple-400 bg-purple-900/20 border-purple-400/30';
      case 'accepted':
        return 'text-green-400 bg-green-900/20 border-green-400/30';
      case 'rejected':
        return 'text-red-400 bg-red-900/20 border-red-400/30';
      default:
        return 'text-gray-400 bg-gray-900/20 border-gray-400/30';
    }
  };
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4 mr-1" />;
      case 'reviewing':
        return <Eye className="h-4 w-4 mr-1" />;
      case 'interview':
        return <Calendar className="h-4 w-4 mr-1" />;
      case 'accepted':
        return <CheckCircle className="h-4 w-4 mr-1" />;
      default:
        return null;
    }
  };
  
  return (
    <div>
      <div className="border-b border-gold-500/10 pb-5 mb-8">
        <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
        <p className="text-obsidian-300 mt-1">Welcome back, Admin! Here's what's happening today.</p>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-obsidian-800 rounded-xl shadow-gold-glow border border-gold-500/20 p-6 relative overflow-hidden group hover:border-gold-500/40 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-xl -mr-16 -mt-16"></div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 border border-gold-500/30">
                <stat.icon className="h-5 w-5" />
              </div>
              <div className="ml-3">
                <p className="text-obsidian-300 text-sm font-medium">{stat.name}</p>
                <div className="flex items-center">
                  <p className="text-white text-2xl font-bold">{stat.value}</p>
                  <span className={`ml-2 text-xs font-medium flex items-center ${
                    stat.trend === 'up' ? 'text-emerald-500' : 'text-red-500'
                  }`}>
                    {stat.trend === 'up' ? (
                      <ArrowUp className="h-3 w-3 mr-0.5" />
                    ) : (
                      <ArrowDown className="h-3 w-3 mr-0.5" />
                    )}
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
            
            <Link 
              href={stat.link} 
              className="mt-4 text-xs text-gold-400 hover:text-gold-300 flex items-center justify-end font-medium group-hover:translate-x-0.5 transition-transform"
            >
              View details
              <ChevronRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        ))}
      </div>
      
      {/* Recent Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent Applications */}
        <div className="xl:col-span-2 bg-obsidian-800 rounded-xl shadow-gold-glow border border-gold-500/20 overflow-hidden">
          <div className="px-6 py-5 flex justify-between items-center border-b border-gold-500/10">
            <h2 className="font-bold text-white">Recent Applications</h2>
            <Link 
              href="/admin/applications" 
              className="text-gold-400 hover:text-gold-300 text-sm font-medium flex items-center"
            >
              View all
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-obsidian-200">
              <thead className="text-xs uppercase text-obsidian-300 bg-obsidian-700/50">
                <tr>
                  <th scope="col" className="px-6 py-3">Application ID</th>
                  <th scope="col" className="px-6 py-3">Applicant</th>
                  <th scope="col" className="px-6 py-3">Date</th>
                  <th scope="col" className="px-6 py-3">Status</th>
                  <th scope="col" className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentApplications.map((application) => (
                  <tr key={application.id} className="border-b border-obsidian-700 hover:bg-obsidian-700/50">
                    <td className="px-6 py-4 font-mono text-obsidian-300">{application.id}</td>
                    <td className="px-6 py-4 font-medium text-white">{application.name}</td>
                    <td className="px-6 py-4">{new Date(application.date).toLocaleDateString()}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(application.status)}`}>
                        {getStatusIcon(application.status)}
                        {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Link 
                        href={`/admin/applications/${application.id}`} 
                        className="text-gold-400 hover:text-gold-300 font-medium text-xs"
                      >
                        Review
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Quick Links & Tasks */}
        <div className="bg-obsidian-800 rounded-xl shadow-gold-glow border border-gold-500/20 overflow-hidden">
          <div className="px-6 py-5 border-b border-gold-500/10">
            <h2 className="font-bold text-white">Quick Actions</h2>
          </div>
          <div className="p-6">
            <div className="grid gap-3">
              <Link 
                href="/admin/applications/new" 
                className="flex items-center p-4 bg-obsidian-700 hover:bg-obsidian-600 rounded-lg transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 border border-gold-500/30">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <p className="text-white font-medium">Create New Application</p>
                  <p className="text-obsidian-300 text-sm">Manually add a new applicant</p>
                </div>
              </Link>
              
              <Link 
                href="/admin/applications?status=reviewing" 
                className="flex items-center p-4 bg-obsidian-700 hover:bg-obsidian-600 rounded-lg transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 border border-gold-500/30">
                  <Eye className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <p className="text-white font-medium">Review Applications</p>
                  <p className="text-obsidian-300 text-sm">42 applications to review</p>
                </div>
              </Link>
              
              <Link 
                href="/admin/applications?status=interview" 
                className="flex items-center p-4 bg-obsidian-700 hover:bg-obsidian-600 rounded-lg transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 border border-gold-500/30">
                  <Calendar className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <p className="text-white font-medium">Manage Interviews</p>
                  <p className="text-obsidian-300 text-sm">12 upcoming interviews</p>
                </div>
              </Link>
              
              <Link 
                href="/admin/settings" 
                className="flex items-center p-4 bg-obsidian-700 hover:bg-obsidian-600 rounded-lg transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 border border-gold-500/30">
                  <Users className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <p className="text-white font-medium">Manage Team</p>
                  <p className="text-obsidian-300 text-sm">8 team members</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cohort Progress */}
      <div className="mt-8 bg-obsidian-800 rounded-xl shadow-gold-glow border border-gold-500/20 overflow-hidden">
        <div className="px-6 py-5 border-b border-gold-500/10">
          <h2 className="font-bold text-white">Founding Cohort Progress</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-obsidian-700 rounded-lg p-4">
              <p className="text-obsidian-300 text-sm font-medium mb-1">Target Size</p>
              <p className="text-white text-xl font-bold">120 Students</p>
              <div className="w-full bg-obsidian-600 rounded-full h-2.5 mt-3">
                <div className="bg-gold-500 h-2.5 rounded-full" style={{ width: '57%' }}></div>
              </div>
              <p className="text-obsidian-400 text-xs mt-2">
                <span className="text-gold-400 font-medium">68</span>/120 enrolled
              </p>
            </div>
            
            <div className="bg-obsidian-700 rounded-lg p-4">
              <p className="text-obsidian-300 text-sm font-medium mb-1">Application Rate</p>
              <p className="text-white text-xl font-bold">26 / week</p>
              <div className="flex items-center text-emerald-500 text-xs mt-1">
                <ArrowUp className="h-3 w-3 mr-1" />
                <span>+15% vs. previous week</span>
              </div>
            </div>
            
            <div className="bg-obsidian-700 rounded-lg p-4">
              <p className="text-obsidian-300 text-sm font-medium mb-1">Acceptance Rate</p>
              <p className="text-white text-xl font-bold">43.5%</p>
              <div className="flex items-center text-emerald-500 text-xs mt-1">
                <ArrowUp className="h-3 w-3 mr-1" />
                <span>+2.5% vs. target</span>
              </div>
            </div>
            
            <div className="bg-obsidian-700 rounded-lg p-4">
              <p className="text-obsidian-300 text-sm font-medium mb-1">Time to Decision</p>
              <p className="text-white text-xl font-bold">4.2 days</p>
              <div className="flex items-center text-emerald-500 text-xs mt-1">
                <ArrowDown className="h-3 w-3 mr-1" />
                <span>-0.8 days vs. target</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
