import React from 'react';
import { Code2, BrainCircuit, Server, Layout, CheckCircle, Zap, Shield, Rocket, Globe, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  BrainCircuit: BrainCircuit,
  Server: Server,
  Layout: Layout,
  Cpu: BrainCircuit,
};

export const About = () => {
  const { services, personalInfo, achievements } = portfolioData;

  const corePrinciples = [
    { title: "AI & Computer Vision", desc: "Building deep learning models, CNN image classifiers, and intelligent automation systems.", icon: BrainCircuit },
    { title: "2D Motion Graphics", desc: "Crafting vector illustrations, promotional animations, and visual brand assets in After Effects & Illustrator.", icon: Zap },
    { title: "Clean & Modern Web", desc: "Building responsive React & Next.js applications with sleek UI layouts and fast load speeds.", icon: Shield },
    { title: "IoT & Hardware Automation", desc: "Designing Internet of Things sensor automation systems to control components via web APIs.", icon: Rocket }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/40">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider">
            About & Expertise
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Crafting Digital Solutions That <span className="text-gradient">Empower & Perform</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            I bridge the gap between Deep Learning AI research, 2D visual graphic design, and full-stack web application development.
          </p>
        </div>

        {/* Bio Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border-slate-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <span>Who is Abdul Shareef?</span>
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                I am a passionate <strong className="text-indigo-400">AI & ML Engineer, 2D Motion Graphics Designer, and Full Stack Web Developer</strong> based in {personalInfo.location}. I graduated with a B.Sc. in Artificial Intelligence & Machine Learning (AI&ML) from Sree Saraswathi Thyagaraja College (STC), Pollachi (2022) and earned my Master Diploma in 2D Graphics & Web Design at Dreamzone School of Creative Studies (2025).
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                My work spans building real-time Computer Vision models (Traffic Sign Detection, Handwritten Recognition CNNs), creating 2D motion graphics animations in After Effects, and building modern web applications.
              </p>
            </div>

            {/* Languages & Location Info */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div>
                <span className="text-xs font-mono text-slate-500 block">LOCATION</span>
                <span className="text-sm font-semibold text-slate-200">{personalInfo.location}</span>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 block">STATUS</span>
                <span className="text-sm font-semibold text-emerald-400">Freelancer</span>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 block">LANGUAGES</span>
                <span className="text-sm font-semibold text-indigo-400">{personalInfo.languages.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Principles Stack */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {corePrinciples.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className="glass-panel p-5 rounded-2xl border-slate-800 hover:border-indigo-500/40 transition-all flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Achievements Banner */}
        {achievements && achievements.length > 0 && (
          <div className="mb-20 glass-panel p-6 sm:p-8 rounded-3xl border-purple-500/30 bg-gradient-to-r from-purple-900/20 via-indigo-900/10 to-transparent">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Recognitions & Achievements</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((ach, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-white">{ach.title}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{ach.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services Section */}
        <div id="services" className="pt-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Freelance Services</h3>
            <p className="text-sm text-slate-400">Specialized technical & design solutions for clients and industry projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Code2;
              return (
                <div
                  key={service.id}
                  className="glass-panel p-6 rounded-2xl border-slate-800 glow-card flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${service.gradient} p-3 text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-full h-full" />
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-indigo-400 font-medium">
                    <span>Explore Service</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
