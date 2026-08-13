export type Pillar = {
  name: string;
  instrument: string;
  description: string;
  image?: string;
};

export const pillars: Pillar[] = [
  { name: "Podcast", instrument: "Voice", description: "The primal instrument—raw, unedited, direct." },
  { name: "Magazine", instrument: "The Written Verse", description: "Capturing fleeting thoughts into lasting resonance." },
  { name: "Design", instrument: "Visual Harmony", description: "The unspoken notes that give shape to feeling." },
  { name: "Networking", instrument: "Rhythm", description: "Every connection is a beat, building the tempo." },
  { name: "Editing", instrument: "The Stage", description: "Where the symphony is performed live." },
  { name: "Development", instrument: "Resonance", description: "The medium that carries the sound further." },
];
