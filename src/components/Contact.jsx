import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Copy, Check, Send, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [time, setTime] = useState('');

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const [redirectLinks, setRedirectLinks] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    const recipient = personalInfo.email;
    const subject = `Portfolio Inquiry from ${formData.name.trim()}`;
    const body = `Hi Gaurav,\n\n${formData.message.trim()}\n\n---\nSender Details:\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const mailtoUrl = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setRedirectLinks({ gmail: gmailUrl, mailto: mailtoUrl });
    setStatus('redirecting');

    // Attempt to open Gmail compose window in a new tab
    const opened = window.open(gmailUrl, '_blank', 'noopener,noreferrer');

    if (!opened) {
      // Browser popup blocker prevented automatic opening
      setStatus('blocked');
    } else {
      setTimeout(() => {
        setStatus('opened');
      }, 600);
    }
  };

  return (
    <section id="contact" className="relative bg-[#f1f3f5] pt-12 pb-24 sm:pb-36 text-[#1c1d20] overflow-hidden border-t border-black/10">
      
      {/* Dennis Snellenberg Signature Curved Rounded Div Divider at Top */}
      <div className="rounded-div-wrap mb-16 sm:mb-24">
        <div className="rounded-div rounded-div-light-contrast" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Giant Headline: "Let's work together" */}
        <div className="pb-16 sm:pb-24 border-b border-black/10">
          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-black/15 bg-white flex-shrink-0 shadow-md">
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top filter grayscale contrast-110"
                onError={(e) => {
                  e.target.src = personalInfo.avatarFallback;
                }}
              />
            </div>
            <span className="text-xl sm:text-3xl font-light text-slate-600">
              Let's work
            </span>
          </div>

          <h2 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tight text-[#1c1d20] leading-none">
            together<span className="text-[#455ce9]">.</span>
          </h2>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            {/* Email Pill */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-3 px-8 py-5 rounded-full bg-white hover:bg-slate-50 border border-black/10 text-base sm:text-lg font-medium text-[#1c1d20] transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              <Mail size={18} className="text-[#455ce9]" />
              <span>{personalInfo.email}</span>
              {copiedEmail ? (
                <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Copied!</span>
              ) : (
                <Copy size={16} className="text-slate-400" />
              )}
            </button>

            {/* Phone Pill from Resume */}
            <button
              type="button"
              onClick={handleCopyPhone}
              className="inline-flex items-center gap-3 px-8 py-5 rounded-full bg-white hover:bg-slate-50 border border-black/10 text-base sm:text-lg font-medium text-[#1c1d20] transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              <Phone size={18} className="text-emerald-600" />
              <span>{personalInfo.phone}</span>
              {copiedPhone ? (
                <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Copied!</span>
              ) : (
                <Copy size={16} className="text-slate-400" />
              )}
            </button>

            {/* Resume Button */}
            <a
              href={personalInfo.resumeUrl}
              download="GauravMishraResume.pdf"
              className="inline-flex items-center gap-2 px-8 py-5 rounded-full bg-white hover:bg-slate-50 border border-black/10 text-base sm:text-lg font-medium text-[#1c1d20] transition-all hover:scale-105 shadow-sm"
            >
              <span>Download Resume</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Form & Context Row */}
        <div className="grid lg:grid-cols-12 gap-12 pt-16 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase font-mono tracking-widest text-slate-500 block mb-2">
              Contact Details
            </span>
            <p className="text-base text-[#575b63] leading-relaxed">
              Available for full-stack engineering roles, freelance builds, and technical collaboration.
            </p>

            <div className="space-y-4 pt-4 text-xs font-mono text-slate-600">
              <div className="flex items-center gap-2.5">
                <MapPin size={16} className="text-[#455ce9]" />
                <span>Satna, Madhya Pradesh, India (Open to Remote)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Local Time: {time || 'IST'}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              {redirectLinks && (
                <div className="p-5 rounded-2xl bg-[#455ce9]/10 border border-[#455ce9]/20 text-[#1c1d20] space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="p-2 rounded-xl bg-[#455ce9] text-white flex-shrink-0 mt-0.5 shadow-sm">
                      <Mail size={18} />
                    </span>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-[#1c1d20]">
                        {status === 'blocked' ? 'Pop-up blocked by browser' : 'Gmail Compose Opened!'}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                        {status === 'blocked'
                          ? 'Your browser blocked the new tab. Click the button below to open Gmail with your pre-filled message:'
                          : 'Your draft has been prepared with your message. Just click Send in Gmail! If the tab didn’t open, click below:'}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-1 pl-11">
                    <a
                      href={redirectLinks.gmail}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#455ce9] text-white text-xs font-semibold hover:bg-[#384cc4] transition-all hover:scale-105 shadow-sm"
                    >
                      <span>Open in Gmail</span>
                      <ArrowUpRight size={14} />
                    </a>
                    <a
                      href={redirectLinks.mailto}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-black/10 text-slate-700 text-xs font-medium hover:bg-slate-50 transition-colors"
                    >
                      <span>Use Default Mail App</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="c-name" className="block text-xs font-mono text-slate-500 mb-2">
                    01 / What's your name?
                  </label>
                  <input
                    id="c-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-black/20 py-3 text-[#1c1d20] placeholder-slate-400 focus:outline-none focus:border-[#1c1d20] transition-colors text-base"
                  />
                </div>

                <div>
                  <label htmlFor="c-email" className="block text-xs font-mono text-slate-500 mb-2">
                    02 / What's your email?
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-black/20 py-3 text-[#1c1d20] placeholder-slate-400 focus:outline-none focus:border-[#1c1d20] transition-colors text-base"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="c-msg" className="block text-xs font-mono text-slate-500 mb-2">
                  03 / Your message
                </label>
                <textarea
                  id="c-msg"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Gaurav, can you help with..."
                  className="w-full bg-transparent border-b border-black/20 py-3 text-[#1c1d20] placeholder-slate-400 focus:outline-none focus:border-[#1c1d20] transition-colors text-base resize-none"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  disabled={status === 'redirecting'}
                  className="btn-round w-32 h-32 sm:w-40 sm:h-40 group shadow-xl"
                  aria-label="Send via Gmail"
                >
                  <div className="btn-fill" />
                  <span className="text-sm sm:text-base font-semibold text-white flex items-center gap-1.5">
                    {status === 'redirecting' ? 'Opening...' : 'Send it'}
                    <Send size={15} />
                  </span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
