'use client';

import { useState } from 'react';
import Button from '../common/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Clock, CalendarClock, AlertCircle, LogOut } from 'lucide-react';

type StatusStep = {
  label: string;
  date: string;
  status: 'completed' | 'current' | 'upcoming';
  description: string;
};

// Mock data for demo purposes
const mockApplicationStatus: StatusStep[] = [
  {
    label: 'Application Submitted',
    date: 'April 15, 2025',
    status: 'completed',
    description: 'Your application has been received and is under initial review.'
  },
  {
    label: 'Application Review',
    date: 'April 20, 2025',
    status: 'current',
    description: 'Our team is reviewing your application and credentials.'
  },
  {
    label: 'Interview Invitation',
    date: 'Expected by May 1, 2025',
    status: 'upcoming',
    description: 'If selected, you will receive an invitation for a virtual interview.'
  },
  {
    label: 'Interview',
    date: 'TBD',
    status: 'upcoming',
    description: 'A 30-minute interview to discuss your background and goals.'
  },
  {
    label: 'Final Decision',
    date: 'By May 15, 2025',
    status: 'upcoming',
    description: 'Final acceptance decision and enrollment information.'
  }
];

const ApplicationStatus = () => {
  const [email, setEmail] = useState('');
  const [applicationId, setApplicationId] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Simulated login to check application status
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Validate input
    if (!email.trim() || !applicationId.trim()) {
      setError('Please enter both email and application ID');
      setIsLoading(false);
      return;
    }
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, always show the application status
      // In a real implementation, this would verify credentials against a database
      setIsLoggedIn(true);
    } catch (err) {
      setError('Unable to verify your application. Please check your credentials and try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="bg-obsidian-800 rounded-xl shadow-gold-glow p-8 border border-gold-500/20 relative overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-xl -ml-32 -mb-32"></div>
      
      <AnimatePresence mode="wait">
        {!isLoggedIn ? (
          <motion.div
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <h2 className="text-2xl font-bold mb-6 text-center relative text-gold-500">
              <span className="relative">
                Check Application Status
                <span className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-gold-500/40"></span>
              </span>
            </h2>
            
            {error && (
              <div className="bg-red-900/30 border border-red-500/30 text-red-300 px-4 py-3 rounded-md mb-6 flex items-start">
                <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}
            
            <form onSubmit={handleLogin} className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gold-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="applicationId" className="block text-sm font-medium text-gold-300 mb-2">
                  Application ID
                </label>
                <input
                  type="text"
                  id="applicationId"
                  value={applicationId}
                  onChange={(e) => setApplicationId(e.target.value)}
                  className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                  placeholder="Enter your application ID"
                  required
                />
                <p className="text-xs text-obsidian-400 mt-1">
                  Your Application ID was sent to your email after submission
                </p>
              </div>
              
              <button 
                type="submit" 
                disabled={isLoading}
                className={`bg-gold-500 hover:bg-gold-600 text-obsidian-900 font-bold w-full py-3 px-4 rounded-md transition-colors flex items-center justify-center relative overflow-hidden ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : 'group'
                }`}
              >
                <span className="relative z-10 flex items-center">
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-obsidian-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Checking...
                    </>
                  ) : (
                    <>
                      <span>Check Status</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </span>
                
                {/* Gold shimmer effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-500/0 via-gold-500/30 to-gold-500/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="status"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gold-500">Application Status</h2>
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="bg-obsidian-700 hover:bg-obsidian-600 border border-gold-500/30 text-gold-400 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Log Out</span>
              </button>
            </div>
            
            <div className="bg-obsidian-700/50 backdrop-blur-sm border border-gold-500/30 text-white px-4 py-3 rounded-md mb-8">
              <p className="font-medium text-gold-400">Application ID: <span className="font-mono">{applicationId}</span></p>
              <p className="text-obsidian-200">Submitted for: Web Development Founding Cohort (June 2025)</p>
            </div>
            
            <div className="space-y-2">
              {/* Status Timeline */}
              <div className="relative mb-12">
                {mockApplicationStatus.map((step, index) => (
                  <div key={index} className="flex mb-10 relative">
                    {/* Vertical line connecting steps */}
                    {index < mockApplicationStatus.length - 1 && (
                      <div 
                        className={`absolute left-6 top-12 w-0.5 h-16 -z-10 transition-colors ${
                          step.status === 'completed' ? 'bg-gold-500' : 
                          step.status === 'current' ? 'bg-gradient-to-b from-gold-500 to-obsidian-600' : 
                          'bg-obsidian-600'
                        }`}
                      ></div>
                    )}
                    
                    {/* Status circle */}
                    <div 
                      className={`h-12 w-12 rounded-full flex items-center justify-center mr-5 flex-shrink-0 border transition-colors ${
                        step.status === 'completed' ? 'bg-gold-500 text-obsidian-900 border-gold-400' : 
                        step.status === 'current' ? 'bg-obsidian-700 border-gold-500 text-gold-500' : 
                        'bg-obsidian-700 border-obsidian-600 text-obsidian-400'
                      }`}
                    >
                      {step.status === 'completed' ? (
                        <Check className="h-6 w-6" />
                      ) : step.status === 'current' ? (
                        <Clock className="h-6 w-6" />
                      ) : (
                        <CalendarClock className="h-6 w-6" />
                      )}
                    </div>
                    
                    {/* Step content */}
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                        <h3 className={`font-bold mb-1 sm:mb-0 ${
                          step.status === 'completed' ? 'text-gold-500' : 
                          step.status === 'current' ? 'text-gold-400' : 
                          'text-obsidian-400'
                        }`}>
                          {step.label}
                        </h3>
                        <span className={`text-sm mb-2 sm:mb-0 ${
                          step.status === 'completed' ? 'text-obsidian-300' : 
                          step.status === 'current' ? 'text-obsidian-300' : 
                          'text-obsidian-500'
                        }`}>
                          {step.date}
                        </span>
                      </div>
                      <p className={`${
                        step.status === 'completed' ? 'text-obsidian-200' : 
                        step.status === 'current' ? 'text-obsidian-200' : 
                        'text-obsidian-400'
                      }`}>
                        {step.description}
                      </p>
                      
                      {/* Current step callout */}
                      {step.status === 'current' && (
                        <div className="mt-3 p-3 bg-gold-500/10 border border-gold-500/20 rounded-md text-gold-300 text-sm">
                          This is your current application stage. We'll notify you by email when there's an update.
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Additional Information */}
              <div className="bg-obsidian-700/50 border border-gold-500/20 p-5 rounded-lg">
                <h3 className="font-medium text-gold-400 mb-2">Next Steps</h3>
                <p className="text-obsidian-200 mb-4">
                  Our team is currently reviewing your application. You'll receive an email notification when there are any updates to your application status.
                </p>
                <p className="text-obsidian-400 text-sm">
                  Have questions? Contact us at <a href="mailto:itsmemncworks@outlook.com" className="text-gold-400 hover:underline">itsmemncworks@outlook.com</a>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ApplicationStatus;