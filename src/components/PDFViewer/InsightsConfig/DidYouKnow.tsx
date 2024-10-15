import React from "react";

const DidYouKnow = () => {
  return (
    <div className="border-[2px] bg-white border-navbarBlue rounded-[8px] mt-8">
      <div className="flex flex-row items-center justify-center bg-navbarBlue py-6 rounded-tr-[6px] rounded-tl-[6px]">
        <p className="font-bold text-white text-[20px]">Did you know?</p>
      </div>
      <div className="py-6 px-4 flex flex-col items-center justify-center ">
        <ul className="list-disc pl-6">
          <li className="text-black font-normal text-[20px] py-2">
            Verified Market Research is rated 4.4/5 stars on Trustpilot by
            executives across 14+ industries.
          </li>
          <li className="text-black font-normal text-[20px] py-4">
            67% of our clients like to tailor their research reports to focus on
            the insights that help them meet their business goals.
          </li>
          <li className="text-black font-normal text-[20px] pt-2 pb-3">
            You can get upto 30% discount by letting us know your research
            goals.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DidYouKnow;
