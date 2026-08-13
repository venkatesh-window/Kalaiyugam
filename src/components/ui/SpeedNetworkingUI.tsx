"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, Timer, Mic, Trophy, 
  Sparkles, ChevronRight, Swords
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-marigold/30 bg-marigold/5 text-marigold text-xs uppercase tracking-widest font-semibold mb-6">
            <Sparkles size={14} />
            <span>Belonging Concept</span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl uppercase tracking-widest leading-none mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-parchment to-parchment/60">Speed</span>
            <span className="block text-3xl md:text-5xl mt-4 text-marigold tracking-[0.2em]">Networking</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-parchment/70 max-w-2xl mx-auto italic font-display">
            "Are you new to the art of networking?"
          </p>
          <p className="mt-4 text-parchment/70 max-w-2xl mx-auto leading-relaxed">
            Step into a fun, fast-paced environment and build your confidence in this speed-networking competition. Bring your best energy, share your stories, and out-talk the competition. The best speakers from each round survive and advance to the next stage!
          </p>
        </motion.div>

        {/* 2. Challenge Overview */}
        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
          <div className="md:col-span-8 bg-parchment/5 border border-parchment/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm relative overflow-hidden">
            <Swords className="absolute top-4 right-4 text-parchment/5" size={120} />
            
            <h3 className="text-marigold uppercase tracking-widest text-sm font-semibold mb-6">The Challenge format</h3>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="text-5xl font-display text-white font-bold">60</div>
              <div className="text-sm text-parchment/70 uppercase tracking-widest leading-tight">
                Players<br />Total
              </div>
              <div className="h-8 w-px bg-parchment/20 mx-2" />
              <div className="text-5xl font-display text-marigold font-bold">2</div>
              <div className="text-sm text-parchment/70 uppercase tracking-widest leading-tight">
                Themed<br />Groups
              </div>
            </div>

            <p className="text-lg text-parchment/80 leading-relaxed font-light">
              60 players are split into 2 themed groups (30 vs 30) and paired up 1-on-1 for fast-paced conversation rounds.
            </p>
          </div>
          
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="bg-parchment/5 border border-parchment/10 rounded-2xl p-6 backdrop-blur-sm flex items-start gap-4 hover:bg-parchment/10 transition-colors h-full">
              <div className="p-3 bg-marigold/10 rounded-lg text-marigold shrink-0">
                <Trophy size={24} />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <p className="text-xs uppercase tracking-widest text-parchment/50 mb-2">Grand Finale</p>
                <p className="text-xl font-display text-white font-semibold leading-tight">
                  Top-10 Group Discussion
                </p>
                <p className="text-sm text-parchment/60 mt-2">
                  To determine the ultimate winners!
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. Rules of the Matchup */}
        <motion.div variants={item} className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-marigold/30 flex-grow" />
            <h2 className="font-display text-3xl uppercase tracking-widest text-marigold">In Each Matchup</h2>
            <div className="h-px bg-marigold/30 flex-grow" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-parchment/5 border border-parchment/10 rounded-3xl p-8 backdrop-blur-sm relative group hover:border-marigold/30 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-marigold/10 rounded-2xl flex items-center justify-center mb-6 text-marigold">
                <Timer size={24} />
              </div>
              <h4 className="font-display text-xl text-white mb-3">Topic & Time</h4>
              <p className="text-parchment/70 leading-relaxed font-light text-sm">
                You'll receive a unique topic and a short time on the clock to talk, connect, and impress your counterpart.
              </p>
            </div>

            <div className="bg-parchment/5 border border-parchment/10 rounded-3xl p-8 backdrop-blur-sm relative group hover:border-marigold/30 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-marigold/10 rounded-2xl flex items-center justify-center mb-6 text-marigold">
                <Users size={24} />
              </div>
              <h4 className="font-display text-xl text-white mb-3">One Advances</h4>
              <p className="text-parchment/70 leading-relaxed font-light text-sm">
                In this elimination-style bracket, only <strong>1 participant</strong> from each pair advances after every round.
              </p>
            </div>

            <div className="bg-parchment/5 border border-parchment/10 rounded-3xl p-8 backdrop-blur-sm relative group hover:border-marigold/30 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-marigold/10 rounded-2xl flex items-center justify-center mb-6 text-marigold">
                <Mic size={24} />
              </div>
              <h4 className="font-display text-xl text-white mb-3">Rapid Elimination</h4>
              <p className="text-parchment/70 leading-relaxed font-light text-sm">
                Survivors move forward through fast-paced rounds, requiring quick thinking and even faster speaking.
              </p>
            </div>

          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div variants={item} className="text-center pb-12">
          <button className="group relative inline-flex items-center justify-center px-10 py-5 font-sans font-semibold tracking-[0.2em] uppercase text-sm bg-marigold text-ink overflow-hidden rounded-full transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              Register for the Challenge
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </motion.div>

      </motion.div>
    </div>
  );
}
