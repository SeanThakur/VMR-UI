import { useTabStore } from "@/store/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface RelatedReportBookProps {
  image: string;
  title: string;
}

const RelatedReportItem: React.FC<RelatedReportBookProps> = ({
  image,
  title,
}) => {
  const { setActiveTab } = useTabStore();
  const router = useRouter();

  const handleBookClick = () => {
    setActiveTab("Reports");
    router.push("/client");
  };
  return (
    <div
      onClick={handleBookClick}
      className="flex flex-col items-start w-[163px] py-4 pr-4 cursor-pointer transform transition-transform duration-300 hover:-translate-y-2"
    >
      <div className="relative w-[163px] h-[222px] mb-3">
        <Image
          src={image || "/images/savedReportBook5.png"}
          alt="Book Cover"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-2 right-2 w-[15px] h-[15px] bg-[#0DAFBF] flex items-center justify-center rounded-sm">
          <Image src="/icons/locked.svg" alt="locked" width={12} height={12} />
        </div>
        <div className="absolute bottom-2 bg-customBlue w-[96%] px-3 py-2">
          <p className="font-light text-white font-roboto-condensed text-[12px] line-clamp-3">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RelatedReportItem;
