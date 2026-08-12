"use client";

import { type EventSlot } from "@/data/schedule";
import { movements } from "@/data/movements";
import { cn } from "@/lib/utils";
import { CalendarDays, MapPin } from "lucide-react";

export function EventCard({ event }: { event: EventSlot }) {
  const movementData = event.movement ? movements[event.movement] : null;

  return (
    <div className="event-card relative rounded-2xl overflow-hidden bg-ink border border-parchment/20 group aspect-[4/5] cursor-pointer">
      {/* Optional background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent z-0"></div>

      <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
        <div className="h-[2px] w-12 bg-marigold rounded-full mb-4 transition-all duration-700 ease-out group-hover:w-full"></div>

        <h2 className="text-parchment text-[22px] font-bold leading-snug font-display tracking-tight mb-0 transition-all duration-500 group-hover:translate-x-1 group-hover:mb-2 uppercase">
          {event.event}
        </h2>

        <div className="flex flex-col gap-0 mt-0 mb-0 max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:gap-2 group-hover:mt-2 group-hover:mb-4 group-hover:max-h-[120px] group-hover:opacity-100">
          <div className="flex items-center gap-2.5 text-parchment/80">
            <CalendarDays size={16} className="text-marigold shrink-0" />
            <span className="text-sm font-sans tracking-wide">
              {event.time}
            </span>
          </div>

          {event.venue && (
            <div className="flex items-center gap-2.5 text-parchment/80">
              <MapPin size={16} className="text-marigold shrink-0" />
              <span className="text-sm font-sans tracking-wide truncate">
                {event.venue}
              </span>
            </div>
          )}
          
          {movementData && (
             <div className="flex items-center gap-2.5 mt-1">
              <span className={cn("text-xs uppercase tracking-widest px-2 py-1 rounded bg-marigold/10 text-marigold", movementData.colorClass)}>
                {movementData.emotion}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 text-marigold font-bold uppercase tracking-[0.18em] text-[11px] max-h-0 overflow-hidden opacity-0 transition-all duration-400 ease-out group-hover:max-h-[30px] group-hover:opacity-100 group-hover:translate-x-1" style={{ transitionDelay: '80ms' }}>
          <span>View Details</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
