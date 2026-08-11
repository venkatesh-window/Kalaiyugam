"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { GalleryTile } from "./GalleryTile";
import { X } from "lucide-react";

const galleryData = [
  { id: "g1", title: "2023", aspectRatio: "aspect-[3/4]" },
  { id: "g2", title: "Stage", aspectRatio: "aspect-square" },
  { id: "g3", title: "Parai", aspectRatio: "aspect-square" },
  { id: "g4", title: "Performance", aspectRatio: "aspect-[3/4]" },
];

export function AboutGallerySection() {
  const containerRef = useRef<HTMLElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Parallax setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Left column moves up slightly faster
  const col1Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  // Right column moves up slightly slower
  const col2Y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  // Text staggered reveal variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <>
      <section ref={containerRef} className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column (Text) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-wider text-parchment/90">
                Where tradition <br />
                <span className="text-marigold">meets expression.</span>
              </h2>
              {/* Decorative arc/rule */}
              <svg className="w-32 h-4 mt-6 overflow-visible" viewBox="0 0 100 20">
                <path 
                  d="M0 10 Q 50 -5 100 10" 
                  fill="transparent" 
                  stroke="#D9A441" 
                  strokeWidth="2" 
                />
              </svg>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-parchment/70 leading-relaxed max-w-lg">
              Kalaiyugam is Impact's celebration of art. The first edition in 2023 brought Tamil Nadu's traditional art forms to center stage: the beat of the parai, the rhythm of tharai thappattai.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-parchment/70 leading-relaxed max-w-lg">
              In 2026, Kalaiyugam returns as Symphony of Emotions — two days where every event, every workshop, every performance comes back to one thing: how art lets us feel, express, and be heard.
            </motion.p>
          </motion.div>

          {/* Right Column (Gallery Parallax) */}
          <div className="grid grid-cols-2 gap-4 perspective-[1000px]">
            {/* Gallery Column 1 */}
            <motion.div 
              style={{ y: col1Y }} 
              className="space-y-4 pt-12"
            >
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <GalleryTile 
                  title={galleryData[0].title} 
                  aspectRatio={galleryData[0].aspectRatio} 
                  onClick={() => setSelectedImage(galleryData[0].title)}
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <GalleryTile 
                  title={galleryData[2].title} 
                  aspectRatio={galleryData[2].aspectRatio} 
                  onClick={() => setSelectedImage(galleryData[2].title)}
                />
              </motion.div>
            </motion.div>

            {/* Gallery Column 2 */}
            <motion.div 
              style={{ y: col2Y }} 
              className="space-y-4"
            >
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <GalleryTile 
                  title={galleryData[1].title} 
                  aspectRatio={galleryData[1].aspectRatio} 
                  onClick={() => setSelectedImage(galleryData[1].title)}
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                <GalleryTile 
                  title={galleryData[3].title} 
                  aspectRatio={galleryData[3].aspectRatio} 
                  onClick={() => setSelectedImage(galleryData[3].title)}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-ink/90 cursor-zoom-out"
          >
            <button 
              className="absolute top-8 right-8 text-parchment/60 hover:text-marigold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full aspect-[4/3] bg-parchment/5 rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image block itself
            >
              {/* Textured placeholder for lightbox */}
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(247, 243, 234, 0.05) 10px, rgba(247, 243, 234, 0.05) 11px)"
                }}
              />
              <div className="absolute bottom-8 left-8">
                <div className="w-12 h-px bg-marigold mb-4" />
                <span className="text-sm uppercase tracking-[0.3em] text-parchment font-medium drop-shadow-lg">
                  {selectedImage}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
