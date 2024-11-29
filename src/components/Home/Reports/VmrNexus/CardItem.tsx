import { useTabStore } from "@/store/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface CardItemProp {
  title: string;
}

const CardItem: React.FC<CardItemProp> = ({ title }) => {
  const { setActiveTab } = useTabStore();
  const router = useRouter();

  const handleBookClick = () => {
    setActiveTab("Reports");
    router.push("/client");
  };
  return (
    <div
      onClick={handleBookClick}
      className="w-auto md:w-[180px] lg:w-[205px] relative px-3 py-4 rounded-[10px] flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:-translate-y-2"
    >
      <div className="shadow-nexus-card relative w-[200px] h-[280px] mb-1">
        <Image
          src="/images/BookCardItem.png"
          alt="book"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="text-black text-[15px] font-light text-left leading-[17px] font-roboto tracking-[1px]">
        {title}
      </p>
    </div>
  );
};

export default CardItem;
