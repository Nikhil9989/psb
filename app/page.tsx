import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Link from 'next/link';
import { ArrowRight, BookOpen, Users, PuzzlePiece, Rss, Image } from 'lucide-react';

export const metadata = {
  title: 'SKILL BRIDGE - Integrated Domain-Based Learning Platform',
  description: 'Bridge the gap between education and industry with our integrated domain-based learning platform for tier-2/3 cities in India.',
};

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Build <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">Industry-Ready</span> Skills
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Bridge the skill gap with domain-based progressive learning from 0% to 100% mastery
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/learning-paths"
              className="px-8 py-4 bg-yellow-600 hover:bg-yellow-500 rounded-lg font-medium text-white transition shadow-lg flex items-center"
            >
              Explore Learning Paths
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium text-white transition"
            >
              Learn More
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-yellow-500/30 transition shadow-lg hover:shadow-yellow-500/5">
              <div className="bg-yellow-500/20 p-3 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-7 w-7 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Integrated Learning</h3>
              <p className="text-gray-400">
                Domain-based approach teaching technologies as they're used in industry, not in isolation
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-yellow-500/30 transition shadow-lg hover:shadow-yellow-500/5">
              <div className="bg-yellow-500/20 p-3 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-7 w-7 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Mentorship</h3>
              <p className="text-gray-400">
                1-on-1 guidance from industry professionals who help navigate your learning journey
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-yellow-500/30 transition shadow-lg hover:shadow-yellow-500/5">
              <div className="bg-yellow-500/20 p-3 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                <ArrowRight className="h-7 w-7 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Career Ready</h3>
              <p className="text-gray-400">
                Project-based learning and portfolio development aligned with industry needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Highlights */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Our <span className="text-yellow-500">Unique</span> Approach
              </h2>
              <p className="text-gray-300 mb-6">
                Traditional education focuses on teaching technologies in isolation, making graduates unprepared for real-world challenges. Our domain-based approach teaches multiple technologies together, exactly as they're used in industry.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-yellow-500/20 p-1 rounded-full mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-yellow-500" />
                  </div>
                  <p className="text-gray-300">Progressive roadmap from 0% to 100% mastery</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-500/20 p-1 rounded-full mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-yellow-500" />
                  </div>
                  <p className="text-gray-300">Hybrid learning with institutional partnerships</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-500/20 p-1 rounded-full mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-yellow-500" />
                  </div>
                  <p className="text-gray-300">AI-powered personalization for your learning journey</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-500/20 p-1 rounded-full mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-yellow-500" />
                  </div>
                  <p className="text-gray-300">Flexible pricing with ISA options for accessibility</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-gray-800 p-8 rounded-xl border border-gray-700">
              <div className="relative h-80 bg-gray-900 rounded-lg mb-6">
                <img 
                  src="/api/placeholder/600/500" 
                  alt="Domain-based learning approach" 
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm">Our Approach</span>
                  <span className="text-white font-medium">Domain-Based Learning</span>
                </div>
                <Link 
                  href="/about"
                  className="px-4 py-2 bg-yellow-600 hover:bg-yellow-500 rounded-md text-white text-sm font-medium transition flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/public/puzzle-solver" className="group">
              <div className="bg-gray-800 border border-gray-700 group-hover:border-purple-500/30 rounded-lg p-8 transition shadow-lg group-hover:shadow-purple-500/10">
                <div className="bg-purple-500/20 p-3 rounded-full w-14 h-14 mb-4 flex items-center justify-center">
                  <PuzzlePiece className="h-7 w-7 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Puzzle Solver</h3>
                <p className="text-gray-400 mb-4">
                  Daily coding challenges and algorithm puzzles to sharpen your problem-solving skills.
                </p>
                <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition">
                  Try it now
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
            
            <Link href="/public/showcase" className="group">
              <div className="bg-gray-800 border border-gray-700 group-hover:border-indigo-500/30 rounded-lg p-8 transition shadow-lg group-hover:shadow-indigo-500/10">
                <div className="bg-indigo-500/20 p-3 rounded-full w-14 h-14 mb-4 flex items-center justify-center">
                  <Image className="h-7 w-7 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Student Showcase</h3>
                <p className="text-gray-400 mb-4">
                  Explore outstanding projects created by SKILL BRIDGE students demonstrating their expertise.
                </p>
                <div className="flex items-center text-indigo-400 group-hover:text-indigo-300 transition">
                  View showcase
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
            
            <Link href="/public/tech-feed" className="group">
              <div className="bg-gray-800 border border-gray-700 group-hover:border-blue-500/30 rounded-lg p-8 transition shadow-lg group-hover:shadow-blue-500/10">
                <div className="bg-blue-500/20 p-3 rounded-full w-14 h-14 mb-4 flex items-center justify-center">
                  <Rss className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Tech Feed</h3>
                <p className="text-gray-400 mb-4">
                  Stay updated with the latest industry trends, news, and learning resources personalized for you.
                </p>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition">
                  Read latest
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Join thousands of students from tier-2 and tier-3 cities who have transformed their careers with SKILL BRIDGE.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-4 bg-yellow-600 hover:bg-yellow-500 rounded-lg font-medium text-white transition shadow-lg"
            >
              Sign Up Now
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium text-white transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
