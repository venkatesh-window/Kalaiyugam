import * as React from "react";

export type IconProps = React.SVGProps<SVGSVGElement>;

export const VoiceIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2v20M8 6v12M16 8v8M4 10v4M20 11v2" />
  </svg>
);

export const WrittenVerseIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    <path d="M8 7h6M8 11h8" />
  </svg>
);

export const VisualHarmonyIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="9" cy="9" r="5" />
    <circle cx="15" cy="15" r="5" />
    <circle cx="15" cy="9" r="5" />
    <circle cx="9" cy="15" r="5" />
  </svg>
);

export const RhythmIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
  </svg>
);

export const StageIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 20h20M5 20v-4a7 7 0 0 1 14 0v4M12 4v12" />
    <circle cx="12" cy="4" r="2" />
  </svg>
);

export const ResonanceIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="12" r="6" strokeDasharray="4 4" />
    <circle cx="12" cy="12" r="10" strokeDasharray="4 4" />
  </svg>
);
