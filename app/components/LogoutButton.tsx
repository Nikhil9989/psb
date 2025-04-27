// app/components/LogoutButton.tsx
'use client';

import React from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function LogoutButton({ className = '' }: { className?: string }) {
  const { logout, isLoading } = useAuth();
  
  const handleLogout = async () => {
    await logout();
  };
  
  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className={`flex items-center space-x-2 text-gray-300 hover:text-white transition-colors ${className}`}
    >
      <LogOut className="h-5 w-5" />
      <span>{isLoading ? 'Logging out...' : 'Log out'}</span>
    </button>
  );
}