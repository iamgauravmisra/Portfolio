import React from 'react';
import { technicalSkills } from '../data/portfolioData';

export default function Skills() {
  const categories = [
    { title: "Programming Languages", skills: technicalSkills.languages },
    { title: "Frontend Development", skills: technicalSkills.frontend },
    { title: "Backend & Systems", skills: technicalSkills.backend },
    { title: "Databases & Tools", skills: technicalSkills.databasesAndTools },
  ];

  return (
    <section id="skills" className="py-24 sm:py-36 bg-[#f8f9fa] relative border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-8 mb-16 border-b border-black/10">
          <span className="text-xs uppercase font-mono tracking-widest text-slate-500">
            Technical Skills
          </span>
          <span className="text-xs font-mono font-semibold text-[#455ce9]">
            Directly from Resume
          </span>
        </div>

        {/* 4 Categorized Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="p-7 rounded-3xl bg-white border border-black/10 flex flex-col justify-between hover:border-[#455ce9]/40 transition-colors duration-300 shadow-sm"
            >
              <div>
                <h4 className="text-lg font-bold text-[#1c1d20] tracking-tight mb-6 flex items-center justify-between">
                  <span>{cat.title}</span>
                  <span className="text-xs font-mono font-semibold text-[#455ce9] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">{cat.skills.length}</span>
                </h4>

                <div className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs hover:bg-slate-100 transition-colors"
                    >
                      <span className="font-semibold text-[#1c1d20]">{skill.name}</span>
                      <span className="text-[10px] font-mono text-slate-500">{skill.type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Verified in Production</span>
                <span className="text-[#455ce9]">●</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
