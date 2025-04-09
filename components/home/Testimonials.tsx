'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, ArrowRight } from 'lucide-react';
import { useElementOnScreen } from '../../src/hooks/useElementOnScreen';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
  beforeSkills?: string;
  afterSkills?: string;
  location?: string;
  storyType: 'student' | 'industry' | 'transformation';
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Software Engineer',
    company: 'TechCorp India',
    location: 'Jaipur, Rajasthan',
    image: '/testimonials/person1.jpg',
    quote: `SKILL BRIDGE transformed my career. The domain-based learning approach helped me understand how different technologies work together, not just individual skills. I went from struggling to find jobs to receiving multiple offers within weeks of completing the program.`,
    beforeSkills: 'Basic HTML/CSS knowledge, introductory JavaScript',
    afterSkills: 'Full-stack development (MERN), API integration, deployment, collaborative coding',
    rating: 5,
    storyType: 'transformation'
  },
  {
    id: 2,
    name: 'Rahul Patel',
    role: 'Data Scientist',
    company: 'Analytics Hub',
    location: 'Nagpur, Maharashtra',
    image: '/testimonials/person2.jpg',
    quote: `The personalized learning path and 1-on-1 mentorship made all the difference. My mentor helped me navigate the complex field of data science and guided me through real-world projects that now form the core of my portfolio. I'm earning 40% more than my peers who took traditional routes.`,
    beforeSkills: 'Basic Python programming, college statistics',
    afterSkills: 'Advanced ML algorithms, data visualization, predictive modeling, production deployment',
    rating: 5,
    storyType: 'student'
  },
  {
    id: 3,
    name: 'Ananya Desai',
    role: 'Frontend Developer',
    company: 'DigitalFirst',
    location: 'Surat, Gujarat',
    image: '/testimonials/person3.jpg',
    quote: `Coming from a tier-3 city with limited resources, SKILL BRIDGE provided me access to industry-level training I couldn't find locally. The hybrid model with institutional partnerships made quality education accessible without relocation. Now I'm working remotely for a multinational company.`,
    beforeSkills: 'Self-taught HTML, limited design knowledge',
    afterSkills: 'React, component architecture, UI/UX principles, responsive design, accessibility',
    rating: 4,
    storyType: 'student'
  },
  {
    id: 4,
    name: 'Vikram Malhotra',
    role: 'CTO',
    company: 'InnovateX',
    image: '/testimonials/person4.jpg',
    quote: `As an employer, I've been consistently impressed with SKILL BRIDGE graduates. They come prepared with practical skills and collaborative experience that makes them productive from day one. Their domain-based learning approach aligns perfectly with how real development teams operate.`,
    rating: 5,
    storyType: 'industry'
  },
  {
    id: 5,
    name: 'Sneha Kumar',
    role: 'UI/UX Designer',
    company: 'CreativeAxis',
    location: 'Bhubaneswar, Odisha',
    image: '/testimonials/person5.jpg',
    quote: `I was working as a graphic designer but struggled to transition to digital product design. SKILL BRIDGE's structured curriculum and mentor support helped me build a completely new skill set while keeping my part-time job. Within 6 months, I secured a full-time UI/UX role with a 70% salary increase.`,
    beforeSkills: 'Print design, basic Photoshop',
    afterSkills: 'Figma prototyping, user research, interaction design, design systems',
    rating: 5,
    storyType: 'transformation'
  },
  {
    id: 6,
    name: 'Dr. Rajesh Agarwal',
    role: 'Director of Engineering',
    company: 'TechEdu Institute',
    image: '/testimonials/person6.jpg',
    quote: `Our partnership with SKILL BRIDGE has significantly improved graduate outcomes. Their practical, industry-aligned approach complements our theoretical foundation perfectly. We've seen a 40% increase in placement rates for students who participate in their programs alongside our curriculum.`,
    rating: 5,
    storyType: 'industry'
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const showTransformation = testimonial.storyType === 'transformation' && testimonial.beforeSkills && testimonial.afterSkills;
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col h-full">
      <div className="flex items-start mb-6">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-100 flex-shrink-0">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
          <p className="text-blue-600">{testimonial.role}</p>
          <p className="text-gray-600">{testimonial.company}</p>
          {testimonial.location && (
            <p className="text-gray-500 text-sm">{testimonial.location}</p>
          )}
          <div className="flex mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < testimonial.rating ? '#F59E0B' : 'none'}
                stroke={i < testimonial.rating ? '#F59E0B' : '#CBD5E0'}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mb-6 flex-grow">
        <div className="text-gray-700 italic relative pl-6">
          <Quote size={18} className="absolute left-0 top-0 text-blue-400 opacity-60" />
          {testimonial.quote}
        </div>
      </div>

      {showTransformation && (
        <div className="mt-auto">
          <div className="border-t border-gray-200 pt-4 mt-4">
            <h4 className="font-semibold text-gray-900 mb-2">Skill Transformation</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-sm text-gray-600 font-medium mb-1">Before</p>
                <p className="text-sm">{testimonial.beforeSkills}</p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <p className="text-sm text-blue-800 font-medium mb-1">After</p>
                <p className="text-sm">{testimonial.afterSkills}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const TestimonialFeature = () => {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const featuredTestimonial = testimonials[featuredIndex];
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8 shadow-lg mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/3 flex flex-col items-center">
          <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-xl overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={featuredTestimonial.image}
              alt={featuredTestimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center mt-4">
            <h3 className="text-2xl font-bold text-gray-900">{featuredTestimonial.name}</h3>
            <p className="text-blue-600 font-medium">{featuredTestimonial.role}</p>
            <p className="text-gray-700">{featuredTestimonial.company}</p>
            {featuredTestimonial.location && (
              <p className="text-gray-600 text-sm">{featuredTestimonial.location}</p>
            )}
            <div className="flex justify-center mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  fill={i < featuredTestimonial.rating ? '#F59E0B' : 'none'}
                  stroke={i < featuredTestimonial.rating ? '#F59E0B' : '#CBD5E0'}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="text-xl md:text-2xl text-gray-700 italic relative pl-10 leading-relaxed">
            <Quote size={32} className="absolute left-0 top-0 text-blue-400 opacity-60" />
            "{featuredTestimonial.quote}"
          </div>

          {featuredTestimonial.storyType === 'transformation' && featuredTestimonial.beforeSkills && featuredTestimonial.afterSkills && (
            <div className="mt-8 border-t border-gray-200 pt-6">
              <h4 className="font-semibold text-gray-900 mb-4 text-lg">Skill Transformation Journey</h4>
              <div className="flex flex-col md:flex-row gap-4 relative">
                <div className="bg-gray-50 p-4 rounded-lg md:w-1/2">
                  <p className="font-medium text-gray-700 mb-2">Before SKILL BRIDGE</p>
                  <p className="text-gray-600">{featuredTestimonial.beforeSkills}</p>
                </div>
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                  <div className="bg-white rounded-full p-2 shadow-md">
                    <ArrowRight size={24} className="text-blue-600" />
                  </div>
                </div>
                <div className="md:hidden my-2 flex justify-center">
                  <div className="bg-white rounded-full p-2 shadow-md transform rotate-90">
                    <ArrowRight size={24} className="text-blue-600" />
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg md:w-1/2">
                  <p className="font-medium text-blue-800 mb-2">After SKILL BRIDGE</p>
                  <p className="text-gray-700">{featuredTestimonial.afterSkills}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setFeaturedIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === featuredIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'student' | 'industry' | 'transformation'>('all');
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.1 });

  const filteredTestimonials = testimonials.filter(
    (t) => activeFilter === 'all' || t.storyType === activeFilter
  );

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Success Stories</h2>
          <p className="text-xl text-gray-600">
            Hear from our students and industry partners about the impact of our domain-based learning approach.
          </p>
        </div>

        <TestimonialFeature />

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-200 rounded-full p-1">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'all' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Stories
            </button>
            <button
              onClick={() => setActiveFilter('student')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'student' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-300'
              }`}
            >
              Student Journeys
            </button>
            <button
              onClick={() => setActiveFilter('transformation')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'transformation' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-300'
              }`}
            >
              Skill Transformations
            </button>
            <button
              onClick={() => setActiveFilter('industry')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'industry' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-300'
              }`}
            >
              Industry Validation
            </button>
          </div>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {filteredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <a 
            href="#apply" 
            className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Start Your Success Story
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;