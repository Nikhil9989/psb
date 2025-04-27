// app/signup/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, UserPlus } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: ''
  });
  
  const { register, isLoading, error } = useAuth();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(formData);
  };
  
  return (
    <div className="min-h-screen bg-obsidian-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
              SKILL BRIDGE
            </h1>
          </Link>
        </div>
        
        {/* Signup Card */}
        <div className="bg-obsidian-800 rounded-xl p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-6">Create your account</h2>
          
          {error && (
            <div className="bg-red-900/30 border border-red-500/30 text-red-300 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              {/* Name Fields - Side by Side */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full bg-obsidian-700 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full bg-obsidian-700 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full bg-obsidian-700 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  required
                />
              </div>
              
              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a strong password"
                    className="w-full bg-obsidian-700 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-400">Must be at least 8 characters with a number and symbol.</p>
              </div>
              
              {/* Phone Number Field (Optional) */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number <span className="text-gray-500">(Optional)</span>
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+1 (123) 456-7890"
                  className="w-full bg-obsidian-700 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              
              {/* Terms and Conditions Checkbox */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="accent-purple-600 h-4 w-4 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-400">
                    I agree to the <Link href="/terms" className="text-purple-400 hover:text-purple-300">Terms of Service</Link> and <Link href="/privacy" className="text-purple-400 hover:text-purple-300">Privacy Policy</Link>
                  </label>
                </div>
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex items-center justify-center py-3 px-4 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition font-medium ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <>
                    <span className="mr-2">Creating account</span>
                    <div className="animate-spin h-5 w-5 border-2 border-white border-opacity-50 border-t-transparent rounded-full"></div>
                  </>
                ) : (
                  <>
                    <span>Create Account</span>
                    <UserPlus className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </div>
          </form>
          
          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link href="/login" className="text-purple-400 hover:text-purple-300 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2025 SKILL BRIDGE. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="/terms" className="hover:text-gray-400">Terms</Link>
            <Link href="/privacy" className="hover:text-gray-400">Privacy</Link>
            <Link href="/help" className="hover:text-gray-400">Help</Link>
          </div>
        </div>
      </div>
    </div>
  );
}