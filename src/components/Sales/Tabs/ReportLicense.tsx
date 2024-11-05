import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ReportLicense = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    level: "GLOBAL-LEVEL",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const plans = [
    {
      name: "Single User",
      price: "$3,950",
      features: [
        "1 User Access",
        "View PDF reports online",
        "7% Report Customization",
        "10 Days Free Analyst Support",
      ],
    },
    {
      name: "Enterprise User",
      price: "$7,550",
      features: [
        "Unlimited User Accesses",
        "Ready-to-use PPT/Keynote",
        "25% Report Customization",
        "60 Days Free Analyst Support",
        "Executive Summary Presentation",
        "Downloadable PDF + Excel Reports",
      ],
    },
    {
      name: "Multi User",
      price: "$4,850",
      features: [
        "Up to 5 User Accesses",
        "View PDF Reports Online",
        "Downloadable Excel Report",
        "30 Days Free Analyst Support",
        "15% Report Customization",
      ],
    },
  ];
  return (
    <div className="flex flex-col height-fill-available">
      <div className="flex flex-row justify-center items-center pb-14 gap-4 md:gap-8">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="level"
            value="GLOBAL-LEVEL"
            className={`w-4 h-4 border-black border-2 outline-none focus:outline-none focus:ring-0 ${
              formData.level === "GLOBAL-LEVEL"
                ? "bg-[#3B4ACC] border-0"
                : "bg-white border-black"
            }`}
            checked={formData.level === "GLOBAL-LEVEL"}
            onChange={handleChange}
          />
          <span className="font-normal font-roboto leading-[25px] text-[12px] md:text-[18px] text-black">
            GLOBAL-LEVEL
          </span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="level"
            value="REGIONAL-LEVEL"
            className={`w-4 h-4 border-black border-2 outline-none focus:outline-none focus:ring-0 ${
              formData.level === "REGIONAL-LEVEL"
                ? "bg-[#3B4ACC] border-0"
                : "bg-white border-black"
            }`}
            checked={formData.level === "REGIONAL-LEVEL"}
            onChange={handleChange}
          />
          <span className="font-normal font-roboto leading-[25px] text-[12px] md:text-[18px] text-black">
            REGIONAL-LEVEL
          </span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="level"
            value="COUNTRY-LEVEL"
            className={`w-4 h-4 border-black border-2 outline-none focus:outline-none focus:ring-0 ${
              formData.level === "COUNTRY-LEVEL"
                ? "bg-[#3B4ACC] border-0"
                : "bg-white border-black"
            }`}
            checked={formData.level === "COUNTRY-LEVEL"}
            onChange={handleChange}
          />
          <span className="font-normal font-roboto leading-[25px] text-[12px] md:text-[18px] text-black">
            COUNTRY-LEVEL
          </span>
        </label>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:items-end lg:justify-center lg:gap-0">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`p-6 rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] shadow-[2px_-2px_4px_0px_#00000040,0px_4px_4px_0px_#00000040] text-center ${
              index === 1
                ? "bg-[#3C4BCF] h-[618px] w-[380px] text-white rounded-[20px]"
                : "bg-white text-[#0B0914] h-[540px] w-[365px]"
            } ${
              index === plans.length - 1 && "rounded-tr-[20px] rounded-tl-[0px]"
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
              onClick={() => router.push("/invoice")}
            >
              Proceed to Buy
            </button>
            <div className="flex flex-col items-start mt-3">
              <h4 className="font-normal font-inter text-[22px] leading-[26px] text-[#CCCCCC] mb-6">
                What Youll Get
              </h4>
              <ul className={`${index === 1 ? "space-y-6" : "space-y-4"}`}>
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
                      className={`mr-2 text-left font-inter text-[18px] leading-[21px] font-normal ${
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
        ))}
      </div>
      <div className="my-16 px-8 md:px-12 lg:px-24 md:flex-row md:flex-wrap flex-wrap flex lg:flex-row items-center justify-between lg:gap-0 gap-8">
        <div className="flex flex-col">
          <p className="font-roboto-serif font-light text-[#666666] text-[16px] leading-[18px] mb-2">
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
      <div
        className="hidden md:flex h-[442px] bg-[#72bf0f] rounded-[10px] py-16 mx-8 md:mx-12 lg:mx-24 bg-cover bg-center flex flex-row"
        style={{ backgroundImage: "url('/images/sales-benefits-cover.png')" }}
      >
        <div className="flex flex-col">
          <p className="font-inter text-white font-extrabold text-[22px] lg:text-[36px] leading-[34px] lg:leading-[54px] mb-4 pl-10 w-[70%]">
            BENEFITS OF LICENSE TYPES
          </p>
          <div className="flex flex-col items-start gap-1">
            <div className="bg-white shadow-table-content px-2 py-1 w-full">
              <p className="text-[#71BF0D] font-inter font-semibold text-[18px] lg:text-[24px] leading-[26px] lg:leading-[36px] pl-10">
                1-Report License
              </p>
            </div>
            <div className="pr-2 pl-10 py-1">
              <p className="text-white font-inter font-normal text-[18px] lg:text-[24px] leading-[26px] lg:leading-[36px]">
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
                src={"/icons/insights.svg"}
                alt="market-insight"
                width={100}
                height={100}
              />
            </div>
            <p className="text-black text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] font-normal font-roboto-serif mb-2 mx-4">
              Targeted Market Insights
            </p>
            <p className="font-roboto-condensed font-light text-[12px] lg:text-[16px] leading-[16px] lg:leading-[24px] text-black">
              Get report-specific segmentation and market analysis.{" "}
            </p>
          </div>
          <div className="bg-white rounded-[10px] flex flex-col items-center justify-center py-6 px-2 shadow-table-content w-[140px] h-[240px] lg:w-[250px] lg:h-[324px] text-center">
            <div className="w-[55px] h-[55px] lg:w-[100px] lg:h-[100px] mb-4">
              <Image
                src={"/icons/analysis.svg"}
                alt="analysis"
                width={100}
                height={100}
              />
            </div>
            <p className="text-black text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] font-normal font-roboto-serif mb-2">
              Hyper-focused Competitor Analysis
            </p>
            <p className="font-roboto-condensed font-light lg:text-[16px] leading-[16px] lg:leading-[24px] text-black">
              Get SWOT analysis, product benchmarking & financial insights.
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
            <p className="text-black text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] font-normal font-roboto-serif mb-2">
              1/3/6 month Analyst Support
            </p>
            <p className="font-roboto-condensed font-light lg:text-[16px] leading-[16px] lg:leading-[24px] text-black">
              Get upto 6 months post-purchase support from our Analysts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportLicense;
