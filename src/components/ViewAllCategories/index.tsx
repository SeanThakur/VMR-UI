import React, { Fragment, useEffect, useState } from "react";
import CategoriesFilterTabs from "./FilterTabs";
import { CategoriesFilterType, CategoriesType } from "@/utils/data";
import Image from "next/image";
import axiosInstance from "@/utils/axiosInstance";
import axios from "axios";
import { toast } from "react-toastify";
import CategoriesSkeletonItem from "./CategoriesSkeletonItem";

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState<CategoriesType[]>([]);
  const [categoriesFilterData, setCategoriesFilterData] = useState<
    CategoriesFilterType[]
  >([{ category_main: "All" }]);
  const [loading, setLoading] = useState<boolean>(true);

  const getCategoriesAPI = async () => {
    try {
      const respose = await axiosInstance.get("category.php");
      setCategoriesData(respose.data.data || []);
      respose.data.data.forEach((el: CategoriesType) => {
        setCategoriesFilterData(
          (data) => [...data, { category_main: el.category_main }] || []
        );
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error?.response?.data?.status_message ||
          "An unexpected error occurred, please try again later";
        toast.warning(errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      setCategoriesData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategoriesAPI();
  }, []);
  return (
    <div className="bg-white min-h-screen pt-8 px-4 sm:px-8 lg:px-16">
      <p className="text-black font-roboto font-medium text-[32px] leading-[37.5px]">
        Categories
      </p>
      <CategoriesFilterTabs data={categoriesFilterData} />
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-6">
          {Array(8)
            .fill(false)
            .map((_, idx) => (
              <CategoriesSkeletonItem key={idx} />
            ))}
        </div>
      ) : (
        <Fragment>
          {categoriesData.length === 0 ? (
            <div className="rounded-[10px] mt-8 shadow-related-report bg-filter-gradient height-fill-available h-[200px] text-[24px] font-roboto font-normal text-white flex items-center justify-center">
              There is no categories
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
              {categoriesData.map((item, idx) => (
                <div
                  className="flex justify-center items-center cursor-pointer transform transition-transform duration-300 hover:-translate-y-2"
                  key={idx}
                >
                  <div className="rounded-[20px] w-[350px] h-[300px] border border-[#CFCFD1]">
                    <div className="relative h-[260px]">
                      <Image
                        src={item.category_image}
                        alt="cover"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-tl-[20px] rounded-tr-[20px]"
                      />
                    </div>
                    <p className="text-black font-roboto font-normal text-[16px] text-left px-4 py-2 leading-[18px] line-clamp-1 overflow-hidden">
                      {item.category_main}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default Categories;
