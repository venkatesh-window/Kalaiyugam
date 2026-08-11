import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroVideo } from "@/components/ui/HeroVideo";
import { Countdown } from "@/components/ui/Countdown";
import { SponsorsSection } from "@/components/ui/SponsorsSection";
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
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto space-y-12 mt-12">
            <h1 className="font-display text-5xl md:text-[8rem] leading-[0.9] tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-parchment via-parchment to-parchment/70 drop-shadow-[0_0_30px_rgba(247,243,234,0.15)]">
              Symphony <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold via-yellow-400 to-orange-500 italic block mt-2 drop-shadow-[0_0_20px_rgba(217,164,65,0.3)]">of Emotions</span>
            </h1>
            
            <div className="pt-8">
              <Countdown />
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <div className="w-px h-32 bg-gradient-to-b from-marigold to-transparent animate-pulse opacity-50" />
          </div>
        </section>

        <AboutGallerySection />

        <InstrumentsSection />

        <SponsorsSection />
      </main>

      <Footer />
    </div>
  );
}
