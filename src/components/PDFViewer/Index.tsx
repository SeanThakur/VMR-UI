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
import { useRouter } from "next/navigation";

const PDFViewer = () => {
  const { setActiveTab } = useTabStore();
  const router = useRouter();

  const handleBookClick = () => {
    setActiveTab("Reports");
    router.push("/client");
  };
  return (
    <Fragment>
      <div className="px-4">
        <p className="text-[#0000EE] text-[14px] md:text-[16px] font-light font-roboto-condensed pt-6 pb-8">
          <span className="underline cursor-pointer" onClick={handleBookClick}>
            Home {">"} Reports {">"} Data Center & Networking
          </span>{" "}
          {">"}{" "}
          <span className="font-normal">
            Global Treasury And Risk Management Software Market
          </span>
        </p>
        <p className="text-black text-[18px] md:text-[32px] font-medium pb-8 font-roboto-serif">
          Sample Qualitative Report
        </p>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 h-auto lg:h-[726px]">
          <div className="w-full lg:w-[65%] h-[500px] lg:h-full">
            <PDFAnnotationTools />
          </div>
          <div className="w-full lg:w-[35%] mb-10 mr-6 flex flex-col items-start justify-between fill-available">
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
