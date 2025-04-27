// app/registration-success/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { MailCheck, ArrowRight } from 'lucide-react';

export default function RegistrationSuccessPage() {
  return (
    <div className="min-h-screen bg-obsidian-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <div className="mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
              SKILL BRIDGE
            </h1>
          </Link>
        </div>
        
        {/* Success Card */}
        <div className="bg-obsidian-800 rounded-xl p-8 border border-gray-800 mb-8">
          <div className="mx-auto w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mb-6">
            <MailCheck className="h-8 w-8 text-green-400" />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-4">Check your email</h2>
          
          <p className="text-gray-300 mb-6">
            We've sent a verification link to your email address. Please check your inbox and click the link to activate your account.
          </p>
          
          <div className="py-4 px-4 bg-obsidian-700/50 rounded-lg text-gray-400 text-sm mb-6">
            <p>If you don't receive the email within a few minutes, please check your spam folder or contact support.</p>
          </div>
          
          <div className="flex flex-col space-y-3">
            <Link 
              href="/login" 
              className="inline-flex items-center justify-center py-3 px-4 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition font-medium"
            >
              <span>Go to Login</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <button 
              className="text-purple-400 hover:text-purple-300 font-medium"
            >
              Resend verification email
            </button>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-sm text-gray-500">
          <p>© 2025 SKILL BRIDGE. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="/help" className="hover:text-gray-400">Help</Link>
            <Link href="/contact" className="hover:text-gray-400">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}