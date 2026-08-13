"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { pillars } from "@/data/pillars";
import * as Icons from "@/components/icons/PillarIcons";

const PillarBlock = ({ pillar, index }: { pillar: any, index: number }) => {
  const isEven = index % 2 === 0;
  const iconName = pillar.instrument.replace(/\s+/g, '') + 'Icon';
  const IconComponent = (Icons as any)[iconName] || Icons.StageIcon; // Fallback

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Text Block */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight group-hover:text-marigold transition-colors">
          {pillar.name}
        </h2>
        <p className="text-xl text-parchment/60 font-light">
          {pillar.description}
        </p>
      </div>

      {/* Visual Block (Image or Icon) */}
      <div className="flex-1 w-full max-w-md aspect-[4/5] relative group perspective rounded-lg overflow-hidden border-4 border-marigold shadow-[0_0_20px_rgba(217,164,65,0.3)] transition-shadow duration-500 hover:shadow-[0_0_50px_rgba(217,164,65,0.6)]">
        <div className="absolute inset-0 opacity-10 blur-3xl rounded-full bg-marigold transition-all duration-1000 group-hover:opacity-40" />
        
        {pillar.image ? (
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-110"
            style={{ backgroundImage: `url(${pillar.image})` }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-ink/50 backdrop-blur-sm">
            <IconComponent className="w-32 h-32 text-marigold group-hover:scale-110 transition-transform duration-500" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export function InstrumentsSection() {
  const containerRef = useRef<HTMLElement>(null);

  // Scroll logic for the SVG path
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-ink">
      {/* Background SVG Path */}
      <div className="absolute inset-0 w-full h-full pointer-events-none hidden md:block">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M50 0 C70 150, 30 300, 50 500 C70 700, 30 850, 50 1000"
            stroke="rgba(247, 243, 234, 0.05)"
            strokeWidth="0.5"
            vectorEffect="non-scaling-stroke"
          />
          <motion.path
            d="M50 0 C70 150, 30 300, 50 500 C70 700, 30 850, 50 1000"
            stroke="#D9A441"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            style={{ pathLength }}
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-32 relative z-30">
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider mb-6">
            The Instruments
          </h2>
          <p className="text-parchment/60 text-lg">
            Six pillars of Impact, each playing a crucial note in this symphony.
          </p>
        </div>

        {/* Alternating Layout */}
        <div className="flex flex-col gap-[20vh] pb-32">
          {pillars.map((pillar, idx) => (
            <PillarBlock key={pillar.name} pillar={pillar} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
