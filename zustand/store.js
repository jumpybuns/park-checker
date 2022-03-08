import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useDateStore = create(
  persist((set) => ({
    desiredDate: '',
    setDesiredDate: (desiredDate) => set({ desiredDate }),
    removeDesiredDate: () => set({}, true),
  }))
);
