'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  BookOpen, 
  MessageSquare, 
  Clock, 
  Calendar, 
  CheckCircle, 
  X, 
  Eye,
  Calendar as CalendarIcon,
  Users
} from 'lucide-react';

// Mock application data - in a real app, this would be fetched from a backend
const mockApplicationData = {
  id: 'SB-271503',
  name: 'Rajiv Sharma',
  email: 'rajiv.sharma@gmail.com',
  phone: '+91 98765 43210',
  city: 'Jaipur',
  date: '2025-04-02',
  status: 'reviewing',
  education: 'Bachelor\'s Degree',
  whyJoin: 'I want to join SKILL BRIDGE because I believe it offers the perfect blend of theoretical knowledge and practical application that most traditional programs lack. Having completed my bachelor\'s in computer science, I feel there\'s still a gap in my industry-ready skills, especially in full-stack development. The domain-based approach of SKILL BRIDGE, where multiple related skills are taught together rather than in isolation, is exactly what I need to advance my career in web development.',
  heardFrom: 'College/University',
  additionalInfo: {
    institution: 'Rajasthan Technical University',
    gradYear: '2024',
    programInterest: 'Web Development',
    currentEmployment: 'Freelance Developer',
    referralCode: 'ALUM2023'
  },
  timeline: [
    { date: '2025-04-02', event: 'Application Submitted', actor: 'Rajiv Sharma' },
    { date: '2025-04-03', event: 'Application Reviewed', actor: 'Admin' },
    { date: '2025-04-04', event: 'Status changed to "Reviewing"', actor: 'Admin' }
  ],
  notes: [
    { id: 1, date: '2025-04-03', author: 'Admin', content: 'Strong candidate with good technical background. Has completed several small web development projects. Consider for interview.' }
  ]
};

// Mock application IDs for static generation
const applicationIds = ['SB-271503', 'SB-271504', 'SB-271505']; 

// Status options for dropdown
const statusOptions = [
  { value: 'pending', label: 'Pending', icon: Clock },
  { value: 'reviewing', label: 'Reviewing', icon: Eye },
  { value: 'interview', label: 'Interview', icon: CalendarIcon },
  { value: 'accepted', label: 'Accepted', icon: CheckCircle },
  { value: 'rejected', label: 'Rejected', icon: X }
];

// This function tells Next.js which dynamic routes to pre-render
export function generateStaticParams() {
  return applicationIds.map(id => ({
    id: id
  }));
}

