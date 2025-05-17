import { create } from "zustand";

type State = {
  tuning: string[];
  fretboard_lower_bound: number;
  fretboard_upper_bound: number;
  selected_fret: (number | null)[];
  selected_string_order: number[];
}

type Actions = {
  setTuning: (tuning: string[]) => void;
  setFretboardLowerBound: (lowerBound: number) => void;
  setFretboardUpperBound: (upperBound: number) => void;
  setSelectedFret: (string_index: number, fret: number) => void;
  resetFretboard: () => void;
}

export const useFretboard = create<State & Actions>((set) => ({
  tuning: ["E", "A", "D", "G", "B", "E"],
  fretboard_lower_bound: 0,
  fretboard_upper_bound: 24,
  selected_fret: Array(6).fill(null),
  selected_string_order: [],
  setTuning: (tuning) => set({ tuning: tuning, selected_fret: Array(tuning.length).fill(null) }),
  setFretboardLowerBound: (lowerBound) => set({ fretboard_lower_bound: lowerBound }),
  setFretboardUpperBound: (upperBound) => set({ fretboard_upper_bound: upperBound }),
  setSelectedFret: (string_index, fret) => {
    set((state) => {
      const selectedFret = [...state.selected_fret];
      if (selectedFret[string_index] === fret) {
        selectedFret[string_index] = null; // Deselect if already selected
      } else {
        selectedFret[string_index] = fret; // Select the fret
      }
      return { selected_fret: selectedFret };
    })
  },
  resetFretboard: () => set((state) => ({ selected_fret:  Array(state.tuning.length).fill(null)})),
}));