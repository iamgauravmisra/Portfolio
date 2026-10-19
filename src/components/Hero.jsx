import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between bg-[#f8f9fa] overflow-hidden pt-28 sm:pt-32"
    >
      {/* Top Content Row: Location Globe & Headline */}
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-20">
        
        {/* Left: Role Headline with Minimalist Arrow */}
        <div className="flex items-start gap-3">
          <div className="mt-1 text-[#1c1d20]">
            <ArrowDownRight size={24} className="text-[#1c1d20]" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#1c1d20] tracking-tight leading-tight">
              Full Stack Developer
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-light mt-0.5">
              & Software Engineer
            </p>
          </div>
        </div>

        {/* Right: Signature Hanger with Spinning 3D Wireframe Globe */}
        <div className="flex items-center gap-4 bg-white border border-black/10 px-5 py-3 rounded-full shadow-sm backdrop-blur-md">
          <div className="text-right">
            <span className="block text-xs font-mono text-slate-500">Located in</span>
            <span className="block text-xs font-semibold text-[#1c1d20]">Madhya Pradesh, India</span>
          </div>

          <div className="globe">
            <div className="globe-wrap">
              <div className="circle" />
              <div className="circle" />
              <div className="circle-hor" />
            </div>
          </div>
        </div>

      </div>

      {/* Center: Hero Developer Portrait Presentation */}
      <div className="relative flex-1 flex items-end justify-center pointer-events-none z-10 w-full min-h-[350px] sm:min-h-[480px]">
        
        {/* Ambient Gradient Fade at Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8f9fa] via-transparent to-transparent z-10" />

        {/* Profile Cutout Image Container */}
        <div className="relative w-[280px] sm:w-[380px] md:w-[460px] max-w-full aspect-[3/4] overflow-hidden rounded-t-full border-t border-x border-black/10 shadow-2xl bg-white">
          <img
            src={personalInfo.avatarUrl}
            alt={personalInfo.name}
            loading="eager"
            className="w-full h-full object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700 pointer-events-auto"
            onError={(e) => {
              e.target.src = personalInfo.avatarFallback;
            }}
          />
        </div>

      </div>

      {/* Bottom: Signature Infinite Marquee Banner */}
      <div className="relative z-20 w-full overflow-hidden border-t border-black/10 bg-white py-4 sm:py-6 shadow-sm">
        <div className="animate-marquee select-none whitespace-nowrap text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[#1c1d20]/90">
          <span>{personalInfo.name} — Full Stack Developer — {personalInfo.name} — Full Stack Developer — </span>
          <span>{personalInfo.name} — Full Stack Developer — {personalInfo.name} — Full Stack Developer — </span>
        </div>
      </div>

    </section>
  );
}
