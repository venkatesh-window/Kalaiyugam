"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TARGET_DATE = new Date("2026-08-20T09:00:00+05:30").getTime();

export function Countdown({ className }: { className?: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isHappening, setIsHappening] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance < 0) {
        clearInterval(interval);
        setIsHappening(true);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return null; // Avoid hydration mismatch

  if (isHappening) {
    return (
      <div className={cn("inline-flex items-center justify-center px-6 py-3 border border-marigold text-marigold rounded-full uppercase tracking-widest text-sm font-bold", className)}>
        It's Happening
      </div>
    );
  }

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className={cn("flex items-center gap-4 md:gap-8", className)}>
      {timeBlocks.map((block, i) => (
        <div key={block.label} className="flex flex-col items-center">
          <motion.div
            key={block.value}
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-display text-4xl md:text-6xl text-parchment"
          >
            {block.value.toString().padStart(2, "0")}
          </motion.div>
          <span className="text-xs uppercase tracking-widest text-parchment/60 mt-2">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
}
