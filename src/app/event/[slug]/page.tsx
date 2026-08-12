import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function EventDetailsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ink text-parchment selection:bg-marigold selection:text-ink">
      <Header />

      <main className="flex-grow pt-32 pb-24 px-6 flex items-center justify-center">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-parchment/60 text-xl font-sans">
            Event details and content to be added here.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
