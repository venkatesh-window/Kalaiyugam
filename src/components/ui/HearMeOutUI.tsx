"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, ChevronRight, Music, Paintbrush, ShieldAlert
} from "lucide-react";

export function HearMeOutUI() {
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
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-marigold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-marigold/5 rounded-full blur-[120px]" />
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
              <Sparkles size={14} />
              <span>Design Category</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs uppercase tracking-widest font-semibold font-mono">
              <span>Entry Fee: ₹60</span>
            </div>
          </div>
          
          <h1 className="font-display text-5xl md:text-8xl uppercase tracking-widest leading-none mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-parchment to-parchment/60">Hear Me</span>
            <span className="block text-3xl md:text-5xl mt-4 text-marigold tracking-[0.2em]">Out</span>
          </h1>
        </motion.div>

        {/* Overview */}
        <motion.div variants={item} className="mb-24">
          <div className="bg-parchment/5 border border-parchment/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
            <h3 className="text-marigold uppercase tracking-widest text-sm font-semibold mb-4">Overview</h3>
            <p className="text-lg text-parchment/80 leading-relaxed font-light mb-6">
              Are you a designer? Is a creative slump getting to you? Get over your art block by participating in this fun competition which tests your creativity and ingenuity.
            </p>
          </div>
        </motion.div>

        {/* Requirements */}
        <motion.div variants={item} className="mb-24">
          <div className="bg-gradient-to-br from-marigold/20 to-ink border border-marigold/30 rounded-3xl p-1 relative overflow-hidden">
             <div className="bg-ink/80 backdrop-blur-xl rounded-[22px] p-8 md:p-12 relative z-10">
                <h3 className="text-xl font-display text-white mb-4 flex items-center gap-2">
                    <ShieldAlert className="text-marigold" size={24} /> Requirements
                </h3>
                <ul className="list-disc list-inside text-parchment/80 space-y-2">
                    <li>Laptop</li>
                </ul>
             </div>
          </div>
        </motion.div>

        {/* Format */}
        <motion.div variants={item} className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-marigold/30 flex-grow" />
            <h2 className="font-display text-3xl uppercase tracking-widest text-marigold">Format</h2>
            <div className="h-px bg-marigold/30 flex-grow" />
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-parchment/10 -translate-x-1/2 hidden md:block" />

            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 mb-16 items-start">
              <div className="md:w-1/2 md:text-right pt-2 relative z-10">
                <div className="inline-block px-3 py-1 bg-parchment/10 rounded text-xs uppercase tracking-widest mb-3">Step 1</div>
                <h3 className="font-display text-3xl mb-2 text-white">Listen to the Audio Prompt</h3>
                <p className="text-parchment/70 leading-relaxed font-light mt-4">
                  Hear the audio clip provided to you.
                </p>
              </div>
              
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-ink border-2 border-marigold rounded-full -translate-x-1/2 mt-4 md:mt-6 z-20 hidden md:block" />
              
              <div className="md:w-1/2 bg-parchment/5 border border-parchment/10 rounded-2xl p-6 backdrop-blur-sm relative z-10">
                <Music size={24} className="text-marigold mb-3" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 mb-16 items-start">
              <div className="md:w-1/2 md:order-2 pt-2 relative z-10">
                <div className="inline-block px-3 py-1 bg-parchment/10 rounded text-xs uppercase tracking-widest mb-3">Step 2</div>
                <h3 className="font-display text-3xl mb-2 text-white">Translate Sound into Design</h3>
                <p className="text-parchment/70 leading-relaxed font-light mt-4">
                  Let the audio guide your initial visual ideas.
                </p>
              </div>

              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-ink border-2 border-marigold rounded-full -translate-x-1/2 mt-4 md:mt-6 z-20 hidden md:block" />
              
              <div className="md:w-1/2 md:order-1 bg-parchment/5 border border-parchment/10 rounded-2xl p-6 backdrop-blur-sm relative z-10 md:text-right">
                <Paintbrush size={24} className="text-marigold mb-3 md:ml-auto" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 items-start">
              <div className="md:w-1/2 md:text-right pt-2 relative z-10">
                <div className="inline-block px-3 py-1 bg-parchment/10 rounded text-xs uppercase tracking-widest mb-3">Step 3</div>
                <h3 className="font-display text-3xl mb-2 text-white">Adapt to Constraints</h3>
                <p className="text-parchment/70 leading-relaxed font-light mt-4">
                  New limits are introduced over time; work under constraints and keep expanding your creativity.
                </p>
              </div>
              
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-ink border-2 border-marigold rounded-full -translate-x-1/2 mt-4 md:mt-6 z-20 hidden md:block" />
              
              <div className="md:w-1/2 bg-parchment/5 border border-parchment/10 rounded-2xl p-6 backdrop-blur-sm relative z-10">
                 <ShieldAlert size={24} className="text-marigold mb-3" />
              </div>
            </div>

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
                <span className="text-parchment/90 font-medium">Uvanth</span>
                <span className="text-marigold/80 font-mono text-sm">98407 47930</span>
              </div>
              <div className="flex items-center justify-between px-4 py-2 bg-parchment/5 rounded-lg">
                <span className="text-parchment/90 font-medium">Aishmica</span>
                <span className="text-marigold/80 font-mono text-sm">94877 18428</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div variants={item} className="text-center pb-12">
          <button 
            onClick={() => window.open('https://forms.gle/s6gP6Ph3VkGwHFQ18', '_blank', 'noopener,noreferrer')}
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
