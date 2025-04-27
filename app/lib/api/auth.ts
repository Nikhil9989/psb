// app/lib/api/auth.ts
import axios from 'axios';

// Create an axios instance with base URL and common settings
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8082',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Authentication API functions
export const authApi = {
  // Register a new user
  register: async (userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
  }) => {
    const response = await apiClient.post('/api/v1/auth/register', userData);
    return response.data;
  },

  // Login a user
  login: async (credentials: { email: string; password: string }) => {
    const response = await apiClient.post('/api/v1/auth/login', credentials);
    return response.data;
  },

  // Refresh access token
  refreshToken: async (refreshToken: string) => {
    const response = await apiClient.post('/api/v1/auth/refresh', { refreshToken });
    return response.data;
  },

  // Logout a user
  logout: async (refreshToken: string) => {
    const response = await apiClient.post('/api/v1/auth/logout', { refreshToken });
    return response.data;
  },

  // Request password reset
  forgotPassword: async (email: string) => {
    const response = await apiClient.post('/api/v1/auth/forgot-password', { email });
    return response.data;
  },

  // Reset password with token
  resetPassword: async (token: string, newPassword: string) => {
    const response = await apiClient.post('/api/v1/auth/reset-password', {
      token,
      newPassword,
    });
    return response.data;
  },

  // Verify email
  verifyEmail: async (token: string) => {
    const response = await apiClient.get(`/api/v1/auth/verify-email/${token}`);
    return response.data;
  },
};