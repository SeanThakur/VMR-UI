import React, { Fragment } from "react";
import RelatedReportItem from "./RelatedReportItem";
import { relatedReports } from "@/utils/data";

const RelatedReports = () => {
  return (
    <Fragment>
      <div className="text-lg text-gray-800 font-light mb-6 text-left">
        Related Reports
      </div>
      <div className="relative w-full bg-[#0DAFBF1A] shadow-related-report rounded-lg overflow-x-auto flex space-x-4 sm:space-x-8 px-2 sm:px-4 pt-2">
        {relatedReports.map((book, idx) => (
          <RelatedReportItem key={idx} image={book.image} title={book.title} />
        ))}
      </div>
    </Fragment>
  );
};

export default RelatedReports;
