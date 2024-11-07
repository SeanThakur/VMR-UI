import Image from "next/image";
import React, { useState } from "react";

interface CheckboxOption {
  label: string;
  checked: boolean;
}

const ReportForm = () => {
  const [checkboxes, setCheckboxes] = useState<CheckboxOption[]>([
    { label: "I want a region specific report.", checked: false },
    { label: "I'm looking for specific company profiles.", checked: false },
    { label: "I need only a part of this report.", checked: false },
  ]);

  const handleCheckboxChange = (index: number) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index].checked = !updatedCheckboxes[index].checked;
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-start justify-between mb-4">
        <div>
          <p className="text-black text-[18px] font-bold">
            Looking for something else?
          </p>
          <p className="text-black text-[14px] font-light">
            Leave a message & Delina will get back to you.
          </p>
          <div className="flex flex-col space-y-2 mt-8">
            {checkboxes.map((checkbox, index) => (
              <label
                key={checkbox.label}
                className="flex items-center space-x-2"
              >
                <input
                  type="checkbox"
                  checked={checkbox.checked}
                  onChange={() => handleCheckboxChange(index)}
                  className="form-checkbox text-blue-600 mr-2 w-4 h-4 border-1 border-gray-400"
                />
                <span className="text-black text-[14px] font-light">
                  {checkbox.label}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="relative w-[100px] h-[100px] rounded-full shadow-avatar overflow-hidden">
          <Image src="/images/avatar.png" alt="avatar" objectFit="cover" fill />
        </div>
      </div>
      <div className="flex flex-col">
        <textarea
          placeholder="write your own message..."
          rows={4}
          className="p-2 rounded-5px text-[14px]"
        />
        <div className="flex flex-row items-center justify-end mt-2">
          <button className="bg-navbarBlue text-white rounded-2xl py-1 px-4 text-[14px] transform transition-transform duration-300 hover:-translate-y-1 hover:bg-[#0DAFBF]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;
