"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, Clock, Code, BrainCircuit, 
  ShieldAlert, Sparkles, ChevronRight, Zap
} from "lucide-react";

export function OpticalIllusionChallengeUI() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full min-h-screen bg-ink text-parchment overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-marigold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-marigold/5 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* 1. Event Hero */}
        <motion.div variants={item} className="text-center mb-20 relative">
          <div className="flex justify-center flex-wrap gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-marigold/30 bg-marigold/5 text-marigold text-xs uppercase tracking-widest font-semibold">
              <Sparkles size={14} />
              <span>Emotions Concept</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs uppercase tracking-widest font-semibold font-mono">
              <span>Entry Fee: ₹99</span>
            </div>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl uppercase tracking-widest leading-none mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-parchment to-parchment/60">Optical Illusion</span>
            <span className="block text-3xl md:text-5xl mt-4 text-marigold tracking-[0.2em]">Website Challenge</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-parchment/70 max-w-2xl mx-auto italic font-display">
            "Think like a UX Engineer, not just a coder."
          </p>
        </motion.div>

        {/* 2. Event Overview & 3. Team Size + Duration */}
        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
          <div className="md:col-span-8 bg-parchment/5 border border-parchment/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
            <h3 className="text-marigold uppercase tracking-widest text-sm font-semibold mb-4">The Challenge</h3>
            <p className="text-lg text-parchment/80 leading-relaxed font-light mb-6">
              Users naturally expect websites to behave in intuitive ways. In this challenge, you'll receive a website intentionally designed to mislead users through unexpected interactions, confusing behaviours, and poor user experience.
            </p>
            <p className="text-lg text-parchment/80 leading-relaxed font-light">
              Your mission is not to build a website from scratch, but to <strong className="text-parchment font-medium">transform the illusion website into a user-friendly, intuitive experience</strong> while preserving its intended functionality.
            </p>
          </div>
          
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="bg-parchment/5 border border-parchment/10 rounded-2xl p-6 backdrop-blur-sm flex items-start gap-4 hover:bg-parchment/10 transition-colors">
              <div className="p-3 bg-marigold/10 rounded-lg text-marigold shrink-0">
                <Users size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-parchment/50 mb-1">Team Size</p>
                <p className="text-2xl font-display font-semibold">2 Participants</p>
              </div>
            </div>
            
            <div className="bg-parchment/5 border border-parchment/10 rounded-2xl p-6 backdrop-blur-sm flex items-start gap-4 hover:bg-parchment/10 transition-colors">
              <div className="p-3 bg-marigold/10 rounded-lg text-marigold shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-parchment/50 mb-1">Total Duration</p>
                <p className="text-2xl font-display font-semibold">60 Minutes</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Challenge Timeline */}
        <motion.div variants={item} className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-marigold/30 flex-grow" />
            <h2 className="font-display text-3xl uppercase tracking-widest text-marigold">Challenge Timeline</h2>
            <div className="h-px bg-marigold/30 flex-grow" />
          </div>

          <div className="relative">
            {/* Connecting Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-parchment/10 -translate-x-1/2 hidden md:block" />

            {/* 4. Phase 1 — Investigation */}
            <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 mb-16 items-start">
              <div className="md:w-1/2 md:text-right pt-2 relative z-10">
                <div className="inline-block px-3 py-1 bg-parchment/10 rounded text-xs uppercase tracking-widest mb-3">Phase 1</div>
                <h3 className="font-display text-4xl mb-2 text-white">Investigation</h3>
                <p className="text-marigold font-mono text-sm tracking-widest mb-4">Duration: 10 Minutes</p>
                <p className="text-parchment/70 leading-relaxed font-light">
                  During the first 10 minutes, explore the website. Observe every interaction and record every Expectation Mismatch you discover.
                </p>
              </div>
              
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-ink border-2 border-marigold rounded-full -translate-x-1/2 mt-4 md:mt-6 z-20 hidden md:block" />
              
              <div className="md:w-1/2 bg-parchment/5 border border-parchment/10 rounded-2xl p-6 backdrop-blur-sm relative z-10">
                <h4 className="text-xs uppercase tracking-widest text-parchment/50 mb-4 flex items-center gap-2">
                  <ShieldAlert size={14} /> Rules
                </h4>
                <ul className="space-y-3 mb-6">
                  {['No Coding', 'No AI Tools', 'No Browser Developer Tools', 'Observation only'].map((rule, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-parchment/80 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-marigold/50" />
                      {rule}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-parchment/10">
                  <p className="text-sm text-parchment/90 font-medium">
                    <span className="text-marigold uppercase tracking-wider text-xs block mb-1">Submission</span>
                    At the end of 10 minutes, submit your mismatch list.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Phase 2 — Development */}
            <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 items-start">
              <div className="md:w-1/2 md:order-2 pt-2 relative z-10">
                <div className="inline-block px-3 py-1 bg-parchment/10 rounded text-xs uppercase tracking-widest mb-3">Phase 2</div>
                <h3 className="font-display text-4xl mb-2 text-white">Development</h3>
                <p className="text-marigold font-mono text-sm tracking-widest mb-4">Duration: 50 Minutes</p>
                <p className="text-parchment/70 leading-relaxed font-light">
                  Now begin development. Your objective is to transform the illusion website into one that follows standard user expectations while maintaining its intended functionality.
                </p>
              </div>

              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-ink border-2 border-marigold rounded-full -translate-x-1/2 mt-4 md:mt-6 z-20 hidden md:block" />
              
              <div className="md:w-1/2 md:order-1 bg-parchment/5 border border-parchment/10 rounded-2xl p-6 backdrop-blur-sm relative z-10 md:text-right">
                <div className="p-4 bg-marigold/5 rounded-xl border border-marigold/20">
                  <Code size={24} className="text-marigold mb-3 md:ml-auto" />
                  <p className="text-sm text-parchment/80 leading-relaxed">
                    Teams are free to discover and fix additional issues during development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 7, 8, 9. AI Rules & Interaction Time */}
        <motion.div variants={item} className="mb-24">
          <div className="bg-gradient-to-br from-indigo/20 to-ink border border-indigo/30 rounded-3xl p-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo/30 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="bg-ink/80 backdrop-blur-xl rounded-[22px] p-8 md:p-12 relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <BrainCircuit className="text-indigo" size={32} />
                <h2 className="font-display text-3xl md:text-4xl uppercase tracking-widest">AI Rules</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                  <h3 className="text-xl font-display text-white mb-4">Only ONE AI Tool</h3>
                  <p className="text-parchment/70 text-sm leading-relaxed mb-4">
                    Teams may choose only one AI tool to use throughout the event.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['ChatGPT', 'Claude', 'Gemini'].map(tool => (
                      <span key={tool} className="px-3 py-1 bg-parchment/10 text-xs rounded text-parchment/90 border border-parchment/20">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-parchment/10 pt-8 lg:pt-0 lg:pl-8">
                  <h3 className="text-xl font-display text-white mb-4">Interaction Time</h3>
                  <p className="text-parchment/70 text-sm leading-relaxed mb-6">
                    Each team receives <strong className="text-indigo font-bold">3 Minutes Total</strong>. Teams may split their AI time however they wish:
                  </p>
                  <div className="space-y-3 font-mono text-xs text-parchment/80">
                    <div className="flex justify-between items-center bg-indigo/10 px-4 py-2 rounded">
                      <span>3 Mins at once</span> 
                      <div className="w-24 h-1 bg-indigo/40 rounded-full"><div className="w-full h-full bg-indigo rounded-full" /></div>
                    </div>
                    <div className="flex justify-between items-center bg-indigo/10 px-4 py-2 rounded">
                      <span>1 + 1 + 1 Mins</span> 
                      <div className="w-24 flex gap-1"><div className="w-1/3 h-1 bg-indigo rounded-full"/><div className="w-1/3 h-1 bg-indigo rounded-full"/><div className="w-1/3 h-1 bg-indigo rounded-full"/></div>
                    </div>
                    <div className="flex justify-between items-center bg-indigo/10 px-4 py-2 rounded">
                      <span>30s + 90s + 60s</span> 
                      <div className="w-24 flex gap-1"><div className="w-[16%] h-1 bg-indigo rounded-full"/><div className="w-[50%] h-1 bg-indigo rounded-full"/><div className="w-[33%] h-1 bg-indigo rounded-full"/></div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-parchment/10 pt-8 lg:pt-0 lg:pl-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-[#4ade80] mb-2 flex items-center gap-2">
                         During AI Time
                      </h4>
                      <ul className="text-sm text-parchment/70 space-y-1">
                        <li>• Ask prompts</li>
                        <li>• Read responses</li>
                        <li>• Save responses into notes/IDE</li>
                      </ul>
                    </div>
                    <div className="h-px w-full bg-parchment/10" />
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-kumkum mb-2 flex items-center gap-2">
                         After AI Time Ends
                      </h4>
                      <ul className="text-sm text-parchment/70 space-y-1">
                        <li className="text-kumkum/80">• No further prompts</li>
                        <li className="text-kumkum/80">• No follow-up questions</li>
                        <li>• Previously saved notes may be used</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 10. Investigation Advantage */}
        <motion.div variants={item} className="mb-24">
          <div className="relative border border-marigold bg-marigold/5 rounded-3xl p-8 md:p-12 overflow-hidden text-center shadow-[0_0_40px_rgba(217,164,65,0.1)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-marigold to-transparent" />
            
            <Zap className="text-marigold mx-auto mb-6" size={40} />
            
            <h2 className="font-display text-3xl md:text-5xl uppercase tracking-widest text-white mb-6">
              Investigation Advantage
            </h2>
            
            <p className="text-lg text-parchment/80 mb-8 max-w-2xl mx-auto">
              The team with the highest Investigation Score receives:
            </p>
            
            <div className="inline-block bg-marigold/10 border border-marigold/40 rounded-xl px-8 py-6 mb-8 backdrop-blur-md">
              <span className="block text-4xl md:text-6xl font-display font-bold text-marigold mb-2">
                +2 MINUTES
              </span>
              <span className="block text-sm uppercase tracking-[0.3em] text-marigold/70">
                Bonus AI Time
              </span>
            </div>
            
            <p className="text-xl">
              Therefore: <strong className="text-marigold tracking-widest ml-2">TOTAL AI TIME: 5 MINUTES</strong>
            </p>
          </div>
        </motion.div>

        {/* Organizer Section Placeholder */}
        <motion.div variants={item} className="mb-16 flex justify-center">
          <div className="bg-parchment/5 border border-parchment/10 rounded-2xl p-8 backdrop-blur-sm max-w-md w-full text-center hover:border-marigold/30 transition-colors">
            <h3 className="text-marigold uppercase tracking-widest text-sm font-semibold mb-4 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              Event Organisers
            </h3>
            <div className="flex flex-col gap-3 mt-4">
              <div className="flex items-center justify-between px-4 py-2 bg-parchment/5 rounded-lg">
                <span className="text-parchment/90 font-medium">Aldrin</span>
                <span className="text-marigold/80 font-mono text-sm">88078 36935</span>
              </div>
              <div className="flex items-center justify-between px-4 py-2 bg-parchment/5 rounded-lg">
                <span className="text-parchment/90 font-medium">Venkatesh</span>
                <span className="text-marigold/80 font-mono text-sm">88380 77893</span>
              </div>
              <div className="flex items-center justify-between px-4 py-2 bg-parchment/5 rounded-lg">
                <span className="text-parchment/90 font-medium">Sanjith</span>
                <span className="text-marigold/80 font-mono text-sm">94454 85980</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 11. Final CTA */}
        <motion.div variants={item} className="text-center pb-12">
          <button 
            onClick={() => window.open('https://forms.gle/6KJb8CH95Eiaf7pY7', '_blank', 'noopener,noreferrer')}
            className="group relative inline-flex items-center justify-center px-10 py-5 font-sans font-semibold tracking-[0.2em] uppercase text-sm bg-marigold text-ink overflow-hidden rounded-full transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Register for the Challenge
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </motion.div>

      </motion.div>
    </div>
  );
}
