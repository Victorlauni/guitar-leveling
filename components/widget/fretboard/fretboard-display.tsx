import React from "react";
import FretboardString from "./fretboard-string";
import { useFretboard } from "@/hooks/use-fretboard";
import FretboardFretNumber from "./fretboard-fret-number";

// TODO - implement cropping of the fretboard
export default function FretboardDisplay() {
  const tuning = useFretboard((state) => state.tuning);
  const numStrings = tuning.length;
  return (
    <div className="border-2 border-gray-300 rounded-lg p-4">
      <div className="grid grid-cols-1 gap-0">
        {Array.from({ length: numStrings }, (_, stringIndex) => (
          <div key={stringIndex} className="flex items-stretch">
            <div className="w-16 text-center font-semibold">
              {tuning[stringIndex]}
            </div>
            <FretboardString stringIndex={stringIndex} />
          </div>
        ))}
        <FretboardFretNumber />
      </div>
    </div>
  );
}
