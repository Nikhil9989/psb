import React from 'react';

const StatsSection = () => {
  return (
    <section className="bg-obsidian-900 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Skills Gap Crisis</h2>
          <p className="text-obsidian-300 text-lg max-w-3xl mx-auto">
            India faces a critical disconnect between education and employment that threatens economic growth and individual prosperity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat 1 */}
          <div className="bg-obsidian-800 p-6 rounded-xl border border-gold-500/20 shadow-gold-glow flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-gold-500 mb-3">51.25%</div>
            <h3 className="text-white text-lg font-semibold mb-2">Employment Ready</h3>
            <p className="text-obsidian-300">Only half of Indian youth possess the necessary skills for employment according to India Skills Report 2024</p>
          </div>
          
          {/* Stat 2 */}
          <div className="bg-obsidian-800 p-6 rounded-xl border border-gold-500/20 shadow-gold-glow flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-gold-500 mb-3">25%</div>
            <h3 className="text-white text-lg font-semibold mb-2">Engineering Graduates</h3>
            <p className="text-obsidian-300">Only a quarter of engineering graduates are considered employment-ready without additional training (NASSCOM)</p>
          </div>
          
          {/* Stat 3 */}
          <div className="bg-obsidian-800 p-6 rounded-xl border border-gold-500/20 shadow-gold-glow flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-gold-500 mb-3">65%</div>
            <h3 className="text-white text-lg font-semibold mb-2">Future Jobs</h3>
            <p className="text-obsidian-300">Of children entering primary school today will work in job types that don't yet exist (World Economic Forum)</p>
          </div>
          
          {/* Stat 4 */}
          <div className="bg-obsidian-800 p-6 rounded-xl border border-gold-500/20 shadow-gold-glow flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-gold-500 mb-3">$1.97T</div>
            <h3 className="text-white text-lg font-semibold mb-2">Economic Impact</h3>
            <p className="text-obsidian-300">Estimated loss in GDP growth by 2030 due to skill mismatches (McKinsey Global Institute)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
