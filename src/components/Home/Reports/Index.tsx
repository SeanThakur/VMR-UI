import React from "react";
import SecondaryInput from "../../SecondaryInput";
import SavedReports from "./SavedReports/Index";
import RelatedReports from "./RelatedReports";
import VMRNexus from "./VmrNexus/Index";
import Categories from "./Categories/Index";

const Reports = () => {
  return (
    <div className="bg-gray-100 min-h-screen mt-8 px-4 sm:px-8 lg:px-16">
      <div className="flex items-center justify-between">
        <div className="text-md text-gray-800 font-bold">
          SAHIL’S PURCHASED / REQUESTED / SAVED REPORTS
        </div>
        <SecondaryInput label="Search Report" />
      </div>
      <SavedReports />
      <RelatedReports />
      <VMRNexus />
      <Categories />
    </div>
  );
};

export default Reports;
