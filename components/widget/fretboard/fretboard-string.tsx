import React from "react";
import FretboardCell from "./fretboard-cell";
import { useFretboard } from "@/hooks/use-fretboard";

type FretboardStringProps = {
  stringIndex: number;
};

export default function FretboardString({ stringIndex }: FretboardStringProps) {
  const fretboardUpperBound = useFretboard(
    (state) => state.fretboard_upper_bound
  );
  const fretboardLowerBound = useFretboard(
    (state) => state.fretboard_lower_bound
  );
  const clickFunction = useFretboard((state) => state.setSelectedFret);
  const handleClick = (fretIndex: number) => {
    clickFunction(stringIndex, fretIndex);
  };
  return (
    <div className="flex flex-grow border-gray-300 items-stretch">
      {Array.from(
        { length: fretboardUpperBound - fretboardLowerBound },
        (_, fretIndex) => (
          <FretboardCell
            key={fretIndex}
            isFirst={fretIndex === 0}
            isLast={fretboardUpperBound - 1 <= fretIndex}
            onClick={() => handleClick(fretIndex + fretboardLowerBound)}
            isSelected={
              useFretboard((state) => state.selected_fret[stringIndex]) ===
              fretIndex
            }
            isMuted={
              useFretboard((state) => state.selected_fret[stringIndex]) ===
                null && fretIndex === 0
            }
          />
        )
      )}
    </div>
  );
}
