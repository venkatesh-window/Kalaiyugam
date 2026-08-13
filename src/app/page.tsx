import { HeroVideo } from "@/components/ui/HeroVideo";
import { Countdown } from "@/components/ui/Countdown";
import { SponsorsSection } from "@/components/ui/SponsorsSection";
import { pillars } from "@/data/pillars";
import * as Icons from "@/components/icons/PillarIcons";
import { InstrumentsSection } from "@/components/ui/InstrumentsSection";
import { AboutGallerySection } from "@/components/ui/AboutGallerySection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-marigold selection:text-ink">
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden pb-16 md:pb-32">
          <HeroVideo />

          <div className="relative z-10 flex flex-col items-center text-center max-w-7xl mx-auto w-full -mt-12 md:-mt-8 lg:-mt-4">
            <img
              src="/logo.png"
              alt="Kalaiyugam Logo"
              className="w-full max-w-[1900px] h-auto object-contain drop-shadow-[0_0_40px_rgba(217,164,65,0.6)] animate-in fade-in zoom-in duration-1000"
            />
          </div>

          {/* Absolute positioning keeps the countdown fixed relative to the screen bottom */}
          <div className="absolute bottom-20 md:bottom-24 lg:bottom-32 left-1/2 -translate-x-1/2 z-20 w-full flex justify-center scale-90 sm:scale-100">
            <Countdown />
          </div>
        </section>

        <AboutGallerySection />

        <InstrumentsSection />

        <SponsorsSection />

        {/* CONTACT SECTION */}
        <section className="py-20 px-6 relative z-10 border-t border-marigold/20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif text-marigold uppercase tracking-wider">
              Contact
            </h2>
            <div className="flex flex-col items-center justify-center p-8 bg-black/20 border border-marigold/30 rounded-2xl backdrop-blur-sm max-w-md mx-auto hover:border-marigold/60 transition-colors duration-300 shadow-[0_0_15px_rgba(217,164,65,0.1)]">
              <p className="text-xl md:text-2xl font-medium mb-3 text-parchment/90">Sachin</p>
              <a 
                href="tel:9791031117" 
                className="text-lg md:text-xl text-marigold hover:text-marigold/80 transition-colors duration-300 flex items-center gap-2 drop-shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                9791031117
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
