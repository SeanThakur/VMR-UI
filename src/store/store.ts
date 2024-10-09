import { create } from "zustand";

interface TabState {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const useTabStore = create<TabState>((set) => ({
  activeTab: "Reports",
  setActiveTab: (tab: string) => set(() => ({ activeTab: tab })),
}));
