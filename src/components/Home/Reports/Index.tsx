import React, { useState } from "react";
import SecondaryInput from "../../SecondaryInput";
import SavedReports from "./SavedReports/Index";
import RelatedReports from "./RelatedReports";
import VMRNexus from "./VmrNexus/Index";
import Categories from "./Categories/Index";
import { useAuthStore } from "@/store/useAuthStore";
// import axiosInstance from "@/utils/axiosInstance";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { UserReportType } from "@/utils/data";

const Reports = () => {
  const [searchReport, setSearchReport] = useState<string>("");
  const { name } = useAuthStore();
  // const [debouncedSearch, setDebouncedSearch] = useState<string>(searchReport);
  // const [searchLoading, setSearchLoading] = useState<boolean>(false);
  // const [searchData, setSearchData] = useState<UserReportType[]>([]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setDebouncedSearch(searchReport);
  //   }, 500);

  //   return () => clearTimeout(timer);
  // }, [searchReport]);

  // const searchUserReport = useCallback(async () => {
  //   if (debouncedSearch.trim() === "") return;
  //   setSearchLoading(true);
  //   try {
  //     const response = await axiosInstance.get("search_user_reports.php", {
  //       params: {
  //         keyword: debouncedSearch,
  //       },
  //     });
  //     setSearchData(response.data.data || []);
  //   } catch (error) {
  //     if (axios.isAxiosError(error)) {
  //       const errorMessage =
  //         error?.response?.data?.status_message ||
  //         "An unexpected error occurred.";
  //       toast.warning(errorMessage, {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: true,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //       setSearchData([]);
  //     }
  //   } finally {
  //     setSearchLoading(false);
  //   }
  // }, [debouncedSearch]);

  // useEffect(() => {
  //   searchUserReport();
  // }, [debouncedSearch, searchUserReport]);

  return (
    <div className="bg-white min-h-screen pt-8 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div className="text-black font-roboto text-[24px] font-medium mb-4 sm:mb-0">
          <span className="text-navbarBlue">Hi, {name}</span>
          <p>Purchased / Requested / Saved Reports</p>
        </div>
        <div className="w-full sm:w-auto">
          <SecondaryInput
            label="Search Report"
            inputValue={searchReport}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchReport(e.target.value)
            }
          />
        </div>
      </div>
      <SavedReports />
      <VMRNexus />
      <RelatedReports />
      <Categories />
    </div>
  );
};

export default Reports;
