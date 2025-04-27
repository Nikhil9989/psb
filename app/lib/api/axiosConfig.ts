// app/lib/api/axiosConfig.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8082',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Get access token from localStorage
    const tokens = localStorage.getItem('tokens');
    if (tokens) {
      const { accessToken } = JSON.parse(tokens);
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    
    // If error is 401 and not already retrying
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        // Get refresh token from localStorage
        const tokens = localStorage.getItem('tokens');
        if (!tokens) {
          // No refresh token available, clear auth and redirect to login
          localStorage.removeItem('user');
          localStorage.removeItem('tokens');
          window.location.href = '/login';
          return Promise.reject(error);
        }
        
        const { refreshToken } = JSON.parse(tokens);
        
        // Attempt to refresh the token
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8082'}/api/v1/auth/refresh`,
          { refreshToken }
        );
        
        if (response.data.success) {
          const newTokens = response.data.data;
          
          // Store new tokens
          localStorage.setItem('tokens', JSON.stringify(newTokens));
          
          // Retry original request with new token
          originalRequest.headers.Authorization = `Bearer ${newTokens.accessToken}`;
          return axios(originalRequest);
        }
      } catch (refreshError) {
        // Token refresh failed, clear auth and redirect to login
        localStorage.removeItem('user');
        localStorage.removeItem('tokens');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;