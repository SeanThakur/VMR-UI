import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";

interface Option {
  value: string;
  description: string;
}

const PurchaseOption = () => {
  const [openDescriptionIndex, setOpenDescriptionIndex] = useState<number>(0);
  const router = useRouter();

  const options: Option[] = [
    { value: "Single User", description: "Description for Option 1" },
    { value: "Enterprise User", description: "Description for Option 2" },
    { value: "Multi User", description: "Description for Option 3" },
  ];

  const handleLabelClick = (index: number) => {
    setOpenDescriptionIndex(index);
  };

  return (
    <div className="shadow-nexus-card flex flex-col w-full mb-12">
      <div className="bg-navbarBlue text-center rounded-tl-3xl rounded-tr-3xl">
        <p className="text-white text-[18px] font-medium py-4">
          Pricing & Purchase Options
        </p>
      </div>
      <div className="bg-white rounded-bl-3xl rounded-br-3xl">
        <div className="py-2">
          {options.map((option, index) => (
            <div key={option.value} className="mb-2">
              <button
                className="text-navbarBlue py-3 px-4 text-[14px] font-bold uppercase"
                onClick={() => handleLabelClick(index)}
              >
                {option.value}
              </button>
              <hr className="border-1 border-t border-navbarBlue" />
              <ul>
                {openDescriptionIndex === index && (
                  <Fragment>
                    <li className="mt-1 text-gray-600 py-3 px-4">
                      {option.description}
                    </li>
                    <hr className="border-[1px" />
                  </Fragment>
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center pb-4">
          <button
            onClick={() => router.push("/sales")}
            className="bg-[#0DAFBF] text-white text-[14px] px-6 py-1 rounded-2xl transform transition-transform duration-300 hover:-translate-y-1 hover:bg-[#0000EE]"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOption;
