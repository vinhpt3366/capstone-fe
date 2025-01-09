import { create } from 'zustand';

interface GlobalLoadingState {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

const useGlobalLoadingStore = create<GlobalLoadingState>((set) => ({
  isLoading: false,
  setLoading: (isLoading) => set({ isLoading })
}));

export default useGlobalLoadingStore;
