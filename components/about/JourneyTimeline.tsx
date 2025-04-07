'use client';

import { motion } from 'framer-motion';
import { useElementOnScreen } from '@/hooks/useElementOnScreen';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2023',
    title: 'The Inception',
    description: 'Skill Bridge was founded with a vision to bridge the skill gap in Indian education, particularly focusing on tier-2 and tier-3 cities.',
  },
  {
    year: '2023',
    title: 'First Partnerships',
    description: 'Established initial partnerships with 3 educational institutions in Lucknow, Jaipur, and Indore to test our hybrid learning model.',
  },
  {
    year: '2024',
    title: 'Curriculum Development',
    description: 'Developed our domain-based progressive learning framework with input from over 50 industry experts across multiple fields.',
  },
  {
    year: '2024',
    title: 'Technology Platform',
    description: 'Launched our AI-powered personalization platform that adapts learning paths to individual student needs and career goals.',
  },
  {
    year: '2024',
    title: 'First Cohort Graduates',
    description: 'Our pilot cohorts achieved a 95% placement rate, with graduates seeing an average 65% increase in starting salary compared to peers.',
  },
  {
    year: '2025',
    title: 'Expansion',
    description: 'Expanded to 12 cities across India with 25+ institutional partners, making quality education accessible to thousands more students.',
  },
];

const JourneyTimeline = () => {
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4 text-primary">Our Journey</h2>
        <p className="text-lg text-gray-700">
          From a small initiative to bridge the education-employment gap to a growing platform transforming careers across India.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

        {timelineEvents.map((event, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`flex items-center justify-between mb-8 relative ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`w-5/12 ${isEven ? 'text-right' : 'text-left'}`}>
                <span className="block text-sm font-semibold text-blue-600 mb-1">{event.year}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>

              {/* Center dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white z-10"></div>

              <div className="w-5/12"></div>
            </motion.div>
          );
        })}

        {/* Future marker */}
        <motion.div
          className="text-center relative z-10 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: timelineEvents.length * 0.1 }}
        >
          <div className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-full">
            The journey continues...
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneyTimeline;