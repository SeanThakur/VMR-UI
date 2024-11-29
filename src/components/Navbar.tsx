"use client";

import { useTabStore } from "@/store/store";
import { useAuthStore } from "@/store/useAuthStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { logout } = useAuthStore();

  const { activeTab, setActiveTab } = useTabStore();

  const onLoggingOut = () => {
    logout();
    router.push("/");
  };

  const tabs = [
    { label: "Reports", route: "/home" },
    { label: "Insights", route: "/insights" },
    { label: "Organizations", route: "/home" },
    { label: "Consultations", route: "/home" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const onTabClick = (label: string, route: string) => {
    setActiveTab(label);
    router.push(route);
  };

  const onHomeLink = () => {
    setActiveTab("Reports");
    router.push("/home");
  };

  return (
    <div className="shadow-md">
      <div className="bg-navbar-gradient flex justify-between items-center px-4 md:px-8 md: py-5 py-3">
        <div className="flex items-center">
          <div
            onClick={onHomeLink}
            className="relative w-24 h-10 md:w-28 md:h-12 lg:w-[217px] lg:h-[48px]"
          >
            <Image
              src="/images/VMRNavbarLogo.png"
              alt="Logo"
              layout="fill"
              objectFit="contain"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden md:flex flex flex-row items-center bg-[#05B3C0] text-white text-[14px] font-roboto font-medium leading-[16px] px-[20px] py-[10px] rounded-5px hover:bg-teal-600 transition duration-300">
            <div className="w-[18px] h-[18px] mr-2">
              <Image
                src="/icons/add-solid.svg"
                alt="subscribe"
                width={18}
                height={18}
              />
            </div>
            SUBSCRIBE
          </button>
          <button
            onClick={onLoggingOut}
            className="text-white bg-[#0DAFBF]  px-4 py-1 text-[14px] px-3 py-1 rounded-5px font-roboto-condensed transform transition-transform duration-300 hover:-translate-y-1 hover:bg-[#0000EE]"
          >
            Logout
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
      <div className="relative bg-black shadow-table-content md:flex justify-between items-center px-4 md:px-0 hidden">
        <div className="flex space-x-4 md:space-x-8 py-5 px-4 relative w-full">
          {tabs.map((tab) => (
            <a
              key={tab.label}
              className={`relative z-10 font-medium font-roboto text-[20px] leading-[23px] px-8 py-2 cursor-pointer ${
                activeTab === tab.label
                  ? "bg-tab-button-gradient rounded-[8px] text-white absolute inset-0 h-full z-0"
                  : "text-white hover:text-[#05B3C0]"
              }`}
              onClick={() => onTabClick(tab.label, tab.route)}
            >
              {tab.label}
            </a>
          ))}
        </div>

        {/* Right-side Icons */}
        <div className="flex space-x-6 z-10 mr-8">
          <div className="w-[21px] h-[31px] mr-2 cursor-pointer">
            <Image
              src="/icons/preferences-white.svg"
              alt="preferences"
              width={20}
              height={20}
            />
          </div>
          <div className="w-[21px] h-[26px] cursor-pointer">
            <Image
              src="/icons/notification-white.svg"
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
              onClick={() => onTabClick(tab.label, tab.route)}
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
