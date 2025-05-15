export function getNoteName(stringRoot: string, fretNumber: number): string {
  const noteNames: string[] = [
    'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'
  ];

  
  const rootNote = noteNames.indexOf(stringRoot);
  const noteIndex = (rootNote + fretNumber) % noteNames.length;
  
  return noteNames[noteIndex];
}