import React from "react";
import CategoresItem from "./CategoresItem";
import { categoriesItem } from "@/utils/data";

const Categories = () => {
  return (
    <div>
      <p className="font-medium font-black text-[24px] mb-10">
        SEARCH BY CATEGORIES
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {categoriesItem.map((item, idx) => (
          <CategoresItem key={idx} title={item.title} image={item.image} />
        ))}
      </div>
      <p className="underline text-right font-light font-black text-[18px] cursor-pointer my-10 font-roboto-mono">
        View 184 reports
      </p>
    </div>
  );
};

export default Categories;
