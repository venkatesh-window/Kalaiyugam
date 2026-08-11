"use client";

import { motion } from "framer-motion";
import { type EventSlot } from "@/data/schedule";
import { movements } from "@/data/movements";
import { cn } from "@/lib/utils";

export function EventCard({ event }: { event: EventSlot }) {
  const movementData = event.movement ? movements[event.movement] : null;

  return (
    <motion.div
      whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="relative p-6 border border-parchment/10 bg-ink group hover:border-marigold/30 transition-colors"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="flex flex-col h-full gap-4 relative z-10" style={{ transform: "translateZ(20px)" }}>
        <div className="flex justify-between items-start">
          <span className="text-xs uppercase tracking-widest text-parchment/60 font-mono">
            {event.time}
          </span>
          {movementData && (
            <span className={cn("text-xs uppercase tracking-widest px-2 py-1 rounded", movementData.colorClass)}>
              {movementData.emotion}
            </span>
          )}
        </div>
        
        <div>
          <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wider mb-2 group-hover:text-marigold transition-colors">
            {event.event}
          </h3>
          <p className="text-sm uppercase tracking-widest text-parchment/40">
            {event.venue}
          </p>
        </div>

        {movementData && (
          <div className="mt-auto pt-4 border-t border-parchment/10">
            <p className="text-sm text-parchment/60 italic">
              "{movementData.description}"
            </p>
          </div>
        )}
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}
