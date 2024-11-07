import Image from "next/image";
import React from "react";

const CustomerTestimonials = () => {
  return (
    <div className="bg-white px-8 md:px-12 lg:px-24 pt-14 pb-8">
      <div className="mb-10">
        <p className="font-inter font-bold text-black text-[24px] md:text-[36px] leading-[34px] md:leading-[43px]">
          Customer Testimonials
        </p>
        <div className="border-b-[5px] border-[#3B4ACC] w-[18%] pt-2" />
      </div>
      <div className="bg-[#FAFAFA] rounded-[10px] h-[787px] overflow-y-scroll p-6 flex flex-row justify-between gap-6">
        <div className="flex flex-col gap-6 w-full">
          <div className="relative w-[553px] h-[530px]">
            <Image
              src="/images/customer-review-1.png"
              alt="book"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative w-[553px] h-[276px]">
            <Image
              src="/images/customer-review-2.png"
              alt="book"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <div className="relative w-[567px] h-[210px]">
            <Image
              src="/images/customer-review-4.png"
              alt="book"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative w-[567px] h-[276px]">
            <Image
              src="/images/customer-review-3.png"
              alt="book"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative w-[567px] h-[276px]">
            <Image
              src="/images/customer-review-3.png"
              alt="book"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className="my-20 bg-[#0DAFBF] rounded-[14px] h-full lg:h-[420px] w-full p-8 md:p-12 lg:p-24 flex flex-col lg:flex-row justify-between gap-6">
        <div className="flex flex-col w-full">
          <p className="font-roboto-serif font-bold text-[48px] leading-[72px] text-white">
            Need answers?
          </p>
          <span className="font-inter font-extralight text-white text-[36px] leading-[54px] mb-4">
            Speak to our Analyst today!
          </span>
          <div className="flex flex-row mt-2">
            <div className="w-[130px] h-[130px] z-[4] relative">
              <Image
                src={"/images/customer-1.png"}
                alt="customer-1"
                width={130}
                height={130}
              />
            </div>
            <div className="w-[130px] h-[130px] z-[3] relative left-[-20px]">
              <Image
                src={"/images/customer-2.png"}
                alt="customer-2"
                width={130}
                height={130}
              />
            </div>
            <div className="w-[130px] h-[130px] z-[2] relative left-[-40px]">
              <Image
                src={"/images/customer-3.png"}
                alt="customer-3"
                width={130}
                height={130}
              />
            </div>
            <div className="w-[130px] h-[130px] z-[1] relative left-[-60px]">
              <Image
                src={"/images/customer-4.png"}
                alt="customer-4"
                width={130}
                height={130}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <textarea
            placeholder="Type your message"
            rows={8}
            className="p-4 md:p-6 rounded-5px text-[18px] text-black font-light leading-[27px]"
          />
          <div className="flex flex-row items-center justify-end mt-4">
            <button className="bg-white text-[#0DAFBF] rounded-5px py-2 px-10 text-[16px] font-inter font-bold shadow-table-content transform transition-transform duration-300 hover:-translate-y-1 hover:bg-[#0000EE] hover:border-0 hover:text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
