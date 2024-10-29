import { useState } from "react";
import ReportLicense from "./ReportLicense";
import BundledLicense from "./BundledLicense";
import ConsultingLicense from "./ConsultingLicense";

type TabNames = "1-Report License" | "Bundled License" | "Consulting License";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("1-Report License");

  const tabs = ["1-Report License", "Bundled License", "Consulting License"];

  const componentMapping: Record<TabNames, JSX.Element> = {
    "1-Report License": <ReportLicense />,
    "Bundled License": <BundledLicense />,
    "Consulting License": <ConsultingLicense />,
  };

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex justify-center gap-4 w-full bg-[#0DAFBF] pt-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 lg:px-6 py-1 lg:py-2 transition-all duration-300 w-[200px] lg:w-[400px] ${
              activeTab === tab
                ? "bg-white rounded-t-[12px] font-inter text-black font-medium text-[16px] lg:text-[24px] leading-[29px]"
                : "text-white font-bold text-[16px] lg:text-[24px] leading-[29px]"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-24 bg-white">
        <div className="flex justify-center items-end">
          {componentMapping[activeTab as TabNames]}
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
