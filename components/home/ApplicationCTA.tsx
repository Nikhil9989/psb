'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ApplicationCTA = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="flex flex-col space-y-3"
      >
        <Link 
          href="/application-status" 
          className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg rounded-full px-4 py-2 text-sm font-medium flex items-center transition-colors"
        >
          <span>Check Application Status</span>
        </Link>
        
        <Link 
          href="/apply" 
          className="bg-primary text-white hover:bg-primary/90 shadow-lg rounded-full px-4 py-2 text-sm font-medium flex items-center transition-colors"
        >
          <span>Apply Now</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  );
};

export default ApplicationCTA;