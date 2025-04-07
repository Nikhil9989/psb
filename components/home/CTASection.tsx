'use client';

import { motion } from 'framer-motion';
import { useElementOnScreen } from '@/hooks/useElementOnScreen';
import Button from '../common/Button';

const CTASection = () => {
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-indigo-900 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Bridge Your Skill Gap?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with our domain-based learning approach. Applications are now open for upcoming cohorts.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              href="/apply"
              className="bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-400 border-0"
            >
              Apply Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              href="/contact"
              className="border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
          
          <p className="mt-8 text-gray-300 text-sm">
            Limited spots available. Next cohort begins June 15, 2025.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;