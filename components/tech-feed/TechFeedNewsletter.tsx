'use client';

import React, { useState } from 'react';
import { Mail, Check, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const TechFeedNewsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Simulate API call
    setLoading(true);
    setError('');
    
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      // In a real app, we would send this to an API
      console.log('Subscribing email:', email);
    }, 1500);
  };
  
  return (
    <section id="subscribe" className="py-16 bg-gradient-to-b from-obsidian-900 to-blue-950/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-obsidian-800 rounded-xl p-8 border border-blue-700/20 shadow-lg shadow-blue-900/10"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <div className="w-16 h-16 flex-shrink-0 rounded-full bg-blue-900/30 flex items-center justify-center">
                <Mail className="text-blue-400" size={28} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-display mb-2">
                  Stay Up-to-Date with Tech Trends
                </h2>
                <p className="text-gray-400">
                  Subscribe to our personalized tech digest and receive the latest updates, tutorials, and insights directly in your inbox.
                </p>
              </div>
            </div>
            
            {subscribed ? (
              <div className="flex items-center p-4 bg-green-900/20 border border-green-700/30 rounded-lg">
                <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-medium text-green-400">Successfully Subscribed!</h3>
                  <p className="text-gray-400 text-sm">
                    Thank you for subscribing. You'll start receiving our tech updates soon!
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-grow relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full bg-obsidian-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {error && (
                      <div className="absolute -bottom-6 left-0 flex items-center text-red-400 text-sm">
                        <AlertCircle size={14} className="mr-1" />
                        <span>{error}</span>
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`px-6 py-3 rounded-lg font-medium ${
                      loading
                        ? 'bg-gray-700 cursor-not-allowed text-gray-300'
                        : 'bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800'
                    } transition-all flex items-center justify-center shadow-lg shadow-blue-900/10`}
                  >
                    {loading ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white/20 border-t-white/80 rounded-full animate-spin mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      'Subscribe Now'
                    )}
                  </button>
                </div>
              </form>
            )}
            
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from SKILL BRIDGE.
                We respect your privacy and won't share your information.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-blue-400 font-semibold text-xl">Daily</p>
                <p className="text-gray-500 text-sm">Updates</p>
              </div>
              <div>
                <p className="text-blue-400 font-semibold text-xl">Customized</p>
                <p className="text-gray-500 text-sm">Content</p>
              </div>
              <div>
                <p className="text-blue-400 font-semibold text-xl">Curated</p>
                <p className="text-gray-500 text-sm">Resources</p>
              </div>
              <div>
                <p className="text-blue-400 font-semibold text-xl">Domain</p>
                <p className="text-gray-500 text-sm">Specific</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechFeedNewsletter;
