import React, { Fragment, useCallback, useEffect, useState } from "react";
import RelatedReportItem from "./RelatedReportItem";
import { RelatedReportResponseDto } from "@/utils/data";
import axiosInstance from "@/utils/axiosInstance";
import axios from "axios";
import { toast } from "react-toastify";
import RelatedReportSkeletonItem from "./RelatedReportSkeletonItem";
import SecondaryInput from "@/components/SecondaryInput";

const RelatedReports = () => {
  const [userRelatedReportData, setRelatedReportData] = useState<
    RelatedReportResponseDto[]
  >([]);
  const [userFilterRelatedReportData, setFilterRelatedReportData] = useState<
    RelatedReportResponseDto[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchReport, setSearchReport] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>(searchReport);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchReport);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchReport]);

  const searchUserReport = useCallback(async () => {
    if (debouncedSearch.trim() === "") {
      setFilterRelatedReportData(userRelatedReportData);
    } else {
      setLoading(true);
      try {
        const response = await axiosInstance.get("Related_reports.php", {
          params: {
            search: debouncedSearch,
          },
        });
        setFilterRelatedReportData(response.data.data || []);
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
          setFilterRelatedReportData([]);
        }
      } finally {
        setLoading(false);
      }
    }
  }, [debouncedSearch, userRelatedReportData]);

  const relatedReportAPI = async () => {
    try {
      const respose = await axiosInstance.get("Related_reports.php");
      setRelatedReportData(respose.data.data || []);
      setFilterRelatedReportData(respose.data.data || []);
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
      setFilterRelatedReportData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    relatedReportAPI();
  }, []);

  useEffect(() => {
    searchUserReport();
  }, [debouncedSearch, searchUserReport]);

  return (
    <Fragment>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
        <div className="text-[26px] text-black leading-[30px] font-light font-roboto mb-6 text-left uppercase">
          RELATED REPORTS
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
      {loading ? (
        <div className="flex flex-wrap gap-6 sm:gap-14">
          {[1, 2, 3, 4, 5].map((_, idx) => (
            <RelatedReportSkeletonItem key={idx} />
          ))}
        </div>
      ) : (
        <Fragment>
          {userFilterRelatedReportData.length === 0 ? (
            <div className="rounded-[10px] mt-8 shadow-related-report bg-filter-gradient height-fill-available h-[200px] text-[24px] font-roboto font-normal text-white flex items-center justify-center">
              There is no Related Reports!
            </div>
          ) : (
            <div className="relative w-full bg-[#0DAFBF1A] shadow-related-report rounded-lg overflow-x-auto flex space-x-4 sm:space-x-8 px-2 sm:px-4 pt-2">
              {userFilterRelatedReportData.map((data) => (
                <RelatedReportItem
                  key={data.r_no}
                  image={data.image}
                  title={data.r_name}
                />
              ))}
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default RelatedReports;
