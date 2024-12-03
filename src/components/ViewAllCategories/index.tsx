import React from "react";
import CategoriesFilterTabs from "./FilterTabs";
import { categoriesViewallItem } from "@/utils/data";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="bg-white min-h-screen pt-8 px-4 sm:px-8 lg:px-16">
      <p className="text-black font-roboto font-medium text-[32px] leading-[37.5px]">
        Categories
      </p>
      <CategoriesFilterTabs />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
        {categoriesViewallItem.map((item, idx) => (
          <div
            className="flex justify-center items-center cursor-pointer transform transition-transform duration-300 hover:-translate-y-2"
            key={idx}
          >
            <div className="rounded-[20px] w-[350px] h-[300px] border border-[#CFCFD1]">
              <div className="relative h-[260px]">
                <Image
                  src={item.image}
                  alt="cover"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-tl-[20px] rounded-tr-[20px]"
                />
              </div>
              <p className="text-black font-roboto font-normal text-[16px] text-left px-4 py-2 leading-[18px]">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
