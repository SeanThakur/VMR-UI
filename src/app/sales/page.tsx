"use client";

import CategoresItem from "@/components/Home/Reports/Categories/CategoresItem";
import RelatedReportItem from "@/components/Home/Reports/RelatedReports/RelatedReportItem";
import CustomerTestimonials from "@/components/Sales/CustomerTestimonials/Index";
import SalesFAQS from "@/components/Sales/FAQs/Index";
import SalesNav from "@/components/Sales/SalesNav";
import TabComponent from "@/components/Sales/Tabs/TabComponent";
import { useTabStore } from "@/store/store";
import { categoriesItem, relatedReports } from "@/utils/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Sales = () => {
  const router = useRouter();
  const { setActiveTab } = useTabStore();

  const onReportView = () => {
    setActiveTab("Insights");
    router.push("/report-view");
  };
  return (
    <div className="flex flex-col fill-available w-full bg-cover bg-center">
      <SalesNav />
      <div
        className="h-full flex flex-col lg:flex-row items-start justify-between py-12 px-8 md:px-12 lg:px-24"
        style={{ backgroundImage: "url('/images/salesCover.png')" }}
      >
        <div className="flex flex-col w-full lg:w-[85%] mr-4">
          <div
            className="flex flex-row items-center mb-6 cursor-pointer"
            onClick={onReportView}
          >
            <div className="w-[18px] h-[18px] mr-2">
              <Image
                src="/icons/arrow-back-circle.svg"
                alt="enter"
                width={18}
                height={18}
              />
            </div>
            <p className="font-roboto-condensed font-light text-[14px] leading-[16px] text-black">
              Return to Report Description
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center md:items-start md:gap-0 md:flex-row">
            <div className="flex items-center justify-start lg:flex-none lg:items-start lg:justify-start lg:w-auto mr-8">
              <div className="relative w-[135px] h-[184px] shadow-saved-report">
                <Image
                  src="/images/BookDetails1.png"
                  alt="book"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start lg:justify-between">
              <p className="text-black text-[18px] lg:text-[32px] font-roboto-serif font-medium w-full leading-[34px] md:leading-[44px]">
                Global Treasury And Risk Management Software Market Size,
                Forecast & Trends (2023-2031) Report
              </p>
              <div className="flex flex-row items-center mt-2 md:mt-6 lg:mt-4 gap-2 lg:gap-12">
                <div className="flex flex-row items-center">
                  <span className="font-roboto-condensed font-light text-[14px] lg:text-[20px] leading-[28px] text-[#7F7F7F] mr-1">
                    Pages:
                  </span>
                  <span className="font-roboto-condensed font-light text-[14px] lg:text-[20px] leading-[28px] text-black">
                    202
                  </span>
                </div>
                <div className="flex flex-row items-center">
                  <span className="font-roboto-condensed font-light text-[14px] lg:text-[20px] leading-[28px] text-[#7F7F7F] mr-1">
                    Format:
                  </span>
                  <div className="flex flex-row items-center">
                    <div className="w-[28px] h-[28px] mr-1 cursor-pointer">
                      <Image
                        src="/icons/pdf.svg"
                        alt="enter"
                        width={28}
                        height={28}
                      />
                    </div>
                    <div className="w-[28px] h-[28px] mr-1 cursor-pointer">
                      <Image
                        src="/icons/ppt.svg"
                        alt="enter"
                        width={28}
                        height={28}
                      />
                    </div>
                    <div className="w-[28px] h-[28px] mr-1 cursor-pointer">
                      <Image
                        src="/icons/excel.svg"
                        alt="enter"
                        width={28}
                        height={28}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <span className="font-roboto-condensed font-light text-[14px] lg:text-[20px] leading-[28px] text-[#7F7F7F] mr-1">
                    Published:
                  </span>
                  <span className="font-roboto-condensed font-light text-[14px] lg:text-[20px] leading-[28px] text-black">
                    Feb 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-8 lg:mt-0 w-full lg:w-auto flex-col justify-center items-center">
          <div className="flex flex-row items-center gap-6 mb-6">
            <button className="px-4 py-2 text-[#0DAFBF] bg-white border border-[#0DAFBF] rounded-[5px] uppercase font-normal font-roboto-condensed text-[12px] md:text-[14px] flex flex-row items-center transform transition-transform duration-300 hover:-translate-y-1 hover:bg-[#0000EE] hover:border-0 hover:text-white">
              <div className="w-[18px] h-[18px] mr-2">
                <Image
                  src="/icons/file_preview.svg"
                  alt="enter"
                  width={18}
                  height={18}
                />
              </div>
              View Sample
            </button>
            <button className=" px-4 py-2 text-[#3B4ACC] bg-white border border-[#3B4ACC] rounded-[5px] uppercase font-normal text-[12px] md:text-[14px] flex flex-row items-center font-roboto-condensed transform transition-transform duration-300 hover:-translate-y-1 hover:bg-[#0DAFBF] hover:border-0 hover:text-white">
              <div className="w-[18px] h-[18px] mr-2">
                <Image
                  src="/icons/purple_download.svg"
                  alt="enter"
                  width={18}
                  height={18}
                />
              </div>
              download report
            </button>
          </div>
          <div className="flex-grow bg-white shadow-xl shadow-gray-300 rounded-lg p-4 border-t-4 border-[#3B4ACC]">
            <h2 className="font-normal text-[12px] leading-[14.06px] mb-2 text-[#7F7F7F] uppercase font-roboto-condensed">
              Report Details
            </h2>
            <div className="h-[0.5px] w-[100%] bg-gray-300 my-4"></div>
            <div className="w-[90%]">
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span className="font-normal font-roboto-condensed text-[#7F7F7F] text-[12px]">
                    Study Period:
                  </span>
                  <span className="w-[65%] font-roboto-condensed text-[12px] text-black">
                    2021-2031
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="font-normal font-roboto-condensed text-[#7F7F7F] text-[12px]">
                    Base Year:
                  </span>
                  <span className="w-[65%] font-roboto-condensed text-[12px]">
                    2024
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="font-normal font-roboto-condensed text-[#7F7F7F] text-[12px]">
                    Segments:
                  </span>
                  <ul className="w-[65%] pl-4 list-disc">
                    <li>
                      <span className="text-[12px] text-black font-roboto-condensed">
                        By Type
                      </span>{" "}
                      <span className="text-[10px] text-[#7F7F7F] font-roboto-condensed">
                        (USA-sourced, South America-sourced, Australia-sourced)
                      </span>
                    </li>
                    <li>
                      <span className="text-[12px] text-black font-roboto-condensed">
                        By Application
                      </span>{" "}
                      <span className="text-[10px] text-[#7F7F7F] font-roboto-condensed">
                        (Scientific Research, Industrial Production)
                      </span>
                    </li>
                    <li>
                      <span className="text-[12px] text-black font-roboto-condensed">
                        By Region
                      </span>{" "}
                      <span className="text-[10px] text-[#7F7F7F] font-roboto-condensed">
                        (North America, Europe, Asia Pacific, Latin America,
                        Middle East & Africa)
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <TabComponent />
      <div
        className="bg-white h-[200px] md:h-[525px] lg:h-[825px] w-full"
        style={{
          backgroundImage: "url('/images/swatch.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <SalesFAQS />
      <CustomerTestimonials />
      <div className="shadow-table-content border border-[#D0D0D0] bg-white" />
      <div className="bg-white px-10 pt-16 pb-24">
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
      </div>
      <div className="bg-white px-10 pb-14">
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row items-start md:items-center justify-between mb-6">
          <p className="text-[26px] text-black font-light">
            RELATED CATEGORIES
          </p>
          <p
            className="underline text-right font-light font-black text-[18px] cursor-pointer"
            onClick={() => router.push("/categories")}
          >
            View 184 reports
          </p>
        </div>
        <div className="grid place-items-center grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
          {categoriesItem.slice(0, 3).map((item, idx) => (
            <CategoresItem key={idx} title={item.title} image={item.image} />
          ))}
        </div>
      </div>
      <div className="bg-[#3B4ACC] w-full h-[96px]" />
    </div>
  );
};

export default Sales;
