import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Calendar, Building, CheckCircle2, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { experience, education, certifications } = portfolioData;
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#090d16]">
      
      {/* Background Spot */}
      <div className="glow-spot-indigo top-10 -left-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Work Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            My professional career path, software engineering milestones, and academic background.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="glass-panel p-1.5 rounded-2xl border-slate-800 flex items-center gap-2">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education & Certs</span>
            </button>
          </div>
        </div>

        {/* Experience Content */}
        {activeTab === 'experience' ? (
          <div className="max-w-4xl mx-auto relative border-l-2 border-slate-800 pl-6 sm:pl-8 space-y-12 ml-4 sm:ml-auto">
            {experience.map((item, idx) => (
              <div key={idx} className="relative group">
                
                {/* Timeline Node Icon */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-900 border-2 border-indigo-500 text-indigo-400 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Briefcase className="w-4 h-4" />
                </div>

                {/* Content Card */}
                <div className="glass-panel p-6 sm:p-8 rounded-3xl border-slate-800 space-y-4 hover:border-indigo-500/40 transition-all">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-slate-400 font-medium mt-1">
                        <Building className="w-4 h-4 text-purple-400" />
                        <span>{item.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                          {item.type}
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Achievements List */}
                  {item.achievements && (
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Key Impact:</div>
                      <div className="space-y-1.5">
                        {item.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Education List */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <span>Academic Credentials</span>
              </h3>

              {education.map((edu, idx) => (
                <div key={idx} className="glass-panel p-6 sm:p-8 rounded-3xl border-slate-800 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <p className="text-sm text-indigo-400 font-medium">{edu.institution}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications Grid */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-400" />
                <span>Professional Certifications</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="glass-panel p-5 rounded-2xl border-slate-800 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-snug">{cert.title}</h4>
                      <p className="text-xs text-slate-400 mt-1">{cert.issuer} ({cert.year})</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
