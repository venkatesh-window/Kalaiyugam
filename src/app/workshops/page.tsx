import { EventCard } from "@/components/cards/EventCard";
import { Workshops } from "@/data/schedule";

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-marigold selection:text-ink">
      <main className="flex-grow pt-48 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20 max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-7xl uppercase tracking-wider mb-6 text-marigold">
              WORKSHOPS
            </h1>
            <p className="text-xl text-parchment/60 leading-relaxed">
              August 18, 2026. Master the instruments of Impact before the symphony&nbsp;begins.
            </p>
          </header>

          <div className="space-y-24">
            <section>
              <h2 className="font-display text-3xl uppercase tracking-widest text-parchment/80 mb-8 border-b border-parchment/10 pb-4">
                August 18
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Workshops.map((event, i) => (
                  <EventCard key={`workshop-${event.event}-${i}`} event={event} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
