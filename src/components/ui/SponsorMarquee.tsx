"use client";

import { motion } from "framer-motion";

const SPONSORS = [
  "Acme Corp", "Global Tech", "Stark Industries", "Wayne Enterprises", 
  "Cyberdyne Systems", "Massive Dynamic", "InGen", "Umbrella Corp"
];

export function SponsorMarquee() {
  return (
    <div className="py-24 overflow-hidden bg-ink border-y border-parchment/10">
      <div className="text-center mb-12">
        <h3 className="font-display text-2xl uppercase tracking-widest text-parchment/40">
          Our Partners in Art
        </h3>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        {/* We duplicate the array to create the infinite scroll effect */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30
          }}
        >
          {/* First set */}
          <div className="flex items-center gap-24 px-12">
            {SPONSORS.map((sponsor, i) => (
              <div 
                key={`${sponsor}-${i}-1`} 
                className="text-3xl font-display uppercase tracking-widest text-parchment/20 hover:text-parchment transition-colors cursor-pointer"
              >
                {sponsor}
              </div>
            ))}
          </div>
          {/* Second set for seamless loop */}
          <div className="flex items-center gap-24 px-12">
            {SPONSORS.map((sponsor, i) => (
              <div 
                key={`${sponsor}-${i}-2`} 
                className="text-3xl font-display uppercase tracking-widest text-parchment/20 hover:text-parchment transition-colors cursor-pointer"
              >
                {sponsor}
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Gradient fades on the edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
