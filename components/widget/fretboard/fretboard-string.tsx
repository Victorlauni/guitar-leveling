import React from "react";
import FretboardCell from "./fretboard-cell";
import { getNoteName } from "@/lib/music-theory";

type FretboardStringProps = {
  numFrets: number;
  tuning: string;
  useNote?: (note: string | null) => void;
};
export default function FretboardString({
  numFrets,
  tuning,
  useNote,
}: FretboardStringProps) {
  const handleClick = (fretIndex: number) => {
    if (useNote) {
      useNote(getNoteName(tuning, fretIndex));
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
