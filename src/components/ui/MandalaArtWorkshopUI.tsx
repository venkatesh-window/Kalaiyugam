"use client";

import React from "react";
import { motion } from "framer-motion";
import { Palette, Clock, Calendar, User, Package, IndianRupee } from "lucide-react";

export function MandalaArtWorkshopUI() {
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
          <div className="flex justify-center flex-wrap gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-marigold/30 bg-marigold/5 text-marigold text-xs uppercase tracking-widest font-semibold">
              <Palette size={14} />
              <span>Art Workshop</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs uppercase tracking-widest font-semibold font-mono">
              <span>Registration Fee: 500</span>
            </div>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl uppercase tracking-widest leading-none mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-parchment to-parchment/60">Mandala Art</span>
            <span className="block text-3xl md:text-5xl mt-4 text-marigold tracking-[0.2em]">Workshop</span>
          </h1>
        </motion.div>

        {/* Overview */}
        <motion.div variants={item} className="mb-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-parchment/5 border border-parchment/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
            <h3 className="text-marigold uppercase tracking-widest text-sm font-semibold mb-4">About the Workshop</h3>
            <p className="text-lg text-parchment/80 leading-relaxed font-light mb-6">
              Unleash your creativity through the art of Mandala! Join us for an immersive Mandala Art Workshop led by Jayashree Varadarajan, where you will explore the beauty of patterns, symmetry, and mindful creativity.
            </p>
            <p className="text-lg text-parchment/80 leading-relaxed font-light mb-6">
              Whether you are a beginner or an art enthusiast, this workshop is a perfect opportunity to learn, create, and take home your own mandala artwork. Come create, connect, and discover the art within you!
            </p>
          </div>
          <div className="bg-gradient-to-br from-marigold/10 to-ink border border-marigold/20 rounded-2xl p-8 backdrop-blur-sm flex flex-col justify-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-marigold/10 flex items-center justify-center text-marigold">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-sm text-parchment/50 uppercase tracking-wider">Date</p>
                <p className="font-semibold text-parchment">August 18</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-marigold/10 flex items-center justify-center text-marigold">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-sm text-parchment/50 uppercase tracking-wider">Time</p>
                <p className="font-semibold text-parchment">10:00 AM - 12:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-marigold/10 flex items-center justify-center text-marigold">
                <User size={20} />
              </div>
              <div>
                <p className="text-sm text-parchment/50 uppercase tracking-wider">Conducted By</p>
                <p className="font-semibold text-parchment">Jayashree Varadarajan</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-marigold/10 flex items-center justify-center text-marigold">
                <Package size={20} />
              </div>
              <div>
                <p className="text-sm text-parchment/50 uppercase tracking-wider">Workshop Kit</p>
                <p className="font-semibold text-parchment">Provided</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div variants={item} className="text-center pb-12">
          <button 
            onClick={() => window.open('https://forms.gle/7vWYxFvwkqNphmcr9', '_blank', 'noopener,noreferrer')}
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
