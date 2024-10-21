import React, { Fragment } from "react";
import SecondaryInput from "../SecondaryInput";
import RelatedReportItem from "../Home/Reports/RelatedReports/RelatedReportItem";
import { categoriesItem, relatedReports } from "@/utils/data";
import ContactUs from "../Home/Reports/ContactUs";
import CardItem from "../Home/Reports/VmrNexus/CardItem";
import CategoresItem from "../Home/Reports/Categories/CategoresItem";
import Pagination from "../Pagination";
import CategorialBanner from "./CategorialBanner";

type Card = {
  title: string;
};

const CategoriesListing = () => {
  const categoriesCard: Card[] = [
    {
      title: "Global Treasury And Risk Management Software Market",
    },
    {
      title: "Global Treasury And Risk Management Software Market",
    },
    {
      title: "Global Treasury And Risk Management Software Market ",
    },
    {
      title: "Global Treasury And Risk Management Software Market",
    },
    {
      title: "Global Treasury And Risk Management Software Market ",
    },
    {
      title: "Global Treasury And Risk Management Software Market",
    },
    {
      title: "Global Treasury And Risk Management Software Market ",
    },
    {
      title: "Global Treasury And Risk Management Software Market",
    },
    {
      title: "Global Treasury And Risk Management Software Market ",
    },
  ];
  return (
    <Fragment>
      <div className="bg-[#f0f0f0] min-h-screen pt-12 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row align-center justify-between">
          <div className="lg:mr-12 lg:max-w-[61%] mb-6">
            <p className="font-roboto-serif text-black font-medium text-[32px] leading-[45px] mb-4">
              Camera, Display & Lighting Research
            </p>
            <span className="font-roboto text-black font-normal text-[16px] leading-[24px]">
              The integration of advanced camera, display, and lighting
              technologies has revolutionized the way we capture, view, and
              interact with visual information. From high-resolution imaging and
              immersive displays to energy-efficient lighting solutions, these
              technologies play a pivotal role in various industries, including
              consumer electronics, automotive, healthcare, and entertainment.
              In this comprehensive analysis, we explore the significance of
              camera, display, and lighting technologies in the electronics and
              semiconductor sector, examining key trends, applications,
              challenges, and future prospects.
            </span>
          </div>
          <div className="flex flex-col justify-between items-end">
            <div className="w-full sm:w-auto mb-4">
              <SecondaryInput label="Search Keyword" />
            </div>
            <span className="underline text-[18px] font-light cursor-pointer font-roboto-mono leading-[23px]">
              View all reports
            </span>
          </div>
        </div>
        <div className="my-8">
          <div className="text-[26px] font-roboto-serif text-black font-normal mb-6 leading-[30px]">
            Reports in Demand —
          </div>
          <div className="relative w-full bg-[#0DAFBF1A] shadow-related-report rounded-lg overflow-x-auto flex space-x-4 sm:space-x-8 px-2 sm:px-4 pt-2">
            {relatedReports.map((book, idx) => (
              <RelatedReportItem
                key={idx}
                image={book.image}
                title={book.title}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-12 pb-12">
          <div className="flex flex-col w-full lg:w-[60%]">
            <div className="flex flex-row items-center justify-between mb-6">
              <p className="font-roboto-serif text-black font-light text-[24px] leading-[28px]">
                All Reports —
              </p>
              <span className="underline text-[18px] font-light cursor-pointer font-roboto-mono leading-[23px]">
                View 162 reports
              </span>
            </div>
            <div>
              <div className="grid grid-cols-2 grid-rows-2 gap-6 md:gap-12 md:grid-cols-3 md:grid-rows-3 place-items-center mb-10">
                {categoriesCard.map((item, idx) => (
                  <div key={idx}>
                    <CardItem title={item.title} />
                  </div>
                ))}
              </div>
              <Pagination />
            </div>
          </div>
          <div className="w-full lg:w-[40%]">
            <ContactUs />
          </div>
        </div>
        <CategorialBanner />
        <div className="mb-8">
          <p className="text-[24px] text-black font-medium font-roboto mb-8">
            SEARCH RELATED MARKET CATEGORIES
          </p>
          <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
            {categoriesItem.slice(0, 3).map((item, idx) => (
              <CategoresItem key={idx} title={item.title} image={item.image} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#3B4ACC] w-full h-[96px]" />
    </Fragment>
  );
};

export default CategoriesListing;
