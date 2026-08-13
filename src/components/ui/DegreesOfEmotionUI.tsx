"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Drama, Mic, MessageSquare, Flame, 
  Sparkles, ChevronRight, Activity
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
      
      {/* Abstract Background Elements */}
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
        {/* 1. Event Hero */}
        <motion.div variants={item} className="text-center mb-20 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-kumkum/30 bg-kumkum/5 text-kumkum text-xs uppercase tracking-widest font-semibold mb-6">
            <Sparkles size={14} />
            <span>Intensity Concept</span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl uppercase tracking-widest leading-none mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-parchment to-parchment/60">Degrees of</span>
            <span className="block text-3xl md:text-5xl mt-4 text-kumkum tracking-[0.2em]">Emotion</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-parchment/70 max-w-2xl mx-auto italic font-display">
            "Can you make us feel without ever saying the word?"
          </p>
          <p className="mt-4 text-parchment/50 font-sans tracking-wide uppercase text-sm">
            Join this fun challenge and test your dramatic range.
          </p>
        </motion.div>

        {/* Challenge Overview */}
        <motion.div variants={item} className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-kumkum/30 flex-grow" />
            <h2 className="font-display text-3xl uppercase tracking-widest text-kumkum">The Challenge</h2>
            <div className="h-px bg-kumkum/30 flex-grow" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Round 1 */}
            <div className="bg-parchment/5 border border-parchment/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm relative overflow-hidden group hover:border-kumkum/30 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-kumkum/5 rounded-full blur-[40px] group-hover:bg-kumkum/10 transition-colors" />
              
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-kumkum/10 text-kumkum text-xs uppercase tracking-widest font-semibold">
                  Round 1
                </div>
                <MessageSquare className="text-kumkum/50" size={24} />
              </div>

              <h3 className="font-display text-3xl text-white mb-4 relative z-10">The Unspoken Emotion</h3>
              <p className="text-parchment/70 leading-relaxed font-light mb-8 relative z-10">
                You receive a mystery emotion. You have <strong>60 seconds</strong> to craft and perform a story around it.
              </p>

              <div className="bg-kumkum/10 border border-kumkum/20 rounded-xl p-5 relative z-10 flex items-start gap-4">
                <Flame className="text-kumkum shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-kumkum mb-1 font-semibold">The Catch</h4>
                  <p className="text-sm text-parchment/90">
                    You are <strong>NOT</strong> allowed to name the emotion.
                  </p>
                </div>
              </div>
            </div>

            {/* Round 2 */}
            <div className="bg-parchment/5 border border-parchment/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm relative overflow-hidden group hover:border-kumkum/30 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-kumkum/5 rounded-full blur-[40px] group-hover:bg-kumkum/10 transition-colors" />
              
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-kumkum/10 text-kumkum text-xs uppercase tracking-widest font-semibold">
                  Round 2
                </div>
                <Activity className="text-kumkum/50" size={24} />
              </div>

              <h3 className="font-display text-3xl text-white mb-4 relative z-10">Degrees of Emotion</h3>
              <p className="text-parchment/70 leading-relaxed font-light mb-8 relative z-10">
                Dial the intensity up or down. Every participant gets an assigned intensity level from <strong>1 to 5</strong> (Level 1 = subtle/mild; Level 5 = extreme/overwhelming).
              </p>

              <div className="bg-kumkum/10 border border-kumkum/20 rounded-xl p-5 relative z-10 flex items-start gap-4">
                <Drama className="text-kumkum shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-kumkum mb-1 font-semibold">The Goal</h4>
                  <p className="text-sm text-parchment/90">
                    Perform or write a quick scene that accurately hits your exact level on the emotional spectrum. Can you pull off subtle grief just as well as full-blown hysteria?
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div variants={item} className="text-center pb-12">
          <button className="group relative inline-flex items-center justify-center px-10 py-5 font-sans font-semibold tracking-[0.2em] uppercase text-sm bg-kumkum text-ink overflow-hidden rounded-full transition-transform hover:scale-105 active:scale-95">
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
