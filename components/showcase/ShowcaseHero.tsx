import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

const ShowcaseHero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-obsidian-900 to-obsidian-900 z-0"></div>
      
      {/* Floating golden particles effect */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-400/40"
            style={{
              width: `${Math.random() * 12 + 4}px`,
              height: `${Math.random() * 12 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-900/20 border border-amber-700/30 text-amber-400 text-sm font-medium mb-6">
            <Star size={16} className="mr-2" />
            <span>Discover Student Excellence</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500">
            Student Showcase Wall
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore outstanding projects created by SKILL BRIDGE students. Witness the transformation from theoretical knowledge to practical expertise across various domains.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/apply" 
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-700 text-white font-semibold hover:from-amber-600 hover:to-amber-800 transition-all shadow-lg shadow-amber-900/20"
            >
              Join Our Community
            </Link>
            <Link 
              href="/curriculum" 
              className="px-8 py-3 rounded-lg bg-obsidian-800 border border-amber-700/30 text-white font-semibold hover:bg-obsidian-700 transition-all flex items-center"
            >
              Explore Curriculum <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseHero;
