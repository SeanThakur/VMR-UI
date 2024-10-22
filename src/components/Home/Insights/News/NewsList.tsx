import React from "react";
import NewsItem from "./NewsItem";

const NewsList = () => {
  return (
    <div className="mb-8">
      <p className="font-roboto text-[26px] font-light leading-[30px] text-black mb-4">
        News
      </p>
      <div className="bg-[#FCFCFC] rounded-[5px] flex flex-col gap-8 items-start px-6 py-8 max-h-[400px] md:max-h-[800px] overflow-y-scroll">
        <NewsItem />
        <hr className="rounded-[3px] h-[1px] bg-[#EDEDED] w-[40%]" />
        <NewsItem />
        <hr className="rounded-[3px] h-[1px] bg-[#EDEDED] w-[40%]" />
        <NewsItem />
        <hr className="rounded-[3px] h-[1px] bg-[#EDEDED] w-[40%]" />
        <NewsItem />
        <hr className="rounded-[3px] h-[1px] bg-[#EDEDED] w-[40%]" />
        <NewsItem />
        <hr className="rounded-[3px] h-[1px] bg-[#EDEDED] w-[40%]" />
        <NewsItem />
        <hr className="rounded-[3px] h-[1px] bg-[#EDEDED] w-[40%]" />
        <NewsItem />
        <hr className="rounded-[3px] h-[1px] bg-[#EDEDED] w-[40%]" />
        <NewsItem />
        <hr className="rounded-[3px] h-[1px] bg-[#EDEDED] w-[40%]" />
        <NewsItem />
        <hr className="rounded-[3px] h-[1px] bg-[#EDEDED] w-[40%]" />
        <NewsItem />
        <hr className="rounded-[3px] h-[1px] bg-[#EDEDED] w-[40%]" />
        <NewsItem />
        <hr className="rounded-[3px] h-[1px] bg-[#EDEDED] w-[40%]" />
        <NewsItem />
        <hr className="rounded-[3px] h-[1px] bg-[#EDEDED] w-[40%]" />
        <NewsItem />
      </div>
    </div>
  );
};

export default NewsList;
