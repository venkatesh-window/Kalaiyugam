export type Movement = {
  name: string;
  emotion: string;
  colorClass: string;
  description: string;
};

export const movements: Record<string, Movement> = {
  "Wonder": { name: "Illusion to Intuition", emotion: "Wonder", colorClass: "bg-indigo text-parchment", description: "The blur between perception and instinct." },
  "Belonging": { name: "Speed Networking", emotion: "Belonging", colorClass: "bg-marigold text-ink", description: "Finding your place in the rhythm." },
  "Vulnerability": { name: "Hear Me Out", emotion: "Vulnerability", colorClass: "bg-parchment text-ink", description: "Being truly heard without filters." },
  "Catharsis": { name: "Emotional Damage", emotion: "Catharsis", colorClass: "bg-kumkum text-parchment", description: "The release of tension, raw and unfiltered." },
  "Value": { name: "Emotion Premier League (EPL)", emotion: "Value", colorClass: "bg-marigold text-ink", description: "Bidding on what feelings are truly worth." },
  "Intensity": { name: "Degrees of Emotion", emotion: "Intensity", colorClass: "bg-kumkum text-parchment", description: "Measuring the very scale of feeling." },
};
