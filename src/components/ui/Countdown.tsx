"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Countdown({ className }: { className?: string }) {
    // Target Date: August 20, 2026 09:00:00 IST
    const targetDate = useMemo(() => new Date("2026-08-20T09:00:00+05:30").getTime(), []);

    const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    
    const [isHappening, setIsHappening] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                setIsHappening(true);
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft();

        return () => clearInterval(timer);
    }, [targetDate]);

    if (!isMounted) return null;

    if (isHappening) {
        return (
            <div className={cn("inline-flex items-center justify-center px-6 py-3 border border-marigold text-marigold rounded-full uppercase tracking-widest text-sm font-bold", className)}>
                It's Happening
            </div>
        );
    }

    const pad = (num: number) => num.toString().padStart(2, "0");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    return (
        <div className={cn("flex flex-col items-center gap-8 z-20", className)}>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-3 md:gap-6"
            >
                <TimeUnit value={pad(timeLeft.days)} label="DAYS" />
                <Separator />
                <TimeUnit value={pad(timeLeft.hours)} label="HOURS" />
                <Separator />
                <TimeUnit value={pad(timeLeft.minutes)} label="MINS" />
                <Separator />
                <TimeUnit value={pad(timeLeft.seconds)} label="SECS" />
            </motion.div>
        </div>
    );
};

const TimeUnit = ({ value, label }: { value: string; label: string }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center gap-2 group"
        >
            <div className="relative p-[1.5px] rounded-full overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                {/* Animated Gradient Border */}
                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent,rgba(212,175,55,0.6),transparent,transparent,rgba(212,175,55,0.6))] animate-[spin_8s_linear_infinite] group-hover:animate-[spin_4s_linear_infinite] transition-all" />

                <div className="relative flex flex-col items-center justify-center w-[60px] md:w-[90px] h-[60px] md:h-[90px] bg-black/95 backdrop-blur-3xl rounded-full border border-white/10 overflow-hidden">
                    {/* Inner Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/15 via-transparent to-amber-500/25 pointer-events-none" />
                    <motion.div
                        animate={{
                            opacity: [0.1, 0.2, 0.1],
                            scale: [1, 1.3, 1]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.25),transparent_70%)] pointer-events-none"
                    />

                    {/* Digit Container - Enhanced stability and visibility */}
                    <div className="relative flex items-center justify-center tabular-nums leading-none text-2xl md:text-4xl">
                        {value.split("").map((digit, idx) => (
                            <div key={idx} className="relative w-[0.7em] md:w-[0.8em] h-[1.2em] md:h-[1.3em] flex items-center justify-center overflow-hidden">
                                <AnimatePresence mode="popLayout" initial={false}>
                                    <motion.span
                                        key={digit}
                                        initial={{ y: "60%", opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: "-60%", opacity: 0 }}
                                        transition={{
                                            duration: 0.8,
                                            ease: [0.16, 1, 0.3, 1]
                                        }}
                                        className="absolute font-bold font-sans text-gold-premium tracking-tighter"
                                    >
                                        {digit}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <span className="text-[10px] md:text-xs text-amber-200/50 tracking-[0.5em] font-light uppercase group-hover:text-amber-200/80 transition-all duration-500">
                {label}
            </span>
        </motion.div>
    );
};

const Separator = () => (
    <div className="hidden md:flex flex-col gap-3 opacity-20 translate-y-[-10px]">
        <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]"
        />
        <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]"
        />
    </div>
);
