const NOTE_SEQUENCE = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

const intervals = [
  "R",
  "m2",
  "M2",
  "m3",
  "M3",
  "P4",
  "TT",
  "P5",
  "m6",
  "M6",
  "m7",
  "M7",
  "P8",
];

export const getNoteName = (openString: string, fret: number): string => {
  const startIndex = NOTE_SEQUENCE.indexOf(openString);
  if (startIndex < 0) return "Unknown";
  const noteIndex = (startIndex + fret) % NOTE_SEQUENCE.length;
  return NOTE_SEQUENCE[noteIndex];
};

export const getInterval = (note: string, root: string): string => {
  const rootIndex = NOTE_SEQUENCE.indexOf(root);
  const noteIndex = NOTE_SEQUENCE.indexOf(note);
  if (rootIndex < 0 || noteIndex < 0) return "Unknown";
  const intervalIndex =
    (noteIndex - rootIndex + NOTE_SEQUENCE.length) % NOTE_SEQUENCE.length;
  return intervals[intervalIndex] || "Unknown";
};
