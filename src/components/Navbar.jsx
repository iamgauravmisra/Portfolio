import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFixedNav, setShowFixedNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowFixedNav(true);
      } else {
        setShowFixedNav(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Work', id: 'work' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      {/* Top Main Navigation Bar */}
      <header className="absolute top-0 left-0 right-0 z-40 px-6 sm:px-12 py-8 flex items-center justify-between pointer-events-auto">
        
        {/* Left: Signature "Code by Gaurav Mishra" */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, 'home')}
          className="group flex items-center gap-1.5 text-sm sm:text-base font-medium text-slate-600 hover:text-[#1c1d20] transition-colors"
        >
          <span className="text-slate-400 group-hover:text-[#1c1d20] transition-colors">©</span>
          <span className="text-slate-500 group-hover:text-[#1c1d20] transition-colors">Code by</span>
          <span className="font-semibold text-[#1c1d20] tracking-tight ml-0.5">Gaurav</span>
          <span className="font-semibold text-[#1c1d20] tracking-tight">Mishra</span>
        </a>

        {/* Right: Clean Text Navigation Links */}
        <nav aria-label="Desktop Nav" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`relative text-sm sm:text-base font-medium transition-colors group py-1 ${
                  isActive ? 'text-[#1c1d20]' : 'text-slate-600 hover:text-[#1c1d20]'
                }`}
              >
                <span>{link.name}</span>
                {isActive ? (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#1c1d20]" />
                ) : (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#1c1d20] opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </a>
            );
          })}
        </nav>
      </header>

      {/* Floating Magnetic Hamburger Button */}
      <div
        className={`fixed top-6 right-6 sm:top-8 sm:right-10 z-50 transition-all duration-500 ease-out ${
          showFixedNav || isMenuOpen
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-75 pointer-events-none md:opacity-0 md:pointer-events-none opacity-100 scale-100 pointer-events-auto'
        }`}
      >
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white hover:bg-[#455ce9] border border-black/10 text-[#1c1d20] hover:text-white flex flex-col items-center justify-center gap-1.5 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group"
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <>
              <span className="w-6 h-0.5 bg-[#1c1d20] group-hover:bg-white rounded-full transition-all duration-300" />
              <span className="w-6 h-0.5 bg-[#1c1d20] group-hover:bg-white rounded-full transition-all duration-300" />
            </>
          )}
        </button>
      </div>

      {/* Full-Screen Overlay Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl flex flex-col justify-between p-8 sm:p-16 animate-fadeIn">
          
          <div className="flex justify-between items-center border-b border-black/10 pb-6">
            <span className="text-xs uppercase font-mono text-slate-500 tracking-widest">
              Navigation
            </span>
          </div>

          <div className="flex flex-col gap-5 sm:gap-7 my-auto">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className="text-4xl sm:text-6xl font-bold text-slate-700 hover:text-[#1c1d20] hover:translate-x-3 transition-all duration-300 flex items-center justify-between group"
              >
                <span>{link.name}</span>
                <span className="w-3 h-3 rounded-full bg-[#455ce9] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          <div className="border-t border-black/10 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-500">
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
            <span className="text-[#1c1d20] font-semibold">{personalInfo.email}</span>
          </div>

        </div>
      )}
    </>
  );
}
