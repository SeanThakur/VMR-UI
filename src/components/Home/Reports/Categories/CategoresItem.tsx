import { useTabStore } from "@/store/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface CategoresItemProps {
  image: string;
  title: string;
}

const CategoresItem: React.FC<CategoresItemProps> = ({ image, title }) => {
  const { setActiveTab } = useTabStore();
  const router = useRouter();

  const onCategoriesSelect = () => {
    setActiveTab("Reports");
    router.push("/category");
  };
  return (
    <div
      onClick={onCategoriesSelect}
      className="relative rounded-lg w-[350px] h-[300px] cursor-pointer transform transition-transform duration-300 hover:-translate-y-2"
    >
      <Image src={image} alt="cover" layout="fill" objectFit="cover" />
      <div className="absolute top-6 bg-customBlue w-[90%] px-4 py-2">
        <p className="font-bold text-white text-[24px] uppercase">{title}</p>
      </div>
    </div>
  );
};

export default CategoresItem;
