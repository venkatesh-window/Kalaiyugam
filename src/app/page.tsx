import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroVideo } from "@/components/ui/HeroVideo";
import { Countdown } from "@/components/ui/Countdown";
import { SponsorMarquee } from "@/components/ui/SponsorMarquee";
import { pillars } from "@/data/pillars";
import * as Icons from "@/components/icons/PillarIcons";
import { InstrumentsSection } from "@/components/ui/InstrumentsSection";
import { AboutGallerySection } from "@/components/ui/AboutGallerySection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-ink text-parchment selection:bg-marigold selection:text-ink">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative h-screen flex flex-col items-center justify-center pt-24 px-6">
          <HeroVideo />
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-12">
            <h1 className="font-display text-5xl md:text-8xl tracking-wider uppercase drop-shadow-2xl text-parchment">
              Symphony <span className="text-marigold italic block mt-2">of Emotions</span>
            </h1>
            
            <Countdown />
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
            <div className="w-px h-24 bg-gradient-to-b from-marigold to-transparent animate-pulse" />
          </div>
        </section>

        <AboutGallerySection />

        <InstrumentsSection />

        <SponsorMarquee />
      </main>

      <Footer />
    </div>
  );
}
