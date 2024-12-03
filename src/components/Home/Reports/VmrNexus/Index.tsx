import SecondaryInput from "@/components/SecondaryInput";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import CardItem from "./CardItem";
import Banner from "../Banner";
import ContactUs from "../ContactUs";

type NexusCard = {
  title: string;
};

const VMRNexus = () => {
  const [vmrSearchReport, setVMRSearchReport] = useState<string>("");
  const nexusCard: NexusCard[] = [
    {
      title: "Global Treasury And Risk Management Software Market",
    },
    {
      title: "Global Treasury And Risk Management Software Market",
    },
    {
      title: "Global Treasury And Risk Management Software Market ",
    },
    {
      title: "Global Treasury And Risk Management Software Market",
    },
    {
      title: "Global Treasury And Risk Management Software Market ",
    },
  ];

  return (
    <div className="my-14">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="flex flex-row items-start w-full items-center justify-between mb-4 mr-8 md:mb-0">
          <div className="text-[20px] md:text-[24px] text-black font-roboto font-medium font-bold mb-2">
            VMR NEXUS —
          </div>
          <div className="flex flex-row items-center">
            <div className="bg-filter-gradient rounded-[8px] h-[38px] w-[110px] flex flex-row items-center justify-center cursor-pointer transform transition-transform duration-300 hover:-translate-y-1">
              <span className="font-medium font-roboto text-white text-[14px] md:text-[16px] text-[#4E4E4E] mr-2">
                Filter
              </span>
              <Image
                src="/icons/filter-white.svg"
                alt="filter"
                width={18}
                height={18}
              />
            </div>
            <div className="bg-black rounded-[8px] h-[38px] w-[151px]  cursor-pointer flex flex-row items-center justify-center ml-4">
              <span className="font-roboto-condensed font-medium text-[14px] md:text-[16px] text-white mr-2">
                Sort View
              </span>
              <Image
                src="/icons/sort-view-white.svg"
                alt="sort"
                width={18}
                height={18}
                className="mr-2 transform transition-transform duration-300 hover:-translate-y-1"
              />
              <Image
                src="/icons/table-view-white.svg"
                alt="table"
                width={18}
                height={18}
                className="transform transition-transform duration-300 hover:-translate-y-1"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <SecondaryInput
            label="Search Keyword"
            inputValue={vmrSearchReport}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setVMRSearchReport(e.target.value)
            }
          />
        </div>
      </div>
      <div className="flex flex-col mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
          <p className="font-light font-roboto text-black text-[24px] leading-[28px]">
            Consumer Electronic Devices
          </p>
        </div>
        <div className="mb-12 flex flex-row items-center justify-between">
          <div className="grid grid-cols-2 gap-4 md:gap-12 md:grid-cols-3 lg:grid-cols-5">
            {nexusCard.map((item, idx) => (
              <div key={idx}>
                <CardItem title={item.title} />
              </div>
            ))}
          </div>
          {/* <div className="flex justify-end mt-4 md:mt-0 md:block hidden">
            <div className="w-[16px] h-[16px] cursor-pointer">
              <Image
                src="/icons/out_arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </div>
          </div> */}
        </div>
        <div className="mb-12 flex flex-row items-center justify-between">
          <div className="grid grid-cols-2 gap-4 md:gap-12 md:grid-cols-3 lg:grid-cols-5">
            {nexusCard.map((item, idx) => (
              <div key={idx}>
                <CardItem title={item.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Banner />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[60%] lg:mr-6">
          <Fragment>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
              <p className="font-light font-roboto font-black text-[20px] lg:text-[24px]">
                Battery & Wireless Charging
              </p>
              <p className="underline font-normal font-black text-[16px] lg:text-[18px] cursor-pointer font-roboto mt-2 lg:mt-0">
                View 162 reports
              </p>
            </div>
            <div className="mb-12 flex flex-row items-center justify-between">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                {nexusCard.slice(0, 3).map((item, idx) => (
                  <CardItem key={idx} title={item.title} />
                ))}
              </div>
            </div>
          </Fragment>
        </div>
        <div className="w-full lg:w-[40%] mt-8 mb-12 lg:mt-0 lg:mb-0">
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default VMRNexus;
