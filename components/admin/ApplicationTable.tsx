'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, 
  ChevronUp, 
  Eye, 
  Clock, 
  Check, 
  X, 
  Search, 
  Filter, 
  Calendar,
  ArrowUpDown
} from 'lucide-react';

// Application status types
type Status = 'pending' | 'reviewing' | 'interview' | 'accepted' | 'rejected';

// Mock application data
interface Application {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  date: string;
  status: Status;
  education: string;
}

const mockApplications: Application[] = [
  {
    id: 'SB-271503',
    name: 'Rajiv Sharma',
    email: 'rajiv.sharma@gmail.com',
    phone: '+91 98765 43210',
    city: 'Jaipur',
    date: '2025-04-02',
    status: 'reviewing',
    education: 'Bachelor\'s Degree'
  },
  {
    id: 'SB-384921',
    name: 'Priya Patel',
    email: 'priya.patel@gmail.com',
    phone: '+91 87654 32109',
    city: 'Ahmedabad',
    date: '2025-04-03',
    status: 'pending',
    education: 'Master\'s Degree'
  },
  {
    id: 'SB-192834',
    name: 'Vikram Singh',
    email: 'vikram.singh@gmail.com',
    phone: '+91 76543 21098',
    city: 'Lucknow',
    date: '2025-04-01',
    status: 'interview',
    education: 'Bachelor\'s Degree'
  },
  {
    id: 'SB-594823',
    name: 'Ananya Desai',
    email: 'ananya.desai@gmail.com',
    phone: '+91 65432 10987',
    city: 'Indore',
    date: '2025-04-04',
    status: 'pending',
    education: 'High School'
  },
  {
    id: 'SB-827301',
    name: 'Mohammed Khan',
    email: 'mohammed.khan@gmail.com',
    phone: '+91 54321 09876',
    city: 'Bhopal',
    date: '2025-03-31',
    status: 'accepted',
    education: 'Bachelor\'s Degree'
  },
  {
    id: 'SB-371928',
    name: 'Sneha Gupta',
    email: 'sneha.gupta@gmail.com',
    phone: '+91 43210 98765',
    city: 'Nagpur',
    date: '2025-03-30',
    status: 'rejected',
    education: 'Diploma'
  },
  {
    id: 'SB-482910',
    name: 'Raj Verma',
    email: 'raj.verma@gmail.com',
    phone: '+91 32109 87654',
    city: 'Ranchi',
    date: '2025-04-05',
    status: 'pending',
    education: 'Bachelor\'s Degree'
  },
  {
    id: 'SB-564782',
    name: 'Shilpa Reddy',
    email: 'shilpa.reddy@gmail.com',
    phone: '+91 21098 76543',
    city: 'Vijayawada',
    date: '2025-04-06',
    status: 'pending',
    education: 'Master\'s Degree'
  },
];

