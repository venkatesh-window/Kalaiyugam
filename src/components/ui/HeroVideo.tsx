"use client";

import { useEffect, useState } from "react";

export function HeroVideo() {
  const [isMounted, setIsMounted] = useState(false);
  
  // Wait until mounted to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Return a solid background or poster image before hydration
    return (
      <div className="absolute inset-0 bg-ink z-0">
        <div 
          className="absolute inset-0 bg-center bg-cover opacity-50"
          style={{ backgroundImage: "url('/hero-poster.svg')" }} 
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-ink">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        poster="/hero-poster.svg"
        className="object-cover w-full h-full opacity-60"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      {/* Gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
    </div>
  );
}
