import React, { useState, useEffect } from 'react';

// Define types for props
interface AnimatedCounterProps {
  label: string;
  count: number;
  duration?: number;
}

interface AnimatedDateDisplayProps {
  label: string;
  date: string | Date;
}

// Component implementation with proper TypeScript typing
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  label, 
  count, 
  duration = 2000 
}) => {
  const [currentCount, setCurrentCount] = useState<number>(0);
  
  useEffect(() => {
    let start = 0;
    const increment = count / (duration / 16); // Update every 16ms (60fps)
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= count) {
        setCurrentCount(count);
        clearInterval(timer);
      } else {
        setCurrentCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [count, duration]);
  
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 w-36">
      <div className="text-3xl font-bold text-blue-600 mb-1">
        {currentCount}
      </div>
      <div className="text-sm text-gray-600 text-center">
        {label}
      </div>
    </div>
  );
};

export const AnimatedDateDisplay: React.FC<AnimatedDateDisplayProps> = ({ 
  label, 
  date 
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Formats the date if it's a string
  const formattedDate = typeof date === 'string' 
    ? new Date(date).toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric'
      })
    : date instanceof Date 
    ? date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric'
      })
    : String(date);
  
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 w-40">
      <div 
        className={`text-xl font-medium text-blue-600 mb-1 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {formattedDate}
      </div>
      <div className="text-sm text-gray-600 text-center">
        {label}
      </div>
    </div>
  );
};

export const CohortInfoBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-6 px-4 rounded-xl shadow-sm">
      <div className="container mx-auto">
        <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 font-display">
          Join Cohort #7
        </h3>
        
        <div className="flex flex-wrap justify-center gap-6">
          <AnimatedCounter label="Available Seats" count={24} />
          <AnimatedDateDisplay label="Next Cohort Starts" date="May 15, 2025" />
          <AnimatedDateDisplay label="Application Deadline" date="April 30, 2025" />
        </div>
        
        <div className="mt-8 text-center">
          <button className="relative bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
            Apply Now
            {/* Hand animation pointing to the button */}
            <div className="absolute -top-12 -right-6 animate-bounce">
              <svg className="w-10 h-10 text-blue-900 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

// Create a default export for the module
export default {
  AnimatedCounter,
  AnimatedDateDisplay,
  CohortInfoBanner
};