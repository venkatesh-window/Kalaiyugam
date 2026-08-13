"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, ChevronRight, PenTool, Drama
} from "lucide-react";

export function DegreesOfEmotionUI() {
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
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-kumkum/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-kumkum/5 rounded-full blur-[120px]" />
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-kumkum/30 bg-kumkum/5 text-kumkum text-xs uppercase tracking-widest font-semibold">
              <Sparkles size={14} />
              <span>Writing Category</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs uppercase tracking-widest font-semibold font-mono">
              <span>Entry Fee: ₹99</span>
            </div>
          </div>
          
          <h1 className="font-display text-5xl md:text-8xl uppercase tracking-widest leading-none mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-parchment to-parchment/60">Degrees of</span>
            <span className="block text-3xl md:text-5xl mt-4 text-kumkum tracking-[0.2em]">Emotion</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-parchment/70 max-w-2xl mx-auto italic font-display">
            "Can you make us feel without ever saying the word?"
          </p>
        </motion.div>

        {/* Overview */}
        <motion.div variants={item} className="mb-24">
          <div className="bg-parchment/5 border border-parchment/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
            <h3 className="text-kumkum uppercase tracking-widest text-sm font-semibold mb-4">Overview</h3>
            <p className="text-lg text-parchment/80 leading-relaxed font-light mb-6">
              Join this fun challenge and test your dramatic range.
            </p>
          </div>
        </motion.div>

        {/* Format */}
        <motion.div variants={item} className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-kumkum/30 flex-grow" />
            <h2 className="font-display text-3xl uppercase tracking-widest text-kumkum">Format</h2>
            <div className="h-px bg-kumkum/30 flex-grow" />
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-parchment/10 -translate-x-1/2 hidden md:block" />

            {/* Round 1 */}
            <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 mb-16 items-start">
              <div className="md:w-1/2 md:text-right pt-2 relative z-10">
                <div className="inline-block px-3 py-1 bg-parchment/10 rounded text-xs uppercase tracking-widest mb-3">Round 1</div>
                <h3 className="font-display text-4xl mb-2 text-white">The Unspoken Emotion</h3>
                <p className="text-parchment/70 leading-relaxed font-light mt-4">
                  Participants receive a mystery emotion. They have 60 seconds to craft and perform a story built around it.
                </p>
              </div>
              
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-ink border-2 border-kumkum rounded-full -translate-x-1/2 mt-4 md:mt-6 z-20 hidden md:block" />
              
              <div className="md:w-1/2 bg-parchment/5 border border-parchment/10 rounded-2xl p-6 backdrop-blur-sm relative z-10">
                <div className="p-4 bg-kumkum/5 rounded-xl border border-kumkum/20">
                  <PenTool size={24} className="text-kumkum mb-3" />
                  <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-widest">The Catch</h4>
                  <p className="text-sm text-parchment/80 leading-relaxed">
                    You are NOT allowed to name the emotion directly in your story.
                  </p>
                </div>
              </div>
            </div>

            {/* Round 2 */}
            <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 items-start">
              <div className="md:w-1/2 md:order-2 pt-2 relative z-10">
                <div className="inline-block px-3 py-1 bg-parchment/10 rounded text-xs uppercase tracking-widest mb-3">Round 2</div>
                <h3 className="font-display text-4xl mb-2 text-white">Degrees of Emotion</h3>
                <p className="text-parchment/70 leading-relaxed font-light mt-4">
                  Every participant is assigned an intensity level from 1 to 5 (Level 1 = subtle/mild, Level 5 = extreme/overwhelming).
                </p>
              </div>

              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-ink border-2 border-kumkum rounded-full -translate-x-1/2 mt-4 md:mt-6 z-20 hidden md:block" />
              
              <div className="md:w-1/2 md:order-1 bg-parchment/5 border border-parchment/10 rounded-2xl p-6 backdrop-blur-sm relative z-10 md:text-right">
                <div className="p-4 bg-kumkum/5 rounded-xl border border-kumkum/20">
                  <Drama size={24} className="text-kumkum mb-3 md:ml-auto" />
                  <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-widest">The Goal</h4>
                  <p className="text-sm text-parchment/80 leading-relaxed">
                    Perform or write a quick scene that accurately hits your exact level on the emotional spectrum (e.g. subtle grief vs. full-blown hysteria).
                  </p>
                </div>
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
                <span className="text-parchment/90 font-medium">Mohana Varsha</span>
                <span className="text-marigold/80 font-mono text-sm">99527 41068</span>
              </div>
              <div className="flex items-center justify-between px-4 py-2 bg-parchment/5 rounded-lg">
                <span className="text-parchment/90 font-medium">Taarunya</span>
                <span className="text-marigold/80 font-mono text-sm">94871 08550</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div variants={item} className="text-center pb-12">
          <button 
            onClick={() => window.open('https://forms.gle/6AH8BUR6yKbduH78A', '_blank', 'noopener,noreferrer')}
            className="group relative inline-flex items-center justify-center px-10 py-5 font-sans font-semibold tracking-[0.2em] uppercase text-sm bg-kumkum text-parchment overflow-hidden rounded-full transition-transform hover:scale-105 active:scale-95"
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
