import { EventCard } from "@/components/cards/EventCard";
import { MainEventDay } from "@/data/schedule";

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-marigold selection:text-ink">
      <main className="flex-grow pt-48 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20 max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-7xl uppercase tracking-wider mb-6 text-marigold">
              EVENTS
            </h1>
            <p className="text-xl text-parchment/60 leading-relaxed">
              August 19, 2026. The symphony of emotions reaches its crescendo.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MainEventDay.map((event, i) => (
              <EventCard key={`${event.event}-${i}`} event={event} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
