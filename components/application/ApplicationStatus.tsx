'use client';

import { useState } from 'react';
import Button from '../common/Button';

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
    <div className="bg-white rounded-lg shadow-md p-8">
      {!isLoggedIn ? (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Check Application Status</h2>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}
          
          <form onSubmit={handleLogin} className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="applicationId" className="block text-sm font-medium text-gray-700 mb-2">
                Application ID
              </label>
              <input
                type="text"
                id="applicationId"
                value={applicationId}
                onChange={(e) => setApplicationId(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your application ID"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Your Application ID was sent to your email after submission
              </p>
            </div>
            
            <Button 
              type="submit" 
              variant="primary" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Checking...' : 'Check Status'}
            </Button>
          </form>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Application Status</h2>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsLoggedIn(false)}
            >
              Log Out
            </Button>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded mb-8">
            <p className="font-medium">Application ID: {applicationId}</p>
            <p>Submitted to: Web Development Founding Cohort (June 2025)</p>
          </div>
          
          <div className="space-y-8">
            {/* Status Timeline */}
            <div className="relative">
              {mockApplicationStatus.map((step, index) => (
                <div key={index} className="flex mb-8 relative">
                  {/* Vertical line connecting steps */}
                  {index < mockApplicationStatus.length - 1 && (
                    <div 
                      className={`absolute left-3.5 top-8 w-0.5 h-full -z-10 ${
                        step.status === 'completed' ? 'bg-primary' : 'bg-gray-200'
                      }`}
                    ></div>
                  )}
                  
                  {/* Status circle */}
                  <div 
                    className={`h-7 w-7 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                      step.status === 'completed' ? 'bg-primary text-white' : 
                      step.status === 'current' ? 'bg-white border-2 border-primary text-primary' : 
                      'bg-gray-200 text-gray-400'
                    }`}
                  >
                    {step.status === 'completed' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-xs">{index + 1}</span>
                    )}
                  </div>
                  
                  {/* Step content */}
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <h3 className={`font-medium ${
                        step.status === 'completed' ? 'text-primary' : 
                        step.status === 'current' ? 'text-gray-900' : 
                        'text-gray-500'
                      }`}>
                        {step.label}
                      </h3>
                      <span className="text-sm text-gray-500">{step.date}</span>
                    </div>
                    <p className="text-gray-600 mt-1">{step.description}</p>
                    
                    {/* Current step callout */}
                    {step.status === 'current' && (
                      <div className="mt-3 p-3 bg-primary/5 border border-primary/20 rounded text-primary text-sm">
                        This is your current application stage. We'll notify you by email when there's an update.
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional Information */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-medium mb-2">Next Steps</h3>
              <p className="text-gray-600 mb-4">
                Our team is currently reviewing your application. You'll receive an email notification when there are any updates to your application status.
              </p>
              <p className="text-sm text-gray-500">
                Have questions? Contact us at <a href="mailto:admissions@skillbridge.edu" className="text-primary hover:underline">admissions@skillbridge.edu</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationStatus;
