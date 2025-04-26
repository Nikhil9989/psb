'use client';

import React from 'react';
import { Activity, Code, UserCheck, Award, Heart, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const metrics = [
  {
    id: 'total-projects',
    label: 'Total Projects',
    value: '450+',
    icon: Code,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-400/20',
  },
  {
    id: 'active-students',
    label: 'Active Contributors',
    value: '250+',
    icon: UserCheck,
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
    borderColor: 'border-green-400/20',
  },
  {
    id: 'engagement',
    label: 'Monthly Interactions',
    value: '12K+',
    icon: Heart,
    color: 'text-rose-400',
    bgColor: 'bg-rose-400/10',
    borderColor: 'border-rose-400/20',
  },
  {
    id: 'top-tier',
    label: 'Featured Projects',
    value: '85+',
    icon: Award,
    color: 'text-amber-400',
    bgColor: 'bg-amber-400/10',
    borderColor: 'border-amber-400/20',
  },
  {
    id: 'domains',
    label: 'Technology Domains',
    value: '12',
    icon: Activity,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    borderColor: 'border-purple-400/20',
  },
  {
    id: 'hiring',
    label: 'Leads to Employment',
    value: '65%',
    icon: Rocket,
    color: 'text-teal-400',
    bgColor: 'bg-teal-400/10',
    borderColor: 'border-teal-400/20',
  },
];

const ShowcaseMetrics = () => {
  return (
    <section className="py-16 bg-obsidian-950/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-white">
            Showcase Impact
          </h2>
          <p className="text-gray-400">
            Our student showcase demonstrates the collective achievement of our learning community, 
            with projects spanning multiple domains and technology stacks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-xl border ${metric.borderColor} ${metric.bgColor} backdrop-blur-sm`}
            >
              <div className="flex items-start">
                <div className={`p-3 rounded-lg ${metric.bgColor} ${metric.color}`}>
                  <metric.icon size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-gray-400 text-sm">{metric.label}</p>
                  <h3 className={`text-2xl md:text-3xl font-bold ${metric.color}`}>
                    {metric.value}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Ready to showcase your skills and join our growing community of creators?
            </p>
            <a 
              href="/apply" 
              className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-700 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-800 transition-all shadow-lg"
            >
              Start Your Learning Journey
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseMetrics;
