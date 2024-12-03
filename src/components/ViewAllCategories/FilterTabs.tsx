import React, { useState } from "react";

const CategoriesFilterTabs = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const filterTabs = [
    { label: "All" },
    { label: "Railway" },
    { label: "Bikes" },
    { label: "Tires and wheels" },
    { label: "Human Resources Services" },
    { label: "Professional Services" },
  ];
  const onFilterTabClick = (tab: string) => {
    setActiveFilter(tab);
  };
  return (
    <div className="flex flex-wrap gap-x-3 justify-center lg:justify-start gap-y-4 md:space-x-6 py-8 w-full">
      {filterTabs.map((tab) => (
        <a
          key={tab.label}
          className={`text-center flex items-center justify-center h-[40px] rounded-[10px] z-10 font-medium font-roboto text-[16px] leading-[18px] px-9 py-2 cursor-pointer ${
            activeFilter === tab.label
              ? "bg-categories-filter-gradient text-white"
              : " text-black border border-[#CFCFD1]"
          }`}
          onClick={() => onFilterTabClick(tab.label)}
        >
          {tab.label}
        </a>
      ))}
    </div>
  );
};

export default CategoriesFilterTabs;
