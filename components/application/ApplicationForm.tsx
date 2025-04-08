'use client';

import { useState } from 'react';
import Button from '../common/Button';

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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleNextStep = () => {
    setStep(step + 1);
  };
  
  const handlePrevStep = () => {
    setStep(step - 1);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
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
    
    return true;
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      {submitSuccess ? (
        <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-md mb-4">
          <h3 className="text-lg font-medium mb-2">Application Submitted Successfully!</h3>
          <p>Thank you for applying to SKILL BRIDGE. We've received your application and will review it shortly.</p>
          <p className="mt-2">You'll receive a confirmation email with next steps. We'll be in touch within 2-3 business days.</p>
        </div>
      ) : (
        <>
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className={`flex flex-col items-center`}>
                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200'}`}>1</div>
                <span className="text-sm mt-1">Personal Info</span>
              </div>
              
              <div className={`flex-grow h-1 mx-2 ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
              
              <div className={`flex flex-col items-center`}>
                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200'}`}>2</div>
                <span className="text-sm mt-1">Background</span>
              </div>
              
              <div className={`flex-grow h-1 mx-2 ${step >= 3 ? 'bg-primary' : 'bg-gray-200'}`}></div>
              
              <div className={`flex flex-col items-center`}>
                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-200'}`}>3</div>
                <span className="text-sm mt-1">Motivation</span>
              </div>
            </div>
          </div>
          
          {submitError && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
              {submitError}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Personal Information</h3>
                
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    type="button" 
                    onClick={handleNextStep}
                    disabled={!validateStep()}
                    variant="primary"
                  >
                    Next Step
                  </Button>
                </div>
              </div>
            )}
            
            {/* Step 2: Educational Background */}
            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Educational Background</h3>
                
                <div>
                  <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
                    Highest Education*
                  </label>
                  <select
                    id="education"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    City/Town*
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your current city"
                  />
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    type="button" 
                    onClick={handlePrevStep}
                    variant="outline"
                  >
                    Previous
                  </Button>
                  <Button 
                    type="button" 
                    onClick={handleNextStep}
                    disabled={!validateStep()}
                    variant="primary"
                  >
                    Next Step
                  </Button>
                </div>
              </div>
            )}
            
            {/* Step 3: Program Interest */}
            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Program Interest</h3>
                
                <div>
                  <label htmlFor="whyJoin" className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to join SKILL BRIDGE?*
                  </label>
                  <textarea
                    id="whyJoin"
                    name="whyJoin"
                    value={formData.whyJoin}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us why you're interested in our program..."
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="heardFrom" className="block text-sm font-medium text-gray-700 mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    id="heardFrom"
                    name="heardFrom"
                    value={formData.heardFrom}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  <label htmlFor="referralCode" className="block text-sm font-medium text-gray-700 mb-2">
                    Referral Code (if any)
                  </label>
                  <input
                    type="text"
                    id="referralCode"
                    name="referralCode"
                    value={formData.referralCode}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter referral code"
                  />
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    type="button" 
                    onClick={handlePrevStep}
                    variant="outline"
                  >
                    Previous
                  </Button>
                  <Button 
                    type="submit"
                    disabled={isSubmitting || !validateStep()}
                    variant="primary"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </div>
              </div>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default ApplicationForm;
