import React from 'react';
import ApplicationStatus from '../../components/application/ApplicationStatus';

export const metadata = {
  title: 'Application Status | SKILL BRIDGE',
  description: 'Check the status of your SKILL BRIDGE application and track your progress through the application process.',
};

const ApplicationStatusPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Application Status
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Check your application status and track your progress through the SKILL BRIDGE selection process.
          </p>
        </section>
        
        {/* Status Checker */}
        <section className="max-w-4xl mx-auto mb-16">
          <ApplicationStatus />
        </section>
        
        {/* Additional Information */}
        <section className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3 flex items-center text-primary">
                <span className="mr-2">📝</span> Application Process
              </h3>
              <p className="text-gray-600 mb-4">
                Our application process consists of several stages to ensure we find candidates who will benefit most from our program.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Application submission</li>
                <li>Application review</li>
                <li>Virtual interview (if selected)</li>
                <li>Final decision</li>
                <li>Enrollment and onboarding</li>
              </ol>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3 flex items-center text-primary">
                <span className="mr-2">❓</span> Help & Support
              </h3>
              <p className="text-gray-600 mb-4">
                If you're experiencing issues with your application or have questions about the process, we're here to help.
              </p>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Email Support:</p>
                  <p className="text-gray-600">admissions@skillbridge.edu</p>
                </div>
                <div>
                  <p className="font-medium">Phone Support:</p>
                  <p className="text-gray-600">+91 98765 43210 (Mon-Fri, 10am-6pm IST)</p>
                </div>
                <div>
                  <p className="font-medium">WhatsApp:</p>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ApplicationStatusPage;
