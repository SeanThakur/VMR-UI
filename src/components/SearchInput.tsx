import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchInput = () => {
  return (
    <div className="bg-[#f0f0f0] pt-8 px-4 sm:px-8 lg:px-16">
      <div className="relative">
        <input
          type="text"
          placeholder="Search Market"
          className="w-full px-10 py-2 border border-1 rounded-2xl focus:outline-none focus:ring-0 transition duration-200 ease-in-out shadow-xl shadow-grey-300"
        />
        <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2" />
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

export default SearchInput;
