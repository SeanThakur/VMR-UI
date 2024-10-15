"use client";

import React, { Fragment } from "react";
import PDFAnnotationTools from "./PDFAnnotation/AnnotationTool";
import PurchaseOption from "./PurchaseOption";
import ReportForm from "./ReportForm";
import RepoBanner from "./RepoBanner";
import InsightsConfig from "./InsightsConfig/Index";
import TestimonialBanner from "./TestimonialBanner";
import { useTabStore } from "@/store/store";
import Infographics from "./Infographics";

const PDFViewer = () => {
  const { selectPdfViewer, setActiveTab } = useTabStore();

  const handleBookClick = () => {
    selectPdfViewer(false);
    setActiveTab("Reports");
  };
  return (
    <Fragment>
      <div className="px-4">
        <p className="text-[#0000EE] text-[16px] font-light font-roboto-condensed pt-6 pb-8">
          <span className="underline cursor-pointer" onClick={handleBookClick}>
            Home {">"} Reports {">"} Data Center & Networking
          </span>{" "}
          {">"}{" "}
          <span className="font-normal">
            Global Treasury And Risk Management Software Market
          </span>
        </p>
        <p className="text-black text-[32px] font-medium pb-8 font-roboto-serif">
          Sample Qualitative Report
        </p>
        <div className="flex flex-row items-start justify-between gap-10 h-[726px]">
          <div className="w-[65%] h-full">
            <PDFAnnotationTools />
          </div>
          <div className="w-[35%] mr-6 flex flex-col items-start justify-between fill-available">
            <PurchaseOption />
            <ReportForm />
          </div>
        </div>
        <RepoBanner />
        <InsightsConfig />
        <TestimonialBanner />
        <Infographics />
      </div>
      <div className="bg-[#3B4ACC] w-full h-[96px]" />
    </Fragment>
  );
};

export default PDFViewer;
