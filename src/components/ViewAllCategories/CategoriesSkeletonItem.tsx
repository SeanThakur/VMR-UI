import React from "react";

const CategoriesSkeletonItem = () => {
  return (
    <div className="flex flex-col items-start w-auto py-4 pr-4">
      <div className="relative w-[100%] max-w-[350px] h-[300px] mb-3 bg-gray-300 animate-pulse rounded-md"></div>
      <div className="w-[133px] h-[14px] bg-gray-300 animate-pulse rounded-md"></div>
    </div>
  );
};

export default CategoriesSkeletonItem;
