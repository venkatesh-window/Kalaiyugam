"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, Clock, Video, MonitorPlay, 
  ShieldAlert, Sparkles, ChevronRight, Ban
} from "lucide-react";

export function EmotionalDamageUI() {
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
            <span>Catharsis Concept</span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl uppercase tracking-widest leading-none mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-parchment to-parchment/60">Emotional</span>
            <span className="block text-3xl md:text-5xl mt-4 text-kumkum tracking-[0.2em]">Damage</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-parchment/70 max-w-2xl mx-auto italic font-display">
            "Change the narrative. Shift the emotion."
          </p>
        </motion.div>

        {/* 2. Event Overview & 3. Requirements */}
        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
          <div className="md:col-span-8 bg-parchment/5 border border-parchment/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
            <h3 className="text-kumkum uppercase tracking-widest text-sm font-semibold mb-4">The Challenge</h3>
            <p className="text-lg text-parchment/80 leading-relaxed font-light mb-6">
              Participants will be provided with a 45–60 second video clip and must creatively edit it to change the emotion or mood conveyed by the original footage.
            </p>
            <p className="text-lg text-parchment/80 leading-relaxed font-light">
              Through pacing, color grading, sound design, and visual effects, your goal is to completely transform how the audience <strong className="text-parchment font-medium">feels</strong> when watching the clip.
            </p>
          </div>
          
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="bg-parchment/5 border border-parchment/10 rounded-2xl p-6 backdrop-blur-sm flex items-start gap-4 hover:bg-parchment/10 transition-colors">
              <div className="p-3 bg-kumkum/10 rounded-lg text-kumkum shrink-0">
                <Video size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-parchment/50 mb-1">Source Material</p>
                <p className="text-2xl font-display font-semibold">45-60s Clip</p>
              </div>
            </div>
            
            <div className="bg-parchment/5 border border-parchment/10 rounded-2xl p-6 backdrop-blur-sm flex items-start gap-4 hover:bg-parchment/10 transition-colors">
              <div className="p-3 bg-kumkum/10 rounded-lg text-kumkum shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-parchment/50 mb-1">Duration</p>
                <p className="text-2xl font-display font-semibold">Time-bound</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Competition Rules */}
        <motion.div variants={item} className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-kumkum/30 flex-grow" />
            <h2 className="font-display text-3xl uppercase tracking-widest text-kumkum">Competition Rules</h2>
            <div className="h-px bg-kumkum/30 flex-grow" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-parchment/5 border border-parchment/10 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden">
              <MonitorPlay className="absolute top-4 right-4 text-parchment/5" size={80} />
              <h4 className="text-sm uppercase tracking-widest text-parchment/80 mb-4 flex items-center gap-2">
                <ShieldAlert size={16} className="text-kumkum" /> Setup & Tools
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-parchment/80 text-sm leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-kumkum/50 mt-1.5 shrink-0" />
                  <span>Participants must <strong>bring their own laptops</strong> for the competition.</span>
                </li>
                <li className="flex items-start gap-3 text-parchment/80 text-sm leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-kumkum/50 mt-1.5 shrink-0" />
                  <span>Participants may use <strong>any video editing software</strong> of their choice.</span>
                </li>
                <li className="flex items-start gap-3 text-parchment/80 text-sm leading-relaxed">
                  <Ban size={14} className="text-red-400 mt-1 shrink-0" />
                  <span className="text-red-200">Use of AI tools is <strong>strictly prohibited</strong>.</span>
                </li>
              </ul>
            </div>

            <div className="bg-parchment/5 border border-parchment/10 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden">
              <ShieldAlert className="absolute top-4 right-4 text-parchment/5" size={80} />
              <h4 className="text-sm uppercase tracking-widest text-parchment/80 mb-4 flex items-center gap-2">
                <Users size={16} className="text-kumkum" /> Guidelines
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-parchment/80 text-sm leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-kumkum/50 mt-1.5 shrink-0" />
                  <span>Profanity, offensive language, and inappropriate content must be avoided in the final edit.</span>
                </li>
                <li className="flex items-start gap-3 text-parchment/80 text-sm leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-kumkum/50 mt-1.5 shrink-0" />
                  <span>Participants must complete and submit their edit within the allotted competition time. <strong>Late submissions will not be accepted.</strong></span>
                </li>
                <li className="flex items-start gap-3 text-parchment/80 text-sm leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-kumkum/50 mt-1.5 shrink-0" />
                  <span>All submitted edits must be <strong>original work</strong> created by the participant. Plagiarism, copying, or using another participant's work will result in disqualification.</span>
                </li>
              </ul>
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
            <p className="text-lg text-parchment/90 font-medium">To Be Announced</p>
            <p className="text-sm text-parchment/60 mt-2">Contact details will be updated shortly.</p>
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
