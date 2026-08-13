"use client";

import React from "react";
import { motion } from "framer-motion";
import { Film, Video, Scissors, Volume2, MonitorPlay } from "lucide-react";

export function EditingWorkshopUI() {
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
        <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-fuchsia-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] bg-fuchsia-500/5 rounded-full blur-[120px]" />
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/5 text-fuchsia-400 text-xs uppercase tracking-widest font-semibold">
              <Film size={14} />
              <span>Video Workshop</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs uppercase tracking-widest font-semibold font-mono">
              <span>Registration Fee: 80</span>
            </div>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl uppercase tracking-widest leading-none mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-parchment to-parchment/60">Editing</span>
            <span className="block text-3xl md:text-5xl mt-4 text-fuchsia-400 tracking-[0.2em]">Workshop</span>
          </h1>
          <p className="text-xl text-parchment/80 max-w-2xl mx-auto font-light mt-6">
            Learn the fundamentals of video editing and transform raw footage into compelling stories.
          </p>
        </motion.div>

        {/* Overview */}
        <motion.div variants={item} className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-parchment/5 border border-parchment/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
            <h3 className="text-fuchsia-400 uppercase tracking-widest text-sm font-semibold mb-4">About the Workshop</h3>
            <p className="text-lg text-parchment/80 leading-relaxed font-light mb-6">
              In this comprehensive workshop, we will teach you the essential tools and techniques required for modern video editing. Whether you're looking to create content for social media, short films, or professional projects, you will learn how to bring your creative vision to life.
            </p>
            <p className="text-lg text-parchment/80 leading-relaxed font-light">
              We'll cover everything from navigating the interface of popular editing software to advanced techniques like color grading and audio mixing. Bring your laptops and get ready for a hands-on experience!
            </p>
          </div>
          <div className="bg-gradient-to-br from-fuchsia-500/10 to-ink border border-fuchsia-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-fuchsia-400 uppercase tracking-widest text-sm font-semibold mb-6">What You Will Learn</h3>
            <div className="space-y-4">
               <div className="flex items-center gap-4 bg-ink/50 p-4 rounded-xl border border-parchment/5">
                  <div className="text-fuchsia-400"><Scissors size={24} /></div>
                  <div>
                     <h4 className="font-semibold text-parchment">Cuts & Transitions</h4>
                     <p className="text-sm text-parchment/60">Master the basics of trimming and blending clips.</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 bg-ink/50 p-4 rounded-xl border border-parchment/5">
                  <div className="text-fuchsia-400"><Video size={24} /></div>
                  <div>
                     <h4 className="font-semibold text-parchment">Color Correction</h4>
                     <p className="text-sm text-parchment/60">Enhance your footage with professional color grading.</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 bg-ink/50 p-4 rounded-xl border border-parchment/5">
                  <div className="text-fuchsia-400"><Volume2 size={24} /></div>
                  <div>
                     <h4 className="font-semibold text-parchment">Audio Mixing</h4>
                     <p className="text-sm text-parchment/60">Balance dialogue, music, and sound effects perfectly.</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 bg-ink/50 p-4 rounded-xl border border-parchment/5">
                  <div className="text-fuchsia-400"><MonitorPlay size={24} /></div>
                  <div>
                     <h4 className="font-semibold text-parchment">Export Settings</h4>
                     <p className="text-sm text-parchment/60">Optimize your final video for various platforms.</p>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div variants={item} className="text-center pb-12">
          <button 
            onClick={() => window.open('https://forms.gle/7vHAeJqnN9wvYjmk7', '_blank', 'noopener,noreferrer')}
            className="group relative inline-flex items-center justify-center px-10 py-5 font-sans font-semibold tracking-[0.2em] uppercase text-sm bg-fuchsia-500 text-ink overflow-hidden rounded-full transition-transform hover:scale-105 active:scale-95"
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
