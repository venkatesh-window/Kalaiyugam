import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroVideo } from "@/components/ui/HeroVideo";
import { Countdown } from "@/components/ui/Countdown";
import { SponsorMarquee } from "@/components/ui/SponsorMarquee";
import { pillars } from "@/data/pillars";
import * as Icons from "@/components/icons/PillarIcons";

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

        {/* ABOUT & GALLERY SECTION */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-wider text-parchment/90">
                Where tradition <br />
                <span className="text-marigold">meets expression.</span>
              </h2>
              <p className="text-lg md:text-xl text-parchment/70 leading-relaxed max-w-lg">
                Kalaiyugam is Impact's celebration of art. The first edition in 2023 brought Tamil Nadu's traditional art forms to center stage: the beat of the parai, the rhythm of tharai thappattai.
              </p>
              <p className="text-lg md:text-xl text-parchment/70 leading-relaxed max-w-lg">
                In 2026, Kalaiyugam returns as Symphony of Emotions — two days where every event, every workshop, every performance comes back to one thing: how art lets us feel, express, and be heard.
              </p>
            </div>

            {/* Gallery Grid Placeholder */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-parchment/5 aspect-[3/4] rounded overflow-hidden relative group">
                  <div className="absolute inset-0 flex items-center justify-center text-parchment/20 uppercase tracking-widest text-xs">2023</div>
                </div>
                <div className="bg-parchment/5 aspect-square rounded overflow-hidden relative group">
                  <div className="absolute inset-0 flex items-center justify-center text-parchment/20 uppercase tracking-widest text-xs">Parai</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-parchment/5 aspect-square rounded overflow-hidden relative group">
                  <div className="absolute inset-0 flex items-center justify-center text-parchment/20 uppercase tracking-widest text-xs">Stage</div>
                </div>
                <div className="bg-parchment/5 aspect-[3/4] rounded overflow-hidden relative group">
                  <div className="absolute inset-0 flex items-center justify-center text-parchment/20 uppercase tracking-widest text-xs">Performance</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PILLARS SECTION (The Instruments) */}
        <section className="py-32 px-6 relative overflow-hidden bg-parchment/5">
          <div className="absolute inset-0 bg-gradient-to-b from-ink to-transparent h-48" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent h-48 bottom-0" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider mb-6">
                The Instruments
              </h2>
              <p className="text-parchment/60 text-lg">
                Six pillars of Impact, each playing a crucial note in this symphony.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillars.map((pillar) => {
                const iconName = pillar.instrument.replace(/\s+/g, '') + 'Icon';
                const IconComponent = (Icons as any)[iconName] || Icons.StageIcon; // Fallback
                
                return (
                  <div 
                    key={pillar.name} 
                    className="group relative border border-parchment/10 p-8 hover:border-marigold/50 transition-colors bg-ink"
                  >
                    <div className="mb-6 text-marigold">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <div className="text-xs uppercase tracking-[0.2em] text-parchment/40 mb-2">
                      {pillar.name}
                    </div>
                    <h3 className="font-display text-2xl uppercase tracking-wider mb-4 group-hover:text-marigold transition-colors">
                      {pillar.instrument}
                    </h3>
                    <p className="text-parchment/60 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <SponsorMarquee />
      </main>

      <Footer />
    </div>
  );
}
