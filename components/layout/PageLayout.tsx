import React from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-indigo-900 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold">SKILL BRIDGE</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/domains" className="text-gray-300 hover:text-white transition">
                Learning Paths
              </Link>
              <Link href="/approach" className="text-gray-300 hover:text-white transition">
                Our Approach
              </Link>
              <Link href="/success-stories" className="text-gray-300 hover:text-white transition">
                Success Stories
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition">
                About Us
              </Link>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login" className="text-gray-300 hover:text-white transition">
                Login
              </Link>
              <Link 
                href="/register" 
                className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-400 transition"
              >
                Register
              </Link>
            </div>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">SKILL BRIDGE</h3>
              <p className="text-gray-400">
                Bridging the gap between theoretical education and practical industry skills through domain-based learning.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Learning Paths</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/domains/web-development" className="text-gray-400 hover:text-white transition">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/domains/data-science" className="text-gray-400 hover:text-white transition">
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link href="/domains/cloud-devops" className="text-gray-400 hover:text-white transition">
                    Cloud & DevOps
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/success-stories" className="text-gray-400 hover:text-white transition">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-white transition">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/partnerships" className="text-gray-400 hover:text-white transition">
                    Partnerships
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white transition">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} SKILL BRIDGE. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;
