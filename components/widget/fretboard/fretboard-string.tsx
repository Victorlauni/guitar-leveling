import React from "react";
import FretboardCell from "./fretboard-cell";

type FretboardStringProps = {
  numFrets: number;
  tuning: string;
};
export default function FretboardString({
  numFrets,
  tuning,
}: FretboardStringProps) {
  return (
    <div className="flex flex-grow border-gray-300 items-stretch">
      {Array.from({ length: numFrets }, (_, fretIndex) => (
        <FretboardCell key={fretIndex} />
      ))}
    </div>
  );
}
