import { create } from "zustand";

interface TabState {
  activeTab: string;
  bookSelected: boolean;
  setActiveTab: (tab: string) => void;
  selectBook: (selected: boolean) => void;
}

export const useTabStore = create<TabState>((set) => ({
  activeTab: "Reports",
  bookSelected: false,
  setActiveTab: (tab: string) => set(() => ({ activeTab: tab })),
  selectBook: (selected) => set({ bookSelected: selected }),
}));
