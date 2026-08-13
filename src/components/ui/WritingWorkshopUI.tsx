"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Clock, PenTool } from "lucide-react";

export function WritingWorkshopUI() {
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
        <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-marigold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[30vw] h-[30vw] bg-marigold/5 rounded-full blur-[120px]" />
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
              <BookOpen size={14} />
              <span>Creative Writing</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-marigold/30 bg-marigold/5 text-marigold text-xs uppercase tracking-widest font-semibold font-mono">
              <span>Registration Fee: 80</span>
            </div>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl uppercase tracking-widest leading-none mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-parchment to-parchment/60">Writing</span>
            <span className="block text-3xl md:text-5xl mt-4 text-marigold tracking-[0.2em]">Workshop</span>
          </h1>
          <p className="text-xl text-parchment/80 max-w-2xl mx-auto italic mt-6">
            "What would you do if you suddenly became the hero of a story you already know?"
          </p>
        </motion.div>

        {/* Overview */}
        <motion.div variants={item} className="mb-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-parchment/5 border border-parchment/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
            <h3 className="text-marigold uppercase tracking-widest text-sm font-semibold mb-4">Be the Character</h3>
            <p className="text-base md:text-lg text-parchment/80 leading-relaxed font-light mb-6">
              An interactive creative-writing workshop where participants step into the minds of famous fictional characters and explore how they would think, feel and act in their world. The workshop allows participants to look beyond the character they know and imagine the story from their own perspective.
            </p>
            <p className="text-base md:text-lg text-parchment/80 leading-relaxed font-light mb-6">
              Participants are given a famous fictional character or hero along with a situation from their world. For example:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-parchment/70 font-light mb-6 text-sm md:text-base">
              <li>You are Spider-Man. You have to choose between saving someone you love and stopping a larger threat.</li>
              <li>You are Hermione Granger. You discover something that could completely change everything you believe about the wizarding world.</li>
            </ul>
            <p className="text-base md:text-lg text-parchment/80 leading-relaxed font-light mb-6">
              Participants then answer the question: <strong>If I were this character, what would I do?</strong>
            </p>
            <p className="text-base md:text-lg text-parchment/80 leading-relaxed font-light">
              Instead of simply discussing their choice, they turn it into a short piece of creative writing. They can express their response through: A diary entry, A letter, A short scene, An internal dialogue, An alternate ending, or Any creative format they choose.
            </p>
          </div>
          <div className="bg-gradient-to-br from-marigold/10 to-ink border border-marigold/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm flex flex-col justify-start gap-6">
            <h3 className="text-marigold uppercase tracking-widest text-sm font-semibold mb-2">Workshop Flow</h3>
            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-marigold/30 before:to-transparent">
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border border-marigold bg-ink text-marigold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-mono text-xs">1</div>
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] px-4 py-2 bg-parchment/5 rounded shadow">
                     <p className="font-semibold text-parchment text-sm">Enter the Story</p>
                     <p className="text-xs text-parchment/60 mt-1">Participants are introduced to their character and situation.</p>
                  </div>
               </div>
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border border-marigold bg-ink text-marigold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-mono text-xs">2</div>
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] px-4 py-2 bg-parchment/5 rounded shadow">
                     <p className="font-semibold text-parchment text-sm">Think Like Them</p>
                     <p className="text-xs text-parchment/60 mt-1">Take a few minutes to understand their world, emotions, choices.</p>
                  </div>
               </div>
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border border-marigold bg-ink text-marigold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-mono text-xs">3</div>
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] px-4 py-2 bg-parchment/5 rounded shadow">
                     <p className="font-semibold text-parchment text-sm">Make the Choice</p>
                     <p className="text-xs text-parchment/60 mt-1">Decide what to do in the character's position.</p>
                  </div>
               </div>
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border border-marigold bg-ink text-marigold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-mono text-xs">4</div>
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] px-4 py-2 bg-parchment/5 rounded shadow">
                     <p className="font-semibold text-parchment text-sm">Write the Story</p>
                     <p className="text-xs text-parchment/60 mt-1">Transform decision into a short creative piece.</p>
                  </div>
               </div>
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border border-marigold bg-ink text-marigold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-mono text-xs">5</div>
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] px-4 py-2 bg-parchment/5 rounded shadow">
                     <p className="font-semibold text-parchment text-sm">The Plot Twist</p>
                     <p className="text-xs text-parchment/60 mt-1">Receive a new constraint that changes the situation.</p>
                  </div>
               </div>
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border border-marigold bg-ink text-marigold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-mono text-xs">6</div>
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] px-4 py-2 bg-parchment/5 rounded shadow">
                     <p className="font-semibold text-parchment text-sm">Step Out</p>
                     <p className="text-xs text-parchment/60 mt-1">Share pieces with the group and discuss.</p>
                  </div>
               </div>
            </div>
            
            <div className="flex items-center gap-4 mt-6">
              <div className="w-10 h-10 rounded-full bg-marigold/10 flex items-center justify-center text-marigold">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-sm text-parchment/50 uppercase tracking-wider">Duration</p>
                <p className="font-semibold text-parchment">45-60 Minutes</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div variants={item} className="text-center pb-12">
          <button 
            onClick={() => window.open('https://forms.gle/jUQF5BPU6ptzJ9sc9', '_blank', 'noopener,noreferrer')}
            className="group relative inline-flex items-center justify-center px-10 py-5 font-sans font-semibold tracking-[0.2em] uppercase text-sm bg-marigold text-ink overflow-hidden rounded-full transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Register for Workshop
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </motion.div>

      </motion.div>
    </div>
  );
}
