import React from 'react';
import ApplicationForm from '../../components/application/ApplicationForm';
import FAQ from '../../components/application/FAQ';

export const metadata = {
  title: 'Apply to SKILL BRIDGE',
  description: 'Apply to our founding cohort and start your journey to becoming industry-ready with domain-based learning designed for tier-2/3 cities.',
};

const ApplicationPage = () => {
  return (
    <main className="min-h-screen bg-obsidian-900 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16 text-center relative">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-2/3 bg-gold-500/10 blur-[120px] rounded-full -z-10"></div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 relative">
            <span className="relative inline-block">
              Apply to SKILL <span className="text-gold-500">BRIDGE</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-gold-600"></span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-obsidian-200 max-w-3xl mx-auto mb-8">
            Join our founding cohort and transform your career with domain-based learning designed for tier-2/3 cities.
          </p>
          <div className="inline-block bg-gold-500/20 border border-gold-500/30 text-gold-400 px-5 py-3 rounded-md text-sm font-medium animate-pulse">
            Limited spots available — Founding cohort starting June 15, 2025
          </div>
        </section>
        
        {/* Application Process Overview */}
        <section className="mb-20 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            <span className="relative">
              Application Process
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gold-500/40"></span>
            </span>
          </h2>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-24 left-24 h-[calc(100%-130px)] w-1 bg-gradient-to-b from-gold-500 to-gold-500/0 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
              <div className="relative group">
                <div className="bg-obsidian-800 border border-gold-500/20 rounded-xl shadow-gold-glow overflow-hidden transform transition-transform group-hover:scale-[1.02]">
                  <div className="p-6 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-xl -mr-16 -mt-16"></div>
                    
                    <div className="flex items-center mb-4 relative">
                      <div className="w-14 h-14 bg-gold-500/10 rounded-full flex items-center justify-center border border-gold-500/30 z-10">
                        <span className="text-gold-500 text-xl font-bold">1</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-xl text-gold-400">Submit Application</h3>
                      </div>
                    </div>
                    
                    <p className="text-obsidian-200 relative z-10">
                      Complete our multi-step application form with your personal information, educational background, and motivation for joining the program.
                    </p>
                    
                    <div className="mt-4 pt-4 border-t border-gold-500/10 text-obsidian-300 text-sm flex items-center">
                      <span className="bg-gold-500/10 text-gold-500 px-2 py-1 rounded text-xs font-medium">Time Required: ~15 minutes</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="bg-obsidian-800 border border-gold-500/20 rounded-xl shadow-gold-glow overflow-hidden transform transition-transform group-hover:scale-[1.02]">
                  <div className="p-6 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-xl -mr-16 -mt-16"></div>
                    
                    <div className="flex items-center mb-4 relative">
                      <div className="w-14 h-14 bg-gold-500/10 rounded-full flex items-center justify-center border border-gold-500/30 z-10">
                        <span className="text-gold-500 text-xl font-bold">2</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-xl text-gold-400">Selection Process</h3>
                      </div>
                    </div>
                    
                    <p className="text-obsidian-200 relative z-10">
                      Our team will review your application and if selected, you'll be invited for a brief online interview to discuss your background and goals.
                    </p>
                    
                    <div className="mt-4 pt-4 border-t border-gold-500/10 text-obsidian-300 text-sm flex items-center">
                      <span className="bg-gold-500/10 text-gold-500 px-2 py-1 rounded text-xs font-medium">Response Time: 2-3 business days</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="bg-obsidian-800 border border-gold-500/20 rounded-xl shadow-gold-glow overflow-hidden transform transition-transform group-hover:scale-[1.02]">
                  <div className="p-6 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-xl -mr-16 -mt-16"></div>
                    
                    <div className="flex items-center mb-4 relative">
                      <div className="w-14 h-14 bg-gold-500/10 rounded-full flex items-center justify-center border border-gold-500/30 z-10">
                        <span className="text-gold-500 text-xl font-bold">3</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-xl text-gold-400">Enrollment</h3>
                      </div>
                    </div>
                    
                    <p className="text-obsidian-200 relative z-10">
                      Selected candidates will receive enrollment details, payment options, and everything needed to join our founding cohort starting June 15.
                    </p>
                    
                    <div className="mt-4 pt-4 border-t border-gold-500/10 text-obsidian-300 text-sm flex items-center">
                      <span className="bg-gold-500/10 text-gold-500 px-2 py-1 rounded text-xs font-medium">Preparation Time: 2 weeks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Information */}
        <section className="mb-20 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-obsidian-800 p-8 rounded-xl shadow-gold-glow border border-gold-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-xl -mr-32 -mt-32"></div>
              
              <h3 className="font-bold text-xl mb-6 text-gold-400 flex items-center relative z-10">
                <span className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-500 mr-3">🗓️</span>
                Program Timeline
              </h3>
              
              <ul className="space-y-5 relative z-10">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center mt-0.5 mr-3">
                    <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                  </span>
                  <div>
                    <span className="font-bold text-white">Application Deadline:</span>
                    <p className="text-obsidian-200">May 31, 2025</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center mt-0.5 mr-3">
                    <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                  </span>
                  <div>
                    <span className="font-bold text-white">Interview Period:</span>
                    <p className="text-obsidian-200">June 1-10, 2025</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center mt-0.5 mr-3">
                    <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                  </span>
                  <div>
                    <span className="font-bold text-white">Program Start:</span>
                    <p className="text-obsidian-200">June 15, 2025</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center mt-0.5 mr-3">
                    <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                  </span>
                  <div>
                    <span className="font-bold text-white">Program Duration:</span>
                    <p className="text-obsidian-200">3-6 months (based on learning pace)</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-obsidian-800 p-8 rounded-xl shadow-gold-glow border border-gold-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-xl -mr-32 -mt-32"></div>
              
              <h3 className="font-bold text-xl mb-6 text-gold-400 flex items-center relative z-10">
                <span className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-500 mr-3">📋</span>
                Eligibility Requirements
              </h3>
              
              <ul className="space-y-5 relative z-10">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center mt-0.5 mr-3">
                    <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                  </span>
                  <div className="text-obsidian-200">
                    Basic understanding of programming concepts (formal degree not required)
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center mt-0.5 mr-3">
                    <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                  </span>
                  <div className="text-obsidian-200">
                    Dedication to commit 15-20 hours per week to the program
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center mt-0.5 mr-3">
                    <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                  </span>
                  <div className="text-obsidian-200">
                    Reliable internet access for attending live sessions (mobile or computer)
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center mt-0.5 mr-3">
                    <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                  </span>
                  <div className="text-obsidian-200">
                    Passion for learning and building practical skills
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Application Form */}
        <section className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            <span className="relative">
              Application Form
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gold-500/40"></span>
            </span>
          </h2>
          <ApplicationForm />
        </section>
        
        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            <span className="relative">
              Frequently Asked Questions
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gold-500/40"></span>
            </span>
          </h2>
          <FAQ />
        </section>
      </div>
    </main>
  );
};

export default ApplicationPage;