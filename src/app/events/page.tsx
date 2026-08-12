import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EventCard } from "@/components/cards/EventCard";
import { MainEventDay } from "@/data/schedule";

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ink text-parchment selection:bg-marigold selection:text-ink">
      <Header />

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20 text-center">
            <h1 className="font-display text-5xl md:text-7xl uppercase tracking-wider mb-6">
              Events
            </h1>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MainEventDay.map((event, i) => (
              <EventCard key={`${event.event}-${i}`} event={event} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
