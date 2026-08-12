"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ink text-parchment selection:bg-marigold selection:text-ink">
      <Header />

      <main className="flex-grow flex items-center justify-center pt-32 pb-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-kumkum/10 via-ink to-indigo/10 pointer-events-none" />
        
        <div className="max-w-xl w-full relative z-10 p-12 border border-parchment/10 bg-ink/50 backdrop-blur-md text-center">
          <div className="w-12 h-12 bg-marigold rounded-full mx-auto mb-8 animate-pulse shadow-[0_0_40px_rgba(217,164,65,0.4)]" />
          
          <h1 className="font-display text-4xl md:text-5xl uppercase tracking-wider mb-6">
            Registrations <span className="text-marigold italic">Opening Soon</span>
          </h1>
          
          <p className="text-lg text-parchment/60 leading-relaxed mb-12">
            The symphony is still tuning up. We're finalizing the details for Kalaiyugam 26.
          </p>

          <form className="space-y-6 max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2 text-left">
              <label htmlFor="email" className="text-xs uppercase tracking-widest text-parchment/40">Get Notified</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border-b border-parchment/20 pb-2 outline-none focus:border-marigold transition-colors text-parchment placeholder:text-parchment/20 font-sans"
              />
            </div>
            <button className="w-full py-4 bg-parchment text-ink font-bold uppercase tracking-widest text-sm hover:bg-marigold transition-colors">
              Notify Me
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
