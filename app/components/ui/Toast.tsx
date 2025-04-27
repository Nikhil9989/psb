// app/components/ui/Toast.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { createPortal } from 'react-dom';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  type: ToastType;
  duration?: number;
  onClose: () => void;
}

// Individual Toast component
const Toast: React.FC<ToastProps> = ({ message, type, duration = 5000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  // Define styles and icons based on type
  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return {
          borderColor: 'border-green-500',
          bgColor: 'bg-green-900/20',
          icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        };
      case 'error':
        return {
          borderColor: 'border-red-500',
          bgColor: 'bg-red-900/20',
          icon: <AlertCircle className="w-5 h-5 text-red-500" />,
        };
      case 'info':
        return {
          borderColor: 'border-blue-500',
          bgColor: 'bg-blue-900/20',
          icon: <Info className="w-5 h-5 text-blue-500" />,
        };
      default:
        return {
          borderColor: 'border-blue-500',
          bgColor: 'bg-blue-900/20',
          icon: <Info className="w-5 h-5 text-blue-500" />,
        };
    }
  };

  const { borderColor, bgColor, icon } = getTypeStyles();

  return (
    <div
      className={`flex items-center p-4 mb-3 rounded-lg border-l-4 ${borderColor} ${bgColor} text-white shadow-lg animate-slideIn`}
      role="alert"
    >
      <div className="mr-3">{icon}</div>
      <div className="flex-1 mr-2 text-sm">{message}</div>
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-white transition-colors"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

// Toast container and context
interface ToastContextProps {
  showToast: (message: string, type: ToastType, duration?: number) => void;
}

const ToastContext = React.createContext<ToastContextProps | undefined>(undefined);

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<Array<{ id: string; message: string; type: ToastType; duration?: number }>>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const showToast = (message: string, type: ToastType, duration?: number) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type, duration }]);
  };

  const closeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // Toast container portal
  const ToastContainer = () => {
    if (!isMounted) return null;
    
    return createPortal(
      <div className="fixed top-4 right-4 z-50 flex flex-col items-end space-y-2 max-w-md">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={() => closeToast(toast.id)}
          />
        ))}
      </div>,
      document.body
    );
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

// Hook to use toast
export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

