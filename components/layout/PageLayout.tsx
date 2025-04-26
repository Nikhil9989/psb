import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, User } from 'lucide-react';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">SKILL</span>
                <span>BRIDGE</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-300 hover:text-white transition">Home</Link>
              <Link href="/learning-paths" className="text-gray-300 hover:text-white transition">Learning Paths</Link>
              <div className="relative">
                <button 
                  className="text-gray-300 hover:text-white transition flex items-center"
                  onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                >
                  Resources
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                {resourcesDropdownOpen && (
                  <div className="absolute z-10 right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 border border-gray-700">
                    <Link href="/public/puzzle-solver" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition">
                      Puzzle Solver
                    </Link>
                    <Link href="/public/showcase" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition">
                      Student Showcase
                    </Link>
                    <Link href="/public/tech-feed" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition">
                      Tech Feed
                    </Link>
                    <Link href="/blog" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition">
                      Blog
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/about" className="text-gray-300 hover:text-white transition">About</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
            </nav>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-2">
              <Link 
                href="/login" 
                className="px-4 py-2 border border-gray-600 rounded-md hover:bg-gray-700 transition"
              >
                Login
              </Link>
              <Link 
                href="/signup" 
                className="px-4 py-2 bg-yellow-600 hover:bg-yellow-500 rounded-md transition"
              >
                Sign Up
              </Link>
              <Link 
                href="/dashboard" 
                className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
              >
                <User className="h-5 w-5" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700 py-2">
            <div className="container mx-auto px-4 space-y-1">
              <Link 
                href="/" 
                className="block py-2 px-3 text-base text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition"
              >
                Home
              </Link>
              <Link 
                href="/learning-paths" 
                className="block py-2 px-3 text-base text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition"
              >
                Learning Paths
              </Link>
              <Link 
                href="/public/puzzle-solver" 
                className="block py-2 px-3 text-base text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition"
              >
                Puzzle Solver
              </Link>
              <Link 
                href="/public/showcase" 
                className="block py-2 px-3 text-base text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition"
              >
                Student Showcase
              </Link>
              <Link 
                href="/public/tech-feed" 
                className="block py-2 px-3 text-base text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition"
              >
                Tech Feed
              </Link>
              <Link 
                href="/about" 
                className="block py-2 px-3 text-base text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block py-2 px-3 text-base text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition"
              >
                Contact
              </Link>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-3">
                  <div className="flex-shrink-0">
                    <img 
                      className="h-10 w-10 rounded-full" 
                      src="/api/placeholder/40/40" 
                      alt="Profile" 
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">Guest User</div>
                    <div className="text-sm text-gray-400">guest@example.com</div>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <Link 
                    href="/login" 
                    className="block py-2 px-3 text-base text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition"
                  >
                    Login
                  </Link>
                  <Link 
                    href="/signup" 
                    className="block py-2 px-3 text-base text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition"
                  >
                    Sign Up
                  </Link>
                  <Link 
                    href="/dashboard" 
                    className="block py-2 px-3 text-base text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition"
                  >
                    Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">SKILL</span>
                <span>BRIDGE</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Bridging the gap between education and industry through integrated domain-based learning.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition">Home</Link>
                </li>
                <li>
                  <Link href="/learning-paths" className="text-gray-400 hover:text-white transition">Learning Paths</Link>
                </li>
                <li>
                  <Link href="/public/puzzle-solver" className="text-gray-400 hover:text-white transition">Puzzle Solver</Link>
                </li>
                <li>
                  <Link href="/public/showcase" className="text-gray-400 hover:text-white transition">Student Showcase</Link>
                </li>
                <li>
                  <Link href="/public/tech-feed" className="text-gray-400 hover:text-white transition">Tech Feed</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Learn</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/domains/web-development" className="text-gray-400 hover:text-white transition">Web Development</Link>
                </li>
                <li>
                  <Link href="/domains/data-science" className="text-gray-400 hover:text-white transition">Data Science</Link>
                </li>
                <li>
                  <Link href="/domains/mobile-development" className="text-gray-400 hover:text-white transition">Mobile Development</Link>
                </li>
                <li>
                  <Link href="/domains/cloud-computing" className="text-gray-400 hover:text-white transition">Cloud Computing</Link>
                </li>
                <li>
                  <Link href="/domains/cybersecurity" className="text-gray-400 hover:text-white transition">Cybersecurity</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400">
                    Koramangala, Bengaluru<br />
                    Karnataka, India 560034
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400">contact@skillbridge.edu</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-400">+91 9876543210</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} SKILL BRIDGE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;
