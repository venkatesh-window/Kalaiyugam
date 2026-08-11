"use client";

import { useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { movements } from "@/data/movements";

export default function SymphonyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate the path drawing progress
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen bg-ink text-parchment selection:bg-marigold selection:text-ink">
      <Header />

      <main>
        {/* Intro Section */}
        <section className="min-h-screen flex items-center pt-32 pb-24 px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-5xl md:text-8xl uppercase tracking-wider mb-12"
            >
              The <span className="text-marigold italic">Symphony</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-3xl text-parchment/80 leading-relaxed font-light"
            >
              "Symphony of Emotions is Kalaiyugam's theme for 2026 — because every art form is really an emotion looking for a shape. This year, Impact built two days around that idea: events that ask you to name what you feel, argue for it, perform it, or let it go."
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-24 text-xs uppercase tracking-[0.2em] text-parchment/40 flex flex-col items-center gap-4"
            >
              <span>Scroll to experience</span>
              <div className="w-px h-16 bg-gradient-to-b from-parchment/40 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Movements Scroll Section */}
        <section ref={containerRef} className="relative pb-48">
          {/* Background SVG Path */}
          <div className="absolute inset-0 w-full h-full pointer-events-none hidden md:block">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M50 0 C80 200, 20 400, 50 600 C80 800, 20 900, 50 1000"
                stroke="rgba(247, 243, 234, 0.1)"
                strokeWidth="0.5"
                vectorEffect="non-scaling-stroke"
              />
              <motion.path
                d="M50 0 C80 200, 20 400, 50 600 C80 800, 20 900, 50 1000"
                stroke="#D9A441"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength }}
              />
            </svg>
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col gap-[30vh]">
            {Object.values(movements).map((movement, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div 
                  key={movement.emotion}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 text-center md:text-left space-y-6">
                    <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tight">
                      {movement.emotion}
                    </h2>
                    <p className="text-2xl text-parchment/60 font-light">
                      {movement.description}
                    </p>
                    <div className="pt-8">
                      <span className="text-xs uppercase tracking-[0.2em] text-parchment/40 block mb-2">Expressed in</span>
                      <span className={`inline-block px-4 py-2 text-sm uppercase tracking-widest font-bold ${movement.colorClass}`}>
                        {movement.name}
                      </span>
                    </div>
                  </div>
                  
                  {/* Abstract representation block */}
                  <div className="flex-1 w-full max-w-sm aspect-square relative group perspective">
                    <div className={`absolute inset-0 opacity-20 blur-3xl rounded-full transition-all duration-1000 group-hover:opacity-40 ${movement.colorClass.split(' ')[0]}`} />
                    <div className="absolute inset-4 border-2 border-parchment/20 rotate-45 transition-transform duration-700 group-hover:rotate-90 group-hover:border-parchment/50" />
                    <div className="absolute inset-8 border border-parchment/10 -rotate-12 transition-transform duration-1000 group-hover:rotate-0" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
