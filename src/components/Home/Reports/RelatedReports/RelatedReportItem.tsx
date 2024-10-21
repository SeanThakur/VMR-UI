import { useTabStore } from "@/store/store";
import Image from "next/image";
import React from "react";

interface RelatedReportBookProps {
  image: string;
  title: string;
}

const RelatedReportItem: React.FC<RelatedReportBookProps> = ({
  image,
  title,
}) => {
  const { selectCategoriesListing } = useTabStore();

  const onCategoriesSelect = () => {
    selectCategoriesListing(true);
  };
  return (
    <div
      onClick={onCategoriesSelect}
      className="flex flex-col items-start w-[165px] py-4 pr-4 cursor-pointer"
    >
      <div className="relative w-[163px] h-[222px] mb-3 shadow-saved-report">
        <Image src={image} alt="Book Cover" layout="fill" objectFit="cover" />
        <div className="absolute top-2 right-2 w-[15px] h-[15px] bg-[#0DAFBF] flex items-center justify-center rounded-sm">
          <Image src="/icons/locked.svg" alt="locked" width={12} height={12} />
        </div>
        <div className="absolute bottom-2 bg-customBlue w-[96%] px-3 py-2">
          <p className="font-light text-white text-[12px]">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedReportItem;
