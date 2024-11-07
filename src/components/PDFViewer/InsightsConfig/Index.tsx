import Image from "next/image";
import React, { Fragment } from "react";
import Filter from "./Filter";
import RelatedReports from "./RelatedReports";
import DidYouKnow from "./DidYouKnow";
import CountryComparision from "../Charts/CountryComparision";
import TabluarData from "../Charts/TabluarData";
import AnnualMarketShare from "../Charts/AnnualMarketShare";
import SegmentAnalysis from "../Charts/SegmentAnalysis";
import GrowingMarket from "../Charts/GrowingMarket";

const InsightsConfig = () => {
  return (
    <Fragment>
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        <div className="flex flex-col w-full lg:w-[75%] ">
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-0 justify-between items-start lg:items-center mt-4 mb-8">
            <h1 className="text-black text-[32px] font-medium font-roboto-serif">
              Quantitative Insights
            </h1>
            <span className="underline text-[18px] font-normal cursor-pointer font-inter">
              View all
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <CountryComparision />
              <TabluarData />
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              <AnnualMarketShare />
              <div className="flex w-full lg:w-[50%] flex-col items-start gap-8 flex-1">
                <SegmentAnalysis />
                <GrowingMarket />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-[30%] mr-6">
          <button className="px-4 py-4 mb-8 text-white bg-[#0DAFBF] rounded-[8px] font-medium text-[18px] flex flex-row items-center justify-center font-inter transform transition-transform duration-300 hover:-translate-y-1 hover:bg-[#0000EE] hover:text-white">
            <div className="w-[28px] h-[28px] mr-2">
              <Image
                src="/icons/unlocked.svg"
                alt="unlock"
                width={28}
                height={28}
              />
            </div>
            Unlock Quantitative Insights
          </button>
          <Filter />
          <RelatedReports />
          <DidYouKnow />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center py-12 w-full lg:w-[75%]">
        <p className="text-navbarBlue text-[16px] font-semibold underline cursor-pointer font-inter">
          view more
        </p>
        <div className="w-[18px] h-[18px] ml-1">
          <Image
            src="/icons/arrow-drop-down-blue.svg"
            alt="arrow"
            width={18}
            height={18}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default InsightsConfig;
