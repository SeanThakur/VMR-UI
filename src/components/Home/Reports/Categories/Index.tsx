import React from "react";
import CategoresItem from "./CategoresItem";
import { categoriesItem } from "@/utils/data";
import { useRouter } from "next/navigation";

const Categories = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-row items-center justify-between my-10">
        <p className="font-light font-roboto font-black text-[26px]">
          SEARCH BY CATEGORIES
        </p>
        <p
          onClick={() => router.push("/categories")}
          className="underline text-right font-medium font-black text-[18px] cursor-pointer my-10 font-roboto"
        >
          View All Categories
        </p>
      </div>
      <div className="flex flex-row wrap gap-12 items-center justify-between pb-12">
        {categoriesItem.map((item, idx) => (
          <CategoresItem key={idx} title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
