import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CohortAdvantageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const advantages = [
    {
      title: "Personalized Learning Paths",
      description: "AI-powered assessment creates custom roadmaps based on your skill level, interests, and career goals.",
      icon: "🧠",
    },
    {
      title: "Industry-Aligned Projects",
      description: "Work on real-world projects reviewed by hiring managers and industry leaders.",
      icon: "🏆",
    },
    {
      title: "1-on-1 Expert Mentorship",
      description: "Receive personalized guidance from industry professionals to accelerate your learning.",
      icon: "👨‍🏫",
    },
    {
      title: "Peer Accountability",
      description: "Learn alongside motivated peers who help keep you on track toward your goals.",
      icon: "👥",
    },
    {
      title: "Job-Ready Skills",
      description: "Graduate with practical skills that employers actually need, not just theoretical knowledge.",
      icon: "💼",
    }
  ];

  useEffect(() => {
    // Fix the TypeScript error by properly typing the interval
    let interval: NodeJS.Timeout | undefined;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrent((current) => (current === advantages.length - 1 ? 0 : current + 1));
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, advantages.length]);

  const next = () => {
    setCurrent(current === advantages.length - 1 ? 0 : current + 1);
    setAutoplay(false);
  };

  const prev = () => {
    setCurrent(current === 0 ? advantages.length - 1 : current - 1);
    setAutoplay(false);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          The Cohort Advantage
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <div 
              className="transition-all duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {advantages.map((advantage, index) => (
                <div 
                  key={index} 
                  className="min-w-full p-8 flex flex-col items-center text-center"
                >
                  <div className="text-5xl mb-4">{advantage.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 font-display">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-6">
            {advantages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setAutoplay(false);
                }}
                className={`w-3 h-3 mx-1 rounded-full transition-all ${
                  current === index ? 'bg-blue-600 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={prev}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          
          <button 
            onClick={next}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CohortAdvantageCarousel;