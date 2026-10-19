import React from 'react';
import { ExternalLink, Github, Sparkles, Check, Play, ShieldAlert, Cpu } from 'lucide-react';
import { featuredProject } from '../data/portfolioData';

export default function FeaturedProject() {
  return (
    <div className="relative mb-16 lg:mb-20">
      {/* Subtle outer aura */}
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-40 pointer-events-none" />

      <div className="relative glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/15 overflow-hidden">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-semibold">
            <Sparkles size={14} className="text-indigo-400" />
            <span>{featuredProject.badge}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              {featuredProject.category}
            </span>
            <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Online
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left: Project Details & Story */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
              {featuredProject.title}
            </h3>
            <p className="text-base font-semibold text-indigo-300 font-mono mb-4">
              {featuredProject.subtitle}
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {featuredProject.description}
            </p>

            {/* Problem & Solution Blocks */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6 w-full">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-xs font-mono font-semibold text-rose-400 uppercase tracking-wider block mb-1">
                  The Challenge
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {featuredProject.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                  The Engineering Solution
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {featuredProject.solution}
                </p>
              </div>
            </div>

            {/* Key Features Bullet List */}
            <div className="w-full mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Key Architectural Features
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {featuredProject.highlights.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check size={14} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {featuredProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-indigo-950/40 text-indigo-200 border border-indigo-500/25"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={featuredProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <Play size={15} fill="currentColor" />
                <span>Play Live Demo</span>
                <ExternalLink size={14} />
              </a>

              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <Github size={16} />
                <span>View Source Code</span>
              </a>
            </div>

          </div>

          {/* Right: Interactive / High-Fidelity Project Visual Mockup */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
              
              {/* Window Frame Bar */}
              <div className="px-4 py-2.5 bg-black/60 backdrop-blur-md border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <span className="text-[11px] text-slate-400 truncate">
                  minorproject-chessmaster.vercel.app
                </span>
                <span className="text-emerald-400 text-[10px]">v1.0</span>
              </div>

              {/* Project Image with Interactive Overlay */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Center Hover Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-white font-semibold text-xs flex items-center gap-2 shadow-xl hover:scale-105 transition-transform"
                  >
                    <span>Launch Game</span>
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Bottom Tech Ribbon */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                  <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-slate-300 border border-white/10">
                    WebSocket Protocol
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-indigo-950/80 backdrop-blur-md text-indigo-300 border border-indigo-500/30">
                    Chess.js Engine
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
