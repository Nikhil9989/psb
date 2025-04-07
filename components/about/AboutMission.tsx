'use client';

import { motion } from 'framer-motion';
import { useElementOnScreen } from '@/hooks/useElementOnScreen';
import Image from 'next/image';

const AboutMission = () => {
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            At Skill Bridge, we're on a mission to bridge the critical gap between traditional education and industry demands, particularly in India's tier-2 and tier-3 cities.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our domain-based learning approach focuses on teaching interconnected skills rather than isolated technologies, ensuring students develop a comprehensive understanding of their chosen field.
          </p>
          <p className="text-lg text-gray-700">
            Through our hybrid expert-guided learning model and partnerships with local institutions, we're making quality, industry-relevant education accessible to all, regardless of location or economic background.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl"
        >
          <Image
            src="/images/about/mission.jpg"
            alt="Skill Bridge mission"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500"
        >
          <h3 className="text-xl font-bold mb-3 text-gray-900">Accessibility</h3>
          <p className="text-gray-700">
            Making quality education accessible to all through institutional partnerships and flexible learning models.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500"
        >
          <h3 className="text-xl font-bold mb-3 text-gray-900">Relevance</h3>
          <p className="text-gray-700">
            Ensuring all learning content is directly aligned with current industry needs and practices.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500"
        >
          <h3 className="text-xl font-bold mb-3 text-gray-900">Personalization</h3>
          <p className="text-gray-700">
            Adapting to individual learning styles and career goals through AI-powered personalization.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMission;