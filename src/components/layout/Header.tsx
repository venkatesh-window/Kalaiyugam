"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Workshops", href: "/workshops" },
  { name: "Theme", href: "/symphony-of-emotions" }, // Shortened for cleaner UI
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Handle scroll state for navbar glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out px-4 sm:px-6",
          isScrolled ? "py-3 sm:py-4" : "py-6 sm:py-8"
        )}
      >
        <div 
          className={cn(
            "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-2xl",
            isScrolled 
              ? "bg-ink/80 backdrop-blur-xl border border-parchment/10 shadow-2xl px-6 py-3" 
              : "bg-transparent border-transparent px-2"
          )}
        >
          {/* Logo Lockup */}
          <Link href="/" className="group flex items-center gap-3.5 z-50">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-marigold to-orange-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="font-display font-black text-base text-ink tracking-tighter">K26</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-xl sm:text-2xl font-bold leading-none tracking-wide text-parchment">
                Kalaiyugam<span className="text-marigold">.</span>
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-parchment/60 font-sans">
                The Celebration of Art
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 font-sans text-sm font-medium transition-colors rounded-lg overflow-hidden group",
                    isActive ? "text-marigold" : "text-parchment/70 hover:text-parchment"
                  )}
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Hover background effect */}
                  <span className="absolute inset-0 bg-parchment/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-lg" />
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-marigold rounded-t-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle (Hamburger) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2 text-parchment hover:text-marigold transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Takeover Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)", transition: { delay: 0.2 } }}
            className="fixed inset-0 z-40 bg-ink/95 flex flex-col items-center justify-center px-6"
          >
            <nav className="flex flex-col items-center gap-8 w-full max-w-sm">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="w-full text-center"
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block py-4 font-display text-4xl sm:text-5xl uppercase tracking-wider transition-colors border-b border-parchment/10 w-full",
                        isActive ? "text-marigold border-marigold/30" : "text-parchment hover:text-marigold hover:border-marigold/30"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
