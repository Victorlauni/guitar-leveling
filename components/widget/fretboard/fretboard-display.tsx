import React from "react";
import FretboardCell from "./fretboard-cell";
import FretboardString from "./fretboard-string";

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
  return (
    <div className="border-2 border-gray-300 rounded-lg p-4">
      <div className="grid grid-cols-1 gap-0">
        {Array.from({ length: numStrings }, (_, stringIndex) => (
          <div key={stringIndex} className="flex items-stretch">
            <div className="w-16 text-center font-semibold">
              {tuning[stringIndex]}
            </div>
            <FretboardString numFrets={numFrets} tuning={tuning[stringIndex]} />
          </div>
        ))}
      </div>
      <div className=""></div>
    </div>
  );
}
