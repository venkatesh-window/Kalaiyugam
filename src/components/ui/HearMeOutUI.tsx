"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Headphones, Palette, Layers, Monitor, 
  Sparkles, ChevronRight
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
      
      {/* Abstract Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-parchment/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-parchment/5 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* 1. Event Hero */}
        <motion.div variants={item} className="text-center mb-20 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-parchment/30 bg-parchment/5 text-parchment text-xs uppercase tracking-widest font-semibold mb-6">
            <Sparkles size={14} />
            <span>Vulnerability Concept</span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl uppercase tracking-widest leading-none mb-6 text-parchment">
            Hear Me <span className="text-parchment/60">Out</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-parchment/70 max-w-2xl mx-auto italic font-display">
            "Are you a designer? Is a creative slump getting to you?"
          </p>
          <p className="mt-4 text-parchment/50 font-sans tracking-wide uppercase text-sm">
            Get over your art block by participating in this fun competition which will test your creativity and ingenuity.
          </p>
        </motion.div>

        {/* 2. Challenge Phases */}
        <motion.div variants={item} className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-parchment/30 flex-grow" />
            <h2 className="font-display text-3xl uppercase tracking-widest text-parchment">The Process</h2>
            <div className="h-px bg-parchment/30 flex-grow" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step 1 */}
            <div className="bg-parchment/5 border border-parchment/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group hover:border-parchment/30 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-parchment/10 rounded-2xl flex items-center justify-center mb-6 text-parchment">
                <Headphones size={24} />
              </div>
              <h3 className="text-xs uppercase tracking-widest text-parchment/50 mb-2 font-semibold">Phase 01</h3>
              <h4 className="font-display text-2xl text-white mb-4">Listen to the Audio Prompt</h4>
              <p className="text-parchment/70 leading-relaxed font-light text-sm">
                Hear the audio clip. Allow the sounds, rhythms, and textures to spark your initial inspiration.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-parchment/5 border border-parchment/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group hover:border-parchment/30 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-parchment/10 rounded-2xl flex items-center justify-center mb-6 text-parchment">
                <Palette size={24} />
              </div>
              <h3 className="text-xs uppercase tracking-widest text-parchment/50 mb-2 font-semibold">Phase 02</h3>
              <h4 className="font-display text-2xl text-white mb-4">Translate Sound into Design</h4>
              <p className="text-parchment/70 leading-relaxed font-light text-sm">
                Let the audio guide your initial visual ideas. Begin drafting your design based purely on the auditory experience.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-parchment/5 border border-parchment/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group hover:border-parchment/30 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-parchment/10 rounded-2xl flex items-center justify-center mb-6 text-parchment">
                <Layers size={24} />
              </div>
              <h3 className="text-xs uppercase tracking-widest text-parchment/50 mb-2 font-semibold">Phase 03</h3>
              <h4 className="font-display text-2xl text-white mb-4">Adapt to Evolving Constraints</h4>
              <p className="text-parchment/70 leading-relaxed font-light text-sm">
                New limits are introduced over time. Work under constraints and expand your creativity beyond your comfort zone.
              </p>
            </div>

          </div>
        </motion.div>

        {/* 3. Requirements */}
        <motion.div variants={item} className="mb-24">
          <div className="bg-parchment/5 border border-parchment/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-3xl text-white mb-2">Requirements</h3>
              <p className="text-parchment/70">What you need to bring to the event.</p>
            </div>
            
            <div className="flex items-center gap-4 bg-ink/50 border border-parchment/20 rounded-2xl px-8 py-6">
              <Monitor className="text-parchment" size={32} />
              <div>
                <p className="text-xs uppercase tracking-widest text-parchment/50 mb-1">Device</p>
                <p className="text-2xl font-display font-semibold text-white">Laptop</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div variants={item} className="text-center pb-12">
          <button className="group relative inline-flex items-center justify-center px-10 py-5 font-sans font-semibold tracking-[0.2em] uppercase text-sm bg-parchment text-ink overflow-hidden rounded-full transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              Register for the Challenge
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </motion.div>

      </motion.div>
    </div>
  );
}
