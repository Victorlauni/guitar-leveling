import React from "react";
import FretboardCell from "./fretboard-cell";
import { getNoteName } from "@/lib/music-theory";

type FretboardStringProps = {
  numFrets: number;
  tuning: string;
  useFret?: (fret: number | null) => void;
  selectedFret?: number | null;
};
export default function FretboardString({
  numFrets,
  tuning,
  useFret,
}: FretboardStringProps) {
  const handleClick = (fretIndex: number) => {
    if (useFret) {
      useFret(fretIndex);
    }
  };
  return (
    <div className="flex flex-grow border-gray-300 items-stretch">
      {Array.from({ length: numFrets }, (_, fretIndex) => (
        <FretboardCell
          key={fretIndex}
          isLast={numFrets - 1 <= fretIndex}
          onClick={() => handleClick(fretIndex)}
        />
      ))}
    </div>
  );
}
