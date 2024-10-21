import Image from "next/image";
import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const totalPages = Math.ceil(500 / itemsPerPage);
  const [isMobileView, setIsMobileView] = useState(false);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 640);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    if (isMobileView) {
      for (let i = 1; i <= 5; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push("...");
      pageNumbers.push(totalPages);
    } else {
      if (totalPages <= 10) {
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        if (currentPage <= 10) {
          for (let i = 1; i <= 10; i++) {
            pageNumbers.push(i);
          }
          pageNumbers.push("...");
          pageNumbers.push(totalPages);
        } else if (currentPage > totalPages - 10) {
          pageNumbers.push(1);
          pageNumbers.push("...");
          for (let i = totalPages - 9; i <= totalPages; i++) {
            pageNumbers.push(i);
          }
        } else {
          pageNumbers.push(1);
          pageNumbers.push("...");
          for (let i = currentPage - 9; i <= currentPage + 2; i++) {
            pageNumbers.push(i);
          }
          pageNumbers.push("...");
          pageNumbers.push(totalPages);
        }
      }
    }
    return pageNumbers;
  };

  return (
    <div className="px-2">
      <div className="flex items-center justify-center">
        {renderPageNumbers().map((pageNumber, index) => (
          <button
            key={index}
            onClick={() => {
              if (pageNumber !== "...") paginate(Number(pageNumber));
            }}
            className={`mr-4 rounded-[8px] w-[32px] h-[32px] text-center font-normal text-[16px] font-inter ${
              currentPage === pageNumber
                ? "bg-[#0DAFBF] text-[#F5F5F5]"
                : "bg-transparent text-[#1E1E1E]"
            }`}
            disabled={pageNumber === "..."}
          >
            {pageNumber}
          </button>
        ))}
        <div
          onClick={handleNextPage}
          className={`flex flex-row items-center ml-4 cursor-pointer ${
            currentPage === totalPages
              ? "bg-transparent text-gray-500"
              : "bg-transparent text-[#1E1E1E]"
          }`}
        >
          <span className="font-normal font-inter text-[16px]">Next</span>
          <div className="w-[16px] h-[16px] ml-2">
            <Image
              src="/icons/arrow-right-tail.svg"
              alt="arrow"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
