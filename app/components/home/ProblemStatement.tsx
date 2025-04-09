import React from 'react';
import StatsSection from '@/components/StatsSection';

const ProblemStatement = () => {
  return (
    <section id="why-skillbridge" className="py-20 bg-obsidian-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why SKILL BRIDGE?</h2>
          <p className="text-obsidian-300 text-lg leading-relaxed">
            The Indian education system primarily focuses on teaching individual subjects in isolation 
            rather than fostering an all-round, industry-grade skill set. As a result, students graduate 
            with theoretical knowledge but lack the interdisciplinary expertise required to thrive in real-world industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-obsidian-800 p-8 rounded-xl border border-gold-500/20 shadow-gold-glow">
            <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Fragmented Learning</h3>
            <p className="text-obsidian-300">
              Current education teaches technologies in isolation, but real careers require multiple skills used together. 
              We integrate related skills into domain-based learning paths.
            </p>
          </div>
          
          <div className="bg-obsidian-800 p-8 rounded-xl border border-gold-500/20 shadow-gold-glow">
            <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">One-Size-Fits-All Approach</h3>
            <p className="text-obsidian-300">
              Traditional programs force everyone through identical paths regardless of learning speed or prior knowledge. 
              Our adaptive learning personalizes the experience.
            </p>
          </div>
          
          <div className="bg-obsidian-800 p-8 rounded-xl border border-gold-500/20 shadow-gold-glow">
            <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Theory-Practice Divide</h3>
            <p className="text-obsidian-300">
              Graduates have theoretical knowledge but lack practical application skills. Our project-based 
              approach ensures you can build real solutions, not just answer exam questions.
            </p>
          </div>
        </div>
        
        {/* Add the Stats Section here */}
        <StatsSection />
      </div>
    </section>
  );
};

export default ProblemStatement;
