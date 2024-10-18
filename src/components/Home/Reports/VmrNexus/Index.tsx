import SecondaryInput from "@/components/SecondaryInput";
import Image from "next/image";
import React, { Fragment } from "react";
import CardItem from "./CardItem";
import Banner from "../Banner";
import ContactUs from "../ContactUs";

type NexusCard = {
  title: string;
};

const VMRNexus = () => {
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
        <div className="flex flex-col items-start w-full md:w-[250px] mb-4 md:mb-0">
          <div className="text-[20px] md:text-[24px] text-black font-medium font-bold mb-2">
            VMR NEXUS —
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row cursor-pointer">
              <span className="font-normal text-[14px] md:text-[16px] text-[#4E4E4E] mr-2">
                Filter
              </span>
              <Image
                src="/icons/filter.svg"
                alt="filter"
                width={18}
                height={12}
              />
            </div>
            <div className="cursor-pointer flex flex-row font-normal text-[14px] md:text-[16px] text-[#4E4E4E] ml-4">
              <span className="font-normal text-[14px] md:text-[16px] text-[#4E4E4E] mr-2">
                Sort View
              </span>
              <Image
                src="/icons/sort-view.svg"
                alt="sort"
                width={18}
                height={12}
                className="mr-2"
              />
              <Image
                src="/icons/table-view.svg"
                alt="table"
                width={18}
                height={12}
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <SecondaryInput label="Search Keyword" />
        </div>
      </div>
      <div className="flex flex-col mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
          <p className="font-light text-black text-[24px]">
            Consumer Electronic Devices
          </p>
          <p className="underline mb-4 mt-2 font-light text-black text-[18px] md:mt-0 md:mb-0 cursor-pointer font-roboto-mono">
            View 234 reports
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
          <div className="flex justify-end mt-4 md:mt-0 md:block hidden">
            <div className="w-[16px] h-[16px] cursor-pointer">
              <Image
                src="/icons/out_arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
          <p className="font-light text-black text-[24px]">
            Chipset And Processors
          </p>
          <p className="underline mb-4 mt-2 font-light text-black text-[18px] md:mt-0 md:mb-0 cursor-pointer font-roboto-mono">
            View 184 reports
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
          <div className="flex justify-end mt-4 md:mt-0 md:block hidden">
            <div className="w-[16px] h-[16px] cursor-pointer">
              <Image
                src="/icons/out_arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
      </div>
      <Banner />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[60%] lg:mr-6">
          <Fragment>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
              <p className="font-light font-black text-[20px] lg:text-[24px]">
                Battery & Wireless Charging
              </p>
              <p className="underline font-light font-black text-[16px] lg:text-[18px] cursor-pointer font-roboto-mono mt-2 lg:mt-0">
                View 162 reports
              </p>
            </div>
            <div className="mb-12 flex flex-row items-center justify-between">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-24 lg:gap-44">
                {nexusCard.slice(0, 3).map((item, idx) => (
                  <CardItem key={idx} title={item.title} />
                ))}
              </div>
              <div className="w-[16px] h-[16px] cursor-pointer ml-auto lg:ml-10 mt-4 lg:mt-0 hidden md:block">
                <Image
                  src="/icons/out_arrow-right.svg"
                  alt="arrow-right"
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </Fragment>
          <Fragment>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
              <p className="font-light font-black text-[20px] lg:text-[24px]">
                Data Center & Networking
              </p>
              <p className="underline font-light font-black text-[16px] lg:text-[18px] cursor-pointer font-roboto-mono mt-2 lg:mt-0">
                View 145 reports
              </p>
            </div>
            <div className="mb-12 flex flex-row items-center justify-between">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-24 lg:gap-44">
                {nexusCard.slice(0, 3).map((item, idx) => (
                  <CardItem key={idx} title={item.title} />
                ))}
              </div>
              <div className="w-[16px] h-[16px] cursor-pointer ml-auto lg:ml-10 mt-4 lg:mt-0 hidden md:block">
                <Image
                  src="/icons/out_arrow-right.svg"
                  alt="arrow-right"
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </Fragment>
        </div>
        <div className="w-full lg:w-[40%] mt-8 mb-12 lg:mt-0 lg:mb-0">
          <ContactUs />
        </div>
      </div>
      <div className="flex flex-col mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
          <p className="font-light text-black text-[24px]">
            Power Generation, Transmission & Distribution
          </p>
          <p className="underline mb-4 mt-2 font-light text-black text-[18px] md:mt-0 md:mb-0 cursor-pointer font-roboto-mono">
            View 128 reports
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
          <div className="flex justify-end mt-4 md:mt-0 md:block hidden">
            <div className="w-[16px] h-[16px] cursor-pointer">
              <Image
                src="/icons/out_arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VMRNexus;
