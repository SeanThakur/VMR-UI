import React, { Fragment, useEffect, useState } from "react";
import RelatedReportItem from "./RelatedReportItem";
import { RelatedReportResponseDto } from "@/utils/data";
import axiosInstance from "@/utils/axiosInstance";
import axios from "axios";
import { toast } from "react-toastify";
import RelatedReportSkeletonItem from "./RelatedReportSkeletonItem";

const RelatedReports = () => {
  const [userRelatedReportData, setRelatedReportData] = useState<
    RelatedReportResponseDto[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);

  const relatedReportAPI = async () => {
    try {
      const respose = await axiosInstance.get("Related_reports.php");
      setRelatedReportData(respose.data.data || []);
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
      setRelatedReportData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    relatedReportAPI();
  }, []);

  return (
    <Fragment>
      <div className="text-[26px] text-black leading-[30px] font-light font-roboto mb-6 text-left uppercase">
        RELATED REPORTS
      </div>
      {loading ? (
        <div className="flex flex-wrap gap-6 sm:gap-14">
          {[1, 2, 3, 4, 5].map((_, idx) => (
            <RelatedReportSkeletonItem key={idx} />
          ))}
        </div>
      ) : (
        <Fragment>
          {userRelatedReportData.length === 0 ? (
            <div className="rounded-[10px] mt-8 shadow-related-report bg-filter-gradient height-fill-available h-[200px] text-[24px] font-roboto font-normal text-white flex items-center justify-center">
              There is no Related Reports!
            </div>
          ) : (
            <div className="relative w-full bg-[#0DAFBF1A] shadow-related-report rounded-lg overflow-x-auto flex space-x-4 sm:space-x-8 px-2 sm:px-4 pt-2">
              {userRelatedReportData.map((data) => (
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
