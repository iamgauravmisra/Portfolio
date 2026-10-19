import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Github, Play, ExternalLink, Sparkles, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [expandedProjectId, setExpandedProjectId] = useState('chessmaster');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [lerpPos, setLerpPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth lerp animation for floating preview
  useEffect(() => {
    const updatePosition = () => {
      setLerpPos((prev) => {
        const dx = mousePos.x - prev.x;
        const dy = mousePos.y - prev.y;
        return {
          x: prev.x + dx * 0.16,
          y: prev.y + dy * 0.16
        };
      });
      animFrameRef.current = requestAnimationFrame(updatePosition);
    };

    animFrameRef.current = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [mousePos]);

  const toggleExpand = (id) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="work" className="py-24 sm:py-36 bg-[#f8f9fa] relative border-t border-black/10">
      
      {/* Floating Mouse-Tracking Image Preview */}
      <div
        className={`mouse-pos-list-image hidden lg:block rounded-2xl overflow-hidden shadow-2xl border border-black/10 ${
          isHovering ? 'active' : ''
        }`}
        style={{
          width: '320px',
          height: '240px',
          transform: `translate3d(${lerpPos.x}px, ${lerpPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {hoveredProject && (
          <div className="relative w-full h-full bg-slate-900">
            <img
              src={hoveredProject.image}
              alt={hoveredProject.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        )}
      </div>

      {/* Floating Mouse-Tracking "View" Circular Button */}
      <div
        className={`mouse-pos-list-btn hidden lg:flex ${isHovering ? 'active' : ''}`}
        style={{
          transform: `translate3d(${lerpPos.x}px, ${lerpPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <span>View</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-black/10">
          <span className="text-xs uppercase font-mono tracking-widest text-slate-500">
            Selected Work & Implementations
          </span>
          <span className="text-xs font-mono text-slate-500">
            From Resume
          </span>
        </div>

        {/* Projects Accordion / Detailed Rows */}
        <div className="space-y-6">
          {projectsData.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <div
                key={project.id}
                onMouseEnter={() => {
                  setHoveredProject(project);
                  setIsHovering(true);
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                }}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-white border-black/15 shadow-xl'
                    : 'bg-white/80 border-black/10 hover:border-black/20 hover:bg-white shadow-sm'
                }`}
              >
                {/* Clickable Header Row */}
                <div
                  onClick={() => toggleExpand(project.id)}
                  className="p-8 sm:p-10 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-[#455ce9] font-bold">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Featured Application
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#1c1d20] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-500 font-light mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6">
                    <span className="text-xs font-mono text-slate-500 hidden sm:inline-block">
                      {project.stackSummary}
                    </span>

                    <button
                      type="button"
                      aria-label="Toggle project details"
                      className="w-12 h-12 rounded-full border border-black/15 flex items-center justify-center text-[#1c1d20] hover:bg-[#455ce9] hover:border-transparent hover:text-white transition-all shadow-sm"
                    >
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>
                </div>

                {/* Expanded Detailed Content (From Resume) */}
                {isExpanded && (
                  <div className="px-8 pb-10 sm:px-10 border-t border-black/5 pt-8 animate-fadeIn">
                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Left: Bullets & Metrics */}
                      <div className="lg:col-span-8 space-y-6">
                        
                        {/* Metrics Badges */}
                        <div className="grid grid-cols-3 gap-3">
                          {project.metrics.map((m, i) => (
                            <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                              <span className="block text-sm sm:text-base font-bold text-[#1c1d20] font-mono">{m.value}</span>
                              <span className="block text-[10px] sm:text-xs text-slate-500 mt-0.5">{m.label}</span>
                            </div>
                          ))}
                        </div>

                        {/* Resume Bullet Points */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                            Key Architectural Highlights (From Resume)
                          </h4>
                          <ul className="space-y-2.5">
                            {project.highlights.map((bullet, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-[#575b63] leading-relaxed">
                                <span className="text-[#455ce9] mt-1 font-bold">▪</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 text-slate-700 border border-slate-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-4">
                          {project.liveUrl && project.liveUrl !== '#' && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-[#455ce9] hover:bg-[#334bd3] text-white shadow-md transition-all"
                            >
                              <Play size={14} fill="currentColor" />
                              <span>Live Application</span>
                              <ExternalLink size={13} />
                            </a>
                          )}

                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-all"
                          >
                            <Github size={15} />
                            <span>GitHub Repository</span>
                          </a>
                        </div>

                      </div>

                      {/* Right: Mockup / Screenshot */}
                      <div className="lg:col-span-4 rounded-2xl overflow-hidden aspect-[4/3] border border-black/10 shadow-lg bg-black">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
