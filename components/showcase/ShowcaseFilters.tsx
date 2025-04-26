'use client';

import React, { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';

// Define domains and technologies for filters
const domains = [
  'All Domains',
  'Web Development',
  'Data Science',
  'Mobile Development',
  'DevOps',
  'Cloud Computing',
  'AI/ML',
];

const technologies = [
  'All Technologies',
  'React',
  'Node.js',
  'Python',
  'TensorFlow',
  'AWS',
  'Docker',
  'Flask',
  'MongoDB',
  'PostgreSQL',
  'Angular',
  'Vue.js',
  'React Native',
  'Flutter',
  'Django',
];

const skillLevels = [
  'All Levels',
  'Beginner (0-20%)',
  'Intermediate (20-40%)',
  'Proficient (40-60%)',
  'Advanced (60-80%)',
  'Expert (80-100%)',
];

const ShowcaseFilters = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All Domains');
  const [selectedTechnology, setSelectedTechnology] = useState('All Technologies');
  const [selectedSkillLevel, setSelectedSkillLevel] = useState('All Levels');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would trigger the search
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="py-8 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex mb-6">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search projects by name, student, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 pl-4 pr-12 rounded-l-lg bg-obsidian-800 border border-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-amber-400"
            >
              <Search size={18} />
            </button>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 md:hidden px-4 py-3 bg-obsidian-800 rounded-r-lg border border-l-0 border-gray-700"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            <Filter size={18} />
            <span>Filters</span>
          </button>
        </form>

        {/* Desktop Filters */}
        <div className="hidden md:flex md:flex-wrap md:items-center md:gap-4">
          {/* Domain Filter */}
          <div className="relative mb-4 md:mb-0">
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="appearance-none bg-obsidian-800 border border-gray-700 text-white py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
            >
              {domains.map((domain) => (
                <option key={domain} value={domain}>
                  {domain}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400"
            />
          </div>

          {/* Technology Filter */}
          <div className="relative mb-4 md:mb-0">
            <select
              value={selectedTechnology}
              onChange={(e) => setSelectedTechnology(e.target.value)}
              className="appearance-none bg-obsidian-800 border border-gray-700 text-white py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
            >
              {technologies.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400"
            />
          </div>

          {/* Skill Level Filter */}
          <div className="relative mb-4 md:mb-0">
            <select
              value={selectedSkillLevel}
              onChange={(e) => setSelectedSkillLevel(e.target.value)}
              className="appearance-none bg-obsidian-800 border border-gray-700 text-white py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
            >
              {skillLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400"
            />
          </div>

          {/* Sort Options */}
          <div className="relative ml-auto">
            <select
              className="appearance-none bg-obsidian-800 border border-gray-700 text-white py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="featured">Featured</option>
            </select>
            <ChevronDown
              size={16}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400"
            />
          </div>
        </div>

        {/* Mobile Filters */}
        {showMobileFilters && (
          <div className="md:hidden space-y-4 pt-4 border-t border-gray-800">
            {/* Domain Filter */}
            <div className="relative">
              <label className="block text-sm text-gray-400 mb-1">Domain</label>
              <select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                className="w-full appearance-none bg-obsidian-800 border border-gray-700 text-white py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
              >
                {domains.map((domain) => (
                  <option key={domain} value={domain}>
                    {domain}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-[calc(50%+0.5rem)] transform -translate-y-1/2 pointer-events-none text-gray-400"
              />
            </div>

            {/* Technology Filter */}
            <div className="relative">
              <label className="block text-sm text-gray-400 mb-1">Technology</label>
              <select
                value={selectedTechnology}
                onChange={(e) => setSelectedTechnology(e.target.value)}
                className="w-full appearance-none bg-obsidian-800 border border-gray-700 text-white py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
              >
                {technologies.map((tech) => (
                  <option key={tech} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-[calc(50%+0.5rem)] transform -translate-y-1/2 pointer-events-none text-gray-400"
              />
            </div>

            {/* Skill Level Filter */}
            <div className="relative">
              <label className="block text-sm text-gray-400 mb-1">Skill Level</label>
              <select
                value={selectedSkillLevel}
                onChange={(e) => setSelectedSkillLevel(e.target.value)}
                className="w-full appearance-none bg-obsidian-800 border border-gray-700 text-white py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
              >
                {skillLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-[calc(50%+0.5rem)] transform -translate-y-1/2 pointer-events-none text-gray-400"
              />
            </div>

            {/* Sort Options */}
            <div className="relative">
              <label className="block text-sm text-gray-400 mb-1">Sort By</label>
              <select
                className="w-full appearance-none bg-obsidian-800 border border-gray-700 text-white py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
              >
                <option value="recent">Most Recent</option>
                <option value="popular">Most Popular</option>
                <option value="featured">Featured</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-[calc(50%+0.5rem)] transform -translate-y-1/2 pointer-events-none text-gray-400"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShowcaseFilters;
