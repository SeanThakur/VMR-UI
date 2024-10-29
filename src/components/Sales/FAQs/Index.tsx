import Image from "next/image";
import React from "react";

const SalesFAQS = () => {
  const faqsList = [
    "What is the typical turnaround time for receiving a purchased report?",
    "How can I ensure the reports I purchase are relevant to my specific industry and business needs?",
    "How is the confidentiality of the information maintained in the reports?",
    "Can I share the purchased report with my team or other stakeholders within my organization?",
    "What is the methodology used in compiling the report, and how reliable is the data?",
    "Are there any customization options available for the report to suit my specific needs?",
    "What kind of customer support is available if I have questions about the report?",
    "What is the cost structure, and are there any discounts available for bulk purchases?",
  ];
  return (
    <div className="bg-white px-12 lg:px-24 py-24">
      <div className="mb-10">
        <p className="font-inter font-bold text-black text-[36px] leading-[43px]">
          Frequently Asked Questions (FAQs)
        </p>
        <div className="border-b-[5px] border-[#3B4ACC] w-[18%] pt-2" />
      </div>
      <div className="flex flex-col gap-2">
        {faqsList.map((faq, idx) => (
          <div
            key={idx}
            className="cursor-pointer flex flex-row items-center justify-between px-6 py-4 border border-[#D0D0D0] rounded-[8px]"
          >
            <p className="font-inter font-normal text-[20px] leading-[24px]">
              {faq}
            </p>
            <div className="w-[28px] h-[28px]">
              <Image
                src="/icons/arrow-drop-down-blue.svg"
                alt="enter"
                width={28}
                height={28}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 flex flex-row items-center justify-center cursor-pointer">
        <span className="underline text-[#0DAFBF] text-[16px] font-semibold font-inter">
          see more
        </span>
        <div className="w-[18px] h-[18px]">
          <Image
            src="/icons/arrow-drop-down-lightblue.svg"
            alt="arrow"
            width={18}
            height={18}
          />
        </div>
      </div>
    </div>
  );
};

export default SalesFAQS;
