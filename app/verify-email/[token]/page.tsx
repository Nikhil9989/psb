// app/verify-email/[token]/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, XCircle, Loader } from 'lucide-react';
import { authApi } from '@/lib/api/auth';

export default function VerifyEmailPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState<string>('');
  const router = useRouter();
  const params = useParams();
  const token = params.token as string;

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        await authApi.verifyEmail(token);
        setStatus('success');
        setMessage('Your email has been successfully verified!');
      } catch (error: any) {
        setStatus('error');
        setMessage(error.response?.data?.message || 'Email verification failed. The link may be expired or invalid.');
      }
    };

    if (token) {
      verifyEmail();
    }
  }, [token]);

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
        
        {/* Status Card */}
        <div className="bg-obsidian-800 rounded-xl p-8 border border-gray-800 mb-8">
          {status === 'loading' && (
            <>
              <div className="mx-auto w-16 h-16 flex items-center justify-center mb-6">
                <Loader className="h-10 w-10 text-purple-400 animate-spin" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Verifying your email</h2>
              <p className="text-gray-300">Please wait while we verify your email address...</p>
            </>
          )}
          
          {status === 'success' && (
            <>
              <div className="mx-auto w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Email Verified</h2>
              <p className="text-gray-300 mb-6">{message}</p>
              <Link 
                href="/login" 
                className="inline-flex items-center justify-center py-3 px-4 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition font-medium w-full"
              >
                Continue to Login
              </Link>
            </>
          )}
          
          {status === 'error' && (
            <>
              <div className="mx-auto w-16 h-16 bg-red-900/30 rounded-full flex items-center justify-center mb-6">
                <XCircle className="h-8 w-8 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Verification Failed</h2>
              <p className="text-gray-300 mb-6">{message}</p>
              <div className="flex flex-col space-y-3">
                <Link 
                  href="/login" 
                  className="inline-flex items-center justify-center py-3 px-4 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition font-medium"
                >
                  Back to Login
                </Link>
                <button 
                  className="text-purple-400 hover:text-purple-300 font-medium"
                >
                  Resend verification email
                </button>
              </div>
            </>
          )}
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