import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchInput = () => {
  return (
    <div className="mt-8 mb-2 mx-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search Market"
          className="w-full px-10 py-3 border border-[#3b4acc] rounded-lg focus:outline-none focus:ring-0 focus:ring-[#3b4acc] transition duration-200 ease-in-out"
        />
        <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3b4acc]" />
      </div>
      <style jsx>{`
        input:focus {
          border-width: 1.5px;
          border-color: #3b4acc;
        }
      `}</style>
    </div>
  );
};

export default SearchInput;
