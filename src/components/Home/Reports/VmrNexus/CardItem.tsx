import { useTabStore } from "@/store/store";
import Image from "next/image";
import React from "react";

interface CardItemProp {
  title: string;
}

const CardItem: React.FC<CardItemProp> = ({ title }) => {
  const { selectBook } = useTabStore();

  const handleBookClick = () => {
    selectBook(true);
  };
  return (
    <div
      onClick={handleBookClick}
      className="w-auto md:w-[180px] lg:w-[205px] relative bg-[#DDE1E3] px-3 py-4 rounded-[10px] flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:-translate-y-2"
    >
      <div className="shadow-nexus-card relative w-[90px] h-[130px] mb-1">
        <Image
          src="/images/BookCardItem.png"
          alt="book"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-2 left-2 w-[15px] h-[15px] flex items-center justify-center rounded-sm">
        <Image src="/icons/locked-2.svg" alt="locked" width={14} height={14} />
      </div>
      <p className="text-black text-[14px] font-light text-center tracking-[1px]">
        {title}
      </p>
    </div>
  );
};

export default CardItem;
