import { tableOfContentData } from "@/utils/data";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { BiSearch } from "react-icons/bi";

const TableOfContent = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [showText, setShowText] = useState<boolean>(true);

  const onTableContentChange = (idx: number) => {
    if (!showText) {
      setActiveIndex(idx);
    }
  };

  return (
    <div className="h-[480px] bg-white shadow-table-content border border-[#EEEEEE] flex flex-row">
      <div className="w-[45%] md:w-[23%] h-full border-t-2 border-customBlue shadow-table-content">
        <div className="relative">
          <input
            className="bg-[#FFFFFF] px-10 text-[14px] text-[#979797] h-[36px] w-full border-t border-b border-l-0 border-r-0 border-solid border-[#EEEEEE] font-roboto-mono"
            placeholder="Search Keyword"
          />
          <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#0DAFBF]" />
        </div>
        <div className="py-2 text-[#7F7F7F] text-[12px] md:text-[14px] lg:text-[18px] font-light">
          <p className="py-2 px-6 font-roboto-condensed">Chapters —</p>
          <hr />
          {tableOfContentData.map((data, index) => (
            <Fragment key={index}>
              <p
                className={`cursor-pointer py-2 w-full font-roboto-condensed ${
                  activeIndex === index
                    ? "bg-[#0DAFBF] text-white px-6"
                    : "bg-transparent text-black px-6"
                }`}
                onClick={() => onTableContentChange(index)}
              >
                {data.title}
              </p>
              {index != tableOfContentData.length - 1 && <hr />}
            </Fragment>
          ))}
        </div>
      </div>
      <div className="w-[80%] relative p-8">
        <span className="text-[#3B4ACC] font-bold text-[18px] md:text-[24px]">
          {tableOfContentData[activeIndex].content.title}
        </span>
        <div className="relative">
          <div
            className={`${
              showText ? "blur-sm select-none" : ""
            } md:mt-12 mt-4 text-[9px] md:text-[14px] lg:text-[20px] font-light flex flex-col gap-4`}
          >
            <p>{tableOfContentData[activeIndex].content.description1}</p>
            <p>{tableOfContentData[activeIndex].content.description2}</p>
            <p>{tableOfContentData[activeIndex].content.description3}</p>
          </div>
          <div
            className={`${
              !showText ? "hidden" : "block"
            } absolute top-1/2 left-1/2 transform -translate-x-1/2`}
          >
            <button
              onClick={() => setShowText(false)}
              className="px-8 py-2 text-white bg-[#0DAFBF] rounded-[5px] font-normal text-[16px] flex flex-row items-center font-roboto-condensed transform transition-transform duration-300 hover:-translate-y-1 hover:bg-[#0000EE] hover:text-white"
            >
              <div className="w-[18px] h-[18px] mr-2">
                <Image
                  src="/icons/locked.svg"
                  alt="enter"
                  width={18}
                  height={18}
                />
              </div>
              Unlock Premium
            </button>
          </div>
        </div>
        <div
          className={`${
            showText ? "select-none cursor-not-allowed " : "cursor-pointer"
          } absolute bottom-6 right-6 flex flex-row items-center`}
        >
          <span className="font-light font-[18px] font-black font-roboto-mono">
            Next
          </span>
          <div className="w-[26px] h-[26px] flex items-center justify-center rounded-sm">
            <Image
              src="/icons/arrow-right.svg"
              alt="arrow-right"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContent;
