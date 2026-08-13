import { OpticalIllusionChallengeUI } from "@/components/ui/OpticalIllusionChallengeUI";
import { DegreesOfEmotionUI } from "@/components/ui/DegreesOfEmotionUI";
import { HearMeOutUI } from "@/components/ui/HearMeOutUI";
import { EditingCompetitionUI } from "@/components/ui/EditingCompetitionUI";
import { EmotionPremierLeagueUI } from "@/components/ui/EmotionPremierLeagueUI";
import { SpeedNetworkingUI } from "@/components/ui/SpeedNetworkingUI";

export default async function EventDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug === 'optical-illusion-website-challenge' || slug === 'illusion-to-intuition') {
    return <OpticalIllusionChallengeUI />;
  }
  if (slug === 'degrees-of-emotion') {
    return <DegreesOfEmotionUI />;
  }
  if (slug === 'hear-me-out') {
    return <HearMeOutUI />;
  }
  if (slug === 'editing-competition' || slug === 'emotional-damage') {
    return <EditingCompetitionUI />;
  }
  if (slug === 'emotion-premier-league' || slug === 'emotion-auction' || slug === 'emotion-premier-league-epl') {
    return <EmotionPremierLeagueUI />;
  }
  if (slug === 'speed-networking' || slug === 'kalaiyugam-2-0-speed-networking') {
    return <SpeedNetworkingUI />;
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
