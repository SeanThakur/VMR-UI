import { CategoriesFilterType } from "@/utils/data";
import React, { useState } from "react";

interface CategoriesFilterTabsInterface {
  data: CategoriesFilterType[];
}

const CategoriesFilterTabs: React.FC<CategoriesFilterTabsInterface> = ({
  data,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const onFilterTabClick = (tab: string) => {
    setActiveFilter(tab);
  };

  return (
    <div className="flex overflow-x-auto gap-x-3 justify-center lg:justify-start gap-y-4 md:space-x-6 py-8 w-full">
      {data.map((tab) => (
        <a
          key={tab.category_main}
          className={`text-center flex items-center justify-center max-w-fit h-[40px] rounded-[10px] font-medium font-roboto text-[16px] leading-[18px] px-9 py-2 cursor-pointer whitespace-nowrap text-ellipsis ${
            activeFilter === tab.category_main
              ? "bg-categories-filter-gradient text-white"
              : " text-black border border-[#CFCFD1]"
          }`}
          onClick={() => onFilterTabClick(tab.category_main)}
          title={tab.category_main}
        >
          {tab.category_main}
        </a>
      ))}
    </div>
  );
};

export default CategoriesFilterTabs;
