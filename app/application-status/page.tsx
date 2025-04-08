import React from 'react';
import ApplicationStatus from '../../components/application/ApplicationStatus';

export const metadata = {
  title: 'Application Status | SKILL BRIDGE',
  description: 'Check the status of your SKILL BRIDGE application and track your progress through the application process.',
};

const ApplicationStatusPage = () => {
  return (
    <main className="min-h-screen bg-obsidian-900 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16 text-center relative">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-2/3 bg-gold-500/10 blur-[120px] rounded-full -z-10"></div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 relative">
            <span className="relative inline-block">
              Application <span className="text-gold-500">Status</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-gold-600"></span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-obsidian-200 max-w-3xl mx-auto">
            Check your application status and track your progress through the SKILL BRIDGE selection process.
          </p>
        </section>
        
        {/* Status Checker */}
        <section className="max-w-4xl mx-auto mb-20">
          <ApplicationStatus />
        </section>
        
        {/* Additional Information */}
        <section className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-obsidian-800 p-8 rounded-xl shadow-gold-glow border border-gold-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-xl -mr-32 -mt-32"></div>
              
              <h3 className="font-bold text-xl mb-6 text-gold-400 flex items-center relative z-10">
                <span className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-500 mr-3">📝</span>
                Application Process
              </h3>
              
              <p className="text-obsidian-200 mb-4 relative z-10">
                Our application process consists of several stages to ensure we find candidates who will benefit most from our program.
              </p>
              
              <ol className="list-none space-y-3 text-obsidian-200 relative z-10">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-xs text-gold-500 font-bold">1</span>
                  </span>
                  <span>Application submission</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-xs text-gold-500 font-bold">2</span>
                  </span>
                  <span>Application review</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-xs text-gold-500 font-bold">3</span>
                  </span>
                  <span>Virtual interview (if selected)</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-xs text-gold-500 font-bold">4</span>
                  </span>
                  <span>Final decision</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-xs text-gold-500 font-bold">5</span>
                  </span>
                  <span>Enrollment and onboarding</span>
                </li>
              </ol>
            </div>
            
            <div className="bg-obsidian-800 p-8 rounded-xl shadow-gold-glow border border-gold-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-xl -mr-32 -mt-32"></div>
              
              <h3 className="font-bold text-xl mb-6 text-gold-400 flex items-center relative z-10">
                <span className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-500 mr-3">❓</span>
                Help & Support
              </h3>
              
              <p className="text-obsidian-200 mb-4 relative z-10">
                If you're experiencing issues with your application or have questions about the process, we're here to help.
              </p>
              
              <div className="space-y-5 relative z-10">
                <div className="border-t border-gold-500/10 pt-4">
                  <p className="font-medium text-gold-300">Email Support:</p>
                  <p className="text-obsidian-200">
                    <a href="mailto:itsmemncworks@outlook.com" className="text-gold-400 hover:underline">
                      itsmemncworks@outlook.com
                    </a>
                  </p>
                </div>
                <div className="border-t border-gold-500/10 pt-4">
                  <p className="font-medium text-gold-300">Phone Support:</p>
                  <p className="text-obsidian-200">+91 8247485295 (Mon-Fri, 10am-6pm IST)</p>
                </div>
                <div className="border-t border-gold-500/10 pt-4">
                  <p className="font-medium text-gold-300">WhatsApp:</p>
                  <p className="text-obsidian-200">+91 8247485295</p>
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