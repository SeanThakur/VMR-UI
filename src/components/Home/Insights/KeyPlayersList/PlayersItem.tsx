import Image from "next/image";
import React from "react";

interface PlayerItemsProps {
  bgColor: string;
}

const PlayersItem: React.FC<PlayerItemsProps> = ({ bgColor }) => {
  return (
    <div
      className={`bg-[${bgColor}] flex flex-row items-center justify-between px-6 py-4 border-t border-r border-l border-b-0 border-solid border-[#D9D9D9]`}
    >
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-[30px] h-[30px] lg:w-[44px] lg:h-[44px] relative rounded-full">
          <Image
            src={`/images/ibm-logo.png`}
            alt={"ibm"}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col ml-2 lg:ml-4">
          <p className="font-roboto-condensed font-normal text-[14px] lg:text-[18px] text-black leading-[21px] mb-1 lg:mb-3">
            IBM Corporation
          </p>
          <div className="flex flex-row items-start gap-4 lg:gap-6">
            <p className="font-roboto-condensed font-light leading-[16px] text-[10px]">
              Headquarters: <span className="font-normal">New York</span>
            </p>
            <p className="font-roboto-condensed font-light leading-[16px] text-[10px]">
              Employees: <span className="font-normal">2,000+</span>
            </p>
            <p className="font-roboto-condensed font-light leading-[16px] text-[10px]">
              Revenue: <span className="font-normal">23 Billion (2023)</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[22px] h-[22px] ml-2">
        <Image
          src="/icons/arrow-right-bold.svg"
          alt="arrow"
          width={22}
          height={22}
        />
      </div>
    </div>
  );
};

export default PlayersItem;
