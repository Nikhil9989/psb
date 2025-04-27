// app/components/auth/ProtectedRoute.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading, initialize } = useAuth();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      await initialize();
      setIsChecking(false);
    };

    checkAuth();
  }, [initialize]);

  useEffect(() => {
    if (!isChecking && !isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isChecking, isLoading, isAuthenticated, router]);

  // Show loading state while checking authentication
  if (isChecking || isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-obsidian-900">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-t-4 border-purple-500 border-solid rounded-full animate-spin"></div>
          <p className="text-white mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  // Render children if authenticated
  return <>{children}</>;
};

// app/profile/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { useAuth } from '@/hooks/useAuth';
import { useUser } from '@/hooks/useUser';
import { useToast } from '@/components/ui/Toast';
import { User, Mail, Phone, Calendar, Edit, Save, X } from 'lucide-react';

export default function ProfilePage() {
  const { user } = useAuth();
  const { getUserProfile, updateUserProfile, isLoading, error } = useUser();
  const { showToast } = useToast();
  
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      const profile = await getUserProfile();
      if (profile) {
        setFormData({
          firstName: profile.firstName || '',
          lastName: profile.lastName || '',
          phoneNumber: profile.phoneNumber || '',
        });
      }
    };

    if (user) {
      fetchUserProfile();
    }
  }, [user, getUserProfile]);

  useEffect(() => {
    if (error) {
      showToast(error, 'error');
    }
  }, [error, showToast]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = await updateUserProfile(formData);
    
    if (success) {
      setIsEditing(false);
      showToast('Profile updated successfully', 'success');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-obsidian-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-obsidian-800 shadow rounded-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-800 to-indigo-700 px-6 py-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-white rounded-full p-3">
                    <User className="h-10 w-10 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h1 className="text-2xl font-bold text-white">
                      {user?.firstName} {user?.lastName}
                    </h1>
                    <p className="text-indigo-200">{user?.role}</p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </button>
                  ) : (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setIsEditing(false)}
                        className="flex items-center text-white bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-md"
                      >
                        <X className="h-4 w-4 mr-2" />
                        Cancel
                      </button>
                      <button
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className="flex items-center text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md"
                      >
                        {isLoading ? (
                          <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <Save className="h-4 w-4 mr-2" />
                        )}
                        Save
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Profile Content */}
            <div className="px-6 py-6">
              {isEditing ? (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full bg-obsidian-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full bg-obsidian-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email (Read Only)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={user?.email || ''}
                        readOnly
                        className="w-full bg-obsidian-700 border border-gray-600 rounded-md px-4 py-2 text-gray-400 cursor-not-allowed"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="+1 (123) 456-7890"
                        className="w-full bg-obsidian-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                </form>
              ) : (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-white mb-4">Account Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <Mail className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-400">Email</h3>
                        <p className="mt-1 text-white">{user?.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <Phone className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-400">Phone</h3>
                        <p className="mt-1 text-white">{user?.phoneNumber || 'Not provided'}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <User className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-400">Account Status</h3>
                        <p className="mt-1 text-white">
                          {user?.isVerified ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Verified
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              Pending Verification
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <Calendar className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-400">Member Since</h3>
                        <p className="mt-1 text-white">{user?.createdAt ? formatDate(user.createdAt) : 'N/A'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}