"use client";

import Link from "next/link";
import { pillars } from "@/data/pillars";

export function Footer() {
  return (
    <footer className="bg-ink text-parchment py-16 px-6 border-t border-parchment/10 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Col */}
        <div className="md:col-span-2">
          <Link href="/" className="group flex flex-col items-start gap-1 mb-6">
            <span className="font-display text-4xl leading-none uppercase tracking-wider">
              Kalaiyugam<sup className="text-xl ml-1">26</sup>
            </span>
            <span className="text-sm uppercase tracking-[0.2em] text-marigold">
              The Celebration of Art
            </span>
          </Link>
          <p className="text-parchment/60 max-w-md mb-8">
            Kalaiyugam is the flagship event of Impact, the professional club of Chennai Institute of Technology. A two-day celebration where tradition meets expression, built by the six pillars of Impact.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-parchment/40 uppercase tracking-wider">
            {pillars.map((p) => (
              <span key={p.name} className="bg-parchment/5 px-2 py-1 rounded">
                {p.name}
              </span>
            ))}
          </div>
        </div>

        {/* Links Col */}
        <div>
          <h4 className="font-display text-xl uppercase tracking-wider mb-6 text-marigold">Explore</h4>
          <ul className="space-y-4 flex flex-col">
            <li>
              <Link href="/" className="hover:text-marigold transition-colors uppercase tracking-widest text-sm">Home</Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-marigold transition-colors uppercase tracking-widest text-sm">Events</Link>
            </li>
            <li>
              <Link href="/workshops" className="hover:text-marigold transition-colors uppercase tracking-widest text-sm">Workshops</Link>
            </li>
          </ul>
        </div>

        {/* Contact Col */}
        <div>
          <h4 className="font-display text-xl uppercase tracking-wider mb-6 text-marigold">Connect</h4>
          <ul className="space-y-4 text-sm text-parchment/60">
            <li>Chennai Institute of Technology</li>
            <li>Kundrathur, Chennai</li>
            <li className="pt-4">
              <a href="mailto:impact@citchennai.net" className="hover:text-parchment transition-colors">
                impact@citchennai.net
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-parchment transition-colors">
                @impactcit
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-parchment/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-parchment/40 uppercase tracking-widest">
        <span>© 2026 Impact CIT. All rights reserved.</span>
        <span>Made with Resonance</span>
      </div>
    </footer>
  );
}
