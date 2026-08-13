"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mic, Headphones, Radio, Volume2, Globe } from "lucide-react";

export function PodcastWorkshopUI() {
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
        <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-marigold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] bg-marigold/5 rounded-full blur-[120px]" />
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
              <Mic size={14} />
              <span>Audio Workshop</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-marigold/30 bg-marigold/5 text-marigold text-xs uppercase tracking-widest font-semibold font-mono">
              <span>Registration Fee: 80</span>
            </div>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl uppercase tracking-widest leading-none mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-parchment to-parchment/60">Podcast</span>
            <span className="block text-3xl md:text-5xl mt-4 text-marigold tracking-[0.2em]">Workshop</span>
          </h1>
          <p className="text-xl text-parchment/80 max-w-2xl mx-auto font-light mt-6">
            Learn the art of storytelling, audio production, and how to launch your very own podcast.
          </p>
        </motion.div>

        {/* Overview */}
        <motion.div variants={item} className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-parchment/5 border border-parchment/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
            <h3 className="text-marigold uppercase tracking-widest text-sm font-semibold mb-4">About the Workshop</h3>
            <p className="text-base md:text-lg text-parchment/80 leading-relaxed font-light mb-6">
              Have you ever wanted to start a podcast but didn't know where to begin? This hands-on workshop is designed to take you from a raw idea to a ready-to-publish audio experience. 
            </p>
            <p className="text-base md:text-lg text-parchment/80 leading-relaxed font-light">
              We'll dive into the essentials of captivating storytelling, understanding equipment basics, conducting engaging interviews, and the fundamental steps to edit and distribute your podcast to a global audience.
            </p>
          </div>
          <div className="bg-gradient-to-br from-marigold/10 to-ink border border-marigold/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <h3 className="text-marigold uppercase tracking-widest text-sm font-semibold mb-6">What We'll Cover</h3>
            <div className="space-y-4">
               <div className="flex items-center gap-4 bg-ink/50 p-4 rounded-xl border border-parchment/5">
                  <div className="text-marigold"><Radio size={24} /></div>
                  <div>
                     <h4 className="font-semibold text-parchment">Concept & Planning</h4>
                     <p className="text-sm text-parchment/60">Structuring episodes and finding your unique voice.</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 bg-ink/50 p-4 rounded-xl border border-parchment/5">
                  <div className="text-marigold"><Headphones size={24} /></div>
                  <div>
                     <h4 className="font-semibold text-parchment">Recording Basics</h4>
                     <p className="text-sm text-parchment/60">Choosing the right microphones and capturing clean audio.</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 bg-ink/50 p-4 rounded-xl border border-parchment/5">
                  <div className="text-marigold"><Volume2 size={24} /></div>
                  <div>
                     <h4 className="font-semibold text-parchment">Editing & Production</h4>
                     <p className="text-sm text-parchment/60">Cleaning up tracks and adding intro/outro music.</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 bg-ink/50 p-4 rounded-xl border border-parchment/5">
                  <div className="text-marigold"><Globe size={24} /></div>
                  <div>
                     <h4 className="font-semibold text-parchment">Launch & Distribution</h4>
                     <p className="text-sm text-parchment/60">Getting your show on Spotify, Apple, and beyond.</p>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div variants={item} className="text-center pb-12">
          <button 
            onClick={() => window.open('https://forms.gle/Qcm13nVnvZg5RT1Q6', '_blank', 'noopener,noreferrer')}
            className="group relative inline-flex items-center justify-center px-10 py-5 font-sans font-semibold tracking-[0.2em] uppercase text-sm bg-marigold text-ink overflow-hidden rounded-full transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Register Now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </motion.div>

      </motion.div>
    </div>
  );
}
