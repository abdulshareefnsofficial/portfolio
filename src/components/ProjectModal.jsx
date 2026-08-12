import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Sparkles, Code2, Layers } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-indigo-500/30 shadow-2xl bg-[#090d16] text-slate-100 p-6 sm:p-8 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image Banner */}
        <div className="relative rounded-2xl overflow-hidden aspect-video border border-slate-800 shadow-xl group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-indigo-500/80 backdrop-blur-md text-white text-xs font-mono font-medium">
              {project.category}
            </span>
          </div>
        </div>

        {/* Header Details */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-indigo-400 font-mono">
            {project.tagline}
          </p>
        </div>

        {/* Description */}
        <div className="space-y-3 border-t border-slate-800 pt-4">
          <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider">Overview</h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            {project.description}
          </p>
        </div>

        {/* Key Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="space-y-3 border-t border-slate-800 pt-4">
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Key Features & Innovations</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="space-y-3 border-t border-slate-800 pt-4">
          <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-400" />
            <span>Tech Stack Used</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-mono text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-end gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold glass-panel hover:bg-slate-800 text-slate-200 hover:text-white flex items-center gap-2 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-95 text-white flex items-center gap-2 shadow-lg shadow-indigo-500/20 transition-all"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

      </div>
    </div>
  );
};
