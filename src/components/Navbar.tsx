"use client";

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Amigo
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a href="#features" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-semibold transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-semibold transition-colors">How it Works</a>
              <a href="#privacy" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-semibold transition-colors">Privacy</a>
              <a href="#terms" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-semibold transition-colors">Terms</a>
              <a href="#download" className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95">Download Now</a>
            </div>
          </div>
          
          {/* Mobile menu button (placeholder) */}
          <div className="md:hidden">
            <button className="text-gray-600 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
