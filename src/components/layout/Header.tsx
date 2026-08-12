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
          className="w-full flex items-center justify-between px-2"
        >
          {/* Logo Lockup */}
          <Link href="/" className="group flex items-center z-50">
            {/* The user will drop logo.png into the public folder */}
            <img 
              src="/imp logo.png" 
              alt="Impact Logo" 
              className="h-20 md:h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(217,164,65,0.4)]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-12 bg-ink/90 backdrop-blur-md border border-marigold/40 rounded-full px-12 py-5 shadow-2xl shadow-marigold/10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative py-1 font-sans text-sm font-semibold uppercase tracking-[0.25em] transition-colors group",
                    isActive ? "text-marigold" : "text-marigold/70 hover:text-marigold"
                  )}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-marigold"
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
