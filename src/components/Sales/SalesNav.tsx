"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const SalesNav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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

        <div className="flex items-center space-x-4">
          <button className=" hidden md:inline bg-teal-500 text-white text-[12px] px-3 py-1 rounded-5px hover:bg-teal-600 transition duration-300">
            SUBSCRIBE
          </button>

          {/* Menu for mobile */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={toggleMenu}
          >
            {menuOpen ? <IoClose /> : <FaBars />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalesNav;
