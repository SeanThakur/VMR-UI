import { testimonialBannerData } from "@/utils/data";
import Image from "next/image";
import React from "react";

const TestimonialBanner = () => {
  return (
    <div
      className="my-16 px-12 h-[600px] rounded-[20px] bg-[#77BB20] flex items-center justify-between bg-cover bg-center"
      style={{ backgroundImage: "url('/images/testimonial-banner.png')" }}
    >
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-2 mb-12">
          <div className="w-[22px] h-[2px] bg-[white] rounded-[30px]" />
          <p className="text-white text-[18px] uppercase font-bold">
            cUSTOMER tESTIMONIALS
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {testimonialBannerData.map((item, idx) => (
            <div className="flex flex-row items-center gap-4" key={idx}>
              <div className="relative w-[120px] h-[118px] rounded-[200px]">
                <Image
                  src={item.image}
                  alt="trust-pilot"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col w-[70%]">
                <p className="text-white text-[20px] font-semibold mb-2">
                  {item.title}
                </p>
                <span className="text-[#EFF0F6] text-[12px] font-normal">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center ml-6">
        <div className="bg-white cursor-pointer flex items-end w-[300px] h-[131px] rounded-[14px] mb-8">
          <div className="flex flex-row items-center px-8 py-6">
            <p className="text-[#77BB20] text-[17px] font-bold w-[55%] mr-4">
              Read full testimonials
            </p>
            <div className="w-[30px] h-[30px]">
              <Image
                src="/icons/arrow-up-right-green.svg"
                alt="arrow-up"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
        <div className="relative w-[255px] h-[160px]">
          <Image
            src="/images/trustPilotLogo.png"
            alt="trust-pilot"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialBanner;
