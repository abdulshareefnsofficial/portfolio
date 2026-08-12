import React, { useState } from 'react';
import { Layout, Cpu, Database, Wrench, Search, Code, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const categoryIcons = {
  "Graphic Design & Motion Graphics": Wrench,
  "Programming & AI / ML": Cpu,
  "Full Stack Web Development": Layout,
  "Soft Skills & Professional Capabilities": Database,
};

export const Skills = () => {
  const { skillCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...skillCategories.map((c) => c.category)];

  const filteredCategories = skillCategories.map((cat) => {
    if (activeCategory !== 'All' && cat.category !== activeCategory) {
      return null;
    }
    const matchingSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (matchingSkills.length === 0) return null;

    return {
      ...cat,
      skills: matchingSkills,
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#090d16]">
      
      {/* Ambient background glow */}
      <div className="glow-spot-indigo top-1/3 -right-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Skills & <span className="text-gradient-cyan">Technologies</span>
          </h2>
          <p className="text-slate-400 text-base">
            Comprehensive breakdown of my engineering toolbox across Web, AI, and Design tools.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 glass-panel p-3 rounded-2xl border-slate-800">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Photoshop)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-900/80 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-indigo-500 placeholder-slate-500"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat) => {
              const CategoryIcon = categoryIcons[cat.category] || Code;
              return (
                <div
                  key={cat.category}
                  className="glass-panel p-6 sm:p-8 rounded-3xl border-slate-800 space-y-6 hover:border-indigo-500/30 transition-all"
                >
                  {/* Category Title Header */}
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                    <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{cat.category}</h3>
                      <span className="text-xs text-slate-400 font-mono">
                        {cat.skills.length} Core Skills
                      </span>
                    </div>
                  </div>

                  {/* Skill Progress List */}
                  <div className="space-y-5">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-semibold text-slate-200 flex items-center gap-2">
                            <span
                              className="w-2.5 h-2.5 rounded-full inline-block"
                              style={{ backgroundColor: skill.color || '#818cf8' }}
                            ></span>
                            {skill.name}
                          </span>
                          <span className="font-mono text-xs text-slate-400">
                            {skill.level}%
                          </span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden p-[1px]">
                          <div
                            className="h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })
          ) : (
            <div className="col-span-2 text-center py-12 glass-panel rounded-3xl border-slate-800">
              <p className="text-slate-400 text-sm">No skills matching "{searchTerm}"</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
