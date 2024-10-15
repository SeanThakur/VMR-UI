import { create } from "zustand";

interface TabState {
  activeTab: string;
  bookSelected: boolean;
  pdfViewerSelected: boolean;
  setActiveTab: (tab: string) => void;
  selectBook: (selected: boolean) => void;
  selectPdfViewer: (selected: boolean) => void;
}

export const useTabStore = create<TabState>((set) => ({
  activeTab: "Reports",
  bookSelected: false,
  pdfViewerSelected: false,
  setActiveTab: (tab: string) => set(() => ({ activeTab: tab })),
  selectBook: (selected) => set({ bookSelected: selected }),
  selectPdfViewer: (selected) =>
    set({ pdfViewerSelected: selected, activeTab: "Insights" }),
}));
