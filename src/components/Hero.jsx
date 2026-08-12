import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Sparkles, Terminal, Code2, Cpu, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  const { personalInfo, stats } = portfolioData;

  const [displayedText, setDisplayedText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = personalInfo.titles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
        if (displayedText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setTitleIndex((prevIndex) => (prevIndex + 1) % personalInfo.titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, titleIndex, personalInfo.titles]);

  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 relative flex items-center justify-center overflow-hidden bg-grid-pattern">
      
      {/* Ambient background glow spots */}
      <div className="glow-spot-indigo top-10 left-1/4 -translate-x-1/2"></div>
      <div className="glow-spot-purple bottom-20 right-10"></div>
      <div className="glow-spot-cyan top-1/2 right-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content (Col 7) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-xs sm:text-sm font-medium text-emerald-400 border-emerald-500/40 bg-emerald-950/20">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-emerald-400 font-semibold">{personalInfo.availability}</span>
              <span className="text-slate-600">|</span>
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-slate-300">Available for Freelance & Full-time</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-mono text-slate-400">
                Hello, World! I am
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <span className="text-white">{personalInfo.name}</span>
              </h1>
              
              {/* Dynamic Typing Title */}
              <div className="h-14 flex items-center justify-center lg:justify-start">
                <span className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-mono">
                  {displayedText}
                </span>
                <span className="inline-block w-1 h-8 sm:h-10 bg-indigo-500 ml-1 animate-pulse"></span>
              </div>
            </div>

            {/* Tagline / Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl font-semibold glass-panel hover:bg-slate-800/80 text-slate-200 hover:text-white transition-all flex items-center gap-2 border-slate-700/80"
              >
                <span>Contact Me</span>
              </a>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-semibold bg-emerald-600/90 hover:bg-emerald-600 text-white transition-all shadow-lg shadow-emerald-600/20 flex items-center gap-2 border border-emerald-500/40"
              >
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Quick Tech Badges */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-mono text-slate-500">Connect:</span>
              {Object.entries(personalInfo.socials).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg glass-panel hover:border-indigo-500/50 text-slate-400 hover:text-indigo-400 text-xs font-mono capitalize transition-all"
                >
                  {key}
                </a>
              ))}
            </div>

          </div>

          {/* Code Terminal Mockup (Col 5) */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel p-6 rounded-3xl border-indigo-500/30 shadow-2xl space-y-4 bg-slate-950/80">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>abdul_shareef.config.ts</span>
                </div>
              </div>

              {/* Terminal Code Snippet */}
              <div className="font-mono text-xs sm:text-sm space-y-2 leading-relaxed text-slate-300">
                <div>
                  <span className="text-purple-400">const</span> <span className="text-indigo-400">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">name</span>: <span className="text-emerald-400">"Abdul Shareef"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">expertise</span>: [<span className="text-amber-300">"AI&ML"</span>, <span className="text-amber-300">"2DMotion"</span>, <span className="text-amber-300">"FullStack"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">coreStack</span>: &#123;
                </div>
                <div className="pl-8 text-slate-400">
                  ai: <span className="text-indigo-400">["Python", "CNN", "PyTorch", "DeepLearning"]</span>,
                </div>
                <div className="pl-8 text-slate-400">
                  design: <span className="text-purple-400">["Photoshop", "Illustrator", "AfterEffects", "2DMotion"]</span>,
                </div>
                <div className="pl-8 text-slate-400">
                  web: <span className="text-cyan-400">["React", "Next.js", "Node.js", "Tailwind"]</span>
                </div>
                <div className="pl-4">&#125;,</div>
                <div className="pl-4">
                  <span className="text-cyan-400">passionateAbout</span>: <span className="text-emerald-400">"AI Computer Vision & 2D Motion Design"</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Status Indicator inside terminal */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-emerald-400">System Ready</span>
                </span>
                <span className="text-indigo-400">Thrissur, Kerala</span>
              </div>

            </div>
          </div>

        </div>

        {/* Quick Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border-slate-800 text-center hover:border-indigo-500/40 transition-all glow-card"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
