import Image from "next/image";
import React, { Fragment } from "react";
import MarketValueByRegion from "../MarketValueByRegion";
import MarketSplitByType from "../MarketSplitByType";

const Infographics = () => {
  return (
    <Fragment>
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 lg:gap-0 lg:items-center mb-12">
        <h1 className="text-black text-[32px] font-medium font-roboto-serif">
          Infographics
        </h1>
        <div className="flex flex-row items-center gap-12">
          <span className="underline text-[18px] font-normal cursor-pointer font-inter">
            View all
          </span>
          <button className="px-4 py-4 font-inter text-white bg-[#0DAFBF] rounded-[8px] font-medium text-[18px] flex flex-row items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:bg-[#0000EE] hover:text-white">
            <div className="w-[28px] h-[28px] mr-2">
              <Image
                src="/icons/unlocked.svg"
                alt="unlock"
                width={28}
                height={28}
              />
            </div>
            Unlock All Infographics
          </button>
        </div>
      </div>
      <div className="grid mb-12">
        <div className="col">
          <MarketValueByRegion />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-28">
        <div className="col-span-1">
          <MarketSplitByType />
        </div>
        <div className="col-span-1">
          <MarketSplitByType />
        </div>
      </div>
    </Fragment>
  );
};

export default Infographics;
