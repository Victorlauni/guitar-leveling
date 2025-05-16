import React from "react";
import FretboardString from "./fretboard-string";

// TODO - Add number of frets display at the bottom of the fretboard
// TODO - Fix selection of first note (root note)
// TODO - Add a props to pop the state up to the parent component
// TODO - Add functionality of just showing part of the fretboard

type FretboardDisplayProps = {
  numStrings: number;
  numFrets: number;
  tuning: string[];
};
export default function FretboardDisplay({
  numStrings = 6,
  numFrets = 24,
  tuning = ["E", "A", "D", "G", "B", "E"],
}: FretboardDisplayProps) {
  const [selectedFrets, setSelectedFrets] = React.useState<(number | null)[]>(
    Array(numStrings).fill(null)
  );
  const useFret = (stringNum: number) => {
    return (fretInd: number | null) => {
      const newSelectedFrets = [...selectedFrets];
      if (fretInd === newSelectedFrets[stringNum]) {
        newSelectedFrets[stringNum] = null;
      } else {
        newSelectedFrets[stringNum] = fretInd;
      }
      setSelectedFrets(newSelectedFrets);
    };
  };

  return (
    <div className="border-2 border-gray-300 rounded-lg p-4">
      <div className="grid grid-cols-1 gap-0">
        {Array.from({ length: numStrings }, (_, stringIndex) => (
          <div key={stringIndex} className="flex items-stretch">
            <div className="w-16 text-center font-semibold">
              {tuning[stringIndex]}
            </div>
            <FretboardString
              numFrets={numFrets}
              tuning={tuning[stringIndex]}
              useFret={useFret(stringIndex)}
              selectedFret={selectedFrets[stringIndex]}
            />
          </div>
        ))}
      </div>
      <div>
        {selectedFrets.map((note, index) => (
          <div key={index} className="text-center">
            {note !== null ? (
              <span className="text-green-500">{note}</span>
            ) : (
              <span className="text-gray-500">No note selected</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
