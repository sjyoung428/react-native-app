import { create } from "zustand";

interface TimerStore {
  time: number;
  setTime: (time: number) => void;
  reset: () => void;
}

export const useTimerStore = create<TimerStore>((set, get) => ({
  time: 10,
  setTime: (time) => set({ time }),
  reset: () => set({ time: get().time }),
}));
