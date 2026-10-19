import React from 'react';
import { GraduationCap, ArrowUpRight, Code2, Award, BookOpen, Sparkles } from 'lucide-react';
import { personalInfo, education } from '../data/portfolioData';

export default function About() {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-24 sm:py-36 bg-[#f8f9fa] relative border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Header Tag */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-black/10">
          <span className="text-xs uppercase font-mono tracking-widest text-slate-500">
            Professional Summary
          </span>
          <span className="text-xs font-mono font-semibold text-[#455ce9]">
            B.Tech CSE • CGPA {education.cgpa}
          </span>
        </div>

        {/* Big Statement */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-medium text-[#1c1d20] tracking-tight leading-snug">
            Computer Science student with expertise in MERN stack development and hands-on experience building scalable, production-ready applications.
          </h3>
        </div>

        {/* Narrative & Metrics */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Full Resume Summary */}
          <div className="lg:col-span-8 space-y-6 text-[#575b63] text-base sm:text-lg leading-relaxed font-normal">
            {personalInfo.summary.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            {/* Quick Metrics Bar from Resume */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {personalInfo.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col justify-center"
                >
                  <span className="text-xl sm:text-2xl font-bold text-[#1c1d20] font-mono">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-500 mt-1 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Education Spotlight Card */}
            <div className="p-7 rounded-2xl bg-white border border-black/10 shadow-sm mt-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#455ce9]/10 text-[#455ce9]">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#1c1d20]">
                      {education.institution}
                    </h4>
                    <span className="text-xs text-slate-500">
                      {education.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#455ce9]/10 text-[#455ce9] border border-[#455ce9]/20">
                    CGPA: {education.cgpa}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {education.period}
                  </span>
                </div>
              </div>

              <p className="text-sm font-semibold text-slate-700 mb-3">
                {education.degree}
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-black/5">
                {education.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Giant Circular Button */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center pt-8">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="btn-round w-44 h-44 sm:w-52 sm:h-52 group shadow-xl"
              aria-label="Get in touch"
            >
              <div className="btn-fill" />
              <div className="flex flex-col items-center gap-2 text-center px-4">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-white">
                  Let's Connect
                </span>
                <span className="text-xs font-mono text-white/90 flex items-center gap-1">
                  Get in touch <ArrowUpRight size={14} />
                </span>
              </div>
            </a>

            <div className="mt-8 text-center text-xs font-mono text-slate-500 space-y-1">
              <span className="block text-[#1c1d20] font-semibold">{personalInfo.phone}</span>
              <span className="block">{personalInfo.email}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
