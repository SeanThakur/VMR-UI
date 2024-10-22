import Image from "next/image";
import React from "react";

const NewsItem = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center md:items-start">
      <div className="w-[88px] md:w-[40%] lg:w-[10%] h-[82px] relative">
        <Image
          src={`/images/newsDummy.png`}
          alt={"dummy news"}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col items-start gap-4 ml-4">
        <div className="flex flex-col">
          <div className="flex flex-row gap-6 md:gap-8 mb-3 md:mb-2">
            <span className="font-roboto-condensed font-light text-[11px] md:text-[10px] leading-[12px] text-black">
              Published: November 2023
            </span>
            <span className="font-roboto-condensed font-light text-[11px] md:text-[10px] leading-[12px] text-black">
              Publisher: Yahoo Finance
            </span>
            <span className="font-roboto-condensed font-light text-[11px] md:text-[10px] leading-[12px] text-black">
              Tags: Ocimene, Canada, Cannabis, etc.
            </span>
          </div>
          <p className="font-roboto-condensed font-normal text-[16px] md:text-[18px] leading-[21px] text-black ml-0 md:ml-1">
            Tilray Expands Market Leading Cannabis Portfolio With Launch of New
            Redecan Products Across Canada
          </p>
        </div>
        <div className="font-roboto font-light text-[10px] md:text-[12px] leading-[16px] text-black">
          Best-Selling Redecan Brand Gets a Boost with New Limited-Edition
          Cannabis Flower Genetics and Product LineupTORONTO, Sept. Best-Selling
          Redecan Brand Gets a Boost with New Limited-Edition Cannabis Flower
          Genetics and Product LineupTORONTO, Sept. Best-Selling Redecan Brand
          Gets a Boost with New Limited-Edition Cannabis Flower Genetics and
          Product LineupTORONTO, Sept.
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
