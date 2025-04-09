'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, CheckCircle } from 'lucide-react';

export default function NewApplicationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      city: '',
    },
    education: {
      level: '',
      institution: '',
      gradYear: '',
      field: '',
    },
    programInfo: {
      programInterest: '',
      heardFrom: '',
      whyJoin: '',
      currentEmployment: '',
      referralCode: '',
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');
  
  const totalSteps = 3;
  
  const handleInputChange = (section: string, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };
  
  const isStepValid = () => {
    if (currentStep === 1) {
      const { fullName, email, phone, city } = formData.personalInfo;
      return fullName.trim() !== '' && email.trim() !== '' && phone.trim() !== '' && city.trim() !== '';
    }
    
    if (currentStep === 2) {
      const { level, institution, gradYear } = formData.education;
      return level.trim() !== '' && institution.trim() !== '' && gradYear.trim() !== '';
    }
    
    if (currentStep === 3) {
      const { programInterest, whyJoin } = formData.programInfo;
      return programInterest.trim() !== '' && whyJoin.trim() !== '';
    }
    
    return false;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStepValid()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate a random application ID
      const randomId = Math.floor(100000 + Math.random() * 900000);
      const newApplicationId = `SB-${randomId}`;
      setApplicationId(newApplicationId);
      setIsSubmitted(true);
      
    } catch (error) {
      console.error('Error submitting application:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const nextStep = () => {
    if (isStepValid() && currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };
  
  // Content for successful submission
  const renderSuccess = () => (
    <div className="max-w-3xl mx-auto">
      <div className="border-b border-gold-500/10 pb-5 mb-8 flex items-center">
        <Link 
          href="/admin/applications" 
          className="text-obsidian-300 hover:text-white mr-3"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-bold text-white">New Application</h1>
      </div>
      
      <div className="bg-obsidian-800 rounded-xl shadow-gold-glow border border-gold-500/20 p-8">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <h2 className="text-xl font-bold text-white text-center mb-4">Application Submitted Successfully</h2>
        <p className="text-center text-obsidian-300 mb-6">
          The application has been created and assigned ID: 
          <span className="text-gold-500 font-mono ml-2">{applicationId}</span>
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link 
            href={`/admin/applications/${applicationId}`} 
            className="bg-gold-500 hover:bg-gold-600 text-obsidian-900 font-medium px-4 py-2 rounded-md text-center"
          >
            View Application
          </Link>
          <Link 
            href="/admin/applications/new" 
            className="bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500/10 font-medium px-4 py-2 rounded-md text-center"
            onClick={() => {
              setCurrentStep(1);
              setIsSubmitted(false);
              setFormData({
                personalInfo: {
                  fullName: '',
                  email: '',
                  phone: '',
                  city: '',
                },
                education: {
                  level: '',
                  institution: '',
                  gradYear: '',
                  field: '',
                },
                programInfo: {
                  programInterest: '',
                  heardFrom: '',
                  whyJoin: '',
                  currentEmployment: '',
                  referralCode: '',
                }
              });
            }}
          >
            Create Another Application
          </Link>
        </div>
      </div>
    </div>
  );
  
  // Content for form steps
  const renderForm = () => (
    <div className="max-w-3xl mx-auto">
      <div className="border-b border-gold-500/10 pb-5 mb-8 flex items-center">
        <Link 
          href="/admin/applications" 
          className="text-obsidian-300 hover:text-white mr-3"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-bold text-white">New Application</h1>
      </div>
      
      {/* Progress Steps */}
      <div className="mb-8">
        <ol className="flex items-center w-full">
          {Array.from({ length: totalSteps }).map((_, index) => {
            const stepNumber = index + 1;
            const isActive = stepNumber === currentStep;
            const isCompleted = stepNumber < currentStep;
            
            return (
              <li 
                key={stepNumber} 
                className={`flex items-center ${index < totalSteps - 1 ? 'w-full' : ''}`}
              >
                <div className="flex flex-col items-center">
                  <div 
                    className={`flex items-center justify-center w-8 h-8 rounded-full border ${
                      isCompleted 
                        ? 'bg-gold-500 text-obsidian-900 border-gold-500' 
                        : isActive 
                        ? 'bg-gold-500/20 text-gold-500 border-gold-500' 
                        : 'bg-obsidian-700 text-obsidian-400 border-obsidian-600'
                    }`}
                  >
                    {isCompleted ? <CheckCircle className="w-4 h-4" /> : stepNumber}
                  </div>
                  <span 
                    className={`text-xs mt-1 ${
                      isCompleted || isActive ? 'text-gold-500' : 'text-obsidian-500'
                    }`}
                  >
                    {stepNumber === 1 ? 'Personal' : stepNumber === 2 ? 'Education' : 'Program'}
                  </span>
                </div>
                
                {index < totalSteps - 1 && (
                  <div 
                    className={`flex-auto border-t mx-4 transition-colors ${
                      isCompleted ? 'border-gold-500' : 'border-obsidian-700'
                    }`}
                  ></div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
      
      <div className="bg-obsidian-800 rounded-xl shadow-gold-glow border border-gold-500/20 p-8">
        <form onSubmit={handleSubmit}>
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6">Personal Information</h2>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gold-300 mb-2">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.personalInfo.fullName}
                    onChange={(e) => handleInputChange('personalInfo', 'fullName', e.target.value)}
                    className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    placeholder="Enter full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gold-300 mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.personalInfo.email}
                    onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                    className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    placeholder="Enter email address"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gold-300 mb-2">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.personalInfo.phone}
                    onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                    className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gold-300 mb-2">
                    City*
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={formData.personalInfo.city}
                    onChange={(e) => handleInputChange('personalInfo', 'city', e.target.value)}
                    className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    placeholder="Enter city"
                    required
                  />
                </div>
              </div>
            </div>
          )}
          
          {/* Step 2: Education Information */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6">Education Information</h2>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="level" className="block text-sm font-medium text-gold-300 mb-2">
                    Highest Education Level*
                  </label>
                  <select
                    id="level"
                    value={formData.education.level}
                    onChange={(e) => handleInputChange('education', 'level', e.target.value)}
                    className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    required
                  >
                    <option value="">Select education level</option>
                    <option value="high_school">High School</option>
                    <option value="diploma">Diploma</option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="masters">Master's Degree</option>
                    <option value="phd">PhD</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="institution" className="block text-sm font-medium text-gold-300 mb-2">
                    Institution Name*
                  </label>
                  <input
                    type="text"
                    id="institution"
                    value={formData.education.institution}
                    onChange={(e) => handleInputChange('education', 'institution', e.target.value)}
                    className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    placeholder="Enter institution name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="gradYear" className="block text-sm font-medium text-gold-300 mb-2">
                    Graduation Year*
                  </label>
                  <input
                    type="text"
                    id="gradYear"
                    value={formData.education.gradYear}
                    onChange={(e) => handleInputChange('education', 'gradYear', e.target.value)}
                    className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    placeholder="Enter graduation year"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="field" className="block text-sm font-medium text-gold-300 mb-2">
                    Field of Study
                  </label>
                  <input
                    type="text"
                    id="field"
                    value={formData.education.field}
                    onChange={(e) => handleInputChange('education', 'field', e.target.value)}
                    className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    placeholder="Enter field of study"
                  />
                </div>
              </div>
            </div>
          )}
          
          {/* Step 3: Program Information */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6">Program Information</h2>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="programInterest" className="block text-sm font-medium text-gold-300 mb-2">
                    Program Interest*
                  </label>
                  <select
                    id="programInterest"
                    value={formData.programInfo.programInterest}
                    onChange={(e) => handleInputChange('programInfo', 'programInterest', e.target.value)}
                    className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    required
                  >
                    <option value="">Select program</option>
                    <option value="web_development">Web Development</option>
                    <option value="data_science">Data Science & Analytics</option>
                    <option value="mobile_development">Mobile App Development</option>
                    <option value="cloud_computing">Cloud Computing</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="ai_ml">AI & Machine Learning</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="currentEmployment" className="block text-sm font-medium text-gold-300 mb-2">
                    Current Employment
                  </label>
                  <input
                    type="text"
                    id="currentEmployment"
                    value={formData.programInfo.currentEmployment}
                    onChange={(e) => handleInputChange('programInfo', 'currentEmployment', e.target.value)}
                    className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    placeholder="Current job or role (if any)"
                  />
                </div>
                
                <div>
                  <label htmlFor="heardFrom" className="block text-sm font-medium text-gold-300 mb-2">
                    How did they hear about us?
                  </label>
                  <select
                    id="heardFrom"
                    value={formData.programInfo.heardFrom}
                    onChange={(e) => handleInputChange('programInfo', 'heardFrom', e.target.value)}
                    className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                  >
                    <option value="">Select option</option>
                    <option value="social_media">Social Media</option>
                    <option value="friend">Friend or Family</option>
                    <option value="college">College/University</option>
                    <option value="search">Search Engine</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="whyJoin" className="block text-sm font-medium text-gold-300 mb-2">
                    Why do they want to join SKILL BRIDGE?*
                  </label>
                  <textarea
                    id="whyJoin"
                    value={formData.programInfo.whyJoin}
                    onChange={(e) => handleInputChange('programInfo', 'whyJoin', e.target.value)}
                    className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    placeholder="Enter motivation for joining"
                    rows={4}
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="referralCode" className="block text-sm font-medium text-gold-300 mb-2">
                    Referral Code (if any)
                  </label>
                  <input
                    type="text"
                    id="referralCode"
                    value={formData.programInfo.referralCode}
                    onChange={(e) => handleInputChange('programInfo', 'referralCode', e.target.value)}
                    className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    placeholder="Enter referral code"
                  />
                </div>
              </div>
            </div>
          )}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="bg-obsidian-700 hover:bg-obsidian-600 text-white font-medium px-4 py-2 rounded-md"
              >
                Previous
              </button>
            ) : (
              <div></div> // Empty div to maintain flex spacing
            )}
            
            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`bg-gold-500 hover:bg-gold-600 text-obsidian-900 font-medium px-4 py-2 rounded-md flex items-center ${
                  !isStepValid() ? 'opacity-50 cursor-not-allowed' : 'group'
                }`}
              >
                <span>Next</span>
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={!isStepValid() || isSubmitting}
                className={`bg-gold-500 hover:bg-gold-600 text-obsidian-900 font-medium px-6 py-2 rounded-md ${
                  !isStepValid() || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-obsidian-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : 'Submit Application'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
  
  return isSubmitted ? renderSuccess() : renderForm();
}
