import React from "react";

const SavedReportSkeletonItem = () => {
  return (
    <div className="flex flex-col items-start w-[150px] py-4 pr-4 mr-8">
      <div className="relative w-[133px] h-[182px] md:w-[200px] md:h-[280px] mb-3 bg-gray-300 animate-pulse rounded-md"></div>
      <div className="w-[100px] h-[20px] bg-gray-300 animate-pulse rounded-md mb-2"></div>
      <div className="w-[133px] h-[14px] bg-gray-300 animate-pulse rounded-md"></div>
    </div>
  );
};

export default SavedReportSkeletonItem;
