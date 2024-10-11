import { useTabStore } from "@/store/store";
import Image from "next/image";

const chipIcons = {
  requested: "/icons/requested.svg",
  saved: "/icons/saved.svg",
};

interface BookCardProps {
  image: string;
  title: string;
  chipText?: string;
  chipStyle?: string;
}

const SavedReportItem: React.FC<BookCardProps> = ({
  image,
  title,
  chipText,
  chipStyle,
}) => {
  const { selectBook } = useTabStore();

  const handleBookClick = () => {
    selectBook(true);
  };

  return (
    <div
      className="flex flex-col items-start w-[150px] py-4 pr-4 cursor-pointer"
      onClick={handleBookClick}
    >
      <div className="relative w-[133px] h-[182px] mb-3 shadow-saved-report">
        <Image src={image} alt="Book Cover" layout="fill" objectFit="cover" />
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
          className={`flex flex-row items-center justify-center px-2 py-[1px] rounded-[2px] ${chipStyle} mb-2`}
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
      <p className="font-light text-[12px]">{title}</p>
    </div>
  );
};

export default SavedReportItem;
