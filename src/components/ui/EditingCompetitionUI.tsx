"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, ShieldAlert
} from "lucide-react";

export function EditingCompetitionUI() {
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
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-indigo/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo/5 rounded-full blur-[120px]" />
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo/30 bg-indigo/5 text-indigo text-xs uppercase tracking-widest font-semibold">
              <Sparkles size={14} />
              <span>Editing Category</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs uppercase tracking-widest font-semibold font-mono">
              <span>Entry Fee: ₹99</span>
            </div>
          </div>
          
          <h1 className="font-display text-5xl md:text-8xl uppercase tracking-widest leading-none mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-parchment to-parchment/60">Emotional</span>
            <span className="block text-3xl md:text-5xl mt-4 text-indigo tracking-[0.2em]">Damage</span>
          </h1>
        </motion.div>

        {/* Overview */}
        <motion.div variants={item} className="mb-24">
          <div className="bg-parchment/5 border border-parchment/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
            <h3 className="text-indigo uppercase tracking-widest text-sm font-semibold mb-4">The Challenge</h3>
            <p className="text-lg text-parchment/80 leading-relaxed font-light mb-6">
              Participants will be provided with a 45–60 second video clip and must creatively edit it to change the emotion or mood conveyed by the original footage.
            </p>
          </div>
        </motion.div>

        {/* Rules */}
        <motion.div variants={item} className="mb-24">
          <div className="bg-gradient-to-br from-indigo/20 to-ink border border-indigo/30 rounded-3xl p-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo/30 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="bg-ink/80 backdrop-blur-xl rounded-[22px] p-8 md:p-12 relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <ShieldAlert className="text-indigo" size={32} />
                <h2 className="font-display text-3xl md:text-4xl uppercase tracking-widest">Rules & Requirements</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-indigo/10 text-indigo flex items-center justify-center shrink-0 font-bold">1</div>
                    <p className="text-parchment/80 text-sm leading-relaxed mt-1">Participants must bring their own laptops for the competition.</p>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-indigo/10 text-indigo flex items-center justify-center shrink-0 font-bold">2</div>
                    <p className="text-parchment/80 text-sm leading-relaxed mt-1">Use of AI tools is strictly prohibited.</p>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-indigo/10 text-indigo flex items-center justify-center shrink-0 font-bold">3</div>
                    <p className="text-parchment/80 text-sm leading-relaxed mt-1">Participants may use any video editing software of their choice.</p>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-indigo/10 text-indigo flex items-center justify-center shrink-0 font-bold">4</div>
                    <p className="text-parchment/80 text-sm leading-relaxed mt-1">Profanity, offensive language, and inappropriate content must be avoided in the final edit.</p>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-indigo/10 text-indigo flex items-center justify-center shrink-0 font-bold">5</div>
                    <p className="text-parchment/80 text-sm leading-relaxed mt-1">Participants must complete and submit their edit within the allotted competition time. Late submissions will not be accepted.</p>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-indigo/10 text-indigo flex items-center justify-center shrink-0 font-bold">6</div>
                    <p className="text-parchment/80 text-sm leading-relaxed mt-1">All submitted edits must be original work created by the participant. Plagiarism, copying, or using another participant's work will result in disqualification.</p>
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
                <span className="text-parchment/90 font-medium">Aseem</span>
                <span className="text-marigold/80 font-mono text-sm">75501 06477</span>
              </div>
              <div className="flex items-center justify-between px-4 py-2 bg-parchment/5 rounded-lg">
                <span className="text-parchment/90 font-medium">Jaasir</span>
                <span className="text-marigold/80 font-mono text-sm">90436 33539</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div variants={item} className="text-center pb-12">
          <button 
            onClick={() => window.open('https://forms.gle/eetE8zCPHBdj5LzU9', '_blank', 'noopener,noreferrer')}
            className="group relative inline-flex items-center justify-center px-10 py-5 font-sans font-semibold tracking-[0.2em] uppercase text-sm bg-indigo text-parchment overflow-hidden rounded-full transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Register for the Competition
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </motion.div>

      </motion.div>
    </div>
  );
}
