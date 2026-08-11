"use client";

import { useEffect, useRef } from "react";

interface SponsorCardProps {
  name: string;
  logo: string;
  index: number;
}

const SponsorCard = ({ name, logo, index }: SponsorCardProps) => {
  return (
    <div
      className="group relative mx-6 w-[380px] shrink-0"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Gradient border */}
      <div className="absolute -inset-px rounded-2xl opacity-0 blur-sm transition-all duration-500 group-hover:opacity-100 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-500" />

      {/* Glow */}
      <div className="absolute -inset-4 rounded-3xl bg-amber-300/0 blur-2xl transition-all duration-500 group-hover:bg-amber-300/30" />

      {/* Card */}
      <div className="relative overflow-hidden rounded-2xl bg-black/70 backdrop-blur-xl border border-amber-200/40 p-8 transition-all duration-500 group-hover:border-amber-200 group-hover:-translate-y-1 group-hover:shadow-[0_20px_60px_-15px_rgba(255,193,7,0.5)]">

        {/* Shimmer */}
        <div className="absolute inset-0 -translate-x-full shimmer group-hover:animate-shimmer" />

        {/* Logo */}
        <div className="flex h-24 items-center justify-center">
          <span className="font-display text-4xl font-bold text-gold-premium tracking-widest">
            {logo}
          </span>
        </div>

        {/* Divider */}
        <div className="my-4 h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" />

        {/* Name */}
        <p className="text-center font-sans text-sm tracking-widest text-amber-300/60 uppercase transition-colors duration-300 group-hover:text-amber-300">
          {name}
        </p>

        {/* Corners */}
        <div className="absolute left-3 top-3 h-8 w-8 border-l-2 border-t-2 border-amber-200/40 group-hover:border-amber-300 transition-colors" />
        <div className="absolute bottom-3 right-3 h-8 w-8 border-b-2 border-r-2 border-amber-200/40 group-hover:border-amber-300 transition-colors" />
      </div>
    </div>
  );
};

const sponsors = [
  { name: "AGS Cinemas", logo: "AGS" },
  { name: "Aswins", logo: "ASW" },
  { name: "BIG FM", logo: "BIG" },
  { name: "Deyga Organics", logo: "DEY" },
  { name: "Krafton Gaming", logo: "KFT" },
  { name: "Pepsi", logo: "PEP" },
  { name: "Vikatan Media", logo: "VIK" },
];

export function SponsorsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  /* ========= ENTRY ANIMATION ========= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("enter-active");
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-ink py-32 overflow-hidden enter-section"
    >
      {/* ================= TITLE ================= */}
      <div className="relative z-10 mb-20 text-center font-display uppercase">
        <h2 className="text-4xl tracking-widest md:text-6xl lg:text-7xl">
          <span className="text-parchment/80">
            Our Partners{" "}
          </span>
          <br />
          <span className="relative inline-block mt-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold via-amber-300 to-orange-500">
              in Art
            </span>
            {/* Gold underline */}
            <span className="absolute -bottom-4 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-70" />
          </span>
        </h2>
      </div>

      {/* ================= SLIDER ================= */}
      <div className="relative z-10 mt-36">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-40 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-40 bg-gradient-to-l from-ink to-transparent" />

        <div className="sponsor-track flex w-max">
          {[...sponsors, ...sponsors].map((s, i) => (
            <div key={i} className="sponsor-item">
              <SponsorCard name={s.name} logo={s.logo} index={i} />
            </div>
          ))}
        </div>
      </div>

      {/* ================= STYLES ================= */}
      <style>{`
        /* -------- ENTRY -------- */
        .enter-section {
          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity 0.9s ease,
            transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .enter-section.enter-active {
          opacity: 1;
          transform: translateY(0);
        }

        /* -------- SCROLL -------- */
        .sponsor-track {
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        /* Pause scroll when ANY card hovered */
        .sponsor-track:has(.sponsor-item:hover) {
          animation-play-state: paused;
        }

        /* -------- SPACING -------- */
        .sponsor-item {
          padding: 0 16px;
          position: relative;
          z-index: 1;
        }

        /* -------- HOVER SCALE -------- */
        .sponsor-item:hover {
          z-index: 100;
        }

        .sponsor-item:hover .sponsor-card {
          transform: scale(1.15);
        }
      `}</style>
    </section>
  );
}
