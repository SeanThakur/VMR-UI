"use client";

import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

const SalesNav: React.FC = () => {
  return (
    <div className="shadow-md">
      <div className="bg-[#3B4ACC] flex justify-between items-center px-4 md:px-6 py-3">
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link
            href={"/home"}
            className="relative w-24 h-10 md:w-28 md:h-12 lg:w-48 lg:h-14"
          >
            <Image
              src="/images/VMRWhiteLogo.png"
              alt="Logo"
              layout="fill"
              objectFit="contain"
              className="w-full h-full"
            />
          </Link>

          <div className="text-white hidden sm:block">
            <h1 className="text-[8px] font-semibold leading-tight uppercase mb-1">
              Industry Access:
            </h1>
            <p className="text-[12px] text-gray-200 leading-tight flex items-center">
              <span>Electronics & Semiconductors</span>
              <MdKeyboardArrowDown />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesNav;
