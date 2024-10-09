import React from "react";
import { BiSearch } from "react-icons/bi";

interface SecondaryInputProps {
  label: string;
}

const SecondaryInput: React.FC<SecondaryInputProps> = ({ label }) => {
  return (
    <div className="mb-2">
      <div className="relative">
        <input
          type="text"
          placeholder={label}
          className="w-[400px] pr-10 pl-4 py-2 border border-1 rounded-lg focus:outline-none focus:ring-0 transition duration-200 ease-in-out shadow-xl shadow-grey-300"
        />
        <BiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2" />
      </div>
      <style jsx>{`
        input:focus {
          border-width: 1px;
          border-color: none;
        }
      `}</style>
    </div>
  );
};

export default SecondaryInput;
