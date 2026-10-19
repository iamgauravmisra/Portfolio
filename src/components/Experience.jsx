import React from 'react';
import { Award, Briefcase, GraduationCap, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { achievements, professionalExperience, education } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-36 bg-[#f8f9fa] relative border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-8 mb-16 border-b border-black/10">
          <span className="text-xs uppercase font-mono tracking-widest text-slate-500">
            Achievements & Experience
          </span>
          <span className="text-xs font-mono text-slate-500">
            Resume Record
          </span>
        </div>

        {/* 1. Achievements & Activities Grid */}
        <div className="mb-24">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1c1d20] tracking-tight mb-8 flex items-center gap-3">
            <span className="p-2 rounded-xl bg-[#455ce9]/10 text-[#455ce9]">
              <Award size={22} />
            </span>
            Achievements & Activities
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-black/10 hover:border-[#455ce9]/40 transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-[#455ce9] font-bold">
                      {item.tag}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-blue-50 text-[#455ce9] border border-blue-100 font-semibold">
                      {item.highlight}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-[#1c1d20] tracking-tight mb-2">
                    {item.title}
                  </h4>

                  <p className="text-sm text-[#575b63] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-2 text-xs font-mono text-slate-500">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Verified Resume Credential</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Professional Experience & Education */}
        <div className="grid lg:grid-cols-12 gap-12 pt-16 border-t border-black/10">
          
          {/* Experience Timeline (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-[#1c1d20] mb-6 flex items-center gap-3">
              <span className="p-2 rounded-xl bg-[#455ce9]/10 text-[#455ce9]">
                <Briefcase size={20} />
              </span>
              Practical Experience
            </h3>

            {professionalExperience.map((exp, i) => (
              <div key={i} className="p-7 rounded-3xl bg-white border border-black/10 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-lg font-bold text-[#1c1d20] tracking-tight">
                      {exp.role}
                    </h4>
                    <span className="text-xs font-mono text-slate-500 block mt-0.5">
                      {exp.organization} — {exp.type}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 self-start">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-[#575b63] leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {exp.contributions.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#455ce9] font-bold">—</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education Summary (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-[#1c1d20] mb-6 flex items-center gap-3">
              <span className="p-2 rounded-xl bg-[#455ce9]/10 text-[#455ce9]">
                <GraduationCap size={20} />
              </span>
              Academic Background
            </h3>

            <div className="p-7 rounded-3xl bg-white border border-black/10 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#455ce9] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                  CGPA: {education.cgpa}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  {education.period}
                </span>
              </div>

              <h4 className="text-base font-bold text-[#1c1d20] leading-snug">
                {education.degree}
              </h4>

              <p className="text-xs text-slate-500 leading-relaxed">
                {education.institution}, {education.location}
              </p>

              <div className="pt-4 border-t border-black/5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Core Relevant Coursework
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600 font-mono">
                  {education.coursework.map((course, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#455ce9]" />
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
