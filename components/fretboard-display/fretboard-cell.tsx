import React, { FC, MouseEvent, useCallback, useMemo } from "react";
import styles from "./fretboard-view.module.css";
import { getInterval, getNoteName } from "@/lib/music-theory-utils";

interface FretCellProps {
  stringIndex: number;
  fretIndex: number;
  openString: string;
  isSelected: boolean;
  onSelect: (str: number, fret: number) => void;
  displayMode?: "none" | "note" | "interval"; // New prop to control display mode
  scaleRoot?: string; // Optional root note for scale-based intervals,
}

const FretCell: FC<FretCellProps> = React.memo(
  ({
    stringIndex,
    fretIndex,
    openString,
    isSelected,
    onSelect,
    displayMode = "none",
    scaleRoot = "C",
  }) => {
    const handleClick = useCallback(
      (e: MouseEvent) => {
        e.preventDefault();
        onSelect(stringIndex, fretIndex);
      },
      [stringIndex, fretIndex, onSelect],
    );

    const noteName = useMemo(
      () => getNoteName(openString, fretIndex),
      [openString, fretIndex],
    );
    const interval = useMemo(
      () => getInterval(noteName, scaleRoot),
      [noteName, scaleRoot],
    );

    const displayText = useMemo(() => {
      if (displayMode === "none") return ""; // No display
      if (displayMode === "note") return noteName;
      if (displayMode === "interval" && scaleRoot !== "") return interval;
      return ""; // Default case
    }, [displayMode, noteName, interval]);

    const className = isSelected
      ? `${styles.cell} ${styles.selected}`
      : styles.cell;

    return (
      <div
        role="button"
        aria-label={`String ${stringIndex + 1}, Fret ${fretIndex}`}
        className={className}
        onClick={handleClick}
      >
        {displayText}
      </div>
    );
  },
);

export default FretCell;
