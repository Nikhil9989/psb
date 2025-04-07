'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useElementOnScreen } from '@/hooks/useElementOnScreen';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Software Engineer',
    company: 'TechCorp India',
    image: '/testimonials/person1.jpg',
    quote: 'Skill Bridge transformed my career. The domain-based learning approach helped me understand how different technologies work together, not just individual skills. I went from struggling to find jobs to receiving multiple offers.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rahul Patel',
    role: 'Data Scientist',
    company: 'Analytics Hub',
    image: '/testimonials/person2.jpg',
    quote: 'The personalized learning path and 1-on-1 mentorship made all the difference. My mentor helped me navigate the complex field of data science and guided me through real-world projects that now form the core of my portfolio.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ananya Desai',
    role: 'Frontend Developer',
    company: 'DigitalFirst',
    image: '/testimonials/person3.jpg',
    quote: 'Coming from a tier-3 city with limited resources, Skill Bridge provided me access to industry-level training I couldn't find locally. The hybrid model with institutional partnerships made quality education accessible.',
    rating: 4,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.1 });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            Hear from our students who have transformed their careers with our domain-based learning approach.
          </p>
        </div>

        <motion.div
          className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8 shadow-lg relative"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mt-4 text-gray-900">{currentTestimonial.name}</h3>
              <p className="text-gray-600">{currentTestimonial.role}</p>
              <p className="text-blue-600 font-medium">{currentTestimonial.company}</p>
              <div className="flex mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < currentTestimonial.rating ? '#F59E0B' : 'none'}
                    stroke={i < currentTestimonial.rating ? '#F59E0B' : '#CBD5E0'}
                  />
                ))}
              </div>
            </div>

            <div className="md:w-2/3">
              <svg
                className="text-gray-300 w-10 h-10 mb-4"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-lg text-gray-700 italic">"{currentTestimonial.quote}"</p>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;