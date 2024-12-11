import axiosInstance from "@/utils/axiosInstance";
import { CategoriesFilterType, CategoriesSubFilterType } from "@/utils/data";
import axios from "axios";
import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";
import FilterTabSkeleton from "./FilterTabSkeleton";

interface CategoriesFilterTabsInterface {
  data: CategoriesFilterType[];
}

const CategoriesFilterTabs: React.FC<CategoriesFilterTabsInterface> = ({
  data,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [subCategories, setSubCategories] = useState<CategoriesSubFilterType[]>(
    []
  );
  const [activeSubCategories, setActiveSubCategories] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onFilterTabClick = (tab: string) => {
    setLoading(true);
    setActiveFilter(tab);
    getSubCategories(tab);
  };

  const onSubFilterSelect = (tab: string) => {
    setActiveSubCategories(tab);
  };

  const getSubCategories = async (tab: string) => {
    try {
      const response = await axiosInstance.get("subcategory_list.php", {
        params: {
          category: tab,
        },
      });
      setSubCategories(response.data.data || []);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error?.response?.data?.status_message ||
          "An unexpected error occurred.";
        toast.warning(errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setSubCategories([]);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="flex overflow-x-auto gap-x-1 justify-center lg:justify-start gap-y-4 md:space-x-6 py-8 w-full">
        {data.map((tab) => (
          <a
            key={tab.category_main}
            className={`text-center flex items-center justify-center max-w-fit h-[40px] rounded-[10px] font-medium font-roboto text-[16px] leading-[18px] px-4 py-2 cursor-pointer whitespace-nowrap text-ellipsis ${
              activeFilter === tab.category_main
                ? "bg-categories-filter-gradient text-white"
                : " text-black border border-[#CFCFD1]"
            }`}
            onClick={() => onFilterTabClick(tab.category_main)}
            title={tab.category_main}
          >
            {tab.category_main}
          </a>
        ))}
      </div>
      {loading ? (
        <div className="flex overflow-x-auto gap-x-1 ">
          {[1, 2, 3, 4, 5].map((_, idx) => (
            <FilterTabSkeleton key={idx} />
          ))}
        </div>
      ) : (
        subCategories.length > 0 && (
          <div className="flex overflow-x-auto gap-x-1 justify-center lg:justify-start gap-y-4 md:space-x-6 pb-8 w-full">
            {subCategories.map((tab) => (
              <a
                key={tab.category_sub}
                className={`text-center flex items-center justify-center max-w-fit h-[40px] rounded-[10px] font-medium font-roboto text-[16px] leading-[18px] px-4 py-2 cursor-pointer whitespace-nowrap text-ellipsis ${
                  activeSubCategories === tab.category_sub
                    ? "bg-categories-filter-gradient text-white"
                    : " text-black border border-[#CFCFD1]"
                }`}
                onClick={() => onSubFilterSelect(tab.category_sub)}
                title={tab.category_sub}
              >
                {tab.category_sub}
              </a>
            ))}
          </div>
        )
      )}
    </Fragment>
  );
};

export default CategoriesFilterTabs;
