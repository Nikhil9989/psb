'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

// Types
interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  isVerified: boolean;
  phoneNumber?: string;
  createdAt: string;
  updatedAt: string;
}

interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

interface AuthContextType {
  user: User | null;
  tokens: AuthTokens | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, newPassword: string) => Promise<void>;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [tokens, setTokens] = useState<AuthTokens | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // We need to check if we're in browser environment
        if (typeof window !== 'undefined') {
          const storedUser = localStorage.getItem('user');
          const storedTokens = localStorage.getItem('tokens');

          if (storedUser && storedTokens) {
            const parsedUser = JSON.parse(storedUser);
            const parsedTokens = JSON.parse(storedTokens);
            setUser(parsedUser);
            setTokens(parsedTokens);
          }
        }
      } catch (error) {
        console.error('Failed to initialize auth state:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate login for demo purposes
      // In production, replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email && password === 'password123') {
        const mockUser = {
          id: '1',
          email: email,
          firstName: 'Test',
          lastName: 'User',
          role: 'student',
          isVerified: true,
          phoneNumber: '',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        
        const mockTokens = {
          accessToken: 'mock-access-token',
          refreshToken: 'mock-refresh-token',
        };
        
        // Store in state
        setUser(mockUser);
        setTokens(mockTokens);
        
        // Store in localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('user', JSON.stringify(mockUser));
          localStorage.setItem('tokens', JSON.stringify(mockTokens));
        }
        
        // Redirect to dashboard
        router.push('/dashboard');
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error: any) {
      setError(error.message || 'Login failed. Please try again.');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Register function
  const register = async (userData: any) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate registration for demo purposes
      // In production, replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Don't auto-login after registration since email verification is required
      router.push('/dashboard');
    } catch (error: any) {
      setError(error.message || 'Registration failed. Please try again.');
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    setIsLoading(true);
    
    try {
      // Simulate logout for demo purposes
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Clear state and localStorage
      setUser(null);
      setTokens(null);
      
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user');
        localStorage.removeItem('tokens');
      }
      
      // Redirect to home
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Forgot password function
  const forgotPassword = async (email: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API call for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Success will be handled by the calling component
    } catch (error: any) {
      setError(error.message || 'Failed to send password reset email.');
      console.error('Forgot password error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Reset password function
  const resetPassword = async (token: string, newPassword: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API call for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Success will be handled by the calling component
    } catch (error: any) {
      setError(error.message || 'Failed to reset password.');
      console.error('Reset password error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Provide the context value
  const contextValue = {
    user,
    tokens,
    isLoading,
    error,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
