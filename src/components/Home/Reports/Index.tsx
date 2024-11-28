import React from "react";
import SecondaryInput from "../../SecondaryInput";
import SavedReports from "./SavedReports/Index";
import RelatedReports from "./RelatedReports";
import VMRNexus from "./VmrNexus/Index";
import Categories from "./Categories/Index";

const Reports = () => {
  return (
    <div className="bg-white min-h-screen pt-8 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div className="text-black font-roboto text-[24px] font-medium mb-4 sm:mb-0">
          SAHIL’S PURCHASED / REQUESTED / SAVED REPORTS
        </div>
        <div className="w-full sm:w-auto">
          <SecondaryInput label="Search Report" />
        </div>
      </div>
      <SavedReports />
      <VMRNexus />
      <RelatedReports />
      <Categories />
    </div>
  );
};

export default Reports;
