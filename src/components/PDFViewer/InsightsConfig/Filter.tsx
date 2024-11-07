import React, { Fragment, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

type YearFilterProps = {
  label: string;
  years: number[];
  isOpen: boolean;
  onToggle: () => void;
};

const YearFilter: React.FC<YearFilterProps> = ({
  label,
  years,
  isOpen,
  onToggle,
}) => {
  return (
    <Fragment>
      <div
        className={`border-b-[1px] ${
          isOpen && "rounded-[12px]"
        } border-[#DDDDDD] cursor-pointer flex flex-row items-center justify-between`}
        onClick={onToggle}
      >
        <div className="flex flex-row items-center pl-4">
          <FaRegCalendarAlt size={18} />
          <p className="text-black text-[16px] font-light py-3 px-3">{label}</p>
        </div>
        {isOpen ? (
          <MdKeyboardArrowUp size={24} className="mr-8" />
        ) : (
          <MdKeyboardArrowDown size={24} className="mr-8" />
        )}
      </div>
      {isOpen && (
        <Fragment>
          <div className="py-6 px-12 grid grid-cols-2 gap-4">
            {years.map((year, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`year-${year}`}
                  className="form-checkbox text-blue-600 mr-2 w-5 h-5"
                />
                <label
                  htmlFor={`year-${year}`}
                  className="text-gray-400 text-sm"
                >
                  {year}
                </label>
              </div>
            ))}
          </div>
          <div className="flex flex-row items-center justify-center mb-6">
            <button className="p-[11px] text-[#0DAFBF] bg-white border border-[#0DAFBF] rounded-[5px] font-medium text-[14px] flex flex-row items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:bg-[#0000EE] hover:text-white hover:border-0">
              Filter Data
            </button>
          </div>
          <hr />
        </Fragment>
      )}
    </Fragment>
  );
};

const Filter = () => {
  const filters = [
    {
      label: "Filter by Year",
      years: [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031],
    },
    {
      label: "Filter by Region",
      years: [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031],
    },
    {
      label: "Filter by Country",
      years: [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031],
    },
    {
      label: "Filter by Segments",
      years: [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031],
    },
    {
      label: "Filter by Sub-Segments",
      years: [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031],
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="border-[1px] border-[#DDDDDD] rounded-[12px] bg-white shadow-table-content mb-4">
      {filters.map((filter, index) => (
        <YearFilter
          key={index}
          label={filter.label}
          years={filter.years}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Filter;
