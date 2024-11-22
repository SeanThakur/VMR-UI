import { useTabStore } from "@/store/store";
import { UserReportChipType } from "@/utils/data";
import Image from "next/image";

const chipIcons = {
  requested: "/icons/requested.svg",
  saved: "/icons/saved.svg",
};

interface BookCardProps {
  image: string;
  title: string;
  chipText?: string;
}

const SavedReportItem: React.FC<BookCardProps> = ({
  image,
  title,
  chipText,
}) => {
  const { selectBook } = useTabStore();

  const handleBookClick = () => {
    selectBook(true);
  };

  return (
    <div
      className="flex flex-col items-start w-[150px] py-4 pr-4 cursor-pointer transform transition-transform duration-300 hover:-translate-y-2"
      onClick={handleBookClick}
    >
      <div className="relative w-[133px] h-[182px] mb-3 bg-transparent">
        {/* shadow-saved-report */}
        <Image
          src={image || "/images/savedReportBook1.png"}
          alt="report cover"
          layout="fill"
          objectFit="cover"
          className="bg-transparent"
        />
        <div className="absolute top-2 right-2 w-[15px] h-[15px] bg-[#0DAFBF] flex items-center justify-center rounded-sm">
          <Image
            src="/icons/unlocked.svg"
            alt="locked"
            width={12}
            height={12}
          />
        </div>
      </div>
      {chipText && (
        <div
          className={`flex flex-row items-center justify-center px-2 py-[1px] rounded-[2px] ${
            chipText === UserReportChipType.Requested
              ? "bg-[#ECE9B1] text-[#C4C16A]"
              : "bg-[#ECB1B1] text-[#F38484]"
          } mb-2`}
        >
          {chipText === "Requested" && (
            <Image
              src={chipIcons.requested}
              alt="Requested"
              width={6}
              height={6}
            />
          )}
          {chipText === "Saved" && (
            <Image src={chipIcons.saved} alt="Saved" width={8} height={8} />
          )}
          <span className="ml-1 text-[8px]">{chipText}</span>
        </div>
      )}
      <p className="font-light font-roboto-condensed leading-[21px] text-[15px] line-clamp-3">
        {title}
      </p>
    </div>
  );
};

export default SavedReportItem;
