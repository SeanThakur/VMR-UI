"use client";

import Image from "next/image";
import { useState } from "react";
import { FaBell, FaSlidersH, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface Tab {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("Reports");

  const tabs: Tab[] = [
    {
      label: "Reports",
      isActive: activeTab === "Reports",
      onClick: () => setActiveTab("Reports"),
    },
    {
      label: "Insights",
      isActive: activeTab === "Insights",
      onClick: () => setActiveTab("Insights"),
    },
    {
      label: "Organizations",
      isActive: activeTab === "Organizations",
      onClick: () => setActiveTab("Organizations"),
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="shadow-md">
      <div className="bg-blue-600 flex justify-between items-center px-4 md:px-6 py-3">
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="relative w-24 h-10 md:w-28 md:h-12 lg:w-32 lg:h-14">
            <Image
              src="/images/VMRWhiteLogo.png"
              alt="Logo"
              layout="fill"
              objectFit="contain"
              className="w-full h-full"
            />
          </div>

          <div className="text-white hidden sm:block">
            <h1 className="text-[10px] font-semibold leading-tight">
              VERIFIED MARKET RESEARCH
            </h1>
            <p className="text-[12px] text-gray-200 leading-tight">
              Industry Access:{" "}
              <span className="underline">Electronics & Semiconductors</span>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden md:inline bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300">
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
      <div className="bg-white md:flex justify-between items-center px-4 md:px-6 py-3 hidden">
        <div className="flex space-x-4 md:space-x-8">
          {tabs.map((tab) => (
            <a
              key={tab.label}
              href="#"
              className={`font-semibold ${
                tab.isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
              onClick={tab.onClick}
            >
              {tab.label}
            </a>
          ))}
        </div>

        {/* Right-side Icons */}
        <div className="flex space-x-4 text-blue-600">
          <FaSlidersH className="text-xl cursor-pointer" />
          <FaBell className="text-xl cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-white md:hidden px-4 py-3 space-y-2 shadow-md">
          <a
            href="#"
            className="block text-gray-700 font-semibold hover:underline"
          >
            Reports
          </a>
          <a
            href="#"
            className="block text-gray-700 font-semibold hover:underline"
          >
            Insights
          </a>
          <a
            href="#"
            className="block text-gray-700 font-semibold hover:underline"
          >
            Organizations
          </a>
          <a
            href="#"
            className="block text-gray-700 font-semibold hover:underline"
          >
            Consultations <span className="ml-1">&#9662;</span>
          </a>

          <button className="block w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition duration-300 mt-2">
            SUBSCRIBE
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
