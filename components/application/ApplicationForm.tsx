'use client';

import { useState, useEffect } from 'react';
import Button from '../common/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle, AlertCircle } from 'lucide-react';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  education: string;
  city: string;
  whyJoin: string;
  heardFrom: string;
  referralCode: string;
}

const ApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    education: '',
    city: '',
    whyJoin: '',
    heardFrom: '',
    referralCode: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [applicationId, setApplicationId] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleNextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };
  
  const handlePrevStep = () => {
    setStep(step - 1);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Generate a random application ID
      const id = `SB-${Math.floor(100000 + Math.random() * 900000)}`;
      setApplicationId(id);
      
      // Reset form and show success message
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        education: '',
        city: '',
        whyJoin: '',
        heardFrom: '',
        referralCode: '',
      });
      setSubmitSuccess(true);
      
    } catch (error) {
      setSubmitError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Validate current step before proceeding
  const validateStep = () => {
    if (step === 1) {
      return formData.fullName.trim() !== '' && 
             formData.email.trim() !== '' && 
             formData.phone.trim() !== '';
    }
    
    if (step === 2) {
      return formData.education.trim() !== '' && 
             formData.city.trim() !== '';
    }
    
    if (step === 3) {
      return formData.whyJoin.trim() !== '';
    }
    
    return true;
  };

  // Animation variants
  const variants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };
  
  return (
    <div className="bg-obsidian-800 rounded-lg shadow-xl p-8 text-white border border-gold-500/20">
      {submitSuccess ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-green-500/20 to-green-700/10 border border-green-500/30 text-white px-6 py-8 rounded-md"
        >
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-400" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-center">Application Submitted Successfully!</h3>
          <div className="mb-6 text-center">
            <p className="text-lg text-green-300">Your Application ID: <span className="font-mono font-bold">{applicationId}</span></p>
            <p className="text-sm text-green-300 mt-1">Please save this ID for checking your application status</p>
          </div>
          <p className="mb-4">Thank you for applying to SKILL BRIDGE. We've received your application and will review it shortly.</p>
          <p className="mb-6">You'll receive a confirmation email with next steps. We'll be in touch within 2-3 business days.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a 
              href="/application-status" 
              className="bg-gold-600 hover:bg-gold-700 text-obsidian-900 font-medium px-6 py-3 rounded-md text-center transition-colors"
            >
              Check Application Status
            </a>
            <a 
              href="/" 
              className="bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500/10 font-medium px-6 py-3 rounded-md text-center transition-colors"
            >
              Return to Homepage
            </a>
          </div>
        </motion.div>
      ) : (
        <>
          {/* Progress Steps */}
          <div className="mb-10">
            <div className="flex items-center justify-between">
              <div className={`flex flex-col items-center relative`}>
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  step >= 1 ? 'bg-gold-500 text-obsidian-900' : 'bg-obsidian-700 text-obsidian-400'
                } font-bold border ${step >= 1 ? 'border-gold-400' : 'border-obsidian-600'}`}>
                  {step > 1 ? <CheckCircle className="h-5 w-5" /> : 1}
                </div>
                <span className={`text-sm mt-2 font-medium ${step >= 1 ? 'text-gold-500' : 'text-obsidian-400'}`}>
                  Personal Info
                </span>
                {step === 1 && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gold-500 rounded-full animate-pulse"></div>
                )}
              </div>
              
              <div className={`flex-grow h-1 mx-4 transition-colors duration-300 ${
                step >= 2 ? 'bg-gold-500' : 'bg-obsidian-700'
              }`}></div>
              
              <div className={`flex flex-col items-center relative`}>
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  step >= 2 ? 'bg-gold-500 text-obsidian-900' : 'bg-obsidian-700 text-obsidian-400'
                } font-bold border ${step >= 2 ? 'border-gold-400' : 'border-obsidian-600'}`}>
                  {step > 2 ? <CheckCircle className="h-5 w-5" /> : 2}
                </div>
                <span className={`text-sm mt-2 font-medium ${step >= 2 ? 'text-gold-500' : 'text-obsidian-400'}`}>
                  Background
                </span>
                {step === 2 && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gold-500 rounded-full animate-pulse"></div>
                )}
              </div>
              
              <div className={`flex-grow h-1 mx-4 transition-colors duration-300 ${
                step >= 3 ? 'bg-gold-500' : 'bg-obsidian-700'
              }`}></div>
              
              <div className={`flex flex-col items-center relative`}>
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  step >= 3 ? 'bg-gold-500 text-obsidian-900' : 'bg-obsidian-700 text-obsidian-400'
                } font-bold border ${step >= 3 ? 'border-gold-400' : 'border-obsidian-600'}`}>
                  3
                </div>
                <span className={`text-sm mt-2 font-medium ${step >= 3 ? 'text-gold-500' : 'text-obsidian-400'}`}>
                  Motivation
                </span>
                {step === 3 && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gold-500 rounded-full animate-pulse"></div>
                )}
              </div>
            </div>
          </div>
          
          {submitError && (
            <div className="bg-red-900/30 border border-red-500/30 text-red-300 px-4 py-3 rounded mb-6 flex items-start">
              <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
              <span>{submitError}</span>
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="space-y-6"
                >
                  <div className="flex items-center border-b border-gold-500/30 pb-4 mb-6">
                    <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-gold-500 font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-gold-500">Personal Information</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gold-300 mb-2">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gold-300 mb-2">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                        placeholder="you@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gold-300 mb-2">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <button 
                      type="button" 
                      onClick={handleNextStep}
                      disabled={!validateStep()}
                      className={`btn btn-gold px-6 py-3 text-sm font-medium flex items-center gap-2 ${
                        !validateStep() ? 'opacity-50 cursor-not-allowed' : 'group'
                      }`}
                    >
                      <span>Next Step</span>
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      
                      {/* Gold shimmer effect */}
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-500/0 via-gold-500/30 to-gold-500/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </motion.div>
              )}
              
              {/* Step 2: Educational Background */}
              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="space-y-6"
                >
                  <div className="flex items-center border-b border-gold-500/30 pb-4 mb-6">
                    <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-gold-500 font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-gold-500">Educational Background</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="education" className="block text-sm font-medium text-gold-300 mb-2">
                        Highest Education*
                      </label>
                      <select
                        id="education"
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                      >
                        <option value="" disabled>Select your highest education</option>
                        <option value="high_school">High School</option>
                        <option value="diploma">Diploma</option>
                        <option value="bachelors">Bachelor's Degree</option>
                        <option value="masters">Master's Degree</option>
                        <option value="phd">PhD</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gold-300 mb-2">
                        City/Town*
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                        placeholder="Your current city"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-4">
                    <button 
                      type="button" 
                      onClick={handlePrevStep}
                      className="btn btn-outline-gold px-6 py-3 text-sm font-medium"
                    >
                      Previous
                    </button>
                    <button 
                      type="button" 
                      onClick={handleNextStep}
                      disabled={!validateStep()}
                      className={`btn btn-gold px-6 py-3 text-sm font-medium flex items-center gap-2 ${
                        !validateStep() ? 'opacity-50 cursor-not-allowed' : 'group'
                      }`}
                    >
                      <span>Next Step</span>
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      
                      {/* Gold shimmer effect */}
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-500/0 via-gold-500/30 to-gold-500/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </motion.div>
              )}
              
              {/* Step 3: Program Interest */}
              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="space-y-6"
                >
                  <div className="flex items-center border-b border-gold-500/30 pb-4 mb-6">
                    <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-gold-500 font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-gold-500">Program Interest</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="whyJoin" className="block text-sm font-medium text-gold-300 mb-2">
                        Why do you want to join SKILL BRIDGE?*
                      </label>
                      <textarea
                        id="whyJoin"
                        name="whyJoin"
                        value={formData.whyJoin}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                        placeholder="Tell us why you're interested in our program..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <label htmlFor="heardFrom" className="block text-sm font-medium text-gold-300 mb-2">
                        How did you hear about us?
                      </label>
                      <select
                        id="heardFrom"
                        name="heardFrom"
                        value={formData.heardFrom}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                      >
                        <option value="" disabled>Select an option</option>
                        <option value="social_media">Social Media</option>
                        <option value="friend">Friend or Family</option>
                        <option value="college">College/University</option>
                        <option value="search">Search Engine</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="referralCode" className="block text-sm font-medium text-gold-300 mb-2">
                        Referral Code (if any)
                      </label>
                      <input
                        type="text"
                        id="referralCode"
                        name="referralCode"
                        value={formData.referralCode}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-obsidian-700 border border-obsidian-600 focus:border-gold-500 rounded-md text-white placeholder:text-obsidian-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
                        placeholder="Enter referral code"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-4">
                    <button 
                      type="button" 
                      onClick={handlePrevStep}
                      className="btn btn-outline-gold px-6 py-3 text-sm font-medium"
                    >
                      Previous
                    </button>
                    <button 
                      type="submit"
                      disabled={isSubmitting || !validateStep()}
                      className={`btn btn-gold px-6 py-3 text-sm font-medium relative overflow-hidden ${
                        isSubmitting || !validateStep() ? 'opacity-50 cursor-not-allowed' : 'group'
                      }`}
                    >
                      <span className="relative z-10 flex items-center">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-obsidian-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : 'Submit Application'}
                      </span>
                    
                      {/* Gold shimmer effect */}
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-500/0 via-gold-500/30 to-gold-500/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </>
      )}
    </div>
  );
};

export default ApplicationForm;
