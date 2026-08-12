import React, { useState, useEffect } from 'react';
import { Mail, Send, Copy, Check, MapPin, Clock, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const { personalInfo } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  useEffect(() => {
    if (window.location.href.includes('success=true')) {
      setSentSuccess(true);
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      setTimeout(() => setSentSuccess(false), 6000);
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleWhatsAppSend = () => {
    if (!formData.name || !formData.message) {
      alert("Please fill in your name and message.");
      return;
    }
    const text = encodeURIComponent(`Hi Abdul Shareef,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`);
    window.open(`https://wa.me/919048180974?text=${text}`, '_blank');
  };

  const handleEmailAppSend = () => {
    if (!formData.name || !formData.message) {
      alert("Please fill in your name and message.");
      return;
    }
    const subject = encodeURIComponent(formData.subject || "Portfolio Inquiry");
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:abdulshareefnsofficial@gmail.com?subject=${subject}&body=${body}`, '_self');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/80">
      
      {/* Background Ambient Glow */}
      <div className="glow-spot-indigo bottom-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-mono uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Let's Build Something <span className="text-gradient">Extraordinary Together</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project in mind, need 2D motion graphics or web development? Send me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Info Panel (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="glass-panel p-8 rounded-3xl border-slate-800 space-y-6">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Reach out directly via Gmail or WhatsApp. All form submissions are sent to abdulshareefnsofficial@gmail.com.
              </p>

              <div className="space-y-4 pt-2">
                
                {/* Email Item with Quick Copy */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-mono uppercase">Direct Gmail</div>
                      <div className="text-sm font-semibold text-slate-200">{personalInfo.email}</div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono uppercase">Location</div>
                    <div className="text-sm font-semibold text-slate-200">{personalInfo.location}</div>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <a 
                  href={personalInfo.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-mono uppercase">WhatsApp Direct</div>
                      <div className="text-sm font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">{personalInfo.phone}</div>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-400 font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">Chat →</span>
                </a>

                {/* Response Time */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono uppercase">Response Time</div>
                    <div className="text-sm font-semibold text-emerald-400">Usually &lt; 24 Hours</div>
                  </div>
                </div>

              </div>

            </div>

            {/* Availability Banner */}
            <div className="glass-panel p-6 rounded-3xl border-indigo-500/30 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-indigo-600/20 text-indigo-400 shrink-0">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Open to Opportunities</h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Available for full-stack web projects, 2D motion graphics, and AI projects.
                </p>
              </div>
            </div>

          </div>

          {/* Right Contact Form (Col 7) */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border-slate-800">
            <form 
              action="https://formsubmit.co/abdulshareefnsofficial@gmail.com" 
              method="POST"
              className="space-y-5"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://abdulshareefnsofficial.github.io/portfolio/#contact?success=true" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Subject *
                </label>
                <input
                  type="text"
                  name="_subject"
                  required
                  placeholder="Project Inquiry / Job Opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Message *
                </label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  placeholder="Tell me about your project or requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Success Message Banner */}
              {sentSuccess && (
                <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm font-medium flex items-center gap-2 animate-in fade-in duration-200">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Thank you! Your message has been sent to abdulshareefnsofficial@gmail.com.</span>
                </div>
              )}

              {/* Submit Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 transition-all shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message (Direct Email)</span>
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="py-3 px-4 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/50 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailAppSend}
                    className="py-3 px-4 rounded-xl text-xs font-semibold text-indigo-300 bg-indigo-950/40 border border-indigo-500/30 hover:bg-indigo-900/50 transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email App</span>
                  </button>
                </div>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
