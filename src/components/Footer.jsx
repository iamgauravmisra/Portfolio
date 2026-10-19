import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f1f3f5] border-t border-black/10 py-10 text-[#1c1d20]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs font-mono text-slate-500">
        
        {/* Version info */}
        <div>
          <span className="block text-[10px] uppercase text-slate-400 mb-0.5">Version</span>
          <span className="text-[#1c1d20] font-semibold">2025 © Edition</span>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-6">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1c1d20] transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1c1d20] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={personalInfo.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1c1d20] transition-colors"
          >
            Twitter
          </a>
        </div>

        {/* Scroll back to top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:text-[#1c1d20] transition-colors group"
        >
          <span>Back to top</span>
          <div className="w-7 h-7 rounded-full bg-white border border-black/10 flex items-center justify-center group-hover:bg-[#455ce9] group-hover:border-transparent group-hover:text-white transition-all shadow-sm">
            <ArrowUp size={13} />
          </div>
        </button>

      </div>
    </footer>
  );
}
