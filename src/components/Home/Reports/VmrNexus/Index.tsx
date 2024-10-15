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
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col items-start w-[250px]">
          <div className="text-[24px] text-black font-medium font-bold mb-2">
            VMR NEXUS —
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row cursor-pointer">
              <span className="font-normal text-[16px] text-[#4E4E4E] mr-2">
                Filter
              </span>
              <Image
                src="/icons/filter.svg"
                alt="filter"
                width={18}
                height={12}
              />
            </div>
            <div className="cursor-pointer flex flex-row font-normal text-[16px] text-[#4E4E4E]">
              <span className="font-normal text-[16px] text-[#4E4E4E] mr-2">
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
        <SecondaryInput label="Search Keyword" />
      </div>
      <div className="flex flex-row items-center justify-between mb-8">
        <p className="font-light text-black text-[24px]">
          Consumer Electronic Devices
        </p>
        <p className="underline font-light text-black text-[18px] cursor-pointer font-roboto-mono">
          View 234 reports
        </p>
      </div>
      <div className="mb-12 flex flex-row items-center justify-between">
        <div className="flex flex-row gap-12">
          {nexusCard.map((item, idx) => (
            <CardItem key={idx} title={item.title} />
          ))}
        </div>
        <div className="w-[16px] h-[16px] mr-2 cursor-pointer">
          <Image
            src="/icons/out_arrow-right.svg"
            alt="arrow-right"
            width={16}
            height={16}
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between mb-8">
        <p className="font-light font-black text-[24px]">
          Chipset And Processors
        </p>
        <p className="underline font-light font-black text-[18px] cursor-pointer font-roboto-mono">
          View 184 reports
        </p>
      </div>
      <div className="mb-12 flex flex-row items-center justify-between">
        <div className="flex flex-row gap-12">
          {nexusCard.map((item, idx) => (
            <CardItem key={idx} title={item.title} />
          ))}
        </div>
        <div className="w-[16px] h-[16px] mr-2 cursor-pointer">
          <Image
            src="/icons/out_arrow-right.svg"
            alt="arrow-right"
            width={16}
            height={16}
          />
        </div>
      </div>
      <Banner />
      <div className="flex flex-row">
        <div className="w-[60%] mr-6">
          <Fragment>
            <div className="flex flex-row items-center justify-between mb-8">
              <p className="font-light font-black text-[24px]">
                Battery & Wireless Charging
              </p>
              <p className="underline font-light font-black text-[18px] cursor-pointer font-roboto-mono">
                View 162 reports
              </p>
            </div>
            <div className="mb-12 flex flex-row items-center justify-between">
              <div className="flex flex-row gap-12">
                {nexusCard.slice(0, 3).map((item, idx) => (
                  <CardItem key={idx} title={item.title} />
                ))}
              </div>
              <div className="w-[16px] h-[16px] mr-2 cursor-pointer ml-10">
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
            <div className="flex flex-row items-center justify-between mb-8">
              <p className="font-light font-black text-[24px]">
                Data Center & Networking
              </p>
              <p className="underline font-light font-black text-[18px] cursor-pointer font-roboto-mono">
                View 145 reports
              </p>
            </div>
            <div className="mb-12 flex flex-row items-center justify-between">
              <div className="flex flex-row gap-12">
                {nexusCard.slice(0, 3).map((item, idx) => (
                  <CardItem key={idx} title={item.title} />
                ))}
              </div>
              <div className="w-[16px] h-[16px] mr-2 cursor-pointer ml-10">
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
        <div className="w-full">
          <ContactUs />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between mb-8">
        <p className="font-light font-black text-[24px]">
          Power Generation, Transmission & Distribution
        </p>
        <p className="underline font-light font-black text-[18px] cursor-pointer font-roboto-mono">
          View 128 reports
        </p>
      </div>
      <div className="mb-12 flex flex-row items-center justify-between">
        <div className="flex flex-row gap-12">
          {nexusCard.map((item, idx) => (
            <CardItem key={idx} title={item.title} />
          ))}
        </div>
        <div className="w-[16px] h-[16px] mr-2 cursor-pointer">
          <Image
            src="/icons/out_arrow-right.svg"
            alt="arrow-right"
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
};

export default VMRNexus;
