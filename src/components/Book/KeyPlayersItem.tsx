import Image from "next/image";
import React from "react";

interface playersProps {
  image: string;
  title: string;
}

const KeyPlayersItem: React.FC<playersProps> = ({ image, title }) => {
  return (
    <div className="border border-[#D9D9D9] rounded-5px bg-white w-[345px] mb-20">
      <div className="relative bg-[#F7F7F7] py-5 pr-6 flex flex-row items-center justify-between">
        <div className="absolute top-0 left-0 transform -translate-y-1/2">
          <Image
            src={image}
            alt={title}
            width={136}
            height={136}
            objectFit="cover"
          />
        </div>
        <div className="w-full flex justify-end">
          <p className="font-bold text-black text-[20px]">{title}</p>
        </div>
      </div>
      <div className="px-3 py-4">
        <div className="w-full flex flex-row items-center  mb-2">
          <p className="w-[40%] text-[18px] font-normal text-black">HQ:</p>
          <span className="item-start text-[#777777] text-[18px] font-normal">
            New York, NY
          </span>
        </div>
        <div className="w-full flex flex-row items-center  mb-2">
          <p className="w-[40%] text-[18px] font-normal text-black">
            Employees:
          </p>
          <span className="item-start text-[#777777] text-[18px] font-normal">
            10,000+
          </span>
        </div>
        <div className="w-full flex flex-row items-center mb-2">
          <p className="w-[40%] text-[18px] font-normal text-black">Revenue:</p>
          <span className="item-start text-[#777777] text-[18px] font-normal">
            USD 60.5 Bn
          </span>
        </div>
        <p className="w-[40%] text-[18px] font-normal text-black  mb-2">
          Description:
        </p>
        <div className="relative">
          <span className="item-start text-[#777777] text-[18px] font-normal">
            For more than a century, IBM has been a global technology innovator,
            leading advances in AI, automation and hybrid cloud solutions...
            <span className="underline cursor-pointer text-[#3B4ACC] text-[14px] text-normal absolute bottom-0 right-1">
              read more
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default KeyPlayersItem;
