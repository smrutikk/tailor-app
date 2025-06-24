import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
              <span className="font-bold text-[#8B5E4F] text-3xl tracking-wide group-hover:scale-105 transition-transform duration-300">
                Tailor.
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className="py-2 px-4 text-gray-600 hover:text-[#8B5E4F] font-medium transition-all duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#8B5E4F] transition-all duration-300 group-hover:w-3/4 group-hover:left-1/4"></span>
            </Link>
            <Link
              to="/about"
              className="py-2 px-4 text-gray-600 hover:text-[#8B5E4F] font-medium transition-all duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#8B5E4F] transition-all duration-300 group-hover:w-3/4 group-hover:left-1/4"></span>
            </Link>
            <Link
              to="/services"
              className="py-2 px-4 text-gray-600 hover:text-[#8B5E4F] font-medium transition-all duration-300 relative group"
            >
              Services
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#8B5E4F] transition-all duration-300 group-hover:w-3/4 group-hover:left-1/4"></span>
            </Link>
            <Link
              to="/blog"
              className="py-2 px-4 text-gray-600 hover:text-[#8B5E4F] font-medium transition-all duration-300 relative group"
            >
              Blog
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#8B5E4F] transition-all duration-300 group-hover:w-3/4 group-hover:left-1/4"></span>
            </Link>
            <Link
              to="/contact"
              className="py-2 px-4 text-gray-600 hover:text-[#8B5E4F] font-medium transition-all duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#8B5E4F] transition-all duration-300 group-hover:w-3/4 group-hover:left-1/4"></span>
            </Link>
            <Link
              to="/visit-us"
              className="ml-4 py-2 px-6 bg-gradient-to-r from-[#8B5E4F] to-[#A08474] text-white font-medium rounded-full hover:from-[#A08474] hover:to-[#8B5E4F] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              VISIT US
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#8B5E4F] focus:outline-none transition duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pt-2 pb-4 space-y-2 px-4 bg-white shadow-md">
          <Link
            to="/"
            onClick={handleNavLinkClick}
            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-[#8B5E4F] hover:bg-gray-100 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={handleNavLinkClick}
            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-[#8B5E4F] hover:bg-gray-100 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={handleNavLinkClick}
            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-[#8B5E4F] hover:bg-gray-100 transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/blog"
            onClick={handleNavLinkClick}
            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-[#8B5E4F] hover:bg-gray-100 transition duration-300"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            onClick={handleNavLinkClick}
            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-[#8B5E4F] hover:bg-gray-100 transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/visit-us"
            onClick={handleNavLinkClick}
            className="block px-4 py-3 mt-2 text-center text-base font-medium text-white bg-gradient-to-r from-[#8B5E4F] to-[#A08474] rounded-full hover:from-[#A08474] hover:to-[#8B5E4F] transition duration-300"
          >
            VISIT US
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;