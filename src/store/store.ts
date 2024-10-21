import { create } from "zustand";

interface TabState {
  activeTab: string;
  bookSelected: boolean;
  pdfViewerSelected: boolean;
  categoriesSelected: boolean;
  setActiveTab: (tab: string) => void;
  selectBook: (selected: boolean) => void;
  selectPdfViewer: (selected: boolean) => void;
  selectCategoriesListing: (selected: boolean) => void;
}

export const useTabStore = create<TabState>((set) => ({
  activeTab: "Reports",
  bookSelected: false,
  pdfViewerSelected: false,
  categoriesSelected: false,
  setActiveTab: (tab: string) => set(() => ({ activeTab: tab })),
  selectBook: (selected) => set({ bookSelected: selected }),
  selectCategoriesListing: (selected) => set({ categoriesSelected: selected }),
  selectPdfViewer: (selected) =>
    set({ pdfViewerSelected: selected, activeTab: "Insights" }),
}));
