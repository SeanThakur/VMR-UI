import { relatedReportsBook } from "@/utils/data";
import Image from "next/image";
import React, { Fragment } from "react";

const RelatedReports = () => {
  return (
    <div className="border-[1px] border-[#DDDDDD] rounded-[12px] bg-white shadow-table-content my-8">
      <div className="px-3 py-4 flex flex-row items-cente border-b-[1px] border-[#DDDDDD]">
        <div className="w-[24px] h-[24px] mr-2 ml-3">
          <Image src="/icons/copy.svg" alt="enter" width={24} height={24} />
        </div>
        <p className="font-inter font-medium text-[16px]">Related Reports</p>
      </div>
      <div className="h-[500px] overflow-y-auto">
        {relatedReportsBook.map((item, idx) => (
          <Fragment key={idx}>
            <div className="py-3 px-4 flex flex-row items-start">
              <div className="relative w-[29px] h-[41px] rounded-[3px] mt-4">
                <Image
                  src="/images/savedReportBook1.png"
                  alt="book-cover"
                  layout="fill"
                  objectFit="cover"
                  className="shadow-table-content"
                />
              </div>
              <p className="font-light text-black text-[14px] ml-3 w-[90%] font-inter">
                {item.name}
              </p>
            </div>
            <hr />
          </Fragment>
        ))}
      </div>
      <div className="flex flex-row items-center justify-center py-3 cursor-pointer transform transition-transform duration-300 hover:-translate-y-1">
        <p className="text-navbarBlue text-[16px] font-semibold underline cursor-pointer font-inter">
          view more
        </p>
        <div className="w-[18px] h-[18px] ml-1">
          <Image
            src="/icons/arrow-drop-down-blue.svg"
            alt="arrow"
            width={18}
            height={18}
          />
        </div>
      </div>
    </div>
  );
};

export default RelatedReports;
