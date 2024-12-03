import Image from "next/image";
import React, { ChangeEvent } from "react";

interface SecondaryInputProps {
  label: string;
  inputValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SecondaryInput: React.FC<SecondaryInputProps> = ({
  label,
  inputValue,
  onChange,
}) => {
  return (
    <div className="mb-2 rounded-5px">
      <div className="relative flex flex-row items-center bg-white rounded-5px">
        <input
          type="text"
          value={inputValue}
          onChange={onChange}
          placeholder={label}
          className="w-[395px] h-[40px] border border-[#CFCFD1] pr-4 pl-12 py-2 text-black text-[14px] font-roboto font-light rounded-[8px] focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <div className="w-[20px] h-[20px] absolute left-4 mr-2">
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
