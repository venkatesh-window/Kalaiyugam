export type Pillar = {
  name: string;
  instrument: string;
  description: string;
  image?: string;
  bgPosition?: string;
};

export const pillars: Pillar[] = [
  { name: "Podcast", instrument: "Voice", description: "The primal instrument—raw, unedited, direct.", image: "/podcast.jpeg" },
  { name: "Magazine", instrument: "The Written Verse", description: "Capturing fleeting thoughts into lasting resonance.", image: "/magazine.png" },
  { name: "Design", instrument: "Visual Harmony", description: "The unspoken notes that give shape to feeling.", image: "/design.png" },
  { name: "Networking", instrument: "Rhythm", description: "Every connection is a beat, building the tempo.", image: "/networking.jpeg" },
  { name: "Editing", instrument: "The Stage", description: "Where the symphony is performed live.", image: "/editing.jpeg" },
  { name: "Development", instrument: "Resonance", description: "The medium that carries the sound further.", image: "/development.jpeg", bgPosition: "bg-left" },
];
