import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Eye, Code2, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Featured', 'AI & Computer Vision', 'AI & Deep Learning', 'IoT & Automation', 'Full Stack'];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Featured') return project.featured;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/60">
      
      {/* Background Glow */}
      <div className="glow-spot-purple bottom-10 -left-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Featured <span className="text-gradient">Projects & Apps</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A curated collection of full-stack web platforms, AI applications, and cloud tools I've engineered.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                  : 'glass-panel text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl overflow-hidden border-slate-800 flex flex-col justify-between group glow-card"
            >
              {/* Card Image Banner */}
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-slate-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-white" />
                    Featured
                  </div>
                )}

                {/* Quick Hover Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 rounded-xl bg-white/90 hover:bg-white text-slate-900 text-xs font-bold shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform"
                  >
                    <Eye className="w-4 h-4 text-indigo-600" />
                    <span>Quick Preview</span>
                  </button>
                </div>

                {/* Category Pill */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-cyan-300 text-xs font-mono font-medium border border-slate-700/50">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-xs text-indigo-400 font-mono line-clamp-1">
                    {project.tagline}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="space-y-4 pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-slate-900 text-[11px] font-mono text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-mono text-slate-400">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Card Links Footer */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-indigo-400 hover:text-white flex items-center gap-1 group/btn"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
