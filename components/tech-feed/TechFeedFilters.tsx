'use client';

import React, { useState } from 'react';
import { Search, Filter, ArrowDownUp, X, Check, Calendar, TrendingUp } from 'lucide-react';

interface TechFeedFiltersProps {
  onFilterChange: (filters: {
    search: string;
    categories: string[];
    sortBy: string;
    timeframe: string;
    bookmarked: boolean;
  }) => void;
  availableCategories: string[];
}

const TechFeedFilters: React.FC<TechFeedFiltersProps> = ({
  onFilterChange,
  availableCategories,
}) => {
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('relevance');
  const [timeframe, setTimeframe] = useState('all');
  const [showBookmarked, setShowBookmarked] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    applyFilters(e.target.value, selectedCategories, sortBy, timeframe, showBookmarked);
  };
  
  const handleCategoryToggle = (category: string) => {
    const newSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    
    setSelectedCategories(newSelectedCategories);
    applyFilters(search, newSelectedCategories, sortBy, timeframe, showBookmarked);
  };
  
  const handleSortChange = (value: string) => {
    setSortBy(value);
    applyFilters(search, selectedCategories, value, timeframe, showBookmarked);
  };
  
  const handleTimeframeChange = (value: string) => {
    setTimeframe(value);
    applyFilters(search, selectedCategories, sortBy, value, showBookmarked);
  };
  
  const handleBookmarkedToggle = () => {
    setShowBookmarked(!showBookmarked);
    applyFilters(search, selectedCategories, sortBy, timeframe, !showBookmarked);
  };
  
  const clearAllFilters = () => {
    setSearch('');
    setSelectedCategories([]);
    setSortBy('relevance');
    setTimeframe('all');
    setShowBookmarked(false);
    applyFilters('', [], 'relevance', 'all', false);
  };
  
  const applyFilters = (
    searchTerm: string,
    categories: string[],
    sort: string,
    time: string,
    bookmarked: boolean
  ) => {
    onFilterChange({
      search: searchTerm,
      categories,
      sortBy: sort,
      timeframe: time,
      bookmarked,
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
            placeholder="Search technology articles..."
            value={search}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2.5 bg-obsidian-900 border border-gray-800 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        
        {/* Sort dropdown button */}
        <div className="relative md:w-48">
          <button
            onClick={() => {}}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-obsidian-900 border border-gray-800 rounded-lg text-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-500"
          >
            <div className="flex items-center">
              <ArrowDownUp size={18} className="mr-2 text-gray-500" />
              <span>
                {sortBy === 'relevance' && 'Most Relevant'}
                {sortBy === 'recent' && 'Most Recent'}
                {sortBy === 'popular' && 'Most Popular'}
              </span>
            </div>
            <div className="flex gap-1">
              <div className={`w-1.5 h-1.5 rounded-full ${sortBy === 'relevance' ? 'bg-purple-500' : 'bg-gray-700'}`}></div>
              <div className={`w-1.5 h-1.5 rounded-full ${sortBy === 'recent' ? 'bg-purple-500' : 'bg-gray-700'}`}></div>
              <div className={`w-1.5 h-1.5 rounded-full ${sortBy === 'popular' ? 'bg-purple-500' : 'bg-gray-700'}`}></div>
            </div>
          </button>
          <div className="absolute w-full mt-1 bg-obsidian-900 border border-gray-800 rounded-lg py-1 shadow-lg z-10 hidden">
            <button
              onClick={() => handleSortChange('relevance')}
              className="w-full flex items-center justify-between px-4 py-2 text-gray-300 hover:bg-obsidian-800"
            >
              <span>Most Relevant</span>
              {sortBy === 'relevance' && <Check size={16} className="text-purple-500" />}
            </button>
            <button
              onClick={() => handleSortChange('recent')}
              className="w-full flex items-center justify-between px-4 py-2 text-gray-300 hover:bg-obsidian-800"
            >
              <span>Most Recent</span>
              {sortBy === 'recent' && <Check size={16} className="text-purple-500" />}
            </button>
            <button
              onClick={() => handleSortChange('popular')}
              className="w-full flex items-center justify-between px-4 py-2 text-gray-300 hover:bg-obsidian-800"
            >
              <span>Most Popular</span>
              {sortBy === 'popular' && <Check size={16} className="text-purple-500" />}
            </button>
          </div>
        </div>
        
        {/* Timeframe dropdown button - simplified display */}
        <div className="md:w-48">
          <select
            value={timeframe}
            onChange={(e) => handleTimeframeChange(e.target.value)}
            className="w-full px-4 py-2.5 bg-obsidian-900 border border-gray-800 rounded-lg text-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 appearance-none"
            style={{ 
              backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22292.4%22 height=%22292.4%22%3E%3Cpath fill=%22%236B7280%22 d=%22M287 69.4a17.6 17.6 0 0 0-13-5.4H18.4c-5 0-9.3 1.8-12.9 5.4A17.6 17.6 0 0 0 0 82.2c0 5 1.8 9.3 5.4 12.9l128 127.9c3.6 3.6 7.8 5.4 12.8 5.4s9.2-1.8 12.8-5.4L287 95c3.5-3.5 5.4-7.8 5.4-12.8 0-5-1.9-9.2-5.5-12.8z%22/%3E%3C/svg%3E")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              backgroundSize: '12px',
              paddingRight: '2.5rem'
            }}
          >
            <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </div>
        
        {/* Filter toggle button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-4 py-2.5 bg-obsidian-900 border border-gray-800 rounded-lg text-gray-300 hover:bg-obsidian-700 flex items-center justify-center transition-colors"
        >
          <Filter size={18} className="mr-2" />
          Filters
          {selectedCategories.length > 0 && (
            <span className="ml-2 bg-purple-600 text-white text-xs font-medium px-2 rounded-full">
              {selectedCategories.length}
            </span>
          )}
        </button>
      </div>
      
      {/* Expanded filters */}
      {showFilters && (
        <div className="mt-4 border-t border-gray-800 pt-4">
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="text-sm font-medium text-gray-400 mr-2">
              Categories:
            </div>
            
            {availableCategories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryToggle(category)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  selectedCategories.includes(category)
                    ? 'bg-purple-600 text-white'
                    : 'bg-obsidian-900 text-gray-400 hover:bg-obsidian-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={showBookmarked}
                  onChange={handleBookmarkedToggle}
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-obsidian-900 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-purple-500 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-400">Bookmarked Only</span>
              </label>
            </div>
            
            {(search || selectedCategories.length > 0 || sortBy !== 'relevance' || timeframe !== 'all' || showBookmarked) && (
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

export default TechFeedFilters;
