import Image from "next/image";
import React from "react";

const RepoBanner = () => {
  return (
    <div
      className="my-16 px-12 h-[425px] rounded-[20px] bg-[#4A3AFF] flex items-center flex-col justify-evenly lg:flex-row lg:justify-between bg-cover bg-center"
      style={{ backgroundImage: "url('/images/banner-bg.png')" }}
    >
      <div className="flex flex-col w-full lg:w-[45%]">
        <p className="text-white text-[18px] lg:text-[32px] font-bold mb-4">
          Get access to 228 other reports on the{" "}
          <span className="underline cursor-pointer">Advanced Materials</span>{" "}
          market
        </p>
        <p className="text-[#EFF0F6] text-[12px] lg:text-[16px] font-normal">
          Leverage VMR’s insights to power your market assessments, business
          expansion, investor presentations & strategic decisions.
        </p>
      </div>
      <div className="flex flex-row gap-4 w-full lg:w-[45%]">
        <div className="bg-white cursor-pointer flex items-center lg:items-end w-[150px] h-[85px] lg:w-[350px] lg:h-[131px] rounded-[14px] transform transition-transform duration-300 hover:-translate-y-2">
          <div className="flex flex-row items-center p-6 lg:px-8 lg:py-6">
            <p className="text-[#4A3AFF] text-[12px] lg:text-[17px] font-bold w-[55%] mr-4">
              Customize your report(s)
            </p>
            <div className="w-[18px] h-[18px] lg:w-[30px] lg:h-[30px]">
              <Image
                src="/icons/arrow-up-right-blue.svg"
                alt="arrow-up"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
        <div className="border-solid cursor-pointer flex  items-center lg:items-end w-[150px] h-[85px] border-[1px] border-white rounded-[14px] lg:w-[350px] lg:h-[131px] transform transition-transform duration-300 hover:-translate-y-2">
          <div className="flex flex-row items-center p-6 lg:px-8 lg:py-6">
            <p className="text-white text-[12px] lg:text-[17px] font-bold w-[55%] mr-4">
              Browse our repository
            </p>
            <div className="w-[18px] h-[18px] lg:w-[30px] lg:h-[30px]">
              <Image
                src="/icons/arrow-up-right-white.svg"
                alt="arrow-up"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoBanner;
