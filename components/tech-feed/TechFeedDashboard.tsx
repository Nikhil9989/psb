import React from 'react';
import { Bookmark, Share, ExternalLink, ThumbsUp, Clock, Tag, Search, Bell, Filter, Trash } from 'lucide-react';

const TechFeedDashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Technology Feed</h1>
        <div className="flex space-x-2">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="bg-gray-700 border border-gray-600 text-white px-4 py-2 pl-10 rounded-md w-64"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
          <button className="flex items-center bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md transition">
            <Bell className="h-4 w-4 mr-2" />
            Manage Alerts
          </button>
          <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </button>
        </div>
      </div>

      {/* Topic Interests */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 className="text-lg font-semibold mb-4">Your Interests</h2>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest, index) => (
            <div 
              key={index} 
              className="bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 px-3 py-1 rounded-full text-sm flex items-center"
            >
              {interest}
              <button className="ml-2 hover:text-white">
                <Trash className="h-3 w-3" />
              </button>
            </div>
          ))}
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-full text-sm transition">
            + Add Interest
          </button>
        </div>
      </div>

      {/* Today's Top Stories */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Today's Top Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topStories.map((story, index) => (
            <div key={index} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
              <div className="h-48 bg-gray-900 relative">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-indigo-500/80 px-2 py-1 rounded text-xs text-white">
                  {story.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg line-clamp-2">{story.title}</h3>
                <div className="flex items-center mt-2 text-gray-400 text-sm">
                  <img 
                    src={story.sourceIcon} 
                    alt={story.source}
                    className="w-4 h-4 rounded-full mr-2"
                  />
                  <span>{story.source}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{story.time}</span>
                </div>
                <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                  {story.summary}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-white transition">
                      <ThumbsUp className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-white transition">
                      <Bookmark className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-white transition">
                      <Share className="h-4 w-4" />
                    </button>
                  </div>
                  <a 
                    href="#" 
                    className="flex items-center text-indigo-400 hover:text-indigo-300 text-sm transition"
                  >
                    Read More
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Personalized Feed */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Personalized For You</h2>
        <div className="space-y-4">
          {personalizedFeed.map((article, index) => (
            <div key={index} className="bg-gray-800 rounded-lg border border-gray-700 p-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 h-24 bg-gray-900 rounded-md overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center">
                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded mr-2">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {article.relevance}% match to your interests
                    </span>
                  </div>
                  <h3 className="font-semibold mt-1">{article.title}</h3>
                  <div className="flex items-center mt-1 text-gray-400 text-xs">
                    <img 
                      src={article.sourceIcon} 
                      alt={article.source}
                      className="w-3 h-3 rounded-full mr-1"
                    />
                    <span>{article.source}</span>
                    <span className="mx-1">•</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{article.time}</span>
                    <span className="mx-1">•</span>
                    <Tag className="h-3 w-3 mr-1" />
                    <span>{article.readTime} min read</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                    {article.summary}
                  </p>
                </div>
                <div className="flex flex-col justify-between items-end">
                  <div className="flex space-x-1">
                    <button className="text-gray-400 hover:text-white transition">
                      <Bookmark className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-white transition">
                      <Share className="h-4 w-4" />
                    </button>
                  </div>
                  <a 
                    href="#" 
                    className="flex items-center text-indigo-400 hover:text-indigo-300 text-xs transition"
                  >
                    Read Article
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Saved Articles */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Saved Articles</h2>
        {savedArticles.length > 0 ? (
          <div className="space-y-4">
            {savedArticles.map((article, index) => (
              <div key={index} className="flex items-center justify-between border-b border-gray-700 pb-4 last:border-0 last:pb-0">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-900 rounded-md overflow-hidden mr-4">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{article.title}</h3>
                    <div className="flex items-center mt-1 text-gray-400 text-xs">
                      <span>{article.source}</span>
                      <span className="mx-1">•</span>
                      <span>Saved {article.savedTime}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-gray-400 hover:text-white transition">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                  <button className="text-gray-400 hover:text-red-400 transition">
                    <Trash className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Bookmark className="h-12 w-12 text-gray-500 mx-auto mb-3" />
            <p className="text-gray-400">No saved articles yet</p>
            <p className="text-gray-500 text-sm mt-1">
              Bookmark articles to read them later
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const interests = [
  "Web Development", 
  "React.js", 
  "Machine Learning", 
  "Cloud Computing", 
  "JavaScript", 
  "Mobile Development", 
  "DevOps"
];

const topStories = [
  {
    title: "Next.js 14 Released with Major Performance Improvements",
    summary: "Vercel has announced the release of Next.js 14, featuring significant performance improvements, enhanced server components, and a revamped routing system.",
    image: "/api/placeholder/500/300",
    category: "Web Development",
    source: "Tech News Daily",
    sourceIcon: "/api/placeholder/20/20",
    time: "3 hours ago"
  },
  {
    title: "The Impact of AI on Front-End Development in 2025",
    summary: "How artificial intelligence tools are transforming the landscape of front-end development, from code generation to automated testing and optimization.",
    image: "/api/placeholder/500/300",
    category: "AI",
    source: "Dev Insights",
    sourceIcon: "/api/placeholder/20/20",
    time: "5 hours ago"
  },
  {
    title: "Understanding React Server Components: A Comprehensive Guide",
    summary: "A deep dive into React Server Components, how they work, and how they can dramatically improve application performance and developer experience.",
    image: "/api/placeholder/500/300",
    category: "React",
    source: "JavaScript Weekly",
    sourceIcon: "/api/placeholder/20/20",
    time: "Yesterday"
  }
];

const personalizedFeed = [
  {
    title: "7 Advanced TypeScript Patterns Every Developer Should Know",
    summary: "Explore powerful TypeScript patterns that can make your code more robust, maintainable, and type-safe. From mapped types to conditional types and beyond.",
    image: "/api/placeholder/100/100",
    category: "TypeScript",
    relevance: 92,
    source: "TypeScript Monthly",
    sourceIcon: "/api/placeholder/20/20",
    time: "2 hours ago",
    readTime: 8
  },
  {
    title: "Building Microservices with Node.js and Docker: Best Practices",
    summary: "Learn how to design, develop, and deploy scalable microservices using Node.js and Docker. This article covers architecture patterns, communication strategies, and deployment workflows.",
    image: "/api/placeholder/100/100",
    category: "Backend Development",
    relevance: 87,
    source: "Node.js Digest",
    sourceIcon: "/api/placeholder/20/20",
    time: "1 day ago",
    readTime: 12
  },
  {
    title: "State Management in React: Context API vs. Redux vs. Zustand",
    summary: "A comparison of popular state management solutions in the React ecosystem. Understand the trade-offs and choose the right tool for your specific use case.",
    image: "/api/placeholder/100/100",
    category: "React",
    relevance: 95,
    source: "React Patterns",
    sourceIcon: "/api/placeholder/20/20",
    time: "2 days ago",
    readTime: 10
  },
  {
    title: "Introduction to Web Assembly: Running C++ in the Browser",
    summary: "Discover how Web Assembly is changing web development by allowing languages like C++ to run in browsers with near-native performance.",
    image: "/api/placeholder/100/100",
    category: "Web Technologies",
    relevance: 78,
    source: "Modern Web",
    sourceIcon: "/api/placeholder/20/20",
    time: "3 days ago",
    readTime: 15
  }
];

const savedArticles = [
  {
    title: "Advanced CSS Animation Techniques",
    source: "CSS Tricks",
    savedTime: "2 days ago",
    image: "/api/placeholder/100/100"
  },
  {
    title: "Building Accessible Web Applications",
    source: "A11y Project",
    savedTime: "1 week ago",
    image: "/api/placeholder/100/100"
  },
  {
    title: "Performance Optimization with React.js",
    source: "React Blog",
    savedTime: "2 weeks ago",
    image: "/api/placeholder/100/100"
  }
];

export default TechFeedDashboard;
