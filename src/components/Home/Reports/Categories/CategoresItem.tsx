import { useTabStore } from "@/store/store";
import Image from "next/image";
import React from "react";

interface CategoresItemProps {
  image: string;
  title: string;
}

const CategoresItem: React.FC<CategoresItemProps> = ({ image, title }) => {
  const { selectCategoriesListing } = useTabStore();

  const onCategoriesSelect = () => {
    selectCategoriesListing(true);
  };
  return (
    <div
      onClick={onCategoriesSelect}
      className="relative rounded-lg w-[360px] h-[300px] cursor-pointer"
    >
      <Image src={image} alt="cover" layout="fill" objectFit="cover" />
      <div className="absolute top-6 bg-customBlue w-[90%] px-4 py-2">
        <p className="font-bold text-white text-[24px] uppercase">{title}</p>
      </div>
    </div>
  );
};

export default CategoresItem;
