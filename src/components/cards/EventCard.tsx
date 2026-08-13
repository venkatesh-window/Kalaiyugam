"use client";

import Link from "next/link";
import { type EventSlot } from "@/data/schedule";
import { cn } from "@/lib/utils";

export function EventCard({ event }: { event: EventSlot }) {
  const slug = event.event.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  return (
    <Link 
      href={slug === 'podcast-workshop' && event.registerLink ? event.registerLink : `/event/${slug}`}
      target={slug === 'podcast-workshop' ? "_blank" : undefined}
      rel={slug === 'podcast-workshop' ? "noopener noreferrer" : undefined}
      className="event-card block relative rounded-2xl overflow-hidden bg-ink border border-parchment/20 group aspect-[4/5] cursor-pointer"
    >
      {/* Optional background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent z-0 pointer-events-none"></div>

      <div className="absolute bottom-0 left-0 right-0 z-10 p-6 pointer-events-none">
        <div className="h-[2px] w-12 bg-marigold rounded-full mb-4 transition-all duration-700 ease-out group-hover:w-full"></div>

        <h2 className="text-parchment text-[22px] font-bold leading-snug font-display tracking-tight mb-0 transition-all duration-500 group-hover:translate-x-1 group-hover:mb-2 uppercase">
          {event.event}
        </h2>

        <div className="flex flex-col gap-0 mt-0 mb-0 max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:gap-2 group-hover:mt-2 group-hover:mb-4 group-hover:max-h-[120px] group-hover:opacity-100">
          {event.price && (
             <div className="flex items-center gap-2.5 mt-1">
              <span className="text-xs uppercase tracking-widest px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 font-mono">
                ₹{event.price}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between w-full max-h-0 overflow-hidden opacity-0 transition-all duration-400 ease-out group-hover:max-h-[40px] group-hover:opacity-100 mt-2" style={{ transitionDelay: '80ms' }}>
          <div className="flex items-center gap-2 text-marigold font-bold uppercase tracking-[0.18em] text-[11px] group-hover:translate-x-1 transition-transform">
            <span>View Details</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
          
          {event.registerLink && (
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(event.registerLink, '_blank', 'noopener,noreferrer');
              }}
              className="pointer-events-auto px-4 py-1.5 bg-marigold text-ink font-bold uppercase tracking-wider text-[10px] rounded-sm hover:bg-parchment transition-colors"
            >
              Register
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}
