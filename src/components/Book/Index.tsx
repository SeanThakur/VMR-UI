import { useTabStore } from "@/store/store";
import Image from "next/image";
import React, { Fragment } from "react";
import TableOfContent from "./TableOfContent";
import BarChartComponent from "../BarChartComponent";
import PieChartComponent from "../PieChartComponent";
import MarketSplitByType from "../MarketSplitByType";
import MarketValueByRegion from "../MarketValueByRegion";
import KeyPlayersItem from "./KeyPlayersItem";
import {
  categoriesItem,
  keyPlayersItemData,
  relatedReports,
} from "@/utils/data";
import MarketEstimate from "../MarketEstimate";
import RelatedReportItem from "../Home/Reports/RelatedReports/RelatedReportItem";
import CategoresItem from "../Home/Reports/Categories/CategoresItem";

const Book = () => {
  const { selectBook, selectPdfViewer } = useTabStore();

  const handleBookClick = () => {
    selectBook(false);
  };

  const onViewReport = () => {
    selectPdfViewer(true);
  };

  return (
    <Fragment>
      <div className="bg-[#f0f0f0] min-h-screen mt-8 px-4 sm:px-8 lg:px-16">
        <p className="text-[#0000EE] text-[16px] font-light font-roboto-condensed">
          <span className="underline cursor-pointer" onClick={handleBookClick}>
            Home {">"} Reports {">"} Data Center & Networking
          </span>{" "}
          {">"} Global Treasury And Risk Management Software Market
        </p>
        <div className="flex flex-row items-center justify-between my-8">
          <p className="text-black text-[32px] font-medium w-[60%]">
            Global Treasury And Risk Management Software Market Size, Forecast &
            Trends (2030)
          </p>
          <div className="flex flex-row items-center gap-6">
            <button
              className="px-4 py-2 text-[#0DAFBF] bg-white border border-[#0DAFBF] rounded-[5px] uppercase font-normal font-roboto-condensed text-[14px] flex flex-row items-center"
              onClick={onViewReport}
            >
              <div className="w-[18px] h-[18px] mr-2">
                <Image
                  src="/icons/pdf-open.svg"
                  alt="enter"
                  width={18}
                  height={18}
                />
              </div>
              view pdf report
            </button>
            <button className=" px-4 py-2 text-white bg-[#0DAFBF] rounded-[5px] uppercase font-normal text-[14px] flex flex-row items-center font-roboto-condensed">
              <div className="w-[18px] h-[18px] mr-2">
                <Image
                  src="/icons/file-download.svg"
                  alt="enter"
                  width={18}
                  height={18}
                />
              </div>
              download report
            </button>
          </div>
        </div>
        <div className="flex flex-row mb-24">
          <div className="w-[70%] flex flex-row gap-12">
            <div className="relative w-[167px] h-[231px] mb-3 shadow-saved-report">
              <Image
                src="/images/BookDetails1.png"
                alt="book"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-black text-[18px] font-light flex flex-col gap-4 mr-12 w-[80%]">
              <p>
                The Advanced Materials market within the Electronics &
                Semiconductors industry is a rapidly evolving sector, projected
                to reach a value of USD 112.7 billion by 2032, growing at a
                Compound Annual Growth Rate (CAGR) of 6.27% from 2023 to 2032.
              </p>
              <p>
                This market focuses on developing and utilizing materials with
                superior properties to improve the performance, efficiency, and
                functionality of electronic devices and systems.
              </p>
              <p>
                Key areas of focus include the development of polymers, metals &
                alloys, glasses, composites, and ceramics tailored for use in a
                wide range of applications including healthcare, automotive,
                aerospace, electricals & electronics, industrial, and power
                sectors​.
              </p>
            </div>
          </div>
          <div className="flex-grow bg-white shadow-xl shadow-gray-300 rounded-lg p-6 border-t-4 border-[#3B4ACC]">
            <h2 className="font-normal text-[12px] leading-[14.06px] mb-2 text-[#7F7F7F] uppercase font-roboto-condensed">
              Report Details
            </h2>
            <p className="font-normal text-[12px] leading-[14.06px] mb-2 text-black font-roboto-condensed">
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
                  <span className="w-[65%] text-[12px]">PDF, PPTX, PNG</span>
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
                  <span className="w-[65%] text-[12px] text-black">6.27%</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-normal text-[#7F7F7F] text-[12px]">
                    Segments:
                  </span>
                  <ul className="w-[65%] pl-4 list-disc">
                    <li>
                      <span className="text-[12px] text-black">By Type</span>{" "}
                      <span className="text-[10px] text-[#7F7F7F]">
                        (USA-sourced, South America-sourced, Australia-sourced)
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
        </div>
        <div className="flex flex-row items-center justify-between mb-6">
          <p className="text-black text-[26px] font-normal">
            TABLE OF CONTENTS
          </p>
          <button className="px-4 py-2 text-[#0DAFBF] bg-white border border-[#0DAFBF] rounded-[5px] uppercase font-normal text-[14px] flex flex-row items-center font-roboto-condensed">
            <div className="w-[18px] h-[18px] mr-2">
              <Image
                src="/icons/info-filled.svg"
                alt="enter"
                width={18}
                height={18}
              />
            </div>
            download research methodology
          </button>
        </div>
        <div className="mb-14">
          <TableOfContent />
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
        <div className="my-12">
          <p className="text-black text-[26px] font-normal uppercase pb-8">
            KEY PLAYERS
          </p>
          <div className="mt-16">
            <div className="flex flex-row items-center justify-between">
              <div className="grid grid-cols-3 gap-8 w-full">
                {keyPlayersItemData.map((data, idx) => (
                  <KeyPlayersItem
                    key={idx}
                    image={data.image}
                    title={data.title}
                  />
                ))}
              </div>
              <div className="w-[26px] h-[26px] cursor-pointer">
                <Image
                  src="/icons/arrow-right.svg"
                  alt="arrow-right"
                  width={26}
                  height={26}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <div className="flex flex-row items-center justify-between">
            <p className="text-black text-[26px] font-normal uppercase">
              CHARTS & FIGURES
            </p>
            <button
              type="submit"
              className="mt-8 px-4 py-2 text-[#0DAFBF] bg-white border border-[#0DAFBF] rounded-[5px] uppercase font-normal text-[14px] flex flex-row items-center"
            >
              <div className="w-[20px] h-[20px] mr-2">
                <Image
                  src="/icons/view-all.svg"
                  alt="enter"
                  width={20}
                  height={20}
                />
              </div>
              View All Charts
            </button>
          </div>
          <div className="flex flex-col pb-6 md:flex-row mt-10">
            <div className="w-full md:w-3/5 rounded-lg flex flex-col">
              <MarketEstimate />
            </div>
            <div className="w-full md:w-2/5 rounded-lg flex flex-col space-y-8 md:ml-8">
              <div className="flex-grow w-full">
                <BarChartComponent />
              </div>
              <div className="flex-grow w-full">
                <PieChartComponent />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[5px] bg-[#E8E8E8] rounded-[3px] my-16"></div>
        <div className="text-[26px] text-black font-light mb-6">
          Related Reports
        </div>
        <div className="relative w-full bg-[#0DAFBF1A] shadow-related-report rounded-lg overflow-x-scroll flex space-x-8 px-4 pt-2">
          {relatedReports.map((book, idx) => (
            <RelatedReportItem
              key={idx}
              image={book.image}
              title={book.title}
            />
          ))}
        </div>
        <div className="my-8">
          <div className="flex flex-row items-center justify-between">
            <p className="text-[26px] text-black font-light mb-6">
              RELATED CATEGORIES
            </p>
            <p className="underline text-right font-light font-black text-[18px] cursor-pointer my-10">
              View 184 reports
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 mb-6">
            {categoriesItem.slice(0, 3).map((item, idx) => (
              <CategoresItem key={idx} title={item.title} image={item.image} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#3B4ACC] w-full h-[96px]" />
    </Fragment>
  );
};

export default Book;
