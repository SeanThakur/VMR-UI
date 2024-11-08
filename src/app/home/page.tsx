"use client";

import Book from "@/components/Book/Index";
import CategoriesListing from "@/components/Categories/Index";
import Consultations from "@/components/Home/Consultations/Index";
import Insights from "@/components/Home/Insights/Index";
import Organizations from "@/components/Home/Organizations/Index";
import Reports from "@/components/Home/Reports/Index";
import Navbar from "@/components/Navbar";
import PDFViewer from "@/components/PDFViewer/Index";
import { useTabStore } from "@/store/store";
import { Fragment, useEffect } from "react";

const componentMap: { [key: string]: React.FC } = {
  Reports: Reports,
  Insights: Insights,
  Organizations: Organizations,
  Consultations: Consultations,
};

function getActiveComponent(
  activeTab: string,
  bookSelected: boolean,
  pdfViewerSelected: boolean,
  categoriesSelected: boolean
) {
  if (bookSelected && activeTab === "Reports") {
    return <Book />;
  }
  if (categoriesSelected && activeTab === "Reports") {
    return <CategoriesListing />;
  }
  if (pdfViewerSelected && activeTab === "Insights") {
    return <PDFViewer />;
  }
  const ActiveComponent = componentMap[activeTab];
  return ActiveComponent ? <ActiveComponent /> : null;
}

export default function Home() {
  const { activeTab, bookSelected, pdfViewerSelected, categoriesSelected } =
    useTabStore();

  useEffect(() => {
    // Scroll to top whenever any of these state values change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab, bookSelected, pdfViewerSelected, categoriesSelected]);

  return (
    <Fragment>
      <Navbar />
      {getActiveComponent(
        activeTab,
        bookSelected,
        pdfViewerSelected,
        categoriesSelected
      )}
    </Fragment>
  );
}
