"use client";

import { useTabStore } from "@/store/store";
import { useAuthStore } from "@/store/useAuthStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdKeyboardArrowDown } from "react-icons/md";

const SalesNav: React.FC = () => {
  const { logout } = useAuthStore();
  const router = useRouter();

  const { setActiveTab, selectBook, selectPdfViewer, selectCategoriesListing } =
    useTabStore();

  const onLoggingOut = () => {
    logout();
    router.push("/");
  };

  const onHomeLink = () => {
    selectPdfViewer(false);
    selectCategoriesListing(false);
    selectBook(false);
    setActiveTab("Reports");
    router.push("/home");
  };

  return (
    <div className="shadow-md">
      <div className="bg-[#3B4ACC] flex justify-between items-center px-4 md:px-6 py-3">
        <div className="flex items-center space-x-4 md:space-x-6">
          <div
            onClick={onHomeLink}
            className="relative w-24 h-10 md:w-28 md:h-12 lg:w-48 lg:h-14"
          >
            <Image
              src="/images/VMRWhiteLogo.png"
              alt="Logo"
              layout="fill"
              objectFit="contain"
              className="w-full h-full"
            />
          </div>

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
        <button
          onClick={onLoggingOut}
          className="text-white bg-[#0DAFBF]  px-4 py-1 text-[14px] px-3 py-1 rounded-5px font-roboto-condensed transform transition-transform duration-300 hover:-translate-y-1 hover:bg-[#0000EE]"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SalesNav;
