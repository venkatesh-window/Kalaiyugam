"use client";

import { useMedia } from "react-use";
import { useEffect, useState } from "react";

export function HeroVideo() {
  const [isMounted, setIsMounted] = useState(false);
  
  // Wait until mounted to check media query to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Use a media query to determine mobile vs desktop
  // 768px is the typical md breakpoint in Tailwind
  const isMobile = useMedia("(max-width: 768px)", false);

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
      {/* We render separate video elements so the browser doesn't download both */}
      {isMobile ? (
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          poster="/hero-poster.svg"
          className="object-cover w-full h-full opacity-60"
        >
          <source src="/hero-mobile.webm" type="video/webm" />
          <source src="/hero-mobile.mp4" type="video/mp4" />
        </video>
      ) : (
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          poster="/hero-poster.svg"
          className="object-cover w-full h-full opacity-60"
        >
          <source src="/hero-desktop.webm" type="video/webm" />
          <source src="/hero-desktop.mp4" type="video/mp4" />
        </video>
      )}
      {/* Gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
    </div>
  );
}
