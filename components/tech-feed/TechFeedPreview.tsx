import React from 'react';
import { Clock, Tag, Bookmark, Share, ThumbsUp, ExternalLink } from 'lucide-react';

const TechFeedPreview = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {/* Top Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Popular Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <a 
                key={index}
                href="#"
                className="bg-gray-800 hover:bg-gray-700 text-gray-200 px-4 py-2 rounded-md transition border border-gray-700 flex items-center"
              >
                <span className={`h-3 w-3 rounded-full mr-2 ${category.color}`}></span>
                {category.name}
              </a>
            ))}
          </div>
        </div>

        {/* Trending Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Trending This Week</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingArticles.map((article, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                <div className="h-48 bg-gray-900">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className={`h-2 w-2 rounded-full mr-2 ${getCategoryColor(article.category)}`}></span>
                    <span className="text-sm text-gray-400">{article.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{article.title}</h3>
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <Tag className="h-3 w-3 mr-1" />
                    <span>{article.readTime} min read</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {article.summary}
                  </p>
                  <div className="flex justify-between items-center">
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
                      className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
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

        {/* Industry Updates */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Industry Updates</h2>
            <button className="text-blue-400 hover:text-blue-300 text-sm flex items-center">
              View All Updates
              <ExternalLink className="h-3 w-3 ml-1" />
            </button>
          </div>
          <div className="space-y-6">
            {industryUpdates.map((update, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <div className="flex items-start gap-4">
                  <img 
                    src={update.logo} 
                    alt={update.company}
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{update.title}</h3>
                        <div className="flex items-center text-gray-400 text-sm mt-1">
                          <span className="font-medium text-gray-300">{update.company}</span>
                          <span className="mx-2">•</span>
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{update.date}</span>
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs ${getCategoryTagStyle(update.category)}`}>
                        {update.category}
                      </div>
                    </div>
                    <p className="text-gray-300 mt-3">{update.content}</p>
                    {update.links && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {update.links.map((link, i) => (
                          <a 
                            key={i}
                            href="#"
                            className="bg-gray-700 hover:bg-gray-600 text-gray-200 px-3 py-1 rounded-md text-sm transition"
                          >
                            {link}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const categories = [
  { name: 'Web Development', color: 'bg-blue-500' },
  { name: 'Machine Learning', color: 'bg-green-500' },
  { name: 'DevOps', color: 'bg-purple-500' },
  { name: 'Mobile Development', color: 'bg-yellow-500' },
  { name: 'Data Science', color: 'bg-red-500' },
  { name: 'Cybersecurity', color: 'bg-indigo-500' },
  { name: 'Cloud Computing', color: 'bg-pink-500' },
  { name: 'Blockchain', color: 'bg-orange-500' }
];

const trendingArticles = [
  {
    title: "The Evolution of React: What's New in React 19",
    summary: "Explore the latest features, performance improvements, and breaking changes in React 19. Learn how the new concurrent rendering engine transforms the way you build web applications.",
    image: "/api/placeholder/500/300",
    category: "Web Development",
    date: "April 23, 2025",
    readTime: 8
  },
  {
    title: "Building Scalable Microservices with Golang",
    summary: "A comprehensive guide to designing, implementing, and deploying scalable microservice architectures using Golang, Docker, and Kubernetes for high-traffic applications.",
    image: "/api/placeholder/500/300",
    category: "DevOps",
    date: "April 21, 2025",
    readTime: 12
  },
  {
    title: "AI-Driven Analytics: Transforming Data into Insights",
    summary: "How modern AI techniques are revolutionizing data analytics, enabling businesses to extract actionable insights from massive datasets with minimal human intervention.",
    image: "/api/placeholder/500/300",
    category: "Data Science",
    date: "April 19, 2025",
    readTime: 10
  }
];

const industryUpdates = [
  {
    title: "Google Unveils Next-Generation LLM with Unprecedented Reasoning Capabilities",
    company: "Google AI",
    logo: "/api/placeholder/100/100",
    date: "2 days ago",
    category: "AI Research",
    content: "Google has announced its latest large language model, capable of advanced reasoning and problem-solving that approaches human-level performance on complex tasks. The model demonstrates significant improvements in mathematical reasoning, coding, and logical inference compared to previous generations.",
    links: ["Technical Paper", "Demo", "API Documentation"]
  },
  {
    title: "TypeScript 6.0 Released with Major Performance Improvements",
    company: "Microsoft",
    logo: "/api/placeholder/100/100",
    date: "4 days ago",
    category: "Programming Languages",
    content: "Microsoft has released TypeScript 6.0, featuring significant performance improvements to the type checker, compilation process, and editor integration. The update also introduces several new language features including pattern matching, enhanced type inference, and improved module resolution.",
    links: ["Release Notes", "Migration Guide", "Webinar"]
  },
  {
    title: "AWS Announces Serverless AI Deployment Platform",
    company: "Amazon Web Services",
    logo: "/api/placeholder/100/100",
    date: "1 week ago",
    category: "Cloud Computing",
    content: "AWS has launched a new fully managed service for deploying AI models with zero infrastructure management. The platform automatically scales based on demand, optimizes model performance, and reduces deployment costs compared to traditional infrastructure solutions.",
    links: ["Product Page", "Documentation", "Getting Started"]
  }
];

const getCategoryColor = (category) => {
  const categoryMap = {
    'Web Development': 'bg-blue-500',
    'Machine Learning': 'bg-green-500',
    'DevOps': 'bg-purple-500',
    'Mobile Development': 'bg-yellow-500',
    'Data Science': 'bg-red-500',
    'Cybersecurity': 'bg-indigo-500',
    'Cloud Computing': 'bg-pink-500',
    'Blockchain': 'bg-orange-500',
    'AI Research': 'bg-green-500',
    'Programming Languages': 'bg-blue-500'
  };
  
  return categoryMap[category] || 'bg-gray-500';
};

const getCategoryTagStyle = (category) => {
  const styleMap = {
    'AI Research': 'bg-green-500/20 text-green-400',
    'Programming Languages': 'bg-blue-500/20 text-blue-400',
    'Cloud Computing': 'bg-pink-500/20 text-pink-400',
    'Web Development': 'bg-blue-500/20 text-blue-400',
    'DevOps': 'bg-purple-500/20 text-purple-400',
    'Data Science': 'bg-red-500/20 text-red-400'
  };
  
  return styleMap[category] || 'bg-gray-500/20 text-gray-400';
};

export default TechFeedPreview;
