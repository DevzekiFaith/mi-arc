'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item: { label: string; id?: string; href?: string }) => {
    if (item.href) {
      // External navigation
      window.location.href = item.href;
    } else if (item.id) {
      // Internal scrolling
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Work', id: 'projects' },
    { label: 'About', id: 'design-statement' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavigation({ label: 'Home', id: 'hero' })}
              className={`text-base sm:text-lg font-light tracking-wider transition-colors duration-300 ${
                isScrolled ? 'text-slate-900' : 'text-slate-900'
              }`}
            >
              <span className="hidden sm:inline">E.O. Ubor</span>
              <span className="sm:hidden">E.O.</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8 lg:space-x-12">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item)}
                  className={`text-sm font-light tracking-wide uppercase transition-colors duration-300 hover:text-slate-600 ${
                    isScrolled ? 'text-slate-700' : 'text-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 transition-colors duration-300 text-slate-700 hover:text-slate-900"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200/50 bg-white/95 backdrop-blur-sm">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item)}
                  className="block px-3 py-3 text-base font-light tracking-wide uppercase text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors duration-300 w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;