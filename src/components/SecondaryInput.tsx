import Image from "next/image";
import React from "react";

interface SecondaryInputProps {
  label: string;
}

const SecondaryInput: React.FC<SecondaryInputProps> = ({ label }) => {
  return (
    <div className="mb-2 shadow-table-content rounded-5px">
      <div className="relative flex flex-row items-center bg-white rounded-5px">
        <input
          type="text"
          placeholder={label}
          className="w-[400px] pr-4 pl-4 py-2 text-[#C3C3C3] text-[18px] font-light rounded-5px"
        />
        <div className="w-[20px] h-[20px] mr-2">
          <Image
            src="/icons/search-thin.svg"
            alt="search"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondaryInput;
