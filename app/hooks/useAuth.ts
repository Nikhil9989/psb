// app/hooks/useAuth.ts
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import apiClient from '@/lib/api/axiosConfig';

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

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

interface LoginResponse {
  user: User;
  tokens: Tokens;
}

interface AuthState {
  user: User | null;
  tokens: Tokens | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export const useAuth = () => {
  const router = useRouter();
  const [state, setState] = useState<AuthState>({
    user: null,
    tokens: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  });

  // Initialize auth state from localStorage
  const initialize = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true }));
    
    try {
      const storedUser = localStorage.getItem('user');
      const storedTokens = localStorage.getItem('tokens');

      if (storedUser && storedTokens) {
        setState({
          user: JSON.parse(storedUser),
          tokens: JSON.parse(storedTokens),
          isAuthenticated: true,
          isLoading: false,
          error: null,
        });
      } else {
        setState({
          user: null,
          tokens: null,
          isAuthenticated: false,
          isLoading: false,
          error: null,
        });
      }
    } catch (error) {
      console.error('Failed to initialize auth state:', error);
      setState({
        user: null,
        tokens: null,
        isAuthenticated: false,
        isLoading: false,
        error: 'Failed to initialize authentication state.',
      });
    }
  }, []);

  // Login function
  const login = useCallback(async (email: string, password: string) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const response = await apiClient.post<{ success: boolean; data: LoginResponse; message: string }>(
        '/api/v1/auth/login',
        { email, password }
      );
      
      if (response.data.success) {
        const { user, tokens } = response.data.data;
        
        // Store in state
        setState({
          user,
          tokens,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        });
        
        // Store in localStorage
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('tokens', JSON.stringify(tokens));
        
        // Redirect to dashboard
        router.push('/dashboard');
        return true;
      } else {
        throw new Error(response.data.message);
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Login failed. Please try again.';
      setState(prev => ({ ...prev, isLoading: false, error: errorMessage }));
      return false;
    }
  }, [router]);

  // Register function
  const register = useCallback(async (userData: any) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const response = await apiClient.post('/api/v1/auth/register', userData);
      
      if (response.data.success) {
        setState(prev => ({ ...prev, isLoading: false }));
        router.push('/registration-success');
        return true;
      } else {
        throw new Error(response.data.message);
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Registration failed. Please try again.';
      setState(prev => ({ ...prev, isLoading: false, error: errorMessage }));
      return false;
    }
  }, [router]);

  // Logout function
  const logout = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true }));
    
    try {
      if (state.tokens?.refreshToken) {
        await apiClient.post('/api/v1/auth/logout', { refreshToken: state.tokens.refreshToken });
      }
      
      // Clear state and localStorage
      setState({
        user: null,
        tokens: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      });
      
      localStorage.removeItem('user');
      localStorage.removeItem('tokens');
      
      // Redirect to home
      router.push('/');
      return true;
    } catch (error) {
      console.error('Logout error:', error);
      setState(prev => ({ ...prev, isLoading: false }));
      
      // Still clear everything on error
      localStorage.removeItem('user');
      localStorage.removeItem('tokens');
      router.push('/');
      return false;
    }
  }, [router, state.tokens]);

  // Forgot password function
  const forgotPassword = useCallback(async (email: string) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const response = await apiClient.post('/api/v1/auth/forgot-password', { email });
      setState(prev => ({ ...prev, isLoading: false }));
      return response.data.success;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to send password reset email.';
      setState(prev => ({ ...prev, isLoading: false, error: errorMessage }));
      return false;
    }
  }, []);

  // Reset password function
  const resetPassword = useCallback(async (token: string, newPassword: string) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const response = await apiClient.post('/api/v1/auth/reset-password', { token, newPassword });
      setState(prev => ({ ...prev, isLoading: false }));
      return response.data.success;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to reset password.';
      setState(prev => ({ ...prev, isLoading: false, error: errorMessage }));
      return false;
    }
  }, []);

  // Verify email function
  const verifyEmail = useCallback(async (token: string) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const response = await apiClient.get(`/api/v1/auth/verify-email/${token}`);
      setState(prev => ({ ...prev, isLoading: false }));
      return response.data.success;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to verify email.';
      setState(prev => ({ ...prev, isLoading: false, error: errorMessage }));
      return false;
    }
  }, []);

  return {
    ...state,
    initialize,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    verifyEmail,
  };
};

// app/hooks/useApiProtected.ts
import { useEffect } from 'react';
import apiClient from '@/lib/api/axiosConfig';
import { useAuth } from './useAuth';
import { useRouter } from 'next/navigation';

/**
 * Hook for making authenticated API requests
 * Automatically handles token refresh and redirects to login on auth failures
 */
export const useApiProtected = () => {
  const { tokens, logout } = useAuth();
  const router = useRouter();

  // Set up auth interceptors
  useEffect(() => {
    const requestInterceptor = apiClient.interceptors.request.use(
      (config) => {
        // Inject the authorization header if we have a token
        if (tokens?.accessToken) {
          config.headers.Authorization = `Bearer ${tokens.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = apiClient.interceptors.response.use(
      (response) => response,
      async (error) => {
        // Handle 401 errors by logging out
        if (error.response?.status === 401) {
          await logout();
          router.push('/login');
        }
        return Promise.reject(error);
      }
    );

    // Clean up interceptors when component unmounts
    return () => {
      apiClient.interceptors.request.eject(requestInterceptor);
      apiClient.interceptors.response.eject(responseInterceptor);
    };
  }, [tokens, logout, router]);

  return apiClient;
};

// app/hooks/useUser.ts
import { useState, useCallback } from 'react';
import { useApiProtected } from './useApiProtected';

/**
 * Hook for user-related API operations
 */
export const useUser = () => {
  const apiClient = useApiProtected();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Get current user profile
  const getUserProfile = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await apiClient.get('/api/v1/users/me');
      setIsLoading(false);
      return response.data.data;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to fetch user profile';
      setError(errorMessage);
      setIsLoading(false);
      return null;
    }
  }, [apiClient]);

  // Update user profile
  const updateUserProfile = useCallback(async (userData: any) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await apiClient.put('/api/v1/users/me', userData);
      setIsLoading(false);
      return response.data.success;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to update user profile';
      setError(errorMessage);
      setIsLoading(false);
      return false;
    }
  }, [apiClient]);

  // Change password
  const changePassword = useCallback(async (currentPassword: string, newPassword: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await apiClient.post('/api/v1/users/change-password', {
        currentPassword,
        newPassword,
      });
      setIsLoading(false);
      return response.data.success;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to change password';
      setError(errorMessage);
      setIsLoading(false);
      return false;
    }
  }, [apiClient]);

  return {
    isLoading,
    error,
    getUserProfile,
    updateUserProfile,
    changePassword,
  };
};