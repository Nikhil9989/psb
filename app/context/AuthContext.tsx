// app/context/AuthContext.tsx
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { authApi } from '@/lib/api/auth';

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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedUser = localStorage.getItem('user');
        const storedTokens = localStorage.getItem('tokens');

        if (storedUser && storedTokens) {
          const parsedUser = JSON.parse(storedUser);
          const parsedTokens = JSON.parse(storedTokens);
          setUser(parsedUser);
          setTokens(parsedTokens);

          // TODO: Add token refresh mechanism here
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
      const response = await authApi.login({ email, password });
      
      if (response.success) {
        const { user, tokens } = response.data;
        
        // Store in state
        setUser(user);
        setTokens(tokens);
        
        // Store in localStorage
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('tokens', JSON.stringify(tokens));
        
        // Redirect to dashboard
        router.push('/dashboard');
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Login failed. Please try again.');
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
      const response = await authApi.register(userData);
      
      if (response.success) {
        // Don't auto-login after registration since email verification is required
        router.push('/registration-success');
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Registration failed. Please try again.');
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    setIsLoading(true);
    
    try {
      if (tokens?.refreshToken) {
        await authApi.logout(tokens.refreshToken);
      }
      
      // Clear state and localStorage
      setUser(null);
      setTokens(null);
      localStorage.removeItem('user');
      localStorage.removeItem('tokens');
      
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
      await authApi.forgotPassword(email);
      // Success will be handled by the calling component
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to send password reset email.');
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
      await authApi.resetPassword(token, newPassword);
      // Success will be handled by the calling component
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to reset password.');
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