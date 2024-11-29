import React, { Fragment, useEffect, useState } from "react";
import SavedReportItem from "./SavedReportItem";
import Image from "next/image";
import axiosInstance from "@/utils/axiosInstance";
import { UserReportType } from "@/utils/data";
import SavedReportSkeletonItem from "./SavedReportSkeletonItem";
import axios from "axios";
import { toast } from "react-toastify";

const SavedReports = () => {
  const [userReportData, setUserReportData] = useState<UserReportType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [paginate, setPaginate] = useState<{ start: number; end: number }>({
    start: 0,
    end: 5,
  });
  const [isForward, setIsForward] = useState<boolean>(true);

  const usersReportAPI = async () => {
    try {
      const respose = await axiosInstance.get("users_report.php");
      setUserReportData(respose.data.data);
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
    } finally {
      setLoading(false);
    }
  };

  const reportPagnination = () => {
    const totalData = userReportData.length;

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

  return (
    <Fragment>
      {loading ? (
        <div className="flex flex-wrap gap-6 sm:gap-14">
          {[1, 2, 3, 4, 5].map((_, idx) => (
            <SavedReportSkeletonItem key={idx} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row sm:justify-between items-center">
          <div className="flex flex-wrap gap-6 md:gap-24 mt-3 mb-5 justify-start">
            {userReportData?.slice(paginate.start, paginate.end).map((user) => (
              <SavedReportItem
                key={user.ur_report_id}
                image={user.image}
                title={user.ur_report_name}
                chipText={user.chipText}
              />
            ))}
          </div>
          <div
            onClick={reportPagnination}
            className={`w-[16px] h-[16px] mr-2 mt-3 sm:mt-0 cursor-pointer hidden md:block ${
              isForward ? "transform rotate-0" : "transform rotate-180"
            }`}
          >
            <Image
              src="/icons/out_arrow-right.svg"
              alt="arrow-right"
              width={16}
              height={16}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default SavedReports;
