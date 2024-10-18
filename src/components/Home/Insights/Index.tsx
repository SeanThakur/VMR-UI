import React, { Fragment } from "react";
import PieChartComponent from "@/components/PieChartComponent";
import BarChartComponent from "@/components/BarChartComponent";
import MarketEstimate from "@/components/MarketEstimate";
import MarketSplitByType from "@/components/MarketSplitByType";
import SearchInput from "../../SearchInput";
import MarketValueByRegion from "@/components/MarketValueByRegion";

const Insights = () => {
  return (
    <Fragment>
      <SearchInput />
      <div className="bg-[#f0f0f0] min-h-screen pt-8 px-4 sm:px-8 lg:px-16">
        <div className="container mx-auto">
          <p className="text-md sm:text-[32px] font-bold text-black font-roboto-serif text-center sm:text-left mb-4">
            Global Treasury And Risk Management Software Market
          </p>

          <div className="flex flex-col pb-6 md:flex-row mt-10">
            <div className="w-full md:w-3/5 rounded-lg flex flex-col">
              <MarketEstimate />
            </div>

            <div className="w-full md:w-2/5 rounded-lg flex flex-col space-y-8 md:ml-8">
              <div className="flex-grow bg-white shadow-xl shadow-gray-300 rounded-lg p-6 border-t-4 border-[#3B4ACC]">
                <h2 className="font-normal text-[12px] leading-[14.06px] mb-2 text-[#7F7F7F] uppercase">
                  Report Details
                </h2>
                <p className="font-normal text-[12px] leading-[14.06px] mb-2 text-black">
                  Global Treasury And Risk Management Software Market
                </p>
                <div className="h-[0.5px] w-[90%] bg-gray-300 my-4"></div>
                <div className="w-[90%]">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span className="font-normal text-[#7F7F7F] text-[12px]">
                        Pages:
                      </span>
                      <span className="w-[65%] text-[12px] text-black">
                        202 Pages
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-normal text-[#7F7F7F] text-[12px]">
                        Format:
                      </span>
                      <span className="w-[65%] text-[12px]">
                        PDF, PPTX, PNG
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-normal text-[#7F7F7F] text-[12px]">
                        Language:
                      </span>
                      <span className="w-[65%] text-[12px] text-black">
                        English
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-normal text-[#7F7F7F] text-[12px]">
                        Published:
                      </span>
                      <span className="w-[65%] text-[12px] text-black">
                        February 2024
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-normal text-[#7F7F7F] text-[12px]">
                        Access Type:
                      </span>
                      <span className="w-[65%] text-[12px] text-black flex flex-col">
                        Enterprise User
                        <span className="text-[#7F7F7F]">
                          (downloadable PDF + Insights)
                        </span>
                      </span>
                    </li>
                    <div className="h-[0.5px] bg-gray-300 my-4"></div>
                    <li className="flex justify-between">
                      <span className="font-normal text-[#7F7F7F] text-[12px]">
                        Market Value:
                      </span>
                      <span className="w-[65%] text-[12px] text-black">
                        $112.7 Billion{" "}
                        <span className="text-[#7F7F7F]">(2023)</span>
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-normal text-[#7F7F7F] text-[12px]">
                        CAGR:
                      </span>
                      <span className="w-[65%] text-[12px] text-black">
                        6.27%
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-normal text-[#7F7F7F] text-[12px]">
                        Segments:
                      </span>
                      <ul className="w-[65%] pl-4 list-disc">
                        <li>
                          <span className="text-[12px] text-black">
                            By Type
                          </span>{" "}
                          <span className="text-[10px] text-[#7F7F7F]">
                            (USA-sourced, South America-sourced,
                            Australia-sourced)
                          </span>
                        </li>
                        <li>
                          <span className="text-[12px] text-black">
                            By Application
                          </span>{" "}
                          <span className="text-[10px] text-[#7F7F7F]">
                            (Scientific Research, Industrial Production)
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-grow w-full">
                <PieChartComponent />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 mb-8">
          <h1 className="text-xl sm:text-2xl font-light uppercase mb-4 sm:mb-0">
            Quantitative Insights
          </h1>
          <span className="underline text-md font-normal cursor-pointer">
            View all
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="col-span-1">
            <BarChartComponent />
          </div>
          <div className="col-span-1">
            <PieChartComponent />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="col-span-1">
            <MarketSplitByType />
          </div>
          <div className="col-span-1">
            <MarketSplitByType />
          </div>
          <div className="col-span-1">
            <MarketValueByRegion />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Insights;
