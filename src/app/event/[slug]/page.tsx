import { OpticalIllusionChallengeUI } from "@/components/ui/OpticalIllusionChallengeUI";
import { DegreesOfEmotionUI } from "@/components/ui/DegreesOfEmotionUI";
import { HearMeOutUI } from "@/components/ui/HearMeOutUI";
import { EditingCompetitionUI } from "@/components/ui/EditingCompetitionUI";
import { EmotionPremierLeagueUI } from "@/components/ui/EmotionPremierLeagueUI";
import { SpeedNetworkingUI } from "@/components/ui/SpeedNetworkingUI";
import { MandalaArtWorkshopUI } from "@/components/ui/MandalaArtWorkshopUI";
import { WritingWorkshopUI } from "@/components/ui/WritingWorkshopUI";
import { WebWorkshopUI } from "@/components/ui/WebWorkshopUI";
import { EditingWorkshopUI } from "@/components/ui/EditingWorkshopUI";
import { PodcastWorkshopUI } from "@/components/ui/PodcastWorkshopUI";

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
  if (slug === 'mandala-art-workshop') {
    return <MandalaArtWorkshopUI />;
  }
  if (slug === 'writing-workshop') {
    return <WritingWorkshopUI />;
  }
  if (slug === 'web-workshop') {
    return <WebWorkshopUI />;
  }
  if (slug === 'editing-workshop') {
    return <EditingWorkshopUI />;
  }
  if (slug === 'podcast-workshop') {
    return <PodcastWorkshopUI />;
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
