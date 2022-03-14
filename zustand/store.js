import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useDateStore = create(
  persist((set) => ({
    _desiredDate: '',
    setDesiredDate: (_desiredDate) => set({ _desiredDate }),
    oneParkEndDate: '',
    setOneParkEndDate: (oneParkEndDate) => set({ oneParkEndDate }),
    removeDesiredDate: () => set({}, true),
  }))
);
