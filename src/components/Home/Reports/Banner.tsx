import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="rounded-[10px] bg-[#3B4ACC] w-full h-auto py-6 px-4 mt-12 mb-12 flex flex-col lg:flex-row items-start justify-between">
      <div className="font-light text-white text-[20px] lg:text-[28px] leading-[30px] lg:leading-[48px] flex flex-col mb-6 lg:mb-0 fill-available justify-center items-start">
        <span className="font-light">Subscribe to access the entire VMR</span>
        <span className="font-bold">Electronics & Semiconductors</span>
        <span className="font-normal">repository of reports and insights</span>
      </div>
      <div className="text-white fill-available fill-available flex flex-col justify-center mb-6 lg:mb-0">
        <p className="font-bold text-[14px] lg:text-[16px] mb-1">
          This repository includes:
        </p>
        <ul className="list-disc pl-4 lg:pl-8 text-[14px] lg:text-[16px] font-normal">
          <li>1,478 Global market reports</li>
          <li>562 North America market reports</li>
          <li>429 Europe market reports</li>
          <li>251 Asia-Pacific market reports</li>
          <li>133 Middle East & Africa market reports</li>
          <li>103 Latin America market reports</li>
        </ul>
      </div>
      <div className="flex items-center fill-available flex-col justify-center mb-6 ml-4 lg:mb-0 lg:ml-0">
        <ul className="list-disc text-white font-normal text-[12px] lg:text-[14px]">
          <li>22,986 Company Profiles</li>
          <li>15,075 Infographics</li>
          <li>12,218 Tables</li>
          <li>21,106 Charts</li>
        </ul>
      </div>
      <div className="fill-available flex flex-col items-center justify-end lg:h-[170px]">
        <button className="bg-[#0DAFBF] uppercase text-white text-[12px] lg:text-[14px] px-4 lg:px-6 py-2 rounded-[5px] hover:bg-teal-600 transition duration-300 flex flex-row items-center mb-4">
          <div className="w-[14px] lg:w-[18px] h-[14px] lg:h-[18px] mr-2">
            <Image src="/icons/enter.svg" alt="enter" width={18} height={18} />
          </div>
          Explore
        </button>
        <div className="flex flex-row items-center cursor-pointer transform transition-transform duration-300 hover:-translate-y-1">
          <div className="w-[12px] lg:w-[14px] h-[12px] lg:h-[14px] mr-1">
            <Image
              src="/icons/email-unread.svg"
              alt="enter"
              width={14}
              height={14}
            />
          </div>
          <p className="text-white font-normal text-[8px] lg:text-[10px] uppercase underline">
            request Information
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
