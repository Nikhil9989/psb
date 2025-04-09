'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StatItemProps {
  value: string;
  label: string;
  highlight?: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, highlight = false }) => {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className={`text-3xl md:text-4xl font-bold mb-2 ${highlight ? 'gold-gradient-text' : 'text-white'}`}>
          {value}
        </h3>
        <p className="text-obsidian-300 text-sm">{label}</p>
      </motion.div>
    </div>
  );
};

interface StatsSectionProps {
  stats?: Array<{
    value: string;
    label: string;
    highlight?: boolean;
  }>;
  className?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({ 
  stats = [
    { value: "51.25%", label: "Employable Youth in India", highlight: true },
    { value: "25%", label: "Engineering Graduates Job-Ready", highlight: false },
    { value: "47%", label: "Workers Underqualified", highlight: false },
    { value: "65%", label: "Future Jobs Don't Exist Yet", highlight: true }
  ],
  className = ""
}) => {
  return (
    <div className={`py-8 px-6 bg-obsidian-800/80 rounded-lg border border-obsidian-700 ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            value={stat.value}
            label={stat.label}
            highlight={stat.highlight}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsSection;