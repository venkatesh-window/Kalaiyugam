export type EventSlot = {
  time: string;
  event: string;
  venue: string;
  movement?: string; // Links to the emotion theme
};

export const WorkshopDay1: EventSlot[] = [
  { time: "10:00–11:30 AM", event: "Web Workshop", venue: "Lab 1", movement: "Resonance" },
  { time: "10:00–11:30 AM", event: "Writing Workshop", venue: "Classroom", movement: "The Written Verse" },
];

export const WorkshopDay2: EventSlot[] = [
  { time: "10:00–11:30 AM", event: "Podcast Workshop", venue: "Kaveri Auditorium / Partha Auditorium", movement: "Voice" },
  { time: "10:00–11:30 AM", event: "Mandala Art Workshop", venue: "Classroom", movement: "Visual Harmony" },
  { time: "10:00–11:30 AM", event: "Editing Workshop", venue: "Lab 1", movement: "Visual Harmony" },
];

export const MainEventDay: EventSlot[] = [
  { time: "9:00–9:45 AM", event: "Inauguration", venue: "Parthasarathy Auditorium", movement: "Opening" },
  { time: "10:00 AM–12:00 PM", event: "Emotion Auction", venue: "Parthasarathy Auditorium", movement: "Value" },
  { time: "10:00 AM–12:00 PM", event: "Degrees of Emotion", venue: "Classroom", movement: "Intensity" },
  { time: "10:00 AM–12:00 PM", event: "Speed Networking", venue: "Classroom", movement: "Belonging" },
  { time: "10:00 AM–12:00 PM", event: "Hear Me Out", venue: "Lab 1", movement: "Vulnerability" },
  { time: "10:00 AM–12:00 PM", event: "Emotional Damage", venue: "Lab 2", movement: "Catharsis" },
  { time: "10:00 AM–12:00 PM", event: "Illusion to Intuition", venue: "Lab 3", movement: "Wonder" },
  { time: "1:00–3:00 PM", event: "Chief Guest Interaction, Winners' Felicitation & Filler Events", venue: "Parthasarathy Auditorium", movement: "Closing" },
];
