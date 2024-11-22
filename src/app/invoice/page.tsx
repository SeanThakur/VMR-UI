"use client";

import { useTabStore } from "@/store/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";

const InvoicePage = () => {
  const router = useRouter();
  const { setActiveTab, selectBook, selectPdfViewer, selectCategoriesListing } =
    useTabStore();

  const onHomeLink = () => {
    selectPdfViewer(false);
    selectCategoriesListing(false);
    selectBook(false);
    setActiveTab("Reports");
    router.push("/home");
  };
  return (
    <Fragment>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        {/* Full-Width Navbar */}
        <div className="relative w-full">
          <div className="bg-[#3B4ACC] w-full flex-col justify-between items-center px-4 md:px-6 py-3">
            <div className="flex items-start h-[250px] p-4 space-x-4 md:space-x-6">
              <div
                onClick={onHomeLink}
                className="relative w-24 h-10 md:w-28 md:h-12 lg:w-48 lg:h-14"
              >
                <Image
                  src="/images/VMRWhiteLogo.png"
                  alt="Logo"
                  layout="fill"
                  objectFit="contain"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Main Content Wrapper */}
          <div className="w-full absolute top-1/4 left-1/2 transform -translate-x-1/2 overflow-hidden fle flex-col">
            <div className="mx-auto max-w-6xl overflow-hidden mt-6 mb-16 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
              {/* Left Column */}
              <div className="lg:w-[775px] pt-6 space-y-6 px-6 md:px-8 lg:px-0">
                {/* Invoice Section */}
                <div
                  className="flex flex-row items-center gap-1 cursor-pointer"
                  onClick={() => router.push("/sales")}
                >
                  <div className="w-[18px] h-[18px] mr-2">
                    <Image
                      src="/icons/arrow-left-white-circle.svg"
                      alt="back"
                      width={18}
                      height={18}
                    />
                  </div>
                  <span className="text-white font-roboto-condensed font-light text-[14px] leading-[16px]">
                    Return to Licenses
                  </span>
                </div>
                <div className="relative bg-white border border-gray-200 shadow-table-content rounded-[15px]">
                  {/* Invoice Header */}
                  <div className="">
                    <div className="text-black pt-6 rounded-t-lg pl-6">
                      <div className="flex justify-between items-center">
                        <div className="text-[24px] font-inter leading-[29px] font-light">
                          <span className="font-bold">Invoice</span>{" "}
                          <span className="font-bold text-[#3B4ACC]">
                            #04562/JUN24/VMR
                          </span>{" "}
                          for <span className="font-bold">$3,555.00</span>
                        </div>
                        <button className="flex flex-row items-center text-[#3B4ACC] text-[16px] font-light leading-[18px] font-roboto pr-6">
                          <div className="w-[18px] h-[18px] mr-2">
                            <Image
                              src="/icons/link-light.svg"
                              alt="copy"
                              width={18}
                              height={18}
                            />
                          </div>
                          Copy link
                        </button>
                      </div>
                      <div className="mt-4 flex flex-row items-center">
                        <div className="text-[#666666] font-roboto font-normal text-[16px] leading-[19px] bg-[#DCF3FF] rounded-[70px] px-[22px] py-[6px] mr-6">
                          Open
                        </div>
                        <div className="font-roboto font-normal text-[16px] leading-[19px] text-black">
                          <span className="text-[#666666]">Due in</span> 72h 23m
                          59s
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Invoice Actions */}
                  <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <button className="flex w-full md:w-[200px] h-[51px] flex-row items-center justify-center bg-[#3B4ACC] text-white shadow-table-content rounded-[5px] font-bold font-inter text-[16px] leading-[19px] transform transition-transform duration-300 hover:-translate-y-1 hover:bg-[#0DAFBF]">
                      <div className="w-[18px] h-[18px] mr-2">
                        <Image
                          src="/icons/arrow-right-back-circle.svg"
                          alt="back"
                          width={18}
                          height={18}
                        />
                      </div>
                      Proceed to Pay
                    </button>
                    <button className="flex w-full md:w-[200px] h-[51px] flex-row items-center justify-center text-[#3B4ACC] border border-[#3B4ACC] shadow-table-content rounded-[5px] font-bold font-inter text-[16px] leading-[19px] transform transition-transform duration-300 hover:-translate-y-1 hover:border-[#0DAFBF] hover:bg-[#0DAFBF] hover:text-white">
                      <div className="w-[18px] h-[18px] mr-2">
                        <Image
                          src="/icons/send-link-blue.svg"
                          alt="back"
                          width={18}
                          height={18}
                        />
                      </div>
                      Email Invoice
                    </button>
                    <button className="flex w-full md:w-[200px] h-[51px] flex-row items-center justify-center text-[#3B4ACC] border border-[#3B4ACC] shadow-table-content rounded-[5px] font-bold font-inter text-[16px] leading-[19px] transform transition-transform duration-300 hover:-translate-y-1 hover:border-[#0DAFBF] hover:bg-[#0DAFBF] hover:text-white">
                      <div className="w-[18px] h-[18px] mr-2">
                        <Image
                          src="/icons/download-blue.svg"
                          alt="back"
                          width={18}
                          height={18}
                        />
                      </div>
                      Download Invoice
                    </button>
                  </div>
                </div>

                {/* Billed Items Section */}
                <div className="bg-white shadow-table-content rounded-[15px] mb-6">
                  <h3 className="text-[24px] font-bold font-inter leading-[29px] text-black mb-8 px-6 pt-8">
                    Billed Items
                  </h3>
                  <div className="flex flex-row justify-between gap-6 mb-9 px-6">
                    <div className="flex flex-col gap-3 w-[40%]">
                      <span className="uppercase text-[#666666] text-[16px] font-roboto-condensed leading-[18px] font-normal">
                        Report
                      </span>
                      <p className="font-roboto font-normal text-black text-[16px] leading-[18px]">
                        Global Treasury And Risk Management Software Market
                        Size, Forecast & Trends (2023-2031) Report
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <span className="uppercase text-[#666666] text-[16px] font-roboto-condensed leading-[18px] font-normal">
                        User Type
                      </span>
                      <p className="font-roboto font-normal text-black text-[16px] leading-[18px]">
                        Single User
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <span className="uppercase text-[#666666] text-[16px] font-roboto-condensed leading-[18px] font-normal">
                        Price
                      </span>
                      <p className="font-roboto font-normal text-black text-[16px] leading-[18px]">
                        $3,950.00
                      </p>
                    </div>
                  </div>

                  {/* Customization Details */}
                  <div className="mt-9 text-sm px-6 mb-12">
                    <p className="text-[#666666] text-[16px] font-roboto-condensed leading-[18px] font-normal">
                      + CUSTOMIZATION
                    </p>
                    <div className="flex flex-col gap-4 pl-6 pt-4">
                      <div className="text-black font-roboto font-light text-[14px] leading-[16px]">
                        <p>Regional Analysis:</p>
                        <div className="flex flex-col">
                          <span>
                            • Please provide a more detailed breakdown of the
                            market in the Asia Pacific region, particularly
                            focusing on emerging markets such as India, China,
                            and Southeast Asia.
                          </span>
                          <span>
                            • Include specific data on market size, growth
                            rates, and key trends for these countries.
                          </span>
                        </div>
                      </div>
                      <div className="text-black font-roboto font-light text-[14px] leading-[16px]">
                        <p>Competitive Landscape:</p>
                        <span>
                          • Comparative analysis of market share, strengths,
                          weaknesses, opportunities, and threats (SWOT analysis)
                          for these key players.
                        </span>
                      </div>
                      <div className="text-black font-roboto font-light text-[14px] leading-[16px]">
                        <p>Market Segmentation:</p>
                        <div className="flex flex-col">
                          <span>
                            • A more granular segmentation of the market by
                            end-user industries, such as banking, financial
                            services, insurance, manufacturing, and retail.
                          </span>
                          <span>
                            • Detailed insights into the market dynamics and
                            trends specific to each end-user segment.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pricing with Blue Background */}
                  <div className="bg-[#3B4ACC] px-6 rounded-b-[15px] pb-6">
                    <div className="mt-6 pt-8 px-4 text-white flex flex-col gap-6">
                      <div className="flex justify-between border-b border-dotted text-white">
                        <p className="font-medium text-[20px] leading-[23px] font-roboto-condensed">
                          SUBTOTAL:
                        </p>
                        <p className="font-medium text-[20px] leading-[23px] font-roboto-condensed">
                          $3,950.00
                        </p>
                      </div>
                      <div className="flex justify-between border-b border-dotted text-white">
                        <p className="font-medium text-[20px] leading-[23px] font-roboto-condensed">
                          DISCOUNT{" "}
                          <span className="text-[16px] font-light leading-[18px]">
                            (10%)
                          </span>
                        </p>
                        <p className="font-medium text-[20px] leading-[23px] font-roboto-condensed">
                          -$395.00
                        </p>
                      </div>
                      <div className="flex justify-between border-b border-dotted text-white">
                        <p className="font-medium text-[20px] leading-[23px] font-roboto-condensed">
                          FINAL PRICE:
                        </p>
                        <p className="font-bold text-[20px] leading-[23px] font-roboto-condensed">
                          $3,555.00
                        </p>
                      </div>
                    </div>

                    {/* Confirmation Checkbox */}
                    <div className="px-4 mt-6">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="text-white">
                          I confirm that I have read and agree to the terms and
                          conditions.
                        </span>
                      </label>
                      <button className="flex flex-row items-center justify-center mb-2 mt-8 text-white text-[16px] font-bold font-inter leading-[19px] w-full rounded-5px bg-[#0DAFBF] py-4 shadow-table-content transform transition-transform duration-300 hover:-translate-y-1 hover:bg-[#3B4ACC]">
                        <div className="w-[18px] h-[18px] mr-2">
                          <Image
                            src="/icons/arrow-right-back-circle.svg"
                            alt="back"
                            width={18}
                            height={18}
                          />
                        </div>
                        Proceed to Pay
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:w-[423px] pt-[4.2rem] flex flex-col gap-6 px-6 md:px-8 lg:px-0">
                {/* Customer Details */}
                <div className="bg-white text-black shadow-table-content rounded-[15px] p-6">
                  <h3 className="text-[24px] font-bold font-inter leading-[29px] text-black mb-4">
                    Customer Details
                  </h3>
                  <div className="space-y-12">
                    <div className="flex flex-col gap-3">
                      <p className="text-[16px] font-roboto-condensed text-[#666666] font-normal mb-2">
                        Bill To
                      </p>
                      <div className="flex flex-row items-center">
                        <div className="w-[24px] h-[24px] mr-2">
                          <Image
                            src="/icons/profile-circle-thin.svg"
                            alt="profile"
                            width={24}
                            height={24}
                          />
                        </div>
                        <p className="font-roboto font-normal text-[18px] leading-[21px] text-black">
                          Ayano Tani
                        </p>
                      </div>
                      <div className="flex flex-row items-center">
                        <div className="w-[24px] h-[24px] mr-2">
                          <Image
                            src="/icons/building-circle.svg"
                            alt="building"
                            width={24}
                            height={24}
                          />
                        </div>
                        <p className="font-roboto font-normal text-[18px] leading-[21px] text-black">
                          Sumitomo Seika Chemicals Co. Ltd.
                        </p>
                      </div>
                      <div className="flex flex-row items-center">
                        <div className="w-[24px] h-[24px] mr-2">
                          <Image
                            src="/icons/alternate-email.svg"
                            alt="email"
                            width={24}
                            height={24}
                          />
                        </div>
                        <p className="font-roboto font-normal text-[18px] leading-[21px] text-black underline">
                          a-tani@sumitomoseika.co.jp
                        </p>
                      </div>
                      <div className="flex flex-row items-center">
                        <div className="w-[24px] h-[24px] mr-2">
                          <Image
                            src="/icons/phone-circle.svg"
                            alt="phone"
                            width={24}
                            height={24}
                          />
                        </div>
                        <p className="font-roboto font-normal text-[18px] leading-[21px] text-black">
                          +81 90 8930 1336
                        </p>
                      </div>
                      <div className="flex flex-row items-center">
                        <div className="w-[34px] h-[34px] mr-2">
                          <Image
                            src="/icons/location-outline.svg"
                            alt="location"
                            width={34}
                            height={34}
                          />
                        </div>
                        <p className="font-roboto font-normal text-[18px] leading-[21px] text-black">
                          The Sumitomo Bldg. 4-5-33 Kitahama, Chuo-ku, Osaka,
                          Japan
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-[16px] font-roboto-condensed text-[#666666] font-normal mb-2">
                        Deliver To
                      </p>
                      <div className="flex flex-row items-center">
                        <div className="w-[24px] h-[24px] mr-2">
                          <Image
                            src="/icons/profile-circle-thin.svg"
                            alt="profile"
                            width={24}
                            height={24}
                          />
                        </div>
                        <p className="font-roboto font-normal text-[18px] leading-[21px] text-black">
                          Ayano Tani
                        </p>
                      </div>
                      <div className="flex flex-row items-center">
                        <div className="w-[24px] h-[24px] mr-2">
                          <Image
                            src="/icons/building-circle.svg"
                            alt="building"
                            width={24}
                            height={24}
                          />
                        </div>
                        <p className="font-roboto font-normal text-[18px] leading-[21px] text-black">
                          Sumitomo Seika Chemicals Co. Ltd.
                        </p>
                      </div>
                      <div className="flex flex-row items-center">
                        <div className="w-[24px] h-[24px] mr-2">
                          <Image
                            src="/icons/alternate-email.svg"
                            alt="email"
                            width={24}
                            height={24}
                          />
                        </div>
                        <p className="font-roboto font-normal text-[18px] leading-[21px] text-black underline">
                          a-tani@sumitomoseika.co.jp
                        </p>
                      </div>
                      <div className="mt-4 flex flex-row gap-8 pt-6">
                        <div className="flex flex-col gap-2">
                          <span className="uppercase text-[#666666] font-normal font-roboto-condensed text-[16px] leading-[18px]">
                            Pay From
                          </span>
                          <span className="text-black font-roboto font-normal text-[14px] leading-[16px]">
                            United States
                          </span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="uppercase text-[#666666] font-normal font-roboto-condensed text-[16px] leading-[18px]">
                            Payment Mode
                          </span>
                          <span className="text-black font-roboto font-normal text-[14px] leading-[16px]">
                            Bank wire
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="flex flex-row items-center justify-center mb-2 mt-8 text-white text-[16px] font-bold font-inter leading-[19px] w-full rounded-5px bg-[#0DAFBF] py-4 shadow-table-content transform transition-transform duration-300 hover:-translate-y-1 hover:bg-[#3B4ACC]">
                    <div className="w-[18px] h-[18px] mr-2">
                      <Image
                        src="/icons/edit-light-blue.svg"
                        alt="edit"
                        width={18}
                        height={18}
                      />
                    </div>
                    Edit Details
                  </button>
                </div>

                {/* Help Section */}
                <div className="bg-white shadow-table-content rounded-[15px] p-6 mb-6">
                  <h3 className="text-[24px] text-black font-inter font-bold mb-3 leading-[29px]">
                    Help Section
                  </h3>
                  <p className="text-[#666666] text-[16px] font-normal font-roboto-condensed leading-[18px] mb-2">
                    FAQs
                  </p>
                  <ul className="space-y-2">
                    <li className="font-inter font-normal text-[14px] leading-[16px] ftext-black underline cursor-pointer">
                      When will I get my report?
                    </li>
                    <li className="font-inter font-normal text-[14px] leading-[16px] ftext-black underline cursor-pointer">
                      How will the report be delivered to me?
                    </li>
                    <li className="font-inter font-normal text-[14px] leading-[16px] ftext-black underline cursor-pointer">
                      Who do I reach out to in case I have questions with the
                      report?
                    </li>
                    <li className="font-inter font-normal text-[14px] leading-[16px] ftext-black underline cursor-pointer">
                      How long do I get free Analyst support?
                    </li>
                  </ul>
                  <p className="font-roboto-condensed font-normal text-[16px] leading-[18px] ftext-[#666666] mt-4">
                    Your question isn’t listed? — Drop us a message!
                  </p>
                  <button className="flex flex-row items-center justify-center mt-6 w-full shadow-table-content border border-[#0DAFBF] bg-white text-[#0DAFBF] py-3 rounded-[5px] transform transition-transform duration-300 hover:-translate-y-1 hover:bg-[#3B4ACC] hover:text-white hover:border-0">
                    <div className="w-[18px] h-[18px] mr-2">
                      <Image
                        src="/icons/question-line.svg"
                        alt="faqs"
                        width={18}
                        height={18}
                      />
                    </div>
                    Ask a Question
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white w-full pt-12">
              <div className="px-6 md:px-8 lg:px-0 mx-auto max-w-6xl my-12 md:flex-row md:flex-wrap flex-wrap flex lg:flex-row items-center justify-between lg:gap-0 gap-8">
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
                className="bg-white h-[200px] md:h-[525px] lg:h-[825px] w-full"
                style={{
                  backgroundImage: "url('/images/swatch.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
              <div className="bg-[#3B4ACC] w-full h-[96px]" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InvoicePage;
