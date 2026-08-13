"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, ShieldAlert, Gavel, Users, Trophy
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
            <span>Team-based Storytelling</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-8xl uppercase tracking-widest leading-none mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-parchment to-parchment/60">Emotion Premier</span>
            <span className="block text-3xl md:text-5xl mt-4 text-marigold tracking-[0.2em]">League (EPL)</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-parchment/70 max-w-2xl mx-auto italic font-display">
            "Bid. Feel. Create. Win."
          </p>
        </motion.div>

        {/* Overview */}
        <motion.div variants={item} className="mb-24">
          <div className="bg-parchment/5 border border-parchment/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
            <h3 className="text-marigold uppercase tracking-widest text-sm font-semibold mb-4">The Challenge</h3>
            <p className="text-lg text-parchment/80 leading-relaxed font-light mb-6">
              Emotion Auction is a team-based competitive storytelling event where teams strategically bid for Emotion Cards using virtual coins. Once all cards are auctioned, each team must creatively combine its acquired emotions into one seamless and compelling narrative.
            </p>
          </div>
        </motion.div>

        {/* Rules & Format Grid */}
        <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          
          {/* Left Column: Format & Bidding */}
          <div className="space-y-8">
            <div className="bg-parchment/5 border border-parchment/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <h3 className="text-xl font-display text-white mb-6 flex items-center gap-2">
                <Users className="text-marigold" size={24} /> Format & Bidding
              </h3>
              <ul className="space-y-3 text-parchment/80 text-sm leading-relaxed">
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-marigold mt-1.5 shrink-0" /> Max registrations: 50. Teams of 5 members.</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-marigold mt-1.5 shrink-0" /> Each team receives 100 virtual coins at the start.</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-marigold mt-1.5 shrink-0" /> Emotion Cards (each with a Base Value) will be auctioned sequentially.</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-marigold mt-1.5 shrink-0" /> The highest valid bidder acquires the Emotion Card.</li>
              </ul>
            </div>

            <div className="bg-parchment/5 border border-parchment/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <h3 className="text-xl font-display text-white mb-6 flex items-center gap-2">
                <Trophy className="text-marigold" size={24} /> Narrative Creation
              </h3>
              <ul className="space-y-3 text-parchment/80 text-sm leading-relaxed">
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-marigold mt-1.5 shrink-0" /> Teams must create one narrative integrating all acquired emotions seamlessly.</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-marigold mt-1.5 shrink-0" /> Emotions must be naturally conveyed, not just presented separately.</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-marigold mt-1.5 shrink-0" /> Preparation time will be given. One representative presents the final narration.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Judging & Important Rules */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-marigold/20 to-ink border border-marigold/30 rounded-2xl p-1 relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-marigold/20 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="bg-ink/90 backdrop-blur-xl rounded-[14px] p-6 md:p-8 relative z-10 h-full">
                <h3 className="text-xl font-display text-white mb-6 flex items-center gap-2">
                  <Gavel className="text-marigold" size={24} /> Judging (100 Marks)
                </h3>
                <div className="space-y-4 font-mono text-xs text-parchment/80 mb-10">
                  <div className="flex justify-between items-center bg-marigold/10 px-4 py-2 rounded">
                    <span>Emotional Depth & Expression</span> <span className="text-marigold font-bold">30</span>
                  </div>
                  <div className="flex justify-between items-center bg-marigold/10 px-4 py-2 rounded">
                    <span>Bidding Strategy</span> <span className="text-marigold font-bold">20</span>
                  </div>
                  <div className="flex justify-between items-center bg-marigold/10 px-4 py-2 rounded">
                    <span>Storytelling & Presentation</span> <span className="text-marigold font-bold">20</span>
                  </div>
                  <div className="flex justify-between items-center bg-marigold/10 px-4 py-2 rounded">
                    <span>Creativity & Originality</span> <span className="text-marigold font-bold">15</span>
                  </div>
                  <div className="flex justify-between items-center bg-marigold/10 px-4 py-2 rounded">
                    <span>Team Coordination</span> <span className="text-marigold font-bold">15</span>
                  </div>
                </div>

                <h3 className="text-xl font-display text-white mb-4 flex items-center gap-2">
                  <ShieldAlert className="text-marigold" size={24} /> Important Rules
                </h3>
                <ul className="space-y-2 text-parchment/70 text-xs leading-relaxed">
                  <li>• Cannot bid beyond available coins or max bid.</li>
                  <li>• Once accepted, bids cannot be withdrawn.</li>
                  <li>• All acquired emotions must be in the narrative.</li>
                  <li>• Adhere strictly to the announced time limits.</li>
                  <li>• No inappropriate, offensive, or discriminatory content.</li>
                  <li>• Judge's decision is final and binding.</li>
                  <li>• Organizers may modify rounds and structure based on registrations.</li>
                </ul>
              </div>
            </div>
          </div>

        </motion.div>

        {/* Final CTA */}
        <motion.div variants={item} className="text-center pb-12">
          <button 
            onClick={() => window.open('https://forms.gle/TAKCeniUyERDxYRh6', '_blank', 'noopener,noreferrer')}
            className="group relative inline-flex items-center justify-center px-10 py-5 font-sans font-semibold tracking-[0.2em] uppercase text-sm bg-marigold text-ink overflow-hidden rounded-full transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Register for EPL
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </motion.div>

      </motion.div>
    </div>
  );
}
