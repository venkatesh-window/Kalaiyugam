"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, Coins, Gavel, FileText, 
  Sparkles, ChevronRight, Scale, ShieldAlert, BookOpen
} from "lucide-react";

export function EmotionPremierLeagueUI() {
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

  const judgingCriteria = [
    { label: "Emotional Depth & Expression", marks: 30 },
    { label: "Bidding", marks: 20 },
    { label: "Storytelling & Presentation", marks: 20 },
    { label: "Creativity & Originality", marks: 15 },
    { label: "Team Coordination", marks: 15 },
  ];

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
            <span>Value Concept</span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl uppercase tracking-widest leading-none mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-parchment to-parchment/60">Emotion Premier</span>
            <span className="block text-3xl md:text-5xl mt-4 text-marigold tracking-[0.2em]">League (EPL)</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-parchment/70 max-w-2xl mx-auto italic font-display">
            "Bid. Feel. Create. Win."
          </p>
          <p className="mt-4 text-parchment/70 max-w-2xl mx-auto leading-relaxed">
            A team-based competitive storytelling event where teams strategically bid for Emotion Cards using virtual coins, then creatively combine acquired emotions into one seamless narrative.
          </p>
        </motion.div>

        {/* 2. Format & Rules */}
        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          
          <div className="bg-parchment/5 border border-parchment/10 rounded-2xl p-8 backdrop-blur-sm relative group hover:border-marigold/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-marigold/5 rounded-full blur-[40px] group-hover:bg-marigold/10 transition-colors" />
            <h3 className="text-marigold uppercase tracking-widest text-sm font-semibold mb-6 flex items-center gap-2 relative z-10">
              <Gavel size={18} /> The Auction Phase
            </h3>
            
            <ul className="space-y-4 relative z-10">
              <li className="flex items-start gap-3 text-parchment/80 text-sm leading-relaxed">
                <Coins className="text-marigold shrink-0 mt-1" size={16} />
                <span>Each team receives <strong>100 virtual coins</strong>.</span>
              </li>
              <li className="flex items-start gap-3 text-parchment/80 text-sm leading-relaxed">
                <div className="w-1.5 h-1.5 rounded-full bg-marigold/50 mt-1.5 shrink-0" />
                <span>Emotion Cards are auctioned sequentially. The highest valid bidder acquires the respective Emotion Card.</span>
              </li>
              <li className="flex items-start gap-3 text-parchment/80 text-sm leading-relaxed">
                <ShieldAlert className="text-red-400 shrink-0 mt-1" size={16} />
                <span>A team cannot bid beyond its available coins. Once a bid is accepted, it cannot be withdrawn.</span>
              </li>
            </ul>
          </div>

          <div className="bg-parchment/5 border border-parchment/10 rounded-2xl p-8 backdrop-blur-sm relative group hover:border-marigold/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-marigold/5 rounded-full blur-[40px] group-hover:bg-marigold/10 transition-colors" />
            <h3 className="text-marigold uppercase tracking-widest text-sm font-semibold mb-6 flex items-center gap-2 relative z-10">
              <BookOpen size={18} /> The Narrative Phase
            </h3>
            
            <ul className="space-y-4 relative z-10">
              <li className="flex items-start gap-3 text-parchment/80 text-sm leading-relaxed">
                <FileText className="text-marigold shrink-0 mt-1" size={16} />
                <span>Each team must create and present <strong>one narrative</strong> that seamlessly integrates all their acquired emotions.</span>
              </li>
              <li className="flex items-start gap-3 text-parchment/80 text-sm leading-relaxed">
                <div className="w-1.5 h-1.5 rounded-full bg-marigold/50 mt-1.5 shrink-0" />
                <span>The narrative must naturally convey every assigned emotion rather than presenting them separately.</span>
              </li>
              <li className="flex items-start gap-3 text-parchment/80 text-sm leading-relaxed">
                <Users className="text-marigold shrink-0 mt-1" size={16} />
                <span>Teams get preparation time. One representative presents the final narration.</span>
              </li>
            </ul>
          </div>

        </motion.div>

        {/* 3. Judging Criteria */}
        <motion.div variants={item} className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-marigold/30 flex-grow" />
            <h2 className="font-display text-3xl uppercase tracking-widest text-marigold">Judging Criteria</h2>
            <div className="h-px bg-marigold/30 flex-grow" />
          </div>

          <div className="bg-parchment/5 border border-parchment/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-display text-2xl text-white">100 Marks Total</h3>
              <Scale className="text-marigold" size={32} />
            </div>

            <div className="space-y-4">
              {judgingCriteria.map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between gap-2 p-4 bg-ink/50 border border-parchment/10 rounded-xl">
                  <span className="text-parchment/90 font-medium">{item.label}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-48 h-1.5 bg-parchment/10 rounded-full hidden md:block overflow-hidden">
                      <div 
                        className="h-full bg-marigold rounded-full" 
                        style={{ width: `${(item.marks / 30) * 100}%` }}
                      />
                    </div>
                    <span className="text-marigold font-display font-bold min-w-[60px] text-right">
                      {item.marks} pts
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div variants={item} className="text-center pb-12">
          <button className="group relative inline-flex items-center justify-center px-10 py-5 font-sans font-semibold tracking-[0.2em] uppercase text-sm bg-marigold text-ink overflow-hidden rounded-full transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              Register for the EPL
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </motion.div>

      </motion.div>
    </div>
  );
}
