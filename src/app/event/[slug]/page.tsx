import { OpticalIllusionChallengeUI } from "@/components/ui/OpticalIllusionChallengeUI";
import { EmotionalDamageUI } from "@/components/ui/EmotionalDamageUI";
import { DegreesOfEmotionUI } from "@/components/ui/DegreesOfEmotionUI";
import { HearMeOutUI } from "@/components/ui/HearMeOutUI";
import { SpeedNetworkingUI } from "@/components/ui/SpeedNetworkingUI";
import { EmotionPremierLeagueUI } from "@/components/ui/EmotionPremierLeagueUI";

export default async function EventDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug === 'optical-illusion-website-challenge' || slug === 'illusion-to-intuition') {
    return (
      <div className="min-h-screen flex flex-col selection:bg-marigold selection:text-ink">
        <main className="flex-grow">
          <OpticalIllusionChallengeUI />
        </main>
      </div>
    );
  }

  if (slug === 'emotional-damage') {
    return (
      <div className="min-h-screen flex flex-col selection:bg-kumkum selection:text-ink">
        <main className="flex-grow">
          <EmotionalDamageUI />
        </main>
      </div>
    );
  }

  if (slug === 'degrees-of-emotion') {
    return (
      <div className="min-h-screen flex flex-col selection:bg-kumkum selection:text-ink">
        <main className="flex-grow">
          <DegreesOfEmotionUI />
        </main>
      </div>
    );
  }

  if (slug === 'hear-me-out') {
    return (
      <div className="min-h-screen flex flex-col selection:bg-parchment selection:text-ink">
        <main className="flex-grow">
          <HearMeOutUI />
        </main>
      </div>
    );
  }

  if (slug === 'speed-networking') {
    return (
      <div className="min-h-screen flex flex-col selection:bg-marigold selection:text-ink">
        <main className="flex-grow">
          <SpeedNetworkingUI />
        </main>
      </div>
    );
  }

  if (slug === 'emotion-premier-league-epl') {
    return (
      <div className="min-h-screen flex flex-col selection:bg-marigold selection:text-ink">
        <main className="flex-grow">
          <EmotionPremierLeagueUI />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col selection:bg-marigold selection:text-ink">
      <main className="flex-grow pt-32 pb-24 px-6 flex items-center justify-center">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-parchment/60 text-xl font-sans">
            Event details and content to be added here.
          </p>
        </div>
      </main>
    </div>
  );
}
