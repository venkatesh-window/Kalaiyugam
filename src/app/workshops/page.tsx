import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EventCard } from "@/components/cards/EventCard";
import { WorkshopDay1, WorkshopDay2 } from "@/data/schedule";

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ink text-parchment selection:bg-marigold selection:text-ink">
      <Header />

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20 max-w-3xl">
            <h1 className="font-display text-5xl md:text-7xl uppercase tracking-wider mb-6">
              The <span className="text-marigold italic">Workshops</span>
            </h1>
            <p className="text-xl text-parchment/60 leading-relaxed">
              August 18–19, 2026. Master the instruments of Impact before the symphony begins.
            </p>
          </header>

          <div className="space-y-24">
            <section>
              <h2 className="font-display text-3xl uppercase tracking-widest text-parchment/80 mb-8 border-b border-parchment/10 pb-4">
                Day 1 — August 18
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {WorkshopDay1.map((event, i) => (
                  <EventCard key={`d1-${event.event}-${i}`} event={event} />
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-3xl uppercase tracking-widest text-parchment/80 mb-8 border-b border-parchment/10 pb-4">
                Day 2 — August 19
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {WorkshopDay2.map((event, i) => (
                  <EventCard key={`d2-${event.event}-${i}`} event={event} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
