"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, Users, AlertOctagon, Gavel, Flame
} from "lucide-react";

export function SpeedNetworkingUI() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-marigold/30 bg-marigold/5 text-marigold text-xs uppercase tracking-widest font-semibold mb-6">
            <Sparkles size={14} />
            <span>Speed Networking</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-8xl uppercase tracking-widest leading-none mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-parchment to-parchment/60">Kalaiyugam 2.0</span>
            <span className="block text-3xl md:text-5xl mt-4 text-marigold tracking-[0.2em]">Speed Networking</span>
          </h1>
        </motion.div>

        {/* Overview & Format */}
        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-parchment/5 border border-parchment/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-marigold uppercase tracking-widest text-sm font-semibold mb-6 flex items-center gap-2">
                <Users size={18} /> Slot Selection & Batches
            </h3>
            <p className="text-lg text-parchment/80 leading-relaxed font-light mb-4">
              Numbers 1–25 will be drawn from a bowl. Participants with the same numbers will compete against each other.
            </p>
            <div className="p-4 bg-marigold/5 rounded-xl border border-marigold/20 mt-6">
               <p className="text-sm text-parchment/90 font-medium">
                 Each slot will have <strong className="text-marigold">3–5 minutes</strong> to network. Every round features a specific theme on which participants must speak.
               </p>
            </div>
          </div>
          
          <div className="bg-parchment/5 border border-parchment/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-marigold uppercase tracking-widest text-sm font-semibold mb-6 flex items-center gap-2">
                <Flame size={18} /> Themes (One Per Round)
            </h3>
            <div className="flex flex-wrap gap-3">
                {['Ambivalence', 'Nostalgia', 'Defiance', 'Proud Shame', 'Anticipation'].map(theme => (
                    <span key={theme} className="px-4 py-2 bg-parchment/10 rounded-full text-sm font-medium tracking-wide border border-parchment/10 hover:border-marigold/50 transition-colors">
                        {theme}
                    </span>
                ))}
            </div>
          </div>
        </motion.div>

        {/* Judging & Rules */}
        <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Judging Criteria */}
            <div className="lg:col-span-5 bg-gradient-to-br from-marigold/20 to-ink border border-marigold/30 rounded-3xl p-1 relative overflow-hidden h-full">
              <div className="bg-ink/90 backdrop-blur-xl rounded-[22px] p-8 md:p-10 relative z-10 h-full">
                <h3 className="text-xl font-display text-white mb-8 flex items-center gap-2">
                  <Gavel className="text-marigold" size={24} /> Judging Criteria
                </h3>
                <div className="space-y-4">
                    {['Theme Adherence', 'Creativity & Originality', 'Delivery & Confidence', 'Handoff Question'].map(criteria => (
                        <div key={criteria} className="flex justify-between items-center border-b border-parchment/10 pb-3">
                            <span className="text-sm text-parchment/80 uppercase tracking-widest">{criteria}</span>
                            <span className="text-marigold font-mono text-sm font-bold">25 pts</span>
                        </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Penalties and Disqualifications */}
            <div className="lg:col-span-7 space-y-8">
                <div className="bg-parchment/5 border border-parchment/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
                   <h3 className="text-xl font-display text-white mb-6 flex items-center gap-2">
                      <AlertOctagon className="text-kumkum" size={24} /> Penalties (Deductions Apply)
                   </h3>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-parchment/80 text-sm">
                      <li className="flex items-start gap-2"><span className="text-kumkum mt-0.5">•</span> Switched to a different emotion halfway</li>
                      <li className="flex items-start gap-2"><span className="text-kumkum mt-0.5">•</span> Asked a yes/no question</li>
                      <li className="flex items-start gap-2"><span className="text-kumkum mt-0.5">•</span> Asked "What about you?"</li>
                      <li className="flex items-start gap-2"><span className="text-kumkum mt-0.5">•</span> Interrupted an opponent</li>
                      <li className="flex items-start gap-2"><span className="text-kumkum mt-0.5">•</span> Went over the time limit</li>
                      <li className="flex items-start gap-2"><span className="text-kumkum mt-0.5">•</span> Does not maintain eye contact</li>
                      <li className="flex items-start gap-2"><span className="text-kumkum mt-0.5">•</span> Rushed through the intro</li>
                   </ul>
                </div>

                <div className="bg-kumkum/10 border border-kumkum/30 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
                   <h3 className="text-xl font-display text-white mb-4 flex items-center gap-2">
                      <ShieldAlert className="text-kumkum" size={24} /> Immediate Disqualification
                   </h3>
                   <ul className="space-y-3 text-parchment/90 text-sm font-medium">
                      <li className="flex items-center gap-3">
                         <div className="w-2 h-2 bg-kumkum rounded-full" />
                         Personal attacks or rudeness
                      </li>
                      <li className="flex items-center gap-3">
                         <div className="w-2 h-2 bg-kumkum rounded-full" />
                         Introducing your Name, Major, or Age (This is an anonymous emotion-driven networking event)
                      </li>
                   </ul>
                </div>
            </div>

        </motion.div>

        {/* Final CTA */}
        <motion.div variants={item} className="text-center pb-12">
          <button 
            onClick={() => window.open('https://forms.gle/sHoKHoJf9nsr6oL27', '_blank', 'noopener,noreferrer')}
            className="group relative inline-flex items-center justify-center px-10 py-5 font-sans font-semibold tracking-[0.2em] uppercase text-sm bg-marigold text-ink overflow-hidden rounded-full transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Register for Speed Networking
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </motion.div>

      </motion.div>
    </div>
  );
}
