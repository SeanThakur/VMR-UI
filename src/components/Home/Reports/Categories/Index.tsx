import React from "react";
import CategoresItem from "./CategoresItem";

type Category = {
  image: string;
  title: string;
};

const Categories = () => {
  const categoriesItem: Category[] = [
    {
      image: "/images/categories1.png",
      title: "CAMERA, DISPLAY & LIGHTING RESEARCH",
    },
    {
      image: "/images/categories2.png",
      title: "Global Total Reflection X-Ray Fluorescence...",
    },
    {
      image: "/images/categories3.png",
      title: "Global And GCC HDPE   Pipes Market",
    },
    {
      image: "/images/categories4.png",
      title: "Global Service Delivery   Automation Market",
    },
    {
      image: "/images/categories5.png",
      title: "Global Glycyrrhizine (CAS:1405-86-3) Market",
    },
    {
      image: "/images/categories1.png",
      title: "Global Haemodialysis   Catheters Market",
    },
  ];
  return (
    <div>
      <p className="font-medium font-black text-[24px] mb-10">
        SEARCH BY CATEGORIES
      </p>
      <div className="grid grid-cols-3 gap-8">
        {categoriesItem.map((item, idx) => (
          <CategoresItem key={idx} title={item.title} image={item.image} />
        ))}
      </div>
      <p className="underline text-right font-light font-black text-[18px] cursor-pointer my-10">
        View 184 reports
      </p>
    </div>
  );
};

export default Categories;
