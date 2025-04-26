import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-white p-2"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-indigo-900 bg-opacity-95 flex flex-col">
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-white p-2"
              aria-label="Close mobile menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-grow">
            <Link
              href="/"
              className="text-white text-xl py-4 hover:text-yellow-400 transition duration-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/domains"
              className="text-white text-xl py-4 hover:text-yellow-400 transition duration-300"
              onClick={toggleMenu}
            >
              Learning Paths
            </Link>
            <Link
              href="/approach"
              className="text-white text-xl py-4 hover:text-yellow-400 transition duration-300"
              onClick={toggleMenu}
            >
              Our Approach
            </Link>
            <Link
              href="/success-stories"
              className="text-white text-xl py-4 hover:text-yellow-400 transition duration-300"
              onClick={toggleMenu}
            >
              Success Stories
            </Link>
            <Link
              href="/about"
              className="text-white text-xl py-4 hover:text-yellow-400 transition duration-300"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <div className="mt-8 flex flex-col items-center space-y-4">
              <Link
                href="/login"
                className="text-white text-xl border border-white px-8 py-2 rounded-lg hover:bg-white hover:text-indigo-900 transition duration-300"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-xl bg-yellow-500 text-black px-8 py-2 rounded-lg font-medium hover:bg-yellow-400 transition duration-300"
                onClick={toggleMenu}
              >
                Register
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
