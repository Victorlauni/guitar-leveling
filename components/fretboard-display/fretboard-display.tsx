import React, { useState, useCallback, FC, useMemo } from "react";
import styles from "./fretboard-view.module.css";
import FretCell from "./fretboard-cell";
import { getNoteName } from "@/lib/music-theory-utils";
import { get } from "http";

// Standard tuning for 6-string guitar, low E at index 0
const STANDARD_TUNING = ["E", "A", "D", "G", "B", "E"] as const;
type StringName = (typeof STANDARD_TUNING)[number];

interface FretboardViewProps {
  strings?: ReadonlyArray<StringName>;
  frets?: number;
  startFromFret?: number; // New prop to skip the first n frets
}

const FretboardView: FC<FretboardViewProps> = ({
  strings = STANDARD_TUNING,
  frets = 24,
  startFromFret = 0, // Default to 0 if not provided
}) => {
  // State for selected cells
  const [selectedCells, setSelectedCells] = useState<
    { string: number; fret: number }[]
  >([]);

  // Handler for cell click
  const handleSelect = useCallback(
    (stringIndex: number, fretIndex: number) => {
      setSelectedCells((prev) => {
        const isFretAlreadySelected = prev.some(
          (cell) => cell.string === stringIndex && cell.fret === fretIndex,
        );
        if (isFretAlreadySelected) {
          // If the fret is already selected, remove it from the selection
          return prev.filter(
            (cell) => !(cell.string === stringIndex && cell.fret === fretIndex),
          );
        }

        // Check if the string is already selected
        const isStringAlreadySelected = prev.some(
          (cell) => cell.string === stringIndex,
        );
        if (isStringAlreadySelected) {
          // If the string is already selected, replace the selection for that string
          return prev.map((cell) =>
            cell.string === stringIndex
              ? { string: stringIndex, fret: fretIndex }
              : cell,
          );
        } else {
          // Otherwise, add the new selection if the max selection count is not exceeded
          if (prev.length < strings.length) {
            return [...prev, { string: stringIndex, fret: fretIndex }];
          }
          return prev; // Do nothing if max selection count is reached
        }
      });
    },
    [strings.length],
  );

  const getRootNote = useMemo(() => {
    if (selectedCells.length <= 0) return undefined;
    const rootCell = selectedCells[0];
    return getNoteName(strings[rootCell.string], rootCell.fret);
  }, [selectedCells]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.fretboard}>
        {strings.map((openString, stringIndex) => (
          <div key={stringIndex} className={styles.stringRow}>
            {Array.from({ length: frets - startFromFret + 1 }).map(
              (_, fretIndex) => {
                const actualFretIndex = fretIndex + startFromFret; // Adjust for skipped frets
                const isSelected = selectedCells.some(
                  (cell) =>
                    cell.string === stringIndex &&
                    cell.fret === actualFretIndex,
                );
                return (
                  <FretCell
                    key={actualFretIndex}
                    stringIndex={stringIndex}
                    fretIndex={actualFretIndex}
                    openString={openString}
                    isSelected={isSelected}
                    onSelect={handleSelect}
                    displayMode="interval" // Change to "interval" for interval display
                    scaleRoot={getRootNote} // Use the note name as the root for intervals
                  />
                );
              },
            )}
          </div>
        ))}
      </div>
      {selectedCells.length > 0 && (
        <div className={styles.infoPanel}>
          <strong>Selected Cells:</strong>
          <ul>
            {selectedCells.map((cell, index) => (
              <li key={index}>
                String {cell.string + 1}, Fret {cell.fret}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FretboardView;
