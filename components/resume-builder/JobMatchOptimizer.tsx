'use client';

import React from 'react';

interface JobMatchOptimizerProps {
  jobDescription: string;
  setJobDescription: (value: string) => void;
  onOptimize: () => void;
  isOptimizing: boolean;
  optimizationScore: number | null;
}

export default function JobMatchOptimizer(props: JobMatchOptimizerProps) {
  const { 
    jobDescription, 
    setJobDescription, 
    onOptimize, 
    isOptimizing, 
    optimizationScore 
  } = props;

  return (
    <div>
      <h3>Optimize for Job Description</h3>
      <textarea 
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Enter job description"
      />
      <button onClick={onOptimize} disabled={isOptimizing}>
        {isOptimizing ? 'Analyzing...' : 'Optimize Resume'}
      </button>
      {optimizationScore !== null && (
        <div>Score: {optimizationScore}%</div>
      )}
    </div>
  );
}