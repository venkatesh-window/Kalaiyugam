"use client";

import Link from "next/link";
import { pillars } from "@/data/pillars";

export function Footer() {
  return (
    <footer className="relative bg-ink text-parchment pt-32 pb-12 overflow-hidden border-t border-parchment/10">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-marigold/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-marigold/5 rounded-full blur-[150px] translate-y-1/3 pointer-events-none" />
      
      {/* Giant Background Text */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden opacity-[0.02]">
        <span className="font-display text-[20vw] leading-none font-bold uppercase tracking-tighter whitespace-nowrap text-marigold">
          Kalaiyugam
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="group inline-flex flex-col items-start gap-2 mb-8">
              <span className="font-display text-5xl md:text-6xl leading-none uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-parchment to-parchment/70">
                Kalaiyugam<sup className="text-2xl ml-1 text-marigold">26</sup>
              </span>
              <span className="text-sm uppercase tracking-[0.3em] text-marigold font-medium">
                Symphony of Emotions
              </span>
            </Link>
            
            <p className="text-parchment/60 max-w-md text-lg leading-relaxed font-light mb-10">
              Kalaiyugam is the flagship event of Impact, the professional club of Chennai Institute of Technology. A three-day celebration where tradition meets expression, built by the six pillars of Impact.
            </p>
            
            {/* Pillars Tags */}
            <div className="flex flex-wrap gap-3 max-w-md">
              {pillars.map((p) => (
                <span 
                  key={p.name} 
                  className="bg-parchment/5 border border-parchment/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs uppercase tracking-widest hover:border-marigold/30 hover:bg-marigold/10 transition-colors cursor-default"
                >
                  {p.name}
                </span>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-2xl uppercase tracking-widest mb-8 text-white relative inline-block">
              Explore
              <span className="absolute -bottom-2 left-0 w-1/2 h-px bg-marigold"></span>
            </h4>
            <ul className="space-y-6 flex flex-col">
              {['Home', 'Events', 'Workshops'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="group flex items-center gap-3 text-parchment/70 hover:text-marigold transition-colors uppercase tracking-widest text-sm"
                  >
                    <span className="h-px w-0 bg-marigold transition-all duration-300 group-hover:w-4"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-2xl uppercase tracking-widest mb-8 text-white relative inline-block">
              Connect
              <span className="absolute -bottom-2 left-0 w-1/2 h-px bg-marigold"></span>
            </h4>
            <ul className="space-y-6 text-sm text-parchment/70 tracking-wide font-light">
              <li className="flex items-start gap-4 group">
                <div className="mt-1 w-4 h-4 rounded border border-marigold/30 flex items-center justify-center flex-shrink-0 transition-colors group-hover:border-marigold">
                   <div className="w-1 h-1 bg-marigold rounded-full"></div>
                </div>
                <span className="group-hover:text-parchment transition-colors">Chennai Institute of Technology<br />Kundrathur, Chennai 600069</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-4 h-4 rounded border border-marigold/30 flex items-center justify-center flex-shrink-0 transition-colors group-hover:border-marigold">
                   <div className="w-1 h-1 bg-marigold rounded-full"></div>
                </div>
                <a href="mailto:impact@citchennai.net" className="group-hover:text-parchment transition-colors">
                  impact@citchennai.net
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-4 h-4 rounded border border-marigold/30 flex items-center justify-center flex-shrink-0 transition-colors group-hover:border-marigold">
                   <div className="w-1 h-1 bg-marigold rounded-full"></div>
                </div>
                <a href="https://instagram.com/impactcit" target="_blank" rel="noreferrer" className="group-hover:text-parchment transition-colors">
                  @impactcit
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-parchment/10 flex flex-col md:flex-row items-center justify-center gap-6 text-xs text-parchment/40 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Impact CIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
