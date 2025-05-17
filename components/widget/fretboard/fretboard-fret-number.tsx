import { useFretboard } from "@/hooks/use-fretboard";
import React from "react";

export default function FretboardFretNumber() {
  const numberOfFrets = useFretboard((state) => state.fretboard_upper_bound);
  const fretNumberHighlight = [3, 5, 7, 9, 12, 15, 17, 19, 21];
  return (
    <div key="string_indicator" className="flex items-stretch">
      <div className="w-16" />
      <div className="flex flex-grow items-stretch">
        {Array.from({ length: numberOfFrets }, (_, fretIndex) => (
          <div
            key={fretIndex}
            className={`w-8 h-8 flex items-center justify-center ${
              !fretNumberHighlight.includes(fretIndex) ? "opacity-0" : ""
            }`}
          >
            {fretIndex}
          </div>
        ))}
      </div>
    </div>
  );
}
