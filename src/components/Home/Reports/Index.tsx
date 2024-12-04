import React, { useCallback, useEffect, useState } from "react";
import SecondaryInput from "../../SecondaryInput";
import SavedReports from "./SavedReports/Index";
import RelatedReports from "./RelatedReports";
import VMRNexus from "./VmrNexus/Index";
import Categories from "./Categories/Index";
import { useAuthStore } from "@/store/useAuthStore";
import axiosInstance from "@/utils/axiosInstance";
import axios from "axios";
import { toast } from "react-toastify";
import { UserReportType } from "@/utils/data";

const Reports = () => {
  const [searchReport, setSearchReport] = useState<string>("");
  const { name } = useAuthStore();
  const [debouncedSearch, setDebouncedSearch] = useState<string>(searchReport);
  const [originalUserReportData, setOriginalUserReportData] = useState<
    UserReportType[]
  >([]);
  const [filteredUserReportData, setFilteredUserReportData] = useState<
    UserReportType[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [paginate, setPaginate] = useState<{ start: number; end: number }>({
    start: 0,
    end: 5,
  });
  const [isForward, setIsForward] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchReport);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchReport]);

  const searchUserReport = useCallback(async () => {
    if (debouncedSearch.trim() === "") {
      setFilteredUserReportData(originalUserReportData);
    } else {
      setLoading(true);
      try {
        const response = await axiosInstance.get("users_report.php", {
          params: {
            keyword: debouncedSearch,
          },
        });
        setFilteredUserReportData(response.data.data || []);
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
          setFilteredUserReportData([]);
        }
      } finally {
        setLoading(false);
      }
    }
  }, [debouncedSearch, originalUserReportData]);

  const usersReportAPI = async () => {
    try {
      const response = await axiosInstance.get("users_report.php");
      const data = response.data.data || [];
      setOriginalUserReportData(data);
      setFilteredUserReportData(data);
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
      }
      setFilteredUserReportData([]);
    } finally {
      setLoading(false);
    }
  };

  const reportPagnination = () => {
    const totalData = filteredUserReportData.length;

    if (isForward) {
      const newStart = paginate.start + 5;
      const newEnd = paginate.end + 5;

      if (newEnd >= totalData) {
        setIsForward(false);
      }

      setPaginate({
        start: newStart,
        end: Math.min(newEnd, totalData),
      });
    } else {
      const newStart = Math.max(0, paginate.start - 5);
      const newEnd = Math.max(5, paginate.end - 5);

      if (newStart === 0) {
        setIsForward(true);
      }

      setPaginate({
        start: newStart,
        end: newEnd,
      });
    }
  };

  useEffect(() => {
    usersReportAPI();
  }, []);

  useEffect(() => {
    searchUserReport();
  }, [debouncedSearch, searchUserReport]);

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
      <SavedReports
        loading={loading}
        isForward={isForward}
        paginate={paginate}
        reportPagnination={reportPagnination}
        userReportData={filteredUserReportData}
      />
      <VMRNexus />
      <RelatedReports />
      <Categories />
    </div>
  );
};

export default Reports;
