import Image from "next/image";
import React, { Fragment } from "react";

const BundledLicense = () => {
  const plans = [
    {
      name: "3 Reports Bundle",
      price: "$12,479",
      features: [
        "1 User Access",
        "View PDF reports online",
        "25% Report Customization",
        "30 Days Free Analyst Support",
      ],
      popular: false,
    },
    {
      name: "5 Reports Bundle",
      price: "$18,599",
      features: [
        "Unlimited User Accesses",
        "Ready-to-use PPT/Keynote",
        "50% Report Customization",
        "90 Days Free Analyst Support",
        "Executive Summary Presentation",
        "Downloadable PDF + Excel Reports",
      ],
      popular: true,
    },
    {
      name: "7+ Report Bundle",
      price: "Custom",
      features: [
        "Up to 5 User Accesses",
        "View PDF Reports Online",
        "Downloadable Excel Report",
        "50% Report Customization",
        "Upto 120 Days Free Analyst Support",
      ],
      popular: false,
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-end justify-center mb-16">
        {plans.map((plan, index) => (
          <Fragment key={index}>
            <div className="relative z-[2] flex justify-center">
              {index === 1 && (
                <div className="absolute z-[-1] h-[100px] w-full top-[-35px] bg-[#FFF27C] text-center rounded-t-[10px] rounded-b-[10px] mx-auto">
                  <p className="font-roboto-serif font-normal text-[20px] text-black leading-[40px] italic">
                    Most Popular
                  </p>
                </div>
              )}
              <div
                key={plan.name}
                className={`p-6 rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] shadow-[2px_-2px_4px_0px_#00000040,0px_4px_4px_0px_#00000040] text-center ${
                  index === 1
                    ? "bg-[#3C4BCF] h-[618px] w-[380px] text-white rounded-[20px]"
                    : "bg-white text-[#0B0914] h-[540px] w-[365px]"
                } ${
                  index === plans.length - 1 &&
                  "rounded-tr-[20px] rounded-tl-[0px]"
                }`}
              >
                <div className="flex flex-row items-center justify-center mr-2 mb-6">
                  <div className="w-[30px] h-[30px] mr-2">
                    <Image
                      src={
                        index === 0
                          ? "/icons/single-user-black.svg"
                          : index === 1
                          ? "/icons/enterprise-user-white.svg"
                          : "/icons/multi-user.svg"
                      }
                      alt="enter"
                      width={30}
                      height={30}
                    />
                  </div>
                  <h3 className="text-[32px] font-bold leading-[40px]">
                    {plan.name}
                  </h3>
                </div>
                <p className="text-[40px] leading-[40px] font-bold mb-6">
                  {plan.price}
                </p>
                <button
                  className={`w-full border border-[#0DAFBF] shadow-table-content font-bold text-[16px] font-inter leading-[19px] px-6 py-4 rounded-[5px] mb-4 ${
                    index === 1
                      ? "bg-[#0DAFBF] text-white"
                      : "bg-white text-[#0DAFBF]"
                  }`}
                >
                  Build Bundle
                </button>
                <div className="flex flex-col items-start mt-3">
                  <h4 className="font-normal font-inter text-[22px] leading-[26px] text-[#CCCCCC] mb-6">
                    What Youll Get
                  </h4>
                  <ul
                    className={`text-left ${
                      index === 1 ? "space-y-6" : "space-y-4"
                    }`}
                  >
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-[24px] h-[24px] mr-2">
                          <Image
                            src={
                              index === 1
                                ? "/icons/check-circle-white.svg"
                                : "/icons/check-circle-black.svg"
                            }
                            alt="enter"
                            width={24}
                            height={24}
                          />
                        </div>
                        <span
                          className={`mr-2 font-inter text-[18px] leading-[21px] font-normal ${
                            index == 1 ? "text-white" : "text-[#35353F]"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
      {/* <div className="mb-16 px-24 flex flex-col">
        <div className="relative flex flex-row items">
          <input
            type="text"
            placeholder="Search Country"
            className="mb-4 pl-14 bg-white w-full rounded-[7px] border-[3px] border-[#C4C4C4] px-3 py-2 font-roboto-condensed font-normal text-[20px] text-[#AAAAAA] leading-[23px]"
          />
          <div className="w-[27px] h-[27px] absolute left-3 top-[36%] transform -translate-y-1/2">
            <Image
              src="/icons/search-thin.svg"
              alt="search"
              width={27}
              height={27}
            />
          </div>
        </div>
        <div className="mt-2">
          <div className="flex flex-row justify-between mb-4">
            <div className="flex flex-row gap-1 items-center cursor-pointer">
              <div className="w-[32px] h-[32px]">
                <Image
                  src="/icons/slider.svg"
                  alt="slider"
                  width={32}
                  height={32}
                />
              </div>
              <span className="text-black font-roboto font-medium text-[18px] leading-[21px] underline">
                Filter Results
              </span>
            </div>
            <p className="font-roboto font-normal text-[16px] text-black leading-[18px]">
              Total Reports Available: 33
            </p>
          </div>
          <div className="h-[799px] overflow-y-scroll border border-[#B0B0B0] rounded-br-[0px] rounded-[20px]">
            <div className="bg-[#3B4ACC] h-[45px] flex felx-row items-center justify-between py-2 px-12 rounded-t-[20px]">
              <span className="w-[30%] uppercase font-inter font-medium text-white text-[14px] leading-[16px]">
                REPORT TITLE & DESCRIPTION
              </span>
              <span className="w-[20%] uppercase font-inter font-medium text-white text-[14px] leading-[16px]">
                COMPANY PROFILES
              </span>
              <span className="w-[20%] uppercase font-inter font-medium text-white text-[14px] leading-[16px]">
                SEGMENTATION
              </span>
              <div className="w-[20%] flex flex-row items-center">
                <span className="uppercase font-inter font-medium text-white text-[14px] leading-[16px]">
                  STANDARD PRICE
                </span>
                <div className="w-[12px] h-[12px] mb-[18px]">
                  <Image
                    src="/icons/info-outline.svg"
                    alt="slider"
                    width={12}
                    height={12}
                  />
                </div>
              </div>
            </div>
            <div className="py-3 px-2">

            </div>
          </div>
          <div className="flex flex-row items">
            <div className="w-full px-12 flex flex-col gap-6">
              <div className="flex flex-row items-end justify-between">
                <div className="flex flex-col items-start justify-between mt-6">
                  <p className="font-roboto-serif font-light text-[#666666] text-[16px] leading-[18px] w-[90%] mb-2">
                    Verified Market Research is a member of:
                  </p>
                  <div className="w-[235px] h-[70px]">
                    <Image
                      src={"/images/ESOMAR-2024-logo.png"}
                      alt="esomar"
                      width={235}
                      height={70}
                    />
                  </div>
                </div>
                <div className="w-[92px] h-[73px]">
                  <Image
                    src={"/images/pci-logo.png"}
                    alt="pci"
                    width={92}
                    height={73}
                  />
                </div>
                <div className="w-[184px] h-[70px]">
                  <Image
                    src={"/images/secure-payment-logo.png"}
                    alt="secure-payment"
                    width={184}
                    height={70}
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="w-[122px] h-[104px]">
                  <Image
                    src={"/images/iso-logo.png"}
                    alt="iso"
                    width={122}
                    height={104}
                  />
                </div>
                <div className="w-[122px] h-[104px]">
                  <Image
                    src={"/images/iso-logo-2.png"}
                    alt="iso-2"
                    width={104}
                    height={104}
                  />
                </div>
                <div className="w-[180px] h-[70px]">
                  <Image
                    src={"/images/digicert-logo.png"}
                    alt="digicert"
                    width={180}
                    height={70}
                  />
                </div>
              </div>
            </div>
            <div className="w-full bg-[#3B4ACC] rounded-br-[20px] rounded-bl-[20px] px-16 py-8 flex flex-col justify-end">
              <div className="flex flex-row justify-between border-b border-dotted mb-4">
                <p className="font-roboto-condensed font-medium text-[24px] leading-[28px] text-white">
                  Subtotal
                </p>
                <span className="font-roboto-condensed font-medium text-[24px] leading-[28px] text-white">
                  $7,550
                </span>
              </div>
              <div className="flex flex-row justify-between border-b border-dotted mb-4">
                <p className="font-roboto-condensed font-medium text-[24px] leading-[28px] text-white">
                  Discount{" "}
                  <span className="font-light leading-[23px] text-[20px]">
                    (44.9%)
                  </span>
                </p>
                <span className="font-roboto-condensed font-medium text-[24px] leading-[28px] text-white">
                  -$10,171
                </span>
              </div>
              <div className="flex flex-row justify-between border-b border-dotted mb-8">
                <p className="font-roboto-condensed font-medium text-[24px] leading-[28px] text-white">
                  Total Price
                </p>
                <span className="font-roboto-condensed font-medium text-[32px] leading-[37px] text-[#EBFF00]">
                  $12,479
                </span>
              </div>
              <button className="text-white text-[16px] font-bold font-inter leading-[19px] w-full rounded-5px bg-[#0DAFBF] py-4 shadow-table-content">
                Proceed to Buy
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div
        className="h-[442px] bg-[#72bf0f] rounded-[10px] py-16 mx-24 bg-cover bg-center flex flex-row"
        style={{ backgroundImage: "url('/images/sales-benefits-cover.png')" }}
      >
        <div className="flex flex-col">
          <p className="font-inter text-white font-extrabold text-[36px] leading-[54px] mb-4 pl-10 w-[70%]">
            BENEFITS OF LICENSE TYPES
          </p>
          <div className="flex flex-col items-start gap-1">
            <div className="pr-2 pl-10 py-1">
              <p className="text-white font-inter font-normal text-[24px] leading-[36px]">
                1-Report License
              </p>
            </div>
            <div className="bg-white shadow-table-content px-2 py-1 w-full">
              <p className="text-[#71BF0D] font-inter font-semibold text-[24px] leading-[36px] pl-10">
                Bundled License
              </p>
            </div>
            <div className="pr-2 pl-10 py-1">
              <p className="text-white font-inter font-normal text-[24px] leading-[36px]">
                Consulting License
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-6 pr-10">
          <div className="bg-white rounded-[10px] flex flex-col items-center justify-center py-6 px-1 shadow-table-content w-[250px] h-[324px] text-center">
            <div className="w-[100px] h-[100px] mb-4">
              <Image
                src={"/icons/supplier.svg"}
                alt="market-insight"
                width={100}
                height={100}
              />
            </div>
            <p className="text-black text-[20px] leading-[30px] font-normal font-roboto-serif mb-2 mx-6">
              Industry-wide Insights
            </p>
            <p className="font-roboto-condensed font-light text-[16px] leading-[24px] text-black">
              Get segmentation and market analysis across sub-markets of the
              industry.
            </p>
          </div>
          <div className="bg-white rounded-[10px] flex flex-col items-center justify-center py-6 px-2 shadow-table-content w-[250px] h-[324px] text-center">
            <div className="w-[100px] h-[100px] mb-4">
              <Image
                src={"/icons/segmentation.svg"}
                alt="analysis"
                width={100}
                height={100}
              />
            </div>
            <p className="text-black text-[20px] leading-[30px] font-normal font-roboto-serif mb-2 mx-6">
              Competitive Landscape Analysis
            </p>
            <p className="font-roboto-condensed font-light text-[16px] leading-[24px] text-black">
              Get SWOT analysis, product benchmarking & financial insights
              across the industry.
            </p>
          </div>
          <div className="bg-white rounded-[10px] flex flex-col items-center justify-center py-6 px-2 shadow-table-content w-[250px] h-[324px] text-center">
            <div className="w-[100px] h-[100px] mb-4">
              <Image
                src={"/icons/help.svg"}
                alt="help"
                width={100}
                height={100}
              />
            </div>
            <p className="text-black text-[20px] leading-[30px] font-normal font-roboto-serif mb-2 mx-6">
              12 month Analyst Support
            </p>
            <p className="font-roboto-condensed font-light text-[16px] leading-[24px] text-black">
              Get upto 12 months post-purchase support from our Analysts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BundledLicense;
