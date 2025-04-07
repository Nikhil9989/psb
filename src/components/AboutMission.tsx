'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useElementOnScreen } from '../../src/hooks/useElementOnScreen';
import Image from 'next/image';

const AboutMission = () => {
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      className="container mx-auto px-4 py-16"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            SKILL BRIDGE aims to transform education by bridging the gap between academic learning
            and industry requirements. We provide a personalized, technology-driven learning path
            that empowers students in tier-2 and tier-3 cities to become industry-ready professionals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center items-center"
        >
          <Image
            src="/images/about/mission.jpg"
            alt="SKILL BRIDGE Mission"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMission;