export default function ApplicationDetailPage({ params }: { params: { id: string } }) {
  const [application, setApplication] = useState(mockApplicationData);
  const [newNote, setNewNote] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(application.status);
  
  // In a real app, this would be a server action
  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
    setApplication({
      ...application,
      status,
      timeline: [
        ...application.timeline,
        { 
          date: new Date().toISOString().split('T')[0], 
          event: `Status changed to "${status}"`, 
          actor: 'Admin' 
        }
      ]
    });
  };
  
  // Handle adding a new note
  const handleAddNote = () => {
    if (!newNote.trim()) return;
    
    const newNoteObj = {
      id: application.notes.length + 1,
      date: new Date().toISOString().split('T')[0],
      author: 'Admin',
      content: newNote
    };
    
    setApplication({
      ...application,
      notes: [...application.notes, newNoteObj]
    });
    
    setNewNote('');
  };
  
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
    const StatusIcon = statusOptions.find(option => option.value === status)?.icon || Clock;
    return <StatusIcon className="h-4 w-4 mr-1" />;
  };
  
  return (
    <div>
      {/* Header with navigation and actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gold-500/10 pb-5 mb-8">
        <div className="flex items-center">
          <Link 
            href="/admin/applications" 
            className="text-obsidian-300 hover:text-white mr-3"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">Application {application.id}</h1>
              <span className={`ml-4 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(application.status)}`}>
                {getStatusIcon(application.status)}
                {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
              </span>
            </div>
            <p className="text-obsidian-300 mt-1">Submitted on {new Date(application.date).toLocaleDateString()}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <select
              value={selectedStatus}
              onChange={(e) => handleStatusChange(e.target.value)}
              className="px-4 py-2 bg-obsidian-700 border border-obsidian-600 hover:border-gold-500 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-gold-500 appearance-none pr-8"
            >
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <X className="h-4 w-4 text-obsidian-400" />
            </div>
          </div>
          
          <button className="bg-gold-500 hover:bg-gold-600 text-obsidian-900 font-medium px-4 py-2 rounded-md">
            Contact Applicant
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main application information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-obsidian-800 rounded-xl shadow-gold-glow border border-gold-500/20 overflow-hidden">
            <div className="px-6 py-4 border-b border-gold-500/10">
              <h2 className="font-bold text-white">Personal Information</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 border border-gold-500/30 mr-4 mt-1">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-obsidian-300 text-sm">Full Name</p>
                    <p className="text-white font-medium">{application.name}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 border border-gold-500/30 mr-4 mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-obsidian-300 text-sm">Email Address</p>
                    <p className="text-white font-medium">{application.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 border border-gold-500/30 mr-4 mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-obsidian-300 text-sm">Phone Number</p>
                    <p className="text-white font-medium">{application.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 border border-gold-500/30 mr-4 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-obsidian-300 text-sm">City</p>
                    <p className="text-white font-medium">{application.city}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 border border-gold-500/30 mr-4 mt-1">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-obsidian-300 text-sm">Education</p>
                    <p className="text-white font-medium">{application.education}</p>
                    <p className="text-obsidian-400 text-sm">{application.additionalInfo.institution}, {application.additionalInfo.gradYear}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 border border-gold-500/30 mr-4 mt-1">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-obsidian-300 text-sm">Current Employment</p>
                    <p className="text-white font-medium">{application.additionalInfo.currentEmployment}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Application Motivation */}
          <div className="bg-obsidian-800 rounded-xl shadow-gold-glow border border-gold-500/20 overflow-hidden">
            <div className="px-6 py-4 border-b border-gold-500/10">
              <h2 className="font-bold text-white">Application Motivation</h2>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <p className="text-obsidian-300 text-sm mb-2">Why do you want to join SKILL BRIDGE?</p>
                <p className="text-white">{application.whyJoin}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-obsidian-300 text-sm mb-2">Program Interest</p>
                  <p className="text-white">{application.additionalInfo.programInterest}</p>
                </div>
                <div>
                  <p className="text-obsidian-300 text-sm mb-2">How did you hear about us?</p>
                  <p className="text-white">{application.heardFrom}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Admin Notes */}
          <div className="bg-obsidian-800 rounded-xl shadow-gold-glow border border-gold-500/20 overflow-hidden">
            <div className="px-6 py-4 border-b border-gold-500/10">
              <h2 className="font-bold text-white">Admin Notes</h2>
            </div>
            <div className="p-6">
              {/* Existing notes */}
              <div className="space-y-4 mb-6">
                {application.notes.map((note) => (
                  <div key={note.id} className="bg-obsidian-700 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-gold-400 font-medium">{note.author}</p>
                      <p className="text-obsidian-400 text-sm">{note.date}</p>
                    </div>
                    <p className="text-white">{note.content}</p>
                  </div>
                ))}
              </div>
              
              {/* Add new note */}
              <div>
                <label htmlFor="newNote" className="block text-obsidian-300 text-sm mb-2">
                  Add Note
                </label>
                <textarea 
                  id="newNote" 
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500 mb-3"
                  rows={3}
                  placeholder="Enter your notes about this application..."
                ></textarea>
                <button 
                  onClick={handleAddNote}
                  className="bg-gold-500 hover:bg-gold-600 text-obsidian-900 font-medium px-4 py-2 rounded-md"
                >
                  Add Note
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-obsidian-800 rounded-xl shadow-gold-glow border border-gold-500/20 overflow-hidden">
            <div className="px-6 py-4 border-b border-gold-500/10">
              <h2 className="font-bold text-white">Quick Actions</h2>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-3 bg-obsidian-700 hover:bg-obsidian-600 rounded-lg text-white transition-colors flex items-center">
                  <MessageSquare className="h-5 w-5 mr-3 text-gold-500" />
                  Send Message
                </button>
                <button className="w-full text-left px-4 py-3 bg-obsidian-700 hover:bg-obsidian-600 rounded-lg text-white transition-colors flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-3 text-gold-500" />
                  Schedule Interview
                </button>
                <button className="w-full text-left px-4 py-3 bg-obsidian-700 hover:bg-obsidian-600 rounded-lg text-white transition-colors flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 text-emerald-500" />
                  Accept Application
                </button>
                <button className="w-full text-left px-4 py-3 bg-obsidian-700 hover:bg-obsidian-600 rounded-lg text-white transition-colors flex items-center">
                  <X className="h-5 w-5 mr-3 text-red-500" />
                  Reject Application
                </button>
              </div>
            </div>
          </div>
          
          {/* Application Timeline */}
          <div className="bg-obsidian-800 rounded-xl shadow-gold-glow border border-gold-500/20 overflow-hidden">
            <div className="px-6 py-4 border-b border-gold-500/10">
              <h2 className="font-bold text-white">Application Timeline</h2>
            </div>
            <div className="p-6">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute top-0 bottom-0 left-5 w-0.5 bg-obsidian-600"></div>
                
                {/* Timeline events */}
                <div className="space-y-6">
                  {application.timeline.map((event, index) => (
                    <div key={index} className="relative flex items-start">
                      <div className="absolute top-0 left-5 w-0.5 h-full bg-obsidian-600 -z-10"></div>
                      <div className="h-5 w-5 rounded-full bg-gold-500 border-4 border-obsidian-800 flex-shrink-0 mt-1 z-10"></div>
                      <div className="ml-6">
                        <p className="text-obsidian-400 text-sm">{event.date}</p>
                        <p className="text-white">{event.event}</p>
                        <p className="text-obsidian-300 text-sm">{event.actor}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Referral Information */}
          {application.additionalInfo.referralCode && (
            <div className="bg-obsidian-800 rounded-xl shadow-gold-glow border border-gold-500/20 overflow-hidden">
              <div className="px-6 py-4 border-b border-gold-500/10">
                <h2 className="font-bold text-white">Referral Information</h2>
              </div>
              <div className="p-6">
                <p className="text-obsidian-300 text-sm">Referral Code</p>
                <p className="text-white font-mono bg-obsidian-700 px-3 py-2 rounded mt-1">{application.additionalInfo.referralCode}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}