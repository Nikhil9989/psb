'use client';

import React, { useState } from 'react';
import { Search, Filter, ChevronDown, X } from 'lucide-react';

interface ShowcaseFiltersProps {
  onFilterChange: (filters: {
    search: string;
    tags: string[];
    sortBy: string;
    cohort?: string;
    featured: boolean;
  }) => void;
  availableTags: string[];
  availableCohorts: string[];
}

const ShowcaseFilters: React.FC<ShowcaseFiltersProps> = ({
  onFilterChange,
  availableTags,
  availableCohorts,
}) => {
  const [search, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('recent');
  const [selectedCohort, setSelectedCohort] = useState<string | undefined>(undefined);
  const [showFeatured, setShowFeatured] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    applyFilters(e.target.value, selectedTags, sortBy, selectedCohort, showFeatured);
  };
  
  const handleTagToggle = (tag: string) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    
    setSelectedTags(newSelectedTags);
    applyFilters(search, newSelectedTags, sortBy, selectedCohort, showFeatured);
  };
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    applyFilters(search, selectedTags, e.target.value, selectedCohort, showFeatured);
  };
  
  const handleCohortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cohort = e.target.value === 'all' ? undefined : e.target.value;
    setSelectedCohort(cohort);
    applyFilters(search, selectedTags, sortBy, cohort, showFeatured);
  };
  
  const handleFeaturedToggle = () => {
    setShowFeatured(!showFeatured);
    applyFilters(search, selectedTags, sortBy, selectedCohort, !showFeatured);
  };
  
  const clearAllFilters = () => {
    setSearch('');
    setSelectedTags([]);
    setSortBy('recent');
    setSelectedCohort(undefined);
    setShowFeatured(false);
    applyFilters('', [], 'recent', undefined, false);
  };
  
  const applyFilters = (
    searchTerm: string,
    tags: string[],
    sort: string,
    cohort: string | undefined,
    featured: boolean
  ) => {
    onFilterChange({
      search: searchTerm,
      tags,
      sortBy: sort,
      cohort,
      featured,
    });
  };

  return (
    <div className="bg-obsidian-800 rounded-xl p-4 border border-gray-800 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2.5 bg-obsidian-900 border border-gray-800 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        
        {/* Sort option */}
        <div className="md:w-48">
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="w-full px-4 py-2.5 bg-obsidian-900 border border-gray-800 rounded-lg text-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 appearance-none"
            style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22292.4%22 height=%22292.4%22%3E%3Cpath fill=%22%236B7280%22 d=%22M287 69.4a17.6 17.6 0 0 0-13-5.4H18.4c-5 0-9.3 1.8-12.9 5.4A17.6 17.6 0 0 0 0 82.2c0 5 1.8 9.3 5.4 12.9l128 127.9c3.6 3.6 7.8 5.4 12.8 5.4s9.2-1.8 12.8-5.4L287 95c3.5-3.5 5.4-7.8 5.4-12.8 0-5-1.9-9.2-5.5-12.8z%22/%3E%3C/svg%3E")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                backgroundSize: '12px',
                paddingRight: '2.5rem' }}
          >
            <option value="recent">Most Recent</option>
            <option value="popular">Most Popular</option>
            <option value="trending">Trending</option>
            <option value="comments">Most Discussed</option>
          </select>
        </div>
        
        {/* Cohort filter */}
        <div className="md:w-48">
          <select
            value={selectedCohort || 'all'}
            onChange={handleCohortChange}
            className="w-full px-4 py-2.5 bg-obsidian-900 border border-gray-800 rounded-lg text-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 appearance-none"
            style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22292.4%22 height=%22292.4%22%3E%3Cpath fill=%22%236B7280%22 d=%22M287 69.4a17.6 17.6 0 0 0-13-5.4H18.4c-5 0-9.3 1.8-12.9 5.4A17.6 17.6 0 0 0 0 82.2c0 5 1.8 9.3 5.4 12.9l128 127.9c3.6 3.6 7.8 5.4 12.8 5.4s9.2-1.8 12.8-5.4L287 95c3.5-3.5 5.4-7.8 5.4-12.8 0-5-1.9-9.2-5.5-12.8z%22/%3E%3C/svg%3E")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                backgroundSize: '12px',
                paddingRight: '2.5rem' }}
          >
            <option value="all">All Cohorts</option>
            {availableCohorts.map(cohort => (
              <option key={cohort} value={cohort}>{cohort}</option>
            ))}
          </select>
        </div>
        
        {/* Filter toggle button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-4 py-2.5 bg-obsidian-900 border border-gray-800 rounded-lg text-gray-300 hover:bg-obsidian-700 flex items-center justify-center transition-colors"
        >
          <Filter size={18} className="mr-2" />
          Filters
          <ChevronDown
            size={16}
            className={`ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
      
      {/* Expanded filters */}
      {showFilters && (
        <div className="mt-4 border-t border-gray-800 pt-4">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="text-sm font-medium text-gray-400 mr-2">
              Tags:
            </div>
            
            {availableTags.map(tag => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-purple-600 text-white'
                    : 'bg-obsidian-900 text-gray-400 hover:bg-obsidian-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={showFeatured}
                  onChange={handleFeaturedToggle}
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-obsidian-900 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-purple-500 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-400">Featured Projects</span>
              </label>
            </div>
            
            {(search || selectedTags.length > 0 || sortBy !== 'recent' || selectedCohort || showFeatured) && (
              <button
                onClick={clearAllFilters}
                className="text-sm text-gray-400 hover:text-purple-400 flex items-center"
              >
                <X size={14} className="mr-1" />
                Clear Filters
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowcaseFilters;
