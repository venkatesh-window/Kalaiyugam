"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type GalleryTileProps = {
  title: string;
  src?: string;
  aspectRatio?: string;
  onClick?: () => void;
  className?: string;
};

export function GalleryTile({ title, src, aspectRatio = "aspect-[3/4]", onClick, className }: GalleryTileProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Tilt physics
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  const springConfig = { damping: 20, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Rotation ranges from -8 to 8 degrees
  const rotateX = useTransform(smoothMouseY, [0, 1], [8, -8]);
  const rotateY = useTransform(smoothMouseX, [0, 1], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const [transformOrigin, setTransformOrigin] = useState("50% 50%");

  // Fix Next.js hydration mismatch by setting random values only on client
  useEffect(() => {
    if (src) {
      setTransformOrigin(`${Math.random() * 100}% ${Math.random() * 100}%`);
    }
  }, [src]);

  const kenBurnsStyle = src ? { transformOrigin } : {};

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className={cn(
        "relative rounded-sm overflow-hidden cursor-pointer group shadow-xl",
        aspectRatio,
        className
      )}
    >
      {/* Background (Image or Placeholder) */}
      <div className="absolute inset-0 z-0">
        {src ? (
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-[10s] ease-linear group-hover:scale-110"
            style={{ backgroundImage: `url(${src})`, ...kenBurnsStyle }}
          />
        ) : (
          <div 
            className="w-full h-full bg-parchment/5"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(247, 243, 234, 0.05) 10px, rgba(247, 243, 234, 0.05) 11px)"
            }}
          />
        )}
      </div>

      {/* Hover Accents */}
      <div className="absolute inset-0 border border-marigold/0 group-hover:border-marigold/30 transition-colors duration-500 z-10" />
      
      {/* Viewfinder Brackets */}
      <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-marigold opacity-0 -translate-x-2 -translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 z-10" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-marigold opacity-0 translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 z-10" />


    </motion.div>
  );
}
