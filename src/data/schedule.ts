export type EventSlot = {
  time: string;
  event: string;
  venue: string;
  movement?: string; // Links to the emotion theme
  registerLink?: string;
};

export const WorkshopDay1: EventSlot[] = [
  { time: "10:00–11:30 AM", event: "Web Workshop", venue: "Lab 1", movement: "Resonance", registerLink: "https://forms.gle/3ZFm2dhYGeyg3nHu5" },
  { time: "10:00–11:30 AM", event: "Writing Workshop", venue: "Classroom", movement: "The Written Verse", registerLink: "https://forms.gle/jUQF5BPU6ptzJ9sc9" },
];

export const WorkshopDay2: EventSlot[] = [
  { time: "10:00–11:30 AM", event: "Podcast Workshop", venue: "Kaveri Auditorium / Partha Auditorium", movement: "Voice", registerLink: "https://forms.gle/Qcm13nVnvZg5RT1Q6" },
  { time: "10:00–11:30 AM", event: "Mandala Art Workshop", venue: "Classroom", movement: "Visual Harmony", registerLink: "https://forms.gle/7vWYxFvwkqNphmcr9" },
  { time: "10:00–11:30 AM", event: "Editing Workshop", venue: "Lab 1", movement: "Visual Harmony", registerLink: "https://forms.gle/7vHAeJqnN9wvYjmk7" },
];

export const MainEventDay: EventSlot[] = [
  { time: "10:00 AM - 12:00 PM", event: "Emotion Premier League (EPL)", venue: "Parthasarathy Auditorium", movement: "Value", registerLink: "https://forms.gle/TAKCeniUyERDxYRh6" },
  { time: "10:00 AM - 12:00 PM", event: "Degrees of Emotion", venue: "Classroom", movement: "Intensity", registerLink: "https://forms.gle/6AH8BUR6yKbduH78A" },
  { time: "10:00 AM - 12:00 PM", event: "Kalaiyugam 2.0 — Speed Networking", venue: "Classroom", movement: "Belonging", registerLink: "https://forms.gle/sHoKHoJf9nsr6oL27" },
  { time: "10:00 AM - 12:00 PM", event: "Hear Me Out", venue: "Lab 1", movement: "Vulnerability", registerLink: "https://forms.gle/s6gP6Ph3VkGwHFQ18" },
  { time: "10:00 AM - 12:00 PM", event: "Editing Competition", venue: "Lab 2", movement: "Catharsis", registerLink: "https://forms.gle/eetE8zCPHBdj5LzU9" },
  { time: "10:00 AM - 12:00 PM", event: "Illusion to Intuition", venue: "Lab 3", movement: "Wonder", registerLink: "https://forms.gle/6KJb8CH95Eiaf7pY7" },
];
