import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#090d16] border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80 items-center justify-between">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 p-[2px]">
                <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center font-mono font-bold text-indigo-400 text-xs">
                  AS
                </div>
              </div>
              <span className="font-bold text-lg text-white">
                {personalInfo.name}
              </span>
            </a>
            <p className="text-xs text-slate-400 max-w-md">
              AI & ML Engineer, 2D Motion Graphics Designer, and Full Stack Web Developer.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-6 text-xs sm:text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#services" className="hover:text-indigo-400 transition-colors">Services</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          <div>
            © {new Date().getFullYear()} <span className="text-slate-200 font-semibold">{personalInfo.name}</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-slate-400 font-mono">
            <span>Built with React, Vite & Tailwind CSS</span>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full glass-panel text-slate-300 hover:text-white hover:border-indigo-500/50 transition-all hover:scale-110 focus:outline-none"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 text-indigo-400" />
          </button>

        </div>

      </div>
    </footer>
  );
};
