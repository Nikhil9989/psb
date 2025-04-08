import React from 'react';
import ApplicationForm from '../../components/application/ApplicationForm';
import FAQ from '../../components/application/FAQ';

export const metadata = {
  title: 'Apply to SKILL BRIDGE',
  description: 'Apply to our founding cohort and start your journey to becoming industry-ready with domain-based learning designed for tier-2/3 cities.',
};

const ApplicationPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Apply to SKILL BRIDGE
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join our founding cohort and transform your career with domain-based learning designed for tier-2/3 cities.
          </p>
          <div className="inline-block bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
            Limited spots available — Founding cohort starting June 15, 2025
          </div>
        </section>
        
        {/* Application Process Overview */}
        <section className="mb-12 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mx-auto mb-4">1</div>
              <h3 className="font-medium text-lg mb-2">Submit Application</h3>
              <p className="text-gray-600">Complete the form below with your information and background.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mx-auto mb-4">2</div>
              <h3 className="font-medium text-lg mb-2">Selection Process</h3>
              <p className="text-gray-600">We'll review your application and invite you for a brief online interview.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mx-auto mb-4">3</div>
              <h3 className="font-medium text-lg mb-2">Enrollment</h3>
              <p className="text-gray-600">Selected candidates will receive all details to join our founding cohort.</p>
            </div>
          </div>
        </section>
        
        {/* Key Information */}
        <section className="mb-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3 flex items-center text-primary">
                <span className="mr-2">🗓️</span> Program Timeline
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <div>
                    <span className="font-medium">Application Deadline:</span> May 31, 2025
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <div>
                    <span className="font-medium">Interview Period:</span> June 1-10, 2025
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <div>
                    <span className="font-medium">Program Start:</span> June 15, 2025
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <div>
                    <span className="font-medium">Program Duration:</span> 3-6 months (based on learning pace)
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3 flex items-center text-primary">
                <span className="mr-2">📋</span> Eligibility Requirements
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <div>
                    Basic understanding of programming concepts (formal degree not required)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <div>
                    Dedication to commit 15-20 hours per week to the program
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <div>
                    Reliable internet access for attending live sessions (mobile or computer)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <div>
                    Passion for learning and building practical skills
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Application Form */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Application Form</h2>
          <ApplicationForm />
        </section>
        
        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <FAQ />
        </section>
      </div>
    </main>
  );
};

export default ApplicationPage;
