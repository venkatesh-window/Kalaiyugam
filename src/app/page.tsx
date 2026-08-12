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
        <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden pb-16 md:pb-32">
          <HeroVideo />

          <div className="relative z-10 flex flex-col items-center text-center max-w-7xl mx-auto w-full -mt-48 md:-mt-72 lg:-mt-80">
            <img
              src="/logo.png"
              alt="Kalaiyugam Logo"
              className="w-full max-w-[1900px] h-auto object-contain drop-shadow-[0_0_40px_rgba(217,164,65,0.6)] animate-in fade-in zoom-in duration-1000"
            />

            <div className="mt-[-32vw] md:mt-[-25vw] lg:mt-[-18vw] relative z-20">
              <Countdown />
            </div>
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