const getStatusColor = (status: Status) => {
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

const getStatusIcon = (status: Status) => {
  switch (status) {
    case 'pending':
      return <Clock className="h-4 w-4 mr-1" />;
    case 'reviewing':
      return <Eye className="h-4 w-4 mr-1" />;
    case 'interview':
      return <Calendar className="h-4 w-4 mr-1" />;
    case 'accepted':
      return <Check className="h-4 w-4 mr-1" />;
    case 'rejected':
      return <X className="h-4 w-4 mr-1" />;
    default:
      return null;
  }
};

const ApplicationTable = () => {
  const [applications, setApplications] = useState<Application[]>(mockApplications);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof Application>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [statusFilter, setStatusFilter] = useState<Status | 'all'>('all');
  
  // Filter applications based on search term and status
  const filteredApplications = applications.filter(app => {
    const matchesSearch = 
      app.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.city.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  // Sort applications
  const sortedApplications = [...filteredApplications].sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });
  
  // Toggle sort direction and field
  const handleSort = (field: keyof Application) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  // Update application status
  const updateStatus = (id: string, newStatus: Status) => {
    setApplications(applications.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    ));
  };
  
  return (
    <div className="bg-obsidian-800 rounded-xl shadow-gold-glow border border-gold-500/20 overflow-hidden">
      {/* Filters and Search */}
      <div className="p-4 border-b border-gold-500/10 bg-obsidian-800/90">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-obsidian-400" />
            </div>
            <input
              type="text"
              placeholder="Search applications..."
              className="w-full py-2 pl-10 pr-4 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-4 w-4 text-obsidian-400" />
              </div>
              <select
                className="pl-10 pr-4 py-2 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-gold-500 appearance-none"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as Status | 'all')}
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="reviewing">Reviewing</option>
                <option value="interview">Interview</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown className="h-4 w-4 text-obsidian-400" />
              </div>
            </div>
            
            <button className="bg-gold-500/20 hover:bg-gold-500/30 text-gold-400 px-4 py-2 rounded-md font-medium text-sm transition-colors">
              Export
            </button>
          </div>
        </div>
      </div>
      
      {/* Applications Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-obsidian-200">
          <thead className="text-xs uppercase bg-obsidian-700/50 text-obsidian-300 border-b border-gold-500/10">
            <tr>
              <th scope="col" className="px-4 py-3 cursor-pointer" onClick={() => handleSort('id')}>
                <div className="flex items-center">
                  ID
                  <ArrowUpDown className="ml-1 h-4 w-4" />
                </div>
              </th>
              <th scope="col" className="px-4 py-3 cursor-pointer" onClick={() => handleSort('name')}>
                <div className="flex items-center">
                  Applicant
                  <ArrowUpDown className="ml-1 h-4 w-4" />
                </div>
              </th>
              <th scope="col" className="px-4 py-3 cursor-pointer" onClick={() => handleSort('date')}>
                <div className="flex items-center">
                  Date
                  <ArrowUpDown className="ml-1 h-4 w-4" />
                </div>
              </th>
              <th scope="col" className="px-4 py-3 cursor-pointer" onClick={() => handleSort('city')}>
                <div className="flex items-center">
                  City
                  <ArrowUpDown className="ml-1 h-4 w-4" />
                </div>
              </th>
              <th scope="col" className="px-4 py-3 cursor-pointer" onClick={() => handleSort('status')}>
                <div className="flex items-center">
                  Status
                  <ArrowUpDown className="ml-1 h-4 w-4" />
                </div>
              </th>
              <th scope="col" className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedApplications.length > 0 ? (
              sortedApplications.map((application) => (
                <tr key={application.id} className="border-b border-obsidian-700 hover:bg-obsidian-700/50">
                  <td className="px-4 py-3 font-mono text-obsidian-300">{application.id}</td>
                  <td className="px-4 py-3">
                    <div>
                      <div className="font-medium text-white">{application.name}</div>
                      <div className="text-xs text-obsidian-400">{application.email}</div>
                    </div>
                  </td>
                  <td className="px-4 py-3">{new Date(application.date).toLocaleDateString()}</td>
                  <td className="px-4 py-3">{application.city}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(application.status)}`}>
                      {getStatusIcon(application.status)}
                      {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Link 
                        href={`/admin/applications/${application.id}`}
                        className="text-gold-400 hover:text-gold-300 bg-gold-500/10 hover:bg-gold-500/20 p-1.5 rounded transition-colors"
                      >
                        <Eye className="h-4 w-4" />
                      </Link>
                      <div className="relative group">
                        <button className="text-obsidian-300 hover:text-white bg-obsidian-700 hover:bg-obsidian-600 p-1.5 rounded transition-colors">
                          <ChevronDown className="h-4 w-4" />
                        </button>
                        <div className="absolute right-0 mt-1 w-48 bg-obsidian-700 border border-gold-500/20 rounded-md shadow-lg z-10 hidden group-hover:block">
                          <div className="py-1">
                            {application.status !== 'pending' && (
                              <button 
                                className="block w-full text-left px-4 py-2 text-sm text-obsidian-200 hover:bg-obsidian-600"
                                onClick={() => updateStatus(application.id, 'pending')}
                              >
                                Mark as Pending
                              </button>
                            )}
                            {application.status !== 'reviewing' && (
                              <button 
                                className="block w-full text-left px-4 py-2 text-sm text-obsidian-200 hover:bg-obsidian-600"
                                onClick={() => updateStatus(application.id, 'reviewing')}
                              >
                                Mark as Reviewing
                              </button>
                            )}
                            {application.status !== 'interview' && (
                              <button 
                                className="block w-full text-left px-4 py-2 text-sm text-obsidian-200 hover:bg-obsidian-600"
                                onClick={() => updateStatus(application.id, 'interview')}
                              >
                                Schedule Interview
                              </button>
                            )}
                            {application.status !== 'accepted' && (
                              <button 
                                className="block w-full text-left px-4 py-2 text-sm text-green-400 hover:bg-obsidian-600"
                                onClick={() => updateStatus(application.id, 'accepted')}
                              >
                                Accept Application
                              </button>
                            )}
                            {application.status !== 'rejected' && (
                              <button 
                                className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-obsidian-600"
                                onClick={() => updateStatus(application.id, 'rejected')}
                              >
                                Reject Application
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-obsidian-400">
                  No applications found matching your search criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="p-4 border-t border-gold-500/10 flex items-center justify-between">
        <div className="text-sm text-obsidian-400">
          Showing <span className="font-medium text-white">{sortedApplications.length}</span> of <span className="font-medium text-white">{applications.length}</span> applications
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-1.5 bg-obsidian-700 hover:bg-obsidian-600 text-obsidian-300 hover:text-white rounded transition-colors">
            <ChevronDown className="h-5 w-5 transform rotate-90" />
          </button>
          <button className="p-1.5 bg-gold-500/20 hover:bg-gold-500/30 text-gold-400 hover:text-gold-300 rounded transition-colors">
            1
          </button>
          <button className="p-1.5 bg-obsidian-700 hover:bg-obsidian-600 text-obsidian-300 hover:text-white rounded transition-colors">
            2
          </button>
          <button className="p-1.5 bg-obsidian-700 hover:bg-obsidian-600 text-obsidian-300 hover:text-white rounded transition-colors">
            <ChevronDown className="h-5 w-5 transform -rotate-90" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationTable;