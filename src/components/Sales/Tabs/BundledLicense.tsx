import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";

const BundledLicense = () => {
  const router = useRouter();
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
    <div className="flex flex-col height-fill-available">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:items-end lg:justify-center lg:gap-0 mb-16">
        {plans.map((plan, index) => (
          <Fragment key={index}>
            <div
              className={`relative z-[2] flex justify-center ${
                index === 1 ? "mt-8" : "mt-0"
              }`}
            >
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
                  <h3 className="text-[18px] lg:text-[32px] font-bold leading-[40px]">
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
                  onClick={() => router.push("/invoice")}
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
      <div className="hidden md:flex mb-32 px-8 md:px-12 lg:px-24 flex flex-col">
        <div className="relative flex flex-row items">
          <input
            type="text"
            placeholder="Search Related Markets or Companies"
            className="mb-4 h-[43px] pl-14 bg-white w-full rounded-[7px] border-[3px] border-[#C4C4C4] px-3 font-roboto-condensed font-normal text-[20px] text-[#AAAAAA] leading-[23px]"
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
          <div className="flex flex-row items-center justify-between mb-4">
            <div className="flex flex-row gap-1 items-center cursor-pointer">
              <div className="w-[32px] h-[32px]">
                <Image
                  src="/icons/slider.svg"
                  alt="slider"
                  width={32}
                  height={32}
                />
              </div>
              <span className="text-black ml-1 font-roboto font-medium text-[18px] leading-[21px] underline">
                Filter Results
              </span>
            </div>
            <div className="w-[65%] flex flex-row gap-4">
              <div className="flex flex-row gap-1 items-center justify-center h-[40px] w-[90px] bg-[#0DAFBF] rounded-[35px]">
                <span className="text-white font-roboto-condensed font-medium text-[16px] leading-[18px]">
                  Global
                </span>
                <div className="w-[12px] h-[12px] cursor-pointer">
                  <Image
                    src="/icons/cancel-grey.svg"
                    alt="calcel"
                    width={12}
                    height={12}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-1 items-center justify-center h-[40px] w-[90px] bg-[#0DAFBF] rounded-[35px]">
                <span className="text-white font-roboto-condensed font-medium text-[16px] leading-[18px]">
                  TSMC
                </span>
              </div>
            </div>
            <p className="font-roboto font-normal text-[16px] text-black leading-[18px]">
              Total Reports Available: 33
            </p>
          </div>
          <div className="h-[799px] overflow-y-scroll border border-[#B0B0B0] rounded-br-[0px] rounded-[20px]">
            <div className="bg-[#3B4ACC] gap-8 h-[45px] flex felx-row items-center justify-between py-2 px-10 rounded-t-[20px]">
              <span className="w-[30%] lg:w-[32%] uppercase font-inter font-medium text-white text-[10px] lg:text-[14px] leading-[16px]">
                REPORT TITLE & DESCRIPTION
              </span>
              <span className="w-[15%] uppercase font-inter font-medium text-white text-[10px] lg:text-[14px] leading-[16px]">
                COMPANY PROFILES
              </span>
              <span className="w-[15%] uppercase font-inter font-medium text-white text-[10px] lg:text-[14px] leading-[16px]">
                SEGMENTATION
              </span>
              <div className="w-[20%] lg:w-[15%] flex flex-row items-center">
                <span className="uppercase font-inter font-medium text-white text-[10px] lg:text-[14px] leading-[16px]">
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
              <div id="actions" className="w-[5%] lg:w-[10%]"></div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-start lg:items-center justify-between gap-8 px-4 py-6">
                <div
                  id="title-desc"
                  className="flex flex-row items-center gap-1 w-[40%] lg:w-[34%]"
                >
                  <div id="checkbox">
                    <input type="checkbox" checked={false} className="mr-2" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-roboto-condensed font-normal text-[14px] lg:text-[18px] leading-[18px] lg:leading-[21px] text-black">
                      Global Wafer Cleaning Equipment Market
                    </p>
                    <div className="flex flex-row gap-2 lg:gap-4">
                      <p className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px]">
                        Published: November 2023
                      </p>
                      <p className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px]">
                        Pages: 202
                      </p>
                      <div className="flex flex-row">
                        <span className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px] mr-1">
                          Type:
                        </span>
                        <div className="w-[12px] h-[12px]">
                          <Image
                            src="/icons/file-pdf.svg"
                            alt="pdf"
                            width={12}
                            height={12}
                          />
                        </div>
                        <div className="w-[12px] h-[12px]">
                          <Image
                            src="/icons/file-type-excel.svg"
                            alt="excel"
                            width={12}
                            height={12}
                          />
                        </div>
                      </div>
                    </div>
                    <p className="font-roboto font-light text-black text-[10px] lg:text-[12px] leading-[14px] mt-1">
                      Wafer Cleaning Equipment Market size was valued at USD
                      10.1 Billion in 2023 and is projected to reach USD 20.18
                      Billion by 2030, growing at a CAGR of 10.4% during the
                      forecast period 2024-2030.
                    </p>
                  </div>
                </div>
                <div id="company-profile" className="w-[15%]">
                  <ul className="list-disc font-roboto-condensed font-light text-[10px] lg:text-[14px] text-black leading-[14px] lg:leading-[16px]">
                    <li>Applied Materials, Inc.</li>
                    <li>TSMC</li>
                    <li>Veeco Instruments Inc..</li>
                    <li>SCREEN Holdings Co., Ltd.</li>
                    <li>& 7 others</li>
                  </ul>
                </div>
                <div id="segment" className="w-[15%]">
                  <ul className="list-disc font-roboto-condensed font-light text-[10px] lg:text-[14px] text-black leading-[14px] lg:leading-[16px]">
                    <li>By Product Type</li>
                    <li>By Technology</li>
                    <li>By Application</li>
                    <li>By Geography</li>
                  </ul>
                </div>
                <div id="price" className="w-[10%]">
                  <p className="font-roboto text-[14px] lg:text-[18px] font-normal leading-[21px] text-black">
                    $7,550
                  </p>
                </div>
                <div
                  id="action"
                  className="flex flex-col items-center gap-2 mr-0 lg:mr-12"
                >
                  <button className="border border-[#3B4ACC] text-[#3B4ACC] rounded-[7px] w-[120px] h-[43px] flex items-center justify-center">
                    SELECT
                  </button>
                  <span className="underline text-[#3B4ACC] font-roboto-condensed font-normal text-[14px] leading-[16px]">
                    View Sample
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-start lg:items-center justify-between gap-8 px-4 py-6 bg-[#F0F0F0]">
                <div
                  id="title-desc"
                  className="flex flex-row items-center gap-1 w-[40%] lg:w-[34%]"
                >
                  <div id="checkbox">
                    <input type="checkbox" checked={false} className="mr-2" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-roboto-condensed font-normal text-[14px] lg:text-[18px] leading-[18px] lg:leading-[21px] text-black">
                      Global Wafer Cleaning Equipment Market
                    </p>
                    <div className="flex flex-row gap-2 lg:gap-4">
                      <p className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px]">
                        Published: November 2023
                      </p>
                      <p className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px]">
                        Pages: 202
                      </p>
                      <div className="flex flex-row">
                        <span className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px] mr-1">
                          Type:
                        </span>
                        <div className="w-[12px] h-[12px]">
                          <Image
                            src="/icons/file-pdf.svg"
                            alt="pdf"
                            width={12}
                            height={12}
                          />
                        </div>
                        <div className="w-[12px] h-[12px]">
                          <Image
                            src="/icons/file-type-excel.svg"
                            alt="excel"
                            width={12}
                            height={12}
                          />
                        </div>
                      </div>
                    </div>
                    <p className="font-roboto font-light text-black text-[10px] lg:text-[12px] leading-[14px] mt-1">
                      Wafer Cleaning Equipment Market size was valued at USD
                      10.1 Billion in 2023 and is projected to reach USD 20.18
                      Billion by 2030, growing at a CAGR of 10.4% during the
                      forecast period 2024-2030.
                    </p>
                  </div>
                </div>
                <div id="company-profile" className="w-[15%]">
                  <ul className="list-disc font-roboto-condensed font-light text-[10px] lg:text-[14px] text-black leading-[14px] lg:leading-[16px]">
                    <li>Applied Materials, Inc.</li>
                    <li>TSMC</li>
                    <li>Veeco Instruments Inc..</li>
                    <li>SCREEN Holdings Co., Ltd.</li>
                    <li>& 7 others</li>
                  </ul>
                </div>
                <div id="segment" className="w-[15%]">
                  <ul className="list-disc font-roboto-condensed font-light text-[10px] lg:text-[14px] text-black leading-[14px] lg:leading-[16px]">
                    <li>By Product Type</li>
                    <li>By Technology</li>
                    <li>By Application</li>
                    <li>By Geography</li>
                  </ul>
                </div>
                <div id="price" className="w-[10%]">
                  <p className="font-roboto text-[14px] lg:text-[18px] font-normal leading-[21px] text-black">
                    $7,550
                  </p>
                </div>
                <div
                  id="action"
                  className="flex flex-col items-center gap-2 mr-0 lg:mr-12"
                >
                  <button className="border border-[#3B4ACC] text-[#3B4ACC] rounded-[7px] w-[120px] h-[43px] flex items-center justify-center">
                    SELECT
                  </button>
                  <span className="underline text-[#3B4ACC] font-roboto-condensed font-normal text-[14px] leading-[16px]">
                    View Sample
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-start lg:items-center justify-between gap-8 px-4 py-6">
                <div
                  id="title-desc"
                  className="flex flex-row items-center gap-1 w-[40%] lg:w-[34%]"
                >
                  <div id="checkbox">
                    <input type="checkbox" checked={false} className="mr-2" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-roboto-condensed font-normal text-[14px] lg:text-[18px] leading-[18px] lg:leading-[21px] text-black">
                      Global Wafer Cleaning Equipment Market
                    </p>
                    <div className="flex flex-row gap-2 lg:gap-4">
                      <p className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px]">
                        Published: November 2023
                      </p>
                      <p className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px]">
                        Pages: 202
                      </p>
                      <div className="flex flex-row">
                        <span className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px] mr-1">
                          Type:
                        </span>
                        <div className="w-[12px] h-[12px]">
                          <Image
                            src="/icons/file-pdf.svg"
                            alt="pdf"
                            width={12}
                            height={12}
                          />
                        </div>
                        <div className="w-[12px] h-[12px]">
                          <Image
                            src="/icons/file-type-excel.svg"
                            alt="excel"
                            width={12}
                            height={12}
                          />
                        </div>
                      </div>
                    </div>
                    <p className="font-roboto font-light text-black text-[10px] lg:text-[12px] leading-[14px] mt-1">
                      Wafer Cleaning Equipment Market size was valued at USD
                      10.1 Billion in 2023 and is projected to reach USD 20.18
                      Billion by 2030, growing at a CAGR of 10.4% during the
                      forecast period 2024-2030.
                    </p>
                  </div>
                </div>
                <div id="company-profile" className="w-[15%]">
                  <ul className="list-disc font-roboto-condensed font-light text-[10px] lg:text-[14px] text-black leading-[14px] lg:leading-[16px]">
                    <li>Applied Materials, Inc.</li>
                    <li>TSMC</li>
                    <li>Veeco Instruments Inc..</li>
                    <li>SCREEN Holdings Co., Ltd.</li>
                    <li>& 7 others</li>
                  </ul>
                </div>
                <div id="segment" className="w-[15%]">
                  <ul className="list-disc font-roboto-condensed font-light text-[10px] lg:text-[14px] text-black leading-[14px] lg:leading-[16px]">
                    <li>By Product Type</li>
                    <li>By Technology</li>
                    <li>By Application</li>
                    <li>By Geography</li>
                  </ul>
                </div>
                <div id="price" className="w-[10%]">
                  <p className="font-roboto text-[14px] lg:text-[18px] font-normal leading-[21px] text-black">
                    $7,550
                  </p>
                </div>
                <div
                  id="action"
                  className="flex flex-col items-center gap-2 mr-0 lg:mr-12"
                >
                  <button className="border border-[#3B4ACC] text-[#3B4ACC] rounded-[7px] w-[120px] h-[43px] flex items-center justify-center">
                    SELECT
                  </button>
                  <span className="underline text-[#3B4ACC] font-roboto-condensed font-normal text-[14px] leading-[16px]">
                    View Sample
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-start lg:items-center justify-between gap-8 px-4 py-6 bg-[#F0F0F0]">
                <div
                  id="title-desc"
                  className="flex flex-row items-center gap-1 w-[40%] lg:w-[34%]"
                >
                  <div id="checkbox">
                    <input type="checkbox" checked={false} className="mr-2" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-roboto-condensed font-normal text-[14px] lg:text-[18px] leading-[18px] lg:leading-[21px] text-black">
                      Global Wafer Cleaning Equipment Market
                    </p>
                    <div className="flex flex-row gap-2 lg:gap-4">
                      <p className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px]">
                        Published: November 2023
                      </p>
                      <p className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px]">
                        Pages: 202
                      </p>
                      <div className="flex flex-row">
                        <span className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px] mr-1">
                          Type:
                        </span>
                        <div className="w-[12px] h-[12px]">
                          <Image
                            src="/icons/file-pdf.svg"
                            alt="pdf"
                            width={12}
                            height={12}
                          />
                        </div>
                        <div className="w-[12px] h-[12px]">
                          <Image
                            src="/icons/file-type-excel.svg"
                            alt="excel"
                            width={12}
                            height={12}
                          />
                        </div>
                      </div>
                    </div>
                    <p className="font-roboto font-light text-black text-[10px] lg:text-[12px] leading-[14px] mt-1">
                      Wafer Cleaning Equipment Market size was valued at USD
                      10.1 Billion in 2023 and is projected to reach USD 20.18
                      Billion by 2030, growing at a CAGR of 10.4% during the
                      forecast period 2024-2030.
                    </p>
                  </div>
                </div>
                <div id="company-profile" className="w-[15%]">
                  <ul className="list-disc font-roboto-condensed font-light text-[10px] lg:text-[14px] text-black leading-[14px] lg:leading-[16px]">
                    <li>Applied Materials, Inc.</li>
                    <li>TSMC</li>
                    <li>Veeco Instruments Inc..</li>
                    <li>SCREEN Holdings Co., Ltd.</li>
                    <li>& 7 others</li>
                  </ul>
                </div>
                <div id="segment" className="w-[15%]">
                  <ul className="list-disc font-roboto-condensed font-light text-[10px] lg:text-[14px] text-black leading-[14px] lg:leading-[16px]">
                    <li>By Product Type</li>
                    <li>By Technology</li>
                    <li>By Application</li>
                    <li>By Geography</li>
                  </ul>
                </div>
                <div id="price" className="w-[10%]">
                  <p className="font-roboto text-[14px] lg:text-[18px] font-normal leading-[21px] text-black">
                    $7,550
                  </p>
                </div>
                <div
                  id="action"
                  className="flex flex-col items-center gap-2 mr-0 lg:mr-12"
                >
                  <button className="border border-[#3B4ACC] text-[#3B4ACC] rounded-[7px] w-[120px] h-[43px] flex items-center justify-center">
                    SELECT
                  </button>
                  <span className="underline text-[#3B4ACC] font-roboto-condensed font-normal text-[14px] leading-[16px]">
                    View Sample
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-start lg:items-center justify-between gap-8 px-4 py-6">
                <div
                  id="title-desc"
                  className="flex flex-row items-center gap-1 w-[40%] lg:w-[34%]"
                >
                  <div id="checkbox">
                    <input type="checkbox" checked={false} className="mr-2" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-roboto-condensed font-normal text-[14px] lg:text-[18px] leading-[18px] lg:leading-[21px] text-black">
                      Global Wafer Cleaning Equipment Market
                    </p>
                    <div className="flex flex-row gap-2 lg:gap-4">
                      <p className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px]">
                        Published: November 2023
                      </p>
                      <p className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px]">
                        Pages: 202
                      </p>
                      <div className="flex flex-row">
                        <span className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px] mr-1">
                          Type:
                        </span>
                        <div className="w-[12px] h-[12px]">
                          <Image
                            src="/icons/file-pdf.svg"
                            alt="pdf"
                            width={12}
                            height={12}
                          />
                        </div>
                        <div className="w-[12px] h-[12px]">
                          <Image
                            src="/icons/file-type-excel.svg"
                            alt="excel"
                            width={12}
                            height={12}
                          />
                        </div>
                      </div>
                    </div>
                    <p className="font-roboto font-light text-black text-[10px] lg:text-[12px] leading-[14px] mt-1">
                      Wafer Cleaning Equipment Market size was valued at USD
                      10.1 Billion in 2023 and is projected to reach USD 20.18
                      Billion by 2030, growing at a CAGR of 10.4% during the
                      forecast period 2024-2030.
                    </p>
                  </div>
                </div>
                <div id="company-profile" className="w-[15%]">
                  <ul className="list-disc font-roboto-condensed font-light text-[10px] lg:text-[14px] text-black leading-[14px] lg:leading-[16px]">
                    <li>Applied Materials, Inc.</li>
                    <li>TSMC</li>
                    <li>Veeco Instruments Inc..</li>
                    <li>SCREEN Holdings Co., Ltd.</li>
                    <li>& 7 others</li>
                  </ul>
                </div>
                <div id="segment" className="w-[15%]">
                  <ul className="list-disc font-roboto-condensed font-light text-[10px] lg:text-[14px] text-black leading-[14px] lg:leading-[16px]">
                    <li>By Product Type</li>
                    <li>By Technology</li>
                    <li>By Application</li>
                    <li>By Geography</li>
                  </ul>
                </div>
                <div id="price" className="w-[10%]">
                  <p className="font-roboto text-[14px] lg:text-[18px] font-normal leading-[21px] text-black">
                    $7,550
                  </p>
                </div>
                <div
                  id="action"
                  className="flex flex-col items-center gap-2 mr-0 lg:mr-12"
                >
                  <button className="border border-[#3B4ACC] text-[#3B4ACC] rounded-[7px] w-[120px] h-[43px] flex items-center justify-center">
                    SELECT
                  </button>
                  <span className="underline text-[#3B4ACC] font-roboto-condensed font-normal text-[14px] leading-[16px]">
                    View Sample
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-start lg:items-center justify-between gap-8 px-4 py-6 bg-[#F0F0F0]">
                <div
                  id="title-desc"
                  className="flex flex-row items-center gap-1 w-[40%] lg:w-[34%]"
                >
                  <div id="checkbox">
                    <input type="checkbox" checked={false} className="mr-2" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-roboto-condensed font-normal text-[14px] lg:text-[18px] leading-[18px] lg:leading-[21px] text-black">
                      Global Wafer Cleaning Equipment Market
                    </p>
                    <div className="flex flex-row gap-2 lg:gap-4">
                      <p className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px]">
                        Published: November 2023
                      </p>
                      <p className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px]">
                        Pages: 202
                      </p>
                      <div className="flex flex-row">
                        <span className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px] mr-1">
                          Type:
                        </span>
                        <div className="w-[12px] h-[12px]">
                          <Image
                            src="/icons/file-pdf.svg"
                            alt="pdf"
                            width={12}
                            height={12}
                          />
                        </div>
                        <div className="w-[12px] h-[12px]">
                          <Image
                            src="/icons/file-type-excel.svg"
                            alt="excel"
                            width={12}
                            height={12}
                          />
                        </div>
                      </div>
                    </div>
                    <p className="font-roboto font-light text-black text-[10px] lg:text-[12px] leading-[14px] mt-1">
                      Wafer Cleaning Equipment Market size was valued at USD
                      10.1 Billion in 2023 and is projected to reach USD 20.18
                      Billion by 2030, growing at a CAGR of 10.4% during the
                      forecast period 2024-2030.
                    </p>
                  </div>
                </div>
                <div id="company-profile" className="w-[15%]">
                  <ul className="list-disc font-roboto-condensed font-light text-[10px] lg:text-[14px] text-black leading-[14px] lg:leading-[16px]">
                    <li>Applied Materials, Inc.</li>
                    <li>TSMC</li>
                    <li>Veeco Instruments Inc..</li>
                    <li>SCREEN Holdings Co., Ltd.</li>
                    <li>& 7 others</li>
                  </ul>
                </div>
                <div id="segment" className="w-[15%]">
                  <ul className="list-disc font-roboto-condensed font-light text-[10px] lg:text-[14px] text-black leading-[14px] lg:leading-[16px]">
                    <li>By Product Type</li>
                    <li>By Technology</li>
                    <li>By Application</li>
                    <li>By Geography</li>
                  </ul>
                </div>
                <div id="price" className="w-[10%]">
                  <p className="font-roboto text-[14px] lg:text-[18px] font-normal leading-[21px] text-black">
                    $7,550
                  </p>
                </div>
                <div
                  id="action"
                  className="flex flex-col items-center gap-2 mr-0 lg:mr-12"
                >
                  <button className="border border-[#3B4ACC] text-[#3B4ACC] rounded-[7px] w-[120px] h-[43px] flex items-center justify-center">
                    SELECT
                  </button>
                  <span className="underline text-[#3B4ACC] font-roboto-condensed font-normal text-[14px] leading-[16px]">
                    View Sample
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-start lg:items-center justify-between gap-8 px-4 py-6">
                <div
                  id="title-desc"
                  className="flex flex-row items-center gap-1 w-[40%] lg:w-[34%]"
                >
                  <div id="checkbox">
                    <input type="checkbox" checked={false} className="mr-2" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-roboto-condensed font-normal text-[14px] lg:text-[18px] leading-[18px] lg:leading-[21px] text-black">
                      Global Wafer Cleaning Equipment Market
                    </p>
                    <div className="flex flex-row gap-2 lg:gap-4">
                      <p className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px]">
                        Published: November 2023
                      </p>
                      <p className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px]">
                        Pages: 202
                      </p>
                      <div className="flex flex-row">
                        <span className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px] mr-1">
                          Type:
                        </span>
                        <div className="w-[12px] h-[12px]">
                          <Image
                            src="/icons/file-pdf.svg"
                            alt="pdf"
                            width={12}
                            height={12}
                          />
                        </div>
                        <div className="w-[12px] h-[12px]">
                          <Image
                            src="/icons/file-type-excel.svg"
                            alt="excel"
                            width={12}
                            height={12}
                          />
                        </div>
                      </div>
                    </div>
                    <p className="font-roboto font-light text-black text-[10px] lg:text-[12px] leading-[14px] mt-1">
                      Wafer Cleaning Equipment Market size was valued at USD
                      10.1 Billion in 2023 and is projected to reach USD 20.18
                      Billion by 2030, growing at a CAGR of 10.4% during the
                      forecast period 2024-2030.
                    </p>
                  </div>
                </div>
                <div id="company-profile" className="w-[15%]">
                  <ul className="list-disc font-roboto-condensed font-light text-[10px] lg:text-[14px] text-black leading-[14px] lg:leading-[16px]">
                    <li>Applied Materials, Inc.</li>
                    <li>TSMC</li>
                    <li>Veeco Instruments Inc..</li>
                    <li>SCREEN Holdings Co., Ltd.</li>
                    <li>& 7 others</li>
                  </ul>
                </div>
                <div id="segment" className="w-[15%]">
                  <ul className="list-disc font-roboto-condensed font-light text-[10px] lg:text-[14px] text-black leading-[14px] lg:leading-[16px]">
                    <li>By Product Type</li>
                    <li>By Technology</li>
                    <li>By Application</li>
                    <li>By Geography</li>
                  </ul>
                </div>
                <div id="price" className="w-[10%]">
                  <p className="font-roboto text-[14px] lg:text-[18px] font-normal leading-[21px] text-black">
                    $7,550
                  </p>
                </div>
                <div
                  id="action"
                  className="flex flex-col items-center gap-2 mr-0 lg:mr-12"
                >
                  <button className="border border-[#3B4ACC] text-[#3B4ACC] rounded-[7px] w-[120px] h-[43px] flex items-center justify-center">
                    SELECT
                  </button>
                  <span className="underline text-[#3B4ACC] font-roboto-condensed font-normal text-[14px] leading-[16px]">
                    View Sample
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-start lg:items-center justify-between gap-8 px-4 py-6 bg-[#F0F0F0]">
                <div
                  id="title-desc"
                  className="flex flex-row items-center gap-1 w-[40%] lg:w-[34%]"
                >
                  <div id="checkbox">
                    <input type="checkbox" checked={false} className="mr-2" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-roboto-condensed font-normal text-[14px] lg:text-[18px] leading-[18px] lg:leading-[21px] text-black">
                      Global Wafer Cleaning Equipment Market
                    </p>
                    <div className="flex flex-row gap-2 lg:gap-4">
                      <p className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px]">
                        Published: November 2023
                      </p>
                      <p className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px]">
                        Pages: 202
                      </p>
                      <div className="flex flex-row">
                        <span className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px] mr-1">
                          Type:
                        </span>
                        <div className="w-[12px] h-[12px]">
                          <Image
                            src="/icons/file-pdf.svg"
                            alt="pdf"
                            width={12}
                            height={12}
                          />
                        </div>
                        <div className="w-[12px] h-[12px]">
                          <Image
                            src="/icons/file-type-excel.svg"
                            alt="excel"
                            width={12}
                            height={12}
                          />
                        </div>
                      </div>
                    </div>
                    <p className="font-roboto font-light text-black text-[10px] lg:text-[12px] leading-[14px] mt-1">
                      Wafer Cleaning Equipment Market size was valued at USD
                      10.1 Billion in 2023 and is projected to reach USD 20.18
                      Billion by 2030, growing at a CAGR of 10.4% during the
                      forecast period 2024-2030.
                    </p>
                  </div>
                </div>
                <div id="company-profile" className="w-[15%]">
                  <ul className="list-disc font-roboto-condensed font-light text-[10px] lg:text-[14px] text-black leading-[14px] lg:leading-[16px]">
                    <li>Applied Materials, Inc.</li>
                    <li>TSMC</li>
                    <li>Veeco Instruments Inc..</li>
                    <li>SCREEN Holdings Co., Ltd.</li>
                    <li>& 7 others</li>
                  </ul>
                </div>
                <div id="segment" className="w-[15%]">
                  <ul className="list-disc font-roboto-condensed font-light text-[10px] lg:text-[14px] text-black leading-[14px] lg:leading-[16px]">
                    <li>By Product Type</li>
                    <li>By Technology</li>
                    <li>By Application</li>
                    <li>By Geography</li>
                  </ul>
                </div>
                <div id="price" className="w-[10%]">
                  <p className="font-roboto text-[14px] lg:text-[18px] font-normal leading-[21px] text-black">
                    $7,550
                  </p>
                </div>
                <div
                  id="action"
                  className="flex flex-col items-center gap-2 mr-0 lg:mr-12"
                >
                  <button className="border border-[#3B4ACC] text-[#3B4ACC] rounded-[7px] w-[120px] h-[43px] flex items-center justify-center">
                    SELECT
                  </button>
                  <span className="underline text-[#3B4ACC] font-roboto-condensed font-normal text-[14px] leading-[16px]">
                    View Sample
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-start lg:items-center justify-between gap-8 px-4 py-6">
                <div
                  id="title-desc"
                  className="flex flex-row items-center gap-1 w-[40%] lg:w-[34%]"
                >
                  <div id="checkbox">
                    <input type="checkbox" checked={false} className="mr-2" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-roboto-condensed font-normal text-[14px] lg:text-[18px] leading-[18px] lg:leading-[21px] text-black">
                      Global Wafer Cleaning Equipment Market
                    </p>
                    <div className="flex flex-row gap-2 lg:gap-4">
                      <p className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px]">
                        Published: November 2023
                      </p>
                      <p className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px]">
                        Pages: 202
                      </p>
                      <div className="flex flex-row">
                        <span className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px] mr-1">
                          Type:
                        </span>
                        <div className="w-[12px] h-[12px]">
                          <Image
                            src="/icons/file-pdf.svg"
                            alt="pdf"
                            width={12}
                            height={12}
                          />
                        </div>
                        <div className="w-[12px] h-[12px]">
                          <Image
                            src="/icons/file-type-excel.svg"
                            alt="excel"
                            width={12}
                            height={12}
                          />
                        </div>
                      </div>
                    </div>
                    <p className="font-roboto font-light text-black text-[10px] lg:text-[12px] leading-[14px] mt-1">
                      Wafer Cleaning Equipment Market size was valued at USD
                      10.1 Billion in 2023 and is projected to reach USD 20.18
                      Billion by 2030, growing at a CAGR of 10.4% during the
                      forecast period 2024-2030.
                    </p>
                  </div>
                </div>
                <div id="company-profile" className="w-[15%]">
                  <ul className="list-disc font-roboto-condensed font-light text-[10px] lg:text-[14px] text-black leading-[14px] lg:leading-[16px]">
                    <li>Applied Materials, Inc.</li>
                    <li>TSMC</li>
                    <li>Veeco Instruments Inc..</li>
                    <li>SCREEN Holdings Co., Ltd.</li>
                    <li>& 7 others</li>
                  </ul>
                </div>
                <div id="segment" className="w-[15%]">
                  <ul className="list-disc font-roboto-condensed font-light text-[10px] lg:text-[14px] text-black leading-[14px] lg:leading-[16px]">
                    <li>By Product Type</li>
                    <li>By Technology</li>
                    <li>By Application</li>
                    <li>By Geography</li>
                  </ul>
                </div>
                <div id="price" className="w-[10%]">
                  <p className="font-roboto text-[14px] lg:text-[18px] font-normal leading-[21px] text-black">
                    $7,550
                  </p>
                </div>
                <div
                  id="action"
                  className="flex flex-col items-center gap-2 mr-0 lg:mr-12"
                >
                  <button className="border border-[#3B4ACC] text-[#3B4ACC] rounded-[7px] w-[120px] h-[43px] flex items-center justify-center">
                    SELECT
                  </button>
                  <span className="underline text-[#3B4ACC] font-roboto-condensed font-normal text-[14px] leading-[16px]">
                    View Sample
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-start lg:items-center justify-between gap-8 px-4 py-6 bg-[#F0F0F0]">
                <div
                  id="title-desc"
                  className="flex flex-row items-center gap-1 w-[40%] lg:w-[34%]"
                >
                  <div id="checkbox">
                    <input type="checkbox" checked={false} className="mr-2" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-roboto-condensed font-normal text-[14px] lg:text-[18px] leading-[18px] lg:leading-[21px] text-black">
                      Global Wafer Cleaning Equipment Market
                    </p>
                    <div className="flex flex-row gap-2 lg:gap-4">
                      <p className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px]">
                        Published: November 2023
                      </p>
                      <p className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px]">
                        Pages: 202
                      </p>
                      <div className="flex flex-row">
                        <span className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px] mr-1">
                          Type:
                        </span>
                        <div className="w-[12px] h-[12px]">
                          <Image
                            src="/icons/file-pdf.svg"
                            alt="pdf"
                            width={12}
                            height={12}
                          />
                        </div>
                        <div className="w-[12px] h-[12px]">
                          <Image
                            src="/icons/file-type-excel.svg"
                            alt="excel"
                            width={12}
                            height={12}
                          />
                        </div>
                      </div>
                    </div>
                    <p className="font-roboto font-light text-black text-[10px] lg:text-[12px] leading-[14px] mt-1">
                      Wafer Cleaning Equipment Market size was valued at USD
                      10.1 Billion in 2023 and is projected to reach USD 20.18
                      Billion by 2030, growing at a CAGR of 10.4% during the
                      forecast period 2024-2030.
                    </p>
                  </div>
                </div>
                <div id="company-profile" className="w-[15%]">
                  <ul className="list-disc font-roboto-condensed font-light text-[10px] lg:text-[14px] text-black leading-[14px] lg:leading-[16px]">
                    <li>Applied Materials, Inc.</li>
                    <li>TSMC</li>
                    <li>Veeco Instruments Inc..</li>
                    <li>SCREEN Holdings Co., Ltd.</li>
                    <li>& 7 others</li>
                  </ul>
                </div>
                <div id="segment" className="w-[15%]">
                  <ul className="list-disc font-roboto-condensed font-light text-[10px] lg:text-[14px] text-black leading-[14px] lg:leading-[16px]">
                    <li>By Product Type</li>
                    <li>By Technology</li>
                    <li>By Application</li>
                    <li>By Geography</li>
                  </ul>
                </div>
                <div id="price" className="w-[10%]">
                  <p className="font-roboto text-[14px] lg:text-[18px] font-normal leading-[21px] text-black">
                    $7,550
                  </p>
                </div>
                <div
                  id="action"
                  className="flex flex-col items-center gap-2 mr-0 lg:mr-12"
                >
                  <button className="border border-[#3B4ACC] text-[#3B4ACC] rounded-[7px] w-[120px] h-[43px] flex items-center justify-center">
                    SELECT
                  </button>
                  <span className="underline text-[#3B4ACC] font-roboto-condensed font-normal text-[14px] leading-[16px]">
                    View Sample
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-start lg:items-center justify-between gap-8 px-4 py-6">
                <div
                  id="title-desc"
                  className="flex flex-row items-center gap-1 w-[40%] lg:w-[34%]"
                >
                  <div id="checkbox">
                    <input type="checkbox" checked={false} className="mr-2" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-roboto-condensed font-normal text-[14px] lg:text-[18px] leading-[18px] lg:leading-[21px] text-black">
                      Global Wafer Cleaning Equipment Market
                    </p>
                    <div className="flex flex-row gap-2 lg:gap-4">
                      <p className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px]">
                        Published: November 2023
                      </p>
                      <p className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px]">
                        Pages: 202
                      </p>
                      <div className="flex flex-row">
                        <span className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px] mr-1">
                          Type:
                        </span>
                        <div className="w-[12px] h-[12px]">
                          <Image
                            src="/icons/file-pdf.svg"
                            alt="pdf"
                            width={12}
                            height={12}
                          />
                        </div>
                        <div className="w-[12px] h-[12px]">
                          <Image
                            src="/icons/file-type-excel.svg"
                            alt="excel"
                            width={12}
                            height={12}
                          />
                        </div>
                      </div>
                    </div>
                    <p className="font-roboto font-light text-black text-[10px] lg:text-[12px] leading-[14px] mt-1">
                      Wafer Cleaning Equipment Market size was valued at USD
                      10.1 Billion in 2023 and is projected to reach USD 20.18
                      Billion by 2030, growing at a CAGR of 10.4% during the
                      forecast period 2024-2030.
                    </p>
                  </div>
                </div>
                <div id="company-profile" className="w-[15%]">
                  <ul className="list-disc font-roboto-condensed font-light text-[10px] lg:text-[14px] text-black leading-[14px] lg:leading-[16px]">
                    <li>Applied Materials, Inc.</li>
                    <li>TSMC</li>
                    <li>Veeco Instruments Inc..</li>
                    <li>SCREEN Holdings Co., Ltd.</li>
                    <li>& 7 others</li>
                  </ul>
                </div>
                <div id="segment" className="w-[15%]">
                  <ul className="list-disc font-roboto-condensed font-light text-[10px] lg:text-[14px] text-black leading-[14px] lg:leading-[16px]">
                    <li>By Product Type</li>
                    <li>By Technology</li>
                    <li>By Application</li>
                    <li>By Geography</li>
                  </ul>
                </div>
                <div id="price" className="w-[10%]">
                  <p className="font-roboto text-[14px] lg:text-[18px] font-normal leading-[21px] text-black">
                    $7,550
                  </p>
                </div>
                <div
                  id="action"
                  className="flex flex-col items-center gap-2 mr-0 lg:mr-12"
                >
                  <button className="border border-[#3B4ACC] text-[#3B4ACC] rounded-[7px] w-[120px] h-[43px] flex items-center justify-center">
                    SELECT
                  </button>
                  <span className="underline text-[#3B4ACC] font-roboto-condensed font-normal text-[14px] leading-[16px]">
                    View Sample
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-start lg:items-center justify-between gap-8 px-4 py-6 bg-[#F0F0F0]">
                <div
                  id="title-desc"
                  className="flex flex-row items-center gap-1 w-[40%] lg:w-[34%]"
                >
                  <div id="checkbox">
                    <input type="checkbox" checked={false} className="mr-2" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-roboto-condensed font-normal text-[14px] lg:text-[18px] leading-[18px] lg:leading-[21px] text-black">
                      Global Wafer Cleaning Equipment Market
                    </p>
                    <div className="flex flex-row gap-2 lg:gap-4">
                      <p className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px]">
                        Published: November 2023
                      </p>
                      <p className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px]">
                        Pages: 202
                      </p>
                      <div className="flex flex-row">
                        <span className="font-roboto-condensed font-light text-[10px] lg:text-[11px] text-black leading-[12px] mr-1">
                          Type:
                        </span>
                        <div className="w-[12px] h-[12px]">
                          <Image
                            src="/icons/file-pdf.svg"
                            alt="pdf"
                            width={12}
                            height={12}
                          />
                        </div>
                        <div className="w-[12px] h-[12px]">
                          <Image
                            src="/icons/file-type-excel.svg"
                            alt="excel"
                            width={12}
                            height={12}
                          />
                        </div>
                      </div>
                    </div>
                    <p className="font-roboto font-light text-black text-[10px] lg:text-[12px] leading-[14px] mt-1">
                      Wafer Cleaning Equipment Market size was valued at USD
                      10.1 Billion in 2023 and is projected to reach USD 20.18
                      Billion by 2030, growing at a CAGR of 10.4% during the
                      forecast period 2024-2030.
                    </p>
                  </div>
                </div>
                <div id="company-profile" className="w-[15%]">
                  <ul className="list-disc font-roboto-condensed font-light text-[10px] lg:text-[14px] text-black leading-[14px] lg:leading-[16px]">
                    <li>Applied Materials, Inc.</li>
                    <li>TSMC</li>
                    <li>Veeco Instruments Inc..</li>
                    <li>SCREEN Holdings Co., Ltd.</li>
                    <li>& 7 others</li>
                  </ul>
                </div>
                <div id="segment" className="w-[15%]">
                  <ul className="list-disc font-roboto-condensed font-light text-[10px] lg:text-[14px] text-black leading-[14px] lg:leading-[16px]">
                    <li>By Product Type</li>
                    <li>By Technology</li>
                    <li>By Application</li>
                    <li>By Geography</li>
                  </ul>
                </div>
                <div id="price" className="w-[10%]">
                  <p className="font-roboto text-[14px] lg:text-[18px] font-normal leading-[21px] text-black">
                    $7,550
                  </p>
                </div>
                <div
                  id="action"
                  className="flex flex-col items-center gap-2 mr-0 lg:mr-12"
                >
                  <button className="border border-[#3B4ACC] text-[#3B4ACC] rounded-[7px] w-[120px] h-[43px] flex items-center justify-center">
                    SELECT
                  </button>
                  <span className="underline text-[#3B4ACC] font-roboto-condensed font-normal text-[14px] leading-[16px]">
                    View Sample
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items">
            <div className="hidden md:flex w-[50%] lg:w-full px-6 lg:px-12 flex flex-col gap-6">
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
              <button
                onClick={() => router.push("/invoice")}
                className="text-white text-[16px] font-bold font-inter leading-[19px] w-full rounded-5px bg-[#0DAFBF] py-4 shadow-table-content"
              >
                Proceed to Buy
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden md:flex h-[442px] bg-[#72bf0f] rounded-[10px] py-16 mx-12 lg:mx-24 bg-cover bg-center flex flex-row"
        style={{ backgroundImage: "url('/images/sales-benefits-cover.png')" }}
      >
        <div className="flex flex-col">
          <p className="font-inter text-white font-extrabold text-[22px] lg:text-[36px] leading-[34px] lg:leading-[54px] mb-4 pl-10 w-[70%]">
            BENEFITS OF LICENSE TYPES
          </p>
          <div className="flex flex-col items-start gap-1">
            <div className="pr-2 pl-10 py-1">
              <p className="text-white font-inter font-normal text-[18px] lg:text-[24px] leading-[26px] lg:leading-[36px]">
                1-Report License
              </p>
            </div>
            <div className="bg-white shadow-table-content px-2 py-1 w-full">
              <p className="text-[#71BF0D] font-inter font-semibold text-[18px] lg:text-[24px] leading-[26px] lg:leading-[36px] pl-10">
                Bundled License
              </p>
            </div>
            <div className="pr-2 pl-10 py-1">
              <p className="text-white font-inter font-normal text-[18px] lg:text-[24px] leading-[26px] lg:leading-[36px]">
                Consulting License
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-6 pr-10">
          <div className="bg-white rounded-[10px] flex flex-col items-center justify-center py-6 px-1 shadow-table-content w-[140px] h-[240px] lg:w-[250px] lg:h-[324px] text-center">
            <div className="w-[55px] h-[55px] lg:w-[100px] lg:h-[100px] mb-4">
              <Image
                src={"/icons/supplier.svg"}
                alt="market-insight"
                width={100}
                height={100}
              />
            </div>
            <p className="text-black text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] font-normal font-roboto-serif mb-2 mx-6">
              Industry-wide Insights
            </p>
            <p className="font-roboto-condensed font-light text-[12px] lg:text-[16px] leading-[16px] lg:leading-[24px] text-black">
              Get segmentation and market analysis across sub-markets of the
              industry.
            </p>
          </div>
          <div className="bg-white rounded-[10px] flex flex-col items-center justify-center py-6 px-2 shadow-table-content w-[140px] h-[240px] lg:w-[250px] lg:h-[324px] text-center">
            <div className="w-[55px] h-[55px] lg:w-[100px] lg:h-[100px] mb-4">
              <Image
                src={"/icons/segmentation.svg"}
                alt="analysis"
                width={100}
                height={100}
              />
            </div>
            <p className="text-black text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] font-normal font-roboto-serif mb-2 mx-6">
              Competitive Landscape Analysis
            </p>
            <p className="font-roboto-condensed font-light text-[12px] lg:text-[16px] leading-[16px] lg:leading-[24px] text-black">
              Get SWOT analysis, product benchmarking & financial insights
              across the industry.
            </p>
          </div>
          <div className="bg-white rounded-[10px] flex flex-col items-center justify-center py-6 px-2 shadow-table-content w-[140px] h-[240px] lg:w-[250px] lg:h-[324px] text-center">
            <div className="w-[55px] h-[55px] lg:w-[100px] lg:h-[100px] mb-4">
              <Image
                src={"/icons/help.svg"}
                alt="help"
                width={100}
                height={100}
              />
            </div>
            <p className="text-black text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] font-normal font-roboto-serif mb-2 mx-6">
              12 month Analyst Support
            </p>
            <p className="font-roboto-condensed font-light text-[12px] lg:text-[16px] leading-[16px] lg:leading-[24px] text-black">
              Get upto 12 months post-purchase support from our Analysts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BundledLicense;
