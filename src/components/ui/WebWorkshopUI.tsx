"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, Zap, Timer, Server, Layers } from "lucide-react";

export function WebWorkshopUI() {
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
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] bg-marigold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[30vw] h-[30vw] bg-marigold/5 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Hero */}
        <motion.div variants={item} className="text-center mb-20 relative">
          <div className="flex justify-center flex-wrap gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-marigold/30 bg-marigold/5 text-marigold text-xs uppercase tracking-widest font-semibold">
              <Code size={14} />
              <span>Tech Workshop</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-marigold/30 bg-marigold/5 text-marigold text-xs uppercase tracking-widest font-semibold font-mono">
              <span>Registration Fee: 80</span>
            </div>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl uppercase tracking-widest leading-none mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-parchment to-parchment/60">Web</span>
            <span className="block text-3xl md:text-5xl mt-4 text-marigold tracking-[0.2em]">Workshop</span>
          </h1>
          <p className="text-xl text-parchment/80 max-w-2xl mx-auto font-light mt-6">
            MVP in 90 Minutes (Zero-Install Sprint: From Prompt to Product to Production)
          </p>
        </motion.div>

        {/* Overview & Stack */}
        <motion.div variants={item} className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-parchment/5 border border-parchment/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
            <h3 className="text-marigold uppercase tracking-widest text-sm font-semibold mb-4">The Strategy</h3>
            <p className="text-base md:text-lg text-parchment/80 leading-relaxed font-light mb-6">
              A 90-minute hyper-sprint utilizing a 100% browser-based workflow. No local installations, no Wi-Fi bottlenecks. Powered by the central hub for AI prompts and toolkit resources.
            </p>
            <div className="flex flex-col gap-4 mt-8">
               <h4 className="text-marigold uppercase tracking-widest text-xs font-semibold">Pro-Inputs: Pre-event Homework</h4>
               <div className="bg-marigold/10 border border-marigold/20 rounded p-4 text-sm text-parchment/90">
                 Create free accounts on Bolt.new (or Lovable) and generate a free Gemini API key before arriving. This prevents losing 15 minutes to email verifications.
               </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-marigold/10 to-ink border border-marigold/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <h3 className="text-marigold uppercase tracking-widest text-sm font-semibold mb-6 flex items-center gap-2">
               <Layers size={18} /> Zero-Install Tech Stack
            </h3>
            
            <div className="space-y-6">
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-marigold/20 text-marigold flex items-center justify-center shrink-0">
                     <Zap size={20} />
                  </div>
                  <div>
                     <h4 className="text-parchment font-semibold text-sm">Ideation & Prompting</h4>
                     <p className="text-parchment/60 text-xs mt-1">Attendees grab expertly crafted system templates and refine specs.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-marigold/20 text-marigold flex items-center justify-center shrink-0">
                     <Code size={20} />
                  </div>
                  <div>
                     <h4 className="text-parchment font-semibold text-sm">Code & Build</h4>
                     <p className="text-parchment/60 text-xs mt-1">Browser-based agents generate full React/Node.js environment directly from the engineered prompt.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-marigold/20 text-marigold flex items-center justify-center shrink-0">
                     <Server size={20} />
                  </div>
                  <div>
                     <h4 className="text-parchment font-semibold text-sm">AI Integration</h4>
                     <p className="text-parchment/60 text-xs mt-1">Connect Gemini/OpenAI securely via browser environment variables.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-marigold/20 text-marigold flex items-center justify-center shrink-0">
                     <Globe size={20} />
                  </div>
                  <div>
                     <h4 className="text-parchment font-semibold text-sm">Deployment</h4>
                     <p className="text-parchment/60 text-xs mt-1">One-click deployment from the web agent to get a live, shareable public URL instantly.</p>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Schedule */}
        <motion.div variants={item} className="mb-24">
           <div className="bg-parchment/5 border border-parchment/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
             <h3 className="text-marigold uppercase tracking-widest text-sm font-semibold mb-8 flex items-center gap-2">
                <Timer size={18} /> The 90-Minute Sprint Schedule
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-ink/50 border border-parchment/5 p-4 rounded-xl">
                   <div className="text-marigold font-mono text-xs mb-1">0:00 - 0:15 (15m)</div>
                   <h4 className="text-parchment text-sm font-semibold mb-2">The Kickoff</h4>
                   <p className="text-parchment/60 text-xs">Explore the central hub and grab high-level system prompts.</p>
                </div>
                <div className="bg-ink/50 border border-parchment/5 p-4 rounded-xl">
                   <div className="text-marigold font-mono text-xs mb-1">0:15 - 0:35 (20m)</div>
                   <h4 className="text-parchment text-sm font-semibold mb-2">Build the Foundation</h4>
                   <p className="text-parchment/60 text-xs">Transfer prompts to watch the AI build UI and logic in real-time.</p>
                </div>
                <div className="bg-ink/50 border border-parchment/5 p-4 rounded-xl">
                   <div className="text-marigold font-mono text-xs mb-1">0:35 - 0:50 (15m)</div>
                   <h4 className="text-parchment text-sm font-semibold mb-2">Wire the Brain</h4>
                   <p className="text-parchment/60 text-xs">Add Cloud API keys to make the application functional.</p>
                </div>
                <div className="bg-ink/50 border border-parchment/5 p-4 rounded-xl">
                   <div className="text-marigold font-mono text-xs mb-1">0:50 - 1:00 (10m)</div>
                   <h4 className="text-parchment text-sm font-semibold mb-2">1-Click Deploy</h4>
                   <p className="text-parchment/60 text-xs">Hit the deploy button for a live URL.</p>
                </div>
                <div className="bg-ink/50 border border-parchment/5 p-4 rounded-xl">
                   <div className="text-marigold font-mono text-xs mb-1">1:00 - 1:25 (25m)</div>
                   <h4 className="text-parchment text-sm font-semibold mb-2">The MVP Sprint</h4>
                   <p className="text-parchment/60 text-xs">Use tutorials to add one unique, complex feature to the baseline app.</p>
                </div>
                <div className="bg-ink/50 border border-parchment/5 p-4 rounded-xl">
                   <div className="text-marigold font-mono text-xs mb-1">1:25 - 1:30 (5m)</div>
                   <h4 className="text-parchment text-sm font-semibold mb-2">Rapid Fire Demos</h4>
                   <p className="text-parchment/60 text-xs">Project the best apps and submit URLs back into the community hub.</p>
                </div>
             </div>

             {/* Battle Criteria */}
             <div className="mt-12 pt-8 border-t border-parchment/10">
                <h4 className="text-marigold uppercase tracking-widest text-xs font-semibold mb-6">MVP Battle Criteria (100 Points Total)</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                   <div className="bg-ink/30 p-3 rounded text-center border border-parchment/5">
                      <div className="text-2xl font-display text-parchment mb-1">20</div>
                      <div className="text-[10px] uppercase tracking-wider text-parchment/60">Problem solving</div>
                   </div>
                   <div className="bg-ink/30 p-3 rounded text-center border border-parchment/5">
                      <div className="text-2xl font-display text-parchment mb-1">20</div>
                      <div className="text-[10px] uppercase tracking-wider text-parchment/60">Tools Usage</div>
                   </div>
                   <div className="bg-ink/30 p-3 rounded text-center border border-parchment/5">
                      <div className="text-2xl font-display text-parchment mb-1">25</div>
                      <div className="text-[10px] uppercase tracking-wider text-parchment/60">UX & Innovation</div>
                   </div>
                   <div className="bg-ink/30 p-3 rounded text-center border border-parchment/5">
                      <div className="text-2xl font-display text-parchment mb-1">30</div>
                      <div className="text-[10px] uppercase tracking-wider text-parchment/60">Technical Execution</div>
                   </div>
                   <div className="bg-ink/30 p-3 rounded text-center border border-parchment/5">
                      <div className="text-2xl font-display text-parchment mb-1">5</div>
                      <div className="text-[10px] uppercase tracking-wider text-parchment/60">Presentation</div>
                   </div>
                </div>
             </div>
           </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div variants={item} className="text-center pb-12">
          <button 
            onClick={() => window.open('https://forms.gle/3ZFm2dhYGeyg3nHu5', '_blank', 'noopener,noreferrer')}
            className="group relative inline-flex items-center justify-center px-10 py-5 font-sans font-semibold tracking-[0.2em] uppercase text-sm bg-marigold text-ink overflow-hidden rounded-full transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Join the Sprint
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </motion.div>

      </motion.div>
    </div>
  );
}
