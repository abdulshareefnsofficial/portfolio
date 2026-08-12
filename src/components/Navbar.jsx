import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3 shadow-lg shadow-black/80 backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-[2px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 text-sm">
                  AS
                </span>
              </div>
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                Abdul Shareef
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="text-xs text-slate-400 font-mono block -mt-1">
                AI & Web Developer | 2D Motion
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions: CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:opacity-90 transition-opacity shadow-md shadow-indigo-500/25 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-slate-800 bg-[#090d16]/95 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 text-base font-medium rounded-xl transition-colors ${
                  isActive
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md shadow-indigo-500/20"
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  );
};
