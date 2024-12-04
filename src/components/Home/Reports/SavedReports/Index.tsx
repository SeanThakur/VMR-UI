import React, { Fragment } from "react";
import SavedReportItem from "./SavedReportItem";
import Image from "next/image";
import SavedReportSkeletonItem from "./SavedReportSkeletonItem";
import { UserReportType } from "@/utils/data";

interface SavedReportInterface {
  loading: boolean;
  userReportData: UserReportType[];
  paginate: { start: number; end: number };
  isForward: boolean;
  reportPagnination: () => void;
}

const SavedReports: React.FC<SavedReportInterface> = ({
  loading,
  userReportData,
  paginate,
  isForward,
  reportPagnination,
}) => {
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
          {userReportData.length === 0 && (
            <div className="rounded-[10px] mt-8 shadow-related-report bg-filter-gradient height-fill-available h-[200px] text-[24px] font-roboto font-normal text-white flex items-center justify-center">
              There is no Saved Reports
            </div>
          )}
          <div className="flex flex-wrap gap-6 md:gap-24 mt-3 mb-5 justify-start">
            {userReportData.length > 0 &&
              userReportData
                ?.slice(paginate.start, paginate.end)
                .map((user) => (
                  <SavedReportItem
                    key={user.ur_report_id}
                    image={user.image}
                    title={user.ur_report_name}
                    chipText={user.chipText}
                  />
                ))}
          </div>
          {userReportData?.length > 4 && (
            <div
              onClick={reportPagnination}
              className={`w-[18px] h-[18px] mr-2 mt-3 sm:mt-0 cursor-pointer hidden md:block ${
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
          )}
        </div>
      )}
    </Fragment>
  );
};

export default SavedReports;
