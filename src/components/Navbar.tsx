"use client";

import { useTabStore } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBell, FaSlidersH, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { activeTab, setActiveTab } = useTabStore();

  const tabs = [
    { label: "Reports" },
    { label: "Insights" },
    { label: "Organizations" },
    { label: "Consultations" },
  ];

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

      {/* Bottom Navigation (hidden on mobile, shows in menu) */}
      <div className="relative bg-white md:flex justify-between items-center px-4 md:px-0 hidden shadow-lg shadow-gray-300">
        <div className="flex space-x-4 md:space-x-8 relative w-full">
          {tabs.map((tab) => (
            <a
              key={tab.label}
              className={`relative z-10 font-semibold px-8 py-2 cursor-pointer ${
                activeTab === tab.label
                  ? "bg-[#3B4ACC] text-white absolute inset-0 h-full z-0"
                  : "text-gray-700 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label}
            </a>
          ))}
        </div>

        {/* Right-side Icons */}
        <div className="flex space-x-4 text-blue-600 z-10 mr-8">
          <div className="w-[20px] h-[20px] mr-2 cursor-pointer">
            <Image
              src="/icons/preferences.svg"
              alt="preferences"
              width={20}
              height={20}
            />
          </div>
          <div className="w-[20px] h-[20px] mr-2 cursor-pointer">
            <Image
              src="/icons/notification-fill.svg"
              alt="notification"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-white md:hidden px-4 py-3 space-y-2 shadow-md">
          {tabs.map((tab) => (
            <a
              key={tab.label}
              className={`block text-gray-700 font-semibold hover:underline cursor-pointer`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label}
            </a>
          ))}

          <button className="block w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition duration-300 mt-2">
            SUBSCRIBE
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
